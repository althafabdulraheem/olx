import React from 'react';
import './header.css';
const Header=()=>{

    return(<>
    <div className="header">
          <div className="wrapper">
               <div className="logo">
                    <img src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg" alt="" height="50px" width="80px"/>
                </div>
                <div className="location">
                    <input type="text" />
                </div>
                <div className="item-search">
                    <input type="text" />
               </div>
               <div className="sell-button">
                    <button>sell<br></br>+</button>
               </div> 
          </div>      
    </div>
    </>)

}

export default Header;