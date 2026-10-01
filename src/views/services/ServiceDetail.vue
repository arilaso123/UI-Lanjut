<template>
  <div class="service-detail-view" v-if="service">
    <!-- Breadcrumb with Parent Link -->
    <AppBreadcrumb 
      :items="[
        { label: 'Layanan Sepatu', to: '/services' },
        { label: service.name }
      ]" 
    />

    <!-- Navigation Back Link -->
    <div class="back-nav-row">
      <router-link to="/services" class="back-link">
        <span class="back-arrow">&larr;</span>
        <span>Kembali ke Katalog Layanan (Rute Induk)</span>
      </router-link>

      <span class="route-id-badge">
        Param Rute Anak: <code>:id = "{{ id }}"</code>
      </span>
    </div>

    <!-- Main Detail Layout Grid -->
    <div class="detail-grid">
      <!-- Left Column: Information & Process Steps -->
      <div class="detail-main">
        <div class="card detail-header-card">
          <div class="detail-badge-row">
            <span class="service-detail-icon">{{ service.icon }}</span>
            <span class="badge" :class="service.badgeClass">{{ service.tag }}</span>
          </div>

          <h1 class="service-title">{{ service.name }}</h1>
          <p class="service-lead">{{ service.fullDesc }}</p>

          <div class="recommendation-box">
            <strong>👟 Rekomendasi Bahan Sepatu:</strong>
            <p>{{ service.recommendedFor }}</p>
          </div>
        </div>

        <!-- Step-by-step Process Section -->
        <div class="card steps-card">
          <h3 class="card-section-title">
            <span>🔬 Tahapan Pengerjaan Standar Workshop</span>
          </h3>
          <p class="section-desc">Setiap pasang sepatu ditangani dengan cermat melalui tahap pengerjaan terstandarisasi:</p>

          <div class="process-timeline">
            <div v-for="step in service.steps" :key="step.step" class="timeline-step">
              <div class="step-badge-col">
                <div class="circle-num">{{ step.step }}</div>
                <div class="line-connector" v-if="step.step < service.steps.length"></div>
              </div>
              <div class="step-info-col">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-desc">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- What's Included -->
        <div class="card included-card">
          <h3 class="card-section-title">✨ Yang Anda Dapatkan dalam Paket Ini:</h3>
          <div class="features-checklist">
            <div v-for="(feat, idx) in service.features" :key="idx" class="feature-item">
              <span class="feat-icon">✓</span>
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Booking Box & Price Summary -->
      <div class="detail-sidebar">
        <div class="card booking-sidebar-card">
          <div class="pricing-summary">
            <span class="price-label">Biaya Per Pasang</span>
            <div class="price-amount">{{ service.price }}</div>
            <span class="badge badge-success">✓ Garansi Bersih 100%</span>
          </div>

          <div class="quick-specs-list">
            <div class="spec-line">
              <span class="spec-label">⏱️ Estimasi Waktu:</span>
              <span class="spec-value">{{ service.duration }}</span>
            </div>
            <div class="spec-line">
              <span class="spec-label">🛵 Antar Jemput:</span>
              <span class="spec-value">Tersedia Pickup</span>
            </div>
            <div class="spec-line">
              <span class="spec-label">📦 Kemasan:</span>
              <span class="spec-value">Ziplock + Silica Gel</span>
            </div>
          </div>

          <!-- Direct CTA to Order View -->
          <div class="order-cta-box">
            <router-link 
              :to="{ path: '/order', query: { serviceId: service.id } }" 
              class="btn btn-primary btn-lg full-width"
            >
              ⚡ Pesan Layanan Ini Sekarang &rarr;
            </router-link>
            <p class="cta-note">Formulir pemesanan akan otomatis terisi pilihan ini.</p>
          </div>

          <!-- Quick FAQ in Sidebar -->
          <div class="sidebar-help">
            <h4>Punya Pertanyaan Khusus?</h4>
            <p>Konsultasikan kondisi sepatu Anda via WhatsApp langsung dengan teknisi kami.</p>
            <a href="https://wa.me/6287873844044" target="_blank" class="btn btn-secondary btn-sm full-width">
              💬 Chat Teknisi Workshop
            </a>
          </div>
        </div>

        <!-- Other Services Shortcut -->
        <div class="card related-services-card">
          <h4>Lihat Layanan Lainnya</h4>
          <div class="other-links">
            <router-link 
              v-for="other in otherServices" 
              :key="other.id" 
              :to="`/services/${other.id}`"
              class="other-link-item"
            >
              <span class="other-icon">{{ other.icon }}</span>
              <div class="other-info">
                <span class="other-name">{{ other.name }}</span>
                <span class="other-price">{{ other.price }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 404 Treatment Not Found -->
  <div v-else class="card not-found-card container">
    <div class="not-found-icon">⚠️</div>
    <h2>Layanan Tidak Ditemukan</h2>
    <p>ID Layanan <code>"{{ id }}"</code> tidak tersedia di database katalog.</p>
    <router-link to="/services" class="btn btn-primary">
      &larr; Kembali ke Daftar Layanan
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppBreadcrumb from '../../components/common/AppBreadcrumb.vue'
import { servicesData } from '../../data/servicesData.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const route = useRoute()
const serviceId = computed(() => props.id || route.params.id)

const service = computed(() => {
  return servicesData.find(item => item.id === serviceId.value)
})

const otherServices = computed(() => {
  return servicesData.filter(item => item.id !== serviceId.value).slice(0, 3)
})
</script>

<style scoped>
.service-detail-view {
  animation: fadeIn 0.35s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.back-nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary);
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.25s var(--ease-smooth);
}

.back-link:hover {
  background: var(--primary-light);
  border-color: rgba(56, 189, 248, 0.3);
  transform: translateX(-3px);
}

.back-arrow {
  font-size: 1.1rem;
}

.route-id-badge {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.route-id-badge code {
  background: var(--bg-surface-alt);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  color: var(--primary);
  border: 1px solid var(--border-color);
}

/* Detail Grid */
.detail-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2rem;
  align-items: start;
}

.detail-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.detail-header-card {
  padding: 2.25rem;
}

.detail-badge-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.service-detail-icon {
  font-size: 2.25rem;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: var(--radius-md);
}

.service-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 0.75rem;
  color: var(--text-heading);
}

.service-lead {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.recommendation-box {
  background: var(--bg-surface);
  border-left: 3px solid var(--primary);
  padding: 1rem 1.25rem;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-size: 0.92rem;
}

.recommendation-box strong {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--text-heading);
}

.recommendation-box p {
  color: var(--text-muted);
  margin: 0;
}

/* Process Timeline */
.steps-card {
  padding: 2.25rem;
}

.card-section-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-heading);
}

.section-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

.process-timeline {
  display: flex;
  flex-direction: column;
}

.timeline-step {
  display: flex;
  gap: 1.25rem;
  position: relative;
}

.step-badge-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: #070d1e;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
  z-index: 2;
  flex-shrink: 0;
}

.line-connector {
  width: 2px;
  flex: 1;
  background: rgba(56, 189, 248, 0.15);
  min-height: 30px;
  margin: 4px 0;
}

.step-info-col {
  padding-bottom: 1.75rem;
}

.step-title {
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
  color: var(--text-heading);
}

.step-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.55;
}

/* Features checklist */
.included-card {
  padding: 2.25rem;
}

.features-checklist {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: var(--text-main);
}

.feat-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--success-light);
  color: #34d399;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.72rem;
  flex-shrink: 0;
}

/* Sidebar */
.detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: calc(var(--nav-height) + 1.5rem);
}

.booking-sidebar-card {
  padding: 2rem;
  border-color: rgba(56, 189, 248, 0.2);
}

.pricing-summary {
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
}

.price-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.25rem;
}

.price-amount {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.quick-specs-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.75rem;
}

.spec-line {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}

.spec-label {
  color: var(--text-muted);
}

.spec-value {
  font-weight: 600;
  color: var(--text-main);
}

.full-width {
  width: 100%;
}

.cta-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: 0.5rem;
}

.sidebar-help {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.sidebar-help h4 {
  font-size: 0.92rem;
  margin-bottom: 0.35rem;
  color: var(--text-heading);
}

.sidebar-help p {
  font-size: 0.78rem;
  margin-bottom: 0.85rem;
}

/* Related Services */
.related-services-card h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-heading);
}

.other-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.other-link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: all 0.25s var(--ease-smooth);
}

.other-link-item:hover {
  background: var(--primary-light);
  border-color: rgba(56, 189, 248, 0.3);
  transform: translateX(4px);
}

.other-icon {
  font-size: 1.4rem;
}

.other-info {
  display: flex;
  flex-direction: column;
}

.other-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
}

.other-price {
  font-size: 0.78rem;
  color: var(--primary);
  font-weight: 700;
}

/* 404 Card */
.not-found-card {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 3rem auto;
}

.not-found-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.not-found-card h2 {
  margin-bottom: 0.75rem;
  color: var(--text-heading);
}

.not-found-card p {
  margin-bottom: 1.5rem;
}

.not-found-card code {
  background: var(--bg-surface-alt);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: var(--primary);
}

@media (max-width: 900px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .detail-sidebar {
    position: static;
  }
}
</style>
