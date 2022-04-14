<template>
<q-footer >
    
    <div class="row q-pa-md  bg-dark text-amber-12 ">
       <div class="col-12 col-md" >
  <q-btn size="xlg" icon="phone" class="blink_text" ><a :href="'tel:'+pphone" > Call US  : {{phone}}</a></q-btn>  
    </div>
    <div class="col-12 col-md" >
    <q-btn size="xlg" icon="email"  class="col"><a :href="'mailto:'+mail">Email US : {{email}}</a></q-btn>
    </div>
    <div class="col-12 col-md" >
    
    <q-btn size="xlg" icon="star" to="/booking" class="col">BOOK ONLINE </q-btn>
    </div>
    <div class="col-12 col-md" >
   <q-btn size="xlg" icon="person" to="/contactus" class="col">Contact Customer Service </q-btn>
    </div>
    </div> 
    <div class="row q-pa-md  bg-dark text-amber-12">
     <div class="col-12 col-md" >
     <q-btn size="xlg" icon="security" to="/privacy-policy" class="col">Privacy Policy </q-btn>
    </div>
    </div>
    
    
</q-footer>

</template>

<script setup>
import { useRouter } from 'vue-router'
import { webSite } from '../utils/WebSite.js'
const website = webSite.url
const email = webSite.email
const phone = webSite.phone
const pphone = webSite.pphone


</script>
<style>
.blink_text
{
    animation:1s blinker linear infinite;
    -webkit-animation:1s blinker linear infinite;
    -moz-animation:1s blinker linear infinite;
    color: rgb(21, 255, 0);
}

@-moz-keyframes blinker
{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker
{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes blinker
{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
 }

</style>