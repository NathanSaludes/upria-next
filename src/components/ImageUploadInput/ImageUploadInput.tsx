"use client";

import { cn, moveArrayItem } from "@/lib/utils";
import { nanoid } from "nanoid";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { UploadPreview } from "./UploadPreview";
import { IUploadPreview } from "@/lib/interfaces";

interface Props {}

export const ImageUploadInput: React.FC<Props> = () => {
   // states
   const [error, setError] = useState("");
   const [uploadPreviews, setUploadPreviews] = useState<IUploadPreview[]>([]);

   // derived states
   const hasErrors = Boolean(error.length > 0);
   const hasUploadPreviews = uploadPreviews.length > 0;

   // refs
   const inputRef = useRef<HTMLInputElement>(null);

   // methods
   const handleUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files as FileList);

      /* ----------------------------------------------------
      |  (TODO): invoke the function that uploads all the 
      |  files to the storage bucket here...
      |
      |  example:
      |  const uploadedFiles = uploadFilesToStorage(files)
      ---------------------------------------------------- */

      const uploadedFiles = files.map((file) => ({
         id: nanoid(),
         fileName: file.name,
         fileSize: file.size,
         imageUrl: `/sample/${file.name}`,
         uploadProgress: 100,
      }));

      setUploadPreviews(uploadedFiles);
   }, []);

   const handleMoveItemUp = useCallback(
      (id: string) => {
         const currentPosition = uploadPreviews.findIndex(
            (item) => item.id === id
         );

         if (currentPosition === 0) return;

         const updatedUploadPreviews = moveArrayItem<IUploadPreview>(
            [...uploadPreviews],
            currentPosition,
            currentPosition - 1
         );

         setUploadPreviews(updatedUploadPreviews);
      },
      [uploadPreviews]
   );

   const handleMoveItemDown = useCallback(
      (id: string) => {
         const currentPosition = uploadPreviews.findIndex(
            (item) => item.id === id
         );

         if (currentPosition === uploadPreviews.length - 1) return;

         const updatedUploadPreviews = moveArrayItem<IUploadPreview>(
            [...uploadPreviews],
            currentPosition,
            currentPosition + 1
         );

         setUploadPreviews(updatedUploadPreviews);
      },
      [uploadPreviews]
   );

   const handleRemoveItem = useCallback(() => {}, []);

   return (
      <div className="space-y-2">
         {/* Hidden Input Field */}
         <input
            type="file"
            multiple={true}
            accept="images/*"
            hidden
            onChange={handleUpload}
            ref={inputRef}
         />

         {/* Drag and Drop Field ------------ */}
         <div
            className="group mb-2 flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 outline-black hover:cursor-pointer"
            onClick={() => inputRef.current?.click()}
         >
            <div className="text-center text-sm">
               <span className="mr-1 font-medium underline underline-offset-2 transition duration-150 group-hover:text-slate-800">
                  Click To Upload
               </span>
               Or Drag And Drop
            </div>
            <span className="text-xs text-slate-500">
               Maximum file size 1 MB.
            </span>
         </div>

         {/* Error Message ------------- */}
         {hasErrors && <ErrorMessage>{error}</ErrorMessage>}

         {/* Upload Preview ------------ */}
         {hasUploadPreviews && (
            <div className="text-sm text-slate-500">
               <ScrollArea
                  className={cn("h-[380px] rounded-lg border p-2", {
                     "border-destructive bg-red-50": hasErrors,
                  })}
                  scrollHideDelay={150}
               >
                  {uploadPreviews.map((item, index) => (
                     <UploadPreview
                        key={item.id}
                        id={item.id}
                        fileName={item.fileName}
                        fileSize={item.fileSize}
                        imageUrl={item.imageUrl}
                        uploadProgress={item.uploadProgress}
                        canMoveUp={index !== 0}
                        canMoveDown={index !== uploadPreviews.length - 1}
                        onMoveUp={handleMoveItemUp}
                        onMoveDown={handleMoveItemDown}
                     />
                  ))}
               </ScrollArea>
            </div>
         )}
      </div>
   );
};

const ErrorMessage: React.FC<React.PropsWithChildren> = (props) => {
   return (
      <div className="text-xs text-destructive">
         <p>{props.children}</p>
      </div>
   );
};
