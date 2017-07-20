'use strict';

import mongoose from 'mongoose';

var ExamSchema = new mongoose.Schema({
  name: String,
  activationdate: Number,
  expiredate: Number,
  duration: Number,
  students: [Number],
  questions: [Number],
  authorid: String,
  authorname: String
});

export default mongoose.model('Exam', ExamSchema);
