import React from 'react'
import ProfileImg from '../../../images/profile.png'
import PlaceholderImg from '../../../images/placeholder.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/actions/entPosts'
import { deletePost } from "../../../redux/actions/entPosts";

import '../Sports/Sports.css'
import './Ent.css'
import Pagination from './../../Pagination';


const Ent = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);

    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));

    const isLoading = useSelector((state)=> state.sportsPosts.isLoading)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts(setData))
    }, [dispatch])

    //Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    
  return (
      <div id="container">
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
        <div className="container">
            <div className="search_box d-flex" id='search_box'>
                <div className="col-2 text-center">
                    <h4 style={{textShadow: "2px 2px", position: "relative"}}>ENTERTAINMENT</h4>
                </div>
            </div>
        {currentPosts.map((val, i)=> (
            <div className="row" key={i}>
                <div className="col-lg-7 col-md-12 col-sm-12 rounded shadow p-3 bg-light my-3">
                    <div className="col-12 d-flex my-2">
                        <div className="col-6">
                            <div className="profile d-flex flex-column">
                                <img src={!val.profilePic ? ProfileImg : val.profilePic} width={30} className='profileImg rounded-circle align-self-center' alt="Author_Image" />
                                <span className='t text-center'>{val.username}</span>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="time d-flex">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                <span>{ moment(val.createdAt).fromNow() }</span>
                            </div>
                            {/* <h6>{val.label}</h6> */}
                        </div>
                    </div>
                    <div className="ent_center d-flex">
                        <div className="col-6">
                            <div className="img">
                                <img src={!val.selectedFile ? PlaceholderImg : val.selectedFile} alt="" style={{width: "100%"}} />
                            </div>
                        </div>
                        <div className="col-6 mx-3 p-3">
                            <h3>{val.title}</h3>
                            <div className="ent_content">
                                <p>{val.desc}</p>
                                <div className="reactions d-flex justify-content-end">
                                    <div className="btn">
                                        <Link to={`/full_detail_ent/${val._id}`}>
                                            <button className="btn btn-warning text-white">Full Detail</button>
                                        </Link>
                                    </div>
                                    <div className="other d-flex align-items-center">
                                        <div className="like">
                                                {val?.likes?.includes(user.user._id) ?
                                                <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}} />
                                                :
                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                }
                                                <span> &nbsp;{val.likes?.length > 2 ? `You and ${val.likes?.length - 1} others` : `${val.likes?.length} like${val.likes?.length > 1 ? 's' : ''}` } </span> 
                                            </div>
                                            <div className="comments">
                                                <i className="fa fa-commenting" aria-hidden="true" style={{marginLeft: "5px"}} />
                                                <span>{val.comments.length} comments</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {user?.user?.username === val.username && (
                        <div className="delete d-flex align-self-center justify-content-end">
                                
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "#f96332", fontSize: "2rem", cursor: 'pointer'}} onClick={()=> dispatch(deletePost(val._id))} />
                            <Link to={`/edit_ent/${val._id}`}>
                                <i className="fa fa-pencil-square" aria-hidden="true" style={{color: "gray", fontSize: "2rem", marginLeft: "5px"}} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        ))}
        </div>

          )} 
          <Pagination postsPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate} />
    </div>
  )
}

export default Ent