<template>
  <main-layout-banner
    :type="'product'"
    :url="'http://cdn.huaqu.club/img/922246dc163f397bc3e4a034dff561a8d12516bf14f823-fCP888.webp'"
  ></main-layout-banner>
  <div class="mt-410">
    <div
      class="w-full"
      :style="{
        background: JSON.stringify(curEquiment) === '{}' ? '#f4f8fb' : '#fff',
      }"
    >
      <div class="w-1280 m-auto py-80">
        <template v-if="JSON.stringify(curEquiment) === '{}'">
          <div class="pb-40 text-center" data-aos="fade-up">
            <p class="font-semibold text-54" style="line-height: 75px">
              <span style="color: #0f5fd5">A</span>
              <span style="color: #8c8c8c">ll PRODUCTS</span>
            </p>
            <p
              class="font-semibold text-28"
              style="color: #202131; line-height: 40px"
            >
              全部产品
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
          <div class="flex flex-col items-center justify-center">
            <template v-if="equimentList && equimentList.length > 0">
              <div
                class="flex mt-20"
                v-for="item in equimentList"
                :key="item.id"
                @click="handleSearchDetail(item.id)"
              >
                <div class="basis-1/2">
                  <img data-aos="fade-right" :src="item.image" />
                </div>
                <div
                  class="basis-1/2 flex flex-col px-40 justify-center bg-white"
                >
                  <div class="spec" data-aos="fade-left">
                    {{ item.sepc }}
                  </div>
                  <div class="title" data-aos="fade-left">
                    {{ item.title }}
                  </div>
                  <div class="info" data-aos="fade-left">
                    {{ item.info }}
                  </div>
                  <div
                    data-aos="fade-left"
                    class="detail cursor-pointer flex items-center"
                  >
                    Learn more
                    <img
                      style="height: 30px; padding-left: 10px"
                      src="http://cdn.huaqu.club/img/7d2c3a7762fad50501f07891c57f7a2686ffae7f12e-ODIlmX.webp"
                    />
                  </div>
                </div>
              </div>
            </template>
            <div v-else>暂无数据</div>
          </div>
          <a-pagination
            style="margin-top: 20px; text-align: right"
            :current="0"
            :total="50"
            show-less-items
          />
        </template>
        <template v-else>
          <div class="page-header">
            <span @click="handleClearEquiment">全部产品</span>
            /
            <span>
              {{ curEquiment.title }}
            </span>
          </div>
          <div
            style="border-bottom: 1px solid #8c8c8c"
            class="pb-40 text-center"
            data-aos="fade-up"
          >
            <p class="font-semibold text-54" style="line-height: 75px">
              <span style="color: #0f5fd5">A</span>
              <span style="color: #8c8c8c">ll PRODUCTS</span>
            </p>
            <p class="font-semibold text-28" style="line-height: 40px">
              {{ curEquiment.title }}
            </p>
          </div>
          <div class="flex mt-20">
            <div class="basis-1/2">
              <img data-aos="fade-right" :src="curEquiment.image" />
            </div>
            <div class="basis-1/2 flex flex-col px-40 justify-center bg-white">
              <div class="title" data-aos="fade-left">
                {{ curEquiment.title }}
              </div>
              <div class="info" data-aos="fade-left">
                {{ curEquiment.info }}
              </div>
              <div
                data-aos="fade-left"
                @click="handleConsultEquiment"
                style="margin-bottom: 0"
                class="spec cursor-pointer flex items-center"
              >
                咨询此产品
              </div>
            </div>
          </div>
          <div class="pt-80">
            <main-layout-tabbar
              :list="['相关推荐']"
              :cur-index="0"
            ></main-layout-tabbar>
            <div class="grid grid-cols-4 mt-40 gap-x-20">
              <div
                data-aos="fade-up"
                v-for="item in equimentList.slice(0, 4)"
                :key="item.id"
                @click="handleSearchDetail(item.id)"
              >
                <img style="height: 170px" :src="item.image" />
                <div
                  class="flex flex-col items-center p-30"
                  style="background: #f4f8fb"
                >
                  <p style="color: #202131" class="font-semibold pb-10">
                    {{ item.title }}
                  </p>
                  <p
                    style="
                      color: #8c8c8c;
                      font-size: 14px;
                      height: 80px;
                      overflow: hidden;
                    "
                    class="mb-20"
                  >
                    {{ item.info }}
                  </p>
                  <div
                    class="detail cursor-pointer flex items-center animate__animated animate__zoomIn"
                  >
                    Learn more
                    <img
                      style="height: 30px; padding-left: 10px"
                      src="https://z1.ax1x.com/2023/09/19/pP5C9R1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pt-80"
            style="border-bottom: 1px solid #8c8c8c"
            v-if="curEquiment.details && curEquiment.details.length > 0"
          >
            <main-layout-tabbar
              :list="['参数详情']"
              :cur-index="0"
            ></main-layout-tabbar>
            <div class="grid grid-cols-4 py-40">
              <div
                style="line-height: 40px"
                class="flex h-40"
                v-for="(item, index) in curEquiment.details"
                :key="index"
              >
                <span class="w-90" style="font-size: 14px; color: #8c8c8c">
                  {{ item.type }}
                </span>
                <span style="color: #202131; font-size: 14px">
                  {{ item.value }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <img :src="curEquiment.image" class="mt-40" />
          </div>
        </template>
      </div>
    </div>
  </div>
  <a-modal
    v-model:open="openMark"
    :maskClosable="true"
    :footer="null"
    :title="
      h(
        'div',
        {
          style: {
            textAlign: 'center',
            color: '#fff',
          },
        },
        [
          h(
            'p',
            {
              style: {
                fontSize: '28px',
                fontWeight: 500,
              },
            },
            'Contact us咨询此产品'
          ),
          h(
            'p',
            {
              style: {
                fontSize: '14px',
              },
            },
            '请以下列方式Contact us进行咨询'
          ),
        ]
      )
    "
  >
    <div class="consult-info">
      <p>400-8710-555</p>
      <div class="flex items-center justify-center">
        <img
          src="http://cdn.huaqu.club/img/b925e6078b4bffbbaeaab8305be6ad99a985f3a47db-ttjLkD.webp"
        />
        24-hour free service hotline
      </div>
    </div>
    <div class="consult-info">
      <p>niukang_wk@163.com</p>
      <div class="flex items-center justify-center">
        <img
          src="http://cdn.huaqu.club/img/e1a15dcbaa32f67fb0c6ec5b53b925ea1e5cd9a1662-XEsV4I.webp"
        />
        电子邮件
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { ref, h } from "vue";
import mainLayoutBanner from "../components/main-layout-banner.vue";
import mainLayoutTabbar from "../components/main-layout-tabbar.vue";

const sortList = [
  "全部产品",
  "产品分类1",
  "产品分类2",
  "产品分类3",
  "产品分类4",
  "产品分类5",
];
const curSort = ref(0);
const equimentList = [
  {
    id: 1,
    title: "LKC-石材雕刻机",
    sepc: "Fine carving series",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/5141025c27e03e268bde95a23a997372f8f95f98197fe9-droQAW.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 2,
    title: "NCK-铝板雕刻机",
    sepc: "Fine carving series",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/cc0c1f7fdca4208e74eb7c6221a7a29ff46ff5961798f3-GQa2hN.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 3,
    title: "BCKK-木工雕刻机",
    sepc: "Fine carving series",
    info: "提供高水平的竞争力和效率。",
    image:
      "http://cdn.huaqu.club/img/e395aa9a173bae8f75d808981b2c0c00cfd17f9133dd1-uMQ7xg.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 4,
    title: "LC880-激光雕刻机",
    sepc: "Fine carving series",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/07b640e714dd2453d37d6dbda164435fc69f7d513d916-13mFUT.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 5,
    title: "石碑雕刻机",
    sepc: "Fine carving series",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/07b640e714dd2453d37d6dbda164435fc69f7d513d916-13mFUT.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 6,
    title: "KOI-立体雕刻机",
    sepc: "Fine carving series",
    info: "提供高水平的竞争力和效率。",
    image:
      "http://cdn.huaqu.club/img/07b640e714dd2453d37d6dbda164435fc69f7d513d916-13mFUT.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 7,
    title: "小型雕刻机",
    sepc: "Fine carving series",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/6dd972066319b5bd84c0d5a12551852b566527032b32f-vnLCWe.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 8,
    title: "泡沫木模雕刻机",
    sepc: "Fine carving series",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/6dd972066319b5bd84c0d5a12551852b566527032b32f-vnLCWe.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 9,
    title: "小型雕刻机",
    sepc: "Fine carving series",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/b44516de0809f2cd8d73c0945e231f58d9ae288c31714-E95rwI.webp",
    details: [
      {
        type: "功率",
        value: "1100W",
      },
      {
        type: "设备名称",
        value: "雕刻机",
      },
      {
        type: "生产商家",
        value: "诸城市惠湾得食品机械厂",
      },
      {
        type: "产能",
        value: "1500-3000",
      },
      {
        type: "加工定制",
        value: "是",
      },
      {
        type: "净重",
        value: "400kg",
      },
      {
        type: "种类",
        value: "激光切割",
      },
      {
        type: "起订量",
        value: "1台起订",
      },
      {
        type: "材质",
        value: "不锈钢",
      },
      {
        type: "适用范围",
        value: "食品厂、肉制品加工厂等",
      },
      {
        type: "电压",
        value: "380v",
      },
      {
        type: "品牌",
        value: "惠湾得",
      },
      {
        type: "是否批发",
        value: "是",
      },
      {
        type: "产地",
        value: "山东潍坊",
      },
      {
        type: "产品用途",
        value: "冻肉、蔬菜等切丁",
      },
    ],
  },
  {
    id: 10,
    title: "泡沫木模雕刻机",
    sepc: "Fine carving series",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/b44516de0809f2cd8d73c0945e231f58d9ae288c31714-E95rwI.webp",
    details: [],
  },
  {
    id: 11,
    title: "小型雕刻机",
    sepc: "Fine carving series",
    info: "高性能模型，优先考虑鲁棒性、精度和可重复性。低偏转和差异化系统使PRCN在市场上独一无二。",
    image:
      "http://cdn.huaqu.club/img/b44516de0809f2cd8d73c0945e231f58d9ae288c31714-E95rwI.webp",
    details: [],
  },
  {
    id: 12,
    title: "泡沫木模雕刻机",
    sepc: "Fine carving series",
    info: "高度可配置的Quinadeira模型，适应不同的可选设备和高于平均水平的性能。",
    image:
      "http://cdn.huaqu.club/img/b44516de0809f2cd8d73c0945e231f58d9ae288c31714-E95rwI.webp",
    details: [],
  },
];
const curEquiment = ref({});
const openMark = ref(false);

const handleSearchDetail = (id) => {
  curEquiment.value = equimentList.find((item) => item.id == id);
};

const handleClearEquiment = () => {
  curEquiment.value = {};
};

const handleConsultEquiment = () => {
  openMark.value = true;
};

const handleChangeBar = (index) => {
  curSort.value = index;
};
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
.consult-info {
  padding: 20px 0;
  text-align: center;
}
.consult-info p {
  font-size: 40px;
  font-weight: 600;
  color: #4a4a53;
  line-height: 56px;
}
.consult-info div {
  font-size: 16px;
  font-weight: 600;
  color: #4a4a53;
  line-height: 22px;
}
.consult-info img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.consult-info:not(:last-child) {
  border-bottom: 1px solid #8c8c8c;
}

.ant-modal-content {
  padding: 0 !important;
}
.ant-modal-header {
  height: 130px;
  background: url(http://cdn.huaqu.club/img/0aa9e82e32b6e5221aaddae449af20fcdb19810f4fac7-yAP2mZ.webp)
    100% no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.ant-modal-body {
  padding: 0 20px;
}
.ant-modal-close-x {
  color: #fff;
}
</style>
