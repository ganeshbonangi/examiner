'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/examcolors',
    options:{
      useMongoClient: true
    }
  },

  // Seed database on startup
  seedDB: true

};
