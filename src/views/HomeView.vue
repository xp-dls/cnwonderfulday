<template>
  <div class="overflow-x-hidden">
    <section class="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div class="absolute inset-0">
        <div class="relative w-full h-full overflow-hidden" @touchstart="onTouchStart" @touchend="onTouchEnd" @mouseenter="isAutoPlaying = false" @mouseleave="isAutoPlaying = true">
          <div
            class="flex transition-transform duration-500 ease-out h-full"
            :style="{ transform: `translateX(-${currentSlideIndex * 100}%)` }"
          >
            <img
              v-for="(slide) in heroSlides"
              :key="slide.id"
              :src="slide.image"
              :alt="slide.alt"
              class="w-full h-full object-cover flex-shrink-0"
            />
          </div>
          <div class="absolute inset-0 gradient-overlay" />
          <div class="absolute inset-0 bg-gradient-to-br from-fresh-green/10 via-transparent to-fresh-green-dark/10" />
        </div>
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
            v-for="(slide, index) in heroSlides"
            :key="slide.id"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlideIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white z-20"
        aria-label="Previous slide"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white z-20"
        aria-label="Next slide"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="relative h-full flex items-center section-padding">
        <div class="max-w-4xl w-full animate-slide-up">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-16 h-[2px] bg-fresh-green-light" />
            <span class="text-white/90 font-display text-lg tracking-wider">DISCOVER CHINA</span>
          </div>

          <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 text-shadow">
            Wonderful Day<br>
            <span class="text-fresh-green-light">of China</span>
          </h1>

          <p class="text-white/80 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
            Discover breathtaking landscapes, ancient villages, and natural wonders
            beyond the typical tourist trail. Your journey to China's best-kept secrets starts here.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div class="flex-1 relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search destinations, cities..."
                class="w-full px-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-0 text-ink placeholder-warm-gray focus:outline-none focus:ring-2 focus:ring-fresh-green"
                @keyup.enter="handleSearch"
              >
              <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              @click="handleSearch"
              class="btn-primary px-8 py-4 text-lg whitespace-nowrap"
            >
              Explore
            </button>
          </div>

          <div class="flex gap-8 mt-12 text-white">
            <div>
              <div class="text-3xl font-display font-bold">{{ articles.length }}+</div>
              <div class="text-white/60 text-sm">Destinations</div>
            </div>
            <div>
              <div class="text-3xl font-display font-bold">{{ cities.length }}</div>
              <div class="text-white/60 text-sm">Cities</div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <section class="section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-[2px] bg-fresh-green" />
              <span class="text-fresh-green font-display text-sm tracking-wider uppercase">Featured</span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink">
              Must-See Destinations
            </h2>
          </div>
          <router-link
            to="/explore"
            class="hidden sm:flex items-center gap-2 text-fresh-green hover:text-fresh-green-dark font-medium transition-colors"
          >
            View All
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in featuredArticles"
            :key="article.id"
            class="group cursor-pointer"
            @click="goToArticle(article.id)"
          >
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 card-hover">
              <img
                :src="article.cover"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <div class="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div class="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span class="text-white font-medium">Read Article</span>
              </div>
              <div class="absolute top-4 left-4 flex gap-2">
                <span
                  v-for="season in article.seasons"
                  :key="season"
                  :class="[seasonColors[season], 'text-white text-xs px-3 py-1 rounded-full font-medium']"
                >
                  {{ seasonLabels[season] }}
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center gap-2 text-sm text-warm-gray mb-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ article.province }}, {{ article.city }}
              </div>
              <h3 class="font-display text-xl font-semibold text-ink group-hover:text-fresh-green transition-colors mb-2">
                {{ article.title }}
              </h3>
              <p class="text-warm-gray text-sm line-clamp-2">{{ article.excerpt }}</p>
            </div>
          </article>
        </div>

        <div class="sm:hidden mt-8 text-center">
          <router-link to="/explore" class="btn-secondary inline-block">
            View All Destinations
          </router-link>
        </div>
      </div>
    </section>

    <section class="bg-frost section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-[2px] bg-fresh-green" />
            <span class="text-fresh-green font-display text-sm tracking-wider uppercase">Explore</span>
            <div class="w-12 h-[2px] bg-fresh-green" />
          </div>
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Discover by City
          </h2>
          <p class="text-warm-gray max-w-2xl mx-auto">
            From ancient capitals to modern metropolises, explore China's most captivating cities.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            v-for="city in cities"
            :key="city"
            @click="filterByCity(city)"
            class="group p-6 rounded-xl bg-white hover:bg-fresh-green transition-all duration-300 text-center shadow-sm hover:shadow-lg"
          >
            <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-fresh-green-light group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <span class="text-lg font-display font-bold text-fresh-green group-hover:text-white transition-colors">
                {{ city.charAt(0) }}
              </span>
            </div>
            <span class="font-medium text-ink group-hover:text-white transition-colors">
              {{ city }}
            </span>
          </button>
        </div>
      </div>
    </section>

    <section class="section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-[2px] bg-fresh-green" />
            <span class="text-fresh-green font-display text-sm tracking-wider uppercase">Seasonal Guide</span>
            <div class="w-12 h-[2px] bg-fresh-green" />
          </div>
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            When to Visit
          </h2>
          <p class="text-warm-gray max-w-2xl mx-auto">
            Each season paints China in different colors. Find the perfect time for your journey.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="season in seasonsData"
            :key="season.id"
            class="group relative rounded-2xl overflow-hidden cursor-pointer"
            @click="filterBySeason(season.id)"
          >
            <div class="aspect-[3/4]">
              <img
                :src="season.image"
                :alt="season.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div
                :class="[season.color, 'w-12 h-1 mb-4 rounded-full']"
              />
              <h3 class="font-display text-2xl font-bold text-white mb-2">{{ season.name }}</h3>
              <p class="text-white/80 text-sm">{{ season.description }}</p>
              <div class="mt-4 flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                <span>{{ getSeasonCount(season.id) }} destinations</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-fresh-green-dark text-white section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-16 h-[2px] bg-fresh-green-light" />
              <span class="text-fresh-green-light font-display text-sm tracking-wider uppercase">Our Mission</span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold mb-6">
              Beyond the<br>Tourist Trail
            </h2>
            <p class="text-green-100/80 text-lg leading-relaxed mb-6">
              While millions flock to the Great Wall and Forbidden City, countless hidden treasures
              remain undiscovered. We're here to guide you to the authentic China that most travelers never see.
            </p>
            <p class="text-green-100/80 text-lg leading-relaxed mb-8">
              From rainbow mountains to ancient tea terraces, from mist-shrouded peaks to timeless
              villages — every destination tells a story of China's rich natural and cultural heritage.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-fresh-green-light" />
                <span class="text-green-100/70">Curated by locals</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-fresh-green-light" />
                <span class="text-green-100/70">Authentic experiences</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-fresh-green-light" />
                <span class="text-green-100/70">Sustainable travel</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop"
                alt="China Landscape"
                class="rounded-2xl w-full h-64 object-cover"
              >
              <img
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=500&fit=crop"
                alt="China Nature"
                class="rounded-2xl w-full h-64 object-cover mt-8"
              >
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-fresh-green-light/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding py-20">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-gradient-to-br from-fresh-green to-fresh-green-dark rounded-3xl p-12 lg:p-16 text-white">
          <h2 class="font-display text-3xl lg:text-4xl font-bold mb-4">
            Start Your Journey
          </h2>
          <p class="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to receive hidden gem recommendations, travel tips, and exclusive guides
            delivered to your inbox.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white/30"
            >
            <button class="bg-white text-fresh-green px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { articles, seasonColors, seasonLabels } from '../data/articles'
import type { Article } from '../data/articles'

interface SeasonCard {
  id: string
  name: string
  description: string
  image: string
  color: string
}

interface HeroSlide {
  id: string
  image: string
  alt: string
}

const router = useRouter()
const searchQuery = ref<string>('')
const currentSlideIndex = ref<number>(0)
const touchStartX = ref<number>(0)
const touchEndX = ref<number>(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
const isAutoPlaying = ref<boolean>(true)
const AUTO_PLAY_INTERVAL = 5000
const AUTO_PLAY_PAUSE_DURATION = 3000

const heroSlides: ReadonlyArray<HeroSlide> = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Mountain Landscape'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Natural Scenery'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Forest Adventure'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Mountain Peak'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Autumn Colors'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Winter Snow'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=1080&fit=crop',
    alt: 'China Wonderful Day - Spring Blossoms'
  }
]

const nextSlide = (): void => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % heroSlides.length
}

const prevSlide = (): void => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + heroSlides.length) % heroSlides.length
}

const goToSlide = (index: number): void => {
  currentSlideIndex.value = index
}

const onTouchStart = (event: TouchEvent): void => {
  touchStartX.value = event.touches[0].clientX
}

const onTouchEnd = (event: TouchEvent): void => {
  touchEndX.value = event.changedTouches[0].clientX
  handleSwipe()
}

const handleSwipe = (): void => {
  const swipeThreshold = 50
  const diff = touchStartX.value - touchEndX.value

  if (Math.abs(diff) > swipeThreshold) {
    resetAutoPlay()
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

const startAutoPlay = (): void => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
  autoplayTimer = setInterval(() => {
    if (isAutoPlaying.value) {
      nextSlide()
    }
  }, AUTO_PLAY_INTERVAL)
}

const stopAutoPlay = (): void => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const resetAutoPlay = (): void => {
  stopAutoPlay()
  isAutoPlaying.value = false
  setTimeout(() => {
    isAutoPlaying.value = true
    startAutoPlay()
  }, AUTO_PLAY_PAUSE_DURATION)
}

const featuredArticles = computed<Article[]>(() => articles.slice(0, 6))

const seasonsData: ReadonlyArray<SeasonCard> = [
  {
    id: 'spring',
    name: 'Spring',
    description: 'Cherry blossoms, rapeseed flowers, and mild weather.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop',
    color: 'bg-fresh-green'
  },
  {
    id: 'summer',
    name: 'Summer',
    description: 'Lush greenery, alpine meadows, and cool mountain retreats.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop',
    color: 'bg-fresh-green-dark'
  },
  {
    id: 'autumn',
    name: 'Autumn',
    description: 'Golden foliage, harvest season, and clear skies.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    color: 'bg-amber-500'
  },
  {
    id: 'winter',
    name: 'Winter',
    description: 'Snow-capped peaks, frozen waterfalls, and hot springs.',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&h=800&fit=crop',
    color: 'bg-gray-400'
  }
]

const goToArticle = (articleId: string): void => {
  router.push(`/article/${articleId}`)
}

const getSeasonCount = (seasonId: string): number => {
  return articles.filter((article) => article.seasons.includes(seasonId)).length
}

const handleSearch = (): void => {
  const trimmedQuery = searchQuery.value.trim()

  if (trimmedQuery) {
    router.push({
      path: '/explore',
      query: { search: trimmedQuery }
    })
    return
  }

  router.push('/explore')
}

const cities: ReadonlyArray<string> = [
  'Beijing',
  "Xi'an",
  'Hangzhou',
  'Chengdu',
  'Wuhan',
  'Shenzhen'
]

const filterByCity = (city: string): void => {
  router.push({
    path: '/explore',
    query: { city }
  })
}

const filterBySeason = (season: string): void => {
  router.push({
    path: '/explore',
    query: { season }
  })
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
