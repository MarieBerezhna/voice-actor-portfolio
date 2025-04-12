"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps extends React.ComponentProps<typeof Button> {
  hoverEffect?: "pulse" | "glow" | "scale" | "all"
}

export function EnhancedButton({ children, className, hoverEffect = "all", ...props }: EnhancedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300",
        "bg-gradient-to-r from-purple-700 to-indigo-600 text-white border-0",
        "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
        {
          "hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]": hoverEffect === "glow" || hoverEffect === "all",
          "hover:scale-105": hoverEffect === "scale" || hoverEffect === "all",
          "animate-pulse": isHovered && (hoverEffect === "pulse" || hoverEffect === "all"),
        },
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 transition-opacity duration-300",
          { "opacity-100": isHovered },
        )}
      />
    </Button>
  )
}
