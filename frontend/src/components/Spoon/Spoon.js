import React from 'react'
import styled from 'styled-components'

const SpoonContainer = styled.div`
width: 400px;
height: 100px;
display: flex;
align-items: center;
position: relative;
`

const SpoonHead = styled.div`
width: 150px;
height: 96px;
border-radius: 42% 58% 58% 42% / 50% 50% 50% 50%;
background-color: rgba(200, 200,200, 1);
box-shadow: inset 10px 10px 10px rgba(30, 30, 30, 0.4),
            inset -10px -10px 8px rgba(245, 245, 245, 0.6),
            5px 5px 5px rgba(30, 30, 30, 0.4);
position: absolute;
right: 0px;
`;

const SpoonHandleInput = styled.input`
width: 250px;
height: 24px;
background-color: rgba(200, 200,200, 1);
border: none;
border-radius: 15px;
position: absolute;
left: 0px;
clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
box-shadow: inset 5px 5px 3px rgba(30, 30, 30, 0.4),
            inset -5px -5px 3px rgba(245, 245, 245, 0.5),
            5px 5px 5px rgba(30, 30, 30, 0.4);
padding: 15px;
outline: none;
font-size: 16px;
font-weight: 700;
`


function Spoon() {
    return (
        <div>
            <SpoonContainer>
                <SpoonHandleInput maxLength="25"></SpoonHandleInput>
                <SpoonHead></SpoonHead>
            </SpoonContainer>
        </div>
    )
}

export default Spoon