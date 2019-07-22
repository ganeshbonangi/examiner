'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/examcolors',//'mongodb://ganesh007:ganesh007@ds061208.mlab.com:61208/examcolors',
    options:{
      useMongoClient: true
    },
    debug:true
  },

  // Seed database on startup
  seedDB: true

};
