import React from 'react';
import '../App.css';
import aliKuva from '../Kiasma.png';



const Who = () => {
   return ( 
      <div> 
         
         <img className='Port-whoImg' src={aliKuva}/> 
         <h2 className= 'centered'>Who is she?</h2> 
         <p className= 'Port-basic'> Hi! I am Aliisa Palm
         or briefly Ali. I am a fourth-year student
         in Tampere university with a background of Electrical engineering and 
         a growing passion of user centered tecnhonogy design.
         I am interested in human behaviour, society and history of popular culture 
         - a few themes to mention. 
         My way of living is to set goals and take on challenges (not only the serious ones) 
         and righ now I am seeking a job to get new angles on developing and challenging myself. </p>
         
         </div>
         )
}

export default Who