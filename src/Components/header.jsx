import { useNavigate } from 'react-router-dom'
import '../Styles/header.css'

export default function Header(){
    const navigate=useNavigate();
    function handleHome(){
        navigate('/')
    }
    function handleAbout(){
        navigate('/about')
    }
    function handlePro(){
        navigate('/professional')
    }
    function handleper(){
        navigate('/personal')
    }
    function handleContact(){
        navigate('/contact')
    }
    function handleresume(){
        navigate('/resume');
    }
    
    return(
        <>
        <div className="Navbar">
        <button onClick={handleHome}>Home</button>
        <button onClick={handleAbout}>About Me</button>
        <button onClick={handlePro}>Tech Stack</button>
        <button onClick={handleper}>Blog</button>
        <button onClick={handleresume}>Resume</button>
        <button onClick={handleContact}>Contact Me!</button>
        </div>
        </>
    )
}