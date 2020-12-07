import React from 'react'
import styled from 'styled-components'


function ReserveConfirm() {
    const ReserveMock = styled.div`
    width: 100vw;
    Height: 65px;
    background-color: yellowgreen;
    `

    const ConfirmContainer = styled.div`
    width: 1920px;
    height: 450px;
    background-color: palevioletred;
    display: flex;
    justify-content: flex-start;
    position: relative;
    `

    const DetailContainer = styled.div`
    width: 450px;
    height: 100%;
    margin-left: 150px;
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    `

    const ReserveConfirmHeader = styled.h1`
    font-family: 'Mitr', sans-serif;
    font-size: 1.3rem;
    `

    const ReservationKey = styled.td`
    text-align: left;
    font-size: 14px;
    font-family: 'Mitr', sans-serif;
    width: 150px;
    padding-left: 10px;
    font-weight: bold;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
    `

    const ReservationValue = styled.td`
    text-align: left;
    font-size: 14px;
    font-family: 'Mitr', sans-serif;
    width: 300px;
    padding-left: 10px;
    box-sizing: border-box;
    word-wrap: normal;
    margin-bottom: 5px;
    `

    return (
        <div>
            <ReserveMock/>
            <ConfirmContainer>
                <DetailContainer>
                    <ReserveConfirmHeader>Reservation Summary</ReserveConfirmHeader>
                    <table>
                        <tr>
                            <ReservationKey>Restaurant:</ReservationKey>
                            <ReservationValue>Some Restaurant</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Reserver:</ReservationKey>
                            <ReservationValue>Very Hungry</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Tel:</ReservationKey>
                            <ReservationValue>+66 379814546</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>email:</ReservationKey>
                            <ReservationValue>hungry123@email.com</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Date:</ReservationKey>
                            <ReservationValue>30 November 2020</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Time:</ReservationKey>
                            <ReservationValue>19.00</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Number of Seat:</ReservationKey>
                            <ReservationValue>4</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Note:</ReservationKey>
                            <ReservationValue>Window Side Table <br/> Bring own wine <br/> Allergic to soy sauce</ReservationValue>
                        </tr>
                        <tr>
                            <ReservationKey>Promotion:</ReservationKey>
                            <ReservationValue>50% Discount</ReservationValue>
                        </tr>
                    </table>
                </DetailContainer>
            </ConfirmContainer>
        </div>
    )
}

export default ReserveConfirm
