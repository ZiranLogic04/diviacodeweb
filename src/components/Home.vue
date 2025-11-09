<template>
  <div class="min-h-screen bg-bg-primary">
    <header class="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border">
      <div class="relative">
        <!-- Main header bar -->
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
          <!-- Left menu items -->
          <nav class="hidden lg:flex items-center gap-8">
            <button
              v-for="item in leftMenuItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`"
            >
              {{ item.label }}
            </button>
          </nav>

          <!-- Center trapezoid with logo - positioned absolutely -->
          <div class="absolute left-1/2 -translate-x-1/2 top-full">
            <svg
              width="170"
              height="60"
              class="block"
              viewBox="0 0 240 96"
              style="overflow: visible"
            >
              <defs>
                <!-- Clip path terbuka di atas -->
                <clipPath id="clip-trapezoid-open-top">
                  <!-- Bentuk seperti trapezoid tapi bagian atasnya diperpanjang ke atas -->
                  <path
                    d="
            M -10 -100
            L 0 0
            L 30 65
            L 210 65
            L 240 0
            L 250 -100
            Z
          "
                  />
                </clipPath>
              </defs>

              <!-- Bentuk trapezoid border -->
              <path
                d="M 0 0 L 30 65 L 210 65 L 240 0 Z"
                fill="black"
                stroke="white"
                stroke-width="3"
                class="text-border"
              />

              <!-- Video di-clip oleh trapezoid -->
              <g clip-path="url(#clip-trapezoid-open-top)">
                <foreignObject x="-85" y="-180" width="400" height="320">
                  <video
                    autoplay
                    loop
                    muted
                    playsinline
                    class="w-full h-full object-contain"
                    style="pointer-events: none; background: transparent"
                    poster="/images/place.jpg"
                    @loadeddata="onVideoLoad"
                  >
                    <source :src="logo" type="video/webm" />
                  </video>
                </foreignObject>
              </g>
            </svg>
          </div>

          <!-- Right menu items -->
          <nav class="hidden lg:flex items-center gap-8">
            <button
              v-for="item in rightMenuItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`"
            >
              {{ item.label }}
            </button>
          </nav>

          <!-- Mobile menu button -->
          <button
          @click="toggleMobileMenu"
           class="lg:hidden text-foreground p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <transition name="fade">
  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-0 z-50 flex lg:hidden"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      @click="closeMobileMenu"
    ></div>

    <!-- Sliding Panel -->
    <div
      class="relative ml-auto w-72 h-full bg-gradient-to-b from-black to-neutral-900 border-l border-border shadow-xl transform transition-transform duration-300 ease-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      @click.stop
    >
      <!-- Close Button -->
      <button
        class="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        @click="closeMobileMenu"
      >
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 6l14 14M6 20L20 6" />
        </svg>
      </button>

      <!-- Menu Content -->
      <div class="p-6 mt-10 flex flex-col justify-between h-full">
        <div class="space-y-6">
          <!-- Menu Items -->
          <nav class="space-y-4">
            <button
              v-for="item in menuItems"
              :key="item.id"
              @click="handleMobileMenuClick(item.id)"
              class="block w-full text-left text-lg font-semibold tracking-wide relative group"
            >
              <span
                :class="activeSection === item.id ? 'text-primary' : 'text-gray-300 group-hover:text-primary transition-colors'"
              >
                {{ item.label }}
              </span>
              <span
                v-if="activeSection === item.id"
                class="absolute left-0 bottom-0 w-8 h-[2px] bg-primary mt-1 rounded-full"
              ></span>
            </button>
          </nav>
        </div>

        <!-- Bottom Contact -->
        <div class="border-t border-border pt-6 space-y-4">
          <a
            href="https://wa.me/62882001284722"
            target="_blank"
            class="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            <MessageCircle :size="16" />
            <span>+62 882-0012-84722</span>
          </a>
          <a
            href="mailto:AdminDiviacode@gmail.com"
            class="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            <Mail :size="16" />
            <span>AdminDiviacode@gmail.com</span>
          </a>

          <button
            @click="openWhatsAppDirect"
            class="w-full mt-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            💬 Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  </div>
</transition>
    <!-- Hero Section -->
    <section
      id="beranda"
      class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-slate-950 px-6 text-center"
    >
      <!-- Background Grid -->
      <div class="absolute inset-0 bg-grid-blue/10 opacity-10 animate-grid-move"></div>

      <!-- Glowing Cyan Bubbles -->
      <div
        class="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-10 right-1/4 w-72 h-72 bg-cyan-300/15 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-10 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl animate-float-slow"
      ></div>

      <!-- Smooth Animated EKG Line -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1600 400" preserveAspectRatio="none" class="w-full h-full opacity-30">
          <defs>
            <linearGradient id="ekgGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#06b6d4" stop-opacity="1" />
              <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- EKG Line -->
          <path
            d="M0,200 L100,200 L150,100 L200,300 L250,200 L300,200 L350,150 L400,250 L450,200 L500,200 L550,100 L600,300 L650,200 L700,200 L750,150 L800,250 L850,200 L900,200 L950,100 L1000,300 L1100,200 L1150,200 L1200,150 L1300,250 L1400,200 L1500,200 L1600,200"
            fill="none"
            stroke="url(#ekgGradient)"
            stroke-width="2.5"
            stroke-linecap="round"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-dasharray"
              values="10,290; 290,10; 10,290"
              dur="8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-600"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-3xl mx-auto space-y-8 mt-32 md:mt-0 ">
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
        >
          Solusi Digital Lewat
          <br class="hidden md:block" />
          <span
            class="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mt-[-0.2em]"
          >
            Kode Website
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Bangun website cepat, modern, dan responsif bersama Diviacode Web. Transformasi ide
          digital Anda menjadi kenyataan dengan teknologi terkini.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
          <button @click="scrollToSection('project')" class="btn-primary">
            Lihat Project
            <ArrowRight class="ml-2" :size="20" />
          </button>
          <button @click="scrollToSection('templates')" class="btn-secondary">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Showcase -->
    <section id="project" class="section-container">
      <div class="section-header">
        <h2 class="section-title">Showcase <span class="text-brand">Project</span></h2>
        <p class="section-subtitle">Hasil karya yang telah kami selesaikan untuk berbagai klien</p>
      </div>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image-wrapper">
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
              loading="lazy"
              decoding="async"
            />
            <div class="project-overlay">
              <button class="btn-view-detail">
                Cooming Soon
                <ExternalLink class="ml-2" :size="16" />
              </button>
            </div>
          </div>
          <div class="project-card-content">
            <span class="project-badge">{{ project.category }}</span>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-tech-stack">
              <span v-for="(tech, idx) in project.technologies" :key="idx" class="tech-badge">{{
                tech
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Website Siap Beli -->
    <section id="templates" class="section-container section-dark">
      <div class="section-header">
        <h2 class="section-title">Website <span class="text-brand">Siap Beli</span></h2>
        <p class="section-subtitle">Template website siap pakai yang dapat langsung digunakan</p>
      </div>
      <div class="templates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="template in templates"
          :key="template.id"
          class="template-card flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div class="template-image-wrapper">
            <img
              :src="template.image"
              :alt="template.name"
              class="template-image w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="template-card-content flex flex-col flex-grow p-6">
            <h3 class="template-title text-xl font-bold text-gray-800 mb-2">
              {{ template.name }}
            </h3>
            <div class="template-price text-2xl font-bold text-blue-600 mb-4">
              {{ template.price }}
            </div>
            <ul class="template-features flex-grow mb-6 space-y-2">
              <li
                v-for="(feature, idx) in template.features"
                :key="idx"
                class="template-feature flex items-center text-gray-600 text-sm"
              >
                <Check class="text-brand-500 mr-2" :size="16" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button
              :disabled="disabled"
              class="btn-buy mt-auto w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <ShoppingCart class="mr-2" :size="18" />
              Cooming Soon
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="layanan" class="section-container py-24 bg-background text-white">
      <div class="section-header text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-4xl md:text-5xl font-bold">
          Layanan <span class="gradient-text">Profesional</span>
        </h2>
        <p class="text-lg text-muted-foreground">
          Solusi lengkap untuk kebutuhan website dan digital presence bisnis Anda
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="digital-abstract-visual w-full max-w-xl mx-auto flex items-center justify-center p-6 relative h-72 card-hover overflow-hidden"
        >
          <!-- Background glow -->
          <div
            class="absolute w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl opacity-70 animate-pulse-light"
          ></div>

          <!-- Abstract lines -->
          <div class="abstract-lines absolute inset-0 overflow-hidden">
            <span v-for="n in 5" :key="n" :class="`line line-${n}`"></span>
          </div>

          <!-- Floating icons -->
          <div class="floating-icons absolute inset-0 pointer-events-none">
            <div
              v-for="(Icon, i) in service.icons"
              :key="i"
              class="absolute opacity-30 animate-float"
              :style="{
                top: ['10%', '60%', '30%'][i % 3],
                left: ['15%', '70%', '45%'][i % 3],
                animationDelay: `${i * 2}s`,
              }"
            >
              <component :is="Icon" class="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <!-- Card content -->
          <div class="relative z-10 text-center w-full">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 glow-effect animate-float"
            >
              <component :is="service.icon" class="w-5 h-5 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-white leading-tight mb-2">
              <span class="text-cyan-400">{{ service.highlight }}</span>
              {{ service.title.replace(service.highlight, '') }}
            </h2>
            <p class="text-slate-300 text-sm mb-3">
              {{ service.description }}
            </p>

            <ul
              class="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400 text-sm text-left mx-auto max-w-xs"
            >
              <li
                v-for="(feature, j) in service.features"
                :key="j"
                class="flex items-start space-x-1"
              >
                <span class="text-cyan-400 mt-0.5">•</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="estimasi" class="section-container section-dark">
      <div class="section-header">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
        >
          <Calculator class="w-4 h-4 text-accent" />
          <span class="text-sm text-accent font-medium">Website Packages</span>
        </div>
        <h2 class="section-title">Pilih <span class="text-brand">Paket Website</span></h2>
        <p class="section-subtitle">Paket lengkap dengan fitur siap pakai untuk kebutuhan Anda</p>
      </div>

      <div class="estimation-container">
        <div class="promo-banner">
          <span>🎉 Promo Mahasiswa: Gratis 2x Revisi + Domain .com 1 Tahun!</span>
        </div>

        <!-- Package Grid -->
        <div class="packages-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="pkg in websitePackages"
            :key="pkg.id"
            :class="`package-box flex flex-col justify-between ${selectedPackage === pkg.id ? 'package-box-active' : ''}`"
            @click="selectPackage(pkg.id)"
          >
            <div class="flex-1 flex flex-col">
              <!-- Badge Populer -->
              <div v-if="pkg.popular" class="popular-badge">⭐ Paling Laku</div>

              <!-- Package Header -->
              <div class="package-box-header mb-3">
                <h3 class="package-box-title">{{ pkg.name }}</h3>
                <p class="package-box-desc">{{ pkg.description }}</p>
              </div>

              <!-- Price -->
              <div class="package-box-price mb-3">
                <span
                  v-if="pkg.oldPrice"
                  class="price-old block text-sm line-through text-gray-400"
                  >{{ formatPrice(pkg.oldPrice) }}</span
                >
                <span class="price-main text-2xl font-bold text-brand">{{
                  formatPrice(pkg.price)
                }}</span>
                <!-- <span class="price-note text-xs text-gray-400">💳 Bisa cicil 2x</span> -->
              </div>

              <!-- Included Features -->
              <div class="package-box-features flex-1">
                <h4 class="features-title font-medium mb-2">✅ Sudah Termasuk:</h4>
                <ul class="features-list space-y-1 text-sm text-gray-300">
                  <li
                    v-for="(feature, idx) in pkg.includedFeatures"
                    :key="idx"
                    class="flex items-start gap-2"
                  >
                    <Check :size="16" class="text-accent mt-[2px]" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Add-ons (Optional) -->
              <div
                v-if="pkg.addOns.length > 0"
                class="package-box-addons mt-3 border-t border-border pt-3"
              >
                <h4 class="addons-title font-medium mb-2">➕ Tambahan Opsional:</h4>
                <ul class="addons-list space-y-1 text-sm text-gray-300">
                  <li v-for="addon in pkg.addOns" :key="addon.id" class="flex justify-between">
                    <span class="addon-label">{{ addon.label }}</span>
                    <span class="addon-price font-medium">+{{ formatPrice(addon.price) }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA Button (selalu di bawah) -->
            <button
              class="btn-select-package mt-6 w-full py-2 rounded-xl font-medium flex items-center justify-center gap-2 bg-brand text-white hover:bg-brand/90 transition"
              @click.stop="openWhatsApp(pkg)"
            >
              <MessageCircle :size="18" />
              Konsultasi via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us -->
    <section id="tentang" class="section-container">
      <div class="about-container">
        <div class="about-content">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a233a] border border-[#2b3655]"
          >
            <Users class="w-4 h-4 text-cyan-400" />
            <span class="text-sm text-cyan-400 font-medium">About Us</span>
          </div>
          <h2 class="section-title">Tentang <span class="text-brand">Kami</span></h2>
          <p class="about-text">
            Diviacode Web adalah solusi digital yang fokus pada pengembangan website modern dengan
            performa tinggi dan tampilan profesional. Kami menghadirkan
            <span class="text-brand">solusi digital lewat kode website</span>
            yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
          </p>
          <p class="about-text">
            Dengan pendekatan modern dan teknologi terkini, kami memastikan setiap website yang kami
            bangun tidak hanya menarik secara visual, tetapi juga cepat, responsif, dan mudah
            digunakan.
          </p>
          <div class="about-highlights">
            <div class="about-highlight-item">
              <div class="about-highlight-icon">
                <Zap :size="24" />
              </div>
              <div>
                <div class="about-highlight-title">Cepat & Responsif</div>
                <div class="about-highlight-desc">Optimasi kecepatan maksimal</div>
              </div>
            </div>
            <div class="about-highlight-item">
              <div class="about-highlight-icon">
                <Code :size="24" />
              </div>
              <div>
                <div class="about-highlight-title">Kode Berkualitas</div>
                <div class="about-highlight-desc">Clean code & best practices</div>
              </div>
            </div>
            <div class="about-highlight-item">
              <div class="about-highlight-icon">
                <Palette :size="24" />
              </div>
              <div>
                <div class="about-highlight-title">Desain Modern</div>
                <div class="about-highlight-desc">UI/UX yang memukau</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-illustration">
          <div class="about-code-visual">
            <div class="floating-element floating-element-1"></div>
            <div class="floating-element floating-element-2"></div>
            <div class="floating-element floating-element-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="kontak" class="py-24 bg-[#0a0a0a] text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a233a] border border-[#2b3655]"
          >
            <Mail class="w-4 h-4 text-cyan-400" />
            <span class="text-sm text-cyan-400 font-medium">Get In Touch</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold">
            Hubungi
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              >Kami</span
            >
          </h2>
          <p class="text-gray-400">
            Siap membantu mewujudkan website impian Anda. Mari diskusi project bersama!
          </p>
        </div>

        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div
            class="p-8 bg-[#11182a] rounded-2xl border border-[#1f2a45] shadow-xl shadow-black/20"
          >
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="text-sm font-semibold mb-1 block">Nama Lengkap</label>
                <input
                  id="name"
                  v-model="formData.name"
                  placeholder="John Doe"
                  required
                  class="w-full bg-[#0c1222] border border-[#2b3655] text-white rounded-lg px-4 py-3 text-sm focus:border-cyan-400 outline-none transition-all"
                />
              </div>

              <div>
                <label for="email" class="text-sm font-semibold mb-1 block">Email</label>
                <input
                  id="email"
                  type="email"
                  v-model="formData.email"
                  placeholder="john@example.com"
                  required
                  class="w-full bg-[#0c1222] border border-[#2b3655] text-white rounded-lg px-4 py-3 text-sm focus:border-cyan-400 outline-none transition-all"
                />
              </div>

              <div>
                <label for="message" class="text-sm font-semibold mb-1 block">Pesan</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  placeholder="Ceritakan kebutuhan website Anda..."
                  rows="5"
                  required
                  class="w-full bg-[#0c1222] border border-[#2b3655] text-white rounded-lg px-4 py-3 text-sm resize-none focus:border-cyan-400 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 text-white font-semibold py-4 transition-all group shadow-lg shadow-cyan-500/20"
              >
                <Send class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Kirim Pesan
              </button>
            </form>
          </div>

          <!-- Contact List -->
          <div class="space-y-6">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold">Kontak Langsung</h3>
              <p class="text-gray-400">Pilih metode komunikasi yang paling nyaman untuk Anda</p>
            </div>

            <div class="space-y-4">
              <a
                v-for="(method, index) in contactMethods"
                :key="index"
                :href="method.link"
                target="_blank"
                rel="noopener noreferrer"
                class="block"
              >
                <div
                  class="p-5 bg-[#11182a] rounded-xl border border-[#1f2a45] transition-all duration-300 flex items-center gap-4 shadow-lg shadow-black/20 hover:border-cyan-400/80 hover:-translate-y-1 hover:shadow-cyan-500/20 hover:brightness-110"
                >
                  <div
                    class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  >
                    <component :is="method.icon" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-400">
                      {{ method.label }}
                    </p>
                    <p class="font-semibold text-white hover:text-cyan-400 transition-colors">
                      {{ method.value }}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <!-- Hours -->
            <div
              class="p-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/20"
            >
              <h4 class="font-semibold mb-2">Jam Operasional</h4>
              <div class="space-y-1 text-sm">
                <p>Senin - Jumat: 09.00 - 18.00 WIB</p>
                <p>Sabtu: 09.00 - 15.00 WIB</p>
                <p>Minggu: Libur</p>
              </div>
              <p class="text-xs text-white/70 pt-3">*Support darurat 24/7 untuk klien prioritas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->

    <footer class="border-t border-border bg-card/50 backdrop-blur-sm">
      <div class="container mx-auto px-6 py-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <Code2 class="w-5 h-5 text-primary" />
            <p class="text-sm text-muted-foreground">
              © 2025 Diviacode Web — Solusi Digital Lewat Kode Website
            </p>
          </div>

          <div class="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#beranda" class="hover:text-primary transition-colors"> Privacy Policy </a>
            <a href="#beranda" class="hover:text-primary transition-colors"> Terms of Service </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import '../style.css'
import logo from '/public/images/Diviacode-logo.webm'
import {
  Code,
  Zap,
  Palette,
  Check,
  ArrowRight,
  ExternalLink,
  ShoppingCart,
  Code2,
  Laptop,
  Rocket,
  Wrench,
  Mail,
  MessageCircle,
  Send,
  Instagram,
  GitBranch,
  Users,
  Calculator,
  Music2,
} from 'lucide-vue-next'
import { ref, computed, onMounted, onUnmounted } from 'vue'
const selectedPackage = ref(null)
const disabled = ref(false)
// Mobile menu state
const isMobileMenuOpen = ref(false)

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleMobileMenuClick = (sectionId) => {
  scrollToSection(sectionId)
  closeMobileMenu()
}
function selectPackage(packageId) {
  selectedPackage.value = packageId
}

function openWhatsApp(pkg) {
  let message = `Halo! Saya tertarik dengan paket website:\n\n`
  message += `📦 Paket: ${pkg.name}\n`
  message += `💰 Harga: ${formatPrice(pkg.price)}\n\n`
  message += `Bisa konsultasi lebih lanjut?`

  const phoneNumber = '62882001284722'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
const activeSection = ref('beranda')

const menuItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'project', label: 'Project' },
  { id: 'templates', label: 'Website Siap Beli' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'estimasi', label: 'Estimasi' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'kontak', label: 'Kontak' },
]

// Computed properties untuk memisahkan menu items
const leftMenuItems = computed(() => menuItems.slice(0, 3))
const rightMenuItems = computed(() => menuItems.slice(3))

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const headerHeight = 80 // Height header fixed
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    activeSection.value = id
  }
}

// Scroll detection yang benar
let scrollTimeout
const handleScroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }

  scrollTimeout = setTimeout(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id))
    const scrollPosition = window.scrollY + 200 // Tambah offset

    let current = 'beranda'

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.id
        }
      }
    })

    // Only update if changed
    if (current !== activeSection.value) {
      activeSection.value = current
    }
  }, 50)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Trigger initial check
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Mock data (tetap sama seperti sebelumnya)
const projects = [
  {
    id: 1,
    name: 'Portfolio Website - Ziran',
    category: 'Portfolio',
    description:
      'Website portfolio personal dengan desain modern dan responsif untuk menampilkan karya dan skill programming',
    image: '/images/project/Portofolio.jpg',
    technologies: ['React JS', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Sistem Jadwal Kuliah Kampus',
    category: 'Education',
    description:
      'Aplikasi web manajemen jadwal kuliah dengan fitur lengkap untuk mahasiswa, dosen, dan administrasi',
    image: './images/project/FrontOffice.jpg',
    technologies: ['Laravel 11', 'MySQL', 'Alpine JS', 'Tailwind CSS'],
  },
  {
    id: 3,
    name: 'Company Profile + E-Commerce Laptop & PC Gaming',
    category: 'E-Commerce',
    description:
      'Website toko online khusus laptop, PC gaming, dan layanan rakitan PC dengan integrasi WhatsApp untuk pemesanan',
    image: '/images/project/SarangLaptop.jpg',
    technologies: ['Laravel 11', 'AJAX', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 4,
    name: 'Game Tic Tac Toe (XO) Multiplayer',
    category: 'Game',
    description:
      'Game Tic Tac Toe interaktif dengan mode Player vs Player dan Player vs Computer AI',
    image: '/images/project/Tic Tac Toe.jpg',
    technologies: ['React JS', 'Tailwind CSS'],
  },
]

const templates = [
  {
    id: 1,
    name: 'Template Portfolio',
    price: 'Rp. ??????',
    image: 'https://www.kranzle.co.za/assets/app/public/images/magento/coming_soon.jpg',
    category: 'Portfolio',
    features: [
      'Fitur dalam pengembangan',
      'Detail coming soon',
      'Stay tuned untuk update',
      'Segera diluncurkan',
      'Informasi lengkap menyusul',
    ],
    demoUrl: '#',
    status: 'coming_soon',
  },
  {
    id: 2,
    name: 'Template Company Profile',
    price: 'Rp. ??????',
    image: 'https://www.kranzle.co.za/assets/app/public/images/magento/coming_soon.jpg',
    category: 'Corporate',
    features: [
      'Fitur dalam pengembangan',
      'Detail coming soon',
      'Stay tuned untuk update',
      'Segera diluncurkan',
      'Informasi lengkap menyusul',
    ],
    demoUrl: '#',
    status: 'coming_soon',
  },
  {
    id: 3,
    name: 'Template E-Commerce',
    price: 'Rp. ??????',
    image: 'https://www.kranzle.co.za/assets/app/public/images/magento/coming_soon.jpg',
    category: 'E-Commerce',
    features: [
      'Fitur dalam pengembangan',
      'Detail coming soon',
      'Stay tuned untuk update',
      'Segera diluncurkan',
      'Informasi lengkap menyusul',
    ],
    demoUrl: '#',
    status: 'coming_soon',
  },
]

const services = [
  {
    title: 'Buat Website Custom',
    description:
      'Bikin website sesuai kebutuhan kamu dengan teknologi terbaru dan tampilan kekinian',
    features: ['Tampilan Responsif', 'Ramu di Google', 'Loading Cepat', 'Aman & Terpercaya'],
    icon: Code2,
    icons: [Code2, Rocket, Palette],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Percepat Website',
    description: 'Tingkatkan kecepatan website biar nggak lemot dan pengunjung betah browsing',
    features: ['Optimasi Kode', 'Kompres Gambar', 'System Cache', 'CDN Integration'],
    icon: Rocket,
    icons: [Rocket, Wrench],
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Konsultasi Project Coding',
    description: 'Diskusi teknis untuk project kuliah, tugas akhir, atau personal project',
    features: ['Code Review', 'Debugging Help', 'Architecture Planning', 'Best Practices'],
    icon: GitBranch,
    icons: [Code2, MessageCircle],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Maintenance & Perawatan',
    description: 'Jaga website tetap lancar dengan update rutin dan perbaikan kalau ada masalah',
    features: ['Monitor 24/7', 'Update Berkala', 'Perbaikan Bug', 'Laporan Performa'],
    icon: Wrench,
    icons: [Wrench, Laptop],
    color: 'from-blue-500 to-indigo-500',
  },
]

const websitePackages = [
  {
    id: 'landing',
    name: 'Landing Page',
    description:
      'Halaman promosi tunggal untuk personal, event, produk digital, atau UMKM kecil. ✅ Cocok untuk mahasiswa yang ingin promosi project atau usaha sampingan.',
    price: 450000,
    oldPrice: 650000,
    popular: false,
    includedFeatures: [
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Tombol Kontak / WhatsApp',
      'SEO Dasar (Meta Tags, Title, Deskripsi)',
      'Integrasi Google Maps (opsional)',
      'Bagian Tentang / About',
      'Bagian FAQ / QnA',
      '🎨 2x Revisi Minor',
      '🧩 Desain ringan & cepat dimuat',
    ],
    addOns: [
      { id: 'blog', label: 'Blog / Artikel', price: 250000 },
      { id: 'gallery', label: 'Gallery / Portfolio', price: 200000 },
      { id: 'testimonials', label: 'Testimoni Pengguna', price: 150000 },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio / CV Online',
    description:
      'Website pribadi untuk menampilkan karya, project, dan profil profesional mahasiswa atau freelancer. 💼 Cocok untuk mencari magang atau klien freelance.',
    price: 700000,
    oldPrice: 950000,
    popular: true,
    includedFeatures: [
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Kontak via WhatsApp / Email',
      'Gallery Project / Portfolio Kampus',
      'Tautan ke Sosial Media & GitHub',
      'SEO Dasar (Meta Tags, Sitemap)',
      'Bagian Tentang Saya / Skills',
      '📱 Optimized for Mobile First',
      '🎨 3x Revisi Minor',
    ],
    addOns: [
      { id: 'blog', label: 'Blog / Catatan Belajar', price: 250000 },
      { id: 'dark_mode', label: 'Mode Gelap / Terang', price: 100000 },
      { id: 'admin_panel', label: 'Panel Admin (edit project)', price: 550000 },
    ],
  },
  {
    id: 'organization',
    name: 'Web Organisasi / UKM Kampus',
    description:
      'Website untuk komunitas, UKM, himpunan mahasiswa, atau organisasi kecil. 👥 Support hingga 10 anggota pengurus.',
    price: 900000,
    oldPrice: 1200000,
    popular: false,
    includedFeatures: [
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Halaman Anggota & Kegiatan',
      'Form Pendaftaran Anggota Baru',
      'Galeri Kegiatan / Event',
      'Kontak via WhatsApp',
      'SEO Dasar (Meta Tags, Sitemap)',
      '🎨 3x Revisi Minor',
      '🧭 Navigasi mudah & ramah pengguna',
    ],
    addOns: [
      { id: 'blog', label: 'Berita & Artikel Kegiatan', price: 300000 },
      { id: 'admin_panel', label: 'Panel Admin (kelola anggota)', price: 650000 },
      { id: 'live_chat', label: 'Live Chat Widget', price: 150000 },
    ],
  },
  {
    id: 'simple_store',
    name: 'Mini Store (Checkout via WhatsApp)',
    description:
      'Toko online sederhana untuk jualan kecil, UMKM, atau tugas kewirausahaan kampus. 🛒 Support hingga 50 produk included.',
    price: 1500000,
    oldPrice: 1900000,
    popular: true,
    includedFeatures: [
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Katalog Produk (Hingga 50 produk)',
      'Keranjang Belanja (Checkout via WA)',
      'Admin Panel Kelola Produk',
      'SEO Dasar & Google Analytics',
      'Gallery Produk',
      '📊 Basic Sales Report',
      '🎨 3x Revisi Minor',
    ],
    addOns: [
      { id: 'payment_gateway', label: 'Payment Gateway (Midtrans)', price: 750000 },
      { id: 'email_notification', label: 'Notifikasi Email Otomatis', price: 250000 },
      { id: 'discount', label: 'Fitur Diskon / Promo', price: 200000 },
      { id: 'extra_products', label: 'Tambahan 10 produk (+50k/10 produk)', price: 50000 },
    ],
  },
  {
    id: 'booking',
    name: 'Booking / Reservasi',
    description:
      'Sistem booking sederhana untuk rental alat, studio, jasa foto, atau event kampus. 📅 Dapat mengelola hingga 5 jenis layanan.',
    price: 1200000,
    oldPrice: 1550000,
    popular: false,
    includedFeatures: [
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Form Booking / Reservasi via WhatsApp',
      'Kalender Jadwal',
      'Admin Panel Kelola Jadwal',
      'Google Maps & Analytics',
      'FAQ Section',
      '🎨 3x Revisi Minor',
      '💬 Sistem notifikasi dan pengingat',
    ],
    addOns: [
      { id: 'email_notification', label: 'Notifikasi Email Otomatis', price: 250000 },
      { id: 'payment_gateway', label: 'Payment Gateway (Midtrans)', price: 750000 },
      { id: 'live_chat', label: 'Live Chat Widget', price: 150000 },
      { id: 'extra_services', label: 'Tambahan layanan (+100k/5 layanan)', price: 100000 },
    ],
  },
]

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

const formData = ref({
  name: '',
  email: '',
  message: '',
})

// GANTI handleSubmit yang ada dengan ini:
const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Harap isi semua field yang diperlukan')
    return
  }

  // Validasi email sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    alert('Format email tidak valid')
    return
  }

  // Konfigurasi email
  const recipientEmail = 'AdminDiviacode@gmail.com'
  const subject = `Pesan Website dari ${formData.value.name}`
  const body = `
Halo Diviacode Web,

Saya ${formData.value.name} tertarik dengan layanan Anda.

Detail:
- Nama: ${formData.value.name}
- Email: ${formData.value.email}

Pesan:
${formData.value.message}

Saya berharap dapat bekerja sama dengan Anda.

Salam,
${formData.value.name}
  `.trim()

  // Buat mailto link
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  // Buka di tab baru
  window.open(mailtoLink, '_blank')

  // Reset form
  formData.value = { name: '', email: '', message: '' }

  // Konfirmasi user-friendly
  alert(
    '✅ Pesan siap dikirim! Aplikasi email Anda akan terbuka. Silakan tekan "Send" untuk mengirim pesan kepada kami.',
  )
}

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 882-0012-84722',
    link: 'https://wa.me/62882001284722',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'AdminDiviacode@gmail.com',
    link: 'mailto:AdminDiviacode@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@diviacodeweb',
    link: 'https://instagram.com/diviacodeweb',
  },
  {
    icon: Music2, // Untuk TikTok, kita gunakan SVG
    label: 'TikTok',
    value: '@diviacodeweb',
    link: 'https://tiktok.com/@diviacodeweb',
  },
]
</script>

<style>
/* Reset dan Base Styles */
* {
  box-sizing: border-box;
}
/* ===== TAMBAHAN CSS UNTUK ESTIMATION CALCULATOR ===== */
/* Promo Banner */
.promo-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  font-size: 0.95rem;
  font-weight: 600;
  animation: shimmer 3s infinite;
}

/* Packages Wrapper */
.packages-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

/* Package Box */
.package-box {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.package-box:hover {
  border-color: var(--brand-primary);
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 255, 209, 0.15);
}

.package-box-active {
  border-color: var(--brand-primary);
  background: rgba(0, 255, 209, 0.05);
  box-shadow: 0 0 30px rgba(0, 255, 209, 0.2);
}

/* Popular Badge */
.popular-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #fbbf24;
  color: #1f2937;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
}

/* Package Header */
.package-box-header {
  margin-bottom: 1.5rem;
}

.package-box-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.package-box-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Price */
.package-box-price {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.price-old {
  display: block;
  text-decoration: line-through;
  color: #9ca3af;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.price-main {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--brand-primary);
  margin-bottom: 0.5rem;
}

.price-note {
  display: block;
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Features */
.features-title,
.addons-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #d1d5db;
  line-height: 1.5;
}

.features-list li svg {
  color: #34d399;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Add-ons */
.package-box-addons {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.addons-list {
  list-style: none;
  padding: 0;
}

.addons-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.addons-list li:last-child {
  border-bottom: none;
}

.addon-label {
  color: #d1d5db;
}

.addon-price {
  color: var(--brand-primary);
  font-weight: 600;
}

/* CTA Button */
.btn-select-package {
  width: 100%;
  background: var(--brand-primary);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-select-package:hover {
  background: var(--brand-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 209, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .packages-wrapper {
    grid-template-columns: 1fr;
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.gradient-text {
  /* Asumsi warna gradient yang Anda inginkan */
  background: linear-gradient(90deg, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-effect {
  box-shadow: 0 0 10px rgba(0, 150, 255, 0.3);
}
.card-hover:hover .glow-effect {
  box-shadow: 0 0 25px rgba(0, 150, 255, 0.6);
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.digital-abstract-visual {
  background: radial-gradient(
    circle at center,
    rgba(17, 34, 51, 0.7) 0%,
    rgba(11, 21, 38, 0.9) 100%
  );
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(22, 178, 196, 0.3);
  animation: fadeIn 1s ease-out;
}

/* ===== Animasi umum ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulse-light {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}
.animate-pulse-light {
  animation: pulse-light 2.5s infinite ease-in-out;
}

/* ===== Garis abstrak ===== */
.abstract-lines {
  transform-style: preserve-3d;
  perspective: 800px;
}
.line {
  position: absolute;
  background: linear-gradient(to right, transparent, #22d3ee, transparent);
  height: 2px;
  opacity: 0.4;
  animation: lineMove 15s infinite linear;
}
@keyframes lineMove {
  0% {
    transform: translateX(0);
    opacity: 0.2;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translateX(200%);
    opacity: 0.2;
  }
}
.line-1 {
  top: 10%;
  left: -100%;
  width: 200%;
  animation-delay: 0s;
  transform: rotateZ(30deg);
}
.line-2 {
  top: 30%;
  left: -80%;
  width: 180%;
  animation-delay: 3s;
  transform: rotateZ(-15deg);
}
.line-3 {
  top: 50%;
  left: -120%;
  width: 220%;
  animation-delay: 6s;
  transform: rotateZ(45deg);
}
.line-4 {
  top: 70%;
  left: -90%;
  width: 190%;
  animation-delay: 9s;
  transform: rotateZ(0deg);
}
.line-5 {
  top: 90%;
  left: -110%;
  width: 210%;
  animation-delay: 12s;
  transform: rotateZ(-30deg);
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.animate-grid-move {
  animation: gridMove 20s linear infinite;
}

.bg-grid-blue {
  background-image:
    linear-gradient(to right, rgba(0, 53, 70, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 55, 74, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
}

:root {
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --bg-card: #121212;
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted: #6b7280;
  --brand-primary: #18e4fd;
  --brand-secondary: #0ea5e9;
  --brand-navy: #0e1c3f;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-medium: rgba(255, 255, 255, 0.2);
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --primary: 222.2 47.4% 11.2%;
}

/* Custom properties untuk Tailwind classes */
.bg-background {
  background-color: hsl(var(--background));
}

.text-foreground {
  color: hsl(var(--foreground));
}

.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}

.text-primary {
  color: hsl(var(--primary));
}

.border-border {
  border-color: hsl(var(--border));
}

/* Atau gunakan variable yang sudah ada */
.bg-background {
  background: var(--bg-primary);
}

.text-border {
  color: var(--border-subtle);
}

.text-foreground {
  color: var(--text-primary);
}

.text-muted-foreground {
  color: var(--text-muted);
}

.text-primary {
  color: var(--brand-primary);
}

/* Backdrop blur support */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
}

/* Smooth transitions untuk navigation */
button {
  transition: all 0.3s ease;
}

/* Hover effects yang lebih jelas */
.hover\:text-primary:hover {
  color: var(--brand-primary) !important;
  transform: translateY(-1px);
}

/* Active state yang lebih menonjol */
.text-primary {
  color: var(--brand-primary) !important;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 255, 209, 0.3);
}
body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.min-h-screen {
  min-height: 100vh;
}

.bg-bg-primary {
  background: var(--bg-primary);
}

.text-brand {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Buttons */
.btn-primary {
  background: var(--brand-primary);
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  background: var(--brand-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 209, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--brand-primary);
  color: var(--brand-primary);
}

/* Custom Checkbox */
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  display: none;
}

.checkbox-checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-medium);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.custom-checkbox:hover .checkbox-checkmark {
  border-color: var(--brand-primary);
}

.checkbox-input:checked + .checkbox-checkmark {
  background: var(--brand-primary);
  border-color: var(--brand-primary);
  color: #000;
}

/* Section Containers */
.section-container {
  padding: 120px 7.6923%;
  max-width: 1600px;
  margin: 0 auto;
}

.section-dark {
  background: var(--bg-secondary);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 255, 209, 0.15);
  border-color: var(--brand-primary);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.btn-view-detail {
  background: var(--brand-primary);
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn-view-detail:hover {
  transform: scale(1.05);
}

.project-badge {
  background: rgba(0, 255, 209, 0.1);
  color: var(--brand-primary);
  border: 1px solid rgba(0, 255, 209, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: inline-block;
}

.project-card-content {
  padding: 24px;
}

.project-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.project-description {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tech-badge {
  background: rgba(14, 165, 233, 0.1);
  color: var(--brand-secondary);
  border: 1px solid rgba(14, 165, 233, 0.3);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

/* Templates Grid */
.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
}

.template-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.template-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 255, 209, 0.15);
  border-color: var(--brand-primary);
}

.template-image-wrapper {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.template-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.template-card:hover .template-image {
  transform: scale(1.05);
}

.template-card-content {
  padding: 24px;
}

.template-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.template-price {
  font-size: 28px;
  font-weight: 700;
  color: var(--brand-primary);
  margin-top: 8px;
}

.template-features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.template-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 15px;
  color: var(--text-secondary);
}

.btn-buy {
  width: 100%;
  background: var(--brand-primary);
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-buy:hover {
  background: var(--brand-secondary);
  transform: translateY(-2px);
}

/* Estimation Calculator */
.estimation-container {
  max-width: 1100px;
  margin: 0 auto;
}

.estimation-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
}

.estimation-card-header {
  padding: 32px 32px 0;
}

.estimation-card-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
}

.estimation-content {
  padding: 32px;
}

.category-section {
  margin-bottom: 48px;
}

.category-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.category-card {
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid var(--border-medium);
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--brand-primary);
  transform: translateY(-4px);
}

.category-card-active {
  background: rgba(0, 255, 209, 0.1);
  border-color: var(--brand-primary);
  box-shadow: 0 0 20px rgba(0, 255, 209, 0.2);
}

.category-card-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.category-card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  line-height: 1.5;
}

.category-card-price {
  font-size: 16px;
  font-weight: 600;
  color: var(--brand-primary);
}

.features-section {
  margin-bottom: 40px;
}

.estimation-features {
  display: grid;
  gap: 12px;
}

.estimation-checkbox-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.estimation-checkbox-group:hover {
  background: rgba(255, 255, 255, 0.05);
}

.estimation-checkbox-label {
  font-size: 16px;
  color: var(--text-primary);
  cursor: pointer;
}

.estimation-feature-price {
  font-size: 16px;
  font-weight: 600;
  color: var(--brand-primary);
}

.estimation-total {
  background: rgba(0, 255, 209, 0.05);
  border: 2px solid var(--brand-primary);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  text-align: center;
}

.estimation-total-label {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.estimation-total-price {
  font-size: 48px;
  font-weight: 700;
  color: var(--brand-primary);
}

.btn-whatsapp {
  width: 100%;
  background: var(--brand-primary);
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 18px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-whatsapp:hover {
  background: var(--brand-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 209, 0.3);
}

/* About Section */
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-content {
  padding-right: 40px;
}

.about-text {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.about-highlights {
  display: grid;
  gap: 24px;
  margin-top: 40px;
}

.about-highlight-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.about-highlight-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--brand-primary);
  transform: translateX(8px);
}

.about-highlight-icon {
  width: 60px;
  height: 60px;
  background: rgba(0, 255, 209, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-primary);
}

.about-highlight-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.about-highlight-desc {
  font-size: 14px;
  color: var(--text-muted);
}

.about-illustration {
  position: relative;
  height: 500px;
}

.about-code-visual {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0, 255, 209, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%);
  border: 1px solid var(--border-subtle);
}

.floating-element-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

.floating-element-2 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 15%;
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}

.floating-element-3 {
  width: 180px;
  height: 180px;
  bottom: 10%;
  left: 40%;
  animation: float 7s ease-in-out infinite;
  animation-delay: 2s;
}

.form-input:hover,
.form-input:focus,
.form-textarea:hover,
.form-textarea:focus {
  border-color: var(--brand-primary);
  outline: none;
  background: rgba(255, 255, 255, 0.08);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit:hover {
  background: var(--brand-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 209, 0.3);
}

.contact-info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero-title {
    font-size: 48px;
  }

  .section-title {
    font-size: 40px;
  }

  .devices-showcase {
    height: 400px;
  }

  .device-laptop {
    width: 320px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-container {
    padding: 80px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .projects-grid,
  .templates-grid,
  .services-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .estimation-total-price {
    font-size: 36px;
  }

  .about-illustration {
    height: 300px;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .devices-showcase {
    height: 350px;
  }
}

@keyframes pulse-light {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.animate-pulse-light {
  animation: pulse-light 2.5s infinite ease-in-out;
}
</style>
