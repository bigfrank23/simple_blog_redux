import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { getPostsBySearch } from '../../redux/actions/allPosts';
import Post from '../Post/Post'

import './Posts.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = ({postData, color}) => {
  const [searchData, setSearchData] = useState('')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const history = useHistory();
  
  const all = useSelector((state)=> (state.allPost.posts))
  const filterData = postData.filter((data)=> {
      if (
        searchData === "" ||
        data.title.toLowerCase().includes(searchData.toLowerCase()) ||
        data.desc.toLowerCase().includes(searchData.toLowerCase())
      ) {
        return data;
      }
    })

  return (
    <div className='container'>
      <div className="d-flex flex-column" id='search_box'>
        <div className="search_box d-flex">
          <div className="col-2 text-center">
              <h4 style={{textShadow: "2px 2px", position: "relative"}}>ALL CATEGORIES</h4>
          </div>
        </div>
        {!filterData.length && <h3 className="text-primary">No result found!</h3>}
      </div>
      {filterData.map((val, index )=> (
          <Post postData={val} key={index} searchData={searchData} color={color} />
          ))}
    </div>
  );
}

export default withRouter(Posts)