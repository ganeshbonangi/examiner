'use strict';

import mongoose from 'mongoose';

var ExamSchema = new mongoose.Schema({
  id: Number,
  name: String,
  activationdate: Number,
  expiredate: Number,
  duration: Number,
  students: [Number],
  questions: [Number],
  authorid: Number,
  authorname: String
});

export default mongoose.model('Exam', ExamSchema);
