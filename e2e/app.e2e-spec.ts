import { AvMaterialPage } from './app.po';

describe('av-material App', function() {
  let page: AvMaterialPage;

  beforeEach(() => {
    page = new AvMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
