<template>
  <div class="bg-review">
    <div
      class="px-20 py-16 font-bold text-center flex flex-col gap-16 items-center justify-center"
    >
      <h1 class="font-extrabold text-5xl">What our customers say</h1>
      <div class="flex items-center justify-center text-center gap-6">
        <div class="bg-menu p-2 pointer-cursor">Prev</div>
        <div
          class="bg-home w-full p-6 pt-20 flex flex-col gap-6 text-white text-md"
        >
          <div>
            <p class="text-2xl font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              perspiciatis labore doloribus accusantium voluptates aliquam
              repudiandae ipsa voluptas laudantium! Sit?
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-center gap-2">
              <img :src="star" class="w-4" />
              <img :src="star" class="w-4" />
              <img :src="star" class="w-4" />
              <img :src="star" class="w-4" />
              <img :src="star" class="w-4" />
            </div>
            <div><p>CXV</p></div>
          </div>
        </div>
        <div class="bg-menu p-2 pointer-cursor">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "../assets/star.svg";
export default {
  data() {
    return {
      star,
    };
  },
};
</script>

<style lang="scss" scoped></style>
