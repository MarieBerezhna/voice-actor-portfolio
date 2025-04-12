"use client"

import { useRef, useEffect } from "react"

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorRingRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"

        // Delayed follow for the ring
        setTimeout(() => {
          if (cursorRingRef.current) {
            cursorRingRef.current.style.left = e.clientX + "px"
            cursorRingRef.current.style.top = e.clientY + "px"
          }
        }, 100)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full bg-purple-500 pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorRingRef}
        className="fixed w-10 h-10 rounded-full border-2 border-purple-300 pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
