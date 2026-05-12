<template>
  <div class="min-h-screen bg-white">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto section-padding">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <router-link to="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-fresh-green rounded-xl flex items-center justify-center shadow-sm">
              <span class="text-white font-display text-xl font-bold">C</span>
            </div>
            <div class="hidden sm:block">
              <h1 class="font-display text-xl font-semibold text-ink group-hover:text-fresh-green transition-colors">
                China Wonderful Day
              </h1>
              <p class="text-xs text-warm-gray -mt-1">Discover the Unseen</p>
            </div>
          </router-link>

          <div class="hidden md:flex items-center gap-8">
            <router-link
              to="/"
              class="text-warm-gray hover:text-fresh-green font-medium transition-colors"
              :class="{ 'text-fresh-green font-semibold': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/explore"
              class="text-warm-gray hover:text-fresh-green font-medium transition-colors"
              :class="{ 'text-fresh-green font-semibold': $route.path === '/explore' }"
            >
              Explore
            </router-link>
            <button class="btn-primary text-sm">Plan Your Trip</button>
          </div>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors text-warm-gray"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
        <div class="max-w-7xl mx-auto section-padding py-4 space-y-1">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl text-warm-gray hover:text-fresh-green hover:bg-fresh-green-light font-medium transition-colors"
          >
            Home
          </router-link>
          <router-link
            to="/explore"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 rounded-xl text-warm-gray hover:text-fresh-green hover:bg-fresh-green-light font-medium transition-colors"
          >
            Explore
          </router-link>
          <button class="btn-primary w-full text-sm mt-4">Plan Your Trip</button>
        </div>
      </div>
    </nav>

    <main class="pt-16 lg:pt-20 overflow-x-hidden">
      <router-view />
    </main>

    <footer class="bg-fresh-green-dark text-white mt-20">
      <div class="max-w-7xl mx-auto section-padding py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span class="text-white font-display text-xl font-bold">C</span>
              </div>
              <h3 class="font-display text-xl font-semibold">China Wonderful Day</h3>
            </div>
            <p class="text-green-100/80 text-sm leading-relaxed">
              Discover China's lesser-known destinations. From breathtaking landscapes to cultural treasures,
              we guide you beyond the typical tourist trail.
            </p>
          </div>

          <div>
            <h4 class="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-green-100/70">
              <li><router-link to="/" class="hover:text-white transition-colors">Home</router-link></li>
              <li><router-link to="/explore" class="hover:text-white transition-colors">Explore Destinations</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-display text-lg font-semibold mb-4">Stay Updated</h4>
            <p class="text-green-100/60 text-sm mb-4">Get the latest hidden gems delivered to your inbox.</p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white placeholder-green-200/50 focus:outline-none focus:border-white/50"
              >
              <button class="bg-white text-fresh-green-dark px-5 py-2 text-sm font-semibold rounded-xl hover:bg-green-50 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 mt-12 pt-8 text-center text-green-100/40 text-sm">
          <p>&copy; 2026 China Wonderful Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
