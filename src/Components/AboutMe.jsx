import Header from "./header";
import "../Styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

export default function About() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            sectionsRef.current.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const isActive = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                
                if (isActive) {
                    section.querySelector('h1').classList.add('active');
                    section.querySelector('p').classList.add('active');
                    section.querySelector('.background-image').classList.add('active');
                    if (section.querySelector('.video-container')) {
                        section.querySelector('.video-container').classList.add('active');
                    }
                } else {
                    section.querySelector('h1').classList.remove('active');
                    section.querySelector('p').classList.remove('active');
                    section.querySelector('.background-image').classList.remove('active');
                    if (section.querySelector('.video-container')) {
                        section.querySelector('.video-container').classList.remove('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div className="about-page">
            <Header />
            
            <section ref={addToRefs} id="origin">
                <img 
                    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Origin Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["Where I'm From", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "I was born and raised in [Your Hometown], a place known for [characteristic]. Growing up here shaped my perspective and values.",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
                <div className="scroll-indicator">↓ Scroll down ↓</div>
            </section>

            <section ref={addToRefs} id="who-am-i">
                <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Who Am I Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["Who I Am", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "I'm [Your Name], a [adjective] individual passionate about [your interests]. My personality is best described as [describe yourself].",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
            </section>

            <section ref={addToRefs} id="profession">
                <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Profession Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["My Profession", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "I'm a [Your Profession] specializing in [your specialty]. With [X] years of experience, I've worked with [notable clients/companies].",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
            </section>

            <section ref={addToRefs} id="childhood">
                <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Childhood Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["My Childhood", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "Growing up, I was always fascinated by [childhood interest]. Some of my fondest memories include [memory 1] and [memory 2].",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
            </section>

            <section ref={addToRefs} id="college">
                <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="College Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["College Years", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "I attended [Your University] where I studied [Your Major]. These years were transformative, teaching me [important lesson].",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
            </section>

            <section ref={addToRefs} id="skills">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Skills Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["My Skills", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "Through my journey, I've developed expertise in:",
                            500,
                            "\n• [Skill 1]\n• [Skill 2]\n• [Skill 3]\n• [Skill 4]",
                            1000
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                        style={{ whiteSpace: 'pre-line' }}
                    />
                </p>
            </section>

            <section ref={addToRefs} id="youtube">
                <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="YouTube Background" 
                    className="background-image" 
                />
                <h1>
                    <TypeAnimation
                        sequence={["My YouTube Videos", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={["Check out some of my latest content:", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={0}
                    />
                </p>
                <div className="video-container">
                    <div className="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}