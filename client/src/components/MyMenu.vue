<template>
  <div class="bg-orange-200 py-6 px-20">
    <div
      class="text-center flex items-center justify-center flex-wrap"
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
        class="bg-blue-500 text-white px-4 py-2 rounded"
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
