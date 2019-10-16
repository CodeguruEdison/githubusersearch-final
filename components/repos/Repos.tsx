import React,{Fragment,useContext} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () =>{

   const githubContext= useContext(GithubContext);
   const {repos,loading} = githubContext;
  return repos.map(repo=> <RepoItem loading={loading} key={repo.id} repo={repo}></RepoItem>);
}

/*const Repos =( {repos,loading }) => {
   if(loading)
    return <Spinner/>
   else {
      return
       <Fragment>
             { repos.map(repo => (
              <RepoItem key={repo.id} repo={repo}></RepoItem>
           ))}
       </Fragment>
      ;
   }
}*/

export default Repos;


