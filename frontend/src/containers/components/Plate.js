import React from 'react'
import styled from 'styled-components'

const PlateOuter = styled.div`
width: 144px;
height: 144px;
background-color: #DFCA95;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 10px 10px 8px rgba(30, 30, 30, 0.25);
`;

const InnerPlate = styled.div`
width: 90px;
height: 90px;
background-color: #DFCA95;
border-radius: 50%;
box-shadow: inset 8px 8px 10px rgba(100, 70, 10, 0.25),
            inset -8px -8px 10px rgba(255, 240, 200, 0.4);
`


function Plate() {
    return (
        <div>
            <PlateOuter>
                <InnerPlate></InnerPlate>
            </PlateOuter>
        </div>
    )
}

export default Plate

