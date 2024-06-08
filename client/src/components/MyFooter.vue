<template>
  <footer class="bg-home text-white">
    <div
      class="px-20 py-6 text-center flex flex-col items-center gap-2 justify-center"
    >
      <div
        class="text-center flex flex-col items-center gap-2 mb-4 justify-center"
      >
        <img :src="pic" class="w-10" />
        <p>Tolegenov Aibar</p>
      </div>
      <ul class="flex gap-4">
        <li>Home</li>
        <li>Menu</li>
        <li>Reviews</li>
        <li>News</li>
      </ul>
      <hr class="w-full h-1 mx-auto rounded" />
      <ul class="flex w-full items-center justify-between text-center">
        <li>quovein@gmail.com</li>
        <li>
          <div class="flex gap-2">
            <a href="https://github.com/oiibar" target="_blank" rel="noreferrer"
              >GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/"
              target="_blank"
              rel="noreferrer"
              >LinkedIn
            </a>
            <a
              href="https://github.com/oiibar/CV"
              target="_blank"
              rel="noreferrer"
              >CV
            </a>
          </div>
        </li>
        <li>+7 705 879 7593</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import pic from "../assets/pic.png";
export default {
  data() {
    return {
      pic,
    };
  },
};
</script>

<style scoped></style>
