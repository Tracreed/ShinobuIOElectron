var packager = require('electron-packager');

packager({
    'dir': '.',
    'out': 'bin/',
    'icon': 'icon/',
    'all': true,
    "app-copyright": "2017 Byron Vanstien",
    "app-version": "1.0.0",
    "asar": true,
    "ovewrite": true,
}, function(err, appPaths) {});
