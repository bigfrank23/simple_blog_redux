import React, {useState} from 'react'
// import Image from '../../images/placeholder.png'
import Author from '../../images/profile.png'
import moment from 'moment'

import './Post.css'
import { Link, useParams } from 'react-router-dom';
import { deletePost, likePost } from '../../redux/actions/post';
import { useDispatch } from 'react-redux';

const Post = ({postData, color}) => {
    const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
    const [likeData, setLikeData] = useState({...postData?.likeData});

    const [likes, setLikes] = useState(postData?.likes)

    // console.log(color);

    

    // const color = ["Red, yellow"]
    // const randomColor = color[Math.floor(Math.random() * color.length)]
    
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   console.log(randomColor);

    
    const dispatch = useDispatch()
    
    const hasLiked = postData.likes.find((like) => like === user?.user?._id);
    const userId = user?.user?._id
    
    const handleLikes = async() => {
        const val = `${user?.user?._id}`;
        const likes = await dispatch(likePost(val, postData?._id));
        setLikeData(likes);

        if(hasLiked){
            setLikes(postData.likes.filter((id)=> id !== userId ))
        }else{
            setLikes({...postData.likes, userId})
        }
    }
    



    const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (userId))
        ? (
          <><i className="post_icon fa fa-heart" aria-hidden="true" style={{marginRight: '5px', color: 'red', textAlign: 'center'}} /> <span> &nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` } </span> </>
        ) : (
          <><i className="post_icon fa fa-heart-o" aria-hidden="true" style={{marginRight: '5px', textAlign: 'center'}} /> <span> &nbsp;{likes.length} {likes.length === 1 ? 'like' : 'Likes'} </span></>
        );
    }

    return <><i className="post_icon fa fa-heart-o" aria-hidden="true" style={{marginRight: '5px'}} /> <span> &nbsp;like </span> </>;
  };
    
    
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 shadow d-flex justify-content-center bg-light">
                    <div className="post w-100">
                    <div className="post_image w-100">
                        <img src={postData.selectedFile} alt=""/>
                    </div>
                    <div className="post_title mt-9 p-2 d-flex justify-content-between">
                        <h2>{postData.title}</h2>
                        <h6 className='text-white align-self-center p-2 rounded' style={{backgroundColor: "#" + color}}>{postData.label}</h6>
                    </div>
                    <div className="post_description my-2">
                        <p>{postData.desc}</p>

                        {
                            postData.label === 'Sports' && (
                            <Link to={`/full_detail_sports/${postData._id}`}>
                                <button className="btn btn-info">Full Detail</button>
                            </Link>
                            )
                        }
                        {postData.label === 'Entertainment' && (
                            <Link to={`/full_detail_ent/${postData._id}`}>
                                <button className="btn btn-info">Full Detail</button>
                            </Link>
                            )}
                        {postData.label === 'Others' && (
                            <Link to={`/full_detail/${postData._id}`}>
                                <button className="btn btn-info">Full Detail</button>
                            </Link>
                            )}
                    </div>
                    <div className="post_box d-flex justify-content-between">
                        <div className="d-flex my-2">
                            <div className="post_info d-flex flex-column" style={{paddingLeft: '10px', marginBottom: '10px'}}>
                                <img className='post_author_img' src={!postData.profilePic ? Author : postData.profilePic} alt="" />
                                <span>Posted by {postData.username}</span>
                            </div>
                            <div className="time d-flex flex-sm-column flex-md-column align-self-center mx-1">
                                <i className="fa fa-clock-o" style={{marginRight: "5px"}} />
                                <span>{moment(postData.createdAt).fromNow()}</span>
                            </div>
                        </div>
                        {postData.username === user?.user?.username &&
                            <div className="delete d-flex align-self-center">
                                <i className="fa fa-trash" aria-hidden="true" style={{color: "#f96332", fontSize: "2rem", cursor: 'pointer'}} onClick={()=> dispatch(deletePost(postData._id))} />
                                <Link to={`/edit_post/${postData._id}`}>
                                    <i className="fa fa-pencil-square" aria-hidden="true" style={{color: "gray", fontSize: "2rem", marginLeft: "5px"}} />
                                </Link>
                            </div>
                        }
                        <div className="post_reactions d-flex" style={{margin: '0 10px'}}>
                            {/* <div className="txt align-self-center" onClick={()=> likePost(postData._id)}> */}
                            <div className="txt align-self-center d-flex flex-column" onClick={handleLikes} style={{marginRight: '1px'}}>
                                <Likes />
                                {/* <i className="post_icon fa fa-heart" aria-hidden="true" style={{marginRight: '5px'}} /> */}
                            </div>
                            <div className="txt align-self-center d-flex flex-column mx-2">
                                <i className="post_icon fa fa-commenting" aria-hidden="true" />
                                <span className='text-center'>{postData.comments.length}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Post