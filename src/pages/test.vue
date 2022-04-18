<template>
<div>
TEST PAGE 
{{hello}}
banner
 <q-banner class="bg-primary text-white">
      Unfortunately, the credit card did not go through, please try again.
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" />
        <q-btn flat color="white" label="Update Credit Card" />
      </template>
    </q-banner>



<q-select label="Dropdown" icon="more_vert" v-model="selected" :options="options"/> 
    {{selected}}



    <q-field
        clearable
        dense
        rounded 
        outlined
        size="xs"
        autocomplete="off"
        class="col q-ma-xs"
        label="Stop Location"
        v-model="stop"
        type="text"
        bg-color="amber-12"
        value="test"
    >

      
      
    </q-field>
  <q-btn label="Pickup Location" color="primary" @click="dialog = true" />
 <q-dialog v-model="dialog"        >
      <q-card style="width: 700px; max-width: 80vw;">
        <Address />
      </q-card>
    </q-dialog>
</div>

</template>

<script setup>
import {  ref } from 'vue'
import { useQuasar } from 'quasar'
import Address from '../components/Booking/Address'

const $q = useQuasar()
const hello = ref("Hello")
const selected = ref("")
const options = ref (['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'])
const address =ref('')
const dialog = ref(false)
const cancelEnabled = ref(false)
</script>