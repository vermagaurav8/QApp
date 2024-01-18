<!-- 
  1. MainLayout.vue is the main component for our app
  2. The Login Page for the app, handle basic authentication.
 -->

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">S3 India</div>
            <div class="text-grey-8">Sign in below to access your account</div>
          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="email" label="Email Address"></q-input>
            <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn style="border-radius: 8px" color="dark" rounded size="md" label="Sign in" no-caps class="full-width"
              @click="signIn"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              Don't have an account yet?
              <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign up.</a>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>



<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default defineComponent({
  name: "MainLayout",
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const signIn = () => {
      socket.emit('login', { token: password });
      socket.on('redirect', (destination) => {
        console.log(destination);
        router.push(destination);
      })
    }

    return {
      email, password, signIn
    }
  },
});
</script>
