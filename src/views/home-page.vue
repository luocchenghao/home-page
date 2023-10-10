<template>
  <main-layout-banner
    :url="'http://cdn.huaqu.club/img/94fda228795c01dab3a93faa49155bbc00476bc31aacf3-jG04kX.webp'"
    :type="'home'"
  ></main-layout-banner>
  <div class="mt-410">
    <div class="w-full" style="background: #f4f8fb">
      <div class="w-1280 m-auto flex flex-col pt-80">
        <div class="pb-40" data-aos="fade-up">
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">R</span>
            <span style="color: #8c8c8c">ECOMMENDED PRODUCT</span>
          </p>
          <p
            class="font-semibold text-28"
            style="color: #202131; line-height: 40px"
          >
            Product recommendation
          </p>
        </div>
        <div class="flex">
          <div class="basis-1/2">
            <img data-aos="fade-up" :src="curInfo.imgUrl" />
          </div>
          <div class="basis-1/2 flex flex-col px-40 justify-center bg-white">
            <!-- <div class="spec" data-aos="fade-up">
              {{ curInfo.spec }}
            </div> -->
            <div class="title" data-aos="fade-up">
              {{ curInfo.title }}
            </div>
            <div class="info" data-aos="fade-up">
              {{ curInfo.info }}
            </div>
            <div
              class="detail flex items-center hover:cursor-pointer"
              data-aos="fade-up"
              @click="handleTapDetail"
            >
              Learn more
              <img
                style="height: 30px; padding-left: 10px"
                src="http://cdn.huaqu.club/img/7d2c3a7762fad50501f07891c57f7a2686ffae7f12e-ODIlmX.webp
"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col pt-80" data-aos="fade-up">
        <div class="w-1280 m-auto pb-40" data-aos="fade-up">
          <p class="font-semibold text-54" style="line-height: 75px">
            <span style="color: #0f5fd5">C</span>
            <span style="color: #8c8c8c">LASSIFICATION</span>
          </p>
          <p
            class="font-semibold text-28"
            style="color: #202131; line-height: 40px"
          >
            Product classification
          </p>
        </div>
        <div class="grid grid-cols-4">
          <div
            class="relative text-white"
            v-for="(item, index) in equimentList"
            :key="index"
          >
            <img
              data-aos="fade-up"
              style="width: 100%; height: 240px"
              :src="item.image"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-260 min-h-100"
            >
              <p class="text-28 font-semibold" style="padding-bottom: 10px">
                {{ item.title }}
              </p>
              <p class="text-sm">{{ item.info }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1280 m-auto flex items-center justify-between pt-80 pb-80">
        <div class="flex flex-col w-300" data-aos="fade-left">
          <div class="w-220 box-content flex h-48 about-box1">
            <img
              style="width: 28px"
              src="http://cdn.huaqu.club/img/844a3b0dcb0e7b81d0b4393165db85372eb75f962b3-joc0wS.webp"
            />
            Layout around the world
          </div>
          <div class="pb-40">
            <p class="font-semibold text-54" style="line-height: 75px">
              <span style="color: #0f5fd5">A</span>
              <span style="color: #8c8c8c">BOUT US</span>
            </p>
            <p
              class="font-semibold text-28"
              style="color: #202131; line-height: 40px"
            >
              HYJX Co., Ltd.
            </p>
          </div>
          <div class="about-box2 pb-40">
            <p>
              HYJX Responsibility Co., Ltd. is a modern technology enterprise
              specializing in the research and development of food processing
              machinery manufacturing and mechanical equipment solutions. It is
              committed to building food processing equipment with advanced
              technology, excellent performance, precision and reliability, and
              high cost performance.
            </p>
            <p>
              Existing (representative products) and other equipment are sold
              through sales channels to more than 30 cities in China, and
              exported to dozens of countries and regions around the world. A
              total of 10,000 sets of equipment have been sold and more than 500
              customers around the world have been served. With advanced
              equipment, excellent product quality and perfect after-sales
              service, it has won wide praise from customers at home and abroad.
            </p>
          </div>
          <div class="flex about-box3 hover:cursor-pointer">
            View all
            <img
              style="width: 24px"
              src="http://cdn.huaqu.club/img/b6d76ca10d1fc57adab26585693e634322c62b53132-O0FDVk.webp"
            />
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            style="width: 540px"
            src="http://cdn.huaqu.club/img/74c8c2901dec6444159b66ace6f02ce2886a8cd9190bcd-15ZqNH.webp"
          />
        </div>
        <div class="flex flex-col" data-aos="fade-left">
          <div
            class="about-box4"
            v-for="(item, index) in aboutInfo"
            :key="index"
          >
            <p>
              <span>{{ item.nums }}</span>
              <span>{{ item.unit }} </span>
            </p>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import MainLayoutBanner from "../components/main-layout-banner.vue";

const router = useRouter();
const newsList = [
  {
    imgUrl:
      "http://cdn.huaqu.club/img/5141025c27e03e268bde95a23a997372f8f95f98197fe9-droQAW.webp",
    title: "MAVIC - Precision Engraving Machine Tool",
    spec: "Fine carving series",
    info: "Selected brand accessories, heavy-duty fuselage structure, combined with German five-sided milling finishing, stable performance and quality assurance! The section of the processed product is smooth without burrs, and no secondary processing is required.",
  },
];
const aboutInfo = [
  {
    nums: 2009,
    unit: "Year",
    desc: "Founded in",
  },
  {
    nums: 1.58,
    unit: "Square kilometre",
    desc: "Covering an area",
  },
  {
    nums: 23.5,
    unit: "A hundred million",
    desc: "Total assets",
  },
];
const equimentList = [
  {
    title: "LKC-石材雕刻机",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/d074631f81b6ef6184d6e10004ce02499049e69f3f860-z8jsR8.webp",
  },
  {
    title: "NCK-铝板雕刻机",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/5defcce2cba3ffc29909e7fc6a6b61bedfe1e6d521958-aZQexg.webp",
  },
  {
    title: "BCKK-木工雕刻机",
    info: "提供高水平的竞争力和效率。",
    image:
      "http://cdn.huaqu.club/img/e395aa9a173bae8f75d808981b2c0c00cfd17f9133dd1-uMQ7xg.webp",
  },
  {
    title: "LC880-激光雕刻机",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/07b640e714dd2453d37d6dbda164435fc69f7d513d916-13mFUT.webp",
  },
  {
    title: "石碑雕刻机",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/fec333c379e59602ce2e1db9af4eece4a46aaaaf4b971-hmVvfj.webp",
  },
  {
    title: "KOI-立体雕刻机",
    info: "提供高水平的竞争力和效率。",
    image:
      "http://cdn.huaqu.club/img/6dd972066319b5bd84c0d5a12551852b566527032b32f-vnLCWe.webp",
  },
  {
    title: "小型雕刻机",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/b44516de0809f2cd8d73c0945e231f58d9ae288c31714-E95rwI.webp",
  },
  {
    title: "泡沫木模雕刻机",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/32cfa468f73ff32de2bc35d16cc347e1419c5abd3bc99-mgI8Dk.webp",
  },
];
const curInfo = ref({});

curInfo.value = newsList[0];
const handleTapDetail = () => {
  router.push({ path: "/product-center" });
};
</script>

<style scoped>
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

.about-box1 {
  background: rgb(15, 95, 213);
  margin-bottom: 30px;
  color: #fff;
  align-items: center;
  justify-content: center;
}
.about-box1 img {
  padding-right: 10px;
}
.about-box2 p {
  color: #5f5f6a;
}
.about-box3 {
  width: 220px;
  height: 48px;
  border: 1px solid #909097;
  color: #5f5f6a;
  align-items: center;
  justify-content: center;
}
.about-box4 {
  padding: 20px 0;
  color: #5f5f6a;
}
.about-box4 p:first-child span:first-child {
  font-size: 49px;
  font-weight: bold;
  color: #0f5fd5;
  line-height: 57px;
  padding-right: 10px;
}
.about-box4 p:last-child {
  text-align: center;
}
.about-box4:not(:last-child) {
  border-bottom: 1px solid #d0d0d9;
}
</style>
