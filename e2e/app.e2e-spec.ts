import { FloggityPage } from './app.po';

describe('floggity App', () => {
  let page: FloggityPage;

  beforeEach(() => {
    page = new FloggityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('flg works!');
  });
});
