import { Document, Model, Schema } from 'mongoose';
import { IUser } from '~/models/user';
import { conn } from '~/server/lib/mongodb';

const UserSchema = new Schema(
  {
    _id: String,
    username: { type: String, required: true },
    password: String,
  },
  {
    versionKey: false,
    autoIndex: false,
    timestamps: false,
  },
);

interface IUserStaticMethods {
  findUserById(id: string): Promise<IUser>;
}

const staticMethods: IUserStaticMethods = {
  async findUserById(id) {
    const user = await UserModel.findById(id).lean().exec();
    return user;
  },
};

UserSchema.statics = staticMethods;

export const UserModel = conn.model<IUser & Document, IUserStaticMethods & Model<IUser & Document>>(
  'User',
  UserSchema,
  'user',
);
