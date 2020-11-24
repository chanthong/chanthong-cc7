import React from 'react';
import BottomHeader from '../../../components/BottomHeader/BottomHeader';
import TopHeader from '../../../components/TopHeader/TopHeader';



function Home({ role, setRole }) {
   console.log(role);
   return (
      <>
         {role === "GUEST" && <TopHeader />}
         {role === "USER" && <BottomHeader role={role} setRole={setRole}/>}
      </>
   )
}

export default Home;
