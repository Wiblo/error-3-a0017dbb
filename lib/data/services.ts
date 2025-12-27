import { Activity, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the practice
 * Update this array to add/modify services shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'nice-list-registration',
    slug: 'nice-list-registration',
    name: 'Nice List Registration',
    description:
      'Comprehensive first-time registration for children who want to join the Nice List. Includes thorough good deed assessment, wish list consultation, and personalized Christmas magic plan development.',
    duration: '60 min',
    price: 'Free with Cookies',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80',
    imageAlt: 'Decorated Christmas presents under the tree',
    icon: Activity,
    benefits: [
      'Complete behavior assessment',
      'Wish list consultation',
      'Personalized gift planning',
      'First Christmas magic experience',
    ],
    featured: true,
    shortDescription:
      'Your journey to Christmas magic begins with joining the Nice List',
    fullDescription:
      'During your Nice List registration, Santa conducts a thorough evaluation of your good deeds, kindness history, and Christmas spirit. This includes a detailed behavioral review, wish list analysis, and Christmas dream assessment.\n\nUsing centuries of gift-giving wisdom, we identify your perfect presents and develop a personalized Christmas magic plan tailored to your unique wishes. If appropriate, your first glimpse of Christmas magic may be experienced during this visit.',
    idealFor: [
      'New believers',
      'Good children',
      'Christmas enthusiasts',
      'Kind-hearted souls',
      'Holiday dreamers',
      'Magic seekers',
    ],
  },
  {
    id: 'christmas-spirit-boost',
    slug: 'christmas-spirit-boost',
    name: 'Christmas Spirit Boost',
    description:
      'Follow-up sessions to maintain your Christmas cheer, update your wish list, and receive additional holiday magic throughout the year.',
    duration: '30 min',
    price: '3 Candy Canes',
    image: 'https://images.unsplash.com/photo-1544272852-d790f6dd6053?w=800&q=80',
    imageAlt: 'Warm Christmas hot chocolate with marshmallows',
    icon: Zap,
    benefits: [
      'Nice List status check',
      'Wish list updates',
      'Christmas magic renewal',
      'Holiday spirit guidance',
    ],
    featured: true,
    shortDescription:
      'Ongoing sessions to maintain your Christmas magic and achieve your holiday dreams',
    fullDescription:
      'Christmas Spirit Boost sessions are essential for maintaining your holiday cheer and ensuring optimal Nice List standing. Each session includes a reassessment of your good deeds, updated wish list review, and additional Christmas magic as needed.\n\nSanta adjusts your gift plan based on your continued kindness, ensuring you stay on track for the best Christmas ever. These appointments also include guidance on spreading joy, helping others, and keeping the Christmas spirit alive all year long.',
    idealFor: [
      'Nice List members',
      'Holiday maintenance',
      'Christmas preparation',
      'Spirit management',
      'Magic optimization',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
