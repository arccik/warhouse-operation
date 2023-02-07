import Pallet from "@/models/pallet-model";

class PalletService {
  async addPallet(data) {
    const pallet = await Pallet.create(data);
    return pallet;
  }
  async updatePallet(id, data) {
    const pallet = await Pallet.findByIdAndUpdate(id, data);
    return pallet;
  }
  async deletePallet(id) {
    const pallet = await Pallet.findByIdAndDelete(id);
    return pallet;
  }
  async getAll() {
    const pallets = await Pallet.find();
    return pallets;
  }
  async getOne(id) {
    const pallet = await Pallet.findById(id);
    return pallet;
  }
}

export default new PalletService();
