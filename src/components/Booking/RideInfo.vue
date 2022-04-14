<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card dark bordered class="bg-dark my-card">
      <q-card-section>
        <div class="row">
          <q-input clearable required filled class="col q-ma-xs" label="First Name" v-model="fname" type="text"
            bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input clearable filled class="col q-ma-xs" label="Last Name" v-model="lname" type="text"
            bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="person3" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-input clearable class="col q-ma-xs" label="Email" v-model="email" type="email" bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <q-input clearable class="col q-ma-xs" label="Phone" bg-color="amber-12" v-model="phone"
            mask="(###) ### - ####">
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-select clearable filled bg-color="amber-12" class="col q-ma-xs" v-model="service" :options="serviceOptions"
            label="Service">
            <template v-slot:prepend>
              <q-icon name="directions_car_filled" />
            </template>
          </q-select>
        </div>
        <div class="row">
          <div class="col">
            <q-input clearable class="col q-ma-xs" label="Pickup Date" bg-color="amber-12" v-model="fdate"
              subtitle="Pick UP Date">
              <template v-slot:prepend>
                <q-btn icon="event" round>
                  <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="fdate" :options="dateOptions" title="Pick UP Date" mask="MM-DD-YYYY" color="dark"
                      text-color="amber-12">
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn label="Cancel" color="primary" flat v-close-popup />
                        <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-btn>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input clearable class="col q-ma-xs" label="Pickup Time" bg-color="amber-12" v-model="time"
              mask="##:## AM">
              <template v-slot:prepend>
                <q-btn icon="access_time" round>
                  <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                    <div class="bg-dark">
                      <q-time color="dark" text-color="amber-12" v-model="time" mask="hh:mm A">
                        <div class="row items-center justify-end q-gutter-sm">
                          <q-btn label="Cancel" color="primary" flat v-close-popup />
                          <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                        </div>
                      </q-time>
                    </div>
                  </q-popup-proxy>
                </q-btn>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <label
            class="q-field row no-wrap items-start q-field--filled q-input q-field--float q-field--labeled col q-ma-xs"
            for="Gpickup">
            <!---->
            <div class="q-field__inner relative-position col self-stretch">
              <div class="q-field__control relative-position row no-wrap bg-amber-12" tabindex="-1">
                <div class="q-field__prepend q-field__marginal row no-wrap items-center">
                  <i class="q-icon notranslate material-icons" aria-hidden="true" role="presentation">location_on</i>
                </div>
                <div class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                  <input class="q-field__native q-placeholder" tabindex="0" aria-label="Pickup Address" id="Gpickup"
                    type="text" v-model="pickup" />
                  <div class="q-field__label no-pointer-events absolute ellipsis">
                    Pickup Address
                  </div>
                  <!---->
                </div>
                <div class="q-field__append q-field__marginal row no-wrap items-center q-anchor--skip">
                  <button class="q-icon notranslate material-icons q-field__focusable-action" tabindex="0" type="button"
                    @click="pickup = ''">
                    cancel
                  </button>
                </div>
              </div>
              <!---->
            </div>
            <!---->
          </label>
        </div>
        <!-- <div class="row">
          <q-input
            clearable
            filled
            class="col q-ma-xs"
            label="Pickup Address"
            v-model="pickup"
            type="text"
            bg-color="amber-12"
                       
          :id="Gpickup"
           
            
             
          >
            <template v-slot:prepend>
              <q-icon name="location_on"  />
            </template>
          </q-input>
         
        </div> -->

        <div class="row pn-right" v-for="(stop, index) in stops">
          <q-btn rounded color="amber-12" class="text-black q-ma-xs">
            Stop # {{ index + 1 }} --> {{ stop }}
            <q-icon name="delete" color="red" @click="deleteStop" />
          </q-btn>
        </div>

        <div class="row">
          <AddStop v-model="stop" v-if="addStopField"  />
        </div>

        <div class="frow on-left">
          <q-btn label=" + Add Stop" color="amber-12" flat @click="addStopField = true" />
        </div>

        <div class="row">
          <q-input clearable filled class="col q-ma-xs" label="Drop-off Address" v-model="dropoff" type="text"
            bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="location_off" />
            </template>
          </q-input>
        </div>

        <div class="row">
          <div class="col">
            <q-input clearable filled class="col q-ma-xs" label="Number of Passengers" v-model="passengers"
              type="number" bg-color="amber-12">
              <template v-slot:prepend>
                <q-icon name="people" />
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input clearable filled class="col q-ma-xs" label="Luggage Count" v-model="luggage" type="number"
              bg-color="amber-12">
              <template v-slot:prepend>
                <q-icon name="luggage" />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row">
          <q-input clearable filled class="col q-ma-xs" label="Child Seat" v-model="child" type="number"
            bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="child_care" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-input clearable filled class="col q-ma-xs" label="Special Instructions" v-model="instructions"
            type="textarea" bg-color="amber-12">
            <template v-slot:prepend>
              <q-icon name="comment" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-icon name="accessible" size="lg" :color="accessible ? 'green' : 'white'" />

          <q-icon name="help" :color="accessible ? 'green' : 'white'">
            <q-tooltip>We collect this data to ensure our vehicles/staff meet your
              individual needs.</q-tooltip>
          </q-icon>
          <q-toggle class="col q-ma-xs" :label="accessible ? 'Accessible Needed' : 'No Accessible'" v-model="accessible"
            color="green" keep-color />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import AddStop from './AddStop.vue'

import { date } from 'quasar'
const timeStamp = Date.now()


const addStopField = ref(false)
const stops = ref([])
const stop = ref('')

const fname = ref("")
const lname = ref("")
const email = ref("")
const phone = ref("")
const service = ref("")
const fdate = ref('')
const time = ref("")
const pickup = ref("")
const dropoff = ref("")
const passengers = ref("")
const luggage = ref("")
const child = ref("")
const instructions = ref("")
const accessible = ref(false)

// const formattedDate = date.formatDate(timeStamp, 'MM-DD-YYYY')
// fdate.value = formattedDate


const serviceOptions = ref([
  "Airport Arrival",
  "Airport Departure",
  "Point To Point",
  "Chauffeur Services rental",
  "Other",
]);


const addToStops = () => {
  stops.value.push(stop.value)
  stop.value = ''
  addStopField.value = false
}
const deleteStop = (index) => {
  stops.value.splice(index, 1)
}
const dateOptions = (fdate) => {
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;
  return fdate >= today
};
onMounted( () => {
  new google.maps.places.Autocomplete(document.getElementById("Gpickup"));
})

</script>

<!-- <script>
export default {
  data () {
    return {
      addStopField: false,
      stops: [],
      stop: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      service: "",
      fdate: "",
      time: "",
      pickup: "",
      dropoff: "",
      passengers: "",
      luggage: "",
      child: "",
      instructions: "",
      accessible: false,
      serviceOptions: [
        "Airport Arrival",
        "Airport Departure",
        "Point To Point",
        "Chauffeur Services rental",
        "Other",
      ],
     
    };
  },

  methods: {
    timeStamp () {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() + 1
        }/${current.getFullYear()}`;
      return date;
    },

    addToStops: () => {
      
      
      this.stops.push(this.stop);
      this.stop = "";
    },
    deleteStop: (index) => {
      this.stops.splice(index, 1);
    },

    formattedDate () {
      return date.formatDate(timeStamp, "MM-DD-YYYY");
    },
    autocomplete () { },
  },
  computed: {},
  mounted () {
    new google.maps.places.Autocomplete(document.getElementById("Gpickup"));
  },
  // watch : {
  //  pickup : function autocompleteLocation  (e)  {
  //    var id = e.target.value;
  //         var name = e.target.options[e.target.options.selectedIndex].text;
  //         console.log('id ',id );
  //         console.log('name ',name );
  // // new google.maps.places.Autocomplete(
  // //      document.getElementsByName("Gpickup")
  // //    )
  //     },
  // }
};
</script> -->
