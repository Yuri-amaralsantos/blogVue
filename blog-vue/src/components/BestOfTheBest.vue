<template>
  <section class="best-of-the-best">
    <div class="highlight">
      <div class="intro">
        <h3>Melhor do<br /><strong>MELHOR</strong></h3>
        <p>Escolhas dos editores e nossos principais guias de compra</p>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in items" :key="index">
          <a href="#">{{ item }}</a>
        </div>
        <div class="arrow">
          <button>→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  'Aqui estão as 5 melhores VPNs de 2025',
  'Melhores notebooks para 2025',
  'Estas são as melhores TVs de 2025',
  'Melhores colchões que você pode comprar em 2025'
]
</script>

<style scoped>
.best-of-the-best {
  background-color: #fef08a;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 2rem;
}

.highlight {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
}

.intro {
  max-width: 200px;
}

.intro h3 {
  font-size: 1rem;
  font-weight: 400;
}

.intro strong {
  font-size: 2rem;
  font-weight: 800;
}

.items {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
}

.item {
  border-left: 1px dashed #aaa;
  border-right: 1px dashed #aaa;
  padding: 0 1.5rem;
}

.item a {
  font-size: 12px;
  text-decoration: none;
  color: black;
}

.arrow {
  margin-left: 2rem;
  background-color: #a7f3d0;
  border-radius: 8px;
  padding: 0.5rem;
}

.arrow button {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: black;
  /* cor padrão */
}

.arrow:hover {
  background: black;
}

.arrow:hover button {
  color: #4ade80;
  /* seta verde no hover */
}
</style>
