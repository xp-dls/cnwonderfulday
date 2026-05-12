import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/index.css'

import HomeView from './views/HomeView.vue'
import ExploreView from './views/ExploreView.vue'
import ArticleView from './views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/explore', name: 'explore', component: ExploreView },
    { path: '/article/:id', name: 'article', component: ArticleView },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
