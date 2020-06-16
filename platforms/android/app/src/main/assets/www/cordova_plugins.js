cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-sarriaroman-photoviewer.PhotoViewer",
      "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
      "pluginId": "com-sarriaroman-photoviewer",
      "clobbers": [
        "PhotoViewer"
      ]
    },
    {
      "id": "cordova-admob-plus.AdMob",
      "file": "plugins/cordova-admob-plus/www/admob.js",
      "pluginId": "cordova-admob-plus",
      "clobbers": [
        "admob"
      ]
    }
  ];
  module.exports.metadata = {
    "com-sarriaroman-photoviewer": "1.2.2",
    "cordova-admob-plus": "0.0.0",
    "cordova-admob-sdk": "0.24.1"
  };
});