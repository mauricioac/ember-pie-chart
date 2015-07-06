/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pie-chart',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/pie-chart.css');
  },
  isDevelopingAddon: function() {
    return true;
  }
};
