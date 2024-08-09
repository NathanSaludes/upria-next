import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const PropertyPhoto: React.FunctionComponent<ImageProps> = ({
  alt,
  className,
  ...props
}) => {
  return (
    // <div className="aspect-square w-full rounded-2xl bg-slate-200">
    //   <div className="flex h-full items-center justify-center text-sm">
    //     &lt;Image&gt;
    //     </div>
    // </div>
    <Image
      className={cn(
        "aspect-square w-full rounded-2xl bg-slate-200 object-cover object-left",
        className
      )}
      alt={alt}
      {...props}
    />
  );
};
PropertyPhoto.displayName = "PropertyPhoto";

type Props = {
  location: string;
  price: string;
  children: React.ReactNode;
};

const PropertyCard: React.FunctionComponent<Props> = ({
  location,
  price,
  children
}) => {
  return (
    <div className="min-h-[300px] space-y-2">
      {children}
      <div className="space-y-1.5">
        <p className="text-sm">{location}</p>
        <p className="text-sm">₱ {price}</p>
        {/* <p className="text-sm">&lt;Municipality, Province&gt;</p> */}
        {/* <p className="text-sm">&lt;₱ Price&gt;</p> */}
      </div>
    </div>
  );
};
PropertyCard.displayName = "PropertyCard";

export { PropertyCard, PropertyPhoto };
