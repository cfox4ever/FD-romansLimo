<template>
  <div class="q-pa">
    <q-stepper
      v-model="step"
      vertical
      
      animated
      done-color="amber-12"
      active-color="dark"
      inactive-color="gray"
      done-icon="star"
    >
      <q-step
        :name="1"
        title="GET TO Know You ?"
        icon="account_circle"
        :done="step > 1"
      >
      
       <q-btn color="primary" @click="HideLoginForm"> Continuo As A Guest </q-btn>
       <q-btn color="primary" @click="showLoginForm = true" class="q-ma-xs" > Login  </q-btn>
       <Login  v-if="showLoginForm"/>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="dark" class="text-amber-12" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Select vehicle"
        
        icon="directions_car"
        :done="step > 2"
      >
        <RideInfo v-model="formData"/>
THE FORM IS {{formData}}
        <q-stepper-navigation>
          <q-btn @click="step = 3" color="dark" class="text-amber-12" label="Continue" />
          <q-btn flat @click="step = 1" color="dark"  label="Back" class="q-ml-sm text-dark" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Payment"
        icon="payment"
        
      >
        <q-stepper-navigation>
          <q-btn @click="step = 4" color="dark" class="text-amber-12" label="Continue" />
          <q-btn flat @click="step = 2" color="dark"  label="Back" class="q-ml-sm text-dark" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Review and Finish"
        icon="description"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="dark" class="text-amber-12" label="Finish" />
          <q-btn flat @click="step = 2" color="dark"  label="Back" class="q-ml-sm text-dark" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>


<script setup>
import { ref,reactive } from 'vue'
import RideInfo from '../components/Booking/RideInfo'
import Login from '../components/UserAuth/Login.vue'


const step = ref(1)
const showLoginForm = ref(false)

const HideLoginForm = () => {
  showLoginForm.value = false,
  step.value = 2
}
const formData = ref([])
</script>