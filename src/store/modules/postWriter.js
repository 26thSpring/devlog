import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 미리보기 관련 상태 로직

// 액션 타입 정의
const CHANGE_TITLE = 'postWriter/CHANGE_TITLE';
const CHANGE_CONTENT = 'postWriter/CHANGE_CONTENT';
const WRITER_IMAGE = 'postWriter/WRITER_IMAGE';
const PREVIEW_IMAGE = 'postWriter/PREVIEW_IMAGE';
const CLEAR_IMAGE = 'postWriter/CLEAR_IMAGE';
const ACTIVE_SUBMIT = 'postWriter/ACTIVE_SUBMIT';
const HIDE_SUBMIT = 'postWriter/HIDE_SUBMIT';
const SUBMIT = 'postWriter/SUBMIT';
const INIT_STATE = 'postWriter/INIT_STATE';

export const changeTitle = createAction(CHANGE_TITLE, text => text);
export const changeContent = createAction(CHANGE_CONTENT, text => text);
export const writerImage = createAction(WRITER_IMAGE, img => img); // WriterContent 에 이미지 공간 적용
export const previewImage = createAction(PREVIEW_IMAGE, img => img); // 콘텐츠에 이미지 append
export const clearImage = createAction(CLEAR_IMAGE);
export const activeSubmit = createAction(ACTIVE_SUBMIT, visible => visible);
export const hideSubmit = createAction(HIDE_SUBMIT, visible => visible);
export const submit = createAction(SUBMIT);
export const initState = createAction(INIT_STATE);

const initialState = Map({
   image: '',
   images: List(),
   input_content: '',
   preview: Map({
      title: '',
      content: ''
   }),
   active: false
});

export default handleActions(
   {
      [CHANGE_TITLE]: (state, action) =>
         state.setIn(['preview', 'title'], action.payload),
      [CHANGE_CONTENT]: (state, action) =>
         state.setIn(['preview', 'content'], action.payload),
      [WRITER_IMAGE]: (state, action) =>
         state.set(
            'input_content',
            state.getIn(['preview', 'content']) + action.payload
         ),
      [PREVIEW_IMAGE]: (state, action) =>
         state.setIn(
            ['preview', 'content'],
            state.getIn(['preview', 'content']) + action.payload
         ),
      [CLEAR_IMAGE]: (state, action) => state.set('image', ''),
      [ACTIVE_SUBMIT]: (state, action) => state.set('active', true),
      [HIDE_SUBMIT]: (state, action) => state.set('active', false),
      [INIT_STATE]: (state, action) => state.set('preview', Map())
   },
   initialState
);
