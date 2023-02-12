import mainTable from "@/models/mainTable-model";

class MainTable {
  async getOne(id) {
    const dbData = await mainTable.findById(id);
    return dbData;
  }
  async getAll() {
    const dbData = await mainTable.find();
    return dbData;
  }
  async add(data) {
    const dbData = await mainTable.create(data);
    return dbData;
  }
  async addMany(data) {
    // const result = [...data].map(value => ({

    // }))
    const dbData = await mainTable.insertMany(data);
    return dbData;
  }
  async update(id, data) {
    const dbData = await mainTable.findByIdAndUpdate(id, data);
    return dbData;
  }
  async delete(id) {
    const dbData = await mainTable.findByIdAndDelete(id);
    return dbData;
  }
}

export default new MainTable();
