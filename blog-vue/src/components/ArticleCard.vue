<template>
  <router-link :to="`/article/${id}`" class="article-card">
    <div class="image-container">
      <img src="/image.png" alt="Article image" class="article-image" />
    </div>
    <div class="text-content">
      <a href="">{{ title }}</a>
      <span class="date">{{ date }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  id: number,
  title: string,
  date: string,
}>()
</script>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
}

.image-container {
  width: 100%;
  height: 70%;
  overflow: hidden;
  position: relative;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .article-image {
  transform: scale(1.1);
}

.text-content {
  height: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.article-card a {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  transition: text-decoration 0.3s ease;
}

.article-card:hover a {
  text-decoration: underline;
  color: #63e058;
}

.date {
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: auto;
  /* fixa no final do bloco de texto */
}
</style>
