<template>
    <q-layout class="home">
  
      <p>Triggers</p>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      name: 'trigger-component',
      setup() {
          return {};
      },
  })
  </script>
  
  <style scoped lang="scss">
    .home {
      background: $bg-app;
    }
  </style>
  