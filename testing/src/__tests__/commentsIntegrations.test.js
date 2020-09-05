import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});
afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );

  wrappedComponent.find('#fetchComments').simulate('click');

  moxios.wait(() => {
    wrappedComponent.update();

    expect(wrappedComponent.find('li').length).toEqual(2);

    done();
    wrappedComponent.unmount();
  });
});
