import { Product } from "@/types";
import React from "react";
import NoResult from "./ui/NoResult";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4 bg-gray-100 p-2 rounded-md">
      <h3 className="font-bold text-heading3-bold">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
