import React from 'react';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';

// import axios from '../../../config/axios';
// import { BASE_BACKEND_URL } from '../../../config/constants'
import ChanthongRole from '../ChanthongRole/ChanthongRole';
import BottomHeader from '../../../components/BottomHeader/BottomHeader';
import District from '../../../components/District/District';


function Home({ role, setRole }) {

   return (
      <>
         <h1 style={{ textAlign: "start", fontSize: "24px", fontStyle: "italic" }}>Recommend by Chanthong</h1>
         <ChanthongRole />
         <District />
      </>
   )
}

export default Home;
