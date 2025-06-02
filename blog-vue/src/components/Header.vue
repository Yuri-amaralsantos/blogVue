<template>
  <header class="header">
    <div class="branding">
      <h1 class="logo">CNET</h1>
      <span class="subtitle">YOUR GUIDE TO A BETTER FUTURE</span>
    </div>

    <div class="actions">
      <button class="search-button">
        <svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
      </button>
      <button class="login-button">
        Join/Login
      </button>
    </div>
  </header>
</template>


<style scoped>
.header {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
}

.branding {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 3rem;
  font-weight: 800;
  color: #dc2626; /* Tailwind's red-600 */
}

.subtitle {
  display: none;
  font-size: 0.75rem;
  color:rgb(211, 214, 219); /* Tailwind's gray-400 */
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
  padding:0.5rem;
  border-radius:10px;
}

.search-button:hover {
  border-color: #4ade80; 
  background-color: #4ade80; ;
  color:rgb(70, 67, 67);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.login-button {
  background-color: #4ade80; /* Tailwind's green-400 */
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.login-button:hover {
  background-color: #22c55e; /* Tailwind's green-500 */
}
</style>
