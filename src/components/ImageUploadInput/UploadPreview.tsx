import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";
import { IUploadPreview } from "@/lib/interfaces";

interface Props extends IUploadPreview {
   uploadProgress: number;
   canMoveUp?: boolean;
   canMoveDown?: boolean;
   onMoveUp?: (id: string) => void;
   onMoveDown?: (id: string) => void;
}

export const UploadPreview: React.FC<Props> = (props) => {
   // extract props
   const {
      id,
      imageUrl,
      fileName,
      fileSize,
      uploadProgress = 0,
      canMoveDown,
      canMoveUp,
      onMoveUp,
      onMoveDown,
   } = props;

   const doneUploading = !(uploadProgress < 100);

   return (
      <div className="flex gap-2 pr-2 @container">
         {/* ordering controls */}
         <div className="flex flex-col gap-1 @lg:justify-center">
            <Button
               variant="outline"
               size="icon"
               className={cn("h-6 w-6 opacity-30 hover:cursor-not-allowed", {
                  "opacity-100 hover:cursor-pointer": canMoveUp,
               })}
               onClick={() => onMoveUp && onMoveUp(id)}
            >
               <ChevronUp size="1rem" />
            </Button>
            <Button
               variant="outline"
               size="icon"
               className={cn("h-6 w-6 opacity-30 hover:cursor-not-allowed", {
                  "opacity-100 hover:cursor-pointer": canMoveDown,
               })}
               onClick={() => onMoveDown && onMoveDown(id)}
            >
               <ChevronDown size="1rem" />
            </Button>
         </div>
         {/* upload details (e.g. image, file size, description) */}
         <div className="grid flex-1 gap-4 rounded-lg p-2 @lg:grid-cols-[200px_minmax(0,1fr)]">
            {/* Image */}
            {doneUploading ? (
               <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                  <Image
                     src={imageUrl}
                     alt={fileName}
                     width={200}
                     height={200}
                     className="h-full w-full object-cover text-xs"
                  />
               </div>
            ) : (
               <div className="aspect-video animate-pulse rounded-md bg-slate-100"></div>
            )}
            <div className="space-y-2">
               <div className="flex justify-between gap-4">
                  <div className="space-y-1 self-end">
                     <p className="line-clamp-1 text-slate-600">{fileName}</p>
                     <p className="min-w-max text-xs text-slate-400">
                        (
                        {fileSize > 1_000_000
                           ? `${String(Math.round(fileSize / 1_000_000))} MB`
                           : `${String(Math.round(fileSize / 1000))} KB`}
                        )
                     </p>
                  </div>
                  {doneUploading && (
                     <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 flex-shrink-0 self-start"
                     >
                        <Trash size="0.8rem" className="text-slate-500" />
                     </Button>
                  )}
               </div>
               {doneUploading ? (
                  <div className="space-y-2">
                     <Input
                        type="text"
                        placeholder="enter alt text for photo..."
                        className="h-[35px] p-2 text-slate-600 placeholder:text-slate-400/80 focus-visible:ring-0 focus-visible:ring-offset-0"
                     />
                  </div>
               ) : (
                  <div className="text-slate-400">
                     <div className="flex items-center gap-3">
                        <Progress className="h-2" value={uploadProgress} />
                        <span>{uploadProgress}%</span>
                     </div>
                     <span className="text-xs">Uploading...</span>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
