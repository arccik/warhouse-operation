import * as yup from "yup";

const validationSchema = yup.object({
  "Storage Unit": yup
    .string("Scan box or tray barcode where items are stored")
    .required("Storage Unit is required"),
  Material: yup
    .string("Provide material code")
    .required("This field is required"),
  "Material Description": yup.string("Material details"),
  SLOC: yup.string("Lot number of the product"),
  "Available Stock": yup
    .number("How Many Items is in there ?")
    .required("This field is required"),
  "Special Stock": yup.boolean("Tick if this is a specail stock"),
  "Special Stock Number": yup.string(
    "If this stock from external supplier scan barcode"
  ),

  StorageBin: yup
    .string("Scan location where this item will be stored")
    .required("Scan location where this item will be stored"),
  Type: yup.string("Type of the product"),
});

export default validationSchema;
