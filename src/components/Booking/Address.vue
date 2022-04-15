<template>
  <div class="row">
    <div class="col-6">
      <q-input
        clearable
         dense
        rounded 
        outlined
        class="col q-ma-xs"
        label="Address"
        
        bg-color="amber-12"
        v-model="address1"
        subtitle="Address"
         :rules="[val => !!val || 'Field is required']"
      />
    </div>
    <div class="col-6">
      <q-input
         dense
        rounded 
        outlined
        clearable
        class="col q-ma-xs"
        label="Address APT, Suite, Floor, etc."
        bg-color="amber-12"
        v-model="address2"
        subtitle="Address APT, Suite, Floor, etc."
      />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <q-input
        clearable
         dense
        rounded 
        outlined
        class="col q-ma-xs"
        label="City"
        bg-color="amber-12"
        v-model="city"
        subtitle="City"
         :rules="[val => !!val || 'Field is required']"
      />
    </div>
    <div class="col-4">
      <q-select
         dense
         :options="states"
        rounded 
        outlined
        clearable
        class="col q-ma-xs"
        label="State"
        bg-color="amber-12"
        v-model="state"
        subtitle="State"
         :rules="[val => !!val || 'Field is required']"
      />
    </div>
    <div class="col-4">
      <q-input
         dense
         type="number"
        rounded 
        outlined
        clearable
        class="col q-ma-xs"
        label="Zip"
        bg-color="amber-12"
        v-model="zip_code"
        subtitle="Zip Code"
         :rules="[val => !!val || 'Field is required']"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
const address1 = ref("");
const address2 = ref("");
const city = ref("");
const state = ref("");
const zip_code = ref("");
const states =['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

</script>
