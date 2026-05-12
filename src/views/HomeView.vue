<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" 
          alt="China Hidden Gems Hero"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 gradient-overlay" />
        <!-- Chinese ink wash inspired gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-chinese-red/10 via-transparent to-mountain-blue/20" />
      </div>
      
      <!-- Hero Content -->
      <div class="relative h-full flex items-center section-padding">
        <div class="max-w-4xl animate-slide-up">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-16 h-[2px] bg-chinese-red" />
            <span class="text-white/90 font-display text-lg tracking-wider">DISCOVER CHINA</span>
          </div>
          
          <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 text-shadow">
            Hidden Gems<br/>
            <span class="text-chinese-red">of China</span>
          </h1>
          
          <p class="text-white/80 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
            Discover breathtaking landscapes, ancient villages, and natural wonders 
            beyond the typical tourist trail. Your journey to China's best-kept secrets starts here.
          </p>
          
          <!-- Search Bar -->
          <div class="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div class="flex-1 relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Search destinations, provinces..."
                class="w-full px-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-0 text-ink-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-chinese-red"
                @keyup.enter="handleSearch"
              >
              <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <button 
              @click="handleSearch"
              class="btn-primary px-8 py-4 text-lg whitespace-nowrap"
            >
              Explore
            </button>
          </div>
          
          <!-- Stats -->
          <div class="flex gap-8 mt-12 text-white">
            <div>
              <div class="text-3xl font-display font-bold">{{ articles.length }}+</div>
              <div class="text-white/60 text-sm">Destinations</div>
            </div>
            <div>
              <div class="text-3xl font-display font-bold">{{ provinces.length }}</div>
              <div class="text-white/60 text-sm">Provinces</div>
            </div>
            <div>
              <div class="text-3xl font-display font-bold">4</div>
              <div class="text-white/60 text-sm">Seasons</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-[2px] bg-chinese-red" />
              <span class="text-chinese-red font-display text-sm tracking-wider uppercase">Featured</span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink-black">
              Must-See Destinations
            </h2>
          </div>
          <router-link 
            to="/explore" 
            class="hidden sm:flex items-center gap-2 text-mountain-blue hover:text-chinese-red font-medium transition-colors"
          >
            View All
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in featuredArticles" 
            :key="article.slug"
            class="group cursor-pointer"
            @click="$router.push(`/article/${article.slug}`)"
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
              <!-- Season Badges -->
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
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ article.province }}, {{ article.city }}
              </div>
              <h3 class="font-display text-xl font-semibold text-ink-black group-hover:text-chinese-red transition-colors mb-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 text-sm line-clamp-2">{{ article.excerpt }}</p>
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

    <!-- Explore by Province Map Section -->
    <section class="bg-white section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-[2px] bg-chinese-red" />
            <span class="text-chinese-red font-display text-sm tracking-wider uppercase">Explore</span>
            <div class="w-12 h-[2px] bg-chinese-red" />
          </div>
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink-black mb-4">
            Discover by Province
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            China spans 34 provincial-level regions, each with its own unique landscapes and cultural treasures.
          </p>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button 
            v-for="province in provinces" 
            :key="province"
            @click="filterByProvince(province)"
            class="group p-6 rounded-xl bg-rice-paper hover:bg-chinese-red transition-all duration-300 text-center"
          >
            <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <span class="text-lg font-display font-bold text-chinese-red group-hover:text-white transition-colors">
                {{ province.charAt(0) }}
              </span>
            </div>
            <span class="font-medium text-ink-black group-hover:text-white transition-colors">
              {{ province }}
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Seasonal Highlights -->
    <section class="section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-[2px] bg-chinese-red" />
            <span class="text-chinese-red font-display text-sm tracking-wider uppercase">Seasonal Guide</span>
            <div class="w-12 h-[2px] bg-chinese-red" />
          </div>
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink-black mb-4">
            When to Visit
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Each season paints China in different colors. Find the perfect time for your journey.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="season in seasonsData" 
            :key="season.name"
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Mission Section -->
    <section class="bg-ink-black text-white section-padding py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-16 h-[2px] bg-chinese-red" />
              <span class="text-chinese-red font-display text-sm tracking-wider uppercase">Our Mission</span>
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold mb-6">
              Beyond the<br/>Tourist Trail
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-6">
              While millions flock to the Great Wall and Forbidden City, countless hidden treasures 
              remain undiscovered. We're here to guide you to the authentic China that most travelers never see.
            </p>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              From rainbow mountains to ancient tea terraces, from mist-shrouded peaks to timeless 
              villages — every destination tells a story of China's rich natural and cultural heritage.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-chinese-red" />
                <span class="text-gray-300">Curated by locals</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-chinese-red" />
                <span class="text-gray-300">Authentic experiences</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-chinese-red" />
                <span class="text-gray-300">Sustainable travel</span>
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
            <!-- Decorative element -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-chinese-red/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="section-padding py-20">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-gradient-to-br from-mountain-blue to-chinese-red rounded-3xl p-12 lg:p-16 text-white">
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
            <button class="bg-white text-chinese-red px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { articles, provinces, seasonColors, seasonLabels } from '../data/articles'

const router = useRouter()
const searchQuery = ref('')

const featuredArticles = computed(() => articles.slice(0, 6))

const seasonsData = [
  {
    id: 'spring',
    name: 'Spring',
    description: 'Cherry blossoms, rapeseed flowers, and mild weather.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop',
    color: 'bg-jade-green'
  },
  {
    id: 'summer',
    name: 'Summer',
    description: 'Lush greenery, alpine meadows, and cool mountain retreats.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop',
    color: 'bg-mountain-blue'
  },
  {
    id: 'autumn',
    name: 'Autumn',
    description: 'Golden foliage, harvest season, and clear skies.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    color: 'bg-golden'
  },
  {
    id: 'winter',
    name: 'Winter',
    description: 'Snow-capped peaks, frozen waterfalls, and hot springs.',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&h=800&fit=crop',
    color: 'bg-gray-400'
  }
]

const getSeasonCount = (seasonId: string) => {
  return articles.filter(a => a.seasons.includes(seasonId)).length
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/explore',
      query: { search: searchQuery.value }
    })
  } else {
    router.push('/explore')
  }
}

const filterByProvince = (province: string) => {
  router.push({
    path: '/explore',
    query: { province }
  })
}

const filterBySeason = (season: string) => {
  router.push({
    path: '/explore',
    query: { season }
  })
}
</script>