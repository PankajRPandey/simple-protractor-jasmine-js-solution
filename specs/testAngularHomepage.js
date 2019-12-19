var angularHomepage = require('../pages/AngularHomepage');
var common = require('../conf/env');
var envConfig = common.envConfig();

var ENV = common.currentEnv().toString();
console.log(ENV);
var url = envConfig.url;
var greetingUser = envConfig.hp.greetingName;

describe('Env : '+ENV+' - angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get(url);
    angularHomepage.setName(greetingUser);
    expect(angularHomepage.getGreetingText()).toEqual('Hello '+greetingUser+'!');
  });
});