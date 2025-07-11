import React from 'react'
import { Link } from 'react-router-dom';


const InfoBox=({text,link,btnText})=>(
  <div className="Info-box">
    {text}
    <Link to={link} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 font-bold text-xx">
    {btnText}
    </Link>
  </div>
)


const renderContent= {
  1:(
    <p className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I'm <span className="font-semibold">Samyuktha</span><br/>
    A Passionate Frontend Developer</p>
  ),
  2:(
    <p className="sm-text-xl font-medium sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"><InfoBox text={`Who enjoy's to develop 
    responsive\nand interactive web applications`} link="/about" btnText={"\nLearn more"}/></p>

  ),
  3:(
    <p className="sm-text-xl font-medium sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"><InfoBox text={`Developed multiple projects and interned as Front end developer`} link="/projects" btnText={"\nVisit my portfolio"}/></p>
  ),
  
}

const HomeInfo=({currentStage})=>{
    return renderContent[currentStage]||null;
}
export default HomeInfo