import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

function Home({ role, setRole }) {
   return (
      <div>
         <Navbar role={role} setRole={setRole} />
      </div>
   )
}

export default Home
