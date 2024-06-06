<template>
  <div>
    <my-header />
    <body>
      <home />
      <div>
        <my-menu :menu="menu" v-if="!isLoading" />
        <div v-else class="text-center">Loading...</div>
      </div>
      <review />
      <notification />
      <my-footer />
    </body>
  </div>
</template>

<script>
import CoffeeCard from "./components/CoffeeCard.vue";
import MyMenu from "./components/MyMenu.vue";

import MyHeader from "./components/MyHeader.vue";
import Home from "./components/Home.vue";
import Review from "./components/Review.vue";
import Notification from "./components/Notification.vue";
import MyFooter from "./components/MyFooter.vue";

import axios from "axios";

export default {
  components: {
    CoffeeCard,
    MyMenu,
    MyHeader,
    Home,
    Review,
    Notification,
    MyFooter,
  },
  data() {
    return {
      menu: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchMenu() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );
        this.menu = response.data;
        this.isLoading = false;
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.fetchMenu();
  },
};
</script>

<style></style>
