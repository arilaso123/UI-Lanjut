<template>
  <div class="about-page">
    <div class="container">
      <AppBreadcrumb :items="[ { label: 'Tentang Kami & FAQ' } ]" />

      <!-- Header -->
      <div class="section-header">
        <span class="badge badge-primary">Destinasi Utama 4</span>
        <h1>Tentang NodeKicks Express</h1>
        <p>Solusi perawatan sepatu berstandar profesional pertama di kota dengan sistem pelacakan digital transparan.</p>
      </div>

      <!-- Story & Values Grid -->
      <div class="about-grid">
        <div class="card about-main-card">
          <h2>Kisah & Komitmen Kami</h2>
          <p class="paragraph">
            NodeKicks Express lahir dari kecintaan mendalam terhadap budaya sneakers dan kebutuhan masyarakat urban akan layanan perawatan alas kaki yang praktis, higienis, dan terpercaya.
          </p>
          <p class="paragraph">
            Kami menyadari banyak pemilik sepatu yang ragu mencuci sendiri karena khawatir merusak material suede lembut atau membuat sol karet menguning. Oleh karena itu, kami menghadirkan workshop berbasis riset material dengan formula sabun pH netral dan teknisi terlatih bersertifikasi.
          </p>

          <div class="values-row">
            <div class="val-box">
              <span class="val-icon">🧪</span>
              <h4>Formula Ramah Sepatu</h4>
              <p>100% bebas deterjen keras. Aman untuk kanvas, kulit domba, nubuck, dan mesh rajut.</p>
            </div>
            <div class="val-box">
              <span class="val-icon">🌬️</span>
              <h4>Chamber Pengering Suhu Dingin</h4>
              <p>Pengeringan ruangan dengan dehumidifier tanpa sinar matahari langsung pencegah keretakan sol.</p>
            </div>
            <div class="val-box">
              <span class="val-icon">🤝</span>
              <h4>Garansi 100% Kepuasan</h4>
              <p>Bila masih ada noda yang terlewat, kami cuci ulang tanpa dipungut biaya tambahan.</p>
            </div>
          </div>
        </div>

        <!-- Workshop Info Sidebar -->
        <div class="about-sidebar">
          <div class="card workshop-card">
            <h3>Lokasi Workshop Pusat</h3>
            <div class="divider"></div>
            
            <div class="ws-item">
              <span class="ws-icon">📍</span>
              <div>
                <strong>Alamat Utama</strong>
                <p>Jl. Pandanaran No. 12, Pleburan, Semarang Tengah, Jawa Tengah 50241</p>
              </div>
            </div>

            <div class="ws-item">
              <span class="ws-icon">⏰</span>
              <div>
                <strong>Jam Operasional</strong>
                <p>Senin - Sabtu: 09.00 - 20.00 WIB<br/>Minggu & Hari Libur: 10.00 - 17.00 WIB</p>
              </div>
            </div>

            <div class="ws-item">
              <span class="ws-icon">📱</span>
              <div>
                <strong>Customer Service</strong>
                <p>WhatsApp: 0812-9988-7766<br/>Email: hello@nodekicks.id</p>
              </div>
            </div>

            <router-link to="/order" class="btn btn-primary full-width mt-1">
              🛵 Booking Pickup Sekarang &rarr;
            </router-link>
          </div>
        </div>
      </div>

      <!-- FAQ Section Accordion -->
      <section class="faq-section">
        <div class="section-header">
          <span class="badge badge-info">Bantuan & Informasi</span>
          <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <p>Jawaban cepat untuk semua rasa ingin tahu Anda mengenai layanan kami.</p>
        </div>

        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="card faq-item"
            :class="{ open: activeFaqIndex === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h4>{{ faq.question }}</h4>
              <span class="faq-toggle-icon">{{ activeFaqIndex === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-if="activeFaqIndex === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppBreadcrumb from '../components/common/AppBreadcrumb.vue'

const activeFaqIndex = ref(0)

const toggleFaq = (index) => {
  if (activeFaqIndex.value === index) {
    activeFaqIndex.value = null
  } else {
    activeFaqIndex.value = index
  }
}

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan cuci sepatu di NodeKicks?',
    answer: 'Untuk paket Fast Clean Express pengerjaan hanya 24 jam. Paket Deep Clean standar memerlukan 2-3 hari kerja. Khusus unyellowing, repaint restorasi, atau lem sol memerlukan waktu 3-7 hari kerja demi hasil curing yang sempurna dan tahan lama.'
  },
  {
    question: 'Bagaimana cara kurir melakukan penjemputan dan pengantaran?',
    answer: 'Setelah Anda mengisi formulir di halaman Pemesanan, kurir kami akan menghubungi nomor WhatsApp Anda untuk konfirmasi jam penjemputan. Anda tidak perlu membungkus sepatu dengan kardus tebal; kurir kami membawa tote bag khusus laundry sepatu.'
  },
  {
    question: 'Apakah aman untuk sepatu berbahan suede asli dan kulit mahal?',
    answer: 'Sangat aman. Kami menggunakan teknik Dry Cleaning khusus suede dengan kuas bulu kuda lembut serta leather nourishing balm untuk kulit asli (seperti Docmart, Red Wing, atau Gucci Ace) agar kelenturan dan warna aslinya tetap terlindungi.'
  },
  {
    question: 'Bagaimana cara memantau sepatu yang sedang dicuci?',
    answer: 'Setiap pesanan memiliki Nomor Resi (misal: NK-8821). Anda cukup membuka menu Lacak Sepatu di website ini dan memasukkan nomor resi tersebut untuk melihat timeline foto dan proses pengerjaan secara real-time.'
  },
  {
    question: 'Kapan pembayaran dilakukan?',
    answer: 'Pembayaran dapat dilakukan dengan metode transfer bank atau QRIS setelah sepatu selesai dicek oleh kurir saat penjemputan, atau secara COD (tunai) saat sepatu diantar kembali.'
  }
]
</script>

<style scoped>
.about-page {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.about-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: start;
}

.about-main-card {
  padding: 2.5rem;
}

.about-main-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.values-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.val-box {
  background: var(--bg-surface-alt);
  padding: 1.25rem;
  border-radius: var(--radius-md);
}

.val-icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.5rem;
}

.val-box h4 {
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

.val-box p {
  font-size: 0.85rem;
  line-height: 1.5;
}

/* Workshop Card */
.workshop-card {
  padding: 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #e2e8f0;
}

.workshop-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.divider {
  height: 1px;
  background: var(--border-color);
  margin: 1.25rem 0;
}

.ws-item {
  display: flex;
  gap: 0.85rem;
  margin-bottom: 1.35rem;
  font-size: 0.9rem;
}

.ws-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.ws-item strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.ws-item p {
  font-size: 0.85rem;
  line-height: 1.5;
}

.full-width {
  width: 100%;
}

.mt-1 {
  margin-top: 1rem;
}

/* FAQ */
.faq-section {
  max-width: 820px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  cursor: pointer;
  padding: 1.35rem 1.75rem;
  transition: all 0.2s ease;
}

.faq-item:hover {
  border-color: var(--primary);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.faq-question h4 {
  font-size: 1.05rem;
}

.faq-toggle-icon {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  width: 24px;
  text-align: center;
}

.faq-answer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.faq-answer p {
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
