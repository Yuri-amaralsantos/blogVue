<template>
  <div>
    <Header />
    <div class="post-grid">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '../types/Post'
import Header from '../components/Header.vue'
import PostCard from '../components/PostCard.vue'

const posts = ref<Post[]>([])

onMounted(async () => {
  const res = await fetch('/src/data/posts.json')
  posts.value = await res.json()
})
</script>

<style scoped>
.post-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .post-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .post-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}


</style>
