"use client";

import { IPropertyPhotos } from "@/lib/interfaces";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

interface Props {
   photos?: IPropertyPhotos[];
}

export const PropertySlideShow: React.FunctionComponent<Props> = (props) => {
   const { photos } = props;
   const hasItems = photos && (photos.length > 0 ? true : false);
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
   });

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);

   return (
      <div
         className="group/root relative aspect-square w-full max-w-[500px] items-center overflow-hidden rounded-2xl"
         ref={hasItems ? emblaRef : null}
      >
         <div className="flex h-full flex-1 items-center">
            {/* If the property contains photos, render the slides */}
            {hasItems &&
               photos.map((photo) => (
                  <div
                     key={photo.id}
                     className="mr-0 flex aspect-square flex-[0_0_100%] select-none items-center justify-center bg-slate-100"
                  >
                     <Image
                        src={photo.image_url}
                        alt={photo.description}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover"
                     />
                  </div>
               ))}
            {/* If there are no photos, render this static empty placeholder */}
            {!hasItems && (
               <div className="flex aspect-square flex-1 select-none items-center justify-center bg-slate-100 text-sm text-slate-300">
                  Preview Unavailable
               </div>
            )}
         </div>
         {hasItems && (
            <div className="debug absolute bottom-0 top-0 flex w-full justify-between opacity-0 transition-opacity duration-150 hover:cursor-grab active:cursor-grabbing group-hover/root:opacity-100">
               <div
                  className="group ml-1.5 flex min-h-full items-center hover:cursor-pointer"
                  onClick={hasItems ? scrollPrev : () => {}}
               >
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 transition duration-200 group-hover:shadow-md">
                     <ChevronLeft size={14} className="text-slate-400" />
                  </button>
               </div>
               <div
                  className="group mr-1.5 flex min-h-full items-center hover:cursor-pointer"
                  onClick={hasItems ? scrollNext : () => {}}
               >
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 transition duration-200 group-hover:shadow-md">
                     <ChevronRight size={14} className="text-slate-400" />
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};
PropertySlideShow.displayName = "PropertySlideShow";
