import React from 'react';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
// import axios from '../../../config/axios';
// import { BASE_BACKEND_URL } from '../../../config/constants'
import ChanthongRole from '../ChanthongRole/ChanthongRole';
import BottomHeader from '../../../components/BottomHeader/BottomHeader';


function Home({ role, setRole }) {

   return (
      <>
         {role === "GUEST" && <TopHeader />}
         {role === "USER" && <BottomHeader role={role} setRole={setRole} />}

         <ChanthongRole />
      </>
   )
}

export default Home;
