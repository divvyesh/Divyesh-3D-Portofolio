'use client'
import { useEffect, useRef } from 'react'

const TERMS = [
  'INSIGHT','COHORT','CLV','CHURN','RETENTION','SEGMENT',
  'CAUSAL','A/B','NPS','LTV','CAC','ARPU','p<0.05','R²',
  'ATTRIBUTION','LIFT','ROAS','CLUSTER','BAYES','CX',
  'GEO','SEO','AEO','LLM','CTR','dbt','SQL','PRICING',
  '306%','95% CI','$3.7T','FUNNEL','COHORT','DiD',
]

const PAL: [number,number,number][] = [
  [52,211,153],[124,92,255],[239,111,142],[155,124,255],[245,163,92],
]

type P = {x:number;y:number;vx:number;vy:number;r:number;ci:number;term:string|null;ph:number}

export default function AnimatedBackground() {
  const cv = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const el = cv.current; if (!el) return
    const ctx = el.getContext('2d')!
    let raf = 0, pts: P[] = [], W = 0, H = 0, t = 0
    const resize = () => {
      W = el.width = window.innerWidth; H = el.height = window.innerHeight
      const n = W < 768 ? 28 : Math.min(72, Math.floor(W / 17))
      pts = Array.from({length: n}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-.5)*.18, vy: (Math.random()-.5)*.18,
        r: Math.random()*2.2+1,
        ci: Math.floor(Math.random()*PAL.length),
        term: Math.random()<.25 ? TERMS[Math.floor(Math.random()*TERMS.length)] : null,
        ph: Math.random()*Math.PI*2,
      }))
    }
    const frame = () => {
      t++; ctx.clearRect(0,0,W,H)
      for (const p of pts) {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<-60)p.x=W+60; if(p.x>W+60)p.x=-60
        if(p.y<-60)p.y=H+60; if(p.y>H+60)p.y=-60
      }
      const MAXD = 140
      const clusters = new Map<number,{x:number;y:number;n:number;ci:number}>()
      for (let i=0; i<pts.length; i++) {
        const pi=pts[i]; let cn=1,cx=pi.x,cy=pi.y
        for (let j=i+1; j<pts.length; j++) {
          const pj=pts[j],dx=pi.x-pj.x,dy=pi.y-pj.y,d2=dx*dx+dy*dy
          if(d2>MAXD*MAXD) continue
          const d=Math.sqrt(d2),frac=1-d/MAXD; const [r,g,b]=PAL[pi.ci]
          ctx.beginPath(); ctx.moveTo(pi.x,pi.y); ctx.lineTo(pj.x,pj.y)
          ctx.strokeStyle=`rgba(${r},${g},${b},${frac*frac*.14})`
          ctx.lineWidth=frac*1.1; ctx.stroke()
          cx+=pj.x; cy+=pj.y; cn++
        }
        if(cn>=3) clusters.set(i,{x:cx/cn,y:cy/cn,n:cn,ci:pi.ci})
      }
      for (const c of Array.from(clusters.values())) {
        const [r,g,b]=PAL[c.ci],pulse=Math.sin(t*.014+c.x*.008)*.5+.5
        const br=42+c.n*11+pulse*16
        const g2=ctx.createRadialGradient(c.x,c.y,0,c.x,c.y,br)
        g2.addColorStop(0,`rgba(${r},${g},${b},${.05+pulse*.03})`)
        g2.addColorStop(.6,`rgba(${r},${g},${b},.015)`); g2.addColorStop(1,`rgba(${r},${g},${b},0)`)
        ctx.beginPath(); ctx.arc(c.x,c.y,br,0,Math.PI*2); ctx.fillStyle=g2; ctx.fill()
      }
      for (const p of pts) {
        const [r,g,b]=PAL[p.ci],pulse=Math.sin(t*.018+p.ph)*.5+.5,dr=p.r*(1+pulse*.28)
        const gh=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,dr*5)
        gh.addColorStop(0,`rgba(${r},${g},${b},.13)`); gh.addColorStop(1,`rgba(${r},${g},${b},0)`)
        ctx.beginPath(); ctx.arc(p.x,p.y,dr*5,0,Math.PI*2); ctx.fillStyle=gh; ctx.fill()
        ctx.beginPath(); ctx.arc(p.x,p.y,dr,0,Math.PI*2)
        ctx.fillStyle=`rgba(${r},${g},${b},.60)`; ctx.fill()
        if(p.term){
          ctx.font=`500 ${Math.round(8+p.r*1.5)}px "JetBrains Mono",monospace`
          ctx.fillStyle=`rgba(${r},${g},${b},${.09+pulse*.07})`
          ctx.fillText(p.term,p.x+dr+5,p.y+4)
        }
      }
      raf=requestAnimationFrame(frame)
    }
    resize(); frame()
    window.addEventListener('resize',resize)
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize)}
  },[])
  return <canvas ref={cv} aria-hidden="true" style={{position:'fixed',inset:0,width:'100vw',height:'100vh',pointerEvents:'none',zIndex:0}} />
}
