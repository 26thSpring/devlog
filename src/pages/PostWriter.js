import React, { Component } from 'react';
import './PostWriter.scss';
import { WriterHead, WriterContent, Preview } from 'components/index.async';

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
      return (
         <div className="PostWriterTemplate">
            <WriterHead onTitleChange={this.onTitleChange} />
            <div className="PostWriterSection">
               <WriterContent onContentChange={this.onContentChange} />
               <Preview title={this.state.title} content={this.state.content} />
            </div>
         </div>
      );
   }
}

export default PostWriter;
