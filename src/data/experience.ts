export type ExperienceItem = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  highlights: string[]
  tech?: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Mphasis (HP Printers & Servers)',
    role: 'Associate Software Engineer',
    location: 'Bangalore, India',
    start: 'Jan 2022',
    end: 'Mar 2023',
    highlights: [
      'Built and maintained backend services supporting enterprise printer/server workflows.',
      'Developed REST APIs and service integrations; contributed to unit/integration testing and release readiness.',
      'Debugged production issues in Linux environments and collaborated across teams via Jira/ServiceNow.',
    ],
    tech: ['Go', 'REST APIs', 'Linux', 'Docker', 'Jira', 'ServiceNow', 'SQL'],
  },
  {
    company: 'Eduflex (ERP for Education)',
    role: 'Software Engineer II',
    location: 'Bangalore, India',
    start: 'Sep 2021',
    end: 'Dec 2021',
    highlights: [
      'Led UX/UI revamp from Figma/Adobe XD to implementation for improved usability and consistency.',
      'Built web modules and integrated backend logic; improved rendering performance (~20%) through UI/asset optimization.',
      'Worked in Agile delivery cycles using Git-based collaboration and clear handoffs.',
    ],
    tech: ['.NET', 'JavaScript', 'HTML/CSS', 'SQL/PLSQL', 'Figma'],
  },
]
