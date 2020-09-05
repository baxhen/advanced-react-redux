import commentsReducer from 'reducers/commentsReducer';
import { ActionTypes } from 'actions';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: ActionTypes.SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
