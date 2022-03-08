import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
  return (
    <aside className="bg-black rounded shadow">
      <div className="side_bar_top">
        <div className="side_bar_title">
          <h4 className="text text-white text-center">CATEGORIES</h4>
        </div>
        <ul className="side_bar_list p-0">
          <Link to={"/entertainment"} id="link">
            <li className="side_bar_list_item">ENTERTAINMENTS</li>
          </Link>
          <Link to={"/sports"} id="link">
            <li className="side_bar_list_item">SPORTS</li>
          </Link>
          <Link to={"/others"} id="link">
            <li className="side_bar_list_item">OTHERS</li>
          </Link>
        </ul>
      </div>
      <div className="side_bar_bottom p-3">
        <h6 className="text text-center text-white">
          Subscribe for news letter
        </h6>
        <div className="side_bar_input d-flex justify-content-center">
          <input type="text" placeholder="Enter Email Address" />
        </div>
      </div>
    </aside>
  );
}

export default SideBar