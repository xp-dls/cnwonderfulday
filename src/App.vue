<template>
  <div class="min-h-screen bg-rice-paper">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-rice-paper/95 backdrop-blur-md border-b border-gray-200/50">
      <div class="section-padding">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <router-link to="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-chinese-red rounded-lg flex items-center justify-center">
              <span class="text-white font-display text-xl font-bold">C</span>
            </div>
            <div class="hidden sm:block">
              <h1 class="font-display text-xl font-semibold text-ink-black group-hover:text-chinese-red transition-colors">
                China Hidden Gems
              </h1>
              <p class="text-xs text-gray-500 -mt-1">Discover the Unseen</p>
            </div>
          </router-link>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <router-link 
              to="/" 
              class="text-gray-700 hover:text-chinese-red font-medium transition-colors"
              :class="{ 'text-chinese-red': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link 
              to="/explore" 
              class="text-gray-700 hover:text-chinese-red font-medium transition-colors"
              :class="{ 'text-chinese-red': $route.path === '/explore' }"
            >
              Explore
            </router-link>
            <button class="btn-primary text-sm">
              Plan Your Trip
            </button>
          </div>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="section-padding py-4 space-y-3">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false"
            class="block py-2 text-gray-700 hover:text-chinese-red font-medium"
          >
            Home
          </router-link>
          <router-link 
            to="/explore" 
            @click="mobileMenuOpen = false"
            class="block py-2 text-gray-700 hover:text-chinese-red font-medium"
          >
            Explore
          </router-link>
          <button class="btn-primary w-full text-sm mt-4">
            Plan Your Trip
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main class="pt-16 lg:pt-20">
      <router-view />
    </main>
    
    <!-- Footer -->
    <footer class="bg-ink-black text-white mt-20">
      <div class="section-padding py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-chinese-red rounded-lg flex items-center justify-center">
                <span class="text-white font-display text-xl font-bold">C</span>
              </div>
              <h3 class="font-display text-xl font-semibold">China Hidden Gems</h3>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Discover China's lesser-known destinations. From breathtaking landscapes to cultural treasures, 
              we guide you beyond the typical tourist trail.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/" class="hover:text-chinese-red transition-colors">Home</router-link></li>
              <li><router-link to="/explore" class="hover:text-chinese-red transition-colors">Explore Destinations</router-link></li>
              <li><a href="#" class="hover:text-chinese-red transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-chinese-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h4 class="font-display text-lg font-semibold mb-4">Stay Updated</h4>
            <p class="text-gray-400 text-sm mb-4">Get the latest hidden gems delivered to your inbox.</p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                class="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-chinese-red"
              >
              <button class="btn-primary py-2 px-4 text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 China Hidden Gems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>