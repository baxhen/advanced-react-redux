import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrappedComponent;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };
  wrappedComponent = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('create one <li></li> per comment', () => {
  expect(wrappedComponent.find('li').length).toEqual(2);
});

it('shows the text for each element', () => {
  expect(wrappedComponent.render().text()).toContain('Comment 1');
  expect(wrappedComponent.render().text()).toContain('Comment 2');
});
