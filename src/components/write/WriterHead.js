import React, { Component, Fragment } from 'react';
import './WriterHead.scss';
import { Link } from 'react-router-dom';
import backBtn from 'img/writer/backBtn.svg';
import utils from 'img/writer/utilsBtn.svg';
import { PostUploadForm } from 'components/index.async';
import { MdArrowBack } from 'react-icons/md';
import { IconContext } from 'react-icons';

class WriterHead extends Component {
   render() {
      return (
         <Fragment>
            <div className="WriterHead">
               <Link
                  to="/"
                  className="WriterHead__backBtn"
                  onClick={this.props.onOutPage.bind(this)}
               >
                  <IconContext.Provider
                     value={{ size: '33', color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                     <MdArrowBack />
                  </IconContext.Provider>
               </Link>
               <input
                  name="title"
                  className="WriterHead__title"
                  type="text"
                  placeholder="제목을 입력하세요"
                  autoComplete="off"
                  onChange={this.props.onTitleChange}
               />
               <div className="WriterHead__buttons">
                  {/* <Link to="/" className="WriterHead__buttons__temporarySubmit">
                     임시저장
                  </Link> */}
                  <div
                     className="WriterHead__buttons__submit"
                     onClick={this.props.handleActiveOn}
                  >
                     작성하기
                  </div>
                  {/* <div className="WriterHead__buttons__utils">
                     <img src={utils} alt="도구 모음" />
                  </div> */}
               </div>
            </div>
            <PostUploadForm
               handleActiveOn={this.props.handleActiveOn}
               handleActiveOff={this.props.handleActiveOff}
               active={this.props.active}
            />
         </Fragment>
      );
   }
}

export default WriterHead;
