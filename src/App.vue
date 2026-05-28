<script setup>
import NavBar from "./components/NavBar.vue"
import Home from "./views/Home.vue"
import { RouterView } from "vue-router";
import Footer from "./views/Footer.vue";
</script>

<template>
  <NavBar />
 <!-- <Home/>-->
 <RouterView/>
 <Footer/>
</template>
