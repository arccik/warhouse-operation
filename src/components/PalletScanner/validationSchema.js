import * as yup from "yup";

export default yup.object({
  productId: yup.string("Enter your id").required("id is required"),
  storageLocation: yup
    .string("Enter your Storage Location")
    .min(3, "Storage Location should be of minimum 3 characters length")
    .required("Storage Location is required"),
  name: yup.string().required("Name required!"),
  description: yup.string("Write item description"),
  quantity: yup
    .number("Quantity must be numeric value")
    .required("quantity required!"),
  price: yup.number("Price must be numeric value").required("Price required!"),
});
