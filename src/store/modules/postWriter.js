import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 미리보기 관련 상태 로직

// 액션 타입 정의
const CHANGE_TITLE = 'postWriter/CHANGE_TITLE';
const CHANGE_CONTENT = 'postWriter/CHANGE_CONTENT';
const PREVIEW_IMAGE = 'postWriter/PREVIEW_IMAGE';
const CLEAR_IMAGE = 'postWriter/IMAGE_CLEAR';
const TOGGLE_SUBMIT = 'postWriter/TOGGLE_SUBMIT';
const SUBMIT = 'postWriter/SUBMIT';

export const changeTitle = createAction(CHANGE_TITLE, text => text);
export const changeContent = createAction(CHANGE_CONTENT, text => text);
export const previewImage = createAction(PREVIEW_IMAGE, img => img);
export const clearImage = createAction(CLEAR_IMAGE);
export const toggleSubmit = createAction(TOGGLE_SUBMIT, visible => visible);
export const submit = createAction(SUBMIT);

const initialState = Map({
   image: '',
   images: List(),
   input_content: '',
   preview: Map({
      title: '',
      content: ''
   })
});

export default handleActions(
   {
      [CHANGE_TITLE]: (state, action) =>
         state.setIn(['preview', 'title'], action.payload),
      [CHANGE_CONTENT]: (state, action) =>
         state.setIn(['preview', 'input_content'], action.payload),
      [PREVIEW_IMAGE]: (state, action) =>
         state
            .setIn(
               ['preview', 'content'],
               state.getIn(['preview', 'content']) + action.payload
            )
            .set('images', state.get('images').push(action.payload)),
      [CLEAR_IMAGE]: (state, action) => state.set('image', '')
   },
   initialState
);
