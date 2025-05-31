<template>
  <div class="home">
    <div class="hero">
      <Header />
      <Navbar />
    </div>

    <section class="featured-articles">
      <h2>Principais Artigos</h2>

      <div class="main-article">
        <FeaturedArticleCard
          :title="articles[0].title"
          :summary="articles[0].summary"
          :date="articles[0].date"
        />
      </div>

      <div class="articles-grid">
        <ArticleCard
          v-for="article in articles.slice(1)"
          :key="article.id"
          :title="article.title"
          :summary="article.summary"
          :date="article.date"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ArticleCard from '../components/ArticleCard.vue'
import FeaturedArticleCard from '../components/FeaturedArticleCard.vue'

const articles = [
  {
    id: 1,
    title: "IA médica supera especialistas em diagnósticos",
    summary: "Nova IA acerta mais que humanos em exames clínicos. Início de uma nova era na medicina.",
    date: "2025-05-30"
  },
  {
    id: 2,
    title: "6G promete internet 100x mais rápida",
    summary: "Primeiros testes mostram velocidades nunca vistas antes em redes móveis.",
    date: "2025-05-29"
  },
  {
    id: 3,
    title: "Startups verdes atraem bilhões em 2025",
    summary: "Soluções ecológicas estão ganhando o mercado com força.",
    date: "2025-05-28"
  },
  {
    id: 4,
    title: "Realidade mista revoluciona o ensino",
    summary: "Salas de aula imersivas são testadas em universidades brasileiras.",
    date: "2025-05-27"
  },
  {
    id: 5,
    title: "Fusão nuclear mais próxima de se tornar viável",
    summary: "Pesquisadores atingem novo marco de eficiência energética.",
    date: "2025-05-26"
  }
]
</script>

<style scoped>
.hero {
  background-color: black;
  display: flex;
  flex-direction: column;
}

.featured-articles {
  padding-left: 2rem ;
  padding-right: 2rem ;
  padding-top: 2rem ;
  background-color: black;
}

.featured-articles h2 {
  margin-top:0;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: white;
}

.main-article {
  margin-bottom: 0.5remrem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.2rem;
}
</style>
