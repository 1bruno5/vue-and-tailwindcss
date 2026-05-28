<template>
  <nav class="bg-blue-600 border-b border-blue-700 shadow-sm sticky top-0 z-10">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

     
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div class="bg-white rounded-full p-1">
          <img
            src="../assets/image.png"
            alt="Tourism Logo"
            class="w-10 h-10 object-contain rounded-full"
          />
        </div>
          </RouterLink>

    
      <div class="flex items-center gap-6">
        <RouterLink
          to="/"
          class="text-blue-100 hover:text-white font-medium transition-colors duration-200"
          active-class="text-white font-semibold border-b-2 border-white pb-0.5"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/about"
          class="text-blue-100 hover:text-white font-medium transition-colors duration-200"
          active-class="text-white font-semibold border-b-2 border-white pb-0.5"
        >
          About
        </RouterLink>

        <RouterLink
          to="/contact"
          class="text-blue-100 hover:text-white font-medium transition-colors duration-200"
          active-class="text-white font-semibold border-b-2 border-white pb-0.5"
        >
          Contact
        </RouterLink>
      </div>

    </div>
  </nav>
</template>