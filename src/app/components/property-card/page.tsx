import { PropertyCard } from "@/components/PropertyCard";
import { ComponentDescription } from "../ComponentDescription";
import { ComponentLabel } from "../ComponentLabel";
import { ComponentPreview } from "../ComponentPreview";

// Sample Photos
import samplePhotos from "@/components/PropertyCard/sample-photos.json";

export default function ComponentDemo() {
  return (
    <div className="space-y-3">
      <ComponentLabel text="Property Card" />
      <ComponentDescription>
        <p>
          Used to display detailed information about a property in a compact,
          visually appealing format, similar to listings found on platforms like
          Airbnb. It includes the following key elements:
        </p>
        <ol className="space-y-4">
          <li>
            <p>
              <strong className="font-semibold text-slate-700">
                Photo Slideshow
              </strong>
            </p>
            <ul className="list-disc pl-8">
              <li>
                A carousel or slider showcasing multiple high-quality images of
                the property. Users can swipe or click through to view different
                photos.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong className="font-semibold text-slate-700">
                Property Details
              </strong>
            </p>
            <ul className="list-disc pl-8">
              <li>
                <span className="underline underline-offset-2">Location</span>:
                Displayed prominently, showing the property&apos;s general
                location (format: &lt;Street&gt;, &lt;City&gt;).
              </li>
              <li>
                <span className="underline underline-offset-2">Price</span>:
                Clear and visible, showing the cost depending on the listing.
              </li>
              <li>
                <span className="underline underline-offset-2">
                  Agent Photo
                </span>
                : the profile picture of the agent who posted the property.
              </li>
            </ul>
          </li>
        </ol>
      </ComponentDescription>
      <ComponentPreview>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="max-w-[300px]">
            <PropertyCard
              photos={samplePhotos}
              title="Mountain View Home in Tagaytay"
              location="Taft Avenue, Manila"
              price="14,000,000"
            />
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
