import {combineReducers} from 'redux'

import auth from './auth'
import post from './post'
import sportsPosts from './sportsPosts'
import ent from './ent'
import allPost from './allPost'

export default combineReducers({auth, post, sportsPosts, ent, allPost})