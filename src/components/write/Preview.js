import React from 'react';
import './Preview.scss';

const Preview = ({ title, content }) => {
   return (
      <div className="previewArea">
         <div className="previewArea__title">{title}</div>
         <div className="previewArea__content">{content}</div>
      </div>
   );
};

export default Preview;
