<template>
  <div class="tracking-parent-view">
    <div class="container">
      <div class="tracking-header">
        <span class="badge badge-info">Destinasi Utama 3 (Parent Route)</span>
        <h1>Pelacakan Status Pengerjaan Sepatu</h1>
        <p class="subtitle">
          Pantau tahapan cuci, pengeringan, hingga proses quality control sepatu kesayangan Anda secara transparan.
        </p>

        <!-- Parent-Child Architecture Note -->
        <div class="route-badge-info">
          <span class="route-indicator">🔍 Parent Route: <code>/tracking</code></span>
          <span class="route-separator">&rarr;</span>
          <span class="route-indicator">📄 Mengatur Rute Anak (Child Routes): <code>TrackingSearch</code> & <code>TrackingDetail (:orderId)</code></span>
        </div>
      </div>

      <!-- Nested Router View -->
      <div class="tracking-child-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracking-parent-view {
  padding-bottom: 2.5rem;
}

.tracking-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 2.5rem;
}

.tracking-header h1 {
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
  background: rgba(6, 182, 212, 0.08);
  border: 1px dashed rgba(6, 182, 212, 0.4);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  color: #0891b2;
  flex-wrap: wrap;
  justify-content: center;
}

.route-indicator code {
  background: #ffffff;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-weight: 700;
  color: #0e7490;
}

.route-separator {
  color: var(--text-light);
}

.tracking-child-container {
  min-height: 400px;
}
</style>
