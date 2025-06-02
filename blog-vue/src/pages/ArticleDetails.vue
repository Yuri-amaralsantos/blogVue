<template>
    <div class="article-details" v-if="article">
        <h1>{{ article.title }}</h1>
        <p><em>{{ article.date }}</em></p>
        <p>{{ article.summary }}</p>
        <!-- Se tiver conteúdo extra, mostrar aqui -->
    </div>
    <div v-else>
        <p>Artigo não encontrado.</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import articlesData from '../data/articles.json'

const route = useRoute()
const articleId = Number(route.params.id)
const article = articlesData.find(a => a.id === articleId)
</script>

<style scoped>
.article-details {
    padding: 2rem;
}
</style>
