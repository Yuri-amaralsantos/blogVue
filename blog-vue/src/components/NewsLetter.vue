<template>
  <section class="newsletter-form">
    <h2>Fique por dentro das novidades!</h2>
    <p>Receba artigos exclusivos, tendências e análises diretamente no seu e-mail.</p>

    <div class="form-group">
      <span for="email">Assine nossa newsletter:</span>
      <input type="email" id="email" placeholder="Digite seu e-mail" />
      <button>Inscrever-se</button>
    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.newsletter-form {
  background-color: black;
  color: white;
  padding: 2rem;
  margin: 2rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.newsletter-form h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.newsletter-form p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.newsletter-form span {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-group {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.form-group input {
  flex: 1 1 250px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.form-group button {
  background-color: #49c476;
  color: black;
  font-weight: bold;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.form-group button:hover {
  background-color: #16a34a;
}
</style>
