'use strict';

import mongoose from 'mongoose';

var ExamSchema = new mongoose.Schema({
  id: Number,/*foregin key with questions*/
  name: String,
  activationdate: {type:Date},/*Date object */
  expiredate: {type:Date},
  duration: Number,/*Total Minutes for the exams*/
  students: [String],/*Students who will see the exams*/
  authorid: String
});

export default mongoose.model('Exam', ExamSchema);
