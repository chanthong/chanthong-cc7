import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import ChanthongRole from '../ChanthongRole/ChanthongRole';

function Home({ role, setRole }) {

   return (
      <div >
         <Navbar role={role} setRole={setRole} />
         <ChanthongRole />
      </div>
   )
}

export default Home
