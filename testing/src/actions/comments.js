import axios from 'axios';
import { ActionTypes } from 'actions';

export function saveComment(comment) {
  return { type: ActionTypes.SAVE_COMMENT, payload: comment };
}

export function fetchComments() {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');

  return { type: ActionTypes.FETCH_COMMENTS, payload: response };
}
