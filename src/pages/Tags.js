import React from 'react';
import './Tags.scss';
import tagsByname from 'img/tagsByname.svg';
import tagsByhot from 'img/tagsByhot.svg';
import { Tag } from 'components/index.async.js';

const Tags = ({ match }) => {
   return (
      <div className="TagsTemplate">
         <div className="TagsSection">
            <div className="Tags__head">
               <TagsCategory name={'이름순'} img={tagsByname} />
               <TagsCategory name={'인기순'} img={tagsByhot} />
            </div>
            <div className="Tags__main">
               <Tag tagName="HTML5" />
               <Tag tagName="CSS3" />
               <Tag tagName="Javascript" />
               <Tag tagName="JQuery" />
               <Tag tagName="React" />
               <Tag tagName="React-Native" />
               <Tag tagName="Java" />
               <Tag tagName="Database" />
               <Tag tagName="Python" />
               <Tag tagName="Amazon AWS" />
               <Tag tagName="HTML5" />
               <Tag tagName="CSS3" />
               <Tag tagName="Javascript" />
               <Tag tagName="JQuery" />
               <Tag tagName="React" />
               <Tag tagName="React-Native" />
               <Tag tagName="Java" />
               <Tag tagName="Database" />
               <Tag tagName="Python" />
               <Tag tagName="Amazon AWS" />
               <Tag tagName="HTML5" />
               <Tag tagName="CSS3" />
               <Tag tagName="Javascript" />
               <Tag tagName="JQuery" />
               <Tag tagName="React" />
               <Tag tagName="React-Native" />
               <Tag tagName="Java" />
               <Tag tagName="Database" />
               <Tag tagName="Python" />
               <Tag tagName="Amazon AWS" />
            </div>
         </div>
      </div>
   );
};

const TagsCategory = ({ name, img }) => {
   return (
      <div className="TagsCagtegory">
         <img src={img} alt={img} />
         <span className="TagsCagtegory__name">{name}</span>
      </div>
   );
};

export default Tags;
