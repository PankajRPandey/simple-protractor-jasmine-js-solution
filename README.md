## SIMPLE PROTRACTOR JASMINE FRAMEWORK
### A simple UI testing framework with reporting and multiple environment support

## TO EXECUTE THE TEST -
### DOWNLOAD ALL THE DEPENDENCIES (THIS WILL BE DONE ONCE)
```npm install```

### UPDATE AND START WEBDRIVER SERVER
#### Update script (wd:update) in the package.json will download the required browser drivers (This will be done once)
```npm run wd:update```
#### Start script (wd:start) will start the Selenium server
```npm run wd:start```

### AND THEN RUN SPECS IN THE SPECIFIC ENVIRONMENT (SAY, TEST)
```npm run specs:test```

### REPORTS CAN BE LOCATED AT reports/htmlreport/report.html
