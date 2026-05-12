<template>
  <div v-if="article" class="min-h-screen bg-white">
    <div class="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <img 
        :src="article.cover" 
        :alt="article.title"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 gradient-overlay" />
      <div class="absolute inset-0 bg-gradient-to-br from-fresh-green/10 via-transparent to-fresh-green-dark/10" />
      
      <div class="absolute inset-0 flex items-end">
        <div class="section-padding pb-12 w-full">
          <div class="max-w-4xl mx-auto">
            <nav class="flex items-center gap-2 text-white/70 text-sm mb-6">
              <router-link to="/" class="hover:text-white transition-colors">Home</router-link>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
              <router-link to="/explore" class="hover:text-white transition-colors">Explore</router-link>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
              <span class="text-white">{{ article.title }}</span>
            </nav>
            
            <div class="flex gap-2 mb-4">
              <span 
                v-for="season in article.seasons" 
                :key="season"
                :class="[seasonColors[season], 'text-white text-sm px-4 py-1.5 rounded-full font-medium']"
              >
                {{ seasonLabels[season] }}
              </span>
            </div>
            
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow">
              {{ article.title }}
            </h1>
            <p class="text-xl text-white/90 font-display italic mb-6">
              {{ article.subtitle }}
            </p>
            
            <div class="flex flex-wrap items-center gap-6 text-white/80">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                <span>{{ article.province }}, {{ article.city }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ formatDate(article.date) }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="absolute top-24 right-8 hidden lg:flex flex-col gap-3">
        <button class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-fresh-green transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </button>
        <button class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-fresh-green-dark transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        <button class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
          </svg>
        </button>
      </div>
    </div>

    <article class="section-padding py-12">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div class="prose prose-lg max-w-none">
              <p class="text-xl text-gray-600 leading-relaxed font-display italic border-l-4 border-fresh-green pl-6 mb-8">
                {{ article.excerpt }}
              </p>
              
              <div class="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Nestled in the heart of {{ article.province }} province, {{ article.title }} stands as a testament to 
                  nature's artistic prowess. This hidden gem remains largely undiscovered by international travelers, 
                  offering an authentic experience away from the crowded tourist spots.
                </p>
                
                <p>
                  The journey to {{ article.title }} takes you through some of China's most spectacular landscapes. 
                  As you approach, the scenery transforms dramatically, revealing {{ article.subtitle.toLowerCase() }} 
                  that seems almost otherworldly in its beauty.
                </p>

                <figure class="my-10">
                  <img 
                    :src="article.images[0]" 
                    :alt="article.title"
                    class="w-full rounded-2xl shadow-lg"
                  >
                  <figcaption class="text-center text-gray-500 text-sm mt-3">
                    The stunning landscape of {{ article.title }}
                  </figcaption>
                </figure>

                <h2 class="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
                  Best Time to Visit
                </h2>
                <p>
                  The ideal time to visit {{ article.title }} is during 
                  <span v-for="(season, idx) in article.seasons" :key="season">
                    <span :class="`text-${season === 'spring' ? 'fresh-green' : season === 'summer' ? 'fresh-green-dark' : season === 'autumn' ? 'amber-500' : 'gray-500'}`">
                      {{ seasonLabels[season] }}
                    </span>
                    <span v-if="idx < article.seasons.length - 1"> and </span>
                  </span>,
                  when the weather is most favorable and the scenery is at its most dramatic. 
                  During these months, visitors can expect clear skies and comfortable temperatures 
                  perfect for exploration.
                </p>

                <h2 class="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
                  Getting There
                </h2>
                <p>
                  Reaching {{ article.title }} requires some planning, but the journey is part of the adventure. 
                  From {{ article.city }}, travelers can take a combination of train and bus, or hire a private 
                  driver for a more comfortable experience. The route winds through picturesque countryside, 
                  offering glimpses of rural Chinese life.
                </p>

                <figure class="my-10">
                  <img 
                    :src="article.images[1] || article.images[0]" 
                    :alt="article.title"
                    class="w-full rounded-2xl shadow-lg"
                  >
                  <figcaption class="text-center text-gray-500 text-sm mt-3">
                    Exploring the natural beauty of the region
                  </figcaption>
                </figure>

                <h2 class="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
                  What to Expect
                </h2>
                <p>
                  Visitors to {{ article.title }} should be prepared for an immersive natural experience. 
                  The area offers numerous hiking trails of varying difficulty, from gentle walks suitable 
                  for families to challenging treks for experienced hikers. Along the way, you'll encounter 
                  diverse flora and fauna, ancient geological formations, and breathtaking viewpoints.
                </p>

                <blockquote class="border-l-4 border-fresh-green-dark pl-6 py-2 my-8 bg-fresh-green-light/50 rounded-r-lg">
                  <p class="text-lg italic text-gray-700">
                    "{{ article.title }} represents the kind of hidden treasure that makes traveling in China 
                    so rewarding. It's places like this that remind us why we explore."
                  </p>
                </blockquote>

                <h2 class="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
                  Practical Tips
                </h2>
                <ul class="space-y-3 list-disc list-inside">
                  <li>Bring comfortable walking shoes and weather-appropriate clothing</li>
                  <li>Carry water and snacks as facilities may be limited</li>
                  <li>Consider hiring a local guide for the best experience</li>
                  <li>Respect local customs and environmental guidelines</li>
                  <li>Allow at least a full day to properly explore the area</li>
                </ul>

                <p class="mt-8">
                  {{ article.title }} exemplifies the kind of authentic, off-the-beaten-path destination 
                  that makes China such a fascinating country to explore. Whether you're a nature enthusiast, 
                  photographer, or simply seeking tranquility away from the crowds, this hidden gem promises 
                  an unforgettable experience.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span class="text-gray-500 text-sm">Tags:</span>
              <span 
                v-for="season in article.seasons" 
                :key="season"
                class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {{ seasonLabels[season] }}
              </span>
              <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                {{ article.province }}
              </span>
              <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                {{ article.city }}
              </span>
              <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                Nature
              </span>
            </div>

            <div class="mt-16">
              <h3 class="font-display text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div 
                  v-for="(image, index) in article.images" 
                  :key="index"
                  class="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  @click="openLightbox(index)"
                >
                  <img 
                    :src="image" 
                    :alt="`${article.title} - Image ${index + 1}`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  >
                </div>
              </div>
            </div>
          </div>

          <aside class="space-y-8">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 class="font-display text-lg font-bold text-gray-900 mb-4">Location</h3>
              <div class="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center">
                    <svg class="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 7m0 13V7"/>
                    </svg>
                    <p class="text-gray-400 text-sm">Map View</p>
                  </div>
                </div>
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">Coordinates:</span>
                  <span class="font-mono">{{ article.lat.toFixed(2) }}, {{ article.lng.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Province:</span>
                  <span>{{ article.province }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">City:</span>
                  <span>{{ article.city }}</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 class="font-display text-lg font-bold text-gray-900 mb-4">You Might Also Like</h3>
              <div class="space-y-4">
                <article 
                  v-for="related in relatedArticles" 
                  :key="related.id"
                  class="group cursor-pointer"
                  @click="$router.push(`/article/${related.id}`)"
                >
                  <div class="flex gap-4">
                    <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        :src="related.cover" 
                        :alt="related.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      >
                    </div>
                    <div>
                      <h4 class="font-display font-semibold text-gray-900 group-hover:text-fresh-green transition-colors line-clamp-2">
                        {{ related.title }}
                      </h4>
                      <p class="text-sm text-gray-500 mt-1">{{ related.province }}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 class="font-display text-lg font-bold text-gray-900 mb-4">Save & Share</h3>
              <div class="flex gap-3">
                <button class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:border-fresh-green hover:text-fresh-green transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  Save
                </button>
                <button class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:border-fresh-green-dark hover:text-fresh-green-dark transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>

    <div 
      v-if="lightboxOpen" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      @click="closeLightbox"
    >
      <button 
        class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        @click="closeLightbox"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      
      <button 
        v-if="currentImageIndex > 0"
        class="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        @click.stop="prevImage"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <button 
        v-if="currentImageIndex < (article?.images.length || 0) - 1"
        class="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        @click.stop="nextImage"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      
      <img 
        v-if="article"
        :src="article.images[currentImageIndex]" 
        :alt="article.title"
        class="max-w-[90vw] max-h-[90vh] object-contain"
        @click.stop
      >
      
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        {{ currentImageIndex + 1 }} / {{ article?.images.length }}
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="font-display text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
      <p class="text-warm-gray mb-6">The destination you're looking for doesn't exist.</p>
      <router-link to="/explore" class="btn-primary">
        Browse All Destinations
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { articles, seasonColors, seasonLabels } from '../data/articles'
import type { Article } from '../data/articles'

const route = useRoute()

const article = ref<Article | null>(null)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const relatedArticles = computed(() => {
  if (!article.value) {
    return []
  }

  return articles
    .filter((item) =>
      item.id !== article.value?.id &&
      (item.province === article.value?.province ||
        item.seasons.some((season) => article.value?.seasons.includes(season)))
    )
    .slice(0, 3)
})

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const updateArticle = (id: string | undefined): void => {
  article.value = articles.find((item) => item.id === id) ?? null

  if (article.value) {
    document.title = `${article.value.title} - China Wonderful Day`
    return
  }

  document.title = 'Article Not Found - China Wonderful Day'
}

const openLightbox = (index: number): void => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = (): void => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = (): void => {
  if (article.value && currentImageIndex.value < article.value.images.length - 1) {
    currentImageIndex.value += 1
  }
}

const prevImage = (): void => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value -= 1
  }
}

const handleKeydown = (event: KeyboardEvent): void => {
  if (!lightboxOpen.value) {
    return
  }

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowRight') {
    nextImage()
  }

  if (event.key === 'ArrowLeft') {
    prevImage()
  }
}

watch(
  () => route.params.id,
  (id) => {
    updateArticle(typeof id === 'string' ? id : undefined)
    currentImageIndex.value = 0
    closeLightbox()
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

