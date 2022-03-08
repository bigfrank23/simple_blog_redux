import * as api from '../../api'
import { AUTH, GET, DELETE_USER } from '../constants/actionTypes'

export const register = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.register(formData)
        dispatch({type: AUTH, payload: data})
        history.push('/login')
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const login = (loginData, history) => async(dispatch) => {
    try {
        const {data} = await api.login(loginData)
        dispatch({type: AUTH, payload: data}) && history.push("/")
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const getUserId = (id, setUserData) => async(dispatch) => {
    try {
        const {data} = await api.getUserbyId(id)
        setUserData(data)
        dispatch({type: GET, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (id) => async(dispatch) => {
    try {
        const {data} = await api.updateUser(id)
        dispatch({type: true, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try{
        const {data} = await api.deleteUser(id)
        dispatch({type: DELETE_USER, payload: data})
    } catch (error) {
        console.log(error);
    }
}
