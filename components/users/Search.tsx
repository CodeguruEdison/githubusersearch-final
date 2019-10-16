import React,{ useState,useContext } from 'react';
//import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const  Search = () => {
const githubContext = useContext(GithubContext);
const alertContext = useContext(AlertContext);
const {OnSearchUsers,clearUsers,users} = githubContext;
const {setAlert} =alertContext;
const[text,setText] = useState ('');
  
  
 const Change = e => {
   setText(e.target.value);
 };
 const onSubmit = e => {
    e.preventDefault();
     if(text == ''){
        setAlert('Please enter search text','light');
     }
     else{
       OnSearchUsers(text);
       setText('');
     }
 } ;


 
    return (
      <div>
         <form className="form" onSubmit={onSubmit} >
           <input type="text" name="text"
               value = {text} placeholder="Search Users" 
              onChange = {Change} />
           <input type="Submit" value="Search"  className="btn btn-dark btn-block"/>
        </form>
        { githubContext.users.length >0 && 
         <button  value="Clear" onClick= {clearUsers} 
          className="btn btn-light btn-block">Clear</button> }
       
      </div>
    )
  
}

export default  Search;