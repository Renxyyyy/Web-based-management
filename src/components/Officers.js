import React from 'react'
import "./Officers.css"

const Officers = () => {
  return (
  <div className="Title">
    Home Owners Association Officers
    <div className="Officers">
        <div className= "Profile">
            <a target="_blank">
            <img src='images/samplepic.png' alt='Sample1' width="290" height="200"/>
            </a>
            <div className='Decs'>Henry Calliwag
            <div classname='Position'>President
            </div>
            </div>
            <div className= "Profile">
            <a target="_blank">
            <img src='images/samplepic.png' alt='Sample1' width="290" height="200"/>
            </a>
            <div className='Decs'>Henry Calliwag
            <div classname='Position'> Vice President
            </div>
            </div>
           </div>
      </div>
    </div>
  </div>
  )
}

export default Officers