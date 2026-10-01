import { createRouter, createWebHistory } from 'vue-router'

// 1. Entry Point
import HomeView from '../views/HomeView.vue'

// 2. Destinasi Utama 1: Services (Hubungan Parent - Child)
import ServicesParent from '../views/services/ServicesParent.vue'
import ServicesList from '../views/services/ServicesList.vue'
import ServiceDetail from '../views/services/ServiceDetail.vue'

// 3. Destinasi Utama 2: Order
import OrderView from '../views/OrderView.vue'

// 4. Destinasi Utama 3: Tracking (Hubungan Parent - Child)
import TrackingParent from '../views/tracking/TrackingParent.vue'
import TrackingSearch from '../views/tracking/TrackingSearch.vue'
import TrackingDetail from '../views/tracking/TrackingDetail.vue'

// 5. Destinasi Utama 4: About
import AboutView from '../views/AboutView.vue'

// Fallback 404
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  // 1. Beranda / Entry Point
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Beranda - NodeKicks Express Jasa Cuci Sepatu'
    }
  },

  // 2. Destinasi Utama 1: Layanan (PARENT - CHILD RELATIONSHIP)
  {
    path: '/services',
    component: ServicesParent,
    children: [
      {
        path: '',
        name: 'ServicesList',
        component: ServicesList,
        meta: {
          title: 'Katalog Layanan Treatment - NodeKicks'
        }
      },
      {
        path: ':id',
        name: 'ServiceDetail',
        component: ServiceDetail,
        props: true,
        meta: {
          title: 'Detail Rincian Treatment Sepatu - NodeKicks'
        }
      }
    ]
  },

  // 3. Destinasi Utama 2: Pemesanan
  {
    path: '/order',
    name: 'Order',
    component: OrderView,
    meta: {
      title: 'Formulir Pemesanan & Booking Penjemputan - NodeKicks'
    }
  },

  // 4. Destinasi Utama 3: Pelacakan (PARENT - CHILD RELATIONSHIP)
  {
    path: '/tracking',
    component: TrackingParent,
    children: [
      {
        path: '',
        name: 'TrackingSearch',
        component: TrackingSearch,
        meta: {
          title: 'Pelacakan Status Cucian Sepatu - NodeKicks'
        }
      },
      {
        path: ':orderId',
        name: 'TrackingDetail',
        component: TrackingDetail,
        props: true,
        meta: {
          title: 'Timeline Progres Cucian Sepatu - NodeKicks'
        }
      }
    ]
  },

  // 5. Destinasi Utama 4: Tentang Kami
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'Tentang Kami, Lokasi & FAQ - NodeKicks'
    }
  },

  // 404 Catch All
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: '404 Halaman Tidak Ditemukan - NodeKicks'
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title dynamically based on route
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
