import React, { Component } from 'react';
import './PostUploadForm.scss';
import thumnailUpload from 'img/writer/thumnailUpload.svg';

class PostUploadForm extends Component {
   render() {
      return (
         <div className={`PostUploadTemplate ${this.props.active && 'active'}`}>
            <div className="PostUploadForm">
               <div className="PostUploadForm__header">새 글 작성하기</div>
               <div className="PostUploadForm__section">
                  <div className="PostUploadForm__section__tag">
                     <div className="section__tag">
                        <span>태그 설정</span>
                        <div className="section__tag__form">
                           <div
                              className="shadow"
                              style={{ position: 'relative' }}
                           >
                              <font
                                 style={{
                                    position: 'absolute',
                                    left: '0.3rem',
                                    top: '0.2rem',
                                    color: 'rgba(0,0,0,0.3)'
                                 }}
                              >
                                 #
                              </font>
                              <input type="text" placeholder="태그" />
                           </div>
                           <span className="">추가</span>
                        </div>
                     </div>
                     <div className="section__thumnail">
                        <span>썸네일 등록</span>
                        <label
                           for="thumnailUpload"
                           className="btn__thumnailUpload"
                        >
                           <img src={thumnailUpload} alt="thumnailUpload" />
                           업로드
                        </label>
                        <input
                           id="thumnailUpload"
                           name="thumnail"
                           type="file"
                           style={{ display: 'none' }}
                        />
                     </div>
                  </div>
               </div>
               <div className="PostUploadForm__footer">
                  <span>추가 설정</span>
                  <input
                     className="footer__submitBtn"
                     type="submit"
                     value="저장하기"
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default PostUploadForm;
