import ComponentDefinition from "@/components/ComponentDefinition";
import { PropertyListingForm } from "@/components/Forms/PropertyListingForm";

export default function Component_PropertyListingForm() {
   return (
      <ComponentDefinition.Root>
         <ComponentDefinition.Title>
            Property Listing Form
         </ComponentDefinition.Title>
         <ComponentDefinition.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
            quas enim rem? Eveniet at eum ipsam suscipit quo dolor?
         </ComponentDefinition.Description>
         <ComponentDefinition.Preview>
            <div className="flex justify-center">
               <div className="debug basis-[750px] p-4">
                  <PropertyListingForm />
               </div>
            </div>
         </ComponentDefinition.Preview>
      </ComponentDefinition.Root>
   );
}
