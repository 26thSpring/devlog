import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const FETCH_DATA = 'postList/FETCH_DATA';
const TOGGLE_DATA = 'postList/TOGGLE_DATA';

export const fetchData = createAction(FETCH_DATA, data => data);
export const toggleData = createAction(TOGGLE_DATA, bool => bool);

const initialState = Map({
   isData: false,
   data: Map({
      profile: Map({
         nickname: '',
         thumnail: ''
      }),
      posts: List()
   })
});

export default handleActions(
   {
      [FETCH_DATA]: (state, action) => state.set('data', action.payload),
      [TOGGLE_DATA]: (state, action) => state.set('isData', action.payload)
   },
   initialState
);
