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
        @update:model-value="$emit('address1', address1)"
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
    <q-btn
   
      dense
      rounded
      outlined
      color="amber-12"
      class="full-width text-black"
      :label='checkForm ? "Complete Required Fields" : "Save Location"'
      @click="handelForm"
    :disable="checkForm"
    />
  </div>
</template>

<script>
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
      this.$emit("formData", this.form);
      this.form = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: "",
      };
    },
  
  },
  computed: {
    checkForm() {
      return !this.form.address1 || !this.form.city || !this.form.state || !this.form.zip_code;
    },
  },
};
</script>
