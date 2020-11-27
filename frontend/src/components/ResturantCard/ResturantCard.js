import React from 'react';

function ResturantCard({picUrl}) {
    console.log(picUrl);
    return (
        <div>
            <img src={picUrl} alt="pictureprofile"></img>
        </div>
    )
}

export default ResturantCard
