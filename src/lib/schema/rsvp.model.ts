import mongoose, { Schema, models } from 'mongoose';

export const RsvpSchema = new Schema({
  side: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  willAttend: {
    type: String,
    required: true
  },
  willEat: {
    type: String,
    required: true
  },
  message: {
    type: String,
    require: false
  },
  companionCount: {
    type: Number,
    require: false
  },
  companionName: {
    type: String,
    require: false
  }
});
const Rsvp = models?.Rsvp || mongoose.model('Rsvp', RsvpSchema);

export default Rsvp;
