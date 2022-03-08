import React, {useState, useEffect} from 'react'
import '../Write/Write.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import FileBase from "react-file-base64";


const EditPost = () => {
    const [post, setPost] = useState({})
    const [writeData, setWriteData] = useState([])
    const [showText, setShowText] = useState(false)
    const [showError, setShowError] = useState(false)

    const location = useLocation()

    const path = location.pathname.split("/")[2]

    useEffect(() => {
      const getPost = async () =>{
        const res = await axios.get("http://localhost:5000/server/post/" + path);
        setPost(res.data)
        setWriteData(res.data)
      }
      getPost() 
    }, [path])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
           await axios.patch(`http://localhost:5000/server/post/${post._id}`,  {...writeData});
            
            setShowText(true)
            setTimeout(() => {
                setShowText(false)
            }, 5000);
            e.target.reset()
        } catch (error) {
            console.log(error);
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
            }, 5000);
        }
    }
  return (
    <div className="container" id="write_container">
      <div className="row shadow">
        <div className="d-flex justify-content-center">
          <img src={writeData.selectedFile} className="write_img" alt="WImg" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="write_FormGroup">
              
              <div className="write_upload">
              <label htmlFor="fileInput" className='d d-flex flex-column'>
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
          </div>
          <div className="write_title d-flex justify-content-center">
            <div className="title d-flex flex-column">
                    <label htmlFor="title" className='text-center' style={{fontSize: "2rem", fontWeight: "600"}}>Title</label>
                    <input
                    id='title'
                    type="text"
                    placeholder="Title"
                    className="write_input m ml-3"
                    autoFocus={true}
                    value={writeData.title}
                    name="title"
                    onChange={(e) =>
                        setWriteData({ ...writeData, title: e.target.value })
                    }
                    />

                </div>
          </div>
          <div className="write_desc d-flex justify-content-center">
              <div className="desc d-flex flex-column">
                <label htmlFor="desc" className='text-center' style={{fontSize: "2rem", fontWeight: "600"}}>Description</label>
                <textarea
                id='desc'
                // placeholder={"Write something awesome..."}
                className="b bg-light rounded"
                value={writeData.desc}
                name="desc"
                onChange={(e) =>
                    setWriteData({ ...writeData, desc: e.target.value })
                }
                // style={{width: "50vw", }}
                />
              </div>
          </div>
          <div className="write_btn d-flex justify-content-center p-4">
            <button type="submit" className="btn btn-danger">
              Update
            </button>
            <h3 className="text-success mx-2">
              {showText ? "Successful!" : null}
            </h3>
            <h3 className='text-danger mx-2'>{showError ? "Error Occurred!" : null}</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost