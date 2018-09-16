import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const LOGIN = 'mainHeader/LOGIN';
const LOGOUT = 'mainHeader/LOGOUT';
const REGISTER = 'mainHeader/REGISTER';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER);

const initialState = Map({
   user_profile: Map({
      username: '',
      id: '',
      nickname: '',
      thumnail: ''
   }),
   isLogin: false
});

export default handleActions({
   [LOGIN]: null,
   [LOGOUT]: null,
   [REGISTER]: null
});
