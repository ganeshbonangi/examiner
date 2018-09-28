'use strict';

import mongoose from 'mongoose';
var BlanksSchema = new mongoose.Schema({
  id: Number,
  instruction: String,
  questiontext: String,
  type: String,
  answer:String,
  uploadedby: String,
  uploadeddate:{ type: Date, default: Date.now },
  explanation: [{text:String}],
  category: String
  });
export default mongoose.model('Blank', BlankSchema);
