import { adapter } from "@/lib/utils";
import { Billboard } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[] | null> => {

  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        storeId: process.env.STORE_ID
      }
    })
    
    const res = await fetch(url)
    return res.json()
  } catch (error) {
    console.log("Error getting billboards: ", error)
    return null
  }
};

export default getBillboards;
