export interface Article {
  slug: string
  title: string
  subtitle: string
  province: string
  city: string
  seasons: string[]
  cover: string
  images: string[]
  lat: number
  lng: number
  date: string
  excerpt: string
  content: string
  meta_title: string
  meta_description: string
}

export const articles: Article[] = [
  {
    slug: "zhangye-danxia",
    title: "Zhangye Danxia Landform",
    subtitle: "China's Rainbow Mountains",
    province: "Gansu",
    city: "Zhangye",
    seasons: ["summer", "autumn"],
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
    ],
    lat: 38.92,
    lng: 100.15,
    date: "2026-05-10",
    excerpt: "Marvel at nature's palette in these stunning rainbow-colored mountains, formed over millions of years of mineral deposits and erosion.",
    content: "The Zhangye Danxia Landform is a masterpiece of nature...",
    meta_title: "Zhangye Danxia Landform - China's Rainbow Mountains",
    meta_description: "Discover the stunning rainbow-colored mountains of Zhangye Danxia in Gansu Province, China. A natural wonder formed over millions of years."
  },
  {
    slug: "yuanyang-rice-terraces",
    title: "Yuanyang Rice Terraces",
    subtitle: "Stairway to Heaven",
    province: "Yunnan",
    city: "Yuanyang",
    seasons: ["winter", "spring"],
    cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=600&fit=crop"
    ],
    lat: 23.16,
    lng: 102.74,
    date: "2026-05-08",
    excerpt: "Ancient Hani people's 1,300-year-old masterpiece, creating mirror-like terraces that reflect the sky in endless layers.",
    content: "The Yuanyang Rice Terraces represent one of humanity's greatest agricultural achievements...",
    meta_title: "Yuanyang Rice Terraces - Ancient Agricultural Wonder",
    meta_description: "Explore the 1,300-year-old Yuanyang Rice Terraces in Yunnan, China. A UNESCO World Heritage site of breathtaking beauty."
  },
  {
    slug: "wuyuan-countryside",
    title: "Wuyuan Countryside",
    subtitle: "China's Most Beautiful Village",
    province: "Jiangxi",
    city: "Wuyuan",
    seasons: ["spring", "autumn"],
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    ],
    lat: 29.25,
    lng: 117.86,
    date: "2026-05-05",
    excerpt: "Ancient Hui-style villages nestled among rapeseed flower fields, offering a glimpse into traditional Chinese rural life.",
    content: "Wuyuan is often called the most beautiful countryside in China...",
    meta_title: "Wuyuan Countryside - China's Most Beautiful Village",
    meta_description: "Visit Wuyuan in Jiangxi Province, known as China's most beautiful village. Ancient Hui architecture and stunning rapeseed fields."
  },
  {
    slug: "fairy-pool",
    title: "Huanglong Fairy Pool",
    subtitle: "The Yellow Dragon",
    province: "Sichuan",
    city: "Songpan",
    seasons: ["summer", "autumn"],
    cover: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop"
    ],
    lat: 32.75,
    lng: 103.83,
    date: "2026-05-03",
    excerpt: "Calcium carbonate pools create a stunning cascade of turquoise and golden hues through the valley.",
    content: "Huanglong, meaning 'Yellow Dragon', is a UNESCO World Heritage site...",
    meta_title: "Huanglong Fairy Pool - Sichuan's Natural Wonder",
    meta_description: "Discover Huanglong Fairy Pool in Sichuan, China. Stunning calcium carbonate terraces with turquoise and golden pools."
  },
  {
    slug: "tianzi-mountain",
    title: "Tianzi Mountain",
    subtitle: "Avatar's Inspiration",
    province: "Hunan",
    city: "Zhangjiajie",
    seasons: ["spring", "summer", "autumn"],
    cover: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
    ],
    lat: 29.33,
    lng: 110.43,
    date: "2026-05-01",
    excerpt: "Towering sandstone pillars shrouded in mist, the real-life inspiration for the floating mountains of Pandora.",
    content: "Tianzi Mountain offers some of the most dramatic landscapes on Earth...",
    meta_title: "Tianzi Mountain - Avatar's Real-Life Inspiration",
    meta_description: "Explore Tianzi Mountain in Zhangjiajie, Hunan. The dramatic sandstone pillars that inspired Avatar's floating mountains."
  },
  {
    slug: "dahongpao",
    title: "Wuyi Mountain Dahongpao",
    subtitle: "The Big Red Robe",
    province: "Fujian",
    city: "Wuyishan",
    seasons: ["spring", "autumn"],
    cover: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800&h=600&fit=crop"
    ],
    lat: 27.66,
    lng: 117.96,
    date: "2026-04-28",
    excerpt: "Ancient tea trees growing from rocky cliffs, producing one of the world's most expensive and revered teas.",
    content: "The Dahongpao tea trees of Wuyi Mountain are legendary...",
    meta_title: "Wuyi Mountain Dahongpao - The Legendary Tea",
    meta_description: "Visit Wuyi Mountain in Fujian to see the legendary Dahongpao tea trees. Ancient tea culture meets stunning karst landscapes."
  }
]

export const provinces = [...new Set(articles.map(a => a.province))]
export const cities = [...new Set(articles.map(a => a.city))]
export const seasons = ["spring", "summer", "autumn", "winter"] as const

export const seasonColors: Record<string, string> = {
  spring: "bg-jade-green",
  summer: "bg-mountain-blue",
  autumn: "bg-golden",
  winter: "bg-gray-400"
}

export const seasonLabels: Record<string, string> = {
  spring: "Spring",
  summer: "Summer",
  autumn: "Autumn",
  winter: "Winter"
}