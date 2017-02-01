var packager = require('electron-packager');

packager({
    'dir': '.',
    'out': 'bin/',
    'icon': 'icons/icon.icns',
    'all': true,
    "app-copyright": "2017 Byron Vanstien",
    "app-version": "1.0.0",
    "asar": true
}, function(err, appPaths) {});
