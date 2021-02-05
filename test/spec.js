const assert = require('assert');
const path = require('path');
const Application = require('spectron').Application;
const electronPath = require('electron');

const app = new Application({
  path: electronPath,
  args: [path.join(__dirname, '../src')]
});

describe('Application launch', function () {

  this.timeout(10000);

  before(() => {
    return app.start();
  });

  after(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('display the electron app window', async () => {
    const count = await app.client.getWindowCount();
    return assert.equal(count, 1);
  });

});