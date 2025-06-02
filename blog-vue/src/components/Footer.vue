<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="branding">
        <h1 class="logo">TECH</h1>
        <span class="subtitle">
          SEU<br />
          ESPAÇO<br />
          PARA A<br />
          TECNOLOGIA
        </span>
      </div>

      <div class="social-links">
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        © {{ new Date().getFullYear() }} Yuri amaral santos. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Nenhuma lógica necessária aqui, data dinâmica no template
</script>

<style scoped>
.footer {
  background-color: #111;
  color: white;
  font-size: 0.9rem;
  padding: 2rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #333;
  padding-bottom: 2rem;
}

.branding {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  align-items: center;
}

.logo {
  font-size: 4rem;
  font-weight: bold;
  color: red;
  line-height: 1;
}

.subtitle {
  font-size: 1rem;
  font-weight: bolder;
  color: #dc2626;
  line-height: 1.2;
  white-space: pre-line;
}

.social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: #a3e635;
  align-items: center;
}

.social-links a {
  color: #a3e635;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #4ade80;
}

.footer-bottom {
  margin-top: 2rem;
  text-align: center;
  color: #a3e635;
}

.copyright {
  font-size: 0.75rem;
}
</style>
