'use strict';

import mongoose from 'mongoose';

var ClassroomSchema = new mongoose.Schema({
  name: String,
  admin: String,
  students: [{
  	name:String,
  	id:String
  }]
});

export default mongoose.model('Classroom', ClassroomSchema);
