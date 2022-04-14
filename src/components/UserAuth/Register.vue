<template>
  <div class="">
    <div class="col q-pa-s justify-center">
      <div class="row">
        <q-card square class="shadow-24 bg-dark" style="width:100%;height:700px;">
          <q-card-section>
            <div class="row">
              <h4 class="text-h5 text-amber-12 center col-4">Register</h4>
            </div>
             <div class="text-right">
            <p class="text-blue-6 cursor-pointer" @click="goToLogin">ALREADY A Member ? Click Here To Login </p>
            
             </div>
          </q-card-section>
          <q-separator color="amber-12" />
          <q-card-section>
            <q-form>
              <div class="row">
                <q-input
                  clearable
                  filled
                  class="col q-ma-xs"
                  label="First Name"
                  v-model="form.fname"
                  type="text"
                  bg-color="amber-12"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  clearable
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
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
                <q-input
                  clearable
                  class="col q-ma-xs"
                  bg-color="amber-12"
                  label="Phone"
                  v-model="form.phone"
                  mask="(###) ### - ####"
                >
                  <template v-slot:prepend>
                    <q-icon name="phone" />
                  </template>
                </q-input>
              </div>
              <div class="row items-start">
                <q-input
                  clearable
                  class="col q-ma-xs"
                  bg-color="amber-12"
                  v-model="password"
                  filled
                  type="password"
                  label="Password"
                ><template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>

                <q-input
                  clearable
                  class="col q-ma-xs"
                  bg-color="amber-12"
                  v-model="password"
                  label="Repeat Password"
                  filled
                  :type="isPwd ? 'password' : 'text'"
                >
                
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                    
                  </template>
                </q-input>
              </div>
              <q-card-actions class="q-px-lg">
                <q-btn
                  unelevated
                  size="lg"
                  color="amber-12"
                  icon="send"
                  class="full-width text-black"
                  label="Register"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
<q-separator color="amber-12" />
          <q-card-section class="text-center q-pa-sm">
            
            <p class="text-blue-6 cursor-pointer" @click="goToLogin">ALREADY A Member ? Click Here To Login </p>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({
  reason: '',
  fname: '',
  lname: '',
  phone: '',
  email: '',
  message: ''
})
function goToLogin () {
    router.push('/login')
}
const isPwd = ref(true)
</script>