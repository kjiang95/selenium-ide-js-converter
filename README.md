# Selenium IDE JS Converter
Tool to convert html test files generated from Selenium IDE into runnable node.js test files (via Firefox webdriver).

# Dependencies 
```
selenium-webdriver
mocha
geckodriver.exe
```

# Installation
```
1) Clone repo 'https://github.com/kvnjng/selenium-ide-js-converter.git'
2) Open console in folder and type 'npm i --save mocha'
3) Download the latest version of 'geckodriver' (Mozilla Firefox Webdriver) and place in main directory: (https://github.com/mozilla/geckodriver/releases)
4) Place your Selenium-generated html test cases in the 'input_html_tests' folder
5) Type 'node convert.js' to convert all test cases placed in 'input_html_tests' folder. Converted tests will be placed in 'output_js_tests' folder
6) Type 'npm test' to run all javascript test cases in the 'output_js_tests' folder
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
To modify the test conversion template, open and edit the 'convert.js' file.
To add more commands, edit the 'mappingOrder' variable in 'interpretOrder' function in the 'engine.js' file.
