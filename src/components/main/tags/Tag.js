import React from 'react';
import { Link } from 'react-router-dom';
import './Tag.scss';

const Tag = ({ tagName }) => {
   return (
      <Link to={`/tags/${tagName}`}>
         <div className="Tag">{tagName}</div>
      </Link>
   );
};

export default Tag;
