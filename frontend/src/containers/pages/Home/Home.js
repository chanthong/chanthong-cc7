import React from 'react';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
// import axios from '../../../config/axios';
// import { BASE_BACKEND_URL } from '../../../config/constants'
import ChanthongRole from '../ChanthongRole/ChanthongRole';
import BottomHeader from '../../../components/BottomHeader/BottomHeader';
import District from '../../../components/District/District';


function Home({ role, setRole }) {

   return (
      <>
         <ChanthongRole />
         <District/>
      </>
   )
}

export default Home;
