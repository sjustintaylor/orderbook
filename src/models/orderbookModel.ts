import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Asset } from "./assetModel";

class Orderbook {
  @prop({ ref: () => Asset })
  public asset: Ref<Asset>;
  @prop()
  bid?: number;

  @prop()
  ask?: number;
}

export default getModelForClass(Orderbook);
