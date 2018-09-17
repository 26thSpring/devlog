import React, { Component } from 'react';
import { Post } from 'components/index.async';
import { PostListContainer } from 'containers/index.async';
import './Recent.scss';

const LOGIN_ID = sessionStorage.getItem('loginUser');

class Recent extends Component {
   state = {
      isData: false
   };
   componentDidMount() {
      this._callApi();
   }
   _callApi() {
      fetch(`https://api-devlog.herokuapp.com/api/posts/${LOGIN_ID}`)
         .then(res => res.json())
         .then(
            json =>
               (this.posts = json.posts.map((data, index) => (
                  <Post
                     data={data}
                     name={json.nickname ? json.nickname : json.name}
                     key={index}
                  />
               )))
         )
         .then(() => {
            this.setState({
               isData: true
            });
         })
         .catch(err => console.log(err));
   }
   posts = null;
   render() {
      return (
         <div className="RecentTemplate">
            <div className="RecentSection">
               <div className="contents">
                  <div className="RecentPosts">
                     <PostListContainer />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Recent;
