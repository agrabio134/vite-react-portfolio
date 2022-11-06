
import image from '../extras/harvey.png'
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";


const HomePage = () => {
    return (
    <div className="main-container">
      <div className="home-container">
        <div className="home-item">


        <div className='introduction'>
            Hi I am
        
          <Typewriter
            options={{

              strings: ['Harvey Agrabio','FullStack Developer', 'React Developer' ,  'Graphics Artist'],
              autoStart: true,
              loop: true,
            }}
          
         
         />
         <button className='contact-btn'>
              <Link butt activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
          </button>
            </div>
        </div>
        <div  className="home-item">
          <img className="profile-img" src={image} alt="image" />
        </div>
        </div>
    </div>
      
    )
  }
  
  export default HomePage
  