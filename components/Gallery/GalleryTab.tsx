"use client";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { Heading1 } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: ImageType;
};

const GalleryTab = ({ image }: Props) => {
  return (
    <Tab
      className={`relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white `}
      children={({ selected }) => (
        <GTabItem selected={selected} image={image} />
      )}
    />
  );
};

export default GalleryTab;

export const GTabItem = ({
  selected = false,
  image,
}: {
  selected?: boolean;
  image: { url: string };
}) => (
  <div>
    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
      <Image
        fill
        src={image.url}
        alt="Image"
        className="object-cover object-center"
      />
    </span>
    <span
      className={cn(
        "absolute inset-0 rounded-md ring-2 ring-offset-2",
        selected ? "ring-black" : "ring-transparent"
      )}
    />
  </div>
);

/* {
    
} */
