/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';
import compression from 'compression';
//import cors from 'cors';
// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});
// Populate databases with sample data
if (config.seedDB) {
	require('./config/seed'); 
	mongoose.set('debug', config.mongo.debug);
}

// Setup server
var app = express();
app.all(/.*/, function(req, res, next) {
    var host = req.header("host");
    if (host.match(/^www\..*/i)) {
      next();
    } else {
      res.redirect(301, "http://www." + host + req.url);
    }
});
/*app.use(function(request, response, next){
  var host = request.headers.host;
  if(!request.secure){
    if (host.match(/^www\..*//*i)) {
      response.redirect(301, ("https://" + request.headers.host + request.url) );
    }else {
      response.redirect(301, ("https://www." + request.headers.host + request.url) );
    }
  }else{
    if (host.match(/^www\..*//*i)){
      next();
    }else{
      response.redirect(301, ("https://www." + request.headers.host + request.url) );
    }
  }
});*/
app.use(compression());
//app.use(cors());
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio').default(socketio);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
