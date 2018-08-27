import React from 'react';
import './Writer.scss';
import imageUpload from 'img/writer/imageUpload.svg';

const Writer = ({ onTitleChange, onContentChange }) => {
   return (
      <div className="writeFormArea">
         <input
            type="text"
            className="writeFormArea__title"
            placeholder="제목을 입력하세요"
            onChange={e => {
               onTitleChange(e.target.value);
            }}
         />
         <textarea
            className="writeFormArea__content"
            placeholder="마크다운 에디터"
            onChange={e => {
               onContentChange(e.target.value);
            }}
         />
         <div className="writeFormArea__footer">
            <input type="file" name="thumnail" id="upload_thumnail" />
            <label
               className="writeFormArea__footer__btnUpload"
               for="upload_thumnail"
            >
               <img src={imageUpload} alt="imageUpload" />
            </label>
         </div>
      </div>
   );
};

export default Writer;
