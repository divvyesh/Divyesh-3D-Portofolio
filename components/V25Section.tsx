'use client'
import { useEffect, useRef } from 'react'

export default function V25Section({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)

  // Re-run any inline scripts that analytics blocks may need (none in our case)
  useEffect(() => {
    if (!ref.current) return
    // Ensure iframes inside get their src set (they load fine via dangerouslySetInnerHTML)
  }, [html])

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: '100%' }}
    />
  )
}
