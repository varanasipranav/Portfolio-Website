import { TypeAnimation } from 'react-type-animation'
import '../Styles/Experience.css'
import { useState } from 'react'

export default function Experience(){
    const [firstline,setFirstLine]=useState(false)
    const [secondline,setSecondline]=useState(false)
    const [thirdline,setThirdLine]=useState(false);
    const [fourthline, setFourthLine]=useState(false);
        var myDate = new Date();
        var pastDate = new Date('2024-07-25')
        let years=myDate.getFullYear()-pastDate.getFullYear();
        let months=myDate.getMonth()-pastDate.getMonth();
        let days= myDate.getDate()-pastDate.getDate();

        if(months<0){
            years--;
            months=months+12;
        }

        if(days<0){
            const previousMonth=new Date(myDate.getFullYear(),myDate.getMonth(),0);
            days+=previousMonth.getDate();
        }
        

    return(

<div class="code-editor">
      <div class="header">
      <div class="top">
      <div class="circle">
        <span class="red circle2"></span>
      </div>
      <div class="circle">
        <span class="yellow circle2"></span>
      </div>
      <div class="circle">
        <span class="green circle2"></span>
      </div>
      <div class="title">
      </div>
    </div>

        <span class="title">
        <TypeAnimation
        
        sequence={[
          `Full Stack Developer at Tata Consultancy Services (07/2024-Present)`,
          ()=>{
            setFirstLine(true);
          }
        ]}
        wrapper="span"
        cursor={false}
        
        style={{whiteSpace: 'pre-line', }}
      />



        </span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div class="editor-content">
        <code class="code">
          <p><span class="color-0"></span>
          {firstline && <TypeAnimation
        
        sequence={[
          `Experience: ${years} years ${months} months ${days} days`,
          ()=>{
            setSecondline(true);
          }
        ]}
        wrapper="span"
        cursor={false}
        
        style={{whiteSpace: 'pre-line', }}
      /> }
          
           <span></span></p>

          <p class="property">
            <span class="color-2">{secondline && <TypeAnimation
          sequence={[
        `client: `
      ]}
      wrapper="span"
      cursor={false}
      
      style={{whiteSpace: 'pre-line' }}
    />}</span>
            <span class="color-1">
            {secondline && 
            <TypeAnimation
          sequence={[
        `Currently working with the top insurance client (BFSI) in the nordic region;`,
        ()=>{
            setThirdLine(true)
        }
      ]}
      wrapper="span"
      cursor={false}
      
      style={{whiteSpace: 'pre-line' }}
    />}
                </span>
          </p>
          <p class="property">
          <span class="color-2">{thirdline && <TypeAnimation
          sequence={[
        `react: `
      ]}
      wrapper="span"
      cursor={false}
      
      style={{whiteSpace: 'pre-line' }}
    />}</span>
          <span class="color-1">
            {thirdline && 
            <TypeAnimation
          sequence={[
        `Using React JS for Frontend, ensuring a seamless and responsive user experience;`,
        ()=>{
            setFourthLine(true);
        }
      ]}
      wrapper="span"
      cursor={false}
      
      style={{whiteSpace: 'pre-line' }}
    />}
       </span>
       </p>
              <p class="property">
              <span class="color-2">{fourthline && <TypeAnimation
          sequence={[
        `Java & Spring Boot:`
      ]}
      wrapper="span"
      cursor={false}
      
      style={{whiteSpace: 'pre-line' }}
    />}</span>
            <span class="color-1">
            {fourthline && 
            <TypeAnimation
          sequence={[
        ` Built robust backend API using Java and Spring boot;`
      ]}
      wrapper="span"
      cursor={true}
      
      style={{whiteSpace: 'pre-line' }}
    />}
        </span>
        </p>
                
     

        </code>
      </div>
    </div>

    )
}