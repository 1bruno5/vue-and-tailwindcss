<script setup>
import Tree from "../assets/images/Tree.png";
import Gorilla from "../assets/images/Gorilla.png";
import Canopy from "../assets/images/Canopy.png";
import Ingoro from "../assets/images/Ingoro.png";
import Museum from "../assets/images/Museum.png";
import Heroes from "../assets/images/Heroes.png";
import RudahigwaH from "../assets/images/RudahigwaH.png";
</script>

<template>
  <!-- Hero Section -->
  <section
    class="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
    :style="{ backgroundImage: `url(${Tree})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>

    <div class="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-green-600/20 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl"></div>

    <div class="relative z-10 w-full">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow">
           TEMBERA URWANDA
          </h1>

          <p class="text-base sm:text-lg text-green-100 mb-8 leading-relaxed">
            Discover the beauty of the land of a thousand hills.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:justify-center">
            <a
              href="/About"
              class="inline-flex justify-center items-center bg-green-700 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-full transition transform hover:-translate-y-0.5 shadow-lg shadow-green-900/20 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Explore Rwanda
            </a>

            <a
              href="#top-experiences"
              class="inline-flex justify-center items-center bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3 rounded-full transition border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              View Experiences
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Welcome -->
  <section class="py-16 sm:py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Welcome to Rwanda</h2>
      <p class="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
        Rwanda, the land of a thousand hills, offers breathtaking landscapes, rich culture,
        and unforgettable wildlife experiences waiting to be explored.
      </p>
    </div>
  </section>

  <!-- Top Experiences -->
  <section id="top-experiences" class="py-16 sm:py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-green-900 text-center mb-10">Top Experiences</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <!-- Card 1 -->
        <div class="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition duration-300">
          <div class="relative">
            <img :src="Gorilla" alt="Gorilla Trekking" class="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div class="p-5">
            <h3 class="text-lg sm:text-xl font-bold text-green-900 mb-2">Gorilla Trekking</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              Trek through Volcanoes National Park and meet mountain gorillas face to face in their natural habitat.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition duration-300">
          <div class="relative">
            <img :src="Canopy" alt="Canopy Walk" class="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div class="p-5">
            <h3 class="text-lg sm:text-xl font-bold text-green-900 mb-2">Nyungwe Canopy Walk</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              Walk above the treetops of Nyungwe Forest on one of Africa's longest canopy walkways.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition duration-300">
          <div class="relative">
            <img :src="Ingoro" alt="Lake Kivu" class="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div class="p-5">
            <h3 class="text-lg sm:text-xl font-bold text-green-900 mb-2">King Palace</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              Relax by the stunning shores of Palace and enjoy world-class lakeside lodges and resorts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Museum Section -->
  <section class="py-16 sm:py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
      <img :src="Museum" alt="Kigali Museum" class="rounded-2xl shadow-lg w-full aspect-[16/10] object-cover" />

      <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Explore Huye</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Huye is one of Africa's cleanest and most modern cities. Explore its vibrant markets,
          world-class restaurants, and the powerful Kigali Genocide Memorial.
        </p>
        <p class="text-gray-600 leading-relaxed">
          The city blends modernity with rich cultural heritage, making it a must-visit destination for every traveler.
        </p>

        <a
          href="/Destinations"
          class="inline-flex mt-6 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-200"
        >
          Explore Huye
        </a>
      </div>
    </div>
  </section>

  <!-- Heroes Monument -->
  <section class="py-16 sm:py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-green-900 mb-4">A Nation of Heroes</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Rwanda's story is one of incredible resilience and transformation. The Heroes Monument stands as a symbol
          of the courage and strength of the Rwandan people.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Visit Kigali's iconic landmarks and feel the spirit of a nation that rebuilt itself into one of Africa's greatest success stories.
        </p>

        <a
          href="/About"
          class="inline-flex mt-6 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-200"
        >
          Our Story
        </a>
      </div>

      <img :src="Heroes" alt="Heroes Monument" class="rounded-2xl shadow-lg w-full aspect-[16/10] object-cover" />
    </div>
  </section>

  <!-- Royal Palace Banner -->
  <section
    class="py-20 sm:py-28 px-4 relative overflow-hidden"
    :style="{ backgroundImage: `url(${RudahigwaH})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/70"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
        <h2 class="text-3xl sm:text-4xl font-extrabold mb-4 text-white">Rwanda's Royal Heritage</h2>

        <p class="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
          Step into Rwanda's royal history at the King's Palace Museum in Nyanza.
          Explore the traditional royal residence and discover the ancient kingdom of Rwanda.
        </p>

        <div class="flex justify-center sm:justify-start">
          <a
            href="/About"
            class="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-10 py-3 rounded-full transition duration-300 shadow-lg shadow-black/20 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          >
            Discover Heritage
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="bg-green-900 text-white py-12 sm:py-14 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p class="text-3xl sm:text-4xl font-bold text-yellow-300">500+</p>
          <p class="text-green-100/95 mt-2">Happy Travelers</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p class="text-3xl sm:text-4xl font-bold text-yellow-300">30+</p>
          <p class="text-green-100/95 mt-2">Destinations</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p class="text-3xl sm:text-4xl font-bold text-yellow-300">10+</p>
          <p class="text-green-100/95 mt-2">Years Experience</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
          <p class="text-3xl sm:text-4xl font-bold text-yellow-300">5★</p>
          <p class="text-green-100/95 mt-2">Average Rating</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call To Action -->
  <section class="py-16 sm:py-20 px-4 text-center bg-white">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Ready to Explore Rwanda?</h2>
      <p class="text-gray-600 mb-8 text-base sm:text-lg">
        Let us guide you through the most beautiful country in Africa.
      </p>

      <a
        href="/Contact"
        class="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-bold px-10 py-3 rounded-full transition duration-300 shadow-lg shadow-green-900/20 focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        Contact Us
      </a>
    </div>
  </section>
</template>