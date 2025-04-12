export interface Project {
  id: number
  title: string
  role: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Realm of Shadows",
    role: "Lead Voice Actor",
    description: "A dark fantasy audio drama set in a world consumed by eternal night.",
    image: "/images/project-background-placeholder.jpg",
  },
  {
    id: 2,
    title: "Cosmic Horror Chronicles",
    role: "Voice Actor",
    description: "An anthology series exploring the terrors that lurk beyond the veil of reality.",
    image: "/images/project-background-placeholder.jpg",
  },
  {
    id: 3,
    title: "Eternal Darkness",
    role: "Character Performer",
    description: "A fantasy RPG featuring a rich cast of characters in a world on the brink of destruction.",
    image: "/images/project-background-placeholder.jpg",
  },
]
