import React, { Component } from 'react';
import {
   PostViewHeader,
   PostViewMain,
   PostViewFooter
} from 'components/index.async';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postViewActions from 'store/modules/postView';

class PostViewContainer extends Component {
   componentDidMount() {
      this.handleFetchData();

      const { PostViewActions } = this.props;
      PostViewActions.toggleData(false);
   }
   handleFetchData = async e => {
      const { PostViewActions, post_id } = this.props;
      console.log(this.props.data.toJS());
      console.log(post_id);
      fetch(`https://api-devlog.herokuapp.com/api/post/devlog/${post_id}`)
         .then(res => res.json())
         .then(json => {
            console.log(json);
            console.log('여기');
            PostViewActions.fetchData(json.posts[0]);
            PostViewActions.toggleData(true);
         })
         .catch(err => console.log(err));
   };
   handleToggleLike = () => {};

   render() {
      console.log(this.props);
      const { data, like, isData } = this.props;
      return isData ? (
         <div className="PostViewTemplate">
            <PostViewHeader />
            <div className="PostViewSection">
               <PostViewMain data={data} />
               <PostViewFooter />
            </div>
         </div>
      ) : (
         '로딩중...'
      );
      //this.state.isData && <h2>포스트를 가져오는 중..</h2>
   }
}

export default connect(
   ({ postView }) => ({
      data: postView.get('data'),
      like: postView.get('like'),
      isData: postView.get('isData')
   }),
   dispatch => ({
      PostViewActions: bindActionCreators(postViewActions, dispatch)
   })
)(PostViewContainer);
