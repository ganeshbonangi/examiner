'use strict';

import mongoose from 'mongoose';

var CounterSchema = new mongoose.Schema({
  sequence_value: Number
});

export default mongoose.model('Counter', CounterSchema);
