<template>
  <q-layout>

    <h3>Hi Home</h3>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import Navbar from 'src/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'home-component',
    setup() {
        return {};
    },
})
</script>