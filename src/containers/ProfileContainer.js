import React, { Component } from 'react';
import {
   PostViewHeader,
   ProfileHead,
   ProfileBody
} from 'components/index.async';

class ProfileContainer extends Component {
   render() {
      return (
         <div className="ProfileTemplate">
            <PostViewHeader />
            <div className="ProfileSection">
               <ProfileHead />
               <ProfileBody />
            </div>
         </div>
      );
   }
}

export default ProfileContainer;
