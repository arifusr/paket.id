// Initializes the `connotes` service on path `/connote`
const { Connotes } = require('./connotes.class');
const createModel = require('../../models/connotes.model');
const hooks = require('./connotes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/connote', new Connotes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('connote');

  service.hooks(hooks);
};
