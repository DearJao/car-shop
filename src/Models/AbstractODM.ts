import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';

class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id }, { __v: 0 });
  }

  public async update(id: string, obj: T): Promise<T | null> {
    await this.model.updateOne({ _id: id }, { ...obj } as UpdateQuery<T>, { new: true });
    return { id, ...obj };
  }
}

export default AbstractODM;