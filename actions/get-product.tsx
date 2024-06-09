import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${URL}/${id}`);
  return res.json();
  } catch (error) {
    console.log("Error Getting Product:", error)
    return null
  }
};

export default getProduct;
