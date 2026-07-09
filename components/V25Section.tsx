'use client'
import { useEffect, useMemo, useRef } from 'react'
import { highlightHtml } from '@/lib/highlight'

export default function V25Section({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const highlighted = useMemo(() => highlightHtml(html), [html])

  // dangerouslySetInnerHTML never executes embedded <script> tags (a browser
  // security quirk of setting innerHTML directly) — so any inline scripts in
  // the raw HTML (e.g. the document-overlay click handlers) would silently
  // never run, leaving onclick="..." calls throwing "not defined" errors.
  // Re-create each <script> node so the browser actually executes it.
  useEffect(() => {
    if (!ref.current) return
    const scripts = Array.from(ref.current.querySelectorAll('script'))
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value))
      newScript.text = oldScript.textContent || ''
      oldScript.parentNode?.replaceChild(newScript, oldScript)
    })
  }, [html])

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: highlighted }}
      style={{ width: '100%' }}
    />
  )
}
