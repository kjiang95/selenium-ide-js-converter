# Selenium IDE JS Converter
Javascript Converter for html file that is generated from Selenium IDE.

# Installation
```
npm i @kvnjng/selenium-ide-js-converter
```

# Dependencies 
```
selenium-webdriver
mocha
geckodriver.exe
```
Download latest version of geckodriver (Mozilla Firefox Webdriver). Put in main directory.

```
https://github.com/mozilla/geckodriver/releases
```

#### Usage:
```
// convert.js

const seleniumConverter = require('@kvnjng/selenium-ide-js-converter');

let template = `
const assert = require('assert');
const path = require('path');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

describe(path.basename(__filename), function() {
  // --enter test case name (ie. 'example test case')
  test.it('example test case', function(done) {
    this.timeout(0);
    var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    // -----example get path of example test file----- 
    // --enter name of input files folder in main directory (ie. 'examples')  
    // let examplesDirectory = __dirname.split(path.sep).concat(['examples']);
    // --enter name of file (ie. 'study2.txt')
    // driver.findElement(By.id("study_1")).sendKeys(examplesDirectory.concat(['study2.txt']).join(path.sep)).then(function() {
    //   driver.sleep(1000);
    // });

    {-actions-}

    driver.close();
  });
})
`;

seleniumConverter('input_html_tests','output_js_tests', template, 'http://wikipedia.com');
```

#### Supported commands:
```
open
click
clickAndWait
waitForElementPresent
waitForTitle
type
typeAndWait
select
assetText
assertTitle
pause
```

#### Modification:
To add more command or change some variables name in converted JavaScript files, you can checkout 'mappingOrder' variable in 'interpretOrder' function.
