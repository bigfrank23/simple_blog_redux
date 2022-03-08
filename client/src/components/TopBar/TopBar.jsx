import React, {useEffect} from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import ProfileImg from '../../images/profile.png'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants/actionTypes';

import './topBar.css'
import { useState } from 'react';

const TopBar = (props) => {
    const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
    const dispatch = useDispatch()
    
    const handleLogOut = () => {
        dispatch({type: LOGOUT})
        window.location.replace("/")
    }


    const [click, setState] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setState(!click);
    const closeMobileMenu = () => setState(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener("resize", showButton);

    const [dropdown, setDropdown] = useState(false)
    const toggleOpen = () => setDropdown(!dropdown)

    return (
      <nav className="contain m-0">
        <div className="top_one">
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : " fa fa-bars"} />
          </div>
          <div className="top_one_left">
            <h1 style={{ textShadow: "2px 3px #8bc34a" }}>Logo</h1>
          </div>
          <div className="top_one_right">
            <i className="top_icon fa fa-facebook" aria-hidden="true" />
            <i className="top_icon fa fa-twitter" aria-hidden="true" />
            <i className="top_icon fa fa-instagram" aria-hidden="true" />
          </div>
        </div>
        <div className="top_two">
          <div className="top_two_left">
            <div className="cat">
              <ul className='list-unstyled' style={{fontSize: "12px"}}>
                <Link to={'/entertainment'} style={{textDecoration: 0, color: "coral"}}><li>Entertainmet</li></Link>
                <Link to={'/sports'} style={{textDecoration: 0, color: "coral"}}><li>Sports</li></Link>
                <Link to={'/others'} style={{textDecoration: 0, color: "coral"}}><li>Others</li></Link>
              </ul>
            </div>
            <ul className={click ? "top_list active" : "top_list"}>
              <li className="top_list_item">
                <Link className="link" to="/" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="top_list_item">
                <a className="link" to="http://frank111.netlify.app" rel='noreferer' target="_blank" onClick={closeMobileMenu}>
                  ABOUT
                </a>
              </li>
              <li className="top_list_item">
                <Link className="link" to="#" onClick={closeMobileMenu}>
                  CONTACT
                </Link>
              </li>
              {user ?
                (<li className="top_list_item dropdown open">
                      <div className="btn btn-outline-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false" onClick={toggleOpen}>
                            WRITE
                          </div>
                      <div className={`dropdown-menu pull-right ${dropdown ? 'show' : ''}` }>
                        <div className="dropdown-item border-bottom">SELECT CATEGORY</div>
                        <Link className="dropdown-item" to="write_ent" onClick={()=>setDropdown(false)}>Entertainment</Link>
                        <Link className="dropdown-item" to="/write_sports" onClick={()=>setDropdown(false)}>Sports</Link>
                        <Link className="dropdown-item" to="/write" onClick={()=>setDropdown(false)}>Others</Link>
                      </div>
                </li>) : (
                  <div className="auth d-flex">
                  <Link
                    to="/register"
                    className="nav_links_mobile"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="nav_links_mobile"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  </div>
                  )

              }
            </ul>
          </div>
          <div className="top_two_right">
            {user ? (
              <ul className="top_list mobile">
                <li className="top_list_item mobile2">
                  <Link className="link" id="top_link" to="/settings">
                    <img
                      className="profile_img"
                      src={
                        !user.user.profilePic
                          ? ProfileImg
                          : user.user.profilePic
                      }
                      alt="Profile_img"
                    />
                    <p className="m mb-3">{user.user.username}</p>
                  </Link>
                </li>
                <li className="top_list_item link mobile2" id='top_link' onClick={handleLogOut}>
                  LOGOUT
                </li>
              </ul>
            ) : (
              <ul className="top_list">
                <li className="top_list_item">
                  <Link
                    className="link mobile"
                    to="/register"
                    onClick={closeMobileMenu}
                  >
                    REGISTER
                  </Link>
                </li>
                <li className="top_list_item">
                  <Link
                    className="link mobile"
                    to="/login"
                    onClick={closeMobileMenu}
                  >
                    LOGIN
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
}

export default withRouter(TopBar)