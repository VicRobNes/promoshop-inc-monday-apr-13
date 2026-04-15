export interface TeamMember {
  name: string
  role: string
  description: string
  imagePath?: string
}

// Edited via the upcoming admin dashboard. Shared by the Home and About pages
// so both always render the same roster.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Phil Duym",
    role: "Owner & President",
    description: "Leading PromoShop's vision for premium branded merchandise.",
  },
  {
    name: "Amy Duquette",
    role: "Account Executive",
    description: "Dedicated to delivering exceptional client experiences.",
  },
  {
    name: "Ania Wlodarkiewicz",
    role: "Account Executive",
    description: "Helping brands find the perfect promotional products.",
  },
  {
    name: "Alex Cyrenne",
    role: "Account Executive",
    description: "Building lasting partnerships with our clients.",
  },
]
