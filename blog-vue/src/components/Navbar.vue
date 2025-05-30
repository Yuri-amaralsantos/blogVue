<template>
  <nav class="navbar">
    <div class="container nav-content">
      <h1 class="logo">Meu Blog</h1>
      <div class="buttons">
      <router-link to="/">Home</router-link>
      <router-link to="/">Sobre</router-link>
      <router-link to="/">Contato</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(105, 103, 103, 0.77);
}

.navbar div a{
margin-left:1rem;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0d6efd;
}

.buttons{
  padding-right: 1.5rem;
}
</style>
