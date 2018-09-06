import React, { Component } from 'react';
import Post from 'components/main/posts/Post';
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
      fetch(`http://localhost:3002/api/posts/${LOGIN_ID}`)
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
                     {this.state.isData &&
                        this.posts.map((post, index) => post)}
                     {/* <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     />
                     <Post
                        data={{ title: '테스트용', content: '테스트내용' }}
                        name="ChanUk Park"
                     /> */}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Recent;
