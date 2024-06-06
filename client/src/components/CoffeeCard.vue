<template>
  <div
    class="p-2 m-2 flex flex-col text-center items-center justify-center border-2 border-black"
  >
    <img :src="item.image_url" class="w-20" alt="Coffee Image" />
    <p>{{ item.name }}</p>
    <p>{{ item.price }}</p>
    <p>{{ item.region }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
