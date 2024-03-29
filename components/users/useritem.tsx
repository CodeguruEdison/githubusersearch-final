
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItemProps from './models.UserItemProps';
import {Link} from 'react-router-dom';

 const UserItem = (props:UserItemProps) => {
  // const UserItem = ({user:{login,avatar_url,html_url}}) => {
   const {login,avatar_url,html_url} = props.user;
   return (
        <div className="card text-center" >
            <img src={avatar_url} className="round-img" style={{width:'60px'}}/>
            <h3>{login}</h3>
              <div>
                  <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
              </div>
        </div>
      )
 
}
UserItem.prototype = {
   user:PropTypes.object.isRequired
   
}
export default UserItem;