<template>
  <div class="home">


    <section class="featured-articles">

      <div class="mainArticle">
        <FeaturedArticleCard :id="articles[0].id" :title="articles[0].title" :summary="articles[0].summary"
          :date="articles[0].date" />
      </div>

      <div class="articles-grid">
        <ArticleCard v-for="article in articles.slice(1, 5)" :key="article.id" :id="article.id" :title="article.title"
          :date="article.date" />
      </div>
    </section>

    <BestOfTheBest />

    <hr class="dotted-separator" />

    <h2>Tech</h2>
    <div class="articles-grid">
      <ArticleCard v-for="article in articles.slice(5, 9)" :id="article.id" :title="article.title"
        :summary="article.summary" :date="article.date" />
    </div>

    <PopularTopics />

    <hr class="dotted-separator" />

    <h2>Todos Artigos</h2>
    <PaginatedArticles :articles="articles" />



  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import FeaturedArticleCard from '../components/FeaturedArticleCard.vue'
import BestOfTheBest from '../components/BestOfTheBest.vue'
import PopularTopics from '../components/PopularTopics.vue'
import PaginatedArticles from '../components/PaginatedArticles.vue'
import articlesData from '../data/articles.json'

const props = defineProps<{ search: string }>()

const articles = computed(() => {
  if (!props.search) return articlesData

  const term = props.search.toLowerCase()
  return articlesData.filter(article =>
    article.title.toLowerCase().includes(term) ||
    article.summary.toLowerCase().includes(term)
  )
})
</script>


<style scoped>
.hero {
  background-color: black;
  display: flex;
  flex-direction: column;
}

.mainArticle {
  background: black;
  padding-top: 2rem;
}

h2 {
  margin: 0 2rem;
}

.featured-articles h2 {
  margin-top: 0;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: white;
}


.articles-grid {
  background: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.2rem;
  padding: 2rem;
}

.dotted-separator {
  border: none;
  border-bottom: 1px dotted #999;
  /* Cor e estilo da linha */
  margin: 2rem 2rem;
  /* Espaçamento horizontal e vertical */
}
</style>
