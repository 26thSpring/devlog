import React, { Component } from 'react';
import './HeaderNav.scss';
import HeaderCategory from './headerCategory/HeaderCategory';
import trending from 'img/trending.png';
import recent from 'img/recent.png';
import sorting from 'img/sorting.png';
import tags from 'img/tags.png';


const categoryList = [
    {name: "트렌딩", icon: trending},
    {name: "최신 포스트", icon: recent},
    {name: "정렬", icon: sorting},
    {name: "태그", icon: tags},
];

class HeaderNav extends Component {
    render() {
        return(
            <div className="HeaderNav">
                {categoryList.map((value, index) => {
                    return <HeaderCategory category={value.name} url={value.icon} key={index} />
                })}
            </div>
        )
    }
}

export default HeaderNav;