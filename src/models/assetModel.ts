import { getModelForClass, prop } from "@typegoose/typegoose";

class Asset {
  @prop()
  public name: string;
}

const AssetModel = getModelForClass(Asset);

export default AssetModel;
