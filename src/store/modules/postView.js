import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const FETCH_DATA = 'postView/FETCH_DATA';
const TOGGLE_LIKE = 'postView/TOGGLE_LIKE';

export const fetchData = createAction(FETCH_DATA, data => data);
export const toggleLike = createAction(TOGGLE_LIKE, isLike => isLike);

const initialState = Map({
   data: Map({}),
   like: false
});

export default handleActions(
   {
      [FETCH_DATA]: (state, action) => state.set('data', Map(action.payload)),
      [TOGGLE_LIKE]: (state, action) => state.set('like', action.payload)
   },
   initialState
);
