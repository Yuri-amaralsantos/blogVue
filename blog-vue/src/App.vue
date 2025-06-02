<template>
  <div class="hero">
    <Header />
    <Navbar />
  </div>
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
