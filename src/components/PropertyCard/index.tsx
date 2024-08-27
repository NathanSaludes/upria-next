import { Loader } from "lucide-react";
import { FunctionComponent, Suspense } from "react";
import { PropertySlideShow } from "./PropertySlideShow";

import Link from "next/link";
import { PropertyPhotos } from "@/lib/interfaces";

type Props = {
   photos: PropertyPhotos[];
   title: string;
   location: string;
   price: string | number;
   url: string;
};

const SlideShowLoader: FunctionComponent = () => {
   return (
      <div className="flex aspect-square w-full max-w-[300px] items-center justify-center rounded-2xl bg-slate-100">
         <Loader className="animate-spin text-slate-300" />
      </div>
   );
};

export const PropertyCard: React.FunctionComponent<Props> = (props) => {
   // extract props
   const { photos = [], title, location, price, url } = props;

   return (
      <div className="min-h-[300px] space-y-2">
         <Suspense fallback={<SlideShowLoader />}>
            <PropertySlideShow photos={photos} />
         </Suspense>
         <Link
            href={url}
            prefetch={true}
            className="group block space-y-1 text-sm tracking-tight text-slate-500"
         >
            <p className="line-clamp-1 font-medium text-slate-800 group-hover:underline group-hover:underline-offset-2">
               {title}
            </p>
            <p>{location}</p>
            <p>₱ {String(price)}</p>
         </Link>
      </div>
   );
};
PropertyCard.displayName = "PropertyCard";
