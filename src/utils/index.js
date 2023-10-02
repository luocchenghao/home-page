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
