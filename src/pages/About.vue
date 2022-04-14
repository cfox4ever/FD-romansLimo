<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card dark bordered>
            <q-card-section>
                <div class="text-h1 text-center text-bold">
                    <span
                        @mouseleave="colored = ''"
                        @mouseover="changeColor"
                        :class="colored"
                    >Roman's LIMOUSINE</span>
                </div>
                <div
                    class="text-h5 text-center text-bold text-amber-12"
                >Limousine is dedicated to providing the highest-quality and most professional transportation services. Our experience in the transportation industry has helped us to understand the quality of service that our clients expect and deserve.</div>
            </q-card-section>
            <separator />
            <q-card-section
                class="text-h5 text-center text-bold text-amber-12"
            >Our attention to detail during each interaction helps us to provide our clients with a safe, reliable and luxurious ride. We provide live customer service that is able to assist in your transportation needs 24 hours a day, 7 days a week.</q-card-section>
            <q-card-section class="text-h6 text-left">
                <br />🌟 Great Customer Service
                <br />🌟 Professionally highly Trained Chauffeurs
                <br />🌟 Latest Model Fleet
                <br />🌟 Smoke Free Vehicles
                <br />🌟 On Time
            </q-card-section>
            <separator />
            <q-card-section
                class="text-h5 text-center text-bold text-amber-12"
            >Trust Roman's Limousine To Take Care Of All Of Your Ground Transportation Needs</q-card-section>
            <q-card-section class="text-h6 text-left"></q-card-section>
            <q-card-section class="text-h6 text-left">
                🌟 Our drivers’ to safely get your destinations safely.
                <br />🌟 Trained Chauffeurs
                <br />🌟 Secure Online Booking & Payment
                <br />🌟 Email and Text Notifications
                <br />🌟 Flight Tracking
            </q-card-section>
            <q-card-section>
                <q-btn
                    color="amber"
                    label="Book Now"
                    @click="$router.push('/booking')"
                    icon="star"
                />
            </q-card-section>
        </q-card>
        <Book/>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Book from '../components/Book'
const colored = ref('')
const changeColor = () => {
    colored.value = 'text-amber-12'
}
</script>