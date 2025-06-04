<!-- components/PaginatedArticles.vue -->
<template>
    <div class="paginated-articles">
        <div class="articles-grid">
            <ArticleCard v-for="article in paginatedArticles" :id="article.id" :title="article.title"
                :summary="article.summary" :date="article.date" />
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Próxima</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleCard from './ArticleCard.vue'

interface Article {
    id: number
    title: string
    summary: string
    date: string
}

const props = defineProps<{
    articles: Article[]
}>()

const currentPage = ref(1)
const pageSize = 8

const totalPages = computed(() =>
    Math.ceil(props.articles.length / pageSize)
)

const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return props.articles.slice(start, start + pageSize)
})

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--
}
</script>

<style scoped>
.articles-grid {
    background: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.2rem;
    padding: 2rem;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 2rem;
}

button {
    background: #4ade80;
    border: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #1f2937;
    color: #4ade80;
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
    color: #8b8a8a
}
</style>
