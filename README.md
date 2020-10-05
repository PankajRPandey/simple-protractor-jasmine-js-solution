<h1 align="center">

SIMPLE PROTRACTOR JASMINE SOLUTION
</h1>
<h2 align="center">A simple UI testing solution with reporting and multiple environment support </h2>


<h1 align="center">
  <br> 
  
  Environment+Data Configuration
  <br>
  <br>
  <img src="docs\images\Protractor-Jasmine-JS-Solution-Env-Config.png" alt="Environment+Data Configuration" width="800">

</h1>

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
