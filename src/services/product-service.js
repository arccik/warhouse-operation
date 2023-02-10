import Product from "@/models/product-model";

class ProductService {
  async get(id) {
    const products = await Product.findById(id);
    return products;
  }
  async getAll() {
    const products = await Product.find();
    return products;
  }
  async update(id, data) {
    const updatedProduct = await Product.findByIdAndUpdate(id, data);
    return updatedProduct;
  }
  async delete(id) {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  }
  async add(data) {
    const product = await Product.create(data);
    return product;
  }
  async addMany(data) {
    const products = await Product.insertMany(data);
    return products;
  }
}
export default new ProductService();
