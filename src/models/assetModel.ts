import { getModelForClass, prop } from "@typegoose/typegoose";

export class Asset {
  @prop()
  public name: string;
}

const AssetModel = getModelForClass(Asset);

export default AssetModel;
