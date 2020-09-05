import { ActionTypes } from 'actions';
export default function (state = [], action) {
  switch (action.type) {
    case ActionTypes.SAVE_COMMENT:
      return [...state, action.payload];
    case ActionTypes.FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => comment.name);

      return [...state, ...comments];
    default:
      return state;
  }
}
