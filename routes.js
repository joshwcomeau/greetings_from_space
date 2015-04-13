var path    = require('path'),
    request = require('request');


var API_KEY   = 'caivMvUMm1x4HLA2z12d7yUvw7NLpaQDeDhKGhPg';
var nasa_url  = 'https://api.data.gov/nasa/planetary/apod?api_key='+API_KEY;

module.exports = function(app) {
  // Server routes =========================================
  app.get('/api/nasa/:year/:month/:day', function(req, res) {

    request(nasa_url, function(error, nasaRes, body) {
      res.json(body);
    });
  });


  // Client routes =========================================

  // Backbone will handle all front-end routes, SPA-style. Just send it there.
  app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './app') });
  });
};