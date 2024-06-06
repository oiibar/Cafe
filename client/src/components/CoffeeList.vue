<template>
  <div>
    <div
      class="flex flex-wrap items-center justify-center text-center"
      v-if="menu.length > 0"
    >
      <coffee-card v-for="item in menu" :item="item" :key="item.id" />
    </div>
    <div v-else>
      <h2>Empty menu</h2>
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
