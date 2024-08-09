import { z } from "zod";

export const PropertyTypes = ["house_&_lot", "apartment", "condominium"];
export const PropertyTenure = ["ownership", "rental"];

export const PropertyTypesEnum = z.enum(PropertyTypes);
export const PropertyTenureEnum = z.enum(PropertyTenure);
