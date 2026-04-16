import { HOME_CONTENT } from "@/lib/cms/home"
import { ABOUT_CONTENT } from "@/lib/cms/about"
import { TEAM_MEMBERS } from "@/lib/cms/team"
import { BRANDS } from "@/lib/brands"

export interface ImageSlot {
  id: string
  label: string
  group: string
  defaultSrc: string
  hint?: string
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function teamImageId(name: string): string {
  return `team.${slugify(name)}`
}

export function brandLogoId(slug: string): string {
  return `brand.${slug}.logo`
}

function buildRegistry(): ImageSlot[] {
  const slots: ImageSlot[] = []

  slots.push({
    id: "site.logo",
    label: "Site logo (header & footer)",
    group: "Branding",
    defaultSrc: HOME_CONTENT.hero.logo,
    hint: "Appears in the top navigation and the footer.",
  })

  HOME_CONTENT.slideshow.forEach((_slide, i) => {
    slots.push({
      id: `home.slideshow.${i + 1}`,
      label: `Home slideshow — image ${i + 1}`,
      group: "Home page",
      // Slideshow frames intentionally render empty by default; admins opt in
      // to a custom image. Leaving defaultSrc empty keeps the preview honest.
      defaultSrc: "",
      hint: "Shows in the hero slideshow only when you set a custom image.",
    })
  })

  slots.push({
    id: "about.hero",
    label: "About page hero image",
    group: "About page",
    defaultSrc: ABOUT_CONTENT.hero.image,
    hint: "Large image on the About page hero.",
  })

  TEAM_MEMBERS.forEach((member) => {
    slots.push({
      id: teamImageId(member.name),
      label: `${member.name} — team photo`,
      group: "Team members",
      defaultSrc: member.imagePath ?? "",
      hint: member.role,
    })
  })

  BRANDS.forEach((brand) => {
    slots.push({
      id: brandLogoId(brand.slug),
      label: `${brand.name} — brand logo`,
      group: "Brand logos",
      defaultSrc: brand.logoUrl ?? "",
      hint: brand.featured ? "Featured brand" : undefined,
    })
  })

  return slots
}

export const IMAGE_REGISTRY: ImageSlot[] = buildRegistry()

export const IMAGE_REGISTRY_BY_ID: Record<string, ImageSlot> = IMAGE_REGISTRY.reduce(
  (acc, slot) => {
    acc[slot.id] = slot
    return acc
  },
  {} as Record<string, ImageSlot>,
)

export function getImageDefault(id: string): string {
  return IMAGE_REGISTRY_BY_ID[id]?.defaultSrc ?? ""
}
