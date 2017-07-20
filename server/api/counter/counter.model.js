'use strict';

import mongoose from 'mongoose';

var CounterSchema = new mongoose.Schema({
  id: String,
  seq: Number
});

export default mongoose.model('Counter', CounterSchema);
