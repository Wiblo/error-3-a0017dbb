export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Ready to Join the Nice List?',
  description:
    'Experience the magic of Christmas tailored to your unique dreams and wishes. Santa Claus is here to help you achieve the most wonderful Christmas ever and spread joy throughout the year.',
  ctaText: 'Join the Nice List',
  ctaUrl: 'https://northpole.christmas/nice-list',
  backgroundImage: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80',
  backgroundImageAlt: 'Cozy Christmas scene with fireplace and presents',
}
