module.exports = function(config) {
  const jqueryFile = process.env.jqueryOld === 'true' ? 'js/tests/vendor/jquery-1.9.1.min.js' : 'assets/js/vendor/jquery-slim.min.js'
  config.set({
    frameworks: ['qunit'],
    plugins: ['karma-chrome-launcher', 'karma-qunit'],
    // list of files / patterns to load in the browser
    files: [
      jqueryFile,
      'assets/js/vendor/popper.min.js',
      'js/dist/util.js',
      'js/dist/alert.js',
      'js/dist/button.js',
      'js/dist/carousel.js',
      'js/dist/collapse.js',
      'js/dist/dropdown.js',
      'js/dist/modal.js',
      'js/dist/tooltip.js',
      'js/dist/popover.js',
      'js/dist/scrollspy.js',
      'js/dist/tab.js',
      'js/tests/unit/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR || config.LOG_WARN,
    autoWatch: false,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
