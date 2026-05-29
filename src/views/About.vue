<script setup>
import Gorilla from '../assets/images/Gorilla.png'
import Canopy from '../assets/images/Canopy.png'
import Ingoro from '../assets/images/Ingoro.png'
import Museum from '../assets/images/Museum.png'
import Heroes from '../assets/images/Heroes.png'
import RudahigwaH from '../assets/images/RudahigwaH.png'
</script>

<template>

  <!-- Hero Banner -->
  <section
    class="w-full py-32 flex items-center justify-center relative"
    :style="{ backgroundImage: `url(${Heroes})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center px-4">
      <h1 class="text-5xl font-bold text-white mb-3">About Us</h1>
      <p class="text-lg text-green-200">Learn more about the Tembera Urwanda Project</p>
    </div>
  </section>

  <!-- Who We Are -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Tembera Urwanda is a tourism project dedicated to showcasing the incredible
          beauty, culture, and wildlife of Rwanda — the land of a thousand hills.
        </p>
        <p class="text-gray-600 leading-relaxed">
          We connect travelers with authentic Rwandan experiences, from mountain gorilla
          trekking in Volcanoes National Park to exploring the vibrant streets of Kigali.
        </p>
      </div>
      <img :src="RudahigwaH" alt="Rwanda Heritage" class="rounded-2xl shadow-lg w-full h-64 object-cover" />
    </div>
  </section>

  <!-- Our Values -->
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-green-800 text-center mb-12">Our Values</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="bg-white rounded-2xl shadow p-6 border-t-4 border-green-700">
          <h3 class="text-lg font-bold text-green-800 mb-2">Sustainability</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            We promote eco-friendly tourism that protects Rwanda's incredible nature,
            wildlife, and environment for future generations.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-400">
          <h3 class="text-lg font-bold text-green-800 mb-2">Authenticity</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            We offer genuine cultural experiences beyond the tourist trail,
            connecting visitors with the real Rwanda.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow p-6 border-t-4 border-green-700">
          <h3 class="text-lg font-bold text-green-800 mb-2">Community</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            We support local communities through responsible tourism that
            creates jobs and preserves Rwandan culture.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- What We Offer -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-green-800 text-center mb-12">What We Offer</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img :src="Gorilla" alt="Gorilla Trekking" class="w-full h-48 object-cover" />
          <div class="p-5">
            <h3 class="text-lg font-bold text-green-800 mb-2">Gorilla Trekking</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Trek through Volcanoes National Park and encounter mountain gorillas up close.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img :src="Canopy" alt="Canopy Tour" class="w-full h-48 object-cover" />
          <div class="p-5">
            <h3 class="text-lg font-bold text-green-800 mb-2">Canopy Tours</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Soar above Rwanda's lush forest canopy on thrilling zip-line adventures.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img :src="Ingoro" alt="Cultural Tours" class="w-full h-48 object-cover" />
          <div class="p-5">
            <h3 class="text-lg font-bold text-green-800 mb-2">Cultural Tours</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Discover the rich traditions and warm hospitality of the Rwandan people.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Museum Section -->
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <img :src="Museum" alt="Museum" class="rounded-2xl shadow-lg w-full h-72 object-cover" />
      <div>
        <h2 class="text-3xl font-bold text-green-800 mb-4">Explore Our Heritage</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Rwanda's museums and cultural centers tell the story of a resilient and proud nation.
          From the National Museum to royal palaces, history comes alive at every turn.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Our guided heritage tours give you an in-depth understanding of Rwanda's past,
          present, and the vision it holds for the future.
        </p>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="bg-green-800 text-white py-12 px-4">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <p class="text-4xl font-bold text-yellow-400">500+</p>
        <p class="text-green-200 mt-1">Happy Travelers</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-yellow-400">30+</p>
        <p class="text-green-200 mt-1">Destinations</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-yellow-400">10+</p>
        <p class="text-green-200 mt-1">Years Experience</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-yellow-400">5★</p>
        <p class="text-green-200 mt-1">Average Rating</p>
      </div>
    </div>
  </section>

  <!-- Call To Action -->
  <section class="py-16 px-4 text-center bg-white">
    <h2 class="text-3xl font-bold text-green-800 mb-4">Ready to Explore Rwanda?</h2>
    <p class="text-gray-500 mb-8 text-lg">
      Let us guide you through the most beautiful country in Africa.
    </p>
    
      <a href="/Contact"
      class="bg-green-700 hover:bg-green-600 text-white font-bold px-10 py-3 rounded-full transition duration-300"
    >
      Contact Us
    </a>
  </section>

</template>