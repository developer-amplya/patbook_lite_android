cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-sarriaroman-photoviewer.PhotoViewer",
      "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
      "pluginId": "com-sarriaroman-photoviewer",
      "clobbers": [
        "PhotoViewer"
      ]
    }
  ];
  module.exports.metadata = {
    "com-sarriaroman-photoviewer": "1.2.2",
    "cordova-admob-sdk": "0.24.1",
    "cordova-plugin-whitelist": "1.3.3"
  };
});