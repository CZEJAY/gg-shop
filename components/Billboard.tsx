"use client"
import { Billboard as BillboardType, Category } from "@/types";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryOverview from "./shared/CategoryOverview";

interface BillboardProps {
  data: BillboardType[];
  cat: Category[]
}

const Billboard: React.FC<BillboardProps> = ({ data, cat }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );
  return (
    <div className=" sm:rounded-xl overflow-hidden flex flex-col md:flex-row items-start w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto pl-5"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {data.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1 w-full">
                <Card className="w-full">
                  <CardContent style={{backgroundImage: `url(${item.imageUrl})`}} className="sm:rounded-xl relative h-52 md:h-80 w-full overflow-hidden bg-center bg-cover">
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CategoryOverview data={cat} />
    </div>
  );
};

export default Billboard;

/* 
<div 
    style={{backgroundImage: `url(${data.imageUrl})`}} 
        className="sm:rounded-xl relative h-52 w-full overflow-hidden ">
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                {data.label}
            </div>
        </div>
</div>
*/
