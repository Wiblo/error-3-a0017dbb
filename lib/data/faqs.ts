export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'first-visit',
    question: 'What should I expect on my first visit to the North Pole?',
    answer:
      "Your initial visit includes meeting Santa, a thorough review of your good deeds, and a personalized wish list consultation. We'll discuss your Christmas dreams and create a customized gift plan. The first visit typically includes hot cocoa and cookies, and lasts about an hour to ensure we understand your wishes completely. Follow-up visits are 30 minutes.",
  },
  {
    id: 'nice-list',
    question: 'How do I get on the Nice List?',
    answer:
      'Getting on the Nice List is simple! Be kind to others, help your family, do good deeds, and spread Christmas cheer throughout the year. Santa and his elves monitor behavior year-round. Even small acts of kindness count toward Nice List status. Remember, it\'s never too late to start being nice!',
  },
  {
    id: 'painful',
    question: 'Does Santa really deliver to every house in one night?',
    answer:
      "Yes! With Christmas magic, nine flying reindeer, and centuries of experience, Santa visits every good child's home on Christmas Eve. The sleigh travels faster than the speed of light and can stop time in small bursts. Plus, Santa's magic allows him to fit down any chimney, no matter how small!",
  },
  {
    id: 'sessions',
    question: 'How many times can I update my wish list?',
    answer:
      "You can update your wish list as many times as you'd like before December 20th, when the list is finalized. However, remember that being greedy might affect your Nice List status. Santa recommends keeping your list reasonable and thinking of others. You can submit updates through our online portal or by sending letters to the North Pole.",
  },
  {
    id: 'pets',
    question: 'Does Santa deliver presents to pets?',
    answer:
      'Absolutely! Santa loves all animals and has a special elf division dedicated to pet gifts. Well-behaved pets who bring joy to their families receive special treats and toys. Just include your pet\'s name on your wish list along with what kind of gift they might enjoy.',
  },
  {
    id: 'children',
    question: 'At what age do children stop receiving gifts from Santa?',
    answer:
      'The magic of Christmas never ends! As long as you believe in the spirit of Christmas and keep kindness in your heart, you\'re never too old for Christmas magic. Many adults continue to experience the joy of giving and receiving through the Christmas spirit Santa represents.',
  },
  {
    id: 'appointment',
    question: 'How do I schedule a visit with Santa?',
    answer:
      'You can schedule a visit through our online Nice List registration system, call us at (555) HO-HO-HO, or send a letter to 1 Candy Cane Lane, North Pole, AK 99705. We offer flexible visiting hours 6 days a week. During the busy Christmas season (November-December), appointments fill quickly so book early!',
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear when visiting the North Pole?',
    answer:
      'Dress warmly! The North Pole is quite cold year-round. We recommend wearing cozy winter clothing, including a warm coat, hat, mittens, and boots. Inside the workshop it\'s nice and toasty thanks to the hot cocoa and candy cane fires, but you\'ll want warm clothes for the reindeer stables and outdoor areas.',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
