<template>
  <div class="order-page">
    <div class="container">
      <AppBreadcrumb :items="[ { label: 'Formulir Pemesanan' } ]" />

      <div class="section-header">
        <span class="badge badge-primary">Destinasi Utama 2</span>
        <h1>Formulir Booking Cuci Sepatu Online</h1>
        <p>Lengkapi detail pesanan Anda di bawah ini. Kurir kami siap menjemput sepatu kotor Anda tepat waktu.</p>
      </div>

      <!-- Main Form Grid -->
      <div class="order-layout">
        <!-- Form Section -->
        <div class="card order-form-card">
          <form @submit.prevent="handleSubmitOrder">
            <!-- Section 1: Customer Data -->
            <div class="form-section">
              <h3 class="form-section-title">
                <span class="step-badge">1</span>
                <span>Data Pelanggan</span>
              </h3>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="customerName">Nama Lengkap *</label>
                  <input 
                    id="customerName"
                    type="text" 
                    v-model="form.name" 
                    required 
                    placeholder="Contoh: Budi Santoso"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="customerPhone">Nomor WhatsApp *</label>
                  <input 
                    id="customerPhone"
                    type="tel" 
                    v-model="form.phone" 
                    required 
                    placeholder="Contoh: 0812-3456-7890"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <!-- Section 2: Treatment & Shoes -->
            <div class="form-section">
              <h3 class="form-section-title">
                <span class="step-badge">2</span>
                <span>Pilihan Layanan & Sepatu</span>
              </h3>

              <div class="form-group">
                <label class="form-label" for="serviceSelect">Paket Treatment Perawatan *</label>
                <select 
                  id="serviceSelect"
                  v-model="form.serviceId" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled>-- Pilih Jenis Treatment --</option>
                  <option v-for="srv in servicesData" :key="srv.id" :value="srv.id">
                    {{ srv.name }} ({{ srv.price }}) - {{ srv.duration }}
                  </option>
                </select>
                <div class="helper-link" v-if="form.serviceId">
                  <router-link :to="`/services/${form.serviceId}`" target="_blank">
                    Lihat detail teknis paket terpilih ini di tab baru &rarr;
                  </router-link>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="shoeModel">Merk & Model Sepatu *</label>
                  <input 
                    id="shoeModel"
                    type="text" 
                    v-model="form.shoeModel" 
                    required 
                    placeholder="Contoh: Nike Air Jordan 1 / Vans Old Skool"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="shoeQty">Jumlah Pasang *</label>
                  <div class="qty-control">
                    <button type="button" class="qty-btn" @click="decrementQty">-</button>
                    <input 
                      id="shoeQty"
                      type="number" 
                      min="1" 
                      max="10" 
                      v-model.number="form.quantity" 
                      class="form-control qty-input" 
                    />
                    <button type="button" class="qty-btn" @click="incrementQty">+</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Pickup Method -->
            <div class="form-section">
              <h3 class="form-section-title">
                <span class="step-badge">3</span>
                <span>Metode Penyerahan Sepatu</span>
              </h3>

              <div class="delivery-options">
                <label class="option-card" :class="{ selected: form.pickupMethod === 'pickup' }">
                  <input 
                    type="radio" 
                    value="pickup" 
                    v-model="form.pickupMethod" 
                    class="sr-only" 
                  />
                  <div class="option-header">
                    <span class="option-icon">🛵</span>
                    <strong>Kurir Jemput ke Rumah</strong>
                  </div>
                  <p class="option-desc">Kurir kami menjemput ke alamat Anda. Biaya Rp 15.000 (Gratis jika order 2 pasang+).</p>
                </label>

                <label class="option-card" :class="{ selected: form.pickupMethod === 'dropoff' }">
                  <input 
                    type="radio" 
                    value="dropoff" 
                    v-model="form.pickupMethod" 
                    class="sr-only" 
                  />
                  <div class="option-header">
                    <span class="option-icon">🏬</span>
                    <strong>Antar Sendiri (Drop-off)</strong>
                  </div>
                  <p class="option-desc">Antar langsung ke workshop kami di Jl. Pandanaran 12, Semarang. Tanpa biaya kurir.</p>
                </label>
              </div>

              <!-- Address if pickup selected -->
              <div class="form-group" v-if="form.pickupMethod === 'pickup'">
                <label class="form-label" for="pickupAddress">Alamat Lengkap Penjemputan *</label>
                <textarea 
                  id="pickupAddress"
                  v-model="form.address" 
                  required 
                  rows="3" 
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, patokan lokasi..."
                  class="form-textarea"
                ></textarea>
              </div>

              <div class="form-group">
                <label class="form-label" for="notes">Catatan Khusus untuk Teknisi (Opsional)</label>
                <input 
                  id="notes"
                  type="text" 
                  v-model="form.notes" 
                  placeholder="Misal: noda oli di bagian tumit, bahan suede jangan disikat kasar"
                  class="form-control"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary btn-lg full-width submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">Memproses Pesanan...</span>
              <span v-else>Konfirmasi & Terbitkan Resi Booking &rarr;</span>
            </button>
          </form>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="order-summary-sidebar">
          <div class="card summary-card">
            <h3>Ringkasan Estimasi Biaya</h3>
            <div class="summary-divider"></div>

            <div class="summary-line">
              <span>Layanan Terpilih:</span>
              <strong>{{ selectedService ? selectedService.name : 'Belum dipilih' }}</strong>
            </div>

            <div class="summary-line">
              <span>Harga Satuan:</span>
              <span>{{ selectedService ? selectedService.price : 'Rp 0' }}</span>
            </div>

            <div class="summary-line">
              <span>Jumlah:</span>
              <span>{{ form.quantity }} Pasang</span>
            </div>

            <div class="summary-line">
              <span>Biaya Kurir Pickup:</span>
              <span :class="{ 'free-tag': courierFee === 0 }">
                {{ courierFee === 0 ? 'GRATIS (Promo)' : `Rp ${courierFee.toLocaleString('id-ID')}` }}
              </span>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-total-line">
              <span>Total Estimasi:</span>
              <span class="total-price">Rp {{ totalEstimation.toLocaleString('id-ID') }}</span>
            </div>

            <div class="guarantee-box">
              <span class="g-icon">🛡️</span>
              <div>
                <strong>Garansi Cuci Ulang</strong>
                <p>Pembayaran dilakukan via transfer / COD saat kurir menjemput.</p>
              </div>
            </div>
          </div>

          <!-- Quick Navigation Tip -->
          <div class="card navigation-tip-card">
            <h4>💡 Jalur Navigasi Terhubung</h4>
            <p>Setelah menekan tombol pemesanan, sistem akan otomatis mengarahkan Anda ke <strong>Halaman Lacak Status (Destinasi 3)</strong> untuk memantau pengerjaan secara real-time.</p>
          </div>
        </div>
      </div>

      <!-- Success Modal Notification -->
      <div class="modal-overlay" v-if="newCreatedOrder">
        <div class="modal-dialog">
          <div class="modal-celebrate-icon">🎉</div>
          <h2>Booking Cuci Berhasil Diterbitkan!</h2>
          <p class="modal-lead">Terima kasih, <strong>{{ newCreatedOrder.customerName }}</strong>. Pesanan cuci sepatu Anda telah berhasil dicatat.</p>

          <div class="order-token-box">
            <span class="token-label">Nomor Resi Pelacakan Anda:</span>
            <div class="token-code">{{ newCreatedOrder.orderId }}</div>
            <span class="token-hint">Simpan nomor ini untuk mengecek status cucian kapan saja.</span>
          </div>

          <div class="modal-actions">
            <router-link :to="`/tracking/${newCreatedOrder.orderId}`" class="btn btn-primary full-width">
              🔍 Langsung Lacak Status Sepatu Ini (Rute Anak) &rarr;
            </router-link>
            <router-link to="/" class="btn btn-secondary full-width">
              Kembali ke Beranda
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppBreadcrumb from '../components/common/AppBreadcrumb.vue'
import { servicesData } from '../data/servicesData.js'
import { initialOrders } from '../data/trackingData.js'

const route = useRoute()

const form = reactive({
  name: '',
  phone: '',
  serviceId: 'deep-clean',
  shoeModel: '',
  quantity: 1,
  pickupMethod: 'pickup',
  address: '',
  notes: ''
})

const isSubmitting = ref(false)
const newCreatedOrder = ref(null)

onMounted(() => {
  // Check if serviceId was provided via query param from /services/:id or Home
  if (route.query.serviceId && servicesData.some(s => s.id === route.query.serviceId)) {
    form.serviceId = route.query.serviceId
  }
})

const selectedService = computed(() => {
  return servicesData.find(s => s.id === form.serviceId)
})

const courierFee = computed(() => {
  if (form.pickupMethod === 'dropoff') return 0
  // Free courier fee if ordering 2 or more pairs
  return form.quantity >= 2 ? 0 : 15000
})

const totalEstimation = computed(() => {
  const basePrice = selectedService.value ? selectedService.value.numericPrice : 0
  return (basePrice * form.quantity) + courierFee.value
})

const incrementQty = () => {
  if (form.quantity < 10) form.quantity++
}

const decrementQty = () => {
  if (form.quantity > 1) form.quantity--
}

const handleSubmitOrder = () => {
  isSubmitting.value = true

  setTimeout(() => {
    // Generate unique order ID
    const randomId = 'NK-' + Math.floor(1000 + Math.random() * 9000)
    
    const newOrder = {
      orderId: randomId,
      customerName: form.name,
      phone: form.phone,
      serviceId: form.serviceId,
      serviceName: selectedService.value ? selectedService.value.name : 'Custom Treatment',
      shoeModel: form.shoeModel,
      shoeQuantity: form.quantity,
      pickupMethod: form.pickupMethod === 'pickup' ? 'Kurir Jemput (Door-to-door)' : 'Drop-off di Workshop',
      pickupAddress: form.pickupMethod === 'pickup' ? form.address : 'Workshop NodeKicks Pandanaran',
      createdAt: 'Hari ini, baru saja',
      estimatedCompletion: '3 Hari kedepan',
      totalPrice: `Rp ${totalEstimation.value.toLocaleString('id-ID')}`,
      currentStep: 0,
      steps: [
        { stepIndex: 0, title: 'Pesanan Diterima & Dijadwalkan Jemput', desc: 'Sistem telah menerima booking dan menugaskan kurir.', time: 'Baru saja', done: true, active: true },
        { stepIndex: 1, title: 'Inspeksi Kondisi Awal', desc: 'Pengecekan noda dan foto sebelum pencucian.', time: 'Menunggu kurir tiba', done: false },
        { stepIndex: 2, title: 'Proses Pencucian & Treatment', desc: 'Pengerjaan treatment sesuai spesifikasi paket.', time: 'Dijadwalkan', done: false },
        { stepIndex: 3, title: 'Quality Control & Disinfeksi', desc: 'Pemeriksaan kebersihan dan parfum sepatu.', time: 'Dijadwalkan', done: false },
        { stepIndex: 4, title: 'Selesai & Pengantaran Balik', desc: 'Sepatu diantar kembali ke alamat Anda.', time: 'Dijadwalkan', done: false }
      ],
      notes: form.notes || 'Tidak ada catatan'
    }

    // Prepend to initialOrders mock database so tracking view can find it immediately
    initialOrders.unshift(newOrder)
    newCreatedOrder.value = newOrder
    isSubmitting.value = false
  }, 600)
}
</script>

<style scoped>
.order-page {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.order-layout {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2rem;
  align-items: start;
}

.order-form-card {
  padding: 2.25rem;
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.form-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.15rem;
  margin-bottom: 1.25rem;
}

.step-badge {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 800;
}

.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.helper-link {
  margin-top: 0.45rem;
  font-size: 0.8rem;
}

.helper-link a {
  color: var(--primary);
  text-decoration: underline;
}

/* Quantity control */
.qty-control {
  display: flex;
  align-items: center;
}

.qty-btn {
  width: 42px;
  height: 42px;
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-color);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.qty-btn:first-child {
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}

.qty-btn:last-child {
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.qty-btn:hover {
  background: var(--bg-surface);
}

.qty-input {
  border-radius: 0 !important;
  text-align: center;
  width: 60px;
}

/* Delivery radio cards */
.delivery-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.option-card {
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.option-card:hover {
  border-color: #94a3b8;
}

.option-card.selected {
  border-color: var(--primary);
  background: rgba(56, 189, 248, 0.06);
}

.option-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.option-icon {
  font-size: 1.25rem;
}

.option-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.submit-btn {
  margin-top: 1rem;
}

/* Order Summary */
.order-summary-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: calc(var(--nav-height) + 1.5rem);
}

.summary-card {
  padding: 1.75rem;
}

.summary-card h3 {
  font-size: 1.15rem;
}

.summary-divider {
  height: 1px;
  background: var(--border-color);
  margin: 1.25rem 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.85rem;
}

.summary-line span:first-child {
  color: var(--text-muted);
}

.free-tag {
  color: var(--success);
  font-weight: 700;
}

.summary-total-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.summary-total-line span:first-child {
  font-size: 1.05rem;
  font-weight: 600;
}

.total-price {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary);
}

.guarantee-box {
  display: flex;
  gap: 0.75rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
}

.g-icon {
  font-size: 1.5rem;
}

.navigation-tip-card {
  background: var(--success-light);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.2);
}

.navigation-tip-card h4 {
  font-size: 0.95rem;
  color: #34d399;
  margin-bottom: 0.35rem;
}

.navigation-tip-card p {
  font-size: 0.825rem;
  color: #34d399;
  opacity: 0.85;
  line-height: 1.5;
}

/* Modal Dialog */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 2000;
}

.modal-dialog {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: var(--shadow-xl);
  animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

.modal-celebrate-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.modal-dialog h2 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.modal-lead {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.order-token-box {
  background: var(--bg-surface);
  border: 2px dashed rgba(56, 189, 248, 0.4);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  margin-bottom: 1.75rem;
}

.token-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.35rem;
}

.token-code {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--primary);
  font-family: monospace;
}

.token-hint {
  display: block;
  font-size: 0.75rem;
  color: var(--text-light);
  margin-top: 0.35rem;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 850px) {
  .order-layout {
    grid-template-columns: 1fr;
  }
  .form-grid-2 {
    grid-template-columns: 1fr;
  }
  .delivery-options {
    grid-template-columns: 1fr;
  }
}
</style>
