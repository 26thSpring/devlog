import React, { Component } from 'react';
import Post from 'components/main/posts/Post';
import './Trending.scss';

const LOGIN_ID = sessionStorage.getItem('loginUser');

class Trending extends Component {
   state = {
      isData: false
   };
   componentDidMount() {
      this._callApi();
   }
   _callApi() {
      this.posts = fetch(
         `https://api-devlog.herokuapp.com/api/posts/${LOGIN_ID}`
      )
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
         <div className="TrendingTemplate">
            <div className="TrendingSection">
               <h2>최근 뜨고 있는 포스트</h2>
               <div className="contents">
                  <div className="TrendingPosts">
                     {this.state.isData &&
                        this.posts.map((post, index) => post)}
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
                        data={{
                           title: '테스트용',
                           content: '테스트내용'
                        }}
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
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Trending;
