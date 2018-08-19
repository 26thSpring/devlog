import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeaderCategory.scss';
import HeaderCategoryIcon from './HeaderCategoryIcon';

class HeaderCategory extends Component {
   render() {
      return (
         <div className="HeaderCategory">
            <HeaderCategoryIcon
               url={this.props.url}
               category={this.props.category}
            />
            <span>{this.props.category}</span>
         </div>
      );
   }
}

HeaderCategory.PropTypes = {
   category: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
};

export default HeaderCategory;
