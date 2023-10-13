<template>
  <main-layout-banner
    :type="'product'"
    :url="'http://cdn.huaqu.club/img/922246dc163f397bc3e4a034dff561a8d12516bf14f823-fCP888.webp'"
  ></main-layout-banner>
  <div class="mt-410">
    <div
      class="w-full"
      :style="{
        background: '#f4f8fb',
      }"
    >
      <div class="w-1280 m-auto py-80">
        <div class="pb-40 text-center" data-aos="fade-up">
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">{{
              curPatientRouteTitle.substring(0, 1)
            }}</span>
            <span style="color: #8c8c8c">{{
              curPatientRouteTitle.substring(1, curPatientRouteTitle.length)
            }}</span>
          </p>
          <p
            class="font-semibold text-28"
            style="color: #202131; line-height: 40px"
          >
            {{ curSortEquimentList.title }}
          </p>
        </div>
        <div class="banner-div mb-60 m-auto">
          <input
            type="text"
            class="banner-input"
            placeholder="Please enter keywords to search."
          />
          <div
            class="banner-div-icon flex justify-center items-center cursor-pointer"
          >
            <img
              src="http://cdn.huaqu.club/img/19e79f784b64e24742599bd858616f9c2085e201548-imlSUX.webp"
            />
          </div>
        </div>
        <main-layout-tabbar
          :list="sortList"
          :cur-index="curSort"
          @change-bar="handleChangeBar"
        ></main-layout-tabbar>

        <template v-if="pageEquiment && pageEquiment.length > 0">
          <div class="grid grid-cols-4 gap-20 mt-20">
            <div
              class="flex flex-col bg-white border cursor-pointer"
              v-for="(item, index) in pageEquiment"
              :key="index"
              @click="handleSearchDetail(index, item)"
            >
              <div class="basis-1/2" style="padding: 0 10px">
                <img
                  data-aos="fade-out"
                  :src="getAssetUrl(curSortEquimentList.type, item.bannerPic)"
                />
              </div>
              <div class="basis-1/2 border-t" style="padding: 20px">
                <h3
                  data-aos="fade-out"
                  class="text-ellipsis line-clamp-1"
                  style="color: #222; line-height: 30px"
                >
                  {{ item.title }}
                </h3>
                <p
                  data-aos="fade-out"
                  class="text-ellipsis line-clamp-2"
                  style="color: #999; font-size: 12px; line-height: 22px"
                >
                  use: {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </template>
        <div v-else style="width: 100%; padding: 40px 0; text-align: center">
          no-data
        </div>
        <a-pagination
          style="margin-top: 20px; text-align: center"
          :current="page"
          :total="total"
          :defaultPageSize="size"
          @change="handlePageChange"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";
import mainLayoutBanner from "../components/main-layout-banner.vue";
import mainLayoutTabbar from "../components/main-layout-tabbar.vue";
import { useRouter } from "vue-router";
import useProductStore from "../store/product";
import { routers, getAssetUrl } from "../utils";
import { storeToRefs } from "pinia";

const {
  curPatientRoute,
  curPatientRouteTitle,
  curSortEquimentList,
  curEquiment,
} = storeToRefs(useProductStore());
const { getEquimentList } = useProductStore();
const router = useRouter();
const sortList = ref([]);
const curSort = ref(0);
const routeWatch = ref(null);
const page = ref(1);
const size = ref(8);
const total = ref(0);
const pageEquiment = ref([]);

onMounted(() => {
  routeWatch.value = watchEffect(() => {
    const routeName = router.currentRoute.value.params.name;
    if (
      curPatientRoute.value === "/" ||
      curPatientRoute.value === "/contact-us"
    )
      return;
    if (routeName) {
      const target = routers.find((item) => item.url === curPatientRoute.value);
      sortList.value = target.children;
      const sortIndex = sortList.value
        .map((item) => item.url)
        .indexOf(`/${routeName}`);
      curSort.value = sortIndex > -1 ? sortIndex : 0;
      getEquimentList(curSort.value);
      total.value = curSortEquimentList.value.data.length;
      pageEquiment.value = curSortEquimentList.value.data.slice(
        (page.value - 1) * size.value,
        size.value * page.value
      );
    }
  });
});

const handleSearchDetail = (index, item) => {
  curEquiment.value = item;
  router.push({ path: `${router.currentRoute.value.href}/${index}` });
};

const handleChangeBar = (url) => {
  page.value = 1;
  router.push({ path: `/product-center${url}` });
};

const handlePageChange = (p) => {
  page.value = p;
  console.log(page.value);
};

onBeforeUnmount(() => {
  routeWatch.value();
});
</script>

<style scoped>
.banner-div {
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

.spec {
  height: 40px;
  background: rgb(15, 95, 213);
  display: inline-block;
  width: 96px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 30px;
}
.title {
  font-weight: 600;
  color: #202131;
  line-height: 56px;
  font-size: 40px;
  margin-bottom: 30px;
}
.info {
  margin-bottom: 45px;
  font-weight: 400;
  color: #8c8c8c;
  line-height: 22px;
}
.detail {
  font-weight: 600;
  color: #0f5fd5;
}
.page-header span:first-child {
  color: #8c8c8c;
  cursor: pointer;
  padding-right: 20px;
}
.page-header span:first-child:hover {
  color: #0f5fd5;
}
.page-header span:last-child {
  color: #0f5fd5;
  padding-left: 20px;
}
</style>
