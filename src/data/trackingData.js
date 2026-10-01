// Mock tracking orders data for shoe care tracking - NodeKicks Express (Total: 8 Orders)

export const initialOrders = [
  {
    orderId: 'NK-8821',
    customerName: 'Ahmad Faisal',
    phone: '0812-3456-7890',
    serviceId: 'deep-clean',
    serviceName: 'Deep Clean + Unyellowing',
    shoeModel: 'Nike Air Jordan 1 High (University Blue)',
    shoeQuantity: 1,
    pickupMethod: 'Kurir Jemput (Door-to-door)',
    pickupAddress: 'Jl. Pemuda No. 45, Semarang',
    createdAt: '2026-09-22 09:30',
    estimatedCompletion: '2026-09-25 17:00',
    totalPrice: 'Rp 150.000',
    currentStep: 2,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima & Dijemput', desc: 'Sepatu telah diambil oleh kurir NodeKicks dan tiba di workshop.', time: '22 Sep, 10:15', done: true },
      { stepIndex: 1, title: 'Inspeksi & Diagnosa Awal', desc: 'Pengecekan noda, material suede/leather, serta foto kondisi sebelum cuci.', time: '22 Sep, 13:40', done: true },
      { stepIndex: 2, title: 'Proses Pencucian & Treatment', desc: 'Pembersihan deep clean bertahap dan treatment de-oksidasi unyellowing sol.', time: '23 Sep, 11:00', done: true, active: true },
      { stepIndex: 3, title: 'Quality Control & Deodorizing', desc: 'Pemeriksaan standar kebersihan, pengeringan ruang dingin, dan semprot parfum.', time: 'Estimasi 24 Sep', done: false },
      { stepIndex: 4, title: 'Selesai & Siap Diantar', desc: 'Sepatu dipacking rapi dan diserahkan kepada kurir pengantaran.', time: 'Estimasi 25 Sep', done: false }
    ],
    notes: 'Mohon hati-hati di bagian suede biru agar tidak luntur.'
  },
  {
    orderId: 'NK-9042',
    customerName: 'Nadia Putri',
    phone: '0857-9988-1122',
    serviceId: 'fast-clean',
    serviceName: 'Fast Clean Express',
    shoeModel: 'Adidas Ultraboost Light (Core White)',
    shoeQuantity: 1,
    pickupMethod: 'Drop-off di Workshop',
    pickupAddress: 'Workshop NodeKicks Jl. Pandanaran 12',
    createdAt: '2026-09-23 14:00',
    estimatedCompletion: '2026-09-24 16:00',
    totalPrice: 'Rp 40.000',
    currentStep: 4,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima', desc: 'Sepatu diserahkan di front desk workshop.', time: '23 Sep, 14:05', done: true },
      { stepIndex: 1, title: 'Inspeksi Kilat', desc: 'Pengecekan area noda luar dan midsole.', time: '23 Sep, 14:30', done: true },
      { stepIndex: 2, title: 'Pembersihan Fast Clean', desc: 'Pembersihan upper & midsole foam scrub.', time: '23 Sep, 16:00', done: true },
      { stepIndex: 3, title: 'Quality Control & Disinfeksi', desc: 'Pemeriksaan hasil dan semprotan anti-bakteri.', time: '23 Sep, 18:30', done: true },
      { stepIndex: 4, title: 'Selesai & Siap Diambil', desc: 'Sepatu sudah bersih wangi dan siap diambil di kasir!', time: '24 Sep, 10:00', done: true, active: true }
    ],
    notes: 'Diambil sendiri sore jam 5.'
  },
  {
    orderId: 'NK-7715',
    customerName: 'Rizky Ramadhan',
    phone: '0813-8877-6655',
    serviceId: 'repaint-custom',
    serviceName: 'Repaint & Color Restoration',
    shoeModel: 'Converse Chuck 70 Vintage (Black to Navy)',
    shoeQuantity: 2,
    pickupMethod: 'Kurir Jemput (Door-to-door)',
    pickupAddress: 'Perum Gatsu Indah Blok C-2',
    createdAt: '2026-09-20 11:15',
    estimatedCompletion: '2026-09-26 15:00',
    totalPrice: 'Rp 215.000',
    currentStep: 3,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima', desc: 'Sepatu telah dijemput kurir NodeKicks.', time: '20 Sep, 11:45', done: true },
      { stepIndex: 1, title: 'Pembersihan Dasar & Deglazing', desc: 'Deep clean dan persiapan pori kain canvas.', time: '21 Sep, 10:00', done: true },
      { stepIndex: 2, title: 'Pengecatan 3 Lapis', desc: 'Aplikasi cat fleksibel matte Navy blue.', time: '22 Sep, 15:30', done: true },
      { stepIndex: 3, title: 'Quality Control & Curing', desc: 'Pengeringan sealant water-repellent dan QC.', time: '24 Sep, 09:00', done: true, active: true },
      { stepIndex: 4, title: 'Siap Diantar', desc: 'Pengantaran kembali ke alamat pelanggan.', time: 'Estimasi 26 Sep', done: false }
    ],
    notes: 'Warna navy matte doff, jangan terlalu mengkilap.'
  },
  {
    orderId: 'NK-1024',
    customerName: 'Bima Satria',
    phone: '0819-7766-5544',
    serviceId: 'leather-care',
    serviceName: 'Leather & Suede Premium Care',
    shoeModel: 'Dr. Martens 1461 Smooth Leather (Cherry Red)',
    shoeQuantity: 1,
    pickupMethod: 'Kurir Jemput (Door-to-door)',
    pickupAddress: 'Jl. Rinjani No. 8, Gajahmungkur',
    createdAt: '2026-09-23 08:30',
    estimatedCompletion: '2026-09-25 15:00',
    totalPrice: 'Rp 95.000',
    currentStep: 2,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima', desc: 'Sepatu dijemput kurir di kediaman pelanggan.', time: '23 Sep, 09:00', done: true },
      { stepIndex: 1, title: 'Inspeksi Kondisi Kulit', desc: 'Pengecekan lipatan dan tingkat kekeringan kulit.', time: '23 Sep, 11:20', done: true },
      { stepIndex: 2, title: 'Cleansing & Leather Balm', desc: 'Pemberian nutrisi krim pelembap dan pembersihan pori kulit.', time: '24 Sep, 10:30', done: true, active: true },
      { stepIndex: 3, title: 'Polishing & Nano Coating', desc: 'Poles kilau dan semprotan anti air.', time: 'Estimasi 25 Sep', done: false },
      { stepIndex: 4, title: 'Selesai & Pengantaran', desc: 'Sepatu diantar kembali ke rumah pemesan.', time: 'Estimasi 25 Sep', done: false }
    ],
    notes: 'Harap poles agak glowing mengkilap.'
  },
  {
    orderId: 'NK-3351',
    customerName: 'Siti Sarah',
    phone: '0821-3344-5566',
    serviceId: 'unyellowing',
    serviceName: 'Unyellowing & Brightening',
    shoeModel: 'Nike Air Force 1 07 Triple White',
    shoeQuantity: 1,
    pickupMethod: 'Drop-off di Workshop',
    pickupAddress: 'Workshop NodeKicks Jl. Pandanaran 12',
    createdAt: '2026-09-21 16:00',
    estimatedCompletion: '2026-09-24 17:00',
    totalPrice: 'Rp 85.000',
    currentStep: 3,
    steps: [
      { stepIndex: 0, title: 'Drop-off di Front Desk', desc: 'Sepatu diterima oleh customer service.', time: '21 Sep, 16:15', done: true },
      { stepIndex: 1, title: 'Deep Wash Pra-Treatment', desc: 'Pembersihan awal upper & outsole.', time: '22 Sep, 09:00', done: true },
      { stepIndex: 2, title: 'UV Curing De-oksidasi', desc: 'Penyinaran UV chamber untuk menghilangkan warna kuning sol.', time: '23 Sep, 14:00', done: true },
      { stepIndex: 3, title: 'Sealant & Quality Check', desc: 'Pelapisan anti-oksidasi penahan kuning kembali.', time: '24 Sep, 09:15', done: true, active: true },
      { stepIndex: 4, title: 'Siap Diambil di Workshop', desc: 'Sepatu siap diambil oleh pemilik.', time: 'Estimasi 24 Sep sore', done: false }
    ],
    notes: 'Kuning di bagian heel belakang cukup tebal.'
  },
  {
    orderId: 'NK-4819',
    customerName: 'Dimas Wicaksono',
    phone: '0852-1122-3344',
    serviceId: 'sol-repair',
    serviceName: 'Reglue & Sole Repair',
    shoeModel: 'Nike Kyrie Flytrap IV (Sol Mangap Depan)',
    shoeQuantity: 1,
    pickupMethod: 'Kurir Jemput (Door-to-door)',
    pickupAddress: 'Komp. Polri No. 19, Kalicacing',
    createdAt: '2026-09-22 13:00',
    estimatedCompletion: '2026-09-26 12:00',
    totalPrice: 'Rp 75.000',
    currentStep: 1,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima', desc: 'Sepatu basket telah diambil kurir.', time: '22 Sep, 14:00', done: true },
      { stepIndex: 1, title: 'Pembersihan Residu Lem', desc: 'Scraping lem lama hingga permukaan sol bersih total.', time: '23 Sep, 15:00', done: true, active: true },
      { stepIndex: 2, title: 'Thermo Glue Activation', desc: 'Pelapisan lem industri dan aktivasi pemanas.', time: 'Estimasi 24 Sep', done: false },
      { stepIndex: 3, title: 'Clamping Press 24 Jam', desc: 'Pengepresan dengan cetakan tekanan tinggi.', time: 'Estimasi 25 Sep', done: false },
      { stepIndex: 4, title: 'Selesai & Pengiriman', desc: 'Uji kekuatan rekat dan pengiriman kurir.', time: 'Estimasi 26 Sep', done: false }
    ],
    notes: 'Dipakai main basket, lem harus benar-benar rekat.'
  },
  {
    orderId: 'NK-5520',
    customerName: 'Maya Anggraini',
    phone: '0817-6655-4433',
    serviceId: 'deep-clean',
    serviceName: 'Deep Clean Treatment',
    shoeModel: 'Vans Old Skool Classic (Black/White Canvas)',
    shoeQuantity: 2,
    pickupMethod: 'Kurir Jemput (Door-to-door)',
    pickupAddress: 'Jl. Melati IV No. 2, Tembalang',
    createdAt: '2026-09-23 10:15',
    estimatedCompletion: '2026-09-25 16:00',
    totalPrice: 'Rp 130.000',
    currentStep: 2,
    steps: [
      { stepIndex: 0, title: 'Penjemputan Sukses', desc: 'Kurir NodeKicks mengambil 2 pasang sepatu.', time: '23 Sep, 11:00', done: true },
      { stepIndex: 1, title: 'Inspeksi & Foto Awal', desc: 'Dokumentasi noda lumpur dan sol kotor.', time: '23 Sep, 13:00', done: true },
      { stepIndex: 2, title: 'Deep Foam Scrub', desc: 'Pencucian detail upper, insole, dan tali terpisah.', time: '24 Sep, 10:00', done: true, active: true },
      { stepIndex: 3, title: 'Dehumidifier Drying', desc: 'Pengeringan ruangan dingin dan disinfektan wangi.', time: 'Estimasi 25 Sep', done: false },
      { stepIndex: 4, title: 'Pengantaran Kembali', desc: 'Dikemas dalam ziplock bag dan diantar kurir.', time: 'Estimasi 25 Sep', done: false }
    ],
    notes: 'Tali sepatu yang satu diganti tali putih baru jika ada.'
  },
  {
    orderId: 'NK-6178',
    customerName: 'Hakam Aris',
    phone: '0812-9988-7711',
    serviceId: 'fast-clean',
    serviceName: 'Fast Clean Express',
    shoeModel: 'New Balance 550 White Grey',
    shoeQuantity: 1,
    pickupMethod: 'Drop-off di Workshop',
    pickupAddress: 'Workshop NodeKicks Jl. Pandanaran 12',
    createdAt: '2026-09-24 08:30',
    estimatedCompletion: '2026-09-24 20:00',
    totalPrice: 'Rp 40.000',
    currentStep: 3,
    steps: [
      { stepIndex: 0, title: 'Pesanan Diterima di Kasir', desc: 'Sepatu diserahkan pelanggan di front desk.', time: '24 Sep, 08:35', done: true },
      { stepIndex: 1, title: 'Inspeksi Cepat', desc: 'Pengecekan area noda debu & lis midsole.', time: '24 Sep, 09:00', done: true },
      { stepIndex: 2, title: 'Pembersihan Kilat 1 Jam', desc: 'Pembersihan permukaan upper dan midsole brightener.', time: '24 Sep, 10:30', done: true },
      { stepIndex: 3, title: 'Quality Control & Disinfeksi', desc: 'Pemeriksaan akhir dan semprot shoe freshener.', time: '24 Sep, 11:45', done: true, active: true },
      { stepIndex: 4, title: 'Selesai & Siap Diambil', desc: 'Sepatu bersih wangi siap diambil pemilik.', time: 'Estimasi 24 Sep, 18:00', done: false }
    ],
    notes: 'Order kilat selesai hari ini.'
  }
]
