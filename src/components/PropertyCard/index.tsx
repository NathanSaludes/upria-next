import { Loader } from "lucide-react";
import { Suspense } from "react";
import { PropertySlideShow } from "./PropertySlideShow";

import Link from "next/link";
import { PropertyPhotos } from "@/lib/interfaces";

type Props = {
  photos: PropertyPhotos[];
  title: string;
  location: string;
  price: string | number;
};

export const PropertyCard: React.FunctionComponent<Props> = ({
  photos = [],
  title,
  location,
  price
}) => {
  return (
    <div className="min-h-[300px] space-y-2">
      <Suspense
        fallback={
          <div className="flex aspect-square w-full max-w-[300px] items-center justify-center rounded-2xl bg-slate-100">
            <Loader className="animate-spin text-slate-300" />
          </div>
        }
      >
        <PropertySlideShow photos={photos} />
      </Suspense>
      <Link
        href="#property_link"
        className="block space-y-2 text-sm tracking-tight text-slate-500"
      >
        <p className="line-clamp-1 font-medium text-slate-800">{title}</p>
        <p>{location}</p>
        <p>₱ {String(price)}</p>
      </Link>
    </div>
  );
};
PropertyCard.displayName = "PropertyCard";
