import Product from "@/models/product-model";

class ProductService {
  async get() {
    const products = await Product.findById();
    return products;
  }
  async getById(id) {
    const products = await Product.findById(id);
    return products;
  }
  async getAll(page) {
    const PAGE_LIMIT = 21;
    const startIndex = Math.abs(Number(page) - 1) * PAGE_LIMIT;
    const products = await Product.find().limit(PAGE_LIMIT).skip(startIndex);
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
  async getNotSubmitted() {
    const products = await Product.find({ submitted: false });
    return products;
  }
}
export default new ProductService();
