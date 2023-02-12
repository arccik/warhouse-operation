import Item from "@/models/item-model";

class ItemService {
  async getOne(id) {
    const item = await Item.findById(id);
    return item;
  }
  async getAll() {
    const items = await Item.find();
    return items;
  }
  async getRecent() {
    const items = await Item.find({ submitted: false }).sort({ createdAt: -1 });
    return items;
  }
  async add(data) {
    const item = await Item.create(data);
    return item;
  }
  async update(id, data) {
    const item = await Item.findByIdAndUpdate(id, data);
    return item;
  }
  async delete(id) {
    const item = await Item.findByIdAndDelete(id);
    return item;
  }
}

export default new ItemService();
