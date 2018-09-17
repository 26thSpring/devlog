import React, { Component } from 'react';
import { Post } from 'components/index.async';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postListActions from 'store/modules/postList';

const LOGIN_ID = sessionStorage.getItem('loginUser');

class PostListContainer extends Component {
   componentDidMount() {
      this.fetchData();
   }
   fetchData = async e => {
      const { PostListActions } = this.props;
      fetch(`https://api-devlog.herokuapp.com/api/posts/${LOGIN_ID}`)
         .then(res => res.json())
         .then(json => {
            PostListActions.fetchData(json);
            PostListActions.toggleData(true);
         })
         .catch(err => console.log(err));
   };

   render() {
      const { isData, data } = this.props;
      //console.log(data.toJS());
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
