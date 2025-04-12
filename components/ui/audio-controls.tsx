"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface AudioControlsProps {
  playing: boolean
  togglePlay: () => void
}

export default function AudioControls({ playing, togglePlay }: AudioControlsProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-purple-950 border-purple-800 hover:bg-purple-900 text-purple-300 transition-all duration-300 transform hover:scale-105"
      onClick={togglePlay}
    >
      {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
    </Button>
  )
}
