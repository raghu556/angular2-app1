import { AngularFormValidationPage } from './app.po';

describe('angular-form-validation App', function() {
  let page: AngularFormValidationPage;

  beforeEach(() => {
    page = new AngularFormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
