// Mock data for sneaker cleaning & restoration services

export const servicesData = [
  {
    id: 'deep-clean',
    name: 'Deep Clean Treatment',
    tag: 'Paling Populer',
    badgeClass: 'badge-primary',
    shortDesc: 'Pembersihan mendalam menyeluruh dari upper, midsole, outsole, insole hingga tali sepatu.',
    fullDesc: 'Treatment pembersihan menyeluruh standar premium. Kami menggunakan cairan pembersih ramah lingkungan khusus material sepatu, kuas bertingkat kelembutan (soft, medium, hard bristle) agar tidak merusak tekstur sepatu kesayangan Anda.',
    price: 'Rp 50.000',
    numericPrice: 50000,
    duration: '3 - 4 Hari',
    recommendedFor: 'Sneakers harian, kanvas, knit, suede ringan, dan running shoes yang kotor membandel.',
    icon: '👟',
    features: [
      'Pembersihan Upper & Tongue mendalam',
      'Pembersihan Midsole & Outsole detail',
      'Pencucian Insole & Tali sepatu terpisah',
      'Treatment Anti-Bakteri & Parfum Sepatu Premium',
      'Free silica gel & ziplock protective packaging'
    ],
    steps: [
      { step: 1, title: 'Dry Brushing', desc: 'Menghilangkan debu dan kotoran kering permukaan sepatu.' },
      { step: 2, title: 'Deep Foam Wash', desc: 'Pembersihan menyeluruh dengan formula foam khusus pH netral.' },
      { step: 3, title: 'Deodorizing & Drying', desc: 'Pengeringan dengan suhu terkontrol (tanpa jemur sinar matahari langsung).' },
      { step: 4, title: 'Final Finishing', desc: 'Semprotan antibakteri aroma segar dan QC ketat.' }
    ]
  },
  {
    id: 'fast-clean',
    name: 'Fast Clean Express',
    tag: 'Selesai 24 Jam',
    badgeClass: 'badge-info',
    shortDesc: 'Pembersihan kilat bagian luar sepatu untuk kebutuhan mendesak.',
    fullDesc: 'Solusi tepat ketika Anda butuh sepatu bersih segera untuk acara penting besok. Fokus pada pembersihan area yang tampak langsung: upper dan midsole.',
    price: 'Rp 55.000',
    numericPrice: 55000,
    duration: '1 Hari (24 Jam)',
    recommendedFor: 'Sneakers yang hanya terkena noda ringan atau butuh kesegaran instan sebelum dipakai bepergian.',
    icon: '⚡',
    features: [
      'Quick foam cleaning area Upper',
      'Pembersihan noda Midsole',
      'Penghilangan bau instan dengan shoe freshener',
      'Pengerjaan prioritas antrean'
    ],
    steps: [
      { step: 1, title: 'Surface Cleaning', desc: 'Pembersihan cepat debu & cipratan air.' },
      { step: 2, title: 'Midsole Scrub', desc: 'Pembersihan lis midsole hingga cerah.' },
      { step: 3, title: 'Quick Dry & Spray', desc: 'Pengeringan cepat dan semprotan wangi.' }
    ]
  },
  {
    id: 'unyellowing',
    name: 'Unyellowing & Brightening',
    tag: 'Spesialis Sol Menguning',
    badgeClass: 'badge-warning',
    shortDesc: 'Treatment kimia khusus untuk mengembalikan midsole menguning agar kembali putih cerah.',
    fullDesc: 'Midsole berbahan karet/EVA yang menguning karena proses oksidasi tidak bisa hilang hanya dengan sabun biasa. Layanan Unyellowing menggunakan formula de-oksidasi khusus serta penyinaran UV terkontrol untuk mengembalikan warna asli sol sepatu Anda.',
    price: 'Rp 40.000',
    numericPrice: 40000,
    duration: '3 - 4 Hari',
    recommendedFor: 'Sepatu dengan sol karet putih yang menguning (misal: Air Force 1, Stan Smith, Vans Old Skool).',
    icon: '✨',
    features: [
      'Termasuk Deep Clean menyeluruh',
      'Aplikasi formula Anti-Oxidation cream bertahap',
      'Proses pemaparan UV chamber terkontrol',
      'Finishing protective sealant agar tidak cepat kuning kembali'
    ],
    steps: [
      { step: 1, title: 'Base Deep Cleaning', desc: 'Pembersihan dasar sebelum treatment kimia.' },
      { step: 2, title: 'Oxidant Application', desc: 'Pelapisan pasta unyellowing pada area sol.' },
      { step: 3, title: 'UV Curing Process', desc: 'Penyinaran terukur 4-8 jam dalam chamber khusus.' },
      { step: 4, title: 'Neutralizing & Seal', desc: 'Pembersihan residu dan pelapisan pelindung sol.' }
    ]
  },
  {
    id: 'leather-care',
    name: 'Leather & Suede Premium Care',
    tag: 'Bahan Sensitif',
    badgeClass: 'badge-primary',
    shortDesc: 'Perawatan khusus sepatu kulit asli, sintetis, nubuck, dan suede berharga.',
    fullDesc: 'Sepatu kulit dan suede membutuhkan penanganan ekstra sensitif. Kami menggunakan lotion pelembap kulit (leather balm) dan kuas bulu kuda halus untuk suede agar serat kain tidak rusak dan kilau alaminya terjaga.',
    price: 'Rp 60.000',
    numericPrice: 60000,
    duration: '3 Hari',
    recommendedFor: 'Pantofel, boots (Docmart, Red Wing), sneakers kulit mewah, dan suede originals.',
    icon: '👞',
    features: [
      'Pembersih khusus dry cleaning suede / lather soap',
      'Conditioning & nourishing cream untuk menjaga kelembapan kulit',
      'Suede revive & brushing untuk mengembalikan tekstur beludru',
      'Waterproof nano-coating gratis'
    ],
    steps: [
      { step: 1, title: 'Material Inspection', desc: 'Pemeriksaan jenis kulit dan keutuhan warna.' },
      { step: 2, title: 'Gentle Cleansing', desc: 'Pembersihan memakai pembersih non-alkohol.' },
      { step: 3, title: 'Leather Balm & Nourish', desc: 'Pemberian nutrisi pelembap kulit pencegah retak.' },
      { step: 4, title: 'Buffing & Protective Coating', desc: 'Poles kilau dan semprotan anti air (water repellent).' }
    ]
  },
  {
    id: 'repaint-custom',
    name: 'Repaint & Color Restoration',
    tag: 'Restorasi Total',
    badgeClass: 'badge-info',
    shortDesc: 'Pengecatan ulang warna pudar atau kustomisasi warna baru sesuai selera.',
    fullDesc: 'Warna sepatu Anda pudar atau terkelupas? Kami menggunakan cat akrilik fleksibel khusus sepatu import yang tahan air, tidak kaku, dan tidak mudah retak. Menjadikan sepatu lama tampak seperti baru keluar dari toko.',
    price: 'Rp 150.000',
    numericPrice: 150000,
    duration: '5 - 7 Hari',
    recommendedFor: 'Sepatu yang warnanya sudah kusam, tergores dalam, atau ingin ganti warna.',
    icon: '🎨',
    features: [
      'Termasuk Deep Clean pra-pengecatan',
      'Cat fleksibel kualitas internasional khusus footwear',
      'Finishing matte, satin, atau gloss pelindung antigores',
      'Garansi pudar dalam 30 hari'
    ],
    steps: [
      { step: 1, title: 'Deep Prep & Deglazing', desc: 'Penghilangan lapisan lama agar cat baru merekat sempurna.' },
      { step: 2, title: 'Layered Painting', desc: 'Pengecatan 3-4 lapis tipis dengan airbrush/kuas halus.' },
      { step: 3, title: 'Drying & Sealant', desc: 'Penguncian warna dengan finisher tahan gores.' }
    ]
  },
  {
    id: 'sol-repair',
    name: 'Reglue & Sole Repair',
    tag: 'Reparasi',
    badgeClass: 'badge-warning',
    shortDesc: 'Perbaikan sol lepas, pengeleman ulang berkekuatan tinggi, dan jahitan sol.',
    fullDesc: 'Sol sepatu Anda copot atau mangap? Kami menggunakan lem bonding industri khusus sepatu dengan metode press panas yang tahan air dan fleksibel saat melangkah.',
    price: 'Rp 75.000',
    numericPrice: 75000,
    duration: '3 - 4 Hari',
    recommendedFor: 'Sepatu basket, futsal, running, dan sneakers yang solnya terlepas dari upper.',
    icon: '🔨',
    features: [
      'Pembersihan sisa lem lama hingga bersih total',
      'Aplikasi adhesive primer & heat-activated glue',
      'Press kencang dengan molding khusus',
      'Garansi lem lepas 1 bulan'
    ],
    steps: [
      { step: 1, title: 'Adhesive Removal', desc: 'Pembersihan bekas lem lama dengan solvent khusus.' },
      { step: 2, title: 'Glue & Heat Activation', desc: 'Pelapisan lem baru dan pemanasan thermo.' },
      { step: 3, title: 'Clamp & Curing', desc: 'Pengepresan selama 24 jam untuk daya rekat maksimal.' }
    ]
  }
]
