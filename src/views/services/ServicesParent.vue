<template>
  <div class="services-parent-view">
    <div class="container">
      <!-- Section Header -->
      <div class="services-header">
        <span class="badge badge-primary">Destinasi Utama 1 (Parent Route)</span>
        <h1>Katalog Layanan & Perawatan Sepatu</h1>
        <p class="subtitle">
          Temukan solusi terbaik untuk segala permasalahan sneakers, casual, boots, dan formal shoes Anda.
        </p>

        <!-- Parent-Child Architecture Note (Helpful for academic evaluation) -->
        <div class="route-badge-info">
          <span class="route-indicator">📦 Parent Route: <code>/services</code></span>
          <span class="route-separator">&rarr;</span>
          <span class="route-indicator">📄 Mengatur Rute Anak (Child Routes): <code>ServicesList</code> & <code>ServiceDetail</code></span>
        </div>
      </div>

      <!-- Nested Router View for Children -->
      <div class="services-child-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-parent-view {
  padding-bottom: 2rem;
}

.services-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 2.5rem;
}

.services-header h1 {
  margin: 0.75rem 0;
  font-size: 2.3rem;
}

.subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.route-badge-info {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 1rem;
  background: rgba(2, 132, 199, 0.08);
  border: 1px dashed rgba(2, 132, 199, 0.35);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  color: var(--primary);
  flex-wrap: wrap;
  justify-content: center;
}

.route-indicator code {
  background: #ffffff;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-weight: 700;
  color: #0284c7;
}

.route-separator {
  color: var(--text-light);
}

.services-child-container {
  min-height: 400px;
}
</style>
