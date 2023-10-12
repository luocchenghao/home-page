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
                title:
                  "LV-601 Fruit and vegetable three-dimensional dicing machine",
                desc: "Bulb fruits and vegetables can be cut into cubes, such as white radish, carrot, potato, taro, scallion, onion, green pepper, mango, pineapple, apple, konjac, papaya, ham, etc.",
                features: [
                  "The machine frame is made of SUS304 stainless steel, which is durable.",
                  "There is a micro switch at the inlet. Safe operation.",
                  "Three-dimensional dicing technology, fast speed, high yield rate, can meet the workload of 25 people in the same time.",
                ],
                tech: [
                  {
                    key: "Modal",
                    value: "LV-601",
                  },
                  {
                    key: "Machine size",
                    value: "800*700*1260mm",
                  },
                  {
                    key: "Cutting size",
                    value:
                      "3-20MM (Not adjustable, need to replace the knife set〕",
                  },
                  {
                    key: "Capacity",
                    value: "500-800KG/H",
                  },
                  {
                    key: "Weight",
                    value: "100KG",
                  },
                  {
                    key: "Voltage",
                    value: "380V Three rents",
                  },
                  {
                    key: "Power",
                    value: "0.75KW",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LV-602 Commercial Veg/Fruits Dicing Machine",
                desc: "It can dice and slice roots fruits and vegetables; such as carrot, potato, taro, sweet potato, onion, green pepper, mango, pineapple, apple, ham, konjac, papaya, etc.",
                features: [
                  "The machine frame is made of SUS304 stainless steel, which is durable.",
                  "There is a micro switch at the inlet, which is safe to operate.",
                  "The three-dimensional dicing speed is fast, the yield is high, and the workload of 35 people can be met in the same time. Note: 1 set of tools and one tool box are included.",
                ],
                tech: [
                  {
                    key: "Modal",
                    value: "LV-602",
                  },
                  {
                    key: "Cutting size",
                    value:
                      "5-20mm (Not adjustable, need to change the tool set)",
                  },
                  {
                    key: "Machine size",
                    value: "1740x1270x1460mm",
                  },
                  {
                    key: "Capacity",
                    value: "2000-3000kg/h",
                  },
                  {
                    key: "Weight",
                    value: "280kg",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "2.25kw",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LV-603 Roots vegetable cutter",
                desc: "Cut root vegetables: potatoes, sweet potatoes, cucumbers, bamboo shoots, onions, eggplants, etc. into slices, strips, and dices. It is suitable for group meal companies such as corporate canteens, prisons, schools, military units, central kitchens, and meal trustees, as well as supermarkets, clean vegetable distribution, farmer's markets and other supermarket agro-products companies.",
                features: [
                  "Products of different specifications and shapes can be cut out by changing the cutter head, which is simple to operate and easy to clean. A set of dicing cutter and a slicing cutter are included.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value:
                      "Shred: 2-10MM;Slice: 2-20MM;Dice: 8-20MM (Not adjustable, need to change cutter head)",
                  },
                  {
                    key: "Machine size",
                    value: "700×450X930MM",
                  },
                  {
                    key: "Capacity",
                    value: "200-1000kg/H",
                  },
                  {
                    key: "Weight",
                    value: "70KG",
                  },
                  {
                    key: "Voltage",
                    value: "220v / single phase",
                  },
                  {
                    key: "Power",
                    value: "0.75KW",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LV-611 Roots Vegetable Strips Slices Cutter",
                desc: "Slice or shred bamboo shoots, potatoes, carrots, melons, ginger, garlic and other materials. Scope of application: snack food, supermarket, clean vegetable distribution, farmer's market and other supermarket agro-products enterprises.",
                features: [
                  "Special design, cut pieces, strips, smooth surface.",
                  "Simple operation and easy to clean.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "strips:0.8-5mm / slices:0.8-8mm",
                  },
                  {
                    key: "Machine size",
                    value: "650×500×850mm",
                  },
                  {
                    key: "Capacity",
                    value: "500-800kg/H",
                  },
                  {
                    key: "Weight",
                    value: "85kg",
                  },
                  {
                    key: "Voltage",
                    value: "220V/ single phase",
                  },
                  {
                    key: "Power",
                    value: "0.75kw",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title:
                  "LV-607L Belt Removable Multifunctional Vegetable Cutter",
                desc: "Cut leafy vegetables into sections and shreds, and cut root vegetables into shreds, slices, and dice.",
                features: [
                  "The whole machine is made of SUS304 stainless steel, which is beautiful and durable.",
                  "The design of double heads can work at the same time, one machine can be used for multiple purposes, saving time and effort.",
                  "The speed of the leafy vegetables conveyor belt and the rotary knife adopts independent frequency converter to adjust the speed, which can flexibly adjust the cutting length of vegetables.",
                  "The widened design of the conveyor belt facilitates the feeding of large materials without changing the knife, and the work efficiency is higher.",
                  "The conveyor belt is detachable, easy to clean, to ensure the safety and sanitation of food processing.",
                  "The device has a sensor protection switch, which makes the operation safer.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value:
                      "Leafy vegetables (adjustable: 1~60mm; roots vegetable (need to change blade set)Shred: 2-10mm; Slice: 2-20mm; Dice: 8-20mm；",
                  },
                  {
                    key: "Machine size",
                    value: "1300×650×1370mm",
                  },
                  {
                    key: "Capacity",
                    value: "600-1200 kg/Ha",
                  },
                  {
                    key: "Weight",
                    value: "175kg",
                  },
                  {
                    key: "Voltage",
                    value: "220v",
                  },
                  {
                    key: "Power",
                    value: "1.8kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "140mm",
                  },
                ],
              },
              {
                bannerPic: "banner6",
                title: "LV-607 Detachable multifunctional vegetable cutter",
                desc: "Cut leafy vegetables into sections and shreds, and cut root vegetables into shreds, slices, and dice.",
                features: [
                  "The whole machine is made of SUS304 stainless steel, which is beautiful and durable.",
                  "The design of double heads can work at the same time, one machine can be used for multiple purposes, saving time and effort.",
                  "The speed of the leafy vegetables conveyor belt and the rotary knife adopts independent frequency converter to adjust the speed, which can flexibly adjust the cutting length of vegetables.",
                  "The conveyor belt is detachable and convenient to clean, ensuring the safety and sanitation of food processing.",
                  "The device has a micro-action protection switch, which makes the operation safer.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "0.8~60mm(Adjustable)",
                  },
                  {
                    key: "Machine size",
                    value: "1300X550X1280mm",
                  },
                  {
                    key: "Capacity",
                    value: "600-1000kg/H",
                  },
                  {
                    key: "Weight",
                    value: "175kg",
                  },
                  {
                    key: "Voltage",
                    value: "220V",
                  },
                  {
                    key: "Power",
                    value: "1.8 kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "120mm",
                  },
                ],
              },
              {
                bannerPic: "banner7",
                title: "LV-608S Medium-sized vegetable cutter",
                desc: "It is mainly used for slicing, shredding and cutting vegetables, rice cakes and other ingredients, such as cabbage, cabbage, beans, celery, dried plums and other ingredients.",
                features: [
                  "The speed of the conveyor belt and the cutter adopts frequency conversion speed regulation, which can flexibly adjust the cutting length of the food.",
                  "Fast speed, high output, greatly reducing labor costs.",
                  "Equipped with a safety protection switch, when the door is opened, the machine stops running immediately, making the operation safer for employees.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "0-60mm(Adjustable）",
                  },
                  {
                    key: "Machine size",
                    value: "750×560×1000mm",
                  },
                  {
                    key: "Capacity",
                    value: "500-800kg/H",
                  },
                  {
                    key: "Weight",
                    value: "100kg",
                  },
                  {
                    key: "Voltage",
                    value: "220v Simplex",
                  },
                  {
                    key: "Power",
                    value: "1.125kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "120mm",
                  },
                ],
              },
              {
                bannerPic: "banner8",
                title:
                  "LV-609L Large Vegetable Cutting Machine With Removable Conveyor Belt",
                desc: "Cut long strips into slices, strips, segments, such as lotus root, kudzu root, cabbage, cabbage, beans, celery, kelp, melons, etc.",
                features: [
                  "The machine frame is made of SUS304 stainless steel, which is beautiful and durable.",
                  "The speed of the conveyor belt and the rotary knife adopts independent frequency converter to adjust the speed, which can flexibly adjust the cutting length of vegetables.",
                  "The conveyor belt is widened and lengthened, with wider adaptability, no need to change the knife for large materials, and higher efficiency.",
                  "Waterproof design, washable and convenient to clean, to ensure the safety and sanitation of food processing.",
                  "The device has a sensor protection switch, which makes the operation safer.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "1~100mm  (Adjustable)",
                  },
                  {
                    key: "Machine size",
                    value: "1200×650×1480mm",
                  },
                  {
                    key: "Capacity",
                    value: "1500-2000 kg/H",
                  },
                  {
                    key: "Weight",
                    value: "200kg",
                  },
                  {
                    key: "Voltage",
                    value: "220V  /  380V",
                  },
                  {
                    key: "Power",
                    value: "2.25 kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "200mm",
                  },
                ],
              },
              {
                bannerPic: "banner9",
                title: "LV-612 Potato Chips Cutter",
                desc: "Cut potato, sweet potato and other roots vegetables into strips or slices. Suitable for further steaming, boiling and frying of raw materials;",
                features: [
                  "After cutting, the surface of the finished product is smooth and does not damage the organization.",
                  "Suitable for fast food stores, manufacturers or food processing plants.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "6-20mm(Not adjustable, need to change tool)",
                  },
                  {
                    key: "Machine size",
                    value: "680×1050×900mm",
                  },
                  {
                    key: "Capacity",
                    value: "600-800kg/H",
                  },
                  {
                    key: "Weight",
                    value: "115kg",
                  },
                  {
                    key: "Voltage",
                    value: "380 Three-phase",
                  },
                  {
                    key: "Power",
                    value: "1.5 kw",
                  },
                ],
              },
              {
                bannerPic: "banner10",
                title: "LV-613 Hob Type Vegetable Cutter",
                desc: "It can cut vegetables into fixed-length slices and sections at one time. Such as cabbage, spinach, beans, winter melon, pakchoi and so on. Applicable to supermarkets, clean vegetable distribution, farmer's markets and other supermarkets and agricultural enterprises; prisons, schools, troops, corporate canteens, central kitchens and meal trustees and other group meal enterprises.",
                features: [
                  "Large inlet, suitable for cutting large materials",
                  "High output, can be used in connection with the assembly line vegetable washing machine",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "30mm Above",
                  },
                  {
                    key: "Machine size",
                    value: "2850×1200x1100mm",
                  },
                  {
                    key: "Capacity",
                    value: "1500kg/H",
                  },
                  {
                    key: "Weight",
                    value: "230kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V Three-phase",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "500mm",
                  },
                  {
                    key: "Inlet height",
                    value: "150mm",
                  },
                ],
              },
              {
                bannerPic: "banner11",
                title: "LV-616 Small vegetable cutter",
                desc: "Cut small long strips of materials into slices, shreds, and segments, such as ginger, leeks, green onions, peppers, etc. Mainly used for cutting ingredients, such as sliced ginger, green onion, chili rings, chopped celery, chopped leeks, etc.",
                features: [
                  "Cutting thickness, length adjustable, compact and convenient.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "1~30mm(Adjustable)",
                  },
                  {
                    key: "Machine size",
                    value: "420×220×430mm",
                  },
                  {
                    key: "Capacity",
                    value: "30-100 kg/H",
                  },
                  {
                    key: "Weight",
                    value: "20kg",
                  },
                  {
                    key: "Voltage",
                    value: "20kg",
                  },
                  {
                    key: "Power",
                    value: "0.18 kw",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "80mm",
                  },
                ],
              },
              {
                bannerPic: "banner12",
                title: "LV-619 Mushroom Cutter",
                desc: "Used for shredding fresh fungus and shiitake mushrooms; it can also be used for cutting squid.",
                features: [
                  "The operation is simple and convenient.",
                  "The cut surface is smooth and flat, beautiful, and does not damage the food tissue.",
                  "Cutting size can be adjusted according to change knife group.",
                ],
                tech: [
                  {
                    key: "Cutting size",
                    value: "1.5mm About(Not adjustable)",
                  },
                  {
                    key: "Machine size",
                    value: "920×500x1150mm",
                  },
                  {
                    key: "Capacity",
                    value: "200-600kg/H",
                  },
                  {
                    key: "Weight",
                    value: "75kg",
                  },
                  {
                    key: "Voltage",
                    value: "220v",
                  },
                  {
                    key: "Power",
                    value: "0.75kw",
                  },
                ],
              },
              {
                bannerPic: "banner13",
                title: "LV-632 Taro Cutting Dices Shreds Slices Machine",
                desc: "Used for processing roots vegetables, such as taro, radish, sweet potato, etc.; for dicing, slicing, and cutting into strips.",
                features: [
                  "The machine has an intelligent control system, which is more smart.",
                  "The machine uses a grid knife,cut silces dices and shreds.",
                  "The product has a smooth cut surface, high yield and high efficiency.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1305x845x1500mm",
                  },
                  {
                    key: "Capacity",
                    value: "300-500kg/H",
                  },
                  {
                    key: "Weight",
                    value: "320kg",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "3kw",
                  },
                ],
              },
              {
                bannerPic: "banner14",
                title: "LV-634 Fruit And Vegetable Segment Cutting Machine",
                desc: "Used to process root fruits and vegetables, such as: eggplant, bitter gourd, cucumber, radish, mustard and other vegetables. The ingredients can be equally divided into 4, 6, and 8 portions. More copies need to be customized.",
                features: [
                  "The whole machine is made of SuS304 stainless steel.",
                  "Different sizes of molds can be placed in the entrance, and various sizes can be cut.",
                  "The operation is safe and simple, and the movement is convenient.",
                ],
                tech: [
                  {
                    key: "The maximum diameter",
                    value: "152mm",
                  },
                  {
                    key: "Machine size",
                    value: "900x890x910mm",
                  },
                  {
                    key: "Weight",
                    value: "80kg",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "0.32kw",
                  },
                ],
              },
              {
                bannerPic: "banner15",
                title: "LV-636 Fruit and vegetable splitting machine",
                desc: "It is mainly used for processing fruits and vegetables and cutting into two halves.",
                features: [
                  "This equipment is a new product independently researched and developed by the company, with novel design and convenient practical.",
                  "The cabbage splitter is made of SUS304 stainless steel, which makes the processing of fruits and vegetables more hygienic and healthy.",
                  "The cutting output is large, the cutting speed is fast, and the cutting speed can be adjusted.",
                  "Protective devices are installed around the equipment to improve the safety during use.",
                  "The fruit and vegetable splitting machine is a customized product, which can be made according to the actual needs of users.",
                  "Good cutting effect, smooth cutting surface,uniform size.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2600×1000X140OMM",
                  },
                  {
                    key: "Capacity",
                    value: "2000-3000kg/H",
                  },
                  {
                    key: "Weight",
                    value: "180kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "1.1kw",
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
                title: "LV-638 Carrot peeler",
                desc: "Used for peeling carrots.",
                features: [
                  "The one-time peeling effect is good, and the yield is high.",
                  "The production line can be configured to work with a high degree of automation.",
                  "The whole machine is made of SUS304 stainless steel material, which meets the requirements of food hygiene. 4. Reasonable mechanism design, safe and reliable operation.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1970x520X1040MM",
                  },
                  {
                    key: "Weight",
                    value: "180kg",
                  },
                  {
                    key: "Capacity",
                    value: "1800 Hours",
                  },
                  {
                    key: "Voltage",
                    value: "220V",
                  },
                  {
                    key: "Power",
                    value: "0.75kw",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LV-624 Vegetable Fruit Peeling Machine",
                desc: "It is mainly used for peeling pineapple, papaya, taro, cantaloupe, grapefruit and other melons, with high efficiency, safety and reliability, adjustable peeling thickness and easy operation.",
                features: [
                  "The knife set cuts up and down cycles; the peeling rate reaches more than 95%.",
                  "the special design of the peeling knife holder allows the peeling of the melon to be discharged in a directional direction, which is convenient for collection and cleaning.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "700×800×1750mm",
                  },
                  {
                    key: "Capacity",
                    value: "2 pcs/min",
                  },
                  {
                    key: "Weight",
                    value: "140kg",
                  },
                  {
                    key: "Voltage",
                    value: "220v /single phase",
                  },
                  {
                    key: "Power",
                    value: "0.8kw",
                  },
                ],
              },
            ],
          },
          {
            type: "crusher",
            title: "Crusher",
            data: [
              {
                bannerPic: "banner1",
                title: "LV-621 Fruit and vegetable juice machine",
                desc: "It is suitable for quick conditioning and beating of fruits and vegetables, malt sprout juice, liquid food preparation, seasoning mixing, etc.",
                features: [
                  "The specially designed blade has the best juice beating effect and fast speed. ⒉. It is convenient to dump and clean, and meet the sanitary requirements.",
                  "The stainless steel knife is sharp, strong in crushing force, strong and durable.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LV-621-20",
                  },
                  {
                    key: "Machine size",
                    value: "480x460x 1080mm",
                  },
                  {
                    key: "Capacity",
                    value: "20L",
                  },
                  {
                    key: "Weight",
                    value: "45kg",
                  },
                  {
                    key: "Voltage",
                    value: "380v Three-phase",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LV-617 Crusher Machine",
                desc: "Beat water chestnut, ginger, chili, brown sugar, white sugar, milk tea ingredients raw beans, etc. into puree, fine grain or powder. It is suitable for use in seasoning factories, restaurants, restaurants, corporate canteens, hygienic restaurants or food processing plants, etc.",
                features: [
                  "By increasing or decreasing the number of blades to realize the size of the broken particles, the operation is simple and the processing range is wide. ",
                  "The whole machine is made of standard 304 stainless steel, does not rust, and has a long service life.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LV-617",
                  },
                  {
                    key: "Machine size",
                    value: "800×450×1000 mm",
                  },
                  {
                    key: "Capacity",
                    value: "600-800kg/H",
                  },
                  {
                    key: "Weight",
                    value: "90kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V Three-phase",
                  },
                  {
                    key: "Power",
                    value: "2.25kw",
                  },
                ],
              },
            ],
          },
          {
            type: "washing-machine",
            title: "Washing Machine",
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
                bannerPic: "banner2",
                title: "LC-03 Small Leaf Vegetable  Washing Line",
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
                    value: "9000×1100×1780mm",
                  },
                  {
                    key: "Yield",
                    value: "800 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "9kw",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LC-11Vegetable Bubbling Washing Machine",
                desc: "It is mainly suitable for cleaning whole vegetables that do not need to be cut, such as leeks, spinach, green onions and other materials.",
                features: [
                  "Use the aeration pump to bubbling the clean water to keep the material tumbling, and then go through the spray device to clean the material. Pour the material into the feed inlet, and the material will move forward with the conveyor belt. In this process, the material will be cleaned by surfing, bubbling and spraying.",
                  "The circulating water tank filter device can ensure the cleanness of the water in the main water tank and at the same time prevent impurities from blocking the water inlet of the water pump.",
                  "Equipment of different specifications can be customized according to customer needs.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "14500×1550×1580mm",
                  },
                  {
                    key: "Yield",
                    value: "1000-2000 T/H",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "15kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LC-04 Vortex Cleaning Washing machine",
                desc: "Suitable for cleaning leafy vegetables, rhizomes and pickled fruits and vegetables, such as: cabbage, lettuce, spinach, pickled radish, kohlrabi, etc.",
                features: [
                  "Cyclone cleaning plus bubble cleaning design, high-pressure gas injection pipe is arranged at the bottom of the cylinder, which effectively separates the vegetables into clumps. Exhaust pipe is more equipped There is a pressure relief valve to adjust the bubble strength when cleaning different materials.",
                  "Adopting vibratory conveying instead of traditional conveyor belt conveying, with simpler structure, less cleaning time than traditional conveyor belts, and more convenient to use; the conveying surface in contact with the material is designed with punching holes, which effectively separates the debris in the material.",
                  "Automatic water replenishment design, the circulating water tank and the main water tank are equipped with automatic water replenishment devices, which effectively saves water.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "4300*1100*1830mm",
                  },
                  {
                    key: "Yield",
                    value: "1000kg/H",
                  },
                  {
                    key: "weight",
                    value: "300kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "6.46KW",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "Bubbling Washing Machine",
                desc: "It is mainly used to clean vegetables and fruits that contain impurities and hair, such as leafy vegetables and fungi.",
                features: [
                  "The inside and outside of the water tank are equipped with impurity removal devices, and the circulating water tank is equipped with a secondary impurity removal device; the mesh belt lifting part has a water purification spray device, which can be used for The material is sprayed and cleaned again, and all scraps and impurities are automatically removed, eliminating the tedious task of manual cleaning of debris.",
                  "There are automatic water replenishment and no-water power-off functions in the box, which greatly reduces the machine failure rate.",
                  "The whole machine has reasonable design, complete functions, good cleaning effect and high degree of automation. It is an indispensable vegetable washing machine in the cleaning of vegetables and fruits.",
                  "Different production lines or equipment with different specifications can be specially customized according to customer needs.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "5000×1550×1580mm",
                  },
                  {
                    key: "Yield",
                    value: "1000-2500 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "6.25kw",
                  },
                ],
              },
              {
                bannerPic: "banner6",
                title: "LC-06-1 Bubbling Leaf Vegetable Washing Machine",
                desc: "It is mainly used to clean vegetables and fruits that contain impurities and hair, such as leafy vegetables and fungi.",
                features: [
                  "The inside and outside of the water tank are equipped with impurity removal devices, and the circulating water tank is equipped with a secondary impurity removal device; the mesh belt lifting part has a water purification spray device, which can be The material is sprayed and cleaned again, and all scraps and impurities are automatically removed, eliminating the tedious task of manual cleaning of debris.",
                  "There are automatic water replenishment and no-water power-off functions in the box, which greatly reduces the machine failure rate.",
                  "The whole machine has reasonable design, complete functions, good cleaning effect and high degree of automation. It is an indispensable vegetable washing machine in the cleaning of vegetables and fruits.",
                  "Different production lines or equipment with different specifications can be specially customized according to customer needs.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "3500×1000×1700mm",
                  },
                  {
                    key: "weight",
                    value: "300kg",
                  },
                  {
                    key: "Yield",
                    value: "1000-1300 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "3.3kw",
                  },
                ],
              },
              {
                bannerPic: "banner7",
                title: "LV-627 Multi-function Washing Machine",
                desc: "Suitable for cleaning vegetables, fruits, meat, ribs, small fish, dried shrimps, seafood, seaweed and other materials.",
                features: [
                  "Take batch cleaning, and the cleaning time can be accurately controlled.",
                  "Automatic discharging design, hydraulic start, stable speed and precision, and the whole cleaning time is controllable.",
                  "Powerful circulating water flow cleaning, does not damage the material, and the cleaning effect is good.",
                  "Automatic water replenishment device to save water.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "17601460×1150mm",
                  },
                  {
                    key: "Capacity",
                    value: "20-40kg/time 3-5mins",
                  },
                  {
                    key: "Weight",
                    value: "300kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "2.25kw",
                  },
                ],
              },
              {
                bannerPic: "banner8",
                title: "LV-628 Double tank washing machine",
                desc: "Used for cleaning and removing impurities of vegetables, fruits, seafood and other products. Scope of application: central kitchens, food processing plants, etc.",
                features: [
                  "PLC programmable man-machine control interface, intelligent parameter setting, convenient operation.",
                  "Two-slot design, two cleanings, automatic turning over and discharging, continuous operation, high efficiency.",
                  "The cleaning time can be set, and the material can be discharged manually or automatically.",
                  "Circulating water design, more water-saving.",
                  "A manual drain valve is set on the side of the machine to drain water.",
                  "The number of cleaning tanks can be customized according to customer needs, three tanks, four tanks, five tanks, and six tanks.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2100×1850×1400mm",
                  },
                  {
                    key: "Capacity",
                    value: "20-30kg/time",
                  },
                  {
                    key: "Weight",
                    value: "500kg",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "2.25kw",
                  },
                ],
              },
              {
                bannerPic: "banner9",
                title: "LC-13 Jujube Orange Fruit Washing Machine",
                desc: "The machine is used to clean the surface silt of small fruits, and is suitable for fruit and vegetable processing enterprises with low output. Wave-shaped brush cleaning, the cleaning surface is wider, and the cleaning effect is better. Snap-in 360 degree rotatable",
                features: [
                  "Wave-shaped brush cleaning, wider cleaning surface, better cleaning effect.",
                  "The snap-on 360-degree rotatable nozzle prevents clogging and is easy to replace.",
                  "Protective upper cover prevents water splashing.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2500×1200×1050mm",
                  },
                  {
                    key: "Weight",
                    value: "300kg",
                  },
                  {
                    key: "Yield",
                    value: "1000 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "1.87KW",
                  },
                ],
              },
              {
                bannerPic: "banner10",
                title: "LC-06 Bubbling Cleaning And Impurity Removal Machine",
                desc: "It is mainly used to clean vegetables and fruits that contain impurities and hair, such as leafy vegetables and fungi.",
                features: [
                  "The inside and outside of the water tank are equipped with impurity removal devices, and the circulating water tank is equipped with a secondary impurity removal device; the lifting part of the mesh belt has a water purification spray device, which can spray and clean the materials again, and all the scraps and impurities are automatically removed, saving To manually clean up the tedious matters of debris.",
                  "There are automatic water replenishment and no-water power-off functions in the box, which greatly reduces the machine failure rate.",
                  "The whole machine has reasonable design, complete functions, good cleaning effect and high degree of automation. It is an indispensable vegetable washing machine in the cleaning of vegetables and fruits.",
                  "Different production lines or equipment with different specifications can be specially customized according to customer needs.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "4500×1580×1300mm",
                  },
                  {
                    key: "Yield",
                    value: "1000-1500 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "10kw",
                  },
                ],
              },
              {
                bannerPic: "banner11",
                title: "LVB-250 Vegetable Blanching Machine",
                desc: "Washing, soaking, blanching, sterilizing, disinfecting, cooling, etc. of fresh vegetables, fruits, fruit products, salted vegetables, fungi, seafood, Chinese herbal medicine granular, leaf-like and rhizome products.",
                features: [
                  "The temperature can be adjusted.",
                  "The water temperature is uniform, and the heating temperature of the material is the same.",
                  "The conveying time and speed can be adjusted.",
                  "The structure is compact, the layout is reasonable, and the overall appearance is beautiful.",
                  "Fast cooling and uniform cooling temperature.",
                  "The whole machine is 304 stainless steel.",
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
                bannerPic: "banner12",
                title: "Automatic Rhizome Brush Peeling Machine",
                desc: "It is suitable for cleaning equipment at the front stage of the cleaning and processing line for roots and stems of fruits and vegetables, such as potatoes, ginger, tomatoes, etc. Used in food processing plants, central kitchens, clean vegetable distribution centers, group meals, etc.",
                features: [
                  "The cleaning speed can be adjusted independently to cope with different ingredients And materials with different degrees of sedimentation.",
                  "Cooperate with the conveyor to realize automatic feeding and discharging to achieve flow operation and increase production capacity.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2900x840x1380mm",
                  },
                  {
                    key: "Yield",
                    value: "1000-2000kg/h",
                  },
                  {
                    key: "Cleaning efficiency",
                    value: "100-150kg/time 2-5min",
                  },
                  {
                    key: "Voltage",
                    value: "380w/220v",
                  },
                  {
                    key: "Power",
                    value: "2kw",
                  },
                ],
              },
              {
                bannerPic: "banner13",
                title: "LV-1500W Roots Vegetable Cleaning & Peeling Machine",
                desc: "It is suitable for cleaning equipment at the front stage of the cleaning and processing line of roots and stems of fruits and vegetables, such as potatoes, ginger, tomatoes, etc.",
                features: [
                  "The cleaning speed can be adjusted independently to cope with different food materials and materials with different degrees of sedimentation.",
                  "ooperate with the conveyor to realize automatic feeding and discharging to achieve flow operation and increase production capacity.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LV-1500W",
                  },
                  {
                    key: "Machine size",
                    value: "1700x1080x780mm",
                  },
                  {
                    key: "Yield",
                    value: "600-800kg/h",
                  },
                  {
                    key: "Cleaning efficiency",
                    value: "50-80kg/time  2-5mins",
                  },
                  {
                    key: "Voltage",
                    value: "380V/220V",
                  },
                  {
                    key: "Brush",
                    value: "optional soft brush/hard brush",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
            ],
          },
          {
            type: "dehydrator",
            title: "Dehydrator",
            data: [
              {
                bannerPic: "banner1",
                title: "LV-631 Automatic dehydration machine",
                desc: "It is suitable for the dehydration of various materials such as vegetables and meat, and prolongs the fresh-keeping period of the materials.",
                features: [
                  "PLC intelligent man-machine control interface, can set the speed and dehydration timing.",
                  "Stainless steel body, shock absorption design, stable noise reduction.",
                  "The dehydration effect is good, and the material is not damaged.",
                  "Equipped with a spin-drying barrel attachment for easy turnover.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "780×750×1150mm",
                  },
                  {
                    key: "Capacity",
                    value: "10-20 kg/time",
                  },
                  {
                    key: "Inner basket size",
                    value: "D550 H350mm",
                  },
                  {
                    key: "Voltage",
                    value: "220v380V",
                  },
                  {
                    key: "Motor Power",
                    value: "1.7kw",
                  },
                  {
                    key: "Inverter power",
                    value: "2.2kw",
                  },
                  {
                    key: "Power of capping machine",
                    value: "120w",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LV-630 Frequency Conversion Dehydrator",
                desc: "It is suitable for the drying and dehydration of various materials such as vegetables, which is convenient for subsequent packaging and prolongs the fresh-keeping period of the materials.",
                features: [
                  "The whole machine is made of stainless steel, which is easy to clean and has good water resistance.",
                  "High-speed centrifugal portable design, and equipped with a fine mesh to protect the inner tank, the material will not be damaged during the dehydration process.",
                  "The operation of the spin dryer adopts frequency conversion speed regulation technology, which is adjustable and controllable; the speed and running time can be flexibly set.",
                  "Equipped with a spin-drying barrel attachment for easy turnover.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "950×700×890mm",
                  },
                  {
                    key: "Capacity",
                    value: "5-10 kg/time",
                  },
                  {
                    key: "Inner basket size",
                    value: "5-10 kg/time D460 H330mm",
                  },
                  {
                    key: "Voltage",
                    value: "220v / 380v",
                  },
                  {
                    key: "Power",
                    value: "2.25kw",
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
            data: [],
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
