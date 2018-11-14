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
      const newVal = e.target.value
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
         const image = `<div style="width:70%;"><img src="${
            reader.result
         }" /></div>`;
         PostWriterActions.previewImage(image);
      };
      if (e.target.files[0]) {
         reader.readAsDataURL(e.target.files[0]);
         PostWriterActions.writerImage(e.target.files[0].name);
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
   handleActiveOn = async e => {
      const { PostWriterActions } = this.props;
      PostWriterActions.activeSubmit(true);
   };
   handleActiveOff = async e => {
      const { PostWriterActions } = this.props;
      PostWriterActions.hideSubmit(false);
   };
   handleBackButton = () => {
      const { PostWriterActions } = this.props;
      PostWriterActions.initState();
   };

   render() {
      const {
         handleTitleChange,
         handleContentChange,
         handleImageUpload,
         handleActiveOn,
         handleActiveOff,
         handleBackButton
      } = this;
      const { image, preview, active } = this.props;
      return (
         <form
            className="PostWriterTemplate"
            method="POST"
            action={`${
               process.env.REACT_APP_API_DOMAIN
            }/api/posts/${localStorage.getItem('devlog_user')}`}
            encType="multipart/form-data"
         >
            <WriterHead
               onTitleChange={handleTitleChange}
               handleActiveOn={handleActiveOn}
               handleActiveOff={handleActiveOff}
               active={active}
               onOutPage={handleBackButton}
            />
            <div className="PostWriterSection">
               <WriterContent
                  onContentChange={handleContentChange}
                  onImageUpload={handleImageUpload}
                  preview={preview}
               />
               <Preview preview={preview} />
            </div>
         </form>
      );
   }
}

export default connect(
   ({ postWriter }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      image: postWriter.get('image'),
      preview: postWriter.get('preview'),
      active: postWriter.get('active')
   }),
   dispatch => ({
      PostWriterActions: bindActionCreators(postWriterActions, dispatch)
   })
)(PostWriterContainer);
