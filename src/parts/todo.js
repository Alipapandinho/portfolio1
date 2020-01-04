import React from 'react';
import '../App.css';
import profile from '../JariExample.png';

const Todo = () => {
   

   return ( 
   <div className= 'frame3'>
      <h2 className= 'Port-header'>Things I am working on the Spring 2020</h2>
      <li className= 'Port-basic2'> In the beginning of the year 2020, I am in the middle of
      a course User Experience: Desing and Evaluation (UXDE). In the course we have a three person group project,
      in which we design an application for users of shared vehicles. The task is very interesting since it 
      is part of a real case and deals with shared economy which is something I am very interested in. 
      Prototyping is still in a very early phase and the whole project is still going on from our behalf. 
      But at this point we have made an online questionnaire for the citizens of Tampere and picked up some attitudes and 
      ideas from them and read scientific literature reladted to sharing economy and our work generally. We have
      chosen to use UX Lifecycle Model ContinUE in our project and learnt from that. The design process has focused to defining 
      UX goals and for that we have learnt some techniques. Based on the questionnaire and 
      Russel Belk's article "You are what you can access: Sharing and collaborative consumption online" (2014), I have built one example user profile for us.
      The quote in the middle is translated from a questionnaire answer.</li>
      <img className= 'Port-profileImg' src={profile}/>
      <li className= 'Port-basic2'>In the spring 2020 I am also going to work on my Batchelor's thesis from Biomedical engineering and 
      learn user centered design from a cross cultural and product development perspective. In addition, 
      I have planned of making a user study considering the possible readers of Tekniikan kutsu to find out the latest ways youth would 
      like to get information of future study and work possibilities and attitudes towards the blog. This information would be valuable in developing 
      the blog but also in reaching the readers.</li>
  </div>
  )
}

export default Todo