import mapProductService from "@/services/map-products-service";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  try {
    dbConnect();
    const id = req.query?.id;
    if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
      const mapProduct = await mapProductService.getById(id);
      if (!mapProduct) {
        return res.status(404).json({
          status: "bad",
          message: "Cannot find anything with given ID",
        });
      }
      return res.status(200).json(mapProduct);
    } else {
      const data = await mapProductService.getAll();
      return res.status(200).json(data);
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "could get map products from db", error });
  }
}
