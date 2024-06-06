<template>
  <div class="bg-orange-200">
    <div
      class="px-20 py-6 text-center flex items-center justify-center flex-wrap"
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
import CoffeeCard from "./CoffeeCard.vue";

export default {
  components: { CoffeeCard },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
