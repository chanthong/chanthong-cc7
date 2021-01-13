import axios from '../../../config/axios';
import React, { useEffect, useState } from 'react';
import LargeItem from '../../../components/LargeItem/LargeItem';
import LargeThemeItem from '../../../components/LargeThemeItem/LargeThemeItem';
import SmallItem from '../../../components/SmallItem/SmallItem';
import SmallLocationItem from '../../../components/SmallLocationItem/SmallLocationItem';


function Home({ role, setRole }) {

   const [favorite, setFavorite] = useState([]);
   const [ratchatewi, setRatchatewi] = useState([]);
   const [phayathai, setPhayathai] = useState([]);
   const [bangrak, setBangrak] = useState([]);
   const [wattana, setWattana] = useState([]);
   const [theme, setTheme] = useState([]);
   const [thai, setThai] = useState([]);
   const [chinese, setChinese] = useState([]);
   const [japanese, setJapanese] = useState([]);
   const [fineDining, setFineDining] = useState([]);
   const [hotCuisine, setHotCuisine] = useState([]);
   const [atTwilight, setAtTwilight] = useState([]);
   const [buffet, setBuffet] = useState([]);

   const placeData = [
      { id: 1, name: 'สยาม', qty: 56, imgUrl: 'https://source.unsplash.com/random' },
      { id: 2, name: 'สมุทรปราการ', qty: 45, imgUrl: 'https://source.unsplash.com/random' },
      { id: 3, name: 'ราชเทวี', qty: 78, imgUrl: 'https://source.unsplash.com/random' },
      { id: 4, name: 'อโศก', qty: 91, imgUrl: 'https://source.unsplash.com/random' },
      { id: 5, name: 'สาทร', qty: 34, imgUrl: 'https://source.unsplash.com/random' },
      { id: 6, name: 'ศรีลม', qty: 52, imgUrl: 'https://source.unsplash.com/random' }
   ];
   const ThemeData = [
      { id: 1, name: 'SeaFood', qty: 56, imgUrl: 'https://source.unsplash.com/random' },
      { id: 2, name: 'Buffet', qty: 45, imgUrl: 'https://source.unsplash.com/random' },
      { id: 3, name: 'Thai', qty: 78, imgUrl: 'https://source.unsplash.com/random' },
      { id: 4, name: 'China', qty: 91, imgUrl: 'https://source.unsplash.com/random' },
      { id: 5, name: 'Japan', qty: 34, imgUrl: 'https://source.unsplash.com/random' },
      { id: 6, name: 'Street', qty: 52, imgUrl: 'https://source.unsplash.com/random' }
   ];
   const restaurantData = [
      {
         id: 1,
         title: 'โกจิ คิทเช่น @ แบงค็อก แมริออท มาร์คีส์ ควีนส์ปาร์ค (Goji Kitchen @ Bangkok Marriott Marquis Queens Park)',
         place: 'ลาดพร้าว',
         restTheme: 'China',
         qty: 56,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 2,
         title: 'Oishi restaurant',
         place: 'ทองหล่อ',
         restTheme: 'Japan',
         qty: 96,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 3,
         title: 'Goji Kitchen @ Bangkok Marriott Marquis Queens Park',
         place: 'สยาม',
         restTheme: 'Buffet',
         qty: 53,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 4,
         title: 'MK Restaurant',
         place: 'บางนา',
         restTheme: 'SeaFood',
         qty: 88,
         imgUrl: 'https://source.unsplash.com/random'
      },
   ];

   const fetchFavoriteRestaurant = async () => {
      const res = await axios.get("/partners/");
      setFavorite(res.data.partners)
   };

   const fetchThemeRestaurant = async () => {
      const res = await axios.get("/partner_category/allTheme");
      setTheme(res.data.allTheme);
   };

   const fetchRatchatewiRestaurant = async () => {
      const res = await axios.get(`/partners/district/ratchatewi`);
      setRatchatewi(res.data.targetPartner);
   };

   const fetchPhayathaiRestaurant = async () => {
      const res = await axios.get(`/partners/district/phayathai`);
      setPhayathai(res.data.targetPartner);
   };

   const fetchBangrakRestaurant = async () => {
      const res = await axios.get(`/partners/district/bangrak`);
      setBangrak(res.data.targetPartner);
   };

   const fetchWattanaRestaurant = async () => {
      const res = await axios.get(`/partners/district/watthana`);
      setWattana(res.data.targetPartner);
   };

   const fetchThaiRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/thai");
      setThai(res.data.targetTheme);
   };

   const fetchChineseRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/chinese");
      setChinese(res.data.targetTheme);
   };

   const fetchJapaneseRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/japanese");
      setJapanese(res.data.targetTheme);
   };
   const fetchFineDiningRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/fine dining");
      setFineDining(res.data.targetTheme);
   };
   const fetchHotCuisineRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/hot cuisine");
      setHotCuisine(res.data.targetTheme);
   };
   const fetchAtTwilightRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/at twilight");
      setAtTwilight(res.data.targetTheme);
   };
   const fetchBuffetRestaurant = async () => {
      const res = await axios.get("/partner_category/myTheme/buffet");
      setBuffet(res.data.targetTheme);
   };


   useEffect(() => {
      fetchFavoriteRestaurant();
      fetchThemeRestaurant();
      fetchRatchatewiRestaurant();
      fetchPhayathaiRestaurant();
      fetchBangrakRestaurant();
      fetchWattanaRestaurant();
      fetchThaiRestaurant();
      fetchChineseRestaurant();
      fetchJapaneseRestaurant();
      fetchFineDiningRestaurant();
      fetchHotCuisineRestaurant();
      fetchAtTwilightRestaurant();
      fetchBuffetRestaurant();
   }, []);

   console.log('favorite: ', favorite);
   console.log('thai: ', thai);
   return (
      <>
         {/* <SmallLocationItem
            textColor={'red'}
            placeLabel={'ที่ตั้ง'}
            cardData={place}
         /> */}
         <LargeItem
            textColor={'red'}
            placeLabel={'ราชเทวี'}
            cardData={ratchatewi}
         />
         <LargeItem
            textColor={'red'}
            placeLabel={'พญาไท'}
            cardData={phayathai}
         />
         <LargeItem
            textColor={'red'}
            placeLabel={'บางรัก'}
            cardData={bangrak}
         />
         <LargeItem
            textColor={'red'}
            placeLabel={'วัฒนา'}
            cardData={wattana}
         />
         {/* <SmallItem
            textColor={'red'}
            placeLabel={'ประเภทอาหาร'}
            cardData={theme}
         /> */}
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'ร้านอาหารไทย'}
            cardData={thai}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'ร้านอาหารจีน'}
            cardData={chinese}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'ร้านอาหารญี่ปุ่น'}
            cardData={japanese}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'fine dining'}
            cardData={fineDining}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'hot cuisine'}
            cardData={hotCuisine}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'at twilight'}
            cardData={atTwilight}
         />
         <LargeThemeItem
            textColor={'red'}
            placeLabel={'buffet'}
            cardData={buffet}
         />
         <LargeItem
            textColor={'red'}
            placeLabel={'เป็นที่นิยม'}
            cardData={favorite}
         />
      </>
   )
}

export default Home;
