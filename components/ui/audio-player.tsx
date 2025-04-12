"use client"

import { useState, useRef, useEffect } from "react"
import { Howl } from "howler"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AudioControls from "./audio-controls"
import AudioProgress from "./audio-progress"
import VolumeControl from "./volume-control"

interface AudioPlayerProps {
  title: string
  character: string
  project: string
  audioSrc: string
}

export default function AudioPlayer({ title, character, project, audioSrc }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: [audioSrc],
      volume: volume,
      onend: () => {
        setPlaying(false)
        setCurrentTime(0)
      },
      onload: () => {
        if (soundRef.current) {
          setDuration(soundRef.current.duration())
        }
      },
    })

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [audioSrc])

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(muted ? 0 : volume)
    }
  }, [volume, muted])

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing && soundRef.current) {
        setCurrentTime(soundRef.current.seek())
      }
    }, 100)

    return () => clearInterval(interval)
  }, [playing])

  const togglePlay = () => {
    if (!soundRef.current) return

    if (playing) {
      soundRef.current.pause()
    } else {
      soundRef.current.play()
    }
    setPlaying(!playing)
  }

  const handleSliderChange = (value: number[]) => {
    if (!soundRef.current) return
    const newTime = value[0]
    soundRef.current.seek(newTime)
    setCurrentTime(newTime)
  }

  return (
    <Card className="w-full bg-gray-900 border-purple-900 hover:border-purple-700 transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="text-purple-300">{title}</CardTitle>
        <CardDescription className="text-gray-400">
          {character} • {project}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <AudioControls playing={playing} togglePlay={togglePlay} />
          <AudioProgress currentTime={currentTime} duration={duration} handleSliderChange={handleSliderChange} />
          <VolumeControl volume={volume} setVolume={setVolume} muted={muted} setMuted={setMuted} soundRef={soundRef} />
        </div>
      </CardContent>
    </Card>
  )
}
