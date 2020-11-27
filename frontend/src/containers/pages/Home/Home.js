import React, { useEffect, useState } from 'react';
import BottomHeader from '../../../components/BottomHeader/BottomHeader';
import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
import axios from '../../../config/axios';
import {BASE_BACKEND_URL} from '../../../config/constants'

function Home({ role, setRole }) {
   const [user, setUser] = useState([]);
   
   const fetchData = () => {
      axios.get(`/users/getAllUsers`)
      .then(res => setUser(res.data));
   };
   
   useEffect(() => {
      fetchData();
   }, []);
   return (
      <>
         {role === "GUEST" && <TopHeader />}
         {role === "USER" && <BottomHeader role={role} setRole={setRole} />}         
         {user.map(u => <ResturantCard picUrl={`${BASE_BACKEND_URL}/${u.profile_url}`}/>)}
      </>
   )
}

export default Home;
