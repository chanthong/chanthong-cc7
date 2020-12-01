import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    background-color: salmon;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 20px;
    height: 60px;
    width: 100%;
    z-index: 1200;
    
`

var FContainer = styled.div`
  display: block;
  height: 60px;
  width: 100vw;
  color: aqua;
  font-weight: bold;
`

function Footer() {
    return (
        <>
            <FContainer>

                <Style>Chanthong Co.,Ltd. | Tel: 02-222-2222 | Email: Chanthong@gmail.com</Style>
            </FContainer>
        </>
    )
}

export default Footer