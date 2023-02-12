import { Schema, model, models, Types } from "mongoose";

const MapProductSchema = new Schema(
  {
    Material: String,
    Description: String,
    "Prod Hierarchy Desc": String,
    MAP: Types.Decimal128,
  },
  { timestamps: true }
);

export default models["MapProduct"] || model("MapProduct", MapProductSchema);
