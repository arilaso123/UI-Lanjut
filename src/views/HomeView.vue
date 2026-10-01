<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="pulse-dot"></span>
            <span>Shoe Cleaning & Treatment</span>
          </div>
          <h1 class="hero-title">
            Sepatu Bersih, Wangi & <span class="gradient-text">Tampil Seperti Baru</span>
          </h1>
          <p class="hero-subtitle">
            Layanan cuci sepatu premium. Percayakan sepatu anda pada kami.
          </p>

          <div class="hero-actions">
            <router-link to="/order" class="btn btn-primary btn-lg">
              <span>🚀 Pesan Pickup Sekarang</span>
            </router-link>
            <router-link to="/services" class="btn btn-outline btn-lg">
              <span>📦 Lihat Katalog Layanan</span>
            </router-link>
          </div>

          <!-- Quick Stats -->
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">8</span>
              <span class="stat-desc">Total Orderan</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">5.0 ★</span>
              <span class="stat-desc">Rating Kepuasan</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">24 Jam</span>
              <span class="stat-desc">Layanan Kilat</span>
            </div>
          </div>
        </div>

        <!-- Hero Visual Showcase -->
        <div class="hero-visual">
          <div class="visual-card">
            <div class="visual-badge">Treatment Populer</div>
            <div class="visual-sneaker-icon">
              <span class="sneaker-emoji">👟</span>
              <div class="sparkle-circle c1">✨</div>
              <div class="sparkle-circle c2">🫧</div>
            </div>
            <h3 class="visual-card-title">Deep Clean + Unyellowing</h3>
            <p class="visual-card-desc">Bebas kotoran membandel, sol putih bebas oksidasi kuning.</p>
            
            <div class="visual-meta">
              <div class="price-tag">Mulai Rp 50.000</div>
              <router-link to="/services/deep-clean" class="btn btn-sm btn-outline">
                Detail &rarr;
              </router-link>
            </div>
          </div>

          <!-- Floating Info Cards -->
          <div class="floating-card float-top">
            <span class="badge badge-success">✓ Terjamin</span>
            <span class="float-text">Cairan Ramah Bahan Khusus</span>
          </div>

          <div class="floating-card float-bottom">
            <span class="badge badge-info">🛵 Pickup</span>
            <span class="float-text">Gratis Jemput Area Kota</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sitemap Navigation Banner -->
    <section class="sitemap-guide-section">
      <div class="container">
        <div class="sitemap-card">
          <div class="sitemap-card-left">
            <span class="badge badge-info">Sitemap Architecture</span>
            <h3>Jelajahi Struktur Navigasi Aplikasi</h3>
            <p>Aplikasi ini memiliki 1 Beranda, 4 Destinasi Utama, dan 2 Hubungan Parent-Child terstruktur.</p>
          </div>
          <div class="sitemap-flow-pills">
            <router-link to="/" class="flow-pill active">
              1. Beranda (Home)
            </router-link>
            <span class="flow-arrow">&rarr;</span>
            <router-link to="/services" class="flow-pill">
              2. Layanan (Parent) &rarr; Detail (Child)
            </router-link>
            <span class="flow-arrow">&rarr;</span>
            <router-link to="/order" class="flow-pill">
              3. Pemesanan (Form)
            </router-link>
            <span class="flow-arrow">&rarr;</span>
            <router-link to="/tracking" class="flow-pill">
              4. Lacak Sepatu (Parent) &rarr; Status (Child)
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="section services-preview">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-primary">Pilihan Perawatan</span>
          <h2>Layanan Unggulan Kami</h2>
          <p>Pilih paket perawatan yang paling sesuai dengan kebutuhan dan material sepatu Anda.</p>
        </div>

        <div class="services-grid">
          <div 
            v-for="service in featuredServices" 
            :key="service.id" 
            class="card service-card card-interactive"
            @click="goToServiceDetail(service.id)"
          >
            <div class="service-card-top">
              <span class="service-icon">{{ service.icon }}</span>
              <span class="badge" :class="service.badgeClass">{{ service.tag }}</span>
            </div>
            
            <h3 class="service-name">{{ service.name }}</h3>
            <p class="service-desc">{{ service.shortDesc }}</p>
            
            <div class="service-specs-row">
              <span class="spec-chip">⏱️ {{ service.duration }}</span>
              <span class="spec-price">{{ service.price }}</span>
            </div>

            <div class="service-card-actions">
              <router-link :to="`/services/${service.id}`" class="btn btn-sm btn-secondary full-width">
                Lihat Rincian &rarr;
              </router-link>
            </div>
          </div>
        </div>

        <div class="view-all-cta">
          <router-link to="/services" class="btn btn-outline btn-lg">
            Lihat Semua 6 Katalog Layanan Lengkap &rarr;
          </router-link>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section workflow-section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-warning">Alur Pemesanan</span>
          <h2>4 Langkah Mudah Cuci Sepatu Online</h2>
          <p>Proses praktis tanpa perlu keluar rumah atau repot antar ke workshop.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h4>Pilih Treatment</h4>
            <p>Jelajahi halaman katalog layanan dan pilih perawatan yang dibutuhkan sepatu Anda.</p>
            <router-link to="/services" class="step-link">Buka Katalog &rarr;</router-link>
          </div>

          <div class="step-card">
            <div class="step-number">02</div>
            <h4>Booking & Pickup</h4>
            <p>Isi formulir alamat dan jadwalkan penjemputan oleh kurir NodeKicks.</p>
            <router-link to="/order" class="step-link">Form Booking &rarr;</router-link>
          </div>

          <div class="step-card">
            <div class="step-number">03</div>
            <h4>Pantau Progres (Live)</h4>
            <p>Cek nomor resi untuk melihat status pencucian, pengeringan, hingga QC.</p>
            <router-link to="/tracking/NK-8821" class="step-link">Coba Demo Tracking &rarr;</router-link>
          </div>

          <div class="step-card">
            <div class="step-number">04</div>
            <h4>Diantar Bersih Wangi</h4>
            <p>Sepatu selesai dikerjakan dan dikirim kembali dalam packaging ziplock higienis.</p>
            <span class="step-check">✓ Siap Dipakai</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="section testimonial-section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-primary">Testimoni Nyata</span>
          <h2>Kata Mereka yang Sudah Mencoba</h2>
        </div>

        <div class="testimonial-grid">
          <div class="card testimonial-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"Air Jordan 1 saya solnya kuning parah dan ada noda kecap di canvas. Ambil paket Unyellowing + Deep Clean, hasilnya kayak beli baru di store!"</p>
            <div class="reviewer">
              <strong>Bima Pratama</strong>
              <span>Kolektor Sneakers, Semarang</span>
            </div>
          </div>

          <div class="card testimonial-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"Fitur lacak status cuciannya sangat membantu! Jadi tahu persis kapan sepatu lagi dicuci, dikeringkan, dan kapan kurirnya otw ngantar."</p>
            <div class="reviewer">
              <strong>Annisa Maharani</strong>
              <span>Mahasiswi Undip</span>
            </div>
          </div>

          <div class="card testimonial-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"Pelayanan ramah, bahan kulit Docmart saya yang kusam jadi berkilau dan lembap lagi. Sangat direkomendasikan!"</p>
            <div class="reviewer">
              <strong>Dimas Surya</strong>
              <span>Arsitek</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Big CTA Banner -->
    <section class="cta-banner-section">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-content">
            <h2>Sepatu Kotor Menumpuk? Jangan Tunda Lagi!</h2>
            <p>Dapatkan diskon 15% untuk pemesanan pertama cuci 2 pasang sepatu atau lebih.</p>
            <div class="cta-btns">
              <router-link to="/order" class="btn btn-primary btn-lg">
                Jadwalkan Penjemputan Sekarang &rarr;
              </router-link>
              <router-link to="/about" class="btn btn-outline btn-lg">
                Pelajari Tentang Kami
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { servicesData } from '../data/servicesData.js'

const router = useRouter()

// Ambil 3 layanan terpopuler untuk showcase di Beranda
const featuredServices = computed(() => servicesData.slice(0, 3))

const goToServiceDetail = (id) => {
  router.push(`/services/${id}`)
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* ─── Hero Section ─────────────────────────────────── */
.hero-section {
  padding: 3rem 0 4rem;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-light);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.hero-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.gradient-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.stat-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border-color);
}

/* ─── Visual Card ──────────────────────────────────── */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  transition: all 0.4s var(--ease-smooth);
}

.visual-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl), var(--shadow-glow-lg);
}

.visual-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-gradient);
  color: #070d1e;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.25rem 0.85rem;
  border-radius: var(--radius-full);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.visual-sneaker-icon {
  position: relative;
  margin: 1rem auto 1.5rem;
  width: 110px;
  height: 110px;
  background: var(--primary-light);
  border: 1px solid rgba(56, 189, 248, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sneaker-emoji {
  font-size: 3.5rem;
  filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3));
}

.sparkle-circle {
  position: absolute;
  font-size: 1.15rem;
}

.c1 { top: 5px; right: 5px; animation: floatAnim 3s ease-in-out infinite; }
.c2 { bottom: 8px; left: 0px; animation: floatAnim 2.5s ease-in-out infinite reverse; }

@keyframes floatAnim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.visual-card-title {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
  color: var(--text-heading);
}

.visual-card-desc {
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
}

.visual-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.price-tag {
  font-weight: 800;
  color: var(--primary);
  font-size: 1.05rem;
}

.floating-card {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  backdrop-filter: blur(12px);
  color: var(--text-main);
}

.float-top {
  top: 10px;
  right: -25px;
  animation: floatAnim 4s ease-in-out infinite;
}

.float-bottom {
  bottom: 15px;
  left: -20px;
  animation: floatAnim 3.5s ease-in-out infinite reverse;
}

/* ─── Sitemap Guidance Section ─────────────────────── */
.sitemap-guide-section {
  padding: 0.5rem 0;
}

.sitemap-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  box-shadow: var(--shadow-md);
}

.sitemap-card-left h3 {
  font-size: 1.15rem;
  margin: 0.35rem 0;
  color: var(--text-heading);
}

.sitemap-card-left p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.sitemap-flow-pills {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.flow-pill {
  padding: 0.45rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  background: var(--bg-surface-alt);
  color: var(--text-muted);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: all 0.25s var(--ease-smooth);
}

.flow-pill:hover, .flow-pill.active {
  background: var(--primary-light);
  color: var(--primary);
  border-color: rgba(56, 189, 248, 0.3);
}

.flow-arrow {
  color: var(--text-light);
  font-weight: bold;
  font-size: 0.85rem;
}

/* ─── Services Preview ─────────────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
  margin-bottom: 2.5rem;
}

.service-card {
  display: flex;
  flex-direction: column;
}

.service-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.service-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: var(--radius-md);
}

.service-name {
  font-size: 1.15rem;
  margin-bottom: 0.45rem;
  color: var(--text-heading);
}

.service-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  color: var(--text-muted);
}

.service-specs-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-top: 1px solid var(--border-color);
  margin-bottom: 1.25rem;
}

.spec-chip {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.spec-price {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary);
}

.full-width {
  width: 100%;
}

.view-all-cta {
  text-align: center;
}

/* ─── Workflow Steps ───────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s var(--ease-smooth);
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  border-color: rgba(56, 189, 248, 0.3);
}

.step-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.step-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-heading);
}

.step-card p {
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  color: var(--text-muted);
}

.step-link {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  transition: all 0.2s;
}

.step-link:hover {
  color: var(--primary-hover);
}

.step-check {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--success);
}

/* ─── Testimonials ─────────────────────────────────── */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stars {
  color: #f59e0b;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.review-text {
  font-size: 0.92rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.reviewer {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-color);
  padding-top: 0.75rem;
}

.reviewer strong {
  font-size: 0.92rem;
  color: var(--text-heading);
}

.reviewer span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* ─── CTA Banner ───────────────────────────────────── */
.cta-banner {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-heading);
  border-radius: var(--radius-xl);
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta-banner h2 {
  color: var(--text-heading);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 1rem;
  position: relative;
}

.cta-banner p {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 2rem;
  position: relative;
}

.cta-btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
}

/* ─── Responsive ───────────────────────────────────── */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-subtitle {
    margin: 0 auto 2rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-stats {
    justify-content: center;
  }
  .sitemap-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .float-top, .float-bottom {
    display: none;
  }
}
</style>
