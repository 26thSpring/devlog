import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const FETCH_DATA = 'postList/FETCH_DATA';

export const fetchData = createAction(FETCH_DATA, data => data);

const initialState = Map({
   isData: false,
   data: Map({
      nickname: '',
      posts: List()
   })
});

export default handleActions(
   {
      [FETCH_DATA]: (state, action) => state.set('data', action.payload)
   },
   initialState
);
