'use strict';

import mongoose from 'mongoose';

var ReportSchema = new mongoose.Schema({
  examid: String,
  userid: String,
  corrects:Number,
  wrongs: Number
});

export default mongoose.model('Report', ReportSchema);
