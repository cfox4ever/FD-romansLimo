<template><div></div></template>
<script setup>
import { onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
const $q = useQuasar()
const router = useRouter()
onBeforeMount(() => {

    $q.notify({

        color: 'primary',
        textColor: 'amber-12',
        icon: 'star',
        actions: [
            { label: 'BOOK NOW ', color: 'amber-12', handler: () => { router.push('/booking') } },

        ],
        position : 'right',
    })


})
</script>