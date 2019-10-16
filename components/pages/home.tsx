import React,{Fragment} from 'react';
import Search from "../users/Search";
import Users from "../users/users";

const Home =()=>{
  return(
       <Fragment>
                    <Search/>
                    <Users />
      </Fragment>
  );
}
export default Home;
