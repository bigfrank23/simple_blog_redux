import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/auth';

import './Login.css'

const initialState = {email: '', password: ''}
const Login = () => {
  const [loginData, setLoginData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login(loginData, history));
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

  return (
    <div className="container" id="login_container">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
          <span className="login_title">Login</span>
          <form className="login_form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              name="email"
              onChange={handleChange}
            />
            <label>Password</label>
            <div className="wrap">
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password..."
                name="password"
                onChange={handleChange}
                className="field"
              />
              <i
                className={
                  showPassword ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                }
                aria-hidden="true"
                onClick={handleShowPassword}
              />
            </div>
            <div className="login_btn d-flex justify-content-between">
              <button className="login_button" type="submit">
                Login
              </button>
            </div>
          </form>
          <Link className="link" to="/register">
            <button className="login_register_button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login