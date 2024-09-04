import ComponentDefinition from "@/components/ComponentDefinition";
import { SingleSignOnButton } from "@/components/SingleSignOnButton";
import GoogleIcon from "@/images/icon_google.svg";

export default function Component_SSOButton() {
   return (
      <ComponentDefinition.Root>
         <ComponentDefinition.Title>
            Single Sign-On Button
         </ComponentDefinition.Title>
         <ComponentDefinition.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque dolores facere inventore expedita et veniam nemo officiis
            maiores assumenda.
         </ComponentDefinition.Description>
         <ComponentDefinition.Preview>
            <div className="flex min-h-[300px] items-center justify-center">
               <SingleSignOnButton
                  icon={GoogleIcon}
                  iconAltText="Sign in with Google"
                  text="Sign In with Google"
               />
            </div>
         </ComponentDefinition.Preview>
      </ComponentDefinition.Root>
   );
}
