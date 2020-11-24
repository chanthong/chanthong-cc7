import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
// import ResturantCard from '../../../components/ResturantCard/ResturantCard';
import ResturantCard2 from '../../../components/ResturantCard/ResturantCard2/ResturantCard2';
import axios from 'axios';

function Home({ role, setRole }) {
   const [card, setCard] = useState([]);

   const fetchPartners = async () => {
      const res = await axios.get("http://localhost:5555/partners/");
      setCard(res.data.partners);
   }

   useEffect(() => {
      fetchPartners();
   }, []);

<<<<<<< HEAD
   return (
      <div style={{ display: 'flex' }}>
         <Navbar role={role} setRole={setRole} />
         {/* <ResturantCard /> */}
         {card.map((item) => <ResturantCard2 card={item} />)}
=======
function Home({ role, setRole }) {
   return (
      <div>
         <Navbar role={role} setRole={setRole} />
>>>>>>> dev
      </div>
   )
}

export default Home
