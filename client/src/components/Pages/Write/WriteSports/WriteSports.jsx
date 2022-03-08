import React, {useState} from 'react'
import WriteImg from '../../../../images/placeholder.png'
import FileBase from 'react-file-base64'
import "react-quill/dist/quill.snow.css";

import {useDispatch} from 'react-redux'

import { createPost } from '../../../../redux/actions/sportsPosts';


import '../Write.css'

const WriteSports = () => {
  const [writeData, setWriteData] = useState({})
  const [showText, setShowText] = useState(false)
  const [showError, setShowError] = useState(false)

  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"))


  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      // dispatch(createPost({ ...writeData, username: user.user.username }));
      if (dispatch(createPost({ ...writeData, username: user.user.username, profilePic: user.user.profilePic, label: "Sports" }))) {
        setShowText(true);
        setTimeout(() => {
          setShowText(false);
        }, 5000);
        e.target.reset();
      }
    } catch (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }
  return (
    <div className="container" id='write_container'>
      <div className="row shadow">
          <div className="text text-center text-secondary my-2">
              <p><i>Write About Sports</i></p>
          </div>
        <div className="d-flex justify-content-center">
          <img src={!writeData.selectedFile ? WriteImg : writeData.selectedFile} className='write_img' alt="WImg" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="write_FormGroup">
            <div className="write_upload">
              <label htmlFor="fileInput" className='d d-flex flex-column'>
                {/* <img src={UploadIcon} alt="" width={50} style={{alignSelf: 'center'}} /> */}
                <FileBase
                type="file"
                multiple={false}
                onDone = {({base64})=> setWriteData({...writeData, selectedFile: base64})}
                />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
            </div>
            <input
              type="text"
              placeholder="Title"
              className="write_input m ml-3"
              autoFocus={true}
              name='title'
              onChange={(e)=> setWriteData({...writeData, title: e.target.value})}
            />
          </div>
          <div className="write_desc d-flex justify-content-center">
            <textarea
              placeholder={"Write something awesome..."}
              className="b bg-light rounded"
              name="desc"
              onChange={(e)=> setWriteData({...writeData, desc: e.target.value})}
            />
          </div>
          <div className="write_btn d-flex justify-content-center p-sm-0 p-md-3">
            <button type="submit" className="btn btn-danger">Publish</button>
            <h3 className='text-success mx-2'>{showText ? "Successful!" : null}</h3>
            <h3 className='text-danger mx-2'>{showError ? "Error Occurred!" : null}</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WriteSports;