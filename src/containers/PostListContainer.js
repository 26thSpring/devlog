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
      console.log(this.props);
      const { PostListActions } = this.props;
      fetch(`https://api-devlog.herokuapp.com/api/posts/${LOGIN_ID}`)
         .then(res => res.json())
         .then(json => PostListActions.fetchData(json));
   };

   render() {
      const { isData, data } = this.props;
      //console.log(data.toJS());
      return (
         isData &&
         data.posts.map((post, index) => (
            <Post data={data.posts} name={data.nickname} key={data.posts._id} />
         ))
      );
   }
}

export default connect(
   ({ postList }) => ({
      data: postList.get('data')
   }),
   dispatch => ({
      PostListActions: bindActionCreators(postListActions, dispatch)
   })
)(PostListContainer);
