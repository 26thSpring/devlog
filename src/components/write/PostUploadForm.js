import React, { Component } from 'react';
import './PostUploadForm.scss';
import thumnailUpload from 'img/writer/thumnailUpload.svg';

class PostUploadForm extends Component {
   constructor() {
      super();
   }
   componentDidMount() {
      document.getElementsByTagName(
         'body'
      )[0].onclick = this.props.handleActiveOff;
   }
   render() {
      return (
         <div
            onClick={this.props.handleActiveOn}
            className={`PostUploadTemplate ${this.props.active && 'active'}`}
         >
            <div className="PostUploadContent">
               <div className="header">새 글 작성하기</div>
               <div className="section">
                  <div className="section__tag">
                     <span>태그 설정</span>
                     <div className="section__tag__form">
                        <input type="text" placeholder="태그를 입력하세요" />
                        <div className="section__tag__form__add">등록</div>
                     </div>
                  </div>
                  <div className="section__thumnail">
                     <span>썸네일 업로드</span>
                     <label
                        for="thumnail"
                        className="section__thumnail__uploadBtn"
                     >
                        <img src={thumnailUpload} alt="thumnailUpload" />
                        업로드
                     </label>
                     <input
                        id="thumnail"
                        name="thumnail"
                        type="file"
                        style={{ display: 'none' }}
                     />
                  </div>
               </div>
               <div className="footer">
                  <div>추가 설정</div>
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
