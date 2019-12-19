var reportsDirectory = 'report';
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
      'browserName': 'chrome'
    },

  //This will run all the specs present in the specs folder
  specs: ['../specs/*.js'],
  
  //Setup reports using protractor-beautiful-reporter library with a different document title
	onPrepare: function () {
		jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: reportsDirectory + '/htmlreports',
            docTitle: 'Protractor test result'
		}).getJasmine2Reporter());
	}
  };