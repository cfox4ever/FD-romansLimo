<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card dark bordered class="bg-dark my-card">
      <q-card-section>
        <div class="text-h3">Contact US</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form>
          <div class="row">
            <q-select clearable
             rounded
              filled
               bg-color="amber-12"
              class="col q-ma-xs" v-model="form.reason" :options="reasonOptions" label="Reason" >
              <template v-slot:prepend>
          <q-icon name="contact_support" />
        </template></q-select>
          </div>
          <div class="row">
            <q-input
              clearable
              rounded
              filled
              class="col q-ma-xs"
              label="First Name"
              v-model="form.fname"
              type="text"
              bg-color="amber-12"
            ><template v-slot:prepend>
          <q-icon name="person" />
        </template></q-input>
            <q-input
              clearable
              rounded
              filled
              class="col q-ma-xs"
              label="Last Name"
              v-model="form.lname"
              type="text"
              bg-color="amber-12"
            >
            <template v-slot:prepend>
          <q-icon name="person3" />
        </template>
            </q-input>
          </div>
          <div class="row">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Email"
              v-model="form.email"
              type="email"
              bg-color="amber-12"
              
            ><template v-slot:prepend>
          <q-icon name="mail" />
        </template></q-input>
            <q-input
              clearable
              class="col q-ma-xs"
              label="Phone"
              bg-color="amber-12"
              
              v-model="form.phone"
              mask="(###) ### - ####"
        
            >
            <template v-slot:prepend>
          <q-icon name="phone" />
        </template> </q-input>  
          </div>
          <div class="row">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Message"
              type="textarea"
              bg-color="amber-12"
              v-model="form.message"
            >
            <template v-slot:prepend>
          <q-icon name="message" />
        </template></q-input>
          </div>
          <div class="center">
            <q-btn rounded glossy color="amber" label="Submit" text-color="dark" icon="send" size="lg"></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <Book/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Book from '../components/Book'
const reasonOptions = ref(['Quote', 'General Inquiry', 'Support', 'Other'])
const form = ref({
  reason:'',
  fname: '',
  lname: '',
  phone: '',
  email: '',
  message: ''
})

</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>