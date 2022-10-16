import { model, Schema } from "mongoose";

const ApartmentSchema = new Schema({
  projectId: { type: String, require: true },
  floorId: { type: String, require: true },
  roomId: { type: String, require: true },
  status: { type: String, require: true },
  date: { type: Date, require: true },
  name: { type: String },
  phoneNumber: { type: String },
  price: { type: String },
});
export default model("Apartmnet", ApartmentSchema);
