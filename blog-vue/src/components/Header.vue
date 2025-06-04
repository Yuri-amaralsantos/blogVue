<template>
  <header class="header">
    <div class="branding">
      <RouterLink to="/" class="logo-link">
        <h1 class="logo">BLOG</h1>
      </RouterLink>
      <span class="subtitle">SEU<br> ESPAÇO <br> PARA A <br>TECNLOGIA </span>
    </div>

    <div class="actions">
      <div class="search-container">
        <input v-model="searchQuery" @input="filterResults" @blur="hideDropdown" @focus="showDropdown = true"
          type="text" placeholder="Buscar artigo por título ou categoria" />
        <ul v-if="showDropdown && searchQuery && filteredArticles.length" class="search-dropdown">
          <li v-for="article in filteredArticles" :key="article.id" @mousedown.prevent="goToArticle(article.id)">
            {{ article.title }}
          </li>
        </ul>
      </div>



      <button class="login-button">
        Login
      </button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showSearch = ref(false)
const searchQuery = ref('')
const showDropdown = ref(false)

const articles = [
  { id: 1, title: 'IA médica supera especialistas em diagnósticos', category: 'AI' },
  { id: 2, title: '6G promete internet 100x mais rápida', category: 'Tech' },
  { id: 3, title: 'Startups verdes atraem bilhões em 2025', category: 'Tech' },
  { id: 4, title: 'Realidade mista revoluciona o ensino', category: 'Educação' },
  { id: 5, title: 'Fusão nuclear mais próxima de se tornar viável', category: 'Ciência' },
]

const filteredArticles = ref([])

function toggleSearch() {
  showSearch.value = !showSearch.value
  if (showSearch.value) {
    setTimeout(() => document.querySelector('.search-container input')?.focus(), 100)
  }
}

function filterResults() {
  const q = searchQuery.value.toLowerCase()
  filteredArticles.value = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
  )
}

function goToArticle(id) {
  showDropdown.value = false
  showSearch.value = false
  searchQuery.value = ''
  router.push({ name: 'ArticleDetails', params: { id } })
}

function hideDropdown() {
  setTimeout(() => {
    showDropdown.value = false
  }, 100)
}
</script>

<style scoped>
.header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;
}

.branding {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 5rem;
  font-weight: 800;
  color: #63e058;
}

.subtitle {
  display: none;
  font-size: 1rem;
  font-weight: bolder;
  color: #63e058;
}

@media (min-width: 640px) {
  .subtitle {
    display: inline;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.search-container {
  position: relative;
}

.search-container input {
  padding: 12px 14px;
  border-radius: 4px;
  border: none;
  width: 400px;
  transition: all 0.2s ease-in-out;
}

.search-dropdown {
  list-style-type: none;
  padding-left: 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  color: black;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
}

.search-dropdown li {
  padding: 8px 12px;
  cursor: pointer;
}

.search-dropdown li:hover {
  background-color: #1f2937;
  color: #63e058;
}





.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.logo-link {
  text-decoration: none;
}

.login-button {
  background-color: #63e058;
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.login-button:hover {
  background-color: #22c55e;
}

.header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;
}

.branding {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 640px) {
  .subtitle {
    display: inline;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-button {
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
}

.search-button:hover {
  border-color: #4ade80;
  background-color: #4ade80;
  ;
  color: rgb(70, 67, 67);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.login-button {
  background-color: #4ade80;
  /* Tailwind's green-400 */
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.login-button:hover {
  background-color: #22c55e;
  /* Tailwind's green-500 */
}
</style>
