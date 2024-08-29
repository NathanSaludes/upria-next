import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
   icon: string;
   iconAltText: string;
   size?: number;
   text?: string;
};
export const SingleSignOnButton: React.FunctionComponent<Props> = (props) => {
   const { icon, iconAltText, size, text } = props;

   return (
      <Button
         className="min-h-11 rounded-md font-medium text-slate-500"
         variant="outline"
      >
         <Image
            src={icon}
            alt={iconAltText}
            width={size || 18}
            height={size || 18}
            className={`h-[${size}px] w-[${size}px] mr-2`}
         />
         <span>{text}</span>
      </Button>
   );
};
