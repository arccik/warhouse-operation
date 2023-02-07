import Location from "@/models/storageLocation-model";

class StorageLocationService {
  async getOne(id) {
    const location = await Location.findById(id);
    return location;
  }
  async getAll() {
    const locations = await Location.find();
    return locations;
  }
  async add(data) {
    const location = await Location.create(data);
    return location;
  }
  async update(id, data) {
    const location = await Location.findByIdAndUpdate(id, data);
    return location;
  }
  async delete(id) {
    const location = await Location.findByIdAndDelete(id);
    return location;
  }
}

export default new StorageLocationService();
