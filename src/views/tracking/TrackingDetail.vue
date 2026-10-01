<template>
  <div class="tracking-detail-view" v-if="order">
    <!-- Breadcrumb with parent link -->
    <AppBreadcrumb 
      :items="[
        { label: 'Pelacakan Sepatu', to: '/tracking' },
        { label: `Resi ${order.orderId}` }
      ]" 
    />

    <!-- Navigation Back Link -->
    <div class="back-nav-row">
      <router-link to="/tracking" class="back-link">
        <span class="back-arrow">&larr;</span>
        <span>Cari Resi Lain (Kembali ke Rute Induk)</span>
      </router-link>

      <span class="route-id-badge">
        Param Rute Anak: <code>:orderId = "{{ orderId }}"</code>
      </span>
    </div>

    <!-- Tracking Header Status Card -->
    <div class="card status-overview-card">
      <div class="status-top">
        <div>
          <span class="order-id-tag">Resi: {{ order.orderId }}</span>
          <h2 class="shoe-headline">{{ order.shoeModel }}</h2>
          <p class="service-subtitle">Treatment: <strong>{{ order.serviceName }}</strong> ({{ order.shoeQuantity }} Pasang)</p>
        </div>

        <div class="current-status-badge-box">
          <span class="status-badge-label">Status Saat Ini:</span>
          <div class="status-pill active-glow">
            <span class="pulse-indicator"></span>
            <span>{{ currentStepTitle }}</span>
          </div>
        </div>
      </div>

      <!-- Quick Meta Strip -->
      <div class="quick-meta-strip">
        <div class="meta-block">
          <span class="meta-label">📅 Tanggal Masuk:</span>
          <span class="meta-val">{{ order.createdAt }}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">⏱️ Estimasi Selesai:</span>
          <span class="meta-val highlight-val">{{ order.estimatedCompletion }}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">🛵 Metode:</span>
          <span class="meta-val">{{ order.pickupMethod }}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">💰 Total Biaya:</span>
          <span class="meta-val bold-val">{{ order.totalPrice }}</span>
        </div>
      </div>
    </div>

    <!-- Stepper Timeline & Order Details Grid -->
    <div class="tracking-content-grid">
      <!-- Left: Visual Stepper Timeline -->
      <div class="card timeline-card">
        <h3 class="timeline-title">
          <span>📍 Timeline Progres Pengerjaan Real-Time</span>
        </h3>
        <p class="timeline-subtitle">Setiap tahapan diperbarui langsung oleh teknisi dan kurir kami.</p>

        <div class="stepper-list">
          <div 
            v-for="(st, idx) in order.steps" 
            :key="st.stepIndex" 
            class="stepper-item"
            :class="{ 
              'is-done': st.done, 
              'is-active': st.active || (idx === order.currentStep),
              'is-pending': !st.done && idx > order.currentStep
            }"
          >
            <!-- Step Marker -->
            <div class="step-marker-col">
              <div class="marker-dot">
                <span v-if="st.done">✓</span>
                <span v-else>{{ idx + 1 }}</span>
              </div>
              <div class="marker-line" v-if="idx < order.steps.length - 1"></div>
            </div>

            <!-- Step Content -->
            <div class="step-content-col">
              <div class="step-header-line">
                <h4 class="step-name">{{ st.title }}</h4>
                <span class="step-time">{{ st.time }}</span>
              </div>
              <p class="step-explanation">{{ st.desc }}</p>
              
              <div class="active-badge" v-if="st.active || (idx === order.currentStep)">
                ⚡ Sedang Dikerjakan Teknisi
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Customer & Workshop Notes -->
      <div class="tracking-sidebar">
        <div class="card details-summary-card">
          <h4 class="sidebar-heading">Detail Pemesan</h4>
          
          <div class="detail-row">
            <span class="lbl">Nama:</span>
            <span class="val">{{ order.customerName }}</span>
          </div>
          <div class="detail-row">
            <span class="lbl">WhatsApp:</span>
            <span class="val">{{ order.phone }}</span>
          </div>
          <div class="detail-row">
            <span class="lbl">Alamat:</span>
            <span class="val address-val">{{ order.pickupAddress }}</span>
          </div>
          <div class="detail-row">
            <span class="lbl">Catatan:</span>
            <span class="val">{{ order.notes }}</span>
          </div>

          <div class="sidebar-action-box">
            <a 
              :href="`https://wa.me/6281299887766?text=Halo%20NodeKicks,%20saya%20ingin%20tanya%20progres%20resi%20${order.orderId}`" 
              target="_blank" 
              class="btn btn-outline btn-sm full-width"
            >
              💬 Tanya CS via WhatsApp
            </a>
          </div>
        </div>

        <div class="card info-box-card">
          <h4>💡 Informasi Pengambilan</h4>
          <p>Bila Anda memilih pengantaran kurir, kurir kami akan menghubungi via WhatsApp 30 menit sebelum menuju ke lokasi Anda.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Order Not Found -->
  <div v-else class="card not-found-card container">
    <div class="not-found-icon">🔍❌</div>
    <h2>Resi Tidak Ditemukan</h2>
    <p>Nomor resi <code>"{{ orderId }}"</code> tidak terdaftar dalam sistem database.</p>
    <div class="not-found-actions">
      <router-link to="/tracking" class="btn btn-primary">
        &larr; Coba Cari Resi Lain
      </router-link>
      <router-link to="/order" class="btn btn-secondary">
        Buat Pesanan Baru
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppBreadcrumb from '../../components/common/AppBreadcrumb.vue'
import { initialOrders } from '../../data/trackingData.js'

const props = defineProps({
  orderId: {
    type: String,
    required: true
  }
})

const route = useRoute()
const currentOrderId = computed(() => (props.orderId || route.params.orderId || '').toUpperCase())

const order = computed(() => {
  const query = currentOrderId.value
  return initialOrders.find(o => {
    const id = o.orderId.toUpperCase()
    return id === query || id === query.replace('SC-', 'NK-') || id === 'NK-' + query
  })
})

const currentStepTitle = computed(() => {
  if (!order.value) return ''
  const step = order.value.steps[order.value.currentStep]
  return step ? step.title : 'Sedang Diproses'
})
</script>

<style scoped>
.tracking-detail-view {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
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
  font-size: 0.95rem;
  color: var(--primary);
  padding: 0.4rem 0.85rem;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.back-link:hover {
  background: var(--primary-light);
  transform: translateX(-3px);
}

.route-id-badge {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.route-id-badge code {
  background: #f1f5f9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  color: #0369a1;
}

/* Status Overview Card */
.status-overview-card {
  padding: 2.25rem;
  margin-bottom: 2rem;
  border: 2px solid #bae6fd;
}

.status-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}

.order-id-tag {
  display: inline-block;
  font-family: monospace;
  font-weight: 800;
  font-size: 0.9rem;
  background: #f1f5f9;
  color: var(--primary);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  margin-bottom: 0.5rem;
}

.shoe-headline {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.service-subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.current-status-badge-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.status-badge-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.35rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.9rem;
  background: #e0f2fe;
  color: #0369a1;
  border: 1px solid #7dd3fc;
}

.active-glow {
  box-shadow: 0 0 14px rgba(14, 165, 233, 0.35);
}

.pulse-indicator {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #0284c7;
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(2, 132, 199, 0); }
  100% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0); }
}

.quick-meta-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
}

.meta-block {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}

.meta-val {
  font-size: 0.95rem;
  font-weight: 600;
}

.highlight-val {
  color: #d97706;
}

.bold-val {
  color: var(--primary);
  font-weight: 800;
}

/* Content Grid */
.tracking-content-grid {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 2rem;
  align-items: start;
}

.timeline-card {
  padding: 2.25rem;
}

.timeline-title {
  font-size: 1.25rem;
  margin-bottom: 0.35rem;
}

.timeline-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

/* Stepper List */
.stepper-list {
  display: flex;
  flex-direction: column;
}

.stepper-item {
  display: flex;
  gap: 1.25rem;
  position: relative;
}

.step-marker-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 800;
  background: #f1f5f9;
  color: var(--text-light);
  border: 2px solid var(--border-color);
  transition: all 0.3s;
}

.marker-line {
  width: 2px;
  flex: 1;
  background: var(--border-color);
  min-height: 45px;
  margin: 4px 0;
}

.stepper-item.is-done .marker-dot {
  background: var(--success);
  color: #ffffff;
  border-color: var(--success);
}

.stepper-item.is-done .marker-line {
  background: var(--success);
}

.stepper-item.is-active .marker-dot {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 0 12px var(--primary-glow);
}

.step-content-col {
  padding-bottom: 2rem;
  flex: 1;
}

.step-header-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.step-name {
  font-size: 1.05rem;
}

.step-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.step-explanation {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.active-badge {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #0284c7;
  background: #e0f2fe;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
}

/* Sidebar */
.tracking-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.details-summary-card {
  padding: 1.75rem;
}

.sidebar-heading {
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.detail-row {
  display: flex;
  margin-bottom: 0.85rem;
  font-size: 0.875rem;
}

.lbl {
  width: 90px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.val {
  color: var(--text-main);
  font-weight: 600;
}

.address-val {
  font-size: 0.825rem;
  font-weight: normal;
  color: var(--text-muted);
}

.sidebar-action-box {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px dashed var(--border-color);
}

.info-box-card {
  background: #f8fafc;
  padding: 1.5rem;
}

.info-box-card h4 {
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
}

.info-box-card p {
  font-size: 0.825rem;
  line-height: 1.5;
}

/* Not Found */
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
}

.not-found-card p {
  margin-bottom: 1.5rem;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 900px) {
  .tracking-content-grid {
    grid-template-columns: 1fr;
  }
  .current-status-badge-box {
    align-items: flex-start;
  }
}
</style>
