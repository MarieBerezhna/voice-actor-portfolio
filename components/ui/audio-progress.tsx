"use client"

import { Slider } from "@/components/ui/slider"

interface AudioProgressProps {
  currentTime: number
  duration: number
  handleSliderChange: (value: number[]) => void
}

export default function AudioProgress({ currentTime, duration, handleSliderChange }: AudioProgressProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="flex-1 space-y-1">
      <Slider
        value={[currentTime]}
        max={duration}
        step={0.1}
        onValueChange={handleSliderChange}
        className="cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}
