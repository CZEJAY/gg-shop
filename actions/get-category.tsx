import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
  try{
    const res = await fetch(`${URL}/${id}`);
  return res.json();
  } catch (error){
    console.error("Error getting Category:",error);
    return null
  }
};

export default getCategory;
