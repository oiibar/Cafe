<template>
  <div
    id="menu"
    class="bg-menu py-20 px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div class="w-1/2 flex flex-col gap-4">
      <h1 class="text-5xl font-extrabold">Best Selling Items</h1>
      <p class="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        numquam.
      </p>
    </div>
    <div
      class="text-center flex items-center justify-center gap-6 flex-wrap"
      v-if="menu.length > 0"
    >
      <coffee-card v-for="item in displayedMenu" :item="item" :key="item.id" />
    </div>
    <div v-else>
      <h2 class="flex flex-col items-center text-center justify-center">
        Empty menu
      </h2>
    </div>
    <div class="flex justify-center mt-4" v-if="menu.length > 3">
      <button
        @click="toggleShowAll"
        class="bg-transparent text-home border px-4 py-2 rounded"
      >
        {{ showAll ? "Show Less" : "Show More" }}
      </button>
    </div>
  </div>
</template>

<script>
import CoffeeCard from "./CoffeeCard.vue";

export default {
  components: { CoffeeCard },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showAll: false,
    };
  },
  computed: {
    displayedMenu() {
      return this.showAll ? this.menu : this.menu.slice(0, 3);
    },
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style scoped></style>
