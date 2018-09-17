import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const FETCH_DATA = 'postView/FETCH_DATA';
const TOGGLE_LIKE = 'postView/TOGGLE_LIKE';
const TOGGLE_DATA = 'postView/TOGGLE_DATA';

export const fetchData = createAction(FETCH_DATA, data => data);
export const toggleLike = createAction(TOGGLE_LIKE, isLike => isLike);
export const toggleData = createAction(TOGGLE_DATA, isData => isData);

const initialState = Map({
   data: Map({}),
   like: false,
   isData: false
});

export default handleActions(
   {
      [FETCH_DATA]: (state, action) => state.set('data', Map(action.payload)),
      [TOGGLE_LIKE]: (state, action) => state.set('like', action.payload),
      [TOGGLE_DATA]: (state, action) => state.set('isData', action.payload)
   },
   initialState
);
