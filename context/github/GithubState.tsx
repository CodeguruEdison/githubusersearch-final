import React, {useReducer} from 'react';
import  axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
 SEARCH_USERS ,
  GET_USERS ,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING ,
  SET_ALERT ,
  REMOVE_ALERT
} from '../types';

//
const GithubState = props => {
   const initialState = {
      users:[],
      user:{},
      repos:[],
      loading:false
   }
  
  const[state,dispatch] = useReducer(GithubReducer,initialState);

  //Search user
  const OnSearchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
     dispatch({
          type:SEARCH_USERS,
          payload:res.data.items
        });
  };
 const setLoading =()=>  dispatch({type:SET_LOADING});
 //CLEAR USER
 const clearUsers = () => {
   setLoading();
    dispatch({
      type:CLEAR_USERS
    });
   
  };



  //Get USer
const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch( {type:GET_USER,payload:res.data});
    
  };
  //Get repos
  const getUserRepos = async username => {
     setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
   dispatch( {type:GET_REPOS,payload:res.data});
    //setLoading(false);
  };
  //Clear
  return <GithubContext.Provider
      value={{
          users: state.users,
          user: state.user,
          repos: state.repos,
          loading: state.loading,
          OnSearchUsers,
          clearUsers,
          getUser,
          getUserRepos
      }}
      >
      {props.children}
  </GithubContext.Provider>
}
export default GithubState;
