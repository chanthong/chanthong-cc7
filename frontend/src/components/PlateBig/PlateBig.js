import React from 'react'
import styled from 'styled-components'

const PlateOuter = styled.div`
width: 1000px;
height: 1000px;
background-color: #DFCA95;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 100px 100px 80px rgba(30, 30, 30, 0.4);
`;

const InnerPlate = styled.div`
width: 610px;
height: 610px;
background-color: #DFCA95;
border-radius: 50%;
box-shadow: inset 100px 100px 80px rgba(100, 70, 10, 0.25),
            inset -100px -100px 80px rgba(255, 240, 200, 0.4);
`


function PlateBig(props) {
    return (
        <div className="Plate" style={{position: "absolute", left:props.left, zIndex: "1"}}>
            <PlateOuter>
                <InnerPlate></InnerPlate>
            </PlateOuter>
        </div>
    )
}

export default PlateBig