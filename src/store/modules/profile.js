import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const FETCH_DATA = 'profile/FETCH_DATA';
const IS_DATA = 'profile/IS_DATA';

export const fetchData = createAction(FETCH_DATA, data => data);
export const isData = createAction(IS_DATA, isData => isData);

const initialState = Map({
   data: Map({}),
   isData: false
});

export default handleActions(
   {
      [FETCH_DATA]: (state, action) => state.set('data', action.payload),
      [IS_DATA]: (state, action) => state.set('isData', action.payload)
   },
   initialState
);
