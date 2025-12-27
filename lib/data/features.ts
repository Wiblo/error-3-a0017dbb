export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Magical Toy Workshop',
    description:
      'Our comprehensive workshop combines centuries-old toy-making techniques with Christmas magic to create perfect gifts for every child. Our skilled elves work year-round crafting personalized toys, ensuring each present brings maximum joy and wonder on Christmas morning.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    imageAlt: 'Christmas workshop with toys and decorations',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Flying Reindeer Fleet',
    description:
      'We utilize a team of nine magical reindeer led by Rudolph with his bright red nose to ensure timely delivery worldwide. Our sleigh technology is continuously updated with the latest in Christmas magic, allowing us to visit every home in a single night.',
    image: 'https://images.unsplash.com/photo-1543589923-e5e5d97dc3ff?w=800&q=80',
    imageAlt: 'Reindeer in snowy winter landscape',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Personalized Nice List',
    description:
      'Every child receives individualized attention with our advanced Nice List tracking system. We monitor good deeds year-round and create customized gift plans based on behavior, kindness, and Christmas spirit. Santa checks the list twice to ensure accuracy.',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
    imageAlt: 'Child writing Christmas wish list',
    imagePosition: 'right',
  },
]
