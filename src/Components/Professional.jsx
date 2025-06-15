import Card from "./Card";
import Header from "./header";
import '../Styles/Professional.css';
import Experience from "./Experience";
import { TypeAnimation } from "react-type-animation";
import Footer from "./Footer";

export default function Professional() {
    return (
        <>
            <Header />
            <br />
            <br />
            <div className="Exp-container">
                <h1 style={{ fontFamily: "Sixtyfour Convergence", textAlign: "center" }}>Experience</h1>
            </div>
            <Experience />
            <br />

            <h1 style={{ fontFamily: "Sixtyfour Convergence", textAlign: "center" }}>Tech Stack</h1>
            <br />
            <div className="Techstack">
                <Card card_title={"React"} card_description={"I have 1 year Hands-on Experience in React. \n \n Developed few dynamic and responsive user interfaces like \n Ecommerce, Currency Exchange portal, Personal Portfolio"} />
                <Card card_title={"Java"} card_description={"Java is a Robust Programming language. I used Java to develop scalable applications, from enterprise-level systems to backend services"} />
                <Card card_title={"Spring Boot"} card_description={"One year Experience in building microservices and REST APIs. Its simplicity and powerful features enable rapid development and deployment without much worry about the configuration"} />
                <Card card_title={"JavaScript"} card_description={"Building interactive web applications using JavaScript to bring websites to Life with Dynamic content and Seamless user Experience from last one year"} />

                <div className="Secondline-Techstack">
                    <Card card_title={"Testing Tools"} card_description={"Leveraging the power of Junit and Mockito to perform unit tests on Java Code, Karate Framework for API testing, and Jest for React and JavaScript applications."} />
                    <Card card_title={"Development Tools"} card_description={"Used Git for version control, Maven for managing project dependencies, and Docker to containerize applications, ensuring portability and ease of deployment."} />
                    <Card card_title={"Machine Learning & Deep Learning"} card_description={"I am interested in Machine Learning, focusing on classification, regression, and neural networks. Developed a Siamese Neural Network for one-shot facial recognition."} />
                </div>
            </div>

            <br />
            <div>
            <br/>
                <h1 style={{ fontFamily: "Sixtyfour Convergence", textAlign: "center" }}>Projects</h1>
                <br />
                <div className="Projects">
                    <h3>Personal Portfolio Website</h3>
                    <p>A responsive personal portfolio built with React.js, using Material-UI, Bootstrap UI, and UI Verse for a sleek design.</p>
                    <button onClick={() => window.open("https://github.com/varanasipranav/Portfolio-Website", "_blank")}>View on GitHub</button>
                    <h3>Comparision of Association Rule Mining Algorithm</h3>
                    <p>This project deals with the comprision of two famous Association rule mining alogorithms: Apriori and FP Growth</p>
                    <button onClick={() => window.open("https://github.com/varanasipranav/Comparision_of_Association_rule_mining_algorithms", "_blank")}>View on GitHub</button>
                    <h3>Social Media Platform</h3>
                    <p>A dynamic social media platform built with React.js and Spring Boot. Users can join groups, connect with people, and share posts within respective groups. Developed with Spring Boot and JPA for efficient data handling, providing endpoints for user authentication, group management, and post handling.</p>
                    <button>Undergoing project</button>

                    <h3>Face Recognition Using Siamese Neural Network</h3>
                    <p>Implemented a one-shot face recognition system using a Siamese Neural Network. Utilized OpenCV to create a custom dataset for accurate and efficient facial recognition. Platform: Jupyter Notebook. Libraries: TensorFlow, OpenCV, Numpy.</p>
                    <button onClick={() => window.open("https://github.com/varanasipranav/Facial_Comparision_using_siamese_neural_network", "_blank")}>View on GitHub</button>

                    <h3>Mask Recognition Using CNN</h3>
                    <p>A binary classification model using a Convolutional Neural Network (CNN) to classify whether a person is wearing a mask. Platform: Jupyter Notebook. Libraries: TensorFlow, Keras, Numpy, Matplotlib.</p>
                    <button onClick={() => window.open("https://github.com/varanasipranav/Facemask_Recognition_Using_Convolutional_Nueral_Network", "_blank")}>View on GitHub</button>

                    <h3>Volume Control with Gesture Detection</h3>
                    <p>Implemented volume control using hand gesture detection with a camera. Platform: Python. Libraries: OpenCV, pycaw, Mediapipe, Numpy.</p>
                    <button onClick={() => window.open("https://github.com/varanasipranav/Volume-Control-with-Gesture-Detection", "_blank")}>View on GitHub</button>
                </div>
                

                <br />
                <Footer />
            </div>
        </>
    );
}
