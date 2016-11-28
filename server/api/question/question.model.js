'use strict';

import mongoose from 'mongoose';

var QuestionSchema = new mongoose.Schema({
  id: Number,
  information: String,
  instruction: String,
  questiontext: String,
  type: String,
  options: [Number]
});

export default mongoose.model('Question', QuestionSchema);
