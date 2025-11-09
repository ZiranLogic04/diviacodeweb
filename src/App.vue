<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  metaInfo: {
    title: 'DiviaCode - Web Developer Profesional',
    meta: [
      { 
        name: 'description', 
        content: 'Jasa pembuatan website profesional, web development, dan solusi digital terbaik untuk bisnis Anda. Fast, modern, dan SEO friendly.' 
      },
      { 
        name: 'keywords', 
        content: 'web developer, jasa website, pembuatan web, programmer, vue.js, web development, jasa SEO, frontend developer' 
      },
      { 
        property: 'og:title', 
        content: 'DiviaCode - Web Developer Profesional' 
      },
      { 
        property: 'og:description', 
        content: 'Jasa pembuatan website profesional dan solusi digital untuk bisnis modern. Fast, responsive, dan SEO optimized.' 
      },
      { 
        property: 'og:image', 
        content: '/og-image.jpg' 
      },
      { 
        property: 'og:url', 
        content: 'https://diviacode.website' 
      },
      { 
        property: 'og:type', 
        content: 'website' 
      },
      { 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      { 
        name: 'twitter:title', 
        content: 'DiviaCode - Web Developer Profesional' 
      },
      { 
        name: 'twitter:description', 
        content: 'Jasa pembuatan website profesional dan solusi digital untuk bisnis modern' 
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://diviacode.website'
      }
    ]
  }
}
</script>

<style>
/* Global styles akan diimport dari style.css */
</style>