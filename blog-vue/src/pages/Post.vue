<template>
  <article v-if="post" class="post-page">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Post } from '../types/Post'

const route = useRoute()
const post = ref<Post | null>(null)

onMounted(async () => {
  const res = await fetch('/src/data/posts.json')
  const posts: Post[] = await res.json()
  post.value = posts.find(p => p.slug === route.params.slug) || null
})
</script>

<style scoped>
.post-page {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  margin-top: 2.5rem;
  line-height: 1.8;
}

.post-page h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #0d6efd;
  font-size: 2rem;
}

.post-page p {
  white-space: pre-line;
  font-size: 1.1rem;
  color: #333;
}
</style>

