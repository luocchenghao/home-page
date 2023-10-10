export const useParamsQs = (params) => {
  let str = "";
  for (const key in params) {
    if (str === "") {
      str = `${key}=${encodeURIComponent(params[key])}`;
    } else {
      str += `&${key}=${encodeURIComponent(params[key])}`;
    }
  }
  return str ? str : "";
};

export const useUrlQs = async (url, params) => {
  const urlQs = url.indexOf("?") == -1 ? `${url}?` : url;
  const paramsQs = await useParamsQs(params);
  return `${urlQs}${paramsQs}`;
};

export const routers = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/fruit-and-vegetable-processing-equipment",
    title: "Fruit And Vegetable Processing Equipment",
    children: [
      {
        url: "/cutting-machine",
        title: "Cutting Machine",
      },
      {
        url: "/peeling-machine",
        title: "Peeling Machine",
      },
      {
        url: "/crusher",
        title: "Crusher",
      },
      {
        url: "/washing-machine",
        title: "Washing Machine",
      },
      {
        url: "/dehydrator",
        title: "Dehydrator",
      },
    ],
  },
  {
    url: "/meat-processing-equipment",
    title: "Meat Processing Equipment",
    children: [
      {
        url: "/meat-cutter",
        title: "Meat Cutter",
      },
      {
        url: "/meat-grinder",
        title: "Meat Grinder",
      },
      {
        url: "/bone-sawing-machine",
        title: "Bone Sawing Machine",
      },
      {
        url: "/sausage-machine",
        title: "Sausage Machine",
      },
      {
        url: "/peeling-and-fascia-removal-machine",
        title: "Peeling And Fascia Removal Machine",
      },
      {
        url: "/mixing-machine",
        title: "Mixing Machine",
      },
    ],
  },
  {
    url: "/clean-vegetable-processing-equipment",
    title: "Clean Vegetable Processing Equipment",
    children: [
      {
        url: "/leafy-vegetable-processing",
        title: "Leafy Vegetable Processing",
      },
      {
        url: "/roots-vegetable",
        title: "Roots Vegetable",
      },
      {
        url: "/vegetable-and-fruit-packaging",
        title: "Vegetable And Fruit Packaging",
      },
    ],
  },
  {
    url: "/packaging-equipment",
    title: "Packaging Equipment",
    children: [
      {
        url: "/vacuum-packaging-machine",
        title: "Vacuum Packaging Machine",
      },
      {
        url: "/pillow-packaging-machine",
        title: "Pillow Packaging Machine",
      },
      {
        url: "/vegetable-packing-machine",
        title: "Vegetable Packing Machine",
      },
    ],
  },
  {
    url: "/contact-us",
    title: "About Us",
  },
];

export const getAssetUrl = (fileName, url) => {
  return new URL(
    `../assets/product-center/${fileName}/${url}.jpeg`,
    import.meta.url
  ).href;
};
