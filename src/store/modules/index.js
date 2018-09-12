// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐
import { combineReducers } from 'redux';
import postWriter from './postWriter';
import postView from './postView';
import postList from './postList';

export default combineReducers({
   postWriter,
   postView,
   postList
});
