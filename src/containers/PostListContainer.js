import React, { Component } from 'react';
import { Post } from 'components/index.async';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postListActions from 'store/modules/postList';
require('dotenv').config();

const LOGIN_ID = localStorage.getItem('devlog_user');

class PostListContainer extends Component {
   componentDidMount() {
      if (LOGIN_ID) this.fetchData();
   }
   fetchData = async e => {
      const { PostListActions } = this.props;
      fetch(`${process.env.REACT_APP_API_DOMAIN}/api/posts/${LOGIN_ID}`)
         .then(res => res.json())
         .then(json => {
            PostListActions.fetchData(json);
            PostListActions.toggleData(true);
         })
         .catch(err => console.log(err));
   };

   render() {
      const { isData, data } = this.props;
      console.log('리덕스 컨테이너 데이터');
      console.log(data);
      return isData
         ? data.posts.map((post, index) => (
            <Post data={post} profile={data.profile} key={post._id} />
         ))
         : '로딩중...';
   }
}

export default connect(
   ({ postList }) => ({
      isData: postList.get('isData'),
      data: postList.get('data')
   }),
   dispatch => ({
      PostListActions: bindActionCreators(postListActions, dispatch)
   })
)(PostListContainer);
