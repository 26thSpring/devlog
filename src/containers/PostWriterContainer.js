import React, { Component, Fragment } from 'react';
import { WriterHead, WriterContent, Preview } from 'components/index.async';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postWriterActions from 'store/modules/postWriter';

class PostWriterContainer extends Component {
   handleTitleChange = e => {
      // title 인풋 값 변경
      const { PostWriterActions } = this.props;
      PostWriterActions.changeTitle(e.target.value);
   };
   handleContentChange = e => {
      console.log(e.target);
      const newVal = e.target.innerHTML
         .split('\n')
         .map(line => line)
         .join('<br/>');

      // content 인풋 값 변경
      const { PostWriterActions } = this.props;
      PostWriterActions.changeContent(newVal);
   };
   handleImageUpload = async e => {
      const { PostWriterActions } = this.props;

      const reader = new FileReader();
      reader.onload = () => {
         const image = `<img src="${reader.result}" />`;
         PostWriterActions.previewImage(image);
      };
      if (e.target.files[0]) {
         reader.readAsDataURL(e.target.files[0]);
         PostWriterActions.writerImage(e.target.files[0]);
      }

      //PostWriterActions.clearImage('');

      //   const formData = new FormData();
      //   let file = e.currentTarget.files[0];
      //   formData.append('images', file);

      //   console.log(formData.get('images'));
      //   fetch('https://api-devlog.herokuapp.com/api/posts', {
      //      method: 'POST',
      //      encType: 'multipart/form-data',
      //      body: formData
      //   })
      //      .then(res => res.text())
      //      .then(text => PostWriterActions.uploadImage(text))
      //      .catch(err => console.log(err));
   };

   render() {
      const {
         handleTitleChange,
         handleContentChange,
         handleImageUpload
      } = this;
      const { image, preview } = this.props;

      return (
         <Fragment>
            <WriterHead onTitleChange={handleTitleChange} />
            <div className="PostWriterSection">
               <WriterContent
                  onContentChange={handleContentChange}
                  onImageUpload={handleImageUpload}
                  preview={preview}
               />
               <Preview preview={preview} />
            </div>
         </Fragment>
      );
   }
}

export default connect(
   ({ postWriter }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      image: postWriter.get('image'),
      preview: postWriter.get('preview')
   }),
   dispatch => ({
      PostWriterActions: bindActionCreators(postWriterActions, dispatch)
   })
)(PostWriterContainer);
