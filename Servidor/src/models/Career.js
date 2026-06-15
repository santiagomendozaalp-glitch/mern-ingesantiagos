import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000
    },
    field: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
      max: 10
    },
    image: {
      type: String,
      default: ''
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    }
  },
  { timestamps: true }
);

const Career = mongoose.model('Career', careerSchema);

export default Career;
