import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  try {
    dbConnect();
    if (req.method === "GET") {
      const page = req.query.page;
      if (page) {
        const data = await productService.getAll(page);
        return res.status(200).json(data);
      }
      const data = await productService.getNotSubmitted();
      return res.status(200).json(data);
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "could get products from db", error });
  }
}
