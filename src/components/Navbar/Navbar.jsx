import React from 'react';
import './Navbar.scss';
import search_icon from '../../res/Union.svg';
import notification_icon from '../../res/Vector.svg';
import elipss_icon from '../../res/Ellipse 4.svg';
import message_icon from "../../res/Vector (1).svg";
import user_image from "../../res/unsplash_OH2S9XAcLhc.png" 
import drop_down from "../../res/Vector 1.svg"
import ham from '../../res/Group.png'

 
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="nav-components">
          <div className="nav-top">
            <div className='ham'>
              <img src={ham} alt="" onClick={()=>{alert("Try atersometime")}}/>
            </div>
              <div className="search-component">
                    <input type="text" placeholder='Search' id="#search-box"/>
                    <img src={search_icon} alt="" />
              </div>

              <div className="users-component">
                    <div className="notify">
                      <img src={notification_icon} alt=""  onClick={()=>{alert('under developement')}}/>
                      <div className="up-icon">
                        <img src={elipss_icon} alt="" />
                      </div>
                    </div>

                    <div className="messsage-icon">
                        <img src={message_icon} alt="" onClick={()=>{alert('under developement')}} />
                    </div>
                    
                    <div className="user-data">
                      <img className='user-img' src={user_image} alt="" onClick={()=>{alert('under developement')}}/>
                      <p onClick={()=>{alert('under developement')}} >Admirra Jhon </p>
                      <img src={drop_down} alt="" onClick={()=>{alert('under developement')}} />
                    </div>

              </div>
          </div>

        </div>

    </div>
  )
}

export default Navbar
