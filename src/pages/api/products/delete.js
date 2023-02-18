import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  try {
    dbConnect();
    if (req.method === "DELETE") {
      const id = req.query.id;
      if (id) {
        const data = await productService.delete(id);
        return res.status(200).json(data);
      }
    }
    return res
      .status(404)
      .json({ message: "Couldnt delete product, wrong method" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "could get products from db", error });
  }
}
