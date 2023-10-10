<template>
  <main-layout-banner
    :type="'product'"
    :url="'http://cdn.huaqu.club/img/922246dc163f397bc3e4a034dff561a8d12516bf14f823-fCP888.webp'"
  ></main-layout-banner>
  <div class="mt-410 py-80">
    <div class="w-full">
      <div class="w-1280 m-auto">
        <div
          style="border-bottom: 1px solid #8c8c8c"
          class="pb-40 text-center"
          data-aos="fade-up"
        >
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">A</span>
            <span style="color: #8c8c8c">BOUT US</span>
          </p>
          <p class="font-semibold text-28" style="line-height: 40px">
            About us
          </p>
        </div>
        <div class="flex mt-20">
          <div class="basis-1/2">
            <img
              data-aos="fade-right"
              class="w-full"
              src="http://cdn.huaqu.club/img/74c8c2901dec6444159b66ace6f02ce2886a8cd9190bcd-15ZqNH.webp"
            />
          </div>
          <div class="basis-1/2 flex flex-col px-40 justify-center bg-white">
            <p class="title pb-40" data-aos="fade-left">HYJX Co., Ltd.</p>
            <p class="info" data-aos="fade-left">
              HYJX Responsibility Co., Ltd. is a modern technology enterprise
              specializing in the research and development of food processing
              machinery manufacturing and mechanical equipment solutions. It is
              committed to building food processing equipment with advanced
              technology, excellent performance, precision and reliability, and
              high cost performance. At the beginning of its establishment, it
              integrates scientific research, manufacturing and sales. Since its
              development, it has established a perfect scientific research and
              innovation system, equipment production system and service
              management system, and accumulated profound technical strength and
              manufacturing experience.
            </p>
            <p class="info" data-aos="fade-left">
              Over the years, we have closely followed market development and
              customer needs, continuously upgraded product technology and
              service capabilities to help customers improve production
              efficiency and reduce production costs to a greater extent.
              Existing (representative products) and other equipment are sold
              through sales channels to more than 30 cities in China, and
              exported to dozens of countries and regions around the world. A
              total of 10,000 sets of equipment have been sold and more than 500
              customers around the world have been served. With advanced
              equipment, excellent product quality and perfect after-sales
              service, it has won wide praise from customers at home and abroad.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full pt-80">
        <div class="w-1280 m-auto">
          <main-layout-tabbar
            :list="['Corporate values']"
            :cur-index="0"
          ></main-layout-tabbar>
        </div>
        <div class="grid grid-cols-4 mt-20">
          <div
            class="relative"
            v-for="item in corporateValues"
            :key="item.title"
            data-aos="fade-left"
          >
            <img :src="item.picUrl" />
            <div class="absolute left-40 bottom-60">
              <p
                class="pb-20 text-white"
                style="font-size: 28px; font-weight: 600"
              >
                {{ item.title }}
              </p>
              <p class="text-white">
                {{ item.subTitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="w-1280 m-auto pt-80">
        <main-layout-tabbar
          :list="['Contact us']"
          :cur-index="0"
        ></main-layout-tabbar>
        <div class="flex mt-20">
          <div
            data-aos="fade-right"
            class="footer-box3 basis-1/3 flex flex-col justify-center items-center"
          >
            <div class="flex items-center">
              <img
                src="http://cdn.huaqu.club/img/a786b2906ceb88988bb54c34b64614475fe9b39627e-A5cJGO.webp"
              />
              19520379048
            </div>
            <p>24-hour free service hotline</p>
            <div class="flex items-center">
              <img
                src="http://cdn.huaqu.club/img/e1a15dcbaa32f67fb0c6ec5b53b925ea1e5cd9a1662-XEsV4I.webp"
              />
              lui93522@gmail.com
            </div>
          </div>
          <div data-aos="fade-left" class="basis-2/3">
            <iframe
              style="width: 100%; height: 100%"
              src="http://api.map.baidu.com/marker?location=40.047669,116.313082&title=我的位置&content=百度奎科大厦&output=html&src=yourComponyName|yourAppName   
"
            ></iframe>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const corporateValues = ref([
  {
    picUrl:
      "http://cdn.huaqu.club/img/841258d18cb2636a6ebc989d97a557660ba3e4ee7c9ab-tXii8a.webp",
    title: "我们的使命",
    subTitle: "致力国家建设，共筑美好家园",
  },
  {
    picUrl:
      "http://cdn.huaqu.club/img/e017d9ed4ae247e9a0f7c0f37e2b094bedd0bd69aa9a1-lGKxum.webp",
    title: "我们的愿景",
    subTitle: "成为中国一流的工程机械服务商",
  },
  {
    picUrl:
      "http://cdn.huaqu.club/img/03f9c50f8bfb82c61504fb7fea288710e3fd8786e8728-RUuurS.webp",
    title: "我们的理念",
    subTitle: "客户满意才是我们存在的理由",
  },
  {
    picUrl:
      "http://cdn.huaqu.club/img/85c305713da31b8d04b4d0cb8b3a3bade3b97a1563c0d-BU9J64.webp",
    title: "我们的宗旨",
    subTitle: "诚信经营，以客户为中心",
  },
]);
</script>

<style scoped>
.title {
  font-weight: 600;
  color: #202131;
  line-height: 56px;
  font-size: 40px;
}
.info {
  font-weight: 400;
  color: #8c8c8c;
  line-height: 22px;
}
.footer-box3 {
  height: 520px;
  background: url(http://cdn.huaqu.club/img/fe2fde2e297aaadf83712256c8c36c157a242b19d2082-wbQjru.webp)
    100% no-repeat;
  background-size: 100% 100%;
}
.footer-box3 div img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.footer-box3 div:first-child {
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  line-height: 56px;
}
.footer-box3 p:nth-child(2) {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
  padding-bottom: 20px;
}
.footer-box3 div {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
  padding-bottom: 20px;
}
</style>
