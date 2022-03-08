import React, {useState, useEffect} from 'react'
import UserImg from '../../../images/profile.png'
import { deleteUser, getUserId } from '../../../redux/actions/auth'
import { updateUser } from '../../../redux/actions/auth'
import {useDispatch} from 'react-redux'
import FileBase from 'react-file-base64';
import axios from 'axios'
import {UPDATE} from '../../../redux/constants/actionTypes'

import { useParams } from 'react-router-dom'

import './Settings.css'

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"))
  const [userData, setUserData] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState([])
  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const {id} = useParams()

  const dispatch = useDispatch()
  const updatedUser = { userId: user?.user?._id, username, email, password };

  // useEffect(()=>{
  //   dispatch(getUserId(id, setUserData))
  // }, [dispatch, id])

  const handleUpdate = async(e) => {
    e.preventDefault()
    
    try {
      const {data} = await axios.put("http://localhost:5000/server/auth/" + user.user._id, updatedUser);
      dispatch({ type: UPDATE, payload: data });
      window.location.replace("/settings");
      setSuccess(true)
    } catch (error) {
      console.log(error);
      setError(true)
    }
  }

  const handlePhoto = async(e) => {
    e.preventDefault()

    try {
      const {data} = await axios.put("http://localhost:5000/server/auth/" + user.user._id, profilePic);
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000);
      // localStorage.setItem("mern_crud3_copy_user");
      dispatch({ type: UPDATE, payload: data });
      window.location.replace('/settings')
    } catch (error) {
      console.log(error);
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  const handleDeleteAcct = async() => {
    dispatch(deleteUser(id))
    setError1(true);
    setTimeout(() => {
      setError1(false);
    }, 5000);
  }
  
  const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

  return (
    <div className='container' id='settings_container'>
        <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
          <div className="settings_title">
            <span className="settings_update_title">Update Your Account</span>
            <div className="error">
              <button className="btn-danger text-light p-1 rounded d-flex flex-column" style={{cursor: "pointer"}} onClick={handleDeleteAcct}>Delete Account</button>
              {error1 && <span className='text-center text-info'>Failed!</span>}
            </div>
          </div>
          <form onSubmit={handlePhoto}>
            <label>Profile Picture</label>
            <div className="settings_PP">
              <img src={!profilePic.profilePic ? UserImg : profilePic.profilePic} alt="SPPImg" />
              <label htmlFor="fileInput">
                <i
                  className="settings-PP-icon fa fa-user-circle-o"
                  aria-hidden="true"
                />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
              <FileBase
                type="file"
                multiple={false}
                onDone = {({base64})=> setProfilePic({...profilePic, profilePic: base64})}
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile Photo</button>
            { success && (<p className='text text-success ml-2'>Success!</p>)}
            { error && (<p className='text text-danger ml-2'>Failed!</p>)}
          </form>
          <form className="settings_form" onSubmit={handleUpdate}>
            <label>Username</label>
            <input
              type="text"
              name='username'
              onChange={(e)=> setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              // value={user.user.email}
              onChange={(e)=> setEmail(e.target.value)}
              // placeholder={user.email}
            />
            <label>Password</label>
            <div className="wrap">
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password..."
                name="password"
                onChange={(e)=> setPassword(e.target.value)}
                className="field"
              />
              <i
                className={showPassword ? "fa fa-eye-slash icon" : "fa fa-eye icon"}
                aria-hidden="true"
                onClick={handleShowPassword}
              />
              </div>
            <button className="settings_submit" type="submit">Update</button>
            { success && (<p className='text text-success ml-2'>Success!</p>)}
            { error && (<p className='text text-danger ml-2'>Failed!</p>)}
          </form>
        </div>
        </div>

    </div>
  )
}

export default Settings