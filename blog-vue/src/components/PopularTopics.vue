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
  padding: 2rem 2rem;
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
  font-weight: bolder;
  background-color: white;
  color: #8b5cf6;
  border: 1px solid #b49cee;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.popular-topics button:hover {
  background-color: #4ade80;
  color: black;
  border: 1px solid #4ade80;

}
</style>
