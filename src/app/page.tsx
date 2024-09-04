import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import HeroImage from "@public/hero-image-alt.jpg";
import Image from "next/image";

import samplePhotos from "@/components/PropertyCard/sample-photos.json";

export default function HomePage() {
   return (
      <>
         <Header />
         <main>
            {/* Hero Section */}
            <section className="relative bg-[#E5F2FF] pt-32">
               <div className="mx-auto flex max-w-[820px] gap-[60px]">
                  <div className="space-y-8">
                     <h1 className="-mb-2 font-sans-manrope text-4xl font-black leading-[140%] tracking-tighter text-primary">
                        Home to Manila&apos;s best deals for house and lots,
                        condo units, and apartments.
                     </h1>
                     <p className="leading-7">
                        Your home search starts and ends here. Let Upria bring
                        your home aspirations to life. Our verified property
                        specialists are dedicated to guiding you every step of
                        the way.
                     </p>
                     <Button className="font inline-block min-h-12 rounded-lg">
                        Browse all properties
                     </Button>
                  </div>
                  <div className="block">
                     <Image
                        className="h-[500px] max-w-[380px] rounded-t-full bg-black object-cover"
                        src={HeroImage}
                        alt="hero image - interior of the house"
                     />
                  </div>
               </div>
               {/* Search Bar Slot */}
               <div className="container absolute bottom-0 left-0 right-0 flex max-w-[1000px] translate-y-10 justify-center">
                  <SearchBar />
               </div>
            </section>

            {/* Latest Property Listings Section */}
            <section className="py-20">
               <div className="container space-y-4">
                  <h2 className="text-foreground-alt text-2xl tracking-tight">
                     Recent Property Listings
                  </h2>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                     {Array.from({ length: 15 }).map((_, index) => (
                        <PropertyCard
                           title="Modern Two-Story Home with Sleek Design"
                           location="Taguig, Metro Manila"
                           price="14,472,760.68"
                           photos={samplePhotos}
                           url="#property-url"
                           key={index}
                        />
                     ))}
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}
