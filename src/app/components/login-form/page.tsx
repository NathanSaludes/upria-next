import ComponentDefinition from "@/components/ComponentDefinition";
import { LoginForm } from "@/components/Forms/LoginForm";
import { Suspense } from "react";

export default function Component_LoginForm() {
   return (
      <ComponentDefinition.Root>
         <ComponentDefinition.Title>Login Form</ComponentDefinition.Title>
         <ComponentDefinition.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque dolores facere inventore expedita et veniam nemo officiis
            maiores assumenda.
         </ComponentDefinition.Description>
         <ComponentDefinition.Preview>
            <div className="flex justify-center">
               <div className="debug basis-[500px] p-8">
                  <Suspense fallback={"Loading..."}>
                     <LoginForm />
                  </Suspense>
               </div>
            </div>
         </ComponentDefinition.Preview>
      </ComponentDefinition.Root>
   );
}
