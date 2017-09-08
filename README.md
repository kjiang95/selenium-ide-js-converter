# Selenium IDE JS Converter
Tool to convert html test files generated from Selenium IDE into runnable node.js test files (via Firefox webdriver).

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

# Installation
```
1) Create a file named 'convert.js'
2) Copy, paste, and edit convert.js template (below)
3) Download geckodriver and place in main directory
4) Create two folders: 'input_html_tests' , 'output_js_tests' , and place in main directory
5) Place your Selenium-generated html test case in the 'input_html_tests' folder
6) Open console in folder and type 'npm i @kvnjng/selenium-ide-js-converter mocha'
7) Type 'node convert.js' to convert all test cases placed in 'input_html_tests' folder. Converted tests will be placed in 'output_js_tests'
8) Type 'npm test' to run all javascript test cases in the 'output_js_tests' folder
```

#### convert.js template:
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

// --change last parameter to your base url (ie. 'http://wikipedia.com')
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
To add more commands, clone repo 'https://github.com/kvnjng/selenium-ide-js-converter.git' and edit the 'mappingOrder' variable in 'interpretOrder' function (engine.js).
