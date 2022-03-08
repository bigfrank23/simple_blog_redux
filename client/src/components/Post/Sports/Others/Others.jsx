import React from 'react'
import ProfileImg from '../../../../images/profile.png'
import PlaceholderImg from '../../../../images/placeholder.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../../../redux/actions/post'
import { deletePost } from '../../../../redux/actions/post'

import '../Sports.css'
import Pagination from './../../../Pagination';


const Others = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);

    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));

    const isLoading = useSelector((state)=> state.sportsPosts.isLoading)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPost(setData))
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
            <div className="col-2 text-center" id='search_box'>
                <h4 style={{textShadow: "2px 2px", position: "relative"}}>OTHERS</h4>
            </div>
        {currentPosts.map((val, i)=> (
                <div className="row" key={i}>
                    <div className="col-lg-7 col-md-12 col-sm-12 shadow p-3 bg-light my-3">
                            <div className="card_top d-flex justify-content-between">
                                    <div className="profile_detail d-flex flex-column">
                                        <img src={!val.profilePic ? ProfileImg : val.profilePic} width={50} className='profileImg rounded-circle' alt="Author_Image" />
                                        <span>{val.username}</span>
                                    </div>
                                    <span>{moment(val.createdAt).fromNow()}</span>
                            </div>
                            <div className="card_center d-flex">
                                <div className="col-4 d-flex flex-column">
                                    <div className="center_img w-100">
                                        <img src={!val.selectedFile ? PlaceholderImg : val.selectedFile} alt="" style={{width: "100%", borderRadius: "5px"}} />
                                    </div>
                                    <div className="btn mx-1">
                                        <Link to={`/full_detail/${val._id}`}>
                                            <button className="btn btn-secondary text-light">Full Detail</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 d-flex flex-column justify-content-between" style={{paddingLeft: "30px"}}>
                                    <div className="center_txt">
                                        <h5>{val.title}</h5>
                                        <p>
                                            {val.desc}
                                        </p>
                                    </div>
                                        <div className="card_bottom d-flex justify-content-end">
                                    {user?.user?.username === val.username && (
                                            <div className="delete d-flex align-self-center">
                                                        <i className="fa fa-trash" aria-hidden="true" style={{color: "#f96332", fontSize: "2rem", cursor: 'pointer'}} onClick={()=> dispatch(deletePost(val._id))} />
                                                        <Link to={`/edit_sports/${val._id}`}>
                                                            <i className="fa fa-pencil-square" aria-hidden="true" style={{color: "gray", fontSize: "2rem", marginLeft: "5px"}} />
                                                        </Link>
                                                    </div>
                                            )}
                                            <div className="reactions d-flex" style={{marginLeft: "5rem"}}>
                                                <div className="like">
                                                {val?.likes?.includes(user.user._id) ?
                                                <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}} />
                                                :
                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                }
                                                <span> &nbsp;{val.likes?.length > 2 ? `You and ${val.likes?.length - 1} others` : `${val.likes?.length} like${val.likes?.length > 1 ? 's' : ''}` } </span> 
                                            </div>
                                                <div className="comments">
                                                    <i className="fa fa-commenting" aria-hidden="true" style={{marginLeft: "1rem"}} />
                                                    <span>{val.comments.length} comments</span>
                                                </div>
                                            </div>
                                        </div>
                            </div>

                        </div>
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

export default Others