import { defineStore } from "pinia";
import { ref } from "vue";

const useProductStore = defineStore(
  "product",
  () => {
    const equimentList = [
      {
        type: "fruit-and-vegetable-processing-equipment",
        data: [
          {
            type: "cutting-machine",
            title: "Cuttin machine",
            data: [
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
            ],
          },
          {
            type: "peeling-machine",
            title: "Peeling machine",
            data: [
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "meat-processing-equipment",
        data: [
          {
            type: "meat-cutter",
            title: "Meat Cutter",
            data: [
              {
                bannerPic: "banner1",
                title: "Whole Vegetable Fruit Cleaning Washing Line",
                desc: "It is suitable for the pretreatment of leafy vegetables in group meal processing centers, clean vegetable distribution centers and canteens of enterprises and institutions. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and a very good cleaning effect can be achieved without damaging the leaves.",
                  "There is a sediment filtering device and a V-shaped sewage design at the bottom of the tank to facilitate the outflow of sediment.",
                  "The whole machine is made of 304 stainless steel, and the main accessories are imported with original packaging; it has good airtightness and is easy to clean.",
                  "Circulating water tank design, more water saving.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "11500×1500×1700mm",
                  },
                  {
                    key: "Yield",
                    value: "600 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    const curPatientRoute = ref("");
    const curEquimentList = ref([]);
    const curSortEquimentList = ref([]);
    const curEquiment = ref({});
    const curPatientRouteTitle = ref("");

    const getEquimentList = (index) => {
      curEquimentList.value = equimentList.find(
        (item) => item.type === curPatientRoute.value.split("/")[1]
      ).data;
      curSortEquimentList.value = curEquimentList.value[index];
    };

    return {
      equimentList,
      curPatientRoute,
      curEquimentList,
      curSortEquimentList,
      curEquiment,
      curPatientRouteTitle,
      getEquimentList,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);

export default useProductStore;
