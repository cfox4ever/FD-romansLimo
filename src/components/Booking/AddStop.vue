<template>
    <q-input
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
    >
        <template v-slot:prepend>
            <q-icon name="flag" />
        </template>
      
    </q-input>
</template>
<script setup>
import { ref } from "vue";
</script>