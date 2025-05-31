<template>
  <nav class="nav">
      <a href="#">News</a>
      <a href="#">AI</a>
      <a href="#">Tech</a>
      <a href="#">Home</a>
      <a href="#">Entertainment</a>
      <a href="#">Wellness</a>
      <a href="#">Cover Stories</a>
      <a href="#">More</a>
    </nav>
</template>

<style scoped>
.nav {
    background-color:black;
    display: flex;
    gap: 18px;
    align-items:center;
    justify-content:space-evenly;
  }

  .nav a {
    font-size:1rem;
    font-weight:600;
    color: white;
    text-decoration: none;
  }

  .nav a:hover {
    color: #ef4444; /* Tailwind's red-500 */
  }
</style>
