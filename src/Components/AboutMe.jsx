// Suggested code may be subject to a license. Learn more: ~LicenseLog:934674629.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1367324553.
import Header from "./header";
import "../Styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

import profilePic from "../Assets/Profile.jpeg"; // Make sure you have a profile picture in this location

export default function About() {

  useEffect(() => {
    // Optional: Add any scroll-based animations here if needed,
    // but the main smooth scroll effect is often handled by CSS on the body or a parent container.
    // For individual element fade-in on scroll, you would typically use an Intersection Observer API
    // or a library, which is not included in this basic example.
  }, []);

  return (
    <>
    <Header />
    <div className="about-page">
      
      <h1 style={{ fontFamily: "Sixtyfour Convergence"}}>About Me</h1>
<br />
      <div className="about-section">
        <div className="profile-section">
          <div className="description">
            <h2>Intro & Early Life</h2>
            <p>
              I was born in Visakhapatnam, India on October 10, 2002. Known as the "City of Destiny," Visakhapatnam boasts some of the best beaches on India's east coast. While I wasn't initially a standout student, I gradually developed a keen interest in academics. During my schooling, I actively participated in sports like cricket, volleyball, and badminton. I even competed in the inter-school shotput competition. I also cultivated a strong passion for singing and lyric writing during this time.
            </p>

            <h2>Education</h2>
            <ul>
              <li>**Schooling (ICSE):** St. Ann's High School, achieved 85% in 2018.</li>
              <li>**Intermediate (AP State Board):** Achieved a GPA of 10 in 2020.</li>
              <li>**Bachelor of Technology:** Computer Science and Engineering, achieved a CGPA of 8.1 in 2024.</li>
            </ul>

            <h2>Career</h2>
            <p>
              Upon graduating, I began my career at Tata Consultancy Services as a Java Full Stack Developer. In my current role, I am working with modern technologies like Spring Boot for backend development and React for building dynamic user interfaces. I have the opportunity to contribute to exciting projects where I leverage these technologies to build scalable and efficient web applications. My focus is on developing robust backend services, creating responsive frontends, and ensuring smooth integration throughout the application stack. I am passionate about building high-quality software and am always eager to learn and implement new technologies to solve real-world problems with clean and maintainable code.
            </p>

            <h2>Intrests</h2>
            <ul className="intrest-list">
 <li>Enjoy singing and have a personal YouTube channel where I upload cover songs.</li>
 <li>Strong interest in playing cricket. I am a right-arm fast bowler and a right-handed batsman.</li>
 <li>Aspire to end my career as a teacher, sharing my knowledge and passion with others.</li>
 <li>Like watching movies and appreciate the immersive theatrical experience.</li>
 <li>Enjoy problem-solving and regularly practice on platforms like LeetCode.</li>
 <li>Like to travel and capture photographs. While I don't currently own a camera, I enjoy taking pictures with my Samsung phone and plan to purchase one soon.</li>
 <li>Fascinated by technology and love exploring and using the latest advancements.</li>
 <li>Love listening to music, and The Weeknd is my favorite artist.</li>
 </ul>
            <h2>Handles</h2>
            <ul className="handle-list">
            <li>
                <a href="https://github.com/gopi-reddy-22" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gopi-reddy-22" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gopi-reddy-22" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@gopi-reddy-22" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/user/gopi-reddy-22" target="_blank" rel="noopener noreferrer">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M12 2C6.47 2 2 6.47 2 12C2 16.44 4.98 20.15 9 21.42V19.22C6.87 18.5 5.28 16.61 5.28 14.2C5.28 11.69 7.31 9.66 9.82 9.66C11.56 9.66 13.1 10.57 13.84 11.92C14.03 11.8 14.24 11.7 14.45 11.6C14.3 11.33 14.2 11.04 14.2 10.71C14.2 8.68 15.86 7.02 17.89 7.02C20.06 7.02 21.72 8.73 21.72 10.71V14.2C21.72 16.61 20.13 18.5 18 19.22V21.42C22.02 20.15 25 16.44 25 12C22.97 6.47 17.53 2 12 2Z" fill="currentColor"/>
 <circle cx="8.5" cy="15" r="1.5" fill="currentColor"/>
 <circle cx="15.5" cy="15" r="1.5" fill="currentColor"/>
 <path d="M9.17 17.65C9.35 17.75 9.56 17.84 9.77 17.9C9.98 17.96 10.2 18 10.42 18H13.58C13.8 18 14.02 17.96 14.23 17.9C14.44 17.84 14.65 17.75 14.83 17.65C14.67 17.46 14.48 17.29 14.27 17.15C13.82 16.85 13.32 16.59 12.79 16.38C12.27 16.17 11.73 16.06 11.18 16.06C10.63 16.06 10.09 16.17 9.57 16.38C9.04 16.59 8.54 16.85 8.09 17.15C7.88 17.29 7.69 17.46 7.53 17.65L9.17 17.65Z" fill="currentColor"/>
 </svg>
                  Leetcode
                </a>
              </li>
            </ul>

            <h2>Youtube</h2>
            <div className="youtube-section">
              <h3>Hanuman Chalisa (Breathless) Cover Song</h3>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TeRqxB2jF6Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h3> Naa cheli Rojave  Roja </h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/b-0QCm1HPNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h3>Shape of You Cover Song</h3> 
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cOq_QenuIgc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            <h3> Lonely Akon cover song</h3>
              <iframe
               width="560"
                height="315"
                src="https://www.youtube.com/embed/yGle4miDIVw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
                <h3> Inthandham Cover Song</h3>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/z7VyG7O9M9M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}