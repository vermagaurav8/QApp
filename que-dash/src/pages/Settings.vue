<template>
  <q-layout class="bg-color" :class="{ 'bg-dark': isDarkMode }">
    <p>Settings</p>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'settings-component',
  setup() {
    const isDarkMode = ref(false);

    onMounted(() => {
      // Check for dark mode preference on component mount
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        isDarkMode.value = savedDarkMode === 'true';
      }
    });

    return {
      isDarkMode,
    };
  },
});
</script>

<style scoped lang="scss">

</style>
