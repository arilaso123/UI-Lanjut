<template>
  <div class="not-found-page container">
    <div class="card not-found-box">
      <div class="code-badge">404 Error</div>
      <h1>Halaman Tidak Ditemukan</h1>
      <p>Jalur halaman yang Anda tuju tidak terdaftar dalam struktur sitemap aplikasi kami.</p>

      <div class="action-row">
        <router-link to="/" class="btn btn-primary btn-lg">
          🏠 Kembali ke Beranda
        </router-link>
        <router-link to="/services" class="btn btn-secondary btn-lg">
          📦 Lihat Katalog Layanan
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
}

.not-found-box {
  max-width: 580px;
  width: 100%;
  text-align: center;
  padding: 3.5rem 2rem;
}

.code-badge {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 800;
  color: #ef4444;
  background: #fee2e2;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
}

.not-found-box h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.not-found-box p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.action-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
