<template>
<div>
  <RideInfo v-model="formData" @sendingRideInfo="getRideInfo" />
  {{formData}}
</div>
</template>
<script setup>
import { ref,reactive } from 'vue'

import RideInfo from '../components/Booking/RideInfo'
const formData = ref([])
const getRideInfo = (data) => {
  formData.value = data
 
}
</script>