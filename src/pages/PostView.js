import React, { Component } from 'react';
import './PostView.scss';
import { PostViewContainer } from 'containers/index.async';

class PostView extends Component {
   render() {
      const { post_id } = this.props.match.params;
      return <PostViewContainer post_id={post_id} />;
   }
}

export default PostView;
