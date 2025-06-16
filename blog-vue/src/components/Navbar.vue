<template>
  <nav class="nav">
    <a href="#">Notícias</a>

    <div class="dropdown">
      <a href="#">IA</a>
      <div class="dropdown-menu">
        <a href="#">Aprendizado de Máquina</a>
        <a href="#">Redes Neurais</a>
        <a href="#">Chatbots</a>
      </div>
    </div>

    <div class="dropdown">
      <a href="#">Tecnologia</a>
      <div class="dropdown-menu">
        <a href="#">Gadgets</a>
        <a href="#">Avaliações</a>
        <a href="#">Startups</a>
      </div>
    </div>

    <a href="#">Casa</a>
    <a href="#">Entretenimento</a>
    <a href="#">Bem-estar</a>
    <a href="#">Reportagens</a>

    <div class="dropdown">
      <a href="#">Mais</a>
      <div class="dropdown-menu">
        <a href="#">Ciência</a>
        <a href="#">Saúde</a>
        <a href="#">Espaço</a>
        <a href="#">Jogos</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding-bottom: 1rem;
  position: relative;
  background-color: black;
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-evenly;

}

.nav a {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
}

.nav a:hover {
  color: #63e058;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(212, 208, 208);
  padding: 10px;
  border-radius: 5px;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-menu a {
  padding: 8px 12px;
  white-space: nowrap;
  color: black;
}

.dropdown-menu a:hover {
  background-color: #1f2937;
  color: #63e058;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}
</style>
