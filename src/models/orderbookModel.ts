import { prop } from "@typegoose/typegoose";
import Asset from "./assetModel";

export default class Orderbook {
  @prop()
  public id: number;

  @prop()
  public name?: string;

  @prop()
  asset: Asset;

  @prop()
  bid?: number;

  @prop()
  ask?: number;
}
