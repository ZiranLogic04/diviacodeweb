<template>
    <div class="min-h-screen bg-bg-primary">
        <header
            class="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border"
        >
            <div class="relative">
                <!-- Main header bar -->
                <div
                    class="container mx-auto px-6 h-20 flex items-center justify-between"
                >
                    <!-- Left menu items -->
                    <nav class="hidden lg:flex items-center gap-8">
                        <button
                            v-for="item in leftMenuItems"
                            :key="item.id"
                            @click="scrollToSection(item.id)"
                            :class="`text-sm font-medium transition-colors hover:text-primary ${
                                activeSection === item.id
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
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
                                <foreignObject
                                    x="-85"
                                    y="-180"
                                    width="400"
                                    height="320"
                                >
                                    <video
                                        autoplay
                                        loop
                                        muted
                                        playsinline
                                        class="w-full h-full object-contain"
                                        style="
                                            pointer-events: none;
                                            background: transparent;
                                        "
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
                                activeSection === item.id
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            }`"
                        >
                            {{ item.label }}
                        </button>
                    </nav>

                    <!-- Mobile menu button -->
                    <button class="lg:hidden text-foreground p-2">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section
            id="beranda" 
            class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-slate-950 px-6 text-center"
        >
            <!-- Background Grid -->
            <div
                class="absolute inset-0 bg-grid-blue/10 opacity-10 animate-grid-move"
            ></div>

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
            <div
                class="absolute inset-0 overflow-hidden pointer-events-none z-0"
            >
                <svg
                    viewBox="0 0 1600 400"
                    preserveAspectRatio="none"
                    class="w-full h-full opacity-30"
                >
                    <defs>
                        <linearGradient
                            id="ekgGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stop-color="#06b6d4"
                                stop-opacity="1"
                            />
                            <stop
                                offset="100%"
                                stop-color="#22d3ee"
                                stop-opacity="0.8"
                            />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur
                                stdDeviation="3.5"
                                result="coloredBlur"
                            />
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
            <div class="relative z-10 max-w-3xl mx-auto space-y-8">
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

                <p
                    class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Bangun website cepat, modern, dan responsif bersama
                    Diviacode Web. Transformasi ide digital Anda menjadi
                    kenyataan dengan teknologi terkini.
                </p>

                <div
                    class="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
                >
                    <button
                        @click="scrollToSection('project')"
                        class="btn-primary"
                    >
                        Lihat Project
                        <ArrowRight class="ml-2" :size="20" />
                    </button>
                    <button
                        @click="scrollToSection('templates')"
                        class="btn-secondary"
                    >
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </section>

        <!-- Projects Showcase -->
        <section id="project" class="fade-in section-container">
            <div class="section-header">
                <h2 class="section-title">
                    Showcase <span class="text-brand">Project</span>
                </h2>
                <p class="section-subtitle">
                    Hasil karya yang telah kami selesaikan untuk berbagai klien
                </p>
            </div>
            <div class="projects-grid">
                <div
                    v-for="project in projects"
                    :key="project.id"
                    class="project-card"
                >
                    <div class="project-image-wrapper">
                        <img
                            :src="project.image"
                            :alt="project.name"
                            class="project-image"
                        />
                        <div class="project-overlay">
                            <button class="btn-view-detail">
                                Lihat Detail
                                <ExternalLink class="ml-2" :size="16" />
                            </button>
                        </div>
                    </div>
                    <div class="project-card-content">
                        <span class="project-badge">{{
                            project.category
                        }}</span>
                        <h3 class="project-title">{{ project.name }}</h3>
                        <p class="project-description">
                            {{ project.description }}
                        </p>
                        <div class="project-tech-stack">
                            <span
                                v-for="(tech, idx) in project.technologies"
                                :key="idx"
                                class="tech-badge"
                                >{{ tech }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Website Siap Beli -->
        <section id="templates" class="section-container section-dark">
            <div class="section-header">
                <h2 class="section-title">
                    Website <span class="text-brand">Siap Beli</span>
                </h2>
                <p class="section-subtitle">
                    Template website siap pakai yang dapat langsung digunakan
                </p>
            </div>
            <div
                class="templates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
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
                        />
                    </div>
                    <div
                        class="template-card-content flex flex-col flex-grow p-6"
                    >
                        <h3
                            class="template-title text-xl font-bold text-gray-800 mb-2"
                        >
                            {{ template.name }}
                        </h3>
                        <div
                            class="template-price text-2xl font-bold text-blue-600 mb-4"
                        >
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
                            class="btn-buy mt-auto w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            <ShoppingCart class="mr-2" :size="18" />
                            Beli Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section
            id="layanan"
            class="section-container py-24 bg-background text-white"
        >
            <div
                class="section-header text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
                <h2 class="text-4xl md:text-5xl font-bold">
                    Layanan <span class="gradient-text">Profesional</span>
                </h2>
                <p class="text-lg text-muted-foreground">
                    Solusi lengkap untuk kebutuhan website dan digital presence
                    bisnis Anda
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
                    <div
                        class="abstract-lines absolute inset-0 overflow-hidden"
                    >
                        <span
                            v-for="n in 5"
                            :key="n"
                            :class="`line line-${n}`"
                        ></span>
                    </div>

                    <!-- Floating icons -->
                    <div
                        class="floating-icons absolute inset-0 pointer-events-none"
                    >
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
                            <component
                                :is="Icon"
                                class="w-8 h-8 text-cyan-400"
                            />
                        </div>
                    </div>

                    <!-- Card content -->
                    <div class="relative z-10 text-center w-full">
                        <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 glow-effect animate-float"
                        >
                            <component
                                :is="service.icon"
                                class="w-5 h-5 text-white"
                            />
                        </div>
                        <h2
                            class="text-2xl font-bold text-white leading-tight mb-2"
                        >
                            <span class="text-cyan-400">{{
                                service.highlight
                            }}</span>
                            {{ service.title.replace(service.highlight, "") }}
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

        <!-- Estimation Calculator -->
        <section id="estimasi" class="section-container section-dark">
            <div class="section-header">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Calculator class="w-4 h-4 text-accent" />
            <span class="text-sm text-accent font-medium">Cost Calculator</span>
          </div>
                <h2 class="section-title">
                    Estimasi <span class="text-brand">Biaya</span>
                </h2>
                <p class="section-subtitle">
                    Hitung estimasi biaya website sesuai kebutuhan Anda
                </p>
            </div>
            <div class="estimation-container">
                <div class="estimation-card">
                    <div class="estimation-card-header">
                        <h3 class="estimation-card-title">
                            Pilih Kategori & Fitur Website Anda
                        </h3>
                    </div>
                    <div class="estimation-content">
                        <!-- Category Selection -->
                        <div class="category-section">
                            <h3 class="category-title">
                                Pilih Kategori Website
                            </h3>
                            <div class="category-grid">
                                <div
                                    v-for="category in websiteCategories"
                                    :key="category.id"
                                    :class="`category-card ${
                                        selectedCategory === category.id
                                            ? 'category-card-active'
                                            : ''
                                    }`"
                                    @click="handleCategoryChange(category.id)"
                                >
                                    <div class="category-card-name">
                                        {{ category.name }}
                                    </div>
                                    <div class="category-card-desc">
                                        {{ category.description }}
                                    </div>
                                    <div class="category-card-price">
                                        Mulai dari
                                        {{ formatPrice(category.basePrice) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Features Selection -->
                        <div class="features-section">
                            <h3 class="category-title">Pilih Fitur Tambahan</h3>
                            <div class="estimation-features">
                                <div
                                    v-for="feature in availableFeatures"
                                    :key="feature.id"
                                    class="estimation-checkbox-group"
                                >
                                    <div class="flex items-center space-x-3">
                                        <label class="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                :id="feature.id"
                                                :checked="
                                                    selectedFeatures[
                                                        feature.id
                                                    ] || false
                                                "
                                                @change="
                                                    handleFeatureChange(
                                                        feature.id,
                                                        $event.target.checked
                                                    )
                                                "
                                                :disabled="feature.included"
                                                class="checkbox-input"
                                            />
                                            <span class="checkbox-checkmark">
                                                <Check
                                                    v-if="
                                                        selectedFeatures[
                                                            feature.id
                                                        ]
                                                    "
                                                    :size="14"
                                                />
                                            </span>
                                        </label>
                                        <label
                                            :for="feature.id"
                                            class="estimation-checkbox-label"
                                        >
                                            {{ feature.label }}
                                        </label>
                                    </div>
                                    <span
                                        v-if="!feature.included"
                                        class="estimation-feature-price"
                                        >{{ formatPrice(feature.price) }}</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="estimation-total">
                            <div class="estimation-total-label">
                                Total Estimasi:
                            </div>
                            <div class="estimation-total-price">
                                {{ formatPrice(calculateEstimation()) }}
                            </div>
                        </div>

                        <button class="btn-whatsapp" @click="openWhatsApp">
                            Tanyakan ke WhatsApp
                            <ArrowRight class="ml-2" :size="20" />
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
                        <span class="text-sm text-cyan-400 font-medium"
                            >About Us</span
                        >
                    </div>
                    <h2 class="section-title">
                        Tentang <span class="text-brand">Kami</span>
                    </h2>
                    <p class="about-text">
                        Diviacode Web adalah solusi digital yang fokus pada
                        pengembangan website modern dengan performa tinggi dan
                        tampilan profesional. Kami menghadirkan
                        <span class="text-brand"
                            >solusi digital lewat kode website</span
                        >
                        yang dirancang khusus untuk memenuhi kebutuhan bisnis
                        Anda.
                    </p>
                    <p class="about-text">
                        Dengan pendekatan modern dan teknologi terkini, kami
                        memastikan setiap website yang kami bangun tidak hanya
                        menarik secara visual, tetapi juga cepat, responsif, dan
                        mudah digunakan.
                    </p>
                    <div class="about-highlights">
                        <div class="about-highlight-item">
                            <div class="about-highlight-icon">
                                <Zap :size="24" />
                            </div>
                            <div>
                                <div class="about-highlight-title">
                                    Cepat & Responsif
                                </div>
                                <div class="about-highlight-desc">
                                    Optimasi kecepatan maksimal
                                </div>
                            </div>
                        </div>
                        <div class="about-highlight-item">
                            <div class="about-highlight-icon">
                                <Code :size="24" />
                            </div>
                            <div>
                                <div class="about-highlight-title">
                                    Kode Berkualitas
                                </div>
                                <div class="about-highlight-desc">
                                    Clean code & best practices
                                </div>
                            </div>
                        </div>
                        <div class="about-highlight-item">
                            <div class="about-highlight-icon">
                                <Palette :size="24" />
                            </div>
                            <div>
                                <div class="about-highlight-title">
                                    Desain Modern
                                </div>
                                <div class="about-highlight-desc">
                                    UI/UX yang memukau
                                </div>
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
                        <span class="text-sm text-cyan-400 font-medium"
                            >Get In Touch</span
                        >
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold">
                        Hubungi
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                            >Kami</span
                        >
                    </h2>
                    <p class="text-gray-400">
                        Siap membantu mewujudkan website impian Anda. Mari
                        diskusi project bersama!
                    </p>
                </div>

                <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    <!-- Form -->
                    <div
                        class="p-8 bg-[#11182a] rounded-2xl border border-[#1f2a45] shadow-xl shadow-black/20"
                    >
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div>
                                <label
                                    for="name"
                                    class="text-sm font-semibold mb-1 block"
                                    >Nama Lengkap</label
                                >
                                <input
                                    id="name"
                                    v-model="formData.name"
                                    placeholder="John Doe"
                                    required
                                    class="w-full bg-[#0c1222] border border-[#2b3655] text-white rounded-lg px-4 py-3 text-sm focus:border-cyan-400 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    for="email"
                                    class="text-sm font-semibold mb-1 block"
                                    >Email</label
                                >
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
                                <label
                                    for="message"
                                    class="text-sm font-semibold mb-1 block"
                                    >Pesan</label
                                >
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
                                <Send
                                    class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"
                                />
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    <!-- Contact List -->
                    <div class="space-y-6">
                        <div class="space-y-4">
                            <h3 class="text-2xl font-bold">Kontak Langsung</h3>
                            <p class="text-gray-400">
                                Pilih metode komunikasi yang paling nyaman untuk
                                Anda
                            </p>
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
                                        <component
                                            :is="method.icon"
                                            class="w-6 h-6 text-white"
                                        />
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400">
                                            {{ method.label }}
                                        </p>
                                        <p
                                            class="font-semibold text-white hover:text-cyan-400 transition-colors"
                                        >
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
                            <p class="text-xs text-white/70 pt-3">
                                *Support darurat 24/7 untuk klien prioritas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Toast -->
            <transition name="fade">
                <div
                    v-if="toastVisible"
                    class="fixed top-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p class="font-medium">{{ toastMessage }}</p>
                </div>
            </transition>
        </section>

        <!-- Footer -->

        <footer class="border-t border-border bg-card/50 backdrop-blur-sm">
            <div class="container mx-auto px-6 py-8">
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <div class="flex items-center gap-2">
                        <Code2 class="w-5 h-5 text-primary" />
                        <p class="text-sm text-muted-foreground">
                            © 2025 Diviacode Web — Solusi Digital Lewat Kode
                            Website
                        </p>
                    </div>

                    <div
                        class="flex items-center gap-6 text-sm text-muted-foreground"
                    >
                        <a
                            href="#beranda"
                            class="hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#beranda"
                            class="hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import "../style.css";
import logo from "/public/images/Diviacode-logo.webm";
import {
    Code,
    Zap,
    Palette,
    Settings,
    Check,
    ArrowRight,
    ExternalLink,
    ShoppingCart,
    MonitorSmartphone,
    Layers,
    Sparkles,
    Globe,
    Code2,
    Smartphone,
    Search,
    Laptop,
    Rocket,
    Wrench,
    Mail,
    MessageCircle,
    Send,
    Instagram,
    Linkedin,
    Users,
    Calculator
} from "lucide-vue-next";
import { ref, computed, onMounted, onUnmounted } from "vue";
onMounted(() => {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target) // biar animasi cuma sekali
      }
    })
  }, { threshold: 0.2 })

  elements.forEach(el => observer.observe(el))
})

const activeSection = ref("beranda");

const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "project", label: "Project" },
    { id: "templates", label: "Website Siap Beli" },
    { id: "layanan", label: "Layanan" },
    { id: "estimasi", label: "Estimasi" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "kontak", label: "Kontak" },
];

// Computed properties untuk memisahkan menu items
const leftMenuItems = computed(() => menuItems.slice(0, 3));
const rightMenuItems = computed(() => menuItems.slice(3));

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        activeSection.value = id;
    }
};

// Scroll detection yang benar
const handleScroll = () => {
    const sections = menuItems.map((item) => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    let current = "beranda";

    sections.forEach((section) => {
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                current = section.id;
            }
        }
    });

    activeSection.value = current;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const contactForm = ref({
    name: "",
    email: "",
    message: "",
});

// Mock data (tetap sama seperti sebelumnya)
const projects = [
    {
        id: 1,
        name: "E-Commerce Website",
        category: "E-Commerce",
        description:
            "Website toko online dengan shopping cart, payment gateway, dan admin dashboard yang lengkap.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        technologies: [
            "Vue.js",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
            "Stripe API",
        ],
    },
    {
        id: 2,
        name: "Company Profile Website",
        category: "Corporate",
        description:
            "Website perusahaan modern dengan portfolio, blog, dan contact form yang responsif.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "PHP"],
    },
    {
        id: 3,
        name: "Learning Management System",
        category: "Education",
        description:
            "Platform e-learning dengan course management, video player, dan progress tracking.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Video.js", "JWT"],
    },
    {
        id: 4,
        name: "Hotel Booking Website",
        category: "Travel",
        description:
            "Website booking hotel dengan calendar availability, review system, dan instant confirmation.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        technologies: [
            "Vue.js",
            "Express",
            "MySQL",
            "Payment Gateway",
            "Redis",
        ],
    },
    {
        id: 5,
        name: "News Portal Website",
        category: "Media",
        description:
            "Website berita dengan CMS custom, comment system, dan real-time notification.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        technologies: ["React", "Django", "PostgreSQL", "Redis", "WebSocket"],
    },
    {
        id: 6,
        name: "Healthcare Website",
        category: "Health",
        description:
            "Website rumah sakit dengan appointment system, doctor schedule, dan patient portal.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
        technologies: ["Angular", "Laravel", "MySQL", "FullCalendar", "SSL"],
    },
];

const templates = [
    {
        id: 1,
        name: "Website Company Profile",
        price: "Rp 1.500.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
        features: [
            "5 Halaman siap pakai",
            "Homepage lengkap",
            "About Us page",
            "Services/Portfolio page",
            "Contact page dengan form",
            "Blog page (opsional)",
        ],
    },
    {
        id: 2,
        name: "Website Portfolio",
        price: "Rp 1.200.000",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=350&fit=crop",
        features: [
            "4 Halaman utama",
            "Homepage dengan gallery",
            "About Me page",
            "Project portfolio page",
            "Contact page",
            "Single project detail page",
        ],
    },
    {
        id: 3,
        name: "Website Restoran",
        price: "Rp 2.000.000",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop",
        features: [
            "6 Halaman lengkap",
            "Homepage dengan promo",
            "Menu page dengan kategori",
            "About Us page",
            "Reservation page",
            "Contact page",
            "Gallery page",
        ],
    },
    {
        id: 4,
        name: "Website Toko Online",
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop",
        features: [
            "8 Halaman e-commerce",
            "Homepage dengan produk",
            "Product catalog page",
            "Product detail page",
            "Shopping cart page",
            "Checkout page",
            "About Us page",
            "Contact page",
            "Admin dashboard",
        ],
    },
    {
        id: 5,
        name: "Website Wedding",
        price: "Rp 800.000",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=350&fit=crop",
        features: [
            "4 Halaman romantis",
            "Homepage dengan countdown",
            "Our Story page",
            "Wedding Details page",
            "RSVP & Gallery page",
            "Special moments section",
        ],
    },
    {
        id: 6,
        name: "Website Startup",
        price: "Rp 3.000.000",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
        features: [
            "7 Halaman profesional",
            "Landing page hero",
            "Features/Services page",
            "About Company page",
            "Team page",
            "Testimonials page",
            "Blog/News page",
            "Contact page",
        ],
    },
];

const services = [
    {
        title: "Pembuatan Website",
        description:
            "Website custom sesuai kebutuhan bisnis Anda dengan teknologi terkini dan desain modern",
        features: [
            "Responsive Design",
            "SEO Friendly",
            "Fast Loading",
            "Secure & Reliable",
        ],
        icon: Code2,
        icons: [Code2, Rocket, Palette],
        color: "from-cyan-500 to-blue-500",
    },
    {
        title: "Optimasi Kecepatan",
        description:
            "Tingkatkan performa website hingga 10x lebih cepat untuk pengalaman user yang maksimal",
        features: [
            "Code Optimization",
            "Image Compression",
            "Caching Strategy",
            "CDN Integration",
        ],
        icon: Rocket,
        icons: [Rocket, Wrench],
        color: "from-emerald-500 to-cyan-500",
    },
    {
        title: "Desain UI/UX",
        description:
            "Desain antarmuka yang menarik dan intuitif untuk meningkatkan konversi dan engagement",
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
        ],
        icon: Palette,
        icons: [Palette, Laptop],
        color: "from-pink-500 to-violet-500",
    },
    {
        title: "Maintenance & Support",
        description:
            "Dukungan teknis 24/7 dan pemeliharaan rutin untuk memastikan website selalu optimal",
        features: [
            "24/7 Monitoring",
            "Regular Updates",
            "Bug Fixes",
            "Performance Reports",
        ],
        icon: Wrench,
        icons: [Wrench, Laptop],
        color: "from-blue-500 to-indigo-500",
    },
];

const websiteCategories = [
    {
        id: "landing",
        name: "Landing Page",
        description: "Halaman tunggal untuk promosi produk/jasa",
        basePrice: 1500000,
    },
    {
        id: "company",
        name: "Company Profile",
        description: "Website profil perusahaan 5–7 halaman",
        basePrice: 2500000,
    },
    {
        id: "ecommerce",
        name: "Toko Online / E-Commerce",
        description: "Website toko online dengan katalog produk",
        basePrice: 5000000,
    },
    {
        id: "blog",
        name: "Portal Berita / Blog",
        description: "Website berita atau blog dengan CMS",
        basePrice: 3000000,
    },
    {
        id: "system",
        name: "Sistem Informasi",
        description: "Aplikasi web custom sesuai kebutuhan",
        basePrice: 8000000,
    },
    {
        id: "portfolio",
        name: "Portfolio / Personal",
        description: "Website portfolio untuk showcase karya",
        basePrice: 1800000,
    },
];

// =======================
// ⚙️ Fitur Tambahan
// =======================
const allFeatures = [
    {
        id: "responsive",
        label: "Responsive Design (Mobile & Tablet)",
        price: 0,
        included: true,
    },
    { id: "seo", label: "SEO Optimization", price: 1500000 },
    { id: "cms", label: "Content Management System (CMS)", price: 2000000 },
    { id: "admin", label: "Admin Panel", price: 2500000 },
    { id: "auth", label: "Sistem Login & Registrasi User", price: 1500000 },
    { id: "booking", label: "Sistem Booking / Reservasi", price: 2500000 },
    { id: "multiLang", label: "Multi Bahasa", price: 1500000 },
    { id: "chat", label: "Live Chat Support", price: 1000000 },
];

// =======================
// 🔗 Relasi Kategori → Fitur
// =======================
const categoryFeatureMap = {
    landing: ["responsive", "seo", "chat"],
    company: ["responsive", "seo", "cms", "chat", "multiLang"],
    ecommerce: [
        "responsive",
        "seo",
        "cms",
        "admin",
        "auth",
        "booking",
        "multiLang",
        "chat",
    ],
    blog: ["responsive", "seo", "cms", "multiLang"],
    system: ["responsive", "admin", "auth", "booking", "multiLang", "chat"],
    portfolio: ["responsive", "seo", "chat", "multiLang"],
};

// =======================
// 💡 State
// =======================
const selectedCategory = ref("landing");
const selectedFeatures = ref({});

// =======================
// 🧩 Logic
// =======================
const handleCategoryChange = (id) => {
    selectedCategory.value = id;
    selectedFeatures.value = {}; // reset fitur saat ganti kategori
};

// Fitur yg relevan dgn kategori aktif
const availableFeatures = computed(() => {
    if (!selectedCategory.value) return [];
    const allowedIds = categoryFeatureMap[selectedCategory.value] || [];
    return allFeatures.filter((f) => allowedIds.includes(f.id));
});

const handleFeatureChange = (id, checked) => {
    selectedFeatures.value = {
        ...selectedFeatures.value,
        [id]: checked,
    };
};

// Format Rupiah
const formatPrice = (value) =>
    value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });

// Hitung total
const calculateEstimation = () => {
    const category = websiteCategories.find(
        (c) => c.id === selectedCategory.value
    );
    const base = category ? category.basePrice : 0;

    const featuresTotal = availableFeatures.value.reduce((sum, f) => {
        if (f.included) return sum;
        if (selectedFeatures.value[f.id]) return sum + f.price;
        return sum;
    }, 0);

    return base + featuresTotal;
};

const contactInfo = ref({
    email: "hello@diviacode.com",
    whatsapp: "+6281234567890",
    instagram: "@diviacode",
    linkedin: "Diviacode Web",
});

const iconMap = {
    Code: Code,
    Zap: Zap,
    Palette: Palette,
    Settings: Settings,
};

// Computed

const openWhatsApp = () => {
    const message = `Halo, saya tertarik dengan layanan website Diviacode Web.\n\nKategori: ${
        selectedCategoryData.value?.name
    }\nEstimasi: ${formatPrice(calculateEstimation())}`;
    window.open(
        `https://wa.me/${contactInfo.value.whatsapp.replace(
            /[^0-9]/g,
            ""
        )}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
};

const submitContactForm = () => {
    console.log("Contact form submitted:", contactForm.value);
    contactForm.value = {
        name: "",
        email: "",
        message: "",
    };
    alert("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
};

const formData = ref({
    name: "",
    email: "",
    message: "",
});

const handleSubmit = () => {
    const message = `Halo Diviacode Web!\n\nNama: ${formData.value.name}\nEmail: ${formData.value.email}\n\nPesan:\n${formData.value.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
        message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Pesan Anda akan dikirim melalui WhatsApp");
    formData.value = { name: "", email: "", message: "" };
};

const contactMethods = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+62 812-3456-7890",
        link: "https://wa.me/6281234567890",
    },
    {
        icon: Mail,
        label: "Email",
        value: "hello@diviacodeweb.com",
        link: "mailto:hello@diviacodeweb.com",
    },
    {
        icon: Instagram,
        label: "Instagram",
        value: "@diviacodeweb",
        link: "https://instagram.com/diviacodeweb",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Diviacode Web",
        link: "https://linkedin.com/company/diviacodeweb",
    },
];
</script>

<style>
/* Reset dan Base Styles */
* {
    box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
@keyframes glowPulse {
    0%,
    100% {
        box-shadow: 0 0 10px rgba(34, 211, 238, 0.4),
            0 0 20px rgba(37, 99, 235, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(34, 211, 238, 0.7),
            0 0 30px rgba(37, 99, 235, 0.5);
    }
}

.gradient-text {
    /* Asumsi warna gradient yang Anda inginkan */
    background: linear-gradient(90deg, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.bg-gradient-primary {
    /* Asumsi warna gradient untuk ikon */
    background: linear-gradient(135deg, #007bff, #00d4ff);
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
@keyframes pulse-line {
    0%,
    100% {
        stroke-dashoffset: 500;
    }
    50% {
        stroke-dashoffset: 0;
    }
}

@keyframes glow {
    0%,
    100% {
        filter: drop-shadow(0 0 5px #06b6d4) drop-shadow(0 0 10px #06b6d4);
    }
    50% {
        filter: drop-shadow(0 0 10px #06b6d4) drop-shadow(0 0 20px #06b6d4);
    }
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

/* ===== Ikon teknologi melayang ===== */
.floating-icons .icon {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.2);
    animation: floatAround 14s infinite ease-in-out alternate;
}

.icon.react {
    background-image: url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg");
    top: -30px;
    left: 10%;
    animation-delay: 0s;
}
.icon.vue {
    background-image: url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg");
    top: 20%;
    right: -40px;
    animation-delay: 3s;
}
.icon.laravel {
    background-image: url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg");
    bottom: -30px;
    left: 20%;
    animation-delay: 6s;
}
.icon.node {
    background-image: url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg");
    top: 70%;
    right: -35px;
    animation-delay: 9s;
}
.icon.tailwind {
    background-image: url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg");
    bottom: 10%;
    left: -35px;
    animation-delay: 12s;
}

@keyframes floatAround {
    0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0.8;
    }
    50% {
        transform: translate(10px, -10px) rotate(10deg);
        opacity: 1;
    }
    100% {
        transform: translate(-10px, 15px) rotate(-10deg);
        opacity: 0.8;
    }
}
.animate-glow {
    animation: glow 2s ease-in-out infinite;
}

.pulse-delay {
    animation-delay: 0.1s;
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
    background-image: linear-gradient(
            to right,
            rgba(0, 53, 70, 0.2) 1px,
            transparent 1px
        ),
        linear-gradient(to bottom, rgba(0, 55, 74, 0.3) 1px, transparent 1px);
    background-size: 50px 50px;
}
@keyframes ekgPulse {
    0%,
    100% {
        transform: scale(1);
        opacity: 0.9;
        filter: drop-shadow(0 0 0px #0ff);
    }
    50% {
        transform: scale(1.05);
        opacity: 1;
        filter: drop-shadow(0 0 10px #0ff);
    }
}

.animate-ekg-pulse {
    animation: ekgPulse 1.5s ease-in-out infinite;
}
.ekg-line {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ekg-flow 3s linear infinite;
}

@keyframes ekg-flow {
    to {
        stroke-dashoffset: 0;
    }
}

/* opsional, untuk background grid halus */
.bg-grid-pattern {
    background-image: linear-gradient(
            hsl(var(--primary) / 0.05) 1px,
            transparent 1px
        ),
        linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px);
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

.bg-background\/80 {
    background-color: rgba(0, 0, 0, 0.8);
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
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", sans-serif;
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

/* Header Styles */
.dark-header {
    background: var(--brand-navy) !important;
    border-bottom: 1px solid var(--border-subtle);
    height: 80px;
    backdrop-filter: blur(12px);
}

.dark-nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.dark-nav-link:hover {
    color: var(--brand-primary);
}

/* Logo Trapezoid */
.logo-trapezoid {
    position: relative;
    background: var(--brand-navy);
    padding: 12px 24px;
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
    border: 1px solid var(--border-subtle);
    box-shadow: 0 8px 24px rgba(0, 255, 209, 0.15);
}

/* Hero Section */
.hero-section {
    min-height: 100vh;
    background: linear-gradient(180deg, #000000 0%, #0a1628 50%, #000000 100%);
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

.hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
            circle at 20% 50%,
            rgba(0, 255, 209, 0.1) 0%,
            transparent 50%
        ),
        radial-gradient(
            circle at 80% 50%,
            rgba(14, 165, 233, 0.1) 0%,
            transparent 50%
        );
    pointer-events: none;
}

.hero-grid {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 7.6923%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-content {
    animation: fadeInUp 1s ease-out;
}

.hero-title {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
}

.text-brand {
    background: linear-gradient(
        135deg,
        var(--brand-primary) 0%,
        var(--brand-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 20px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 32px;
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

/* Devices Showcase */
.hero-illustration {
    animation: fadeInRight 1s ease-out;
    position: relative;
}

.devices-showcase {
    position: relative;
    width: 100%;
    height: 500px;
}

.device-laptop {
    position: absolute;
    width: 400px;
    height: 240px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border-radius: 12px;
    border: 4px solid #333;
    box-shadow: 0 20px 60px rgba(0, 255, 209, 0.2);
    top: 50%;
    left: 0;
    transform: translateY(-50%) perspective(1000px) rotateY(5deg);
    animation: float 6s ease-in-out infinite;
}

.device-screen {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 8px;
    padding: 20px;
}

.screen-header {
    display: flex;
    gap: 6px;
    margin-bottom: 20px;
}

.screen-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--text-muted);
}

.screen-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.screen-line {
    height: 8px;
    background: linear-gradient(
        90deg,
        var(--brand-primary) 0%,
        transparent 100%
    );
    border-radius: 4px;
    animation: pulse 2s ease-in-out infinite;
}

.screen-line.short {
    width: 60%;
}

.screen-box {
    height: 60px;
    background: rgba(0, 255, 209, 0.1);
    border: 1px solid var(--brand-primary);
    border-radius: 8px;
    margin-top: 12px;
}

.floating-icon {
    position: absolute;
    color: var(--brand-primary);
    opacity: 0.3;
    animation: floatRotate 8s ease-in-out infinite;
}

.icon-1 {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
}

.icon-2 {
    bottom: 25%;
    left: 5%;
    animation-delay: 2s;
}

.icon-3 {
    top: 45%;
    right: 25%;
    animation-delay: 4s;
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

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.service-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 40px;
    transition: all 0.3s ease;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 255, 209, 0.15);
    border-color: var(--brand-primary);
}

.service-card-content {
    text-align: center;
}

.service-icon {
    width: 80px;
    height: 80px;
    background: rgba(0, 255, 209, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: var(--brand-primary);
    transition: all 0.3s ease;
}

.service-card:hover .service-icon {
    background: var(--brand-primary);
    color: #000000;
    transform: scale(1.1);
}

.service-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.service-description {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.6;
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
    background: linear-gradient(
        135deg,
        rgba(0, 255, 209, 0.1) 0%,
        rgba(14, 165, 233, 0.1) 100%
    );
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

/* Contact Section */
.contact-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
}

.contact-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
}

.contact-card-header {
    padding: 32px 32px 0;
}

.contact-card-title {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
}

.contact-card-content {
    padding: 32px;
}

.contact-form {
    display: grid;
    gap: 24px;
}

.form-group {
    display: grid;
    gap: 8px;
}

.form-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
}

.form-input,
.form-textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 16px;
    color: var(--text-primary);
    transition: all 0.3s ease;
    font-family: inherit;
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

.btn-submit {
    width: 100%;
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
}

.btn-submit:hover {
    background: var(--brand-secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 255, 209, 0.3);
}

.contact-info-card {
    background: rgba(0, 255, 209, 0.05);
    border: 1px solid rgba(0, 255, 209, 0.2);
    border-radius: 16px;
    padding: 40px;
}

.contact-info-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 32px;
}

.contact-info-list {
    display: grid;
    gap: 24px;
}

.contact-info-item {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border-subtle);
}

.contact-info-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.contact-info-label {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.contact-info-value {
    font-size: 18px;
    font-weight: 500;
    color: var(--brand-primary);
}

/* Footer */
.footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-subtle);
    padding: 40px 7.6923%;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.footer-text {
    font-size: 14px;
    color: var(--text-muted);
    text-align: center;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
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

@keyframes floatRotate {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-15px) rotate(5deg);
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
    .hero-grid,
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

    .device-mobile {
        width: 120px;
        height: 240px;
    }
}

@media (max-width: 768px) {
    .dark-header {
        padding: 0 20px;
        height: 70px;
    }

    .dark-nav-link {
        font-size: 14px;
    }

    .hero-section {
        padding-top: 100px;
    }

    .hero-grid {
        padding: 60px 20px;
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

    .logo-trapezoid {
        padding: 12px 24px;
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

.trapezoid-outline {
    position: relative;
}

.trapezoid-outline::before {
    content: "";
    position: absolute;
    top: -2px; /* sejajar garis header */
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    z-index: -1;
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

.gradient-text {
    background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

.line-1 {
    top: 10%;
    left: -100%;
    width: 200%;
    animation-delay: 0s;
    transform: rotateZ(30deg) translateZ(-50px);
}
.line-2 {
    top: 30%;
    left: -80%;
    width: 180%;
    animation-delay: 3s;
    transform: rotateZ(-15deg) translateZ(0px);
}
.line-3 {
    top: 50%;
    left: -120%;
    width: 220%;
    animation-delay: 6s;
    transform: rotateZ(45deg) translateZ(-100px);
}
.line-4 {
    top: 70%;
    left: -90%;
    width: 190%;
    animation-delay: 9s;
    transform: rotateZ(0deg) translateZ(50px);
}
.line-5 {
    top: 90%;
    left: -110%;
    width: 210%;
    animation-delay: 12s;
    transform: rotateZ(-30deg) translateZ(20px);
}

@keyframes lineMove {
    0% {
        transform: translateX(0) rotateZ(var(--rotation, 0deg))
            translateZ(var(--depth, 0px));
        opacity: 0.2;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        transform: translateX(200%) rotateZ(var(--rotation, 0deg))
            translateZ(var(--depth, 0px));
        opacity: 0.2;
    }
}

.line-1 {
    --rotation: 30deg;
    --depth: -50px;
}
.line-2 {
    --rotation: -15deg;
    --depth: 0px;
}
.line-3 {
    --rotation: 45deg;
    --depth: -100px;
}
.line-4 {
    --rotation: 0deg;
    --depth: 50px;
}
.line-5 {
    --rotation: -30deg;
    --depth: 20px;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.glow-effect {
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
}
</style>
