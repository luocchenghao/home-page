<template>
  <div class="h-320 absolute left-0 top-90 w-full">
    <img class="w-full h-full" data-aos="fade-up" :src="getNormalUrl(url)" />
    <div
      class="absolute top-86 -translate-x-1/2 left-1/2"
      v-if="type === 'home'"
    >
      <p class="text-white font-normal text-28 text-center">
        Providing the best sheet metal processing solutions for the industry is
        our main commitment.
      </p>
    </div>
  </div>
</template>

<script setup>
import { getNormalUrl } from "../utils";
defineProps(["type", "url"]);
</script>

<style scoped>
.banner-div {
  margin: 46px auto 0 auto;
  width: 526px;
  height: 48px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 32px;
  border: 1px solid #ffffff;
  position: relative;
}
.banner-input {
  margin-left: 30px;
  height: 48px;
  background: transparent;
  border: none;
  outline: none;
  line-height: 48px;
  width: 80%;
}
.banner-div-icon {
  width: 96px;
  height: 48px;
  background: #0f5fd5;
  border-radius: 32px;
  border: 1px solid #ffffff;
  position: absolute;
  right: 0;
  top: -1px;
}
.banner-div-icon img {
  width: 24px;
  height: 24px;
}
</style>
