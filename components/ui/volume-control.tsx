"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Volume2, VolumeX } from "lucide-react"
import type { Howl } from "howler"

interface VolumeControlProps {
  volume: number
  setVolume: (volume: number) => void
  muted: boolean
  setMuted: (muted: boolean) => void
  soundRef: React.RefObject<Howl | null>
}

export default function VolumeControl({ volume, setVolume, muted, setMuted, soundRef }: VolumeControlProps) {
  const handleVolumeChange = (value: number[]) => {
    if (!soundRef.current) return

    const newVolume = value[0]
    setVolume(newVolume)
    if (!muted) {
      soundRef.current.volume(newVolume)
    }
  }

  const toggleMute = () => {
    if (!soundRef.current) return

    setMuted(!muted)
    soundRef.current.volume(muted ? volume : 0)
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        className="text-purple-300 hover:text-purple-100 hover:bg-purple-900"
        onClick={toggleMute}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
      <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-20 cursor-pointer" />
    </div>
  )
}
