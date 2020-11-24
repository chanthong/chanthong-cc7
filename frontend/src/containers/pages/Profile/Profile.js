import React from 'react'
import './Profile.css'
import PlateImg from '../../uploadfile/dishelement.png'
import DiningImg from '../../uploadfile/diningset.png'

function Profile() {
    return (
        <div className="outerFrame">
            <div className="outerCircle"></div>
            <div className="outerPlate">
                <div className="innerPlate"></div>
            </div>

            {/* Left-Side */}

            <div className="welcome font-mitr">Welcome</div>
            <div className="user font-mitr">User</div>
            <div className="to font-mitr">to</div>
            <div className="chanthong font-lobster">Chanthong</div>

            <div className="nextReserve font-mitr">Next Reservation</div>
            <div className="date">Date and Time</div>
            <div className="restaurant">Some restaurant</div>

            <div>
                <img className = "plateset" src={DiningImg} alt="plate" style={{left: "60px", top: "240px"}}></img>
            </div>
            <div className = "favResto" style={{left: "66px", top: "470px"}}>Resto 1</div>

            <div>
                <img className = "plateset2" src={DiningImg} alt="plate" style={{left: "290px", top: "270px"}}></img>
            </div>
            <div className = "favResto" style={{left: "165px", top: "470px"}}>Resto 2</div>

            <div>
                <img className = "plateset2" src={DiningImg} alt="plate" style={{left: "460px", top: "270px"}}></img>
            </div>
            <div className = "favResto" style={{left: "265px", top: "470px"}}>Resto 3</div>


            {/* Favorite */}
            <div className="favorite font-mitr">Favorite:</div>

            <div>
                <img className="plateFavTab" src={PlateImg} alt="plate" style={{left: "60px", top: "410px"}}/>
            </div>

            <div>
                <img className="plateFavTab" src={PlateImg} alt="plate" style={{left: "160px", top: "410px"}}/>
            </div>

            <div>
                <img className="plateFavTab" src={PlateImg} alt="plate" style={{left: "260px", top: "410px"}}/>
            </div>
            




            {/* Right-Side  */}

            <div className="numberCircle"></div>
            <div className="profileCircle"></div>
            
            <div className="leftTab1 font-mitr">Reserve History</div>
            <div className="leftTab2 font-mitr">My Reward</div>
            <div className="leftTab3 font-mitr">Edit My Profile</div>
            <div>
                <img className = "plateLeftTab" src={PlateImg} alt="plate" style={{left: "747px", top: "400px"}}></img>
            </div>
            <div className="nameLeftDownTab1 font-mitr">Name:</div>
            <div className="leftDownTab1 font-mitr">User's name</div>
            <div>
                <img className = "plateLeftTab" src={PlateImg} alt="plate" style={{left: "696px", top: "465px"}}></img>
            </div>
            <div className="nameLeftDownTab2 font-mitr">Email Address:</div>
            <div className="leftDownTab2 font-mitr">User's email</div>
            <div>
                <img className = "plateLeftTab" src={PlateImg} alt="plate" style={{left: "598px", top: "530px"}}></img>
            </div>
            <div className="nameLeftDownTab3 font-mitr">Phone Number:</div>
            <div className="leftDownTab3 font-mitr">User's contact</div>
        </div>
    )
}

export default Profile
