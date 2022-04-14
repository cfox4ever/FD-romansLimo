<template>
  <div class="">
    <div class="col q-pa-s justify-center">
      <div class="row">
        <q-card  square class="shadow-24 bg-dark" style="width:100%;height:100%;">
          <q-card-section>
            <div class="row ">
              
            <h4 class="text-h5 text-amber-12 center">LOG IN</h4>
            
             </div>
                <div class="text-right">
           <p class="text-blue-6 cursor-pointer bi" @click="goToRegister">Need TO Register ? Click Here </p>
            
             </div>
          </q-card-section>
          <q-separator color="amber-12" />
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input
              
                clearable
                filled
                class="q-ma-xs"
                bg-color="amber-12"
                v-model="formData.email"
                type="email"
                label="Email"
                placeholder="Enter your email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                clearable
                class="q-ma-xs"
                filled
                bg-color="amber-12"
                v-model="formData.password"
                type="password"
                label="Password"
                placeholder="Enter your password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-xs">
            <q-btn
              unelevated
              size="lg"
              color="amber-12"
              icon="send"
              class="full-width text-black"
              label="Sign In"
            />
          </q-card-actions>
          <q-separator color="amber-12" />
          <q-card-section class="text-center q-pa-sm">
            <p class="text-blue-6">Forgot your password?</p>
            <p class="text-blue-6 cursor-pointer" @click="goToRegister">Need TO Register ? Click Here </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
  const formData = reactive({
    email: '',
    password: '',
  })
function goToRegister () {
    router.push('/register')
}
</script>

<style>
</style>