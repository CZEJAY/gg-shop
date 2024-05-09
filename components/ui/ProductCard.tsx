"use client";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconBtn from "./IconBtn";
import { Expand, ShoppingCart } from "lucide-react";
import CurrencyItem from "./CurrencyItem";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()
  const handleClick = ( ) => {
    router.push(`/product/${data?.id}`)
  }
  return (
    <div className="bg-white relative group cursor-pointer rounded-xl p-3 space-y-4" onClick={handleClick}> 
      <div className="aspect-square rounded-xl relative">
        <Image
          alt="image"
          fill
          className="aspect-square object-cover rounded-md"
          src={data.images?.[0].url}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconBtn
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
              className=""
            />
            <IconBtn
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className=""
            />
          </div>
        </div>
      </div>
      {/* TODO: DESCRIPTION */}
      <div className="">
        <div className="inline-flex items-center w-full mt-2 justify-center">
          {data.isNew && (
            <div className=" bg-brandblu/55 rounded-md text-white font-semibold px-2 text-small-regular">
              New
            </div>
          )}
        </div>
        <p className="font-semibold text-lg line-clamp-1">{data.name}</p>
        <p className="text-gray-500 text-small-semibold">{data?.category?.name}</p>
      </div>
      {/* PRICE */}
      <div className="flex items-center justify-between">
        <CurrencyItem value={data.price} percentage={data.percentage} isDiscount={data.isDiscounted} />
      </div>
      {data.percentage && (
        <div className="absolute bg-brandylw bottom-5 right-0 rounded-tl-md rounded-bl-md text-white font-semibold px-2 py-1 text-subtle-medium sm:text-small-medium ">
          {data.isDiscounted ? "-" : "+"}{data.percentage}%
        </div>
      )}
    </div>
  );
};

export default ProductCard;
