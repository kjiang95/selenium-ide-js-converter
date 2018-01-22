
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
    // --enter name of example input files folder in main directory (ie. 'examples')  
    // let examplesDirectory = __dirname.split(path.sep).concat(['examples']);

    // --enter name of file (ie. 'study2.txt')
    // driver.findElement(By.id("study_1")).sendKeys(examplesDirectory.concat(['study2.txt']).join(path.sep)).then(function() {
    //   driver.sleep(1000);
    // });

    driver.get("https://www.google.com"+"/search?q=what+is+wrong+with+firefox+selenium&ie=utf-8&oe=utf-8");
		driver.sleep('2000');
		driver.findElement(By.linkText("Firefox 55 and Selenium IDE | Official Selenium Blog")).click();
		driver.sleep('3000');
		driver.findElement(By.xpath("//div[@id='post-1341']/div[2]/p[3]/span")).getText().then(text=> {
			assert(text == 'Selenium is one of the most widely used pieces of testing software there is. Despite this, the team of people regularly contributing is small: since the start of the year, there are only 11 people who have made more than 10 commits, with two people accounting for more than half of those. Since 2016, only one person has been maintaining the IDE.');
			done();
		});
		

    driver.close();
  });
})
