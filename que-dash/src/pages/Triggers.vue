<template>
  <div class="q-pa-md q-gutter-sm bg-color"  >
    <div class="text-h3 text-center">Overview</div>

    <h6 class="q-mt-lg">Base</h6>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="accent" label="accent" />
    <q-btn color="info" label="info" />
    <q-btn color="warning" label="warning" />
    <q-btn color="positive" label="positive" />
    <q-btn color="negative" label="negative" />
    <q-btn color="dark" label="Dark" />
    <h6 class="q-mt-lg">Style</h6>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />

    <h6 class="q-mt-lg">Notify</h6>
    <q-btn no-caps unelevated color="positive" @click="triggerPositive" label="Trigger 'positive'" />
    <q-btn no-caps unelevated color="negative" @click="triggerNegative" label="Trigger 'negative'" />
    <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="Trigger 'warning'" />
    <q-btn no-caps unelevated color="info" @click="triggerInfo" label="Trigger 'info'" />
    <q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="Trigger 'ongoing'" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default {
  name: 'trigger-component',
  setup() {

    const $q = useQuasar()

    return {
      triggerPositive () {
        $q.notify({
          type: 'positive',
          message: 'This is a "positive" type notification.'
        })
      },

      triggerNegative () {
        $q.notify({
          type: 'negative',
          message: 'This is a "negative" type notification.'
        })
      },

      triggerWarning () {
        $q.notify({
          type: 'warning',
          message: 'This is a "warning" type notification.'
        })
      },

      triggerInfo () {
        $q.notify({
          type: 'info',
          message: 'This is a "info" type notification.'
        })
      },

      triggerOngoing () {
        // we need to get the notification reference
        // otherwise it will never get dismissed ('ongoing' type has timeout 0)
        const notif = $q.notify({
          type: 'ongoing',
          message: 'Looking up the search terms...'
        })

        // simulate delay
        setTimeout(() => {
          notif({
            type: 'positive',
            message: 'Found the results that you were looking for',
            timeout: 1000
          })
        }, 4000)
      }
    }
  }
}

</script>

<style scoped>
.q-pa-md {
  min-height: 100vh;
}

</style>