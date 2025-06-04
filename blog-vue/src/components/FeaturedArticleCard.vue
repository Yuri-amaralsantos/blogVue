<template>
  <router-link :to="`/article/${id}`" class="featured-card">
    <div class="image-container">
      <img src="/image.png" alt="Article image" class="article-image" />
    </div>
    <div class="text-content">
      <a href="">{{ title }}</a>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  id: number,
  title: string
}>()
</script>

<style scoped>
.featured-card {
  display: flex;
  flex-direction: row;
  background-color: #1f2937;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-decoration: none;
}

.image-container {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .article-image {
  transform: scale(1.1);
}

.text-content {
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-content a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  transition: text-decoration 0.3s ease;
}

.featured-card:hover {
  background-color: #63e058;
}

.featured-card:hover .text-content a {
  text-decoration: underline;
  color: #1f2937;
}
</style>
