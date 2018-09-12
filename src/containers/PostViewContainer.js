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
   state = {
      isData: false
   };
   componentDidMount() {
      this.handleFetchData();
      this.setState({ isData: false });
   }
   handleFetchData = async e => {
      const { PostViewActions, post_id } = this.props;

      fetch(`https://api-devlog.herokuapp.com/api/post/devlog/${post_id}`)
         .then(res => res.json())
         .then(json => {
            console.log(json);
            PostViewActions.fetchData(json.posts[0]);
         })
         .then(res => this.setState({ isData: true }))
         .catch(err => console.log(err));
   };
   handleToggleLike = () => {};

   render() {
      console.log(this.props);
      const { data } = this.props;
      return (
         this.state.isData && (
            <div className="PostViewTemplate">
               <PostViewHeader />
               <div className="PostViewSection">
                  <PostViewMain data={data} />
                  <PostViewFooter />
               </div>
            </div>
         )
         //this.state.isData && <h2>포스트를 가져오는 중..</h2>
      );
   }
}

export default connect(
   ({ postView }) => ({
      data: postView.get('data'),
      like: postView.get('like')
   }),
   dispatch => ({
      PostViewActions: bindActionCreators(postViewActions, dispatch)
   })
)(PostViewContainer);
