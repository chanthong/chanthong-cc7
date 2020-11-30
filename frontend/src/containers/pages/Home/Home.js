import React from 'react';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
// import axios from '../../../config/axios';
// import { BASE_BACKEND_URL } from '../../../config/constants'
import ChanthongRole from '../ChanthongRole/ChanthongRole';


function Home({ role, setRole }) {

   return (
      <>
         {role === "GUEST" && <TopHeader />}
         {/* {user.map(u => <ResturantCard picUrl={`${BASE_BACKEND_URL}/${u.profile_url}`}/>)} */}
         <ChanthongRole />
      </>
   )
}

export default Home;
