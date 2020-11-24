import React from 'react';

function ResturantCard() {
    return (
        <div style={{ width: "320px", height: "450px", position: "relative", overflow: "hidden" }}>
            <div style={{ width: "320px", height: "175px", backgroundColor: "#22cacf", zIndex: 3, position: "absolute", top: 0, left: 0 }}>ok</div>
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "#22cacf", zIndex: 2, position: "absolute", left: -80, top: 95 }}>ko</div>
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "#22cacf", zIndex: 2, position: "absolute", right: -80, top: 95 }}>ko</div>
            <div style={{ width: "190px", height: "190px", borderRadius: "50%", backgroundColor: "#dfca95", zIndex: 4, position: "absolute", top: 80, left: 65 }}>ji</div>
            <div style={{ width: "320px", height: "275px", backgroundColor: '#d95b55', zIndex: 1, position: "absolute", bottom: 0, left: 0 }}>ko</div>
        </div>
    )
}

export default ResturantCard
