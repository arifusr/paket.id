const assert = require('assert');
const app = require('../../src/app');

describe('\'connotes\' service', () => {
  it('registered the service', () => {
    const service = app.service('connote');

    assert.ok(service, 'Registered the service');
  });
});
