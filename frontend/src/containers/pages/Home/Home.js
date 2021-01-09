import React from 'react';
import ChanthongRole from '../ChanthongRole/ChanthongRole';
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
