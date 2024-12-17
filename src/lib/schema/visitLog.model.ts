import mongoose , { models, Schema } from "mongoose";

export const VisitLogSchema = new Schema({
  thumbnail : {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  message: { 
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
  
})
const VisitLog = models?.VisitLog || mongoose.model('VisitLog', VisitLogSchema);
export default VisitLog;