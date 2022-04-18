<template>
  <div>
    <q-card dark bordered class="bg-dark my-card">
      <q-card-section>
        <div class="row">
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
        <div class="row">
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
        <div class="row">
          <q-select
            clearable
            filled
            bg-color="amber-12"
            class="col q-ma-xs"
            v-model="service"
            :options="serviceOptions"
            label="Service"
            transition-show="scale"
            transition-hide="scale"
          >
            <template v-slot:prepend>
              <q-icon name="directions_car_filled" />
            </template>
          </q-select>
        </div>
        <div class="row">
          <div class="col">
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
          <div class="col">
            <q-input
              clearable
              class="col q-ma-xs"
              label="Pickup Time"
              bg-color="amber-12"
              v-model="time"
              mask="##:## AM"
            >
              <template v-slot:prepend>
                <q-btn icon="access_time" round>
                  <q-popup-proxy
                    @before-show="updateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <div class="bg-dark">
                      <q-time
                        color="dark"
                        text-color="amber-12"
                        v-model="time"
                        mask="hh:mm A"
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
                      </q-time>
                    </div>
                  </q-popup-proxy>
                </q-btn>
              </template>
            </q-input>
          </div>
        </div>
        <!-- DISPLAYING DESTINATIONS  -->
       

        <!-- PICKUP LOCATION  -->
       <q-stepper
      v-model="ride"
      ref="stepper"
      color="primary"
      animated
    >
       </q-stepper>

        <div class="row">
          <div class="col">
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
          <div class="col">
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
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Address from "./Address.vue";
const ride = ref(1)
const timeStamp = Date.now();

const stops = ref([]);

const fname = ref("");
const lname = ref("");
const email = ref("");
const phone = ref("");
const service = ref("");
const fdate = ref("");
const time = ref("");
const pickup = ref({});
const dropoff = ref({});
const passengers = ref("");
const luggage = ref("");
const child = ref("");
const instructions = ref("");
const accessible = ref(false);

// const formattedDate = date.formatDate(timeStamp, 'MM-DD-YYYY')
// fdate.value = formattedDate

const serviceOptions = ref([
  "Airport Arrival",
  "Airport Departure",
  "Point To Point",
  "Chauffeur Services rental",
  "Other",
]);

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
const getAddress = (e) => {
  console.log(e)
};
const dropOffAddress = (e) => {
  dropoff.value = e;
  dialog.value = false;
};
const addStop = (e) => {
  stops.value.push(e);
  addStopField.value = true;
};

</script>
