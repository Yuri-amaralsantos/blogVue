<template>
  <router-link :to="`/post/${post.slug}`" class="post-card-link">
    <div class="post-card">
      <h2>{{ post.title }}</h2>
      <p>{{ post.summary }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post'
defineProps<{ post: Post }>()
</script>

<style scoped>
.post-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 12px 24px rgba(153, 150, 150, 0.89);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 200px;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.post-card h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #0d6efd;
  font-size: 1.6rem;
}

.post-card p {
  color: #444;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
