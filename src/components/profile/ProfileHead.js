import React from 'react';
import './ProfileHead.scss';

const ProfileHead = () => {
   return (
      <div className="ProfileHead">
         <div className="ProfileHead_profileImageWrap">
            <img
               src="http://shinmorae.com/files/gimgs/12_2_v3.jpg"
               alt="profile_thumbnail"
            />
         </div>
         <div className="ProfileHead_profile">
            <div className="ProfileHead_profile_username">@devlog</div>
            <div className="ProfileHead_profile_introduce">
               프론트엔드 개발자 지망생, React / Node.js / MongoDB 를 사용해서
               개발합니다.
            </div>
            <div className="ProfileHead_profile_name">박찬욱</div>
         </div>
      </div>
   );
};

export default ProfileHead;
