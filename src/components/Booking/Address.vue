<template>
  <q-form
    @submit="handelForm"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
  >
    <!-- airport or address  -->
    <q-radio
      v-model="addressChoice"
      checked-icon="task_alt"
      unchecked-icon="panorama_fish_eye"
      val="Airport"
      label="Airport"
      @click="clearForm"
    />
    <q-radio
      v-model="addressChoice"
      checked-icon="task_alt"
      unchecked-icon="panorama_fish_eye"
      val="Address"
      label="Address"
      @click="clearForm"
    />
    <q-select
      v-model="form.address1"
      label="Airport"
      type="text"
      required
      :options="airports"
      :rules="{ required: true }"
      clearable
      filled
      bg-color="amber-12"
      class="col q-ma-xs"
      transition-show="scale"
      transition-hide="scale"
      v-if="addressChoice == 'Airport'"
    />
    <!-- IF AIRPORT  -->

    <!-- IF ADDRESS  -->
    <div v-if="addressChoice == 'Address'">
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
            v-model="form.address1"
            subtitle="Address"
            :rules="[(val) => !!val || 'Field is required']"
            type="text"
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
            v-model="form.address2"
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
            v-model="form.city"
            subtitle="City"
            :rules="[(val) => !!val || 'Field is required']"
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
            v-model="form.state"
            subtitle="State"
            :rules="[(val) => !!val || 'Field is required']"
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
            v-model="form.zip_code"
            subtitle="Zip Code"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
      </div>
    </div>
    <q-btn
      dense
      rounded
      outlined
      color="amber-12"
      class="full-width text-black"
      :label="checkForm ? 'Complete Required Fields' : 'Save Location'"
      type="submit"
      :disable="checkForm"
    />
  </q-form>

</template>
<script setup>
import { ref, computed } from "vue";

const emits = defineEmits(["sendingform"]);
const handelForm = () => {
  
  emits("sendingform", form.value);
};
const addressChoice = ref("");
const form = ref({
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip_code: "",
});

const checkForm = computed(() => {
  if (addressChoice.value == "Address") {
    return (
      !form.value.address1 ||
      !form.value.city ||
      !form.value.state ||
      !form.value.zip_code
    );
  }
});
const clearForm = () => {
  form.value = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip_code: "",
  };
};
const states = ref([
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]);
const airports = ref([
  "ABE- Allentown",
  "ERI- Erie",
  "MDT- Harrisburg",
  "LBE- Latrobe",
  "PHL- Philadelphia",
  "PIT- Pittsburgh",
  "UNV- State College",
  "AVP- Wilkes-Barre",
  "IPT- Williamsport",
  "ALB- Albany",
  "BUF- Buffalo",
  "ITH- Ithaca",
  "JFK- New York",
  "LGA- New York",
  "ISP- New York / Islip",
  "SWF- Newburgh",
  "IAG- Niagara Falls",
  "OGS- Ogdensburg",
  "PBG- Plattsburgh",
  "ROC- Rochester",
  "SYR- Syracuse",
  "ART- Watertown",
  "HPN- White Plains",
  "ACY- Atlantic City",
  "EWR- Newark",
  "TTN- Trenton",
  "BWI- Baltimore",
  "HGR- Hagerstown",
  "SBY- Salisbury",
]);
</script>
<!-- <script>
export default {
  name: "Address",

  data() {
    return {
      form: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: "",
      },

      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  methods: {
    handelForm() {
      this.$emit("form-data","FORMMMMMMMMMMMMMMMMMMMMMMMM");
      console.log('form Sent from Component');
    },
  
  },
  computed: {
    checkForm() {
      return !this.form.address1 || !this.form.city || !this.form.state || !this.form.zip_code;
    },
  },
};
</script> -->
