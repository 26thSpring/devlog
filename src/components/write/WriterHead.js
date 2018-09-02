import React from 'react';
import './WriterHead.scss';
import { Link } from 'react-router-dom';
import backBtn from 'img/writer/backBtn.svg';
import utils from 'img/writer/utilsBtn.svg';

const WriterHead = ({ onTitleChange }) => {
   return (
      <div className="WriterHead">
         <Link to="/" className="WriterHead__backBtn">
            <img src={backBtn} alt="뒤로 가기" />
         </Link>
         <input
            name="title"
            className="WriterHead__title"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={e => {
               onTitleChange(e.target.value);
            }}
         />
         <div className="WriterHead__buttons">
            <Link to="/" className="WriterHead__buttons__temporarySubmit">
               임시저장
            </Link>
            <input
               type="submit"
               value="작성하기"
               className="WriterHead__buttons__submit"
            />
            <div className="WriterHead__buttons__utils">
               <img src={utils} alt="도구 모음" />
            </div>
         </div>
      </div>
   );
};

export default WriterHead;
