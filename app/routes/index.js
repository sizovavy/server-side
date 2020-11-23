const phoneRoutes = require('./phone_routes');
module.exports = function(app, db) {
  phoneRoutes(app, db);
  
};