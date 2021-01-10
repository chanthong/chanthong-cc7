import React from 'react';
import LargeItem from '../../../components/LargeItem/LargeItem';
import SmallItem from '../../../components/SmallItem/SmallItem';


function Home({ role, setRole }) {
   const placeData = [
      { id: 1, name: 'สยาม', qty: 56, imgUrl: 'https://source.unsplash.com/random' },
      { id: 2, name: 'สมุทรปราการ', qty: 45, imgUrl: 'https://source.unsplash.com/random' },
      { id: 3, name: 'ราชเทวี', qty: 78, imgUrl: 'https://source.unsplash.com/random' },
      { id: 4, name: 'อโศก', qty: 91, imgUrl: 'https://source.unsplash.com/random' },
      { id: 5, name: 'สาทร', qty: 34, imgUrl: 'https://source.unsplash.com/random' },
      { id: 6, name: 'ศรีลม', qty: 52, imgUrl: 'https://source.unsplash.com/random' }
   ]
   const ThemeData = [
      { id: 1, name: 'SeaFood', qty: 56, imgUrl: 'https://source.unsplash.com/random' },
      { id: 2, name: 'Buffet', qty: 45, imgUrl: 'https://source.unsplash.com/random' },
      { id: 3, name: 'Thai', qty: 78, imgUrl: 'https://source.unsplash.com/random' },
      { id: 4, name: 'China', qty: 91, imgUrl: 'https://source.unsplash.com/random' },
      { id: 5, name: 'Japan', qty: 34, imgUrl: 'https://source.unsplash.com/random' },
      { id: 6, name: 'Street', qty: 52, imgUrl: 'https://source.unsplash.com/random' }
   ]
   const restaurantData = [
      {
         id: 1,
         title:'โกจิ คิทเช่น @ แบงค็อก แมริออท มาร์คีส์ ควีนส์ปาร์ค (Goji Kitchen @ Bangkok Marriott Marquis Queens Park)',
         place:'ลาดพร้าว',
         restTheme: 'China',
         qty: 56,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 2,
         title:'Oishi restaurant',
         place:'ทองหล่อ',
         restTheme: 'Japan',
         qty: 96,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 3,
         title:'Goji Kitchen @ Bangkok Marriott Marquis Queens Park',
         place:'สยาม',
         restTheme: 'Buffet',
         qty: 53,
         imgUrl: 'https://source.unsplash.com/random'
      },
      {
         id: 4,
         title:'MK Restaurant',
         place:'บางนา',
         restTheme: 'SeaFood',
         qty: 88,
         imgUrl: 'https://source.unsplash.com/random'
      },
   ]

   return (
      <>
         <SmallItem
            textColor={'red'}
            placeLabel={'ที่ตั้ง'}
            cardData={placeData}
         />
         <SmallItem
            textColor={'red'}
            placeLabel={'ประเภทอาหาร'}
            cardData={ThemeData}
         />
         <LargeItem
            textColor={'red'}
            placeLabel={'เป็นที่นิยม'}
            cardData={restaurantData}
         />
      </>
   )
}

export default Home;
