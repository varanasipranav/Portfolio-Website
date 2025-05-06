import '../Styles/Landing.css'
import { TypeAnimation } from 'react-type-animation';
import Pacman from './Pacman';
import Header from './header';
import Image from './Image';
export default function Landing(){
    return(
        <>
        <Header/>
        <div className='Landing-title-container'>
        <h1>Hi<span class="wave"></span></h1>
        <h1>I'm Pranav Varanasi</h1>
        
        <div className='animation'>
        
        <TypeAnimation
        
      sequence={[
        'I am a Computer Science Graduate.', 
        500, // Waits 1s
        'I am a Java Full Stack Developer.', 
        500, // Waits 2s
        'I am a Machine Learning and AI Enthusiast.',
        500,
        'I am a Part-time Youtuber.',
        500, 
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "20px",  fontFamily: 'Sixtyfour Convergence', color: 'green', marginTop:'55px' }}
    />

    <Pacman/>
 

    </div>
   
    </div>
        </>
    )

}