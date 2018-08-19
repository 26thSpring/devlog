import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeaderCategoryIcon.scss';

class HeaderCategoryIcon extends Component {
   render() {
      return (
         <img
            className="HeaderCategoryIcon"
            src={this.props.url}
            alt={this.props.category}
         />
      );
   }
}

HeaderCategoryIcon.PropTypes = {
   category: PropTypes.string.isRequired
};

export default HeaderCategoryIcon;
