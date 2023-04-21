import React from 'react'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'
import Bootstrap from './Bootstrap'
import RP from "./RP"
import Github from '../Github'

const Allskill = () => {
  return (
    <div>
          <div style={{ display: 'flex'}}>
            <h6 style={{fontWeight: 'bold',marginTop:"15px",marginRight:"8px"}}>Tech-Stack</h6>
          <hr style={{width:"2px",height:'40px',backgroundColor:"darkblue",color:"darkblue",marginTop:"8px"}}/>
      <Html/>
      <Css/>
      <Javascript/>
      <RP/>
      <Bootstrap/>
      <Github/>
      </div>
    </div>
  )
}

export default Allskill
