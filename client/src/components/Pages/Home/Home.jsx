import React, {useState, useEffect} from 'react';
// import Post from '../../Post/Post';
import SideBar from '../../SideBar/SideBar';
import {useDispatch} from 'react-redux'
// import { getPost } from '../../../redux/actions/post';
import {getAll} from '../../../redux/actions/allPosts'
import Pagination from '../../Pagination';
import { useSelector } from "react-redux";

import './Home.css'
import Posts from '../../Posts/Posts';

const Home = () => {
  const [postData, setPostData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const isLoading = useSelector((state) => state.post.isLoading)
    const [color, setColor] = useState("");
    
    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
    const dispatch = useDispatch()

    // console.log(postData);

    useEffect(()=> {
        dispatch(getAll(setPostData))
        setColor(Math.random().toString(16).substr(-6));
    }, [dispatch])

    //Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
      <div className="container-fluid">
        {isLoading ? (
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row d-flex">
              <div className="spinner-border text-muted d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-primary"></div>
              <div className="spinner-border text-success d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-info d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-warning d-sm-none d-none d-md-block"></div>
              <div className="spinner-grow text-muted d-sm-none d-none d-md-block"></div>
              <div className="spinner-grow text-primary d-sm-none d-none d-md-block"></div>
              <div className="spinner-grow text-success d-sm-none d-none d-md-block"></div>
              <div className="spinner-grow text-info d-sm-none d-none d-md-block"></div>
              <div className="spinner-grow text-warning d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-danger d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-secondary d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-dark d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-light d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-success d-sm-none d-none d-md-block"></div>
              <div className="spinner-border text-primary d-none d-sm-block"></div>
            </div>
          </div>
        ) : (
          <>
            {postData.length ? (
              <div className="d-flex align-items-baseline">
                <Posts postData={currentPosts} color={color} />
                <SideBar />
              </div>
            ) : (
              <div className="no_post">
                <h1>No post yet. Create new post</h1>
              </div>
            )}
          </>
        )}
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={postData.length}
          paginate={paginate}
        />
      </div>
    );
}

export default Home