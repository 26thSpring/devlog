import React, { Component } from 'react';
import './WriterContent.scss';
import imageUpload from 'img/writer/imageUpload.svg';

class Writer extends Component {
   _asyncImageUpload = async e => {
      const formData = new FormData();
      let file = e.currentTarget.files[0];
      formData.append('images', file);

      console.log(formData.get('images'));
      fetch('https://api-devlog.herokuapp.com/api/posts', {
         method: 'POST',
         encType: 'multipart/form-data',
         body: formData
      })
         .then(res => res.text())
         .then(text => console.log(text))
         .catch(err => console.log(err));
   };
   render() {
      const { content } = this.props.preview.toJS();
      return (
         <div className="writeFormArea">
            <textarea
               name="content"
               className="writeFormArea__content"
               placeholder="당신의 이야기를 적어주세요"
               onChange={this.props.onContentChange}
               value={content}
            />
            <div className="writeFormArea__footer">
               <input
                  type="file"
                  name="images"
                  id="upload_thumnail"
                  onChange={this.props.onImageUpload}
               />
               <label
                  className="writeFormArea__footer__btnUpload"
                  for="upload_thumnail"
               >
                  <img src={imageUpload} alt="imageUpload" />
               </label>
            </div>
         </div>
      );
   }
}

export default Writer;
