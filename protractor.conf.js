/**
 * Created by luis.aviles on 10/8/2014.
 */
exports.config = {
    // The address of a running selenium server.
    // Uncomment this line if using a custom *running* Selenium server i    s desired.
    // Leaving commented out as we want the app to take care of starting up its own Selenium Server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Patterns to exclude.
    exclude: [],
    // Alternatively, suites may be used. When run without a command line
    // parameter, all suites will run. If run with --suite=smoke or
    // --suite=smoke,full only the patterns matched by the specified suites will
    // run.
    suites: {
        'default-all': 'test/e2e/default/**/*.spec.js'
    },

    multiCapabilities: [
        {
            'browserName': 'chrome'
        }
    ],

    params: {
        protocol: 'http',
        host: 'localhost',
        port: 9000
    },

    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9000',

    allScriptsTimeout: 60000,

    // How long to wait for a page to load.
    getPageTimeout: 60000,

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    }
};
