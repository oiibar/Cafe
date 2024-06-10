<template>
  <footer id="contact" class="bg-home text-white">
    <div
      class="px-20 py-6 text-center flex flex-col items-center gap-2 justify-center"
    >
      <div
        class="text-center flex flex-col items-center gap-2 mb-4 justify-center"
      >
        <img :src="pic" class="w-16" />
        <p>Tolegenov Aibar</p>
      </div>
      <ul class="flex gap-4 cursor-pointer text-white/60">
        <li><a href="#home" class="link">Home</a></li>
        <li><a href="#menu" class="link">Menu</a></li>
        <li><a href="#review" class="link">Reviews</a></li>
        <li><a href="#news" class="link">News</a></li>
        <li><a href="#contact" class="link">Contact</a></li>
      </ul>
      <hr class="w-full h-1 mx-auto rounded" />
      <ul class="flex w-full items-center justify-between text-center">
        <li class="text-white/60 cursor-pointer">
          <a href="mailto:quovein@gmail.com" className="link">
            quovein@gmail.com
          </a>
        </li>
        <li>
          <div class="flex gap-2">
            <a href="https://github.com/oiibar" target="_blank" rel="noreferrer"
              ><img :src="github" class="w-6" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/"
              target="_blank"
              rel="noreferrer"
              ><img :src="linkedin" class="w-6" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/oiibar/CV"
              target="_blank"
              rel="noreferrer"
              ><img :src="cv" class="w-6" alt="CV" />
            </a>
          </div>
        </li>
        <li class="cursor-pointer text-white/60">
          <a href="tel:+77058797593" className="link"> +7 705 879 7593 </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import pic from "../assets/pic.png";
import github from "../assets/footer/github.svg";
import linkedin from "../assets/footer/in.svg";
import cv from "../assets/footer/cv.svg";

export default {
  data() {
    return {
      pic,
      github,
      linkedin,
      cv,
    };
  },
};
</script>

<style scoped></style>
