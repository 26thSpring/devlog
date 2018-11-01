import React from 'react';
import './ProfileBody.scss';
import PostListContainer from 'containers/PostListContainer';

const ProfileBody = () => {
   return (
      <div className="ProfileBody">
         <PostListContainer />
      </div>
   );
};

export default ProfileBody;
