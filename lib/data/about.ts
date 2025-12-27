export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Santa Claus',
  description:
    "Santa Claus is a legendary gift-giver dedicated to spreading joy and cheer to children around the world. With over 200 years of experience delivering presents on Christmas Eve, he brings magic and wonder to families everywhere. Known for his jolly laugh and kind heart, Santa ensures every child's Christmas dreams come true.",
  image: 'https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=800&q=80',
  imageAlt: 'Santa Claus in his traditional red suit',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Santa Claus',
  paragraphs: [
    "Santa Claus is a legendary gift-giver dedicated to spreading joy and cheer to children around the world. With over 200 years of experience delivering presents on Christmas Eve, he brings magic and wonder to families everywhere. Living at the North Pole with Mrs. Claus and his team of industrious elves, Santa oversees the world's most magical toy workshop.",
    'Specializing in toy-making, list-checking, and reindeer navigation, Santa combines ancient Christmas magic with a compassionate approach to ensure every good child receives the perfect gift. His workshop operates year-round, with elves crafting toys and checking the Nice List twice.',
    'At the North Pole Workshop, every child receives personalized attention and their wishes are carefully considered. Santa and his team work tirelessly to support the spirit of Christmas and bring joy to hearts young and old across the globe.',
  ],
  image: 'https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=800&q=80',
  imageAlt: 'Santa Claus in his traditional red suit',
}
