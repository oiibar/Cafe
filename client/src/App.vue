<template>
  <div class="bg-orange-100">
    <my-header />
    <body>
      <home />
      <div>
        <coffee-list :menu="menu" v-if="!isLoading" />
        <div v-else>Loading...</div>
      </div>
      <review />
      <contact />
      <my-footer />
    </body>
  </div>
</template>

<script>
import CoffeeCard from "./components/CoffeeCard.vue";
import CoffeeList from "./components/CoffeeList.vue";

import MyHeader from "./components/MyHeader.vue";
import Home from "./components/Home.vue";
import Review from "./components/Review.vue";
import Contact from "./components/Contact.vue";
import MyFooter from "./components/MyFooter.vue";

import axios from "axios";

export default {
  components: {
    CoffeeCard,
    CoffeeList,
    MyHeader,
    Home,
    Review,
    Contact,
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
