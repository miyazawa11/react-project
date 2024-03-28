import * as mongoose from 'mongoose'
export const PlanSchema = new mongoose.Schema({
  id:{
    type:String
  },
  title: {
    type: String,
  },
  images : {
    type: [String],
  },
  description : {
    type: String,
  },
  fromTime: {
    type: Date,
  },
  toTime: {
    type: Date,
  },
  tags: {
    type: [String],
  },
  resultArea: {
    type: Boolean,
  },
})