import { CDONPage } from './app.po';

describe('cdon App', () => {
  let page: CDONPage;

  beforeEach(() => {
    page = new CDONPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
