import { prop } from "@typegoose/typegoose";

export default class Order {
  @prop()
  public id: number;
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
