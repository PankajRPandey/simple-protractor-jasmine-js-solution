module.exports = {
//Create test data for different environment here
//Best part of this file is that we can add comments

    // Development env data
    dev: {
      url : 'http://www.angularjs.org',
        database: {
            host: '127.0.0.1',
            login: 'dev',
            password: 'dev'
          }
        ,
      hp:{
        greetingName  : 'John'
      }
    },
  
    // Test env data
    test: {
      url : 'http://www.angularjs.org',
        database: {
            host: '127.0.0.1',
            login: 'test',
            password: 'test'
          },
      hp:{
        greetingName  : 'Joyner'
    }
    }
  };