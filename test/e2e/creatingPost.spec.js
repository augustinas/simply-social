var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('making a post', function () {
  it('logs in and creates a new post', function () {
    browser.get('http://localhost:3001');

    element(by.css('nav .login')).click();

    element(by.model('username')).sendKeys('gaugis');
    element(by.model('password')).sendKeys('testtest');
    element(by.css('form .btn')).click();

    element(by.css('nav .posts')).click();

    var post = 'my new post ' + Math.random();
    element(by.model('postBody')).sendKeys(post);
    element(by.css('form .btn')).click();

    expect(element.all(by.css('ul.list-group li')).first().getText())
      .to.eventually.contain(post);
  });
});