<template>
  <q-layout>
    
    <!-- Adding Components -->
    <Navbar></Navbar>

    <q-page-container>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from 'src/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'dash-board',
    setup() {
        return {};
    },
    components: { Navbar }
})
</script>