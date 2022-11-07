import { Link } from "react-scroll";

const FooterPage = () => {
    return (
      <div className="main-footer">
        <div className="footer-container">
            <div className="footer-item">
                <a href="https://www.linkedin.com/in/john-harvey-agrabio-344546214/" className="bi bi-linkedin">
                </a>
                <a href="https://github.com/agrabio134" className="bi bi-github ">
                </a>
                <a href="https://www.facebook.com/harvey2.agrabio" className="bi bi-facebook ">
                </a>
                <a href="#" className="bi bi-instagram ">
                </a>
            </div>
            <div className="footer-nav">
              <div className="footer-nav-item">
              <Link activeClass="active" smooth to="home">
                HOME
              </Link>
              </div>
              <div className="footer-div">|</div>
              <div className="footer-nav-item">
              <Link activeClass="active" smooth to="about">
                ABOUT
              </Link>
              </div>
              <div className="footer-div">|</div>
              <div className="footer-nav-item">
              <Link activeClass="active" smooth to="projects">
                PROJECTS
              </Link>
              </div>
              <div className="footer-div">|</div>
              <div className="footer-nav-item">
              <Link activeClass="active" smooth to="blog">
                BLOG
              </Link>
              </div>
              <div className="footer-div">|</div>
              <div className="footer-nav-item">
              <Link activeClass="active" smooth to="contact">
                CONTACT
              </Link>
              </div>
            </div>
        </div>

    </div>
      
    )
  }
  
  export default FooterPage
  