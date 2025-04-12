export interface AudioSample {
  id: number
  title: string
  character: string
  project: string
  audioSrc: string
}

export const audioSamples: AudioSample[] = [
  {
    id: 1,
    title: "Creeping Jenny",
    character: "Main voice",
    project: "Narration",
    audioSrc: "/audio/creeping-jenny.wav",
  },
  {
    id: 2,
    title: "Whispers of the Void",
    character: "Eldritch Entity",
    project: "Cosmic Horror Chronicles",
    audioSrc: "/audio/creeping-jenny.wav",
  },
  {
    id: 3,
    title: "Battle Cry of the Fallen",
    character: "Knight Commander",
    project: "Eternal Darkness",
    audioSrc: "/audio/creeping-jenny.wav",
  },
  {
    id: 4,
    title: "Prophecy of the Ancient Ones",
    character: "Oracle Seer",
    project: "Forgotten Realms",
    audioSrc: "/audio/creeping-jenny.wav",
  },
]
