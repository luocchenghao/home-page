<template>
  <div class="fixed top-0 w-full z-10 bg-white border-b">
    <div class="w-1280 m-auto items-center flex flex-row h-90">
      <div class="w-220">
        <img
          @click="handleTapRouter('/', 'Home')"
          title="logo"
          :src="getNormalUrl('img1')"
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:cursor-pointer"
        />
      </div>
      <div
        class="flex grow flex-row animate__animated animate__zoomIn justify-between"
      >
        <div class="flex-1 flex items-center">
          <div
            style="font-size: 13px"
            class="text-hover text-black hover:cursor-pointer flex-1 text-center px-10"
            v-for="item in routers"
            :key="item.url"
            @click="handleTapRouter(item.url, item.title)"
            :class="{ active: activeComputed($route, item) }"
          >
            <a-dropdown
              arrow
              v-if="!whiteList.some((whiteItem) => whiteItem === item.title)"
            >
              <a>{{ item.title }} </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item
                    v-for="childItem in item.children"
                    :key="childItem.title"
                    @click="
                      handleTapRouter(
                        childItem.url,
                        childItem.title,
                        item,
                        true
                      )
                    "
                  >
                    {{ childItem.title }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <span v-else>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useProductStore from "../store/product";
import { routers } from "../utils";
import { computed } from "vue";
import { getNormalUrl } from "../utils";

const router = useRouter();
const whiteList = ["Home", "About Us"];
const activeComputed = computed(() => {
  return (routeParams, item) => {
    if (whiteList.some((whiteItem) => whiteItem === item.title)) {
      return routeParams.path === item.url;
    } else {
      return (
        routeParams.fullPath.includes(item.url) ||
        item.children
          .map(({ url }) => {
            return routeParams.fullPath.includes(url);
          })
          .includes(true)
      );
    }
  };
});

const handleTapRouter = (url, title, topItem, ifTop) => {
  if (whiteList.some((item) => item === title)) {
    router.push({ path: url });
  } else {
    router.push({ path: `/product-center${url}` });
  }
  if (ifTop) {
    useProductStore().$patch((state) => {
      (state.curPatientRoute = topItem.url),
        (state.curPatientRouteTitle = topItem.title);
    });
  } else {
    useProductStore().$patch((state) => {
      (state.curPatientRoute = url), (state.curPatientRouteTitle = title);
    });
  }

  document.title = title;
};
</script>

<style scoped>
.text-hover:hover {
  color: #0f5fd5;
}
.active {
  color: #0f5fd5;
}
</style>
