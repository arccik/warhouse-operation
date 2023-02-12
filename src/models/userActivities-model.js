import { Schema, model, models } from "mongoose";

const userActivitiesSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: { type: String },
    checked: { type: Boolean },
    comments: { type: String },
  },
  { timestamps: true }
);

export default models["UserActivities"] ||
  model("UserActivities", userActivitiesSchema);
