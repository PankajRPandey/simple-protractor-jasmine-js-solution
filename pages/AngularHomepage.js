var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
  
    this.get = function(url) {
      browser.get(url);
    };
  
    this.setName = function(name) {
      nameInput.sendKeys(name);
    };
  
    this.getGreetingText = function() {
      return greeting.getText();
    };
  };
  module.exports = new AngularHomepage();