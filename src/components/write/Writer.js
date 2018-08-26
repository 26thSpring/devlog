import React from 'react';

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
      </div>
   );
};

export default Writer;
