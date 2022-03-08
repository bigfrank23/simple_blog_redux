import React, {useState} from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import {register} from '../../../redux/actions/auth'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'

const initialState = {username: '', email: '', password: ''}

const Register = () => {
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData, history))
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

    return (
      <div className="container" id="register_container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
            <span className="register_title">Register</span>
            <form className="register_form" onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username..."
                name="username"
                onChange={handleChange}
              />
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
              <div className="register_btn d-flex justify-content-between">
                <button className="register_button" type="submit">
                  Register
                </button>
              </div>
            </form>
            <Link className="link" to="/login">
              <button className="register_login_button">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Register