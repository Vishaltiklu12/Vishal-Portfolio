export type Project = {
  id: string
  title: string
  year: string
  domain: string
  tagline: string
  summary: string
  tech: string[]
  problem: string
  architecture: string
  contributions: string[]
  highlights?: string[]
  links: {
    github?: string
    live?: string
  }
}
