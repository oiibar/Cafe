<template>
  <div
    id="menu"
    class="bg-menu py-20 px-6 sm:px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div class="w-full max-w-2xl flex flex-col gap-4">
      <h1 class="text-5xl font-extrabold">All Menu Items</h1>
      <p class="text-sm text-gray-600">
        Browse our complete selection of coffee.
      </p>
    </div>
    <div
      class="text-center flex items-center justify-center gap-6 flex-wrap"
      v-if="menu.length > 0"
    >
      <coffee-card v-for="item in menu" :item="item" :key="item.id" />
    </div>
    <div v-else>
      <h2 class="flex flex-col items-center text-center justify-center">
        Empty menu
      </h2>
    </div>
  </div>
</template>

<script>
import CoffeeCard from "@/components/CoffeeCard.vue";
import axios from "axios";

export default {
  components: { CoffeeCard },
  data() {
    return {
      menu: [],
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://fake-coffee-api.vercel.app/api"
      );
      this.menu = response.data;
      this.isLoading = false;
    } catch (error) {
      alert(error);
    }
  },
};
</script>

<style scoped></style>
