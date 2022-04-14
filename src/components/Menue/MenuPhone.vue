<template>
    <q-toolbar>
        <q-btn color="amber" icon="menu">
        <q-menu 
        fit
        class="bg-dark text-amber" 
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-list style="min-width: 100px">
        
            <q-item clickable>
              <q-item-section>About</q-item-section>
            </q-item>
              <q-item clickable>
              <q-item-section>FAQ's</q-item-section>
            </q-item>
              <q-item clickable>
              <q-item-section>Fleet</q-item-section>
            </q-item>
              <q-item clickable>
              <q-item-section>Get A Quote</q-item-section>
            </q-item>
               <q-item clickable>
              <q-item-section>Services</q-item-section>
            </q-item>
               <q-item clickable>
              <q-item-section>Testimonials</q-item-section>
            </q-item>

            <q-separator color="amber"/>
            <q-item clickable>
              <q-item-section>Contact Us</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Login / Register </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>


        <q-toolbar-title class="q-pa-md row justify-center" color="amber" @click="goHome">
            <span class="text-amber-12">
                Roman's Limo
                <q-icon name="time_to_leave" />
            </span>
        </q-toolbar-title>
    </q-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


function goHome () {
    router.push('/')
}
</script>