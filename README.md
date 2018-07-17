# Selenium IDE JS Converter
Tool to convert html test files generated from Selenium IDE or Kantu Browser into runnable Node.JS test files (via Firefox webdriver).

# Dependencies 
```
selenium-webdriver
mocha
geckodriver.exe
```

# Installation
```
1) Clone repo 'https://github.com/kvnjng/selenium-ide-js-converter.git'
2) Open console in folder and type 'npm i'
3) Download a version of 'geckodriver' that is compatible with your Firefox browser version and place in main directory (ie. geckodriver v0.18.0 (32-bit) with Firefox v52.8.1 (32-bit): https://github.com/mozilla/geckodriver/releases/download/v0.18.0/geckodriver-v0.18.0-win32.zip)
4) Place your Selenium-generated html test cases in the 'input_html_tests' folder
5) Type 'node convert.js' to convert all test cases placed in 'input_html_tests' folder. Converted tests will be placed in 'output_js_tests' folder
6) Type 'npm test' to run all javascript test cases in the 'output_js_tests' folder
7) To export test results to another file, change the 'test' value under 'scripts:' to 'mocha output_js_tests/ --reporter xunit --reporter-options output=output_js_tests/e2e_results.xml' in 'package.json'
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
assertText
assertTitle
pause
```

#### Modification:
```
To modify the test conversion template, open and edit the 'convert.js' file.
To add more commands, edit the 'mappingOrder' variable in 'interpretOrder' function in the 'engine.js' file.
To further develop test case, open and edit .js files generated in 'output_js_tests' folder and refer to Mocha and Selenium-webdriver documentation
```