import React from 'react';
import './Preview.scss';

const Preview = ({ preview }) => {
   const { title, content } = preview.toJS();
   return (
      <div className="previewArea">
         <div className="previewArea__title">{title}</div>
         <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="previewArea__content"
         />
      </div>
   );
};

export default Preview;
