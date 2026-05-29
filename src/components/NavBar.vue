<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    <img src="../assets/images/logo.ico" alt="logo" class="h-8">

    <!-- Right side: nav links + language switcher -->
    <div class="flex items-center gap-8">
      <ul class="flex gap-8 text-sm font-medium">
        <li><a href="/" class="hover:text-yellow-300">{{ t('home') }}</a></li>
        <li><a href="/About" class="hover:text-yellow-300">{{ t('about') }}</a></li>
        <li><a href="/Services" class="hover:text-yellow-300">{{ t('services') }}</a></li>

        <!-- Gallery Dropdown -->
        <li class="group relative">
          <a href="#" class="hover:text-yellow-300">{{ t('gallery') }}<span> ▼</span></a>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 z-50 pt-2" style="top: 100%">
            <li><a href="/Photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('photos') }}</a></li>
            <li><a href="/Videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('videos') }}</a></li>
          </ul>
        </li>

        <!-- Destinations Dropdown -->
        <li class="group relative">
          <a href="#" class="hover:text-yellow-300">{{ t('destinations') }}<span> ▼</span></a>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 z-50 pt-2" style="top: 100%">
            <li><a href="#" class="block px-4 py-2 text-green-900 hover:bg-green-200">{{ t('northern') }}</a></li>
            <li><a href="#" class="block px-4 py-2 text-green-900 hover:bg-green-200">{{ t('southern') }}</a></li>
            <li><a href="#" class="block px-4 py-2 text-green-900 hover:bg-green-200">{{ t('kigali') }}</a></li>
            <li><a href="#" class="block px-4 py-2 text-green-900 hover:bg-green-200">{{ t('eastern') }}</a></li>
            <li><a href="#" class="block px-4 py-2 text-green-900 hover:bg-green-200">{{ t('western') }}</a></li>
          </ul>
        </li>

        <li><a href="/Contact" class="hover:text-yellow-300">{{ t('contact') }}</a></li>
      </ul>

      <!-- Language Switcher -->
      <div class="group relative">
        <button class="flex items-center gap-2 bg-green-700 hover:bg-green-600 border border-green-600 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200">
          <span>{{ currentLang.flag }}</span>
          <span>{{ currentLang.code.toUpperCase() }}</span>
          <span class="text-xs opacity-70">▼</span>
        </button>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-1 bg-white text-green-900 rounded-xl shadow-xl w-44 z-50 py-2 border border-gray-100" style="top: 100%">
          <li v-for="lang in languages" :key="lang.code">
            <button
              @click="setLanguage(lang.code)"
              class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 transition-colors text-left"
              :class="activeLang === lang.code ? 'text-green-700 font-bold bg-green-50' : 'text-green-900'">
              <span class="text-xl">{{ lang.flag }}</span>
              <div>
                <div class="text-sm font-semibold">{{ lang.label }}</div>
                <div class="text-xs text-gray-400">{{ lang.native }}</div>
              </div>
              <span v-if="activeLang === lang.code" class="ml-auto text-green-600 text-sm">✓</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeLang = ref('en')

const languages = [
  { code: 'en', label: 'English',     native: 'English',      flag: '' },
  { code: 'rw', label: 'Kinyarwanda', native: 'Ikinyarwanda', flag: '' },
  { code: 'fr', label: 'French',      native: 'Français',     flag: '' },
]

const currentLang = computed(() => languages.find(l => l.code === activeLang.value))

function setLanguage(code) {
  activeLang.value = code
}

const translations = {
  en: {
    home: 'Home', about: 'About Us', services: 'Services',
    gallery: 'Gallery', photos: 'Photos', videos: 'Videos',
    destinations: 'Destinations', northern: 'Northern Province',
    southern: 'Southern Province', kigali: 'Kigali City',
    eastern: 'Eastern', western: 'Western', contact: 'Contact',
  },
  rw: {
    home: 'Ahabanza', about: 'Abo Turi Bo', services: 'Serivisi',
    gallery: 'Amafoto', photos: 'Amafoto', videos: 'Amavideo',
    destinations: 'Aho Ugiye', northern: "Intara y'Amajyaruguru",
    southern: "Intara y'Amajyepfo", kigali: 'Umujyi wa Kigali',
    eastern: "Intara y'Iburasirazuba", western: "Intara y'Iburengerazuba",
    contact: 'Twandikire',
  },
  fr: {
    home: 'Accueil', about: 'À Propos', services: 'Services',
    gallery: 'Galerie', photos: 'Photos', videos: 'Vidéos',
    destinations: 'Destinations', northern: 'Province du Nord',
    southern: 'Province du Sud', kigali: 'Ville de Kigali',
    eastern: "Province de l'Est", western: "Province de l'Ouest",
    contact: 'Contact',
  },
}

function t(key) {
  return translations[activeLang.value][key] || key
}
</script>