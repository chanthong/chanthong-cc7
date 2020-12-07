import React from 'react'
import styled from 'styled-components';
import serveWithUs from '../../uploadfile/ServeWithUsElement.png';
import { useHistory } from 'react-router-dom';

const Style = styled.div`
    background-color: salmon;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 20px;
    height: 100px;
    width: 100%;
    z-index: 1200;
`

var FContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 100vw;
  color: aqua;
  font-weight: bold;
`


function Footer() {
    const history = useHistory();

    const handlePartner = () => {
        history.push("/partner_register")
    }

    const handlePartnerLogin = () => {
        history.push("/partner_login")
    }

    return (
        <>
            <FContainer>
                <Style>
                    <button onClick={handlePartner} style={{ color: "#ffff", background: "none", border: "none", outline: "none", cursor: "pointer", marginRight: "10px", borderRight: "1px solid white", paddingRight: "10px" }}>
                        Partner Register
                    </button>
                    <button onClick={handlePartnerLogin} style={{ color: "#ffff", background: "none", border: "none", outline: "none", cursor: "pointer", marginRight: "10px" }}>
                        Partner Login
                    </button>
                    Chanthong Co.,Ltd. | Tel: 02-222-2222 | Email: Chanthong@gmail.com
                </Style>
            </FContainer>
        </>
    )
}

export default Footer