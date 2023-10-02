<template>
  <div class="fixed top-0 w-full z-10 bg-white border-b">
    <div class="w-1280 m-auto items-center flex flex-row h-90">
      <div class="w-263">
        <img
          @click="handleTapRouter('/', '首页')"
          title="logo"
          src="http://cdn.huaqu.club/img/5e791bd92de56315901efbbbcbb75dafcfa932466d19-v3nPcH.webp"
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:cursor-pointer"
        />
      </div>
      <div
        class="flex grow flex-row animate__animated animate__zoomIn justify-between"
      >
        <div class="flex-1 flex items-center">
          <div
            class="text-hover text-black ml-100 hover:cursor-pointer"
            v-for="item in routers"
            :key="item.url"
            @click="handleTapRouter(item.url, item.title)"
          >
            {{ item.title }}
          </div>
        </div>
        <!-- <div class="flex items-center hover:cursor-pointer">
          <img
            style="width: 24px; margin-right: 10px"
            src="http://cdn.huaqu.club/img/b79b0d024ffb54f96cf763568a0fbf27ae0032976d7-7DYQdl.webp"
          />
          简体中文
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const routers = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/product-center",
    title: "Product center",
  },
  {
    url: "/contact-us",
    title: "About us",
  },
];

const handleTapRouter = (url, title) => {
  router.push({ path: url });
  document.title = title;
};
</script>

<style scoped>
.text-hover:hover {
  color: #0f5fd5;
}
</style>
