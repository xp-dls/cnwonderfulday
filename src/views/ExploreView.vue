<template>
  <div class="min-h-screen bg-white">
    <div class="bg-white border-b border-gray-200">
      <div class="section-padding py-12">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-[2px] bg-fresh-green" />
            <span class="text-fresh-green font-display text-sm tracking-wider uppercase">Explore</span>
          </div>
          <h1 class="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All Destinations
          </h1>
          <p class="text-warm-gray max-w-2xl">
            Browse our curated collection of China's hidden gems. Filter by province, season, or search for specific destinations.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
      <div class="section-padding py-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row gap-4">
            <div class="relative flex-1 max-w-md">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search destinations..."
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-fresh-green focus:ring-1 focus:ring-fresh-green"
                @input="handleSearch"
              >
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div class="flex flex-wrap gap-2">
              <div ref="provinceDropdownRef" class="relative">
                <button
                  @click="toggleProvinceDropdown"
                  class="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-fresh-green transition-colors bg-white"
                  :class="{ 'border-fresh-green ring-1 ring-fresh-green': selectedProvince }"
                >
                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{{ selectedProvince || 'All Provinces' }}</span>
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="showProvinceDropdown" class="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <button
                    @click="selectProvince('')"
                    class="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                    :class="{ 'bg-gray-50 font-medium': !selectedProvince }"
                  >
                    All Provinces
                  </button>
                  <button
                    v-for="province in provinces"
                    :key="province"
                    @click="selectProvince(province)"
                    class="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                    :class="{ 'bg-gray-50 font-medium text-fresh-green': selectedProvince === province }"
                  >
                    {{ province }}
                  </button>
                </div>
              </div>

              <div class="flex gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  v-for="season in seasons"
                  :key="season"
                  @click="toggleSeason(season)"
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  :class="selectedSeasons.includes(season) ? seasonButtonClasses[season] : 'text-warm-gray hover:text-warm-gray'"
                >
                  {{ seasonLabels[season] }}
                </button>
              </div>

              <div class="flex gap-1 bg-gray-100 p-1 rounded-xl ml-auto">
                <button
                  @click="setViewMode('grid')"
                  class="p-2 rounded-lg transition-colors"
                  :class="viewMode === 'grid' ? 'bg-white shadow-sm text-fresh-green' : 'text-gray-500 hover:text-gray-700'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  @click="setViewMode('map')"
                  class="p-2 rounded-lg transition-colors"
                  :class="viewMode === 'map' ? 'bg-white shadow-sm text-fresh-green' : 'text-gray-500 hover:text-gray-700'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 7m0 13V7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div v-if="hasActiveFilters" class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            <span class="text-sm text-gray-500">Active filters:</span>
            <span v-if="searchQuery" class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
              Search: "{{ searchQuery }}"
              <button @click="clearSearch" class="hover:text-fresh-green">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <span v-if="selectedProvince" class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
              {{ selectedProvince }}
              <button @click="selectProvince('')" class="hover:text-fresh-green">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <span
              v-for="season in selectedSeasons"
              :key="season"
              class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm text-white"
              :class="seasonColors[season]"
            >
              {{ seasonLabels[season] }}
              <button @click="toggleSeason(season)" class="hover:opacity-70">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <button @click="clearAllFilters" class="text-sm text-fresh-green hover:underline ml-auto">
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="section-padding py-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <p class="text-warm-gray"">
            Showing <span class="font-semibold text-gray-900">{{ filteredArticles.length }}</span> destinations
          </p>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500">Sort by:</span>
            <select
              v-model="sortBy"
              class="text-sm border-0 bg-transparent font-medium text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in sortedArticles"
            :key="article.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            @click="goToArticle(article.id)"
          >
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="article.cover"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div class="absolute top-4 left-4 flex gap-2">
                <span
                  v-for="season in article.seasons"
                  :key="season"
                  :class="[seasonColors[season], 'text-white text-xs px-3 py-1 rounded-full font-medium']"
                >
                  {{ seasonLabels[season] }}
                </span>
              </div>

              <div class="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button class="p-2 bg-white/90 rounded-full hover:bg-fresh-green hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{{ article.province }}</span>
                <span class="text-gray-300">|</span>
                <span>{{ article.city }}</span>
              </div>

              <h3 class="font-display text-xl font-semibold text-gray-900 group-hover:text-fresh-green transition-colors mb-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-500 text-sm mb-4">{{ article.subtitle }}</p>
              <p class="text-warm-gray text-sm line-clamp-2">{{ article.excerpt }}</p>

              <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span class="text-sm text-gray-400">{{ formatDate(article.date) }}</span>
                <span class="text-fresh-green font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="aspect-[21/9] bg-gray-100 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 7m0 13V7" />
              </svg>
              <p class="text-gray-500 font-medium">Interactive Map Coming Soon</p>
              <p class="text-gray-400 text-sm mt-1">Explore destinations on an interactive map of China</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-warm-gray text-center">
              Map view will display all {{ filteredArticles.length }} destinations with location markers.
            </p>
          </div>
        </div>

        <div v-if="filteredArticles.length === 0" class="text-center py-20">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
          <p class="text-gray-500 mb-6">Try adjusting your filters or search query</p>
          <button @click="clearAllFilters" class="btn-primary">
            Clear All Filters
          </button>
        </div>

        <div v-if="filteredArticles.length > 0 && viewMode === 'grid'" class="text-center mt-12">
          <button class="btn-secondary">
            Load More Destinations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { LocationQueryRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { articles, provinces, seasons, seasonColors, seasonLabels } from '../data/articles'
import type { Article } from '../data/articles'

type ViewMode = 'grid' | 'map'
type SortBy = 'newest' | 'oldest' | 'name'

const route = useRoute()
const router = useRouter()
const provinceDropdownRef = ref<HTMLElement | null>(null)

const searchQuery = ref<string>('')
const selectedProvince = ref<string>('')
const selectedSeasons = ref<string[]>([])
const viewMode = ref<ViewMode>('grid')
const sortBy = ref<SortBy>('newest')
const showProvinceDropdown = ref<boolean>(false)

const seasonButtonClasses: Readonly<Record<string, string>> = {
  spring: 'bg-fresh-green text-white shadow-sm',
  summer: 'bg-fresh-green-dark text-white shadow-sm',
  autumn: 'bg-amber-500 text-white shadow-sm',
  winter: 'bg-gray-400 text-white shadow-sm'
}

const hasActiveFilters = computed<boolean>(() => {
  return Boolean(searchQuery.value || selectedProvince.value || selectedSeasons.value.length > 0)
})

const filteredArticles = computed<Article[]>(() => {
  let result: Article[] = [...articles]
  const normalizedQuery = searchQuery.value.trim().toLowerCase()

  if (normalizedQuery) {
    result = result.filter((article) => {
      return (
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.province.toLowerCase().includes(normalizedQuery) ||
        article.city.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery)
      )
    })
  }

  if (selectedProvince.value) {
    result = result.filter((article) => article.province === selectedProvince.value)
  }

  if (selectedSeasons.value.length > 0) {
    result = result.filter((article) => {
      return selectedSeasons.value.some((season) => article.seasons.includes(season))
    })
  }

  return result
})

const sortedArticles = computed<Article[]>(() => {
  const result: Article[] = [...filteredArticles.value]

  switch (sortBy.value) {
    case 'newest':
      return result.sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
    case 'oldest':
      return result.sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime())
    case 'name':
      return result.sort((left, right) => left.title.localeCompare(right.title))
    default:
      return result
  }
})

const goToArticle = (articleId: string): void => {
  router.push(`/article/${articleId}`)
}

const handleSearch = (): void => {
  searchQuery.value = searchQuery.value.trimStart()
  updateQueryParams()
}

const toggleProvinceDropdown = (): void => {
  showProvinceDropdown.value = !showProvinceDropdown.value
}

const selectProvince = (province: string): void => {
  selectedProvince.value = province
  showProvinceDropdown.value = false
  updateQueryParams()
}

const toggleSeason = (season: string): void => {
  const index = selectedSeasons.value.indexOf(season)

  if (index > -1) {
    selectedSeasons.value.splice(index, 1)
  } else {
    selectedSeasons.value.push(season)
  }

  updateQueryParams()
}

const clearSearch = (): void => {
  searchQuery.value = ''
  updateQueryParams()
}

const clearAllFilters = (): void => {
  searchQuery.value = ''
  selectedProvince.value = ''
  selectedSeasons.value = []
  updateQueryParams()
}

const setViewMode = (mode: ViewMode): void => {
  viewMode.value = mode
}

const updateQueryParams = (): void => {
  const query: LocationQueryRaw = {}
  const trimmedQuery = searchQuery.value.trim()

  if (trimmedQuery) {
    query.search = trimmedQuery
  }

  if (selectedProvince.value) {
    query.province = selectedProvince.value
  }

  if (selectedSeasons.value.length > 0) {
    query.season = selectedSeasons.value.join(',')
  }

  router.replace({ query })
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getSingleQueryValue = (value: unknown): string => {
  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    const [firstValue] = value
    return typeof firstValue === 'string' ? firstValue : ''
  }

  return ''
}

const syncStateFromQuery = (): void => {
  const search = getSingleQueryValue(route.query.search)
  const province = getSingleQueryValue(route.query.province)
  const season = getSingleQueryValue(route.query.season)

  searchQuery.value = search
  selectedProvince.value = province
  selectedSeasons.value = season ? season.split(',').filter(Boolean) : []
}

const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target

  if (!(target instanceof Node)) {
    return
  }

  if (provinceDropdownRef.value?.contains(target)) {
    return
  }

  showProvinceDropdown.value = false
}

onMounted(() => {
  syncStateFromQuery()
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

