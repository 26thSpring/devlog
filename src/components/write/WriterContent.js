import React from 'react';
import './WriterContent.scss';
import imageUpload from 'img/writer/imageUpload.svg';

const Writer = ({ onContentChange }) => {
   return (
      <div className="writeFormArea">
         <textarea
            className="writeFormArea__content"
            placeholder="당신의 이야기를 적어주세요"
            onChange={e => {
               const newVal = e.target.value
                  .split('\n')
                  .map(line => line)
                  .join('<br/>');
               onContentChange(newVal);
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
