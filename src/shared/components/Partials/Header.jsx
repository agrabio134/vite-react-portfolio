import { Link } from "react-scroll";

const HeaderPage = () => {
    return (
      <div>
        <div className="nav">
        <nav className="nav_container">
          <ul>
          <li>
              <Link activeClass="active" smooth to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth to="blog">
                BLOG
              </Link>
            </li>
              <li>
              <Link activeClass="active" smooth to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        </div>
   
    </div>
      
    )
  }
  
export default HeaderPage
  