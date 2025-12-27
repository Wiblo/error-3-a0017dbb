export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface GalleryContent {
  title: string
  subtitle?: string
  items: GalleryItem[]
}

/**
 * Gallery section content
 * Update this to modify the gallery shown on the site
 */
export const galleryContent: GalleryContent = {
  title: 'Experience the Magic of Christmas',
  subtitle:
    'Take a peek at our enchanted workshop, cozy spaces, and festive wonderland designed for Christmas joy',
  items: [
    {
      id: 'gallery-1',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
      alt: 'Child writing Christmas wish list at cozy desk',
    },
    {
      id: 'gallery-2',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
      alt: 'Warm Christmas living room with fireplace and presents',
    },
    {
      id: 'gallery-3',
      image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&q=80',
      alt: 'Festive Christmas decorations and ornaments',
    },
    {
      id: 'gallery-4',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
      alt: 'Beautifully wrapped Christmas presents',
    },
    {
      id: 'gallery-5',
      image: 'https://images.unsplash.com/photo-1543589923-e5e5d97dc3ff?w=800&q=80',
      alt: 'Magical reindeer in snowy winter landscape',
    },
  ],
}

/**
 * Get all gallery items
 */
export function getGalleryItems(): GalleryItem[] {
  return galleryContent.items
}
