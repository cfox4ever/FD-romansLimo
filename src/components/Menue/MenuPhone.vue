<template>
  <q-tabs>
    <q-btn color="amber" icon="menu">
      <q-menu
        fit
        class="bg-dark text-amber"
        transition-show="rotate"
        transition-hide="rotate"
      >
        <q-tabs bg-dark class="text-yellow-12" vertical>
          <q-route-tab to="getaquote" label="Get A Quote" />
          <q-route-tab to="services" label="Services" />
          <q-route-tab to="fleet" label="Fleet" />
          <q-route-tab to="testimonials" label="Testimonials" />
          <q-route-tab to="login" label="Login / Register" />
          <q-route-tab to="corporate" label="Corporate" />
          <q-route-tab to="about" label="About" />
          <q-route-tab to="faq" label="FAQ's" />
          <q-route-tab to="contactus" label="Contact Us" />
        </q-tabs>
      </q-menu>
    </q-btn>

    <q-toolbar>
      <q-toolbar-title class="absolute-center">
       
        <span
          class="text-amber-12 text-h4 text-center cursor-pointer title-font"
          size="lg"
          @click="goHome"
          >Roman's Limo</span
        >
        <q-tooltip class="bg-dark text-amber-12" :offset="[5, 5]"
          >🌟🌟🌟🌟🌟</q-tooltip
        >
        <q-avatar size="50px" @click="goHome" class="cursor-pointer">
          <img src="../../assets/RL.png" />
        </q-avatar>
      </q-toolbar-title>
    </q-toolbar>
  </q-tabs>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goHome() {
  router.push("/");
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.title-font {
  font-family: "Satisfy", cursive;
}
</style>
<style lang="sass" scoped>

.logo-title

    padding: 0
    display: flex
    justify-content: center
    align-items: center
    margin-left: auto
    margin-right: auto
</style>
