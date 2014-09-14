cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/ADBMobile/sdks/Cordova/ADBMobile/Shared/ADBHelper.js",
        "id": "ADBMobile.ADBHelper",
        "clobbers": [
            "ADB"
        ]
    },
    {
        "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
        "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.calendar/www/Calendar.js",
        "id": "nl.x-services.plugins.calendar.Calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.calendar/test/tests.js",
        "id": "nl.x-services.plugins.calendar.tests"
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.adlotto.cordova.recheck-screen-orientation/www/recheck_screen_orientation.js",
        "id": "org.adlotto.cordova.recheck-screen-orientation.RecheckScreenOrientation",
        "clobbers": [
            "cordova.recheckScreenOrientation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.devgeeks.Canvas2ImagePlugin/www/Canvas2ImagePlugin.js",
        "id": "org.devgeeks.Canvas2ImagePlugin.Canvas2ImagePlugin",
        "clobbers": [
            "window.canvas2ImagePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "ADBMobile": "1.0.0",
    "com.brodysoft.sqlitePlugin": "1.0.2",
    "nl.x-services.plugins.calendar": "4.2.6",
    "nl.x-services.plugins.socialsharing": "4.3.4",
    "org.adlotto.cordova.recheck-screen-orientation": "0.1.0",
    "org.apache.cordova.console": "0.2.10",
    "org.apache.cordova.device": "0.2.11",
    "org.apache.cordova.geolocation": "0.3.9",
    "org.apache.cordova.inappbrowser": "0.5.1",
    "org.apache.cordova.network-information": "0.2.11",
    "org.devgeeks.Canvas2ImagePlugin": "0.6.0"
}
// BOTTOM OF METADATA
});