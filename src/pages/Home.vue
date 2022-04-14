<template>
    <div class="q-pa-md">
        <q-carousel
            v-model="slide"
            swipeable
            animated
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            control-type="regular"
            control-color="dark"
            control-text-color="amber-12"
            height="500px"
            :autoplay="autoplay"
            class="bg-dark text-amber-12 rounded-borders"
        >
            <q-carousel-slide :name="1" img-src="../assets/images/2cars.jpeg" />
            <q-carousel-slide :name="2" img-src="../assets/images/1carairplane.jpeg" />
            <q-carousel-slide :name="3" img-src="../assets/images/3carsAirplane.jpeg" />
            <q-carousel-slide :name="4" img-src="../assets/images/anniversery.jpeg" />
            <q-carousel-slide :name="5" img-src="../assets/images/party.jpeg" />
            <q-carousel-slide :name="6" img-src="../assets/images/doorhandle.jpeg" />
            <q-carousel-slide :name="7" img-src="../assets/images/suvairplane.jpeg" />
        </q-carousel>

        <div class="shadow-box shadow-24 text-center text-bold text-amber-12 bg-dark">{{ occasion }}</div>
       <Book/>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Book from '../components/Book'
const slide = ref(1)
const autoplay = ref(true)
const occasion = computed(() => {
    if (slide.value === 1) {
        return "Business";
    } else if (slide.value === 2) {
        return "Airport Services";
    } else if (slide.value === 3) {
        return "Corporate Services";
    } else if (slide.value === 4) {
        return "Evening Out";
    } else if (slide.value === 5) {
        return "Proms";
    } else if (slide.value === 6) {
        return "Weddings";
    } else if (slide.value === 7) {
        return "Airport Transfers";
    }
});

</script>
<style lang="sass" scoped>

.shadow-box
    width: 90px
    height: 90px
    margin: 25px
    border-radius: 50%

    background-color: #1A76D2
    display: flex
    justify-content: center
    align-items: center
    margin-left: auto
    margin-right: auto
</style>