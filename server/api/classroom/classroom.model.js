'use strict';

import mongoose from 'mongoose';

var ClassroomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  admin: Number,
  students: [Number]
});

export default mongoose.model('Classroom', ClassroomSchema);
