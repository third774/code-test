import { TodoDemoPage } from './app.po';

describe('todo-demo App', () => {
  let page: TodoDemoPage;

  beforeEach(() => {
    page = new TodoDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
