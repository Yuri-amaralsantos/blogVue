<template>
  <section class="popular-topics">
    <h3>Explore by</h3>
    <h2>POPULAR TOPICS</h2>
    <div class="topics">
      <button v-for="(topic, i) in topics" :key="i">
        {{ topic }} →
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const topics = [
  'Mobile', 'Computing', 'VPN',
  'Gaming', 'Health', 'Home Entertainment',
  'Streaming'
]
</script>

<style scoped>
.popular-topics {
  padding: 2rem 0;
}

.popular-topics h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.popular-topics .topics {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.popular-topics button {
  background-color: white;
  color: #8b5cf6;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
}
</style>
