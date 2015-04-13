var path = require('path');




module.exports = function(app) {
  // Server routes =========================================
  // Handles things like API calls and authentication


  // Client routes =========================================

  // Backbone will handle all front-end routes, SPA-style. Just send it there.
  app.get('*', function(req, res) {
    console.log('request', path.join(__dirname, '/app'));
    res.sendFile('index.html', { root: path.join(__dirname, './app') });
  });
};