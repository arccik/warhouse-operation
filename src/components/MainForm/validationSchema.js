import * as yup from "yup";

export default yup.object({
  id: yup.string("Enter your id").required("id is required"),
  storageLocation: yup
    .string("Enter your Storage Location")
    .min(3, "Storage Location should be of minimum 3 characters length")
    .required("Storage Location is required"),
  quantity: yup
    .number("Quantity must be numeric value")
    .required("quantity required!"),
  description: yup.string("Write item description"),
});
