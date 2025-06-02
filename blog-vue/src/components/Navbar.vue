<template>
  <nav class="nav">
    <a href="#">News</a>

    <div class="dropdown">
      <a href="#">AI</a>
      <div class="dropdown-menu">
        <a href="#">Machine Learning</a>
        <a href="#">Neural Networks</a>
        <a href="#">Chatbots</a>
      </div>
    </div>

    <div class="dropdown">
      <a href="#">Tech</a>
      <div class="dropdown-menu">
        <a href="#">Gadgets</a>
        <a href="#">Reviews</a>
        <a href="#">Startups</a>
      </div>
    </div>

    <a href="#">Home</a>
    <a href="#">Entertainment</a>
    <a href="#">Wellness</a>
    <a href="#">Cover Stories</a>

    <div class="dropdown">
      <a href="#">More</a>
      <div class="dropdown-menu">
        <a href="#">Science</a>
        <a href="#">Health</a>
        <a href="#">Space</a>
        <a href="#">Gaming</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
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
  color: #ef4444;
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
  background-color: white;
  padding: 10px;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-menu a {
  padding: 8px 12px;
  white-space: nowrap;
  color:black;
}

.dropdown-menu a:hover {
  background-color: #1f2937;
  color: #ef4444;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}
</style>
