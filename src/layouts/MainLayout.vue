<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <MenuDesktop v-if="$q.screen.width > 1023" />
      <MenuPhone v-if="$q.screen.width < 1023" />
    </q-header>

    <q-page-container>
      <router-view />
<cookie :cookietext="cookietext" :cookiebutton="cookiebutton" :cookietextcolor="cookietextcolor"
    :cookietextsize="cookietextsize" :cookiebackgroundcolor="cookiebackgroundcolor" :cookiename="cookiename" :cookievalue="cookievalue" :cookieexdays="cookieexdays" ></cookie>
      <Footer />
      <Book/>
    </q-page-container>
     
  </q-layout>
</template>

<script>




// calling here; equivalent to when component is created
// watch(() => $q.dark.isActive, val => {
//   console.log(val ? 'On dark mode' : 'On light mode')
// })


import { defineComponent, ref, onBeforeMount } from 'vue'
import Book from '../components/Book'

import MenuDesktop from '../components/Menue/MenuDesktop.vue'
import MenuPhone from '../components/Menue/MenuPhone.vue'
import Footer from '../components/Footer.vue';
import cookie from '../components/cookie.vue';
export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuDesktop,
    MenuPhone,
    Footer,
    Book,
    cookie

  },

  setup () {
  
    return {
      cookietext:'In order to give you the best experience, our website eats cookies. By continuing to use this site, you agree to our diet of cookies.',
      cookiebutton:'I AGREE',
      cookietextcolor:'amber-12',
      cookietextsize:'20px',
      cookiebackgroundcolor:'dark',
      cookiename:'VUECOOKIE',
      cookievalue:'12345',
      cookieexdays:365,
    }
     
    
  },
})
</script>
