<template>
    <div class="article-details" v-if="article">
        <div class="containerArticle">
            <h1>{{ article.title }}</h1>
            <p><em>{{ article.date }}</em></p>
            <p>{{ article.summary }}</p>
        </div>
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
.containerArticle {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.article-details {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
