import palletService from "@/services/pallet-service";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const data = await palletService.getAll();
      res.status(200).json(data);
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
