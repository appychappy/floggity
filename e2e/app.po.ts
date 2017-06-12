import { browser, by, element } from 'protractor';

export class FloggityPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('flg-root h1')).getText();
  }
}
