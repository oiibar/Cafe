<template>
  <div
    class="flex flex-col text-center items-center justify-center border-2 border-black"
  >
    <div>
      <img :src="item.image_url" class="w-60" alt="Coffee Image" />
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.region }}</p>
    </div>
    <button class="bg-btn w-60 p-4">Order Now</button>
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
