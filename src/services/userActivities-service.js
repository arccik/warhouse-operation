import UserActivities from "@/models/userActivities-model";

class UserActivitiesService {
  async add(data) {
    const result = await UserActivities.create(data);
    return result;
  }
  async get(id, data) {
    const result = await UserActivities.findByIdAndUpdate(id, data);
    return result;
  }
  async delete(id) {
    const result = await UserActivities.findByIdAndDelete(id);
    return result;
  }
  async update() {
    const result = await UserActivities.find();
    return result;
  }
  async getAll(id) {
    const result = await UserActivities.findById(id);
    return result;
  }
}

export default new UserActivitiesService();
