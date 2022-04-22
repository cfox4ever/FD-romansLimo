<template>
  <div>
    <q-card dark bordered class="bg-dark my-card">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md">
            <q-input
              clearable
              required
              filled
              class="col q-ma-xs"
              label="First Name"
              v-model="fname"
              type="text"
              bg-color="amber-12"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md">
            <q-input
              clearable
              filled
              class="col q-ma-xs"
              label="Last Name"
              v-model="lname"
              type="text"
              bg-color="amber-12"
            >
              <template v-slot:prepend>
                <q-icon name="person3" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Email"
              v-model="email"
              type="email"
              bg-color="amber-12"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Phone"
              bg-color="amber-12"
              v-model="phone"
              mask="(###) ### - ####"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md">
            <q-select
              v-model="service"
              :options="serviceOptions"
              clearable
              filled
              bg-color="amber-12"
              class="col q-ma-xs"
              label="Service"
              transition-show="scale"
              transition-hide="scale"
            >
              <template v-slot:prepend>
                <q-icon name="directions_car_filled" />
              </template>
            </q-select>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Pickup Date"
              bg-color="amber-12"
              v-model="fdate"
              subtitle="Pick UP Date"
            >
              <template v-slot:prepend>
                <q-btn icon="event" round>
                  <q-popup-proxy
                    @before-show="updateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="fdate"
                      :options="dateOptions"
                      title="Pick UP Date"
                      mask="MM-DD-YYYY"
                      color="dark"
                      text-color="amber-12"
                    >
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn
                          label="Cancel"
                          color="primary"
                          flat
                          v-close-popup
                        />
                        <q-btn
                          label="OK"
                          color="primary"
                          flat
                          @click="save"
                          v-close-popup
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-btn>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Pickup Time"
              bg-color="amber-12"
              v-model="time"
              mask="##:## AM"
              type="time"
            >
              
            </q-input>
          </div>
        </div>
        <!-- DISPLAYING DESTINATIONS  -->
        <q-separator color="green" inset />
        <q-separator color="green" inset />
        <q-btn
          rounded
          color="amber-12"
          class="text-black q-ma-xs"
          :icon="service == 'From Airport' ? 'flight' : 'flag'"
          v-if="pickup.address1"
        >
          <span v-for="s in pickup" v-if="s !== ''">{{ s }}</span>
        </q-btn>
        <!-- STOPS DISPLAY  -->
        <div class="row pn-right" v-for="(stop, index) in stops">
          <q-btn round color="red" size="sm" icon="add_location_alt" />
          <q-btn rounded color="amber-12" class="text-black q-ma-xs">
            Stop # {{ index + 1 }} -->
            <span v-for="s in stop" v-if="s != ''">{{ s }},</span>
            <q-icon name="delete" color="red" @click="deleteStop" />
          </q-btn>
        </div>
        <!-- END SYOPS DISPLAY  -->

        <q-btn
          rounded
          color="amber-12"
          class="text-black q-ma-xs"
          icon="hail"
          v-if="dropoff.address1"
        >
          <span v-for="s in dropoff" v-if="s != ''">{{ s }},</span>
        </q-btn>

        <q-separator color="green" inset />
        <q-separator color="green" inset />
        <div class="row">
          <div class="col-12 col-md">
            <q-btn
              dense
              label="Pickup Location "
              rounded
              color="amber-12"
              class="text-black q-ma-xs"
              keep-alive
              @click="fireFromAddress"
              icon="location_on"
            />
          </div>
          <div class="col-12 col-md">
            <q-btn
              dense
              label="Add Stop Location"
              rounded
              color="amber-12"
              class="text-black q-ma-xs"
              keep-alive
              @click="showAddStop = true"
              icon="stop"
            />
          </div>
          <div class="col-12 col-md">
            <q-btn
              dense
              label="Drop Off Location"
              rounded
              color="amber-12"
              class="text-black q-ma-xs"
              keep-alive
              @click="showDropOff = true"
              icon="hail"
            />
          </div>
        </div>
        <!-- PICKUP LOCATION  -->
        <q-dialog
          v-model="showAddress"
         keep-alive
        >
          <q-card style="width: 700px; max-width: 80vw">
            <Address @sendingform="getAddress" />
          </q-card>
        </q-dialog>
       

        <q-dialog v-model="showAddStop" >
          <q-card style="width: 700px; max-width: 80vw">
            <Address @sendingform="addStop" />
          </q-card>
        </q-dialog>
        <q-dialog v-model="showDropOff" keep-alive>
          <q-card style="width: 700px; max-width: 80vw">
            <Address @sendingform="dropOffAddress" />
          </q-card>
        </q-dialog>
        <div class="row">
          <div class="col-12 col-md">
            <q-input
              clearable
              filled
              class="col q-ma-xs"
              label="Number of Passengers"
              v-model="passengers"
              type="number"
              bg-color="amber-12"
            >
              <template v-slot:prepend>
                <q-icon name="people" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md">
            <q-input
              clearable
              filled
              class="col q-ma-xs"
              label="Luggage Count"
              v-model="luggage"
              type="number"
              bg-color="amber-12"
            >
              <template v-slot:prepend>
                <q-icon name="luggage" />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row">
          <q-input
            clearable
            filled
            class="col q-ma-xs"
            label="Child Seat"
            v-model="child"
            type="number"
            bg-color="amber-12"
          >
            <template v-slot:prepend>
              <q-icon name="child_care" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-input
            clearable
            filled
            class="col q-ma-xs"
            label="Special Instructions"
            v-model="instructions"
            type="textarea"
            bg-color="amber-12"
          >
            <template v-slot:prepend>
              <q-icon name="comment" />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-icon
            name="accessible"
            size="lg"
            :color="accessible ? 'green' : 'white'"
          />

          <q-icon name="help" :color="accessible ? 'green' : 'white'">
            <q-tooltip
              >We collect this data to ensure our vehicles/staff meet your
              individual needs.</q-tooltip
            >
          </q-icon>
          <q-toggle
            class="col q-ma-xs"
            :label="accessible ? 'Accessible Needed' : 'No Accessible'"
            v-model="accessible"
            color="green"
            keep-color
          />
        </div>
        <div class="row">
          <q-btn
            label="Submit"
            rounded
            color="amber-12"
            class="text-black q-ma-xs"
            @click="submit"
            icon="send"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

import { ref, computed } from "vue";

import Address from "./Address.vue";
const ride = ref(1);
const timeStamp = Date.now();
const serviceOptions = ref([
  "From Airport",
  "To Airport ",
  "From Point To Point",
  "Hourly As Directed",
  "Other",
]);
const stops = ref([]);

const fname = ref("");
const lname = ref("");
const email = ref("");
const phone = ref("");
const service = ref("");
const fdate = ref("");
const time = ref("");
const pickup = ref({} || "");
const dropoff = ref({});
const passengers = ref("");
const luggage = ref("");
const child = ref("");
const instructions = ref("");
const accessible = ref(false);

const form = computed(() => {
  return {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    phone: phone.value,
    service: service.value,
    fdate: fdate.value,
    time: time.value,
    pickup: pickup.value,
    dropoff: dropoff.value,
    passengers: passengers.value,
    luggage: luggage.value,
    child: child.value,
    stops: stops.value,
    accessible: accessible.value,
    instructions: instructions.value,
  };
});
const emits = defineEmits(["sendingRideInfo"]);
const submit = () => {
  emits("sendingRideInfo", form);
};
const deleteStop = (index) => {
  stops.value.splice(index, 1);
};
const dateOptions = (fdate) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "/" + mm + "/" + dd;
  return fdate >= today;
};
const showAddress = ref(false);
const showAddStop = ref(false);
const showDropOff = ref(false);

const getAddress = (e) => {
  pickup.value = e;
  showAddress.value = false;
};
const dropOffAddress = (e) => {
  dropoff.value = e;
  showDropOff.value = false;
};
const addStop = (e) => {
  stops.value.push(e);
  showAddStop.value = false;
};
const fireFromAddress = () => {
  showAddress.value = true;
  
 
};

</script>
