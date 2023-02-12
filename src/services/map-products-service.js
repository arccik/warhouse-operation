import MapProducts from "@/models/map-product-model";

class MapProductService {
  async get(id) {
    const product = await MapProducts.findById(id);
    return product;
  }
  async getAll() {
    const products = await MapProducts.find();
    return products;
  }
  async update(id, data) {
    const updatedProduct = await MapProducts.findByIdAndUpdate(id, data);
    return updatedProduct;
  }
  async delete(id) {
    const deletedProduct = await MapProducts.findByIdAndDelete(id);
    return deletedProduct;
  }
  async add(data) {
    const product = await MapProducts.create(data);
    return product;
  }
  async addMany(data) {
    const products = await MapProducts.insertMany(data);
    return products;
  }
}
export default new MapProductService();
