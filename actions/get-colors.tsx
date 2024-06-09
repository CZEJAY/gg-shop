import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[] | null> => {
  try{
    const res = await fetch(URL);
    return res.json();
  }catch (error){
    console.log("Error Getting colors: ", error)
    return null
  }
};

export default getColors;
