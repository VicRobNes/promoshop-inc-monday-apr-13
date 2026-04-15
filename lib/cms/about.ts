// About page content. Edited via the upcoming admin dashboard.
//
// Body copy is the verbatim boilerplate Abigail pasted in her Apr 14 staging
// review email. The hero image points at the storefront shot in the
// VicRobNes/mainmemory repo (11.png) via raw.githubusercontent.com. The
// domain is allow-listed in next.config.mjs so next/image can serve it.
const MAINMEMORY_RAW = "https://raw.githubusercontent.com/VicRobNes/mainmemory/main"

export const ABOUT_CONTENT = {
  hero: {
    eyebrow: "About Us",
    heading: "Meet PromoShop",
    // Best-guess storefront image from Abigail's updated set — if she flags a
    // different file in the Apr 15 review call, just swap the filename here.
    image: `${MAINMEMORY_RAW}/11.png`,
    imageAlt: "Outside of the PromoShop building",
    body: [
      "Promoshop Canada Ltd. is a Top 40 Promotional Merchandise Company in North America, with corporate head offices in Windsor, Ontario and Los Angeles, California. With more than 28 years in business and over $70 million in annual revenue, Promoshop ranks in the Top 1% of promotional merchandise companies across North America.",
      "We partner with some of the most recognizable global brands to create Memorable Merchandise Experiences. Through our extensive vendor network and access to premium retail brands, we help High-Level Organizations deliver merchandise that stands out and stands the test of time.",
      "Whether supporting a national rollout, a luxury gifting initiative, or a curated company apparel program. Our team manages every detail from concept to completion.",
    ],
  },
}
