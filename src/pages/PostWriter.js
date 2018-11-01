import React, { Component } from 'react';
import './PostWriter.scss';
import { PostWriterContainer } from 'containers/index.async';

class PostWriter extends Component {
   state = {};

   constructor() {
      super();
      this.onTitleChange = this.onTitleChange.bind(this);
      this.onContentChange = this.onContentChange.bind(this);
   }
   onTitleChange = title => {
      this.setState({ title });
   };
   onContentChange = content => {
      this.setState({ content });
   };
   render() {
      return <PostWriterContainer />;
   }
}

export default PostWriter;
