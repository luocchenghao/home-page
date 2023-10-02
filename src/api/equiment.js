import myInstance from "../server";
import { useUrlQs } from "../utils";

export const uploadEquiment = (data) => {
  return myInstance.post({
    url: "/api/upload",
    data,
  });
};

export const listEquiment = async (params) => {
  return myInstance.get(await useUrlQs("/api/list", params));
};

export const updateEquiment = (data) => {
  return myInstance.put(`/api/update/${data.id}`, data);
};

export const deleteEquiment = (id) => {
  return myInstance.delete(`/api/update/${id}`);
};
