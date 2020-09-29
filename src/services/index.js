const packages = require('./packages/packages.service.js');
const connotes = require('./connotes/connotes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(packages);
  app.configure(connotes);
};
