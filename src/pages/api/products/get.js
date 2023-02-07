import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  try {
    dbConnect();
    const data = await productService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(404)
      .json({ message: "could get products from db", error });
  }
}
