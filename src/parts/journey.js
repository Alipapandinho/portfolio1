import React from 'react';
import '../App.css';
import fred from '../fred.png'
import sut from '../SuT.png'
import o1 from '../Otekn1.png'
import o2 from '../Otekn2.png'
import o3 from '../Otekn3.png'

const Journey = () => {
   return ( <div> 
      <div className='frame4'>
         <h2 className= 'Port-header'>Fred the Feedback Channel</h2> 
         <p className= 'Port-basic2'> About a year ago I attented a course User Interface Design. 
         It was my first UX course with a real hands-on project and eventually it gave my studies a new direction!  </p>
         <p className= 'Port-basic2'> </p>
         <p className= 'Port-basic2'>In the group project we designed and prototyped an application
         that helps citizens to give feedpack on public transportation. This was a new kind of task for me and a lot of things in the user study and
         the design process we did in the exercises since it was the first time we learnt of UI design and things to consider. 
         My personal resposibility in the project was to make the sketches of the mobile application. I made them with InVision and
         it has been a regular tool for me since then.</p>
         <img className='Port-fredImg' src={fred}/>
         <p className= 'Port-basic2'>This first project gave me a lot to think about and it opened up human centered design process in various new ways.
         Even though the final prototype was made by my group mate, this was my first touch of prototyping programs such as Adobe XD which we learnt along the way.
         UID course made me aware that UI desing cannot be only about artistic solutions but balancing the graphic art form with usability.</p>
      </div>
      
      <div className= 'frame5'>
         <h2 className= 'Port-header'>Nao as an Exercise Goach</h2>
         <p className= 'Port-basic2'>In the course User Experience in Robotics I stepped again into a great unknown. I have not been in touch
         with robots at all and technially I do not know much about them. My group made a project work of humanoid called Nao as an exercice
         coach for university students. Nao had a small exercise already implemented in it. Based on that we did a user study to gather attitudes and
         ideas on how the concept of break exercise coach humanoid could work. I organized the user study event where the test users did the exercise and
         discussed in a half structured group interview. My role in the process varied and this user study developed my skills in organizing a study, 
         observing and interviewing as well as in writing a transcription and analyzing the answers.</p>
         <p className= 'Port-basic'></p>
         <p className= 'Port-basic2'>We came up with a consept desing and ideas for the future. We also did some implementations and I personally got to try 
         programming of the robot for the first time with Choregraphe which was amazing. The dialog part of the video is implemented by me.</p>

         <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ftct37daYkE" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>

         </iframe>

         <p className= 'Port-basic2'> This project showed me how UX design is not only about applications and programs. It also taught me new kinds
         of people skills as I had to take a leading role in our group. </p>
      </div>
      
      <div className= 'frame6'>
         <h2 className= 'Port-header'> Shaking up Tech -exhibition</h2>
         <img className='Port-fredImg' src={sut}/>
         <p className= 'Port-basic2'>In the beginning of October 2019
         Tampere University organized Shaking up Tech event in Hervanta campus. The event inspired and encouraged secondary school girls into the field of tech.
          Uranaisten Opikelijaseura ry organized the whole exhibition of Shaking up Tech which was also the final part of the event.
         I was one of two main resposibles in the organizing of exhibition and on top of that we hosted the daytime event. 
         This was good challenge for me as I got to lead the people making the exhibition happen.
         </p>
         <p className= 'Port-basic2'>In the picture I am hosting the daytime speaker event. Picture is taken by Jonne Renvall.</p>
      </div>

      <div className= 'frame7'>
         <h2 className= 'Port-header'>Tekniikan kutsu</h2>
         <p className= 'Port-basic2'>Tekniikan kutsu is a blog run by Uranaisten opiskelijaseura. I was responsible for it for a year 2019.
         It tells stories about studying and working in the field of tech and the possibilities tech offers. The main target audience is secondary school students. 
         The blog crashed down in the end of the summer and I had to learn new skills as I tried to make it work again.
         In addition, as my responsibilities I organized the posts and updated the Instagram page related to site. 
         Possibly at the time you are reading this the blog may be under construction as I discovered poor features in the old version and we want to make it work in a new basis.</p>
      </div>

      <div className= 'frame8'>
         <h2 className= 'Port-header'> Coding</h2>
         <p className= 'Port-basic2'>I started coding in university. We started with Python and now I have had a few
         courses with C++. Coding is an exiting tool for me and I hope that in the future I can some way utilize it in my work.</p>
         <img className='Port-fredImg' src={o1}/>
         <p className= 'Port-basic2'> These three pictures are from a group work from this fall. We made a game where players take over the area 
         by planting plants. The pictures are made with Paint - let's not talk about them. I was responsible for these UI windows and 
         along the project I learnt to code the windows fully which was fascinating. Our tools were C++ and Qt.</p>
         <img className='Port-fredImg' src={o2}/>
         <p className= 'Port-basic2'> As I code graphical interfaces I enjoy the fact that you can actually see the result immediately.
         I enjoy how the persona can be shown even in these kinds of general school projects.  </p>
         <img className='Port-fredImg' src={o3}/>
      </div>

      <div className= 'frame9'>
         <p className= 'Port-basic2'> This Portfolio I coded as a React app.</p>
      </div>


      </div>)
}

export default Journey