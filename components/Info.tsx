"use client";
import { Product } from "@/types";
import React from "react";
import CurrencyItem from "./ui/CurrencyItem";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

type Props = {
  data: Product;
};

function Info({ data }: Props) {
  return (
    <div>
      <div className="inline-flex items-start w-full mt-2">
        {data.isNew && (
          <div className=" bg-black rounded-md text-white font-semibold px-2 ">
            New
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <CurrencyItem
            value={data.price}
            percentage={data.percentage}
            isDiscount={data.isDiscounted}
          />
        </p>
      </div>
      <hr className="my-4" />
      <div className=" flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <div className="">{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className=" flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart className="" />
        </Button>
      </div>
    </div>
  );
}

export default Info;
