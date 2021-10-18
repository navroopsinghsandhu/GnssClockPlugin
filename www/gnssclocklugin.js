// Empty constructor
function GnssclockPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
GnssclockPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'GnssclockPlugin', 'show', [options]);
}

// Installation constructor that binds GnssclockPlugin to window
GnssclockPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.gnssclockPlugin = new GnssclockPlugin();
  return window.plugins.gnssclockPlugin;
};
cordova.addConstructor(GnssclockPlugin.install);