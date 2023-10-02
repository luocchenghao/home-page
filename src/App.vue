<template>
  <main-layout-header v-if="!checkRoute($route.fullPath)"></main-layout-header>
  <router-view></router-view>
  <main-layout-sticky v-if="!checkRoute($route.fullPath)"></main-layout-sticky>
  <main-layout-footer v-if="!checkRoute($route.fullPath)"></main-layout-footer>
</template>

<script setup>
import AOS from "aos";
import { onMounted } from "vue";
import "aos/dist/aos.css";
import mainLayoutHeader from "./components/main-layout-header.vue";
import mainLayoutSticky from "./components/main-layout-sticky.vue";
import mainLayoutFooter from "./components/main-layout-footer.vue";

const checkRoute = (url) => {
  return (
    url === "/nukon-admin/equipment-management" ||
    url === "/nukon-admin/message-management"
  );
};

onMounted(() => {
  AOS.init({
    easing: "ease-in-out",
  });
});
</script>

<style>
svg {
  vertical-align: initial;
}
</style>
