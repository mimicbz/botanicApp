<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
    .v-container{
        max-width:1200px !important;
        margin:0 auto;
    }
</style>