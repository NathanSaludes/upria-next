import { ImageUploadInput } from "@/components/ImageUploadInput/ImageUploadInput";
import { ComponentDefinition } from "../ComponentDefinition";

export default function Component_ImageUploadInput() {
   return (
      <ComponentDefinition.Root>
         <ComponentDefinition.Title>Image Upload</ComponentDefinition.Title>
         <ComponentDefinition.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque dolores facere inventore expedita et veniam nemo officiis
            maiores assumenda.
         </ComponentDefinition.Description>
         <ComponentDefinition.Preview>
            <div className="flex justify-center">
               <div className="basis-[750px] p-2 py-8">
                  <ImageUploadInput />
               </div>
            </div>
         </ComponentDefinition.Preview>
      </ComponentDefinition.Root>
   );
}
