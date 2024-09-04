"use client";

import { PropertyTypeChoices, SearchCategoryChoices } from "@/lib/constants";
import locations from "@/lib/locations.json";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "./ui/button";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "./ui/command";
import { Form, FormField } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";

const formSchema = z.object({
   category: z.string().optional(),
   property_type: z.string().optional(),
   location: z.string().optional(),
});

export const SearchBar = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         category: undefined,
         property_type: undefined,
         location: undefined,
      },
   });

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full gap-4 rounded-2xl bg-white p-4 shadow"
         >
            {/* Buy or Lease */}
            <FormField
               control={form.control}
               name="category"
               render={({ field }) => (
                  <Select
                     onValueChange={field.onChange}
                     defaultValue={field.value}
                  >
                     <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                     </SelectTrigger>
                     <SelectContent>
                        {SearchCategoryChoices.map((choice) => (
                           <SelectItem key={choice.value} value={choice.value}>
                              {choice.label}
                           </SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               )}
            />

            {/* Property Type Selection */}
            <FormField
               control={form.control}
               name="property_type"
               render={({ field }) => (
                  <Select
                     onValueChange={field.onChange}
                     defaultValue={field.value}
                  >
                     <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select property type" />
                     </SelectTrigger>
                     <SelectContent>
                        {PropertyTypeChoices.map((choice) => (
                           <SelectItem key={choice.value} value={choice.value}>
                              {choice.label}
                           </SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               )}
            />

            {/* Location Dropdown */}
            <FormField
               control={form.control}
               name="location"
               render={({ field }) => (
                  <Popover>
                     <PopoverTrigger asChild>
                        <div
                           className={cn(
                              buttonVariants({ variant: "outline" }),
                              "flex-1 justify-between"
                           )}
                        >
                           {field.value
                              ? locations.find(
                                   (location) => location.label === field.value
                                )?.label
                              : "Select location"}
                           <div className="flex items-center gap-1.5">
                              {field.value && (
                                 <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 rounded-md hover:bg-slate-200"
                                    onClick={(evt) => {
                                       form.setValue("location", undefined);
                                       evt.preventDefault();
                                    }}
                                 >
                                    <X size={14} className="text-gray-400" />
                                 </Button>
                              )}
                              <ChevronsUpDown
                                 size={14}
                                 className="text-gray-400"
                              />
                           </div>
                        </div>
                     </PopoverTrigger>
                     <PopoverContent className="w-[398px] overflow-hidden rounded-xl border-none p-0">
                        <Command>
                           <CommandInput placeholder="Search location" />
                           <CommandList>
                              <CommandEmpty>No location found.</CommandEmpty>
                              <CommandGroup>
                                 {locations.map((location) => (
                                    <CommandItem
                                       key={location.value}
                                       value={location.value}
                                       onSelect={() =>
                                          form.setValue(
                                             "location",
                                             location.label
                                          )
                                       }
                                       className="py-2 hover:cursor-pointer"
                                    >
                                       {location.label}
                                    </CommandItem>
                                 ))}
                              </CommandGroup>
                           </CommandList>
                        </Command>
                     </PopoverContent>
                  </Popover>
               )}
            />

            {/* Submit Button - Search */}
            <Button type="submit" className="rounded-lg">
               <div className="flex items-center gap-2">
                  <Search size={16} />
                  Search
               </div>
            </Button>
         </form>
      </Form>
   );
};
