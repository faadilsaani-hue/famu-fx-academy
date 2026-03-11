export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  description: string;
  image: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  content: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Forex Fundamentals',
    level: 'Beginner',
    price: 99,
    description: 'Master the basics of currency trading, pips, lots, and leverage.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/course-placeholder-c3e5c5be-1773229496848.webp',
    lessons: [
      { id: 'l1', title: 'What is Forex?', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content: 'Forex is the global marketplace for exchanging national currencies against one another.' },
      { id: 'l2', title: 'Reading Charts', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content: 'Introduction to candlestick patterns and timeframes.' }
    ]
  },
  {
    id: '2',
    title: 'Technical Mastery',
    level: 'Intermediate',
    price: 199,
    description: 'In-depth analysis of indicators, support/resistance, and trend lines.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/course-placeholder-c3e5c5be-1773229496848.webp',
    lessons: [
      { id: 'l3', title: 'RSI & MACD', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content: 'How to use momentum indicators to find entries.' }
    ]
  },
  {
    id: '3',
    title: 'Institutional Trading',
    level: 'Advanced',
    price: 399,
    description: 'Learn SMC (Smart Money Concepts), liquidity sweeps, and high-frequency strategies.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/course-placeholder-c3e5c5be-1773229496848.webp',
    lessons: [
      { id: 'l4', title: 'Order Blocks', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content: 'Identifying institutional supply and demand zones.' }
    ]
  }
];