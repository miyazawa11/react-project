import * as mongoose from 'mongoose'

//extends mongoose.Documentに注意
export interface User extends mongoose.Document {
  username: string;
  password: string;
}