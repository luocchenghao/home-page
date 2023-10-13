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
            data: [
              {
                bannerPic: "banner1",
                title: "LM-325 Two-dimensional Dicing Machine",
                desc: "It is suitable for dicing frozen ribs, frozen pork belly, frozen half slice of duck and half slice of chicken at zero degrees Celsius to five degrees below zero degrees Celsius.",
                features: [
                  "Thickened stainless steel square tube rack, high-quality 304# stainless steel meets food-grade requirements, independent feeding mechanism module, which can be quickly disassembled and cleaned, and an electric control box is installed underneath.",
                  "Independent safety protection cover and safety protection induction switch, automatic lubrication system, automatic alarm and shutdown for lack of oil, automatic circulation of heat in the air inlet of the motor, fast side opening, and rat-proof net at the bottom.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1050×600×1100mm",
                  },
                  {
                    key: "Weight",
                    value: "120kg",
                  },
                  {
                    key: "Capacity",
                    value: "120kg",
                  },
                  {
                    key: "Chopping frequency",
                    value: "80Times/minute",
                  },
                  {
                    key: "Inlet size",
                    value: "300×70mm",
                  },
                  {
                    key: "Cutting size",
                    value:
                      "width:15-40mmCustomizable 300×70mm length:18-30mmCustomizable",
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
                bannerPic: "banner2",
                title: "LM-325A CNC Version Of Two-dimensional Dicing Machine",
                desc: "It is suitable for cutting frozen ribs, frozen pork belly, half chicken and half duck between zero and minus 5 degrees into one piece; Used in frozen food factory equipment, snack food factory equipment, school canteens, fruit and vegetable processing plant equipment, medium and large hotels, catering distribution centers, etc.",
                features: [
                  "Special knives are sharper to use and last longer.",
                  "This machine relies on the fully automatic operation of the CNC board, and the operation is safe and reliable.",
                  "The whole machine is made of stainless steel, in line with food-grade hygiene and easy to clean.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1000x595x1100mm",
                  },
                  {
                    key: "Capacity",
                    value: "300-500kg/h",
                  },
                  {
                    key: "Inlet size",
                    value: "300x70mm",
                  },
                  {
                    key: "Cutting size",
                    value: "Width: 25mm (fixed) Length: 20-30mm adjustable",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "Meat Dices Cutting Machine",
                desc: "It is suitable for dicing, stripping and dicing fresh meat or frozen meat at one time.",
                features: [
                  "Equipped with safety switch, good safety performance.",
                  "The core accessories such as knives are imported from Germany with more stable performance.",
                  "The material push rod is a stepping motion to ensure the standard cutting shape.",
                  "Changing the knife can cut boned poultry and fish materials.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LM-550",
                  },
                  {
                    key: "Machine size",
                    value: "1950x1000x1120mm",
                  },
                  {
                    key: "Weight",
                    value: "500kg",
                  },
                  {
                    key: "Capacity",
                    value: "600-800kg/H",
                  },
                  {
                    key: "Inlet size",
                    value: "120x120x550mm",
                  },
                  {
                    key: "Cutting size",
                    value: "5-30mm not adjustable",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "3.7kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LM-816 Bone dicing machine",
                desc: "It is suitable for cutting fresh chickens, ducks, geese and other boned poultry.",
                features: [
                  "The special steel round knife and toothed knife design can smoothly cut boned poultry and fish.",
                  "The knife set is easy to disassemble and easy to clean.",
                  "The feed inlet is heightened to ensure the safety of operators.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "720×500×910mm",
                  },
                  {
                    key: "Weight",
                    value: "80kg",
                  },
                  {
                    key: "Capacity",
                    value: "800kg/H",
                  },
                  {
                    key: "Inlet size",
                    value: "300x90mm",
                  },
                  {
                    key: "Cutting size",
                    value: "5-40mm Not adjustable",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "Frozen meat three-dimensional dicing machine",
                desc: "It can cut various kinds of frozen meat from 0℃ to -10℃; Fruits and root vegetables can also be cut into diced, shredded and sliced at room temperature.",
                features: [
                  "The whole machine is made of SUS304 stainless steel, which ensures its durability and safety, and is easy to clean.",
                  "It can cut 3-20mm dices, silks and slices of frozen meat with a diameter of less than 120mm and a temperature of -10C~0℃.",
                  "It is recommended to control the temperature of the center and surface of the meat at minus 5-8 degrees when cutting 3-10 mm frozen diced meat.When cutting 10-15mm frozen meat, the temperature of the center and surface of the meat should be controlled at minus 4-6 degrees.When cutting 15-20 mm frozen meat, the temperature of the center and surface of the meat should be controlled at minus 2 to 5 degrees.",
                  "Standard electrical configuration, stable performance, safe and durable.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LM-200",
                  },
                  {
                    key: "Machine size",
                    value: "1830x1030x1510mm",
                  },
                  {
                    key: "Weight",
                    value: "750 kg",
                  },
                  {
                    key: "Capacity",
                    value: "1200-1800kg/H",
                  },
                  {
                    key: "Maximum size of raw material",
                    value: "200x200x200mm",
                  },
                  {
                    key: "Cutting size",
                    value: "3-20mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "11kw",
                  },
                ],
              },
              {
                bannerPic: "banner6",
                title: "LM-808 Frozen meat flaker",
                desc: "Suitable for frozen meat shavings, mutton rolls, beef rolls, etc.",
                features: [
                  "The blade imported from Italy, the diameter of the blade is D350mm, which is sharp and durable, and the normal service life can reach more than seven years.",
                  "Independent thickness regulator, 0-30mm (adjustable), slice thickness up to 0.3mm, continuous slice.",
                  "Gear transmission adopts stepless speed change device.",
                  "Double motors, more powerful power.",
                  "The body is made of aluminum alloy, and the surface is treated by anodizing process, which is wear-resistant and corrosion-resistant.",
                  "Comply with CE standards, easy to clean and safe to use.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1000x800×1450mm",
                  },
                  {
                    key: "Weight",
                    value: "195kg",
                  },
                  {
                    key: "Capacity",
                    value: "60pcs/min",
                  },
                  {
                    key: "Cutting size",
                    value: "1-30mm Adjustable",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.5 kw",
                  },
                ],
              },
              {
                bannerPic: "banner7",
                title: "LM-807 Conveyor Meat Cutter",
                desc: "It is suitable for slicing, cutting, and cutting cooked food materials, and the output is neatly through the conveyor belt, which is convenient for plate or packaging. Such as: cooked meat, cooked sausage, boneless frozen meat, bacon, sausage, ham, sausage and other ingredients.",
                features: [
                  "Imported blades, special conveyor belt design, neat discharge.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1350x600x1250mm",
                  },
                  {
                    key: "Weight",
                    value: "100kg",
                  },
                  {
                    key: "Capacity",
                    value: "500-800kg/H",
                  },
                  {
                    key: "Cutting size",
                    value: "1-40mm Adjustable",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.5 kw",
                  },
                ],
              },
              {
                bannerPic: "banner8",
                title: "LM-815 Horizontal Meat Slicer",
                desc: "It is mainly used for slicing and cutting boneless fresh meat, poultry, fish, and animal internal organs, with good cutting quality and high yield.",
                features: [
                  "Adopt conveyor belt for feeding and discharging. The products are cut neatly, easy to operate, and can realize fast packaging of the products.",
                  "The slice thickness can be made according to user requirements, and different knife sets can be quickly changed to meet the user's various specifications of slicing requirements.",
                  "It can quickly disassemble and assemble the feeding and discharging conveyor belt and the round blade group, which is convenient for cleaning and meets the requirements of food hygiene.",
                  "The whole machine adopts waterproof design and is made of stainless steel, so the machine can be washed directly with water.",
                  "The machine adopts international advanced design and is composed of disc cutter, cutter stick and movable baffle plate.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2000x550x1250mm",
                  },
                  {
                    key: "Weight",
                    value: "500kg",
                  },
                  {
                    key: "Capacity",
                    value: "500kg/h",
                  },
                  {
                    key: "Cutting size",
                    value: "6-30mm",
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
                bannerPic: "banner9",
                title: "LM-300D Fresh Meat Strips Cutting Machine",
                desc: "Used for opening and slicing large pieces of fresh boneless meat. Suitable for large, medium and small catering and meat processing enterprises, central kitchens, etc.",
                features: [
                  "The body and the meat cutting part are made of stainless steel, which meets food hygiene standards.",
                  "Sealed stainless steel body, independent knife set, easy to disassemble and easy to clean.",
                  "420 stainless steel blade, special quenching process, high hardness, wear resistance and corrosion resistance.",
                  "Safety protection baffle, micro-motion sensor switch, stop when opening the cover, to protect the safety of operation.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "659x540x935mm",
                  },
                  {
                    key: "Weight",
                    value: "138kg",
                  },
                  {
                    key: "Capacity",
                    value: "1000kg/h",
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
                bannerPic: "banner10",
                title: "LM-813 Cutter European Version",
                desc: "The combined design of the double-knife set is suitable for shredding and striping all kinds of fresh meat at one time. You can also use a set of knives to cut slices of meat.",
                features: [
                  "The appearance design is fashionable, concise and practical.",
                  "European standards, excellent workmanship, high-quality electrical appliances, safety and longevity are guaranteed.",
                  "High-quality stainless steel body, good waterproof performance, easy to clean.",
                  "Imported blade, SUS402 stainless steel material, special quenching process, wear resistance and corrosion resistance, better hardness.",
                  "Two groups of independent knife sets, the parts of the knife set are easy to disassemble and clean.",
                  "Large inlet, high output and simple operation.",
                  "here is an induction safety switch, when the cover is opened, it will automatically cut off the power and stop.",
                  "With universal brake casters, noise-reducing high-strength nylon wheels, which can be moved or fixed flexibly.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "570×620×1028mm",
                  },
                  {
                    key: "Weight",
                    value: "125kg",
                  },
                  {
                    key: "Capacity",
                    value: "800-1000kg/H",
                  },
                  {
                    key: "Inlet size",
                    value: "200x100mm",
                  },
                  {
                    key: "Cutting size",
                    value:
                      "2.5-20mm Not adjustable, need to change the tool set",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "2.2kw",
                  },
                ],
              },
              {
                bannerPic: "banner11",
                title: "LM-803 Medium Capacity Slicer",
                desc: "Suitable for slicing and shredding fresh boneless meat; slicing once and shredding twice.",
                features: [
                  "The appearance design is fashionable, concise and practical.",
                  "European standards, excellent workmanship, high-quality electrical appliances, safety and longevity are guaranteed.",
                  "High-quality all-stainless steel body seamless design, good waterproof performance, easy to clean.",
                  "Imported blade, SUS402 stainless steel material, special quenching process, wear resistance and corrosion resistance, better hardness.",
                  "Independent knife set, easy to disassemble the parts of the knife set, and convenient to clean.",
                  "The operation is simple, safe and convenient.",
                  "With universal brake casters, noise-reducing high-strength nylon wheels, which can be moved or fixed flexibly.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "500x412× 850mm",
                  },
                  {
                    key: "Weight",
                    value: "78kg",
                  },
                  {
                    key: "Capacity",
                    value: "800 kg/H",
                  },
                  {
                    key: "Cutting size",
                    value:
                      "2.5-20mm Not adjustable, need to change the tool set",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.1kw",
                  },
                ],
              },
              {
                bannerPic: "banner12",
                title: "LM-802 Meat Slices Cutting Machine",
                desc: "Suitable for slicing and shredding fresh boneless meat; slicing once and shredding twice.",
                features: [
                  "The appearance design is fashionable, concise and practical.",
                  "European standards, excellent workmanship, high-quality electrical appliances, safety and longevity are guaranteed. 3. High-quality all-stainless steel body seamless design, good waterproof performance, easy to clean.",
                  "Imported blade, SUS402 stainless steel material, special quenching process, wear resistance and corrosion resistance, better hardness.",
                  "Independent knife set, easy to disassemble the parts of the knife set, and convenient to clean.",
                  "The operation is simple, safe and convenient.",
                  "With universal brake casters, noise-reducing high-strength nylon wheels, which can be moved or fixed flexibly.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "500x 362 x 850mm",
                  },
                  {
                    key: "Weight",
                    value: "60kg",
                  },
                  {
                    key: "Capacity",
                    value: "500 kg/H",
                  },
                  {
                    key: "Cutting size",
                    value: "2.5-20mm Not adjustable, thunder tool change set",
                  },
                  {
                    key: "Voltage",
                    value: "220v",
                  },
                  {
                    key: "Power",
                    value: "0.55kw",
                  },
                ],
              },
              {
                bannerPic: "banner13",
                title: "LM-801 Desktop meat slicer",
                desc: "Used for slicing and shredding fresh boneless meat; slicing once and shredding twice. It is suitable for small and medium-sized catering and meat processing enterprises.",
                features: [
                  "Process and technology from Germany.",
                  "Stylish and concise design, the overall body and internal frame are all made of AISI304 stainless steel/",
                  "The stainless steel surface is treated with wire drawing process, which is beautiful and durable.",
                  "High-quality all-stainless steel body seamless design, good waterproof performance, easy to clean.",
                  "Independent knife set, easy to disassemble the parts of the knife set, and easy to clean.",
                  "Imported blade, SUS402 stainless steel material. Special pure fire technology, wear-resistant and corrosion-resistant. Better hardness.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "320x470x490mm",
                  },
                  {
                    key: "Weight",
                    value: "40KG",
                  },
                  {
                    key: "Capacity",
                    value: "250KG/H",
                  },
                  {
                    key: "Power",
                    value: "550w",
                  },
                  {
                    key: "Power supply",
                    value: "220V/50Hz",
                  },
                ],
              },
            ],
          },
          {
            type: "meat-grinder",
            title: "Meat Grinder",
            data: [
              {
                bannerPic: "banner1",
                title: "LM-140 Frozen Meat Grinder",
                desc: "It is suitable for fresh meat and frozen meat at minus eight degrees to minus twelve degrees, for example: pork, beef, mutton, etc. Processing needs. It is especially suitable for medium and small meat products factories.",
                features: [
                  "The whole machine is made of SUS304 stainless steel, the equipment structure is reasonable, and the appearance is beautiful.",
                  "The mechanical performance is stable and reliable, clean and hygienic, and low noise.",
                  "The minced meat parts are easy to disassemble and clean.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LM-140",
                  },
                  {
                    key: "Machine size",
                    value: "1170x700x1150mm",
                  },
                  {
                    key: "Weight",
                    value: "550kg",
                  },
                  {
                    key: "Capacity",
                    value: "1500-2000kg/h",
                  },
                  {
                    key: "Aperture of winch",
                    value: "4/6/8mm",
                  },
                  {
                    key: "Spindle speed",
                    value: "246r/min",
                  },
                  {
                    key: "Power",
                    value: "11kw",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LM-832 Double Reamer Meat Mincer",
                desc: "Used to grind fresh meat or slightly frozen meat into granular mash. Suitable for large, medium and small meat processing enterprises, central kitchens, catering industry, processing plants, hotels, supermarkets, etc.",
                features: [
                  "The body and meat parts are made of stainless steel, which meets food-grade hygiene standards and is easy to clean.",
                  "Lengthen the auger and lengthen the pushing screw to make the minced meat more output.",
                  "The main shaft transmission of meat grinder adopts double-sealed design, which is safe and reliable, and does not pollute food materials. 4. Air-cooled motor can work continuously.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "600x800x1050mm",
                  },
                  {
                    key: "Weight",
                    value: "115kg",
                  },
                  {
                    key: "Capacity",
                    value: "800-1000kg/h",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "3kw",
                  },
                  {
                    key: "Winch size(mm)",
                    value: "0/3/5/9/16",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LM-201 Meat Cutter and Grinder Machine",
                desc: "The 201 cutter cuts the best combination of high output, high quality and low energy consumption. It is suitable for the processing of minced pork, beef, fatty meat, mixed meat, fish and mutton.",
                features: [
                  "Professional meat cutting process.",
                  "Hygienic minced meat process.",
                  "Ultra-low energy consumption.",
                  "Strong reducer.",
                  "Rugged stainless steel structure.",
                  "Twisted net: imported from Italy, brand: SALVADOR.",
                  "Double-sided reamer: imported from Italy, brand: SALVADOR.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "515x480x750mm",
                  },
                  {
                    key: "Weight",
                    value: "88kg",
                  },
                  {
                    key: "Capacity",
                    value: "Ground meat: 300kg/h Slice: 500kg/h",
                  },
                  {
                    key: "Power",
                    value: "1.1kw",
                  },
                  {
                    key: "Power supply",
                    value: "220-240V/50Hz",
                  },
                  {
                    key: "Aperture of winch",
                    value: "3/4.5/6/8/10mm",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LM-829 Classic Meat Mincer",
                desc: "It is suitable for mincing fresh meat or slightly frozen meat.",
                features: [
                  "Stylish and concise design, the overall body and meat parts are made of AISl304 stainless steel.",
                  "Reamers and winches imported from Italy are sharp and durable.",
                  "The meat is cut by a blade instead of squeezing to ensure the meat is delicious.",
                  "High-quality all-stainless steel body seamless design.",
                  "The unique design of the stainless steel grinder parts makes it easy to enter the meat and increase the output.",
                  "The meat grinder parts are easy to disassemble and clean.",
                  "The air-cooled motor is suitable for continuous work. The motor reducer is equipped with a double sealing system, which not only improves the service life, but also makes the vehicle performance safer and more reliable.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "550x470x559mm",
                  },
                  {
                    key: "Weight",
                    value: "80kg",
                  },
                  {
                    key: "Capacity",
                    value: "600kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.8kw",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "LM-828 Small desktop meat grinder",
                desc: "It is suitable for mincing fresh meat or slightly frozen meat.It can be used in meat shops, delicatessen stores, supermarkets, restaurants, small meat processing plants and other places.",
                features: [
                  "Stylish and concise design, the overall body and meat parts are made of AISI304 stainless steel.",
                  "Reamers and winches imported from Italy are sharp and durable.",
                  "The meat is cut by a blade instead of squeezing to ensure the meat is delicious",
                  "High-quality all-stainless steel body seamless design.",
                  "The unique design of stainless steel grinder parts makes it easy to feed meat and increase output.",
                  "The meat grinder parts are easy to disassemble and clean.",
                  "The air-cooled motor is suitable for continuous work. The motor reducer has a double sealing system, which not only improves the service life, but also makes the working performance safer and more reliable.",
                ],
                tech: [
                  {
                    key: "Model",
                    value: "LM-828-1",
                  },
                  {
                    key: "Machine size",
                    value: "429x382x405",
                  },
                  {
                    key: "Weight",
                    value: "26KG",
                  },
                  {
                    key: "Capacity",
                    value: "150KG/H",
                  },
                  {
                    key: "Power",
                    value: "550w",
                  },
                  {
                    key: "Power supply",
                    value: "220-240w",
                  },
                  {
                    key: "Aperture of winch",
                    value: "3/4.5/6/8mm",
                  },
                ],
              },
            ],
          },
          {
            type: "bone-sawing-machine",
            title: "Bone Sawing Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "LM-6048 Automatic Multi-function Bone Saw Machine",
                desc: "Four saw bands/six saw bands/eight saw bands can be customized according to customer requirements, and the sawing width can be customized",
                features: [
                  "Four saw bands/six saw bands/eight saw bands can be customized according to customer requirements, and the sawing width can be customized.",
                  "Custom-designed loading table, removable, easy to clean and replace the saw blade.",
                  "There is a jagged material jam design on the pipeline, which can effectively prevent the shaking of the raw material during the sawing process.",
                  "The saw blade adopts front and rear staggered layout design, and the saw blade cuts straightness.",
                  "Safety protection devices are installed in multiple parts of the whole machine.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1400x800x1735mm",
                  },
                  {
                    key: "Weight",
                    value: "about 320KG",
                  },
                  {
                    key: "Feed height",
                    value: "150mm",
                  },
                  {
                    key: "Height of discharge platform",
                    value: "980mm",
                  },
                  {
                    key: "Saw blade length",
                    value: "2550",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "2.2KW",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LM-249A Bone Halves Cutting Machine",
                desc: "The whole machine is made of stainless steel, and the surface is sandblasted",
                features: [
                  "Heavy frame structure design.",
                  "The whole machine is made of stainless steel, and the surface is sandblasted.",
                  "Improved saw blade tension adjustment system.",
                  "It adopts Italian Lame saw blade, which is sharp and durable, and the saw blade is clear and sharp.",
                  "Equipped with protective cover, feeding is convenient, safe and accurate.",
                  "Equipped with protective cover and door safety switch to ensure cutting safety.",
                  "The metal start switch is equipped with an indicator light. The control system adopts 24VDC safety voltage.",
                  "Equipped with a motor brake system, it can be stopped in 0.5s by pressing the stop switch, opening the protective cover or the door saw blade.",
                  "The height of the clamping conveyor belt is 85mm, and the width can be adjusted according to the diameter of the trotters/",
                  "Blue food grade gripping conveyor belt.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1400x800x1735mm",
                  },
                  {
                    key: "Weight",
                    value: "252KG",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LM-821 Rib Chopping Machine",
                desc: "Cut strips of fresh or frozen spare ribs into pieces. It is recommended to use it with a bone saw.",
                features: [
                  "The whole machine is made of stainless steel and is easy to operate; the conveyor belt is detachable for easy cleaning.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "800×580×1250mm",
                  },
                  {
                    key: "Weight",
                    value: "100kg",
                  },
                  {
                    key: "Capacity",
                    value: "500kg/H",
                  },
                  {
                    key: "Cutting thickness",
                    value: "1-40mm Adjustable",
                  },
                  {
                    key: "Conveyor belt width",
                    value: "120mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "2.25 kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LM-360 Commercial Bone Saw Cutting Machine",
                desc: "Suitable for cutting all kinds of animal bones, frozen meat, etc.",
                features: [
                  "The saw blade belt wheel is made of high-precision stainless steel precision castings with excellent performance.",
                  "Equipped with a thickness adjustment plate, which is convenient to adjust the processing thickness, and the processing size is regular.",
                  "Stainless steel body, the surface is treated with acid resistance, beautiful and generous, safe and sanitary.",
                  "Equipped with a safety lever switch, when the cover is opened, the machine stops working.",
                  "Good waterproof performance and easy to clean.",
                  "Low noise, high horsepower and low material loss.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1175x875x1760mm",
                  },
                  {
                    key: "Weight",
                    value: "220kg",
                  },
                  {
                    key: "Saw blade length",
                    value: "2715mm",
                  },
                  {
                    key: "Cutting height/width	",
                    value: "360/350mm",
                  },
                  {
                    key: "Working desk size",
                    value: "750x1010mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.8kw",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "LM-260 Bone Saw Cutting Machine",
                desc: "Suitable for cutting all kinds of animal bones, frozen meat, etc.",
                features: [
                  "The saw blade belt wheel is made of high-precision stainless steel precision castings with excellent performance.",
                  "Equipped with a thickness adjustment plate, which is convenient to adjust the processing thickness, and the processing size is regular.",
                  "The stainless steel body, the surface is treated with acid resistance, beautiful and generous, safe and sanitary.",
                  "Equipped with a safety lever switch, when the cover is opened, the machine stops working.",
                  "Good waterproof performance and easy to clean.",
                  "Low noise, high horsepower and low material loss.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "750×650x1550mm",
                  },
                  {
                    key: "Weight",
                    value: "80kg",
                  },
                  {
                    key: "Saw blade length",
                    value: "1900mm",
                  },
                  {
                    key: "Cutting thickness",
                    value: "220/210mm",
                  },
                  {
                    key: "Working desk size",
                    value: "520×670 mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.1kw",
                  },
                ],
              },
              {
                bannerPic: "banner6",
                title: "LM-817 Bone Saw Cutting Machine",
                desc: "Used for sawing frozen meat or meat with bones.",
                features: [
                  "The saw blade belt wheel is made of high-precision stainless steel precision castings with excellent performance.",
                  "Equipped with a thickness adjustment plate, which is convenient to adjust the processing thickness, and the processing size is regular.",
                  "Stainless steel body, the surface is treated with acid resistance, beautiful and generous, safe and hygienic.",
                  "The body is small and exquisite, the noise is small, the horsepower is large, and the material loss is small.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "500×445×850mm",
                  },
                  {
                    key: "Weight",
                    value: "40kg",
                  },
                  {
                    key: "Saw blade length",
                    value: "1650mm",
                  },
                  {
                    key: "Cutting height/width",
                    value: "250/180mm",
                  },
                  {
                    key: "Working desk size",
                    value: "500x390mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.1kw",
                  },
                ],
              },
              {
                bannerPic: "banner7",
                title: "LM-809-36 Cutting Machine Big Steak Cutter",
                desc: "It can slice and dice frozen meat, fresh meat, hamburger meat, ribs, fish and other ingredients. It is widely used in the production and processing of beef steak, pork chop, beef and sheep.",
                features: [
                  "The safety protection performance is good. After the discharge chute, door, and feed chute are opened, the machine stops running immediately.",
                  "The tool is easy to disassemble, and the material claw is specially designed to prevent the material from slipping.",
                  "Spindle reducer (German Nord brand), electrical components (contactor and breaker are Siemens), PLC and relay are Omron.",
                  "Wide application range and large output.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1820X1200×1550mm",
                  },
                  {
                    key: "Weight",
                    value: "700KG",
                  },
                  {
                    key: "Cutting speed",
                    value: "300 pieces/min",
                  },
                  {
                    key: "Cutting thickness",
                    value: "1-30mm Adjustable",
                  },
                  {
                    key: "Maximum feed size",
                    value: "650mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "5.5kw",
                  },
                ],
              },
              {
                bannerPic: "banner8",
                title: "LM-809-25 Commercial Meat Steak Cutter",
                desc: "It can slice and dice frozen meat, fresh meat, hamburger meat, ribs, fish and other ingredients. It is widely used in the production and processing of beef steak, pork chop, beef and sheep.",
                features: [
                  "The safety protection performance is good. After the discharge chute, door, and feed chute are opened, the machine stops running immediately.",
                  "The tool is easy to disassemble, and the material claw is specially designed to prevent the material from slipping.",
                  "Spindle reducer (German Nord brand), electrical components (contactor and breaker are Siemens), PLC and relay are Omron.",
                  "Wide application range and large output.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "2580x980x1350mm",
                  },
                  {
                    key: "Weight",
                    value: "600kg",
                  },
                  {
                    key: "Cutting speed",
                    value: "200Slices/minute",
                  },
                  {
                    key: "Cutting thickness",
                    value: "1-32mm Adjustable",
                  },
                  {
                    key: "Maximum feed size",
                    value: "700mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "5kw",
                  },
                ],
              },
              {
                bannerPic: "banner9",
                title: "LM-809-17 Commercial Meat Steak Cutter",
                desc: "It can slice and dice frozen meat, fresh meat, hamburger meat, ribs, fish and other ingredients. It is widely used in the production and processing of beef steak, pork chop, beef and sheep.",
                features: [
                  "The safety protection performance is good. After the discharge chute, machine door, and feed chute are opened, the machine will stop running immediately.",
                  "The tool is easy to disassemble, and the material claw is specially designed to prevent the material from slipping.",
                  "Spindle reducer (German Nord brand), electrical components (contactor and breaker are Siemens), PLC and relay are Omron.",
                  "Wide application range and large output.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1700x800x1250mm",
                  },
                  {
                    key: "Weight",
                    value: "400kg",
                  },
                  {
                    key: "Cutting speed",
                    value: "160 Slices/minute",
                  },
                  {
                    key: "Cutting thickness",
                    value: "1-32mm Adjustable",
                  },
                  {
                    key: "Maximum feed size",
                    value: "680mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "3.4kw",
                  },
                ],
              },
            ],
          },
          {
            type: "sausage-machine",
            title: "Sausage Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "LM-600 Vertical Sausage Filling Machine",
                desc: "It is suitable for filling and forming of raw materials such as beef and mutton rolls and steaks, filling and forming of ham sausage, and filling and forming of minced meat and lump meat. It can also be used in the field of meat restructuring and processing.",
                features: [
                  "The appearance is beautiful, the standard of the formed meat roll is uniform, and the filling effect is firm and full.",
                  "The pressure regulating device adjusts the fullness of the product to meet the diverse needs of customers.",
                  "Customized molds, customized according to customer's production requirements, product processing consistency is good.",
                  "Simple cleaning and maintenance, easy to disassemble and assemble different specifications of silos.",
                  "The super wide food-grade workbench is convenient for placing pre-installed meat pieces or cutting and changing meat pieces in advance. Note: It can be customized according to customer needs.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1870×580×1400mm",
                  },
                  {
                    key: "Weight",
                    value: "160kg",
                  },
                  {
                    key: "Trough length",
                    value: "600mm",
                  },
                  {
                    key: "Die diameter",
                    value: "70-140mm",
                  },
                  {
                    key: "Air pressure",
                    value: "0.5mpa",
                  },
                  {
                    key: "Meat plate size",
                    value: "1000x600mm",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LM-840 Automatic Sausage Filler Machine",
                desc: "Using various livestock and poultry meat emulsions as raw materials, it can be filled with twisted single intestine with fixed weight, and can also be continuously filled with long intestine. The weight of single intestine is between 50-1000 grams. There is a scale that is continuously adjustable, and the quantitative is accurate, and the error is less than 2%. Suitable for small and medium-sized meat processing plants.",
                features: [
                  "Adopting domestic advanced technology, reasonable design, compact structure, and made of SuS304 stainless steel, which meets the requirements of food sanitation.",
                  "Convenient operation, simple adjustment, only one person is required to operate.",
                  "Continuous operation, no need to stop when feeding, high production efficiency.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "640x640x1430mm",
                  },
                  {
                    key: "Weight",
                    value: "120kg",
                  },
                  {
                    key: "Capacity",
                    value: "100-500kg/h",
                  },
                  {
                    key: "Voltage",
                    value: "220V",
                  },
                  {
                    key: "Hopper capacity",
                    value: "60L",
                  },
                  {
                    key: "Power",
                    value: "20v",
                  },
                ],
              },
            ],
          },
          {
            type: "peeling-and-fascia-removal-machine",
            title: "Peeling And Fascia Removal Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "Meat Tenderizer Machine",
                desc: "Suitable for broken tendons and loose meat of meat; mostly used for making pork chops and steaks.",
                features: [
                  "Automated advanced meat breaking equipment, with large output and good efficiency.",
                  "Advanced tooth profile stepping technology, good effect, convenient operation and excellent craftsmanship.",
                  "Using high-density special design to cut small blades obliquely, from different angles, without changing the shape of the meat, it effectively cuts the muscle fiber tissue, so as to achieve a very good tenderization effect.",
                ],
                sort: true,
                tech: [
                  ["Device model", "LM-540N", "LM-980N"],
                  ["Machine size", "1400x620×1300mm", "1980×850×1551mm"],
                  ["Weight", "150kg", "400kg"],
                  ["Contacts", 544, 980],
                  ["Up and down frequency", "56times/min", "87times/min"],
                  [
                    "Conveyor belt stride",
                    "50-100mm Adjustable",
                    "50-100mm Adjustable",
                  ],
                  [
                    "Maximum size for admission",
                    "300（w)* 120(H)mm",
                    "460 (w)* 140(H)mm",
                  ],
                  ["Voltage", "380v", "380v"],
                  ["Power", "2.2kw", "3kw"],
                ],
              },
              {
                bannerPic: "banner2",
                title: "LM-826 Loose Meat Tendon Cutting Machine",
                desc: "Suitable for broken tendons and loose meat of meat; mostly used for making pork chops and steaks.",
                features: [
                  "The loosening force can be adjusted, the ribs of the first knife set are broken, and the loosening of the first knife set can be adjusted according to needs.",
                  "The whole machine is stainless steel, safe and hygienic.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "510×420×910mm",
                  },
                  {
                    key: "Weight",
                    value: "75kg",
                  },
                  {
                    key: "Maximum feeding size",
                    value: "200mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "0.75 kw",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LM-823 Fascia Removal Machine",
                desc: "Used to remove fascia from pork, beef, veal, lamb, turkey, poultry, etc.",
                features: [
                  "The whole machine is made of high-quality smooth stainless steel, which meets international food safety standards.",
                  "It can effectively remove the fascia on the meat of various parts.",
                  "The operation is safe and comfortable, and the foot switch lever is designed with ergonomic principles to make it more comfortable.",
                  "Easy to disassemble and assemble, easy to clean and maintain.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "850×610x980mm",
                  },
                  {
                    key: "Weight",
                    value: "180kg",
                  },
                  {
                    key: "Capacity",
                    value: "38m/min",
                  },
                  {
                    key: "Cutting thickness",
                    value: "0.1-2mm Adjustable",
                  },
                  {
                    key: "Cutting width",
                    value: "520mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "0.75kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "Lm-822 Automatic Pork Peeling Machine",
                desc: "Suitable for skinless meat.",
                features: [
                  "Stainless steel body, in line with international food safety standards.",
                  "The peeling thickness can be flexibly adjusted.",
                  "Using German blades, sharp and durable",
                  "The machine has precise structure, smooth operation, quiet and low noise.",
                  "Foot pedal operation safety switch, safer operation.",
                  "Automated operation, safe and quick operation by workers, only need to lay the meat on the conveyor belt.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1400x1050x1250mm",
                  },
                  {
                    key: "Weight",
                    value: "255kg",
                  },
                  {
                    key: "Capacity",
                    value: "26m/min",
                  },
                  {
                    key: "Cutting thickness",
                    value: "0.5-6mmAdjustable",
                  },
                  {
                    key: "Peeling width",
                    value: "620mm",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "Pork Peeling Machine",
                desc: "Suitable for skinless meat.",
                features: [
                  "The peeling thickness can be adjusted.",
                  "Using German blades, sharp and durable.",
                  "The machine has precise structure, smooth operation, quiet and low noise.",
                  "Foot pedal operation safety switch, safer operation.",
                ],
                sort: true,
                tech: [
                  ["Model", "LM-435", "LM-500"],
                  ["Machine size", "750×710×880mm", "815x710x880mm"],
                  ["Capacity", "18m/min", "18m/min"],
                  ["Weight", "105kg", "135kg"],
                  [
                    "Cutting thickness",
                    "0.5-6mmAdjustable",
                    "0.5-6mmAdjustable",
                  ],
                  ["Peeling width", "430mm", "500mm"],
                  ["Voltage", "380v", "380v"],
                  ["Power", "0.75 kw", "0.75kw"],
                ],
              },
            ],
          },
          {
            type: "mixing-machine",
            title: "Mixing Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "LM-834Bowl Cutter",
                desc: "Suitable for filling and meat processing.",
                features: [
                  "Good performance.",
                  "Adjustable working speed, SUS304 Stainless Steel hygienic style materials.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1930×1150×1200mm",
                  },
                  {
                    key: "Weight",
                    value: "450kg",
                  },
                  {
                    key: "Discharge mode",
                    value: "Automatic discharging",
                  },

                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "22.23w",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "Vacuum Tumbler",
                desc: "It is suitable for masonry, rolling and kneading of meat products, helping to improve meat quality and tenderizing meat products.",
                features: [
                  "The automatic vacuum design can effectively shorten the laying time and improve the pickling efficiency. ",
                  "The pickling time can be set freely, the range of 0-12H is adjustable.",
                ],
                sort: true,
                tech: [
                  ["Model", "LM-200L", "LM-300L", "LM- 500L"],
                  [
                    "Machine size",
                    "980×1450×150mm",
                    "1230×1550 ×1650mm",
                    "1760×1830×1790mm",
                  ],
                  ["Weight", "280kg", "360kg", "470kg"],
                  ["Rolling capacity", "200L", "300L", "500L"],
                  ["Turn around", "6-8r.p.m", "6-8r.p.m", "6-8r.p.m"],
                  ["Voltage", "380v", "380v", "380v"],
                  ["Power", "2.3 kw", "2.5 kw", "3.7Kw"],
                ],
              },
              {
                bannerPic: "banner3",
                title: "LM-835 Single Shaft Mixer",
                desc: "It is suitable for mixing and seasoning meat, fillings, seasonings and other materials.",
                features: [
                  "The bearing has superior waterproof function, effectively prolonging the service life of the bearing.",
                  "Special rotating shaft design can stir materials at 360 degrees.",
                  "The forward and reverse time and total mixing time can be set freely.",
                ],
                tech: [
                  {
                    key: "Machine size",
                    value: "1550×650×1070mm",
                  },
                  {
                    key: "Weight",
                    value: "120kg",
                  },
                  {
                    key: "Capacity",
                    value: "90L",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "clean-vegetable-processing-equipment",
        data: [
          {
            type: "leafy-vegetable-processing",
            title: "Leafy Vegetable Processing",
            data: [
              {
                bannerPic: "banner1",
                title: "LC-04 Vortex Cleaning Washing machine",
                desc: "Suitable for cleaning leafy vegetables, rhizomes and pickled fruits and vegetables, such as: cabbage, lettuce, spinach, pickled radish, kohlrabi, etc.",
                features: [
                  "Cyclone cleaning plus bubble cleaning design, high-pressure gas injection pipe is arranged at the bottom of the cylinder, which effectively separates the vegetables into clumps. Exhaust pipe is more equipped There is a pressure relief valve to adjust the bubble strength when cleaning different materials.",
                  "Adopting vibratory conveying instead of traditional conveyor belt conveying, with simpler structure, less cleaning time than traditional conveyor belts, and more convenient to use; the conveying surface in contact with the material is designed with punching holes, which effectively separates the debris in the material.",
                  "Automatic water replenishment design, the circulating water tank and the main water tank are equipped with automatic water replenishment devices, which effectively saves water.",
                ],
                sort: true,
                tech: [
                  [
                    "Model",
                    "Machine size",
                    "Yield",
                    "Weight",
                    "Voltage",
                    "Power",
                  ],
                  [
                    "LC-04 (N)",
                    "4200*1460*1850mm",
                    "1000kg/H",
                    "300kg",
                    "380V",
                    "6.46KW",
                  ],
                  [
                    "LC-04",
                    "4300*1100*1830mm",
                    "1000kg/H",
                    "300kg",
                    "380V",
                    "6.46KW",
                  ],
                ],
              },
              {
                bannerPic: "banner2",
                title: "LC-12 Crates Washing Machine",
                desc: "The frame washing machine is a novel continuous revolving basket cleaning equipment. The whole machine design is divided into 3 parts, namely the first cleaning section,Two stages of water purification and cleaning. In the primary cleaning section, a heating device can be added to clean the turnover basket by spraying with hot water and alkali as needed.",
                features: [
                  "The whole machine is designed with 304 stainless steel, no rust and corrosion resistance;",
                  "The conveying device adopts a stepless speed regulating motor, and the cleaning time and speed are adjustable, which is suitable for cleaning the turnover baskets of different cleanliness;",
                  "The design of this machine adopts high-pressure water spray cleaning. The nozzle adopts high-temperature resistant, high-pressure stainless steel universal nozzle. The cleaning angle is adjustable. There are high-pressure water spray devices inside the cleaning section, up and down, to ensure the cleanliness of the cleaning;",
                  "The water pump adopts a stainless steel high-pressure centrifugal pump, which has a large cleaning force and a better cleaning effect, and will not rust and pollute the water source in the water tank due to water remaining in the pump;",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "5000x1660x1700mm",
                  },
                  {
                    key: "Capacity",
                    value: "500-800pcs/h",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Heating power",
                    value: "36kw",
                  },
                  {
                    key: "Equipment power",
                    value: "7.5KW",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "Pre-washing Lifting",
                desc: "This machine mainly plays the role of lifting and conveying. The soaking hoist is a machine composed of a water tank and a hoist. The materials are first poured into the water tank for soaking, and then the hoist is lifted to the next process to solve the inconvenience of manual feeding; In the assembly line, this equipment is usually used in conjunction with other equipment with a higher inlet height to meet the needs of production automation.",
                features: [
                  "Meet the needs of production automation, simple operation, compact structure and beautiful appearance.",
                  "The stainless steel of the whole machine is easy to clean and maintain.",
                  "Equipment of different specifications can be customized according to customer needs.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Size",
                    value: "2740X880X1660mm",
                  },
                  {
                    key: "Capacity",
                    value: "1000-1500 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "0.55KW",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title: "LC-10 Removable Lifting",
                desc: "This machine mainly plays the role of lifting and conveying materials, and solves the problem of manual feeding. It is usually used with an assembly line.",
                features: [
                  "Meet the needs of production automation, simple operation, compact structure and beautiful appearance.",
                  "The side plates on both sides of the whole machine can be rotated 90°, and the belt can be easily taken out, which is convenient to disassemble and facilitate cleaning.",
                  "Equipment of different specifications can be customized according to customer needs.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "2800X600X2500mm",
                  },
                  {
                    key: "Capacity",
                    value: "2000 kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "0.75KW",
                  },
                ],
              },
              {
                bannerPic: "banner5",
                title: "LC-09 Conveyor selection table",
                desc: "It is used for the selection, pretreatment, cutting and transportation of vegetables, fruits and other materials. It is the front-end pretreatment equipment connected to the production line.",
                features: [
                  "Reasonable design, low energy consumption, stable performance; high efficiency, saving time and labor. The equipment has single-layer, double-layer, and three-layer conveying and picking tables, all equipped with a working table with a cutting board. The conventional station configuration has four stations, six stations, and eight stations.",
                  "Single-layer conveyor picking table, using conveyor belt to run material transportation, manually remove waste or unqualified parts, and put them into the waste port. The qualified products will go to the next process with the conveyor belt for processing, and the conveying speed can be adjusted. .",
                  "Double-layer conveying and picking table, the upper layer can be used for conveying and picking, and the lower layer is for conveying waste, which is more convenient and efficient in waste disposal than the single-layer picking table.",
                  "Three-layer conveying and picking table, the upper layer conveys product materials, the middle layer is for selection and conveying, and the lower layer is for waste materials. The equipment integrates the functions of raw material conveying, sorting and cutting, good product conveying, waste product conveying, and waste product collection. The degree of automation is high, and a lot of labor is saved.",
                  "Equipment of different specifications can be customized according to customer needs.",
                ],
                sort: true,
                tech: [
                  [
                    "Product name",
                    "Single layer conveyor picking table",
                    "Double-layer conveyor picking table",
                    "Three-layer conveyor picking table",
                  ],
                  [
                    "Equipment size",
                    "Subject to the actual product, can be customized",
                  ],
                  [
                    "Capacity",
                    "1000-2000KG/H   Can be customized",
                    "2000-3000 KG/H  Can be customized",
                    "2000-3000 KG/H   Can be customized",
                  ],
                  ["Voltage", "380V", "380V", "380V"],
                  ["Power", "0.75kw", "0.8Kw", "1.2KW"],
                ],
              },
              {
                bannerPic: "banner6",
                title: "LC-5000 Automatic bubble cleaning machine",
                desc: "This machine is suitable for the cleaning, disinfection, impurity removal, and transportation of leafy root vegetables, and is suitable for clean vegetable processing centers, group meal processing centers, food processing plants, etc.",
                features: [
                  "This machine is one of the large-scale cleaning machines produced by our company. It adopts a net-chain full-process conveyor belt and uses the principle of high-pressure air bubble to make water boil under the use of air, and spray water through bubble blasting and high-flow water pumps. And the triple function of the spray system, without damaging the ingredients, can efficiently clean leafy vegetables and soft-skinned vegetables and fruits, and quickly separate, filter and discharge sediment, impurities, and debris.",
                  "The whole machine is made of 304 stainless steel, with high mechanical strength, beautiful and durable.",
                  "Double water tanks, recycling water use, more water saving.",
                  "The equipment can be connected with multiple units to form a continuous production line, and customers can flexibly match according to the situation and capacity requirements. 5. It can be equipped with an ozone generator to sterilize and disinfect the materials during cleaning, making vegetables safer to eat.",
                  "The equipment can be connected with multiple units to form a continuous production line, and customers can flexibly match according to the situation and capacity requirements.",
                  "It can be equipped with an ozone generator to sterilize and disinfect the materials during cleaning, making vegetables safer to eat.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "5000x1550x1580mm",
                  },
                  {
                    key: "Capacity",
                    value: "1000-2500kg/h",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "6.25kw",
                  },
                ],
              },
              {
                bannerPic: "banner7",
                title: "LC-11 Whole vegetable washing line",
                desc: "It is mainly suitable for cleaning whole vegetables that do not need to be cut, such as leeks, spinach, green onions and other materials. The whole vegetable washing line includes: elevator + whole vegetable washing machine + whole vegetable washing machine + net chain air dryer.",
                features: [
                  "Use the aeration pump to bubbling the clean water to keep the material tumbling, and then pass the spray device to clean the material. Pour the material into the feed inlet, and the material will move forward with the conveyor belt. During this process, the material will be cleaned by surfing, bubbling and spraying.",
                  "The circulating water tank filter device can ensure the cleanliness of the water in the main water tank and at the same time prevent impurities from blocking the water inlet of the water pump.",
                  "It meets the needs of production automation, with easy operation and compact structure.",
                  "The conveying blower has changed the problems of vegetable leaf damage caused by traditional centrifugal air dryers and incomplete water removal by traditional air dryers.",
                  "After cutting and cleaning, the vegetables and fruits enter the conveying air dryer, and the conveying materials are moved forward on the belt. During the conveying process, the excess water on the surface of the materials is blown off by multiple strong winds, so that the surface of the vegetables and fruits is water-free and bright.",
                  "The body is made of 304 stainless steel, with high mechanical strength and durability, which meets the requirements of food hygiene.",
                  "The design of the whole machine is reasonable, the cleaning effect is good, the sealing is good, and it is easy to clean.",
                  "Equipment of different specifications can be customized according to customer needs.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "14500×1550X1580MM",
                  },
                  {
                    key: "Yield",
                    value: "1000-2000T/H",
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
                bannerPic: "banner8",
                title: "LC-01 Leafy vegetables cleaning and processing line",
                desc: "It is suitable for the pretreatment of leafy vegetables in clean vegetable processing and distribution centers, central kitchens, group meal processing centers, and canteens of enterprises and institutions. It completes the procedures of selection, removal, cutting, cleaning, conveying, air drying, draining, and dehydration. For example: Chinese cabbage, spinach, cabbage, watercress and other leafy vegetables.",
                features: [
                  "The design of the whole line is reasonable, and the unique vortex + bubble cleaning process can efficiently clean vegetables without damaging them, and quickly separate, filter and discharge sediment, impurities, and debris to achieve a very good cleaning. Effect.",
                  "There are sewage outlets on both sides of the vegetable washing machine to facilitate the flow of debris, residues and other debris; the bottom of the tank has a sediment filter device and a V-shaped sewage discharge design to facilitate the flow of sediment.",
                  "Circulating water tank design, more water saving, can also be equipped with filter tank and ozone sterilization disinfection device.",
                  "The body is made of 304 stainless steel, with high mechanical strength and durability, which meets the requirements of food hygiene. ",
                  "The core accessories are imported with original packaging, with good sealing performance and long service life.",
                  "According to the customer's site conditions and needs, we can plan, design and customize different matching production lines, or different specifications of equipment",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "19000x1500x1700mm",
                  },
                  {
                    key: "Capacity",
                    value: "1000-2000kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                ],
              },
            ],
          },
          {
            type: "roots-vegetable",
            title: "Roots Vegetable",
            data: [
              {
                bannerPic: "banner1",
                title: "LC-13 Fruit Brush Washing Machine",
                desc: "Used to clean the surface of small fruits, such as small tomatoes, dates, green plums, etc. Can be installed on the assembly line, automatic production, low labor intensity.",
                features: [
                  "Wave-shaped brush cleaning, the cleaning surface is wider, and the cleaning effect is better.",
                  "Snap-in 360-degree rotatable nozzles can prevent clogging and are easy to replace.",
                  "Protective upper cover to prevent splashing water.",
                  "The surface of the processed fruit has no residues of pesticides, dust and other dirt on the surface.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "2500x1200x1050mm",
                  },
                  {
                    key: "Weight",
                    value: "300kg",
                  },
                  {
                    key: "Capacity",
                    value: "800-1000kg/h",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "1.87kw",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title: "LC-02 Roots vegetable cleaning and processing line",
                desc: "It is suitable for the pretreatment of root vegetables in clean vegetable processing centers, central kitchens, food processing plants, and canteens of enterprises and institutions. It completes the procedures of preliminary cleaning, peeling, cutting, fine washing, conveying, air drying, draining, and dehydration. For example: potatoes, carrots, taro and other root vegetables.",
                features: [
                  "The design of the whole line is reasonable, and the unique vortex + bubble cleaning process can achieve a very good cleaning effect without damaging the ingredients.",
                  "Sewage outlets are designed on both sides of the vegetable washing machine to facilitate the flow of debris, residues and other debris; the bottom of the tank has a sediment filter device and a V-shaped sewage discharge design to facilitate the flow of sediment.",
                  "Circulating water tank design, more water saving, can also be equipped with filter tank and ozone sterilization device.",
                  "The body is made of 304 stainless steel, which is durable and meets food hygiene requirements.",
                  "The core accessories are imported with original packaging, with good airtightness and easy cleaning.",
                  "According to the customer's site conditions and needs, we can plan, design and customize different matching production lines, or different specifications of equipment.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "25000x1300x1680mm",
                  },
                  {
                    key: "Capacity",
                    value: "1000-2000kg/H",
                  },
                  {
                    key: "Voltage",
                    value: "380V",
                  },
                  {
                    key: "Power",
                    value: "18kw",
                  },
                ],
              },
            ],
          },
          {
            type: "vegetable-and-fruit-packaging",
            title: "Vegetable And Fruit Packaging",
            data: [],
          },
        ],
      },
      {
        type: "packaging-equipment",
        data: [
          {
            type: "vacuum-packaging-machine",
            title: "Vacuum Packaging Machine",
            data: [
              {
                bannerPic: "banner1",
                title:
                  "LP-600A Automatic Modified Atmosphere Packaging Machine",
                desc: "Suitable for packaging cold fresh meat, cooked stewed food, box lunch, bread and pastry, etc. The modified atmosphere packaged food can better maintain the original taste, color, shape and nutrition of the food, and at the same time, combined with its own food technology, it can achieve a longer shelf life. This machine is suitable for box packaging of all kinds of foods. It continuously and automatically completes vacuuming, filling with mixed fresh-keeping gas (usually a mixed gas of carbon dioxide, nitrogen, and oxygen), sealing packaging, cutting, and discharging of packaged products (assembly line: connectable Metal detection, weighing, labeling system)",
                features: [
                  "This machine adopts the Omron PLC control program, and the programmable logic controller (PLC) cooperates with the touch screen to realize the man-machine interface dialogue. Each part of the action and control parameters can be set and modified by the PLC. Using Panasonic servo drive to control the operation action, the operation is accurate and the performance is stable.",
                  "The whole machine is made of SUS304 food grade stainless steel material and acid-proof aluminum alloy, and the surface of the equipment is easy to clean; it meets the national food hygiene selection equipment standard.",
                  "Parameters such as sealing pressure, temperature and time can be precisely controlled (0.01 second) to ensure that the sealing of products with different packaging materials achieves the desired effect.",
                  "The shape of the mold can be customized according to the packaging box style selected by the customer.",
                  "The maximum width of the roll film: 750mm, the maximum diameter of the roll film: 280mm",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "4100x1250x1800mm",
                  },
                  {
                    key: "Capacity",
                    value: "400-600box/h",
                  },
                  {
                    key: "Voltage",
                    value: "220v/50Hz",
                  },
                  {
                    key: "Weight",
                    value: "500KG",
                  },
                  {
                    key: "Power",
                    value: "3.5KW",
                  },
                  {
                    key: "Maximum box size（Two boxes)",
                    value: "250x20x80mm",
                  },
                ],
              },
              {
                bannerPic: "banner2",
                title:
                  "LP-103 Automatic Quantitative Weighing Packaging Machine",
                desc: "It is suitable for quantitative weighing of various granular, strip, block and irregular shaped materials, such as washing and cutting processed fruits and vegetables, puffed food, beans, cereals, quick-frozen food, pet food, various snack foods, etc.",
                features: [
                  "The perfect combination of high precision and high speed, the best combination is instantaneously optimized from a wealth of weight combinations through computer calculations.",
                  "Using high-precision digital weighing sensor for accurate measurement, Chinese/English/Korean/Western and other languages LCD display operating systems are available for selection.",
                  "It has super-strong fault self-diagnosis ability, thus effectively reducing the mechanical failure rate. 4. Equipped with a powerful help menu, allowing you to operate more easily.",
                  "Powerful automatic data statistics function, record the total weight, total number of packages, qualification rate and other indicators of each batch of production.",
                  "With the function of counting grains, it can fulfill your needs in more aspects.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "1120×1120×1220mm",
                  },
                  {
                    key: "Weight",
                    value: "400kg",
                  },
                  {
                    key: "Weighing range",
                    value: "3-6500g",
                  },
                  {
                    key: "Speed",
                    value: "80 bags/min",
                  },
                  {
                    key: "Precision",
                    value: "土0.3-3g",
                  },
                  {
                    key: "Voltage",
                    value: "220v",
                  },
                  {
                    key: "Power",
                    value: "1.5kw",
                  },
                ],
              },
              {
                bannerPic: "banner3",
                title: "LP-102 Double Chamber Vacuum Packaging Machine",
                desc: "It is suitable for vacuum packaging of various food materials to prevent oxidation, discoloration, and mildew of the product, and moisture-proof to achieve the purpose of extending the storage period of the product.",
                features: [
                  "The appearance design of the machine is reasonable and beautiful.",
                  "Adopt high-quality vacuum pump system, the number of vacuum pumps can be configured up to 3, with better performance and higher efficiency.",
                  "The selection of electrical components is standardized, and the safety, reliability and durability of the product are guaranteed.",
                  "The use of materials for the vacuum chamber body meets food-grade hygiene requirements, and exceeds the standard thickness and strength requirements, ensuring the requirements for frequent use of the equipment.",
                  "The enlarged and deepened trough can be specially customized to facilitate the packaging of large materials.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "1450×750×960mm",
                  },
                  {
                    key: "Weight",
                    value: "200kg",
                  },
                  {
                    key: "Sealing size",
                    value: "600×10mm",
                  },
                  {
                    key: "Vacuum chamber size",
                    value: "600×480×110",
                  },
                  {
                    key: "Voltage",
                    value: "380v",
                  },
                  {
                    key: "Power",
                    value: "2kw",
                  },
                ],
              },
              {
                bannerPic: "banner4",
                title:
                  "LP-450 Semi-Automatic Modified Atmosphere Packaging Machine",
                desc: "Suitable for packaging fresh meat, fruits, vegetables (clean vegetables), box lunches, breads, etc. Modified atmosphere packaged foods better maintain the original taste, color, shape and nutrition of the food, and at the same time, combined with its own food technology, it can achieve a longer shelf life.",
                features: [
                  "According to the different packaging materials, the vacuum pump can be used to replace the goods and the vacuum generator can be used to vacuum and inflate the product to keep fresh packaging;",
                  "Non-standard customized equipment can be made according to the actual packaging shape and output requirements;",
                  "The packaging mold can be customized according to different needs, made of aluminum alloy material, which meets the requirements of food hygiene.",
                  "The maximum width of the roll film: 420mm, the maximum diameter of the roll film: 380mm.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "1150×1100x1750mm",
                  },
                  {
                    key: "Capacity",
                    value: "400-600box/h",
                  },
                  {
                    key: "Voltage",
                    value: "6220w/50Hz",
                  },
                  {
                    key: "Weight",
                    value: "500kg",
                  },
                  {
                    key: "Power",
                    value: "3.5kw",
                  },
                  {
                    key: "Maximum box size",
                    value: "250x200x80mm",
                  },
                ],
              },
            ],
          },
          {
            type: "pillow-packaging-machine",
            title: "Pillow Packaging Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "LP-104 Pillow Type Automatic Packaging Machine",
                desc: "It is suitable for packaging whole vegetables, fruits or fruit and vegetable products after cutting, and can realize automatic assembly line work. Packaging can buffer the adverse effects of excessively high and low ambient temperatures on the product, prevent the product from being contaminated by dust and microorganisms, and reduce the spread of pests and diseases and the product's water loss and wilting. In the process of storage, transportation and sales, packaging can reduce the damage caused by friction, collision and extrusion between products, so that the products can maintain good stability in circulation.",
                features: [
                  "Double inverter control, the bag length is set and cut immediately, no need to adjust the idling, one step is in place, saving time and film.",
                  "Man-machine interface, convenient and quick parameter setting. Fault self-diagnosis function, fault display is clear at a glance.",
                  "High-sensitivity photoelectric eye color mark tracking, digital input of the sealing and cutting position, so that the sealing and cutting position is more accurate.",
                  "Independent PID control of temperature, better suitable for various packaging materials. Positioned stop function, no sticking to the knife,",
                  "No waste of packaging film materials.",
                  "The transmission system is simple, the work is more reliable, and the maintenance is more convenient.",
                  "All control is realized by software, which is convenient for function adjustment and technical upgrade, and never lags behind.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Film Width",
                    value: "Maximum450mm",
                  },
                  {
                    key: "Bag Length",
                    value: "130-450mm",
                  },
                  {
                    key: "Bag Making Width",
                    value: "50-180m",
                  },
                  {
                    key: "Product Height",
                    value: "最高75mm",
                  },
                  {
                    key: "Maximum Roll Film Diameter",
                    value: "320mm",
                  },
                  {
                    key: "Packing Speed",
                    value: "30-150Packs/minute",
                  },
                  {
                    key: "Mechanical Dimensions",
                    value: "4300x820X1420mm",
                  },
                  {
                    key: "Mechanical Quality",
                    value: "About 650kg",
                  },
                  {
                    key: "Power Specifications",
                    value: "220V 50/60Hz 2.8KW",
                  },
                  {
                    key: "Packaging material: packaging film material that can be heat-sealed on one side",
                    value:
                      "(Single layer or composite materials such as OPP.CPP, OPP composite PE, PET composite PE. etc.)",
                  },
                ],
              },
            ],
          },
          {
            type: "vegetable-packing-machine",
            title: "Vegetable Packing Machine",
            data: [
              {
                bannerPic: "banner1",
                title: "Automatic Vegetable Packing Line",
                desc: "It is suitable for the packaging of whole vegetables, fruits or fruit and vegetable products after cutting, and can realize automatic assembly line work.For example: packaging of corn, sweet potatoes, carrots, greens, cucumbers, cabbage, garlic, cabbage, spinach, water spinach and other vegetables. The whole line includes: pillow packaging machine + metal detector + automatic weighing machine + automatic labeling Code machine + receiving tray.",
                features: [
                  "Double inverter control, the bag length is set and cut immediately, no need to adjust the idling, one step is in place, saving time and film.",
                  "Man-machine interface, convenient and quick parameter setting. Fault self-diagnosis function, fault display is clear at a glance.",
                  "The whole line is highly efficient and hygienic, which reduces the spread of pests and diseases and the wilting of products.",
                  "Metal detector: beautiful appearance, easy operation and stable performance. The detection speed is fast, and the defective product information can be stored.",
                  "The sensitivity is high, and the detection accuracy reaches the leading level in the industry. It adopts sound and light alarm, and automatically eliminates or shuts down at the same time, which is convenient and reliable.",
                  "Labeling and coding machine: humanized touch screen: simple and intuitive operation, complete functions, and rich online help functions.",
                  "The transmission system is simple, the work is more reliable, and the maintenance is more convenient.",
                ],
                sort: true,
                tech: [
                  {
                    key: "Machine size",
                    value: "About 10 meters",
                  },
                  {
                    key: "Capacity",
                    value: "1800 bags/hour",
                  },
                  {
                    key: "Voltage",
                    value: "220V",
                  },
                  {
                    key: "Power",
                    value: "10KW",
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
