import React, { Component } from 'react';
import './WriterContent.scss';
import imageUpload from 'img/writer/imageUpload.svg';

class Writer extends Component {
   _asyncImageUpload = async e => {
      const formData = new FormData();
      let file = e.currentTarget.files[0];
      formData.append('images', file);

      console.log(formData.get('images'));
      fetch('http://127.0.0.1:3002/api/posts', {
         method: 'POST',
         encType: 'multipart/form-data',
         body: formData
      })
         .then(res => res.text())
         .thin(text => console.log(text))
         .catch(err => console.log(err));
   };
   render() {
      return (
         <div className="writeFormArea">
            <textarea
               name="content"
               className="writeFormArea__content"
               placeholder="당신의 이야기를 적어주세요"
               onChange={e => {
                  const newVal = e.target.value
                     .split('\n')
                     .map(line => line)
                     .join('<br/>');
                  this.props.onContentChange(newVal);
               }}
            />
            <div className="writeFormArea__footer">
               <input
                  type="file"
                  name="images"
                  id="upload_thumnail"
                  onChange={this._asyncImageUpload.bind(this)}
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
