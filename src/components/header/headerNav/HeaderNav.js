import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';
import HeaderCategory from './headerCategory/HeaderCategory';
import trending from 'img/trending.png';
import recent from 'img/recent.png';
import sorting from 'img/sorting.png';
import tags from 'img/tags.png';

const categoryList = [
   { name: '트렌딩', title: 'trending', icon: trending },
   { name: '최신 포스트', title: 'recent', icon: recent },
   { name: '정렬', title: 'sort', icon: sorting },
   { name: '태그', title: 'tags', icon: tags }
];

class HeaderNav extends Component {
   render() {
      return (
         <div className="HeaderNav">
            {categoryList.map((value, index) => {
               return (
                  <Link
                     className="HeaderNav__Link"
                     to={'/' + value.title}
                     key={value.title}
                  >
                     <HeaderCategory
                        category={value.name}
                        url={value.icon}
                        key={index}
                     />
                  </Link>
               );
            })}
         </div>
      );
   }
}

export default HeaderNav;
