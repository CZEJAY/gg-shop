import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[] | null> => {
  try {
    const res = await fetch(URL);
  return res.json();
  } catch (error) {
    console.log("Error getting Sizes[] =>",error)
    return null
  }
};

export default getSizes;
