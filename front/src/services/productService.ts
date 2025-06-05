import { API_URL } from "../../envs";
import { IProduct } from "../interfaces/IProduct";

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${API_URL}/products`)
    .then((res) => res.json)
    .catch(() => {
      return [];
    });
  return res as IProduct[];
};
