<template>
  <div class="services-list-view">
    <!-- Breadcrumb -->
    <AppBreadcrumb :items="[ { label: 'Layanan Sepatu' } ]" />

    <!-- Page Header -->
    <div class="page-title-row">
      <div>
        <h1 class="page-title">Katalog Layanan Treatment</h1>
        <p class="page-subtitle">Pilih paket perawatan terbaik untuk sepatu kesayangan Anda</p>
      </div>
    </div>

    <!-- Filter & Search Controls -->
    <div class="filter-bar">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Cari jenis cuci (misal: Deep Clean, Unyellowing, Suede)..." 
          class="form-control search-input"
        />
        <button v-if="searchQuery" @click="searchQuery = ''" class="clear-btn">✕</button>
      </div>

      <div class="filter-chips">
        <button 
          v-for="cat in categories" 
          :key="cat.id" 
          class="filter-chip"
          :class="{ active: selectedCategory === cat.id }"
          @click="selectedCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <!-- Active Filter Status -->
    <div class="results-meta">
      <span>Menampilkan <strong>{{ filteredServices.length }}</strong> paket treatment perawatan</span>
    </div>

    <!-- Grid of Services -->
    <div class="services-grid" v-if="filteredServices.length > 0">
      <div 
        v-for="service in filteredServices" 
        :key="service.id" 
        class="card service-catalog-card card-interactive"
      >
        <div class="card-header-row">
          <div class="icon-wrap">{{ service.icon }}</div>
          <span class="badge" :class="service.badgeClass">{{ service.tag }}</span>
        </div>

        <h3 class="service-title">{{ service.name }}</h3>
        <p class="service-brief">{{ service.shortDesc }}</p>

        <!-- Feature preview list -->
        <ul class="mini-features">
          <li v-for="(feat, idx) in service.features.slice(0, 3)" :key="idx">
            <span class="feat-check">✓</span> {{ feat }}
          </li>
        </ul>

        <div class="card-footer-box">
          <div class="meta-info">
            <span class="meta-duration">⏱️ {{ service.duration }}</span>
            <span class="meta-price">{{ service.price }}</span>
          </div>

          <!-- Navigation Actions -->
          <div class="action-buttons">
            <!-- Link to Child Route /services/:id -->
            <router-link :to="`/services/${service.id}`" class="btn btn-secondary btn-sm flex-1">
              🔍 Detail Rute Anak &rarr;
            </router-link>

            <!-- Direct Booking Action to /order -->
            <router-link :to="`/order?serviceId=${service.id}`" class="btn btn-primary btn-sm">
              Booking
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-results card">
      <div class="empty-icon">👟❓</div>
      <h3>Treatment Tidak Ditemukan</h3>
      <p>Tidak ada layanan yang cocok dengan kata kunci "{{ searchQuery }}".</p>
      <button @click="searchQuery = ''; selectedCategory = 'all'" class="btn btn-primary btn-sm">
        Reset Pencarian
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppBreadcrumb from '../../components/common/AppBreadcrumb.vue'
import { servicesData } from '../../data/servicesData.js'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Semua Layanan' },
  { id: 'clean', name: 'Cuci & Express' },
  { id: 'sol', name: 'Unyellowing & Sol' },
  { id: 'special', name: 'Bahan Sensitif / Cat' }
]

const filteredServices = computed(() => {
  return servicesData.filter(item => {
    // Search filter
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          item.recommendedFor.toLowerCase().includes(searchQuery.value.toLowerCase())

    // Category filter
    let matchesCategory = true
    if (selectedCategory.value === 'clean') {
      matchesCategory = ['deep-clean', 'fast-clean'].includes(item.id)
    } else if (selectedCategory.value === 'sol') {
      matchesCategory = ['unyellowing', 'sol-repair'].includes(item.id)
    } else if (selectedCategory.value === 'special') {
      matchesCategory = ['leather-care', 'repaint-custom'].includes(item.id)
    }

    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.services-list-view {
  animation: fadeIn 0.35s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Page Title */
.page-title-row {
  margin-bottom: 1.75rem;
}

.page-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 0.35rem;
  color: var(--text-heading);
}

.page-subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
}

/* Filter Bar */
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: var(--bg-card);
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(12px);
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  font-size: 1rem;
  color: var(--text-light);
  pointer-events: none;
}

.search-input {
  padding-left: 2.75rem;
  padding-right: 2.5rem;
}

.clear-btn {
  position: absolute;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}

.clear-btn:hover {
  color: var(--primary);
}

.filter-chips {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-chip {
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
  background: var(--bg-surface-alt);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s var(--ease-smooth);
  font-family: inherit;
}

.filter-chip:hover {
  border-color: rgba(56, 189, 248, 0.3);
  color: var(--primary);
  background: var(--primary-light);
}

.filter-chip.active {
  background: var(--accent-gradient);
  border-color: transparent;
  color: #070d1e;
  font-weight: 700;
  box-shadow: 0 2px 12px rgba(56, 189, 248, 0.35);
}

.results-meta {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.results-meta strong {
  color: var(--primary);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.75rem;
}

.service-catalog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius-lg);
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.icon-wrap {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.65rem;
}

.service-title {
  font-size: 1.2rem;
  margin-bottom: 0.45rem;
  color: var(--text-heading);
}

.service-brief {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.mini-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
  background: var(--bg-surface);
  padding: 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.78rem;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
}

.feat-check {
  color: var(--success);
  font-weight: bold;
  margin-right: 0.3rem;
}

.card-footer-box {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.meta-duration {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 500;
}

.meta-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--primary);
}

.action-buttons {
  display: flex;
  gap: 0.65rem;
}

.flex-1 {
  flex: 1;
}

/* Empty State */
.empty-results {
  text-align: center;
  padding: 3.5rem 1.5rem;
}

.empty-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.empty-results h3 {
  margin-bottom: 0.5rem;
  color: var(--text-heading);
}

.empty-results p {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
