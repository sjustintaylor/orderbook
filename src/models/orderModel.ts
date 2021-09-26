import { getModelForClass, prop } from "@typegoose/typegoose";

class Order {
  @prop()
  assetCode: number;
  @prop()
  type: "BUY" | "SELL";
  @prop()
  price: number;
  @prop()
  amount: number;
  @prop()
  status: "OPEN" | "CANCELLED" | "FILLED" | "PARTIAL";
  @prop()
  timestamp: Date;
}

export default getModelForClass(Order);
