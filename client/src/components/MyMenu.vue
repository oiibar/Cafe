<template>
  <div
    id="menu"
    class="bg-menu py-20 px-20 text-center flex flex-col justify-center items-center gap-16"
  >
    <div class="flex flex-col gap-4">
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
    <div class="flex justify-center mt-4">
      <button
        @click="viewAll"
        class="bg-transparent text-home border px-4 py-2 rounded"
      >
        View All
      </button>
    </div>
  </div>
</template>

<script>
import CoffeeCard from "@/components/CoffeeCard.vue";

export default {
  components: { CoffeeCard },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  computed: {
    displayedMenu() {
      return this.menu.slice(0, 3);
    },
  },
  methods: {
    viewAll() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style scoped></style>
