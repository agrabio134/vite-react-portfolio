import AboutPage from "../../../components/pages/About"
import BlogPage from "../../../components/pages/Blog"
import ContactPage from "../../../components/pages/Contact"
import HomePage from "../../../components/pages/Home"
import ProjectPage from "../../../components/pages/Project"

const AllContentPage = () => {
    return (
    <div>
      <section id="home"><HomePage /></section>
      <section id="about"><AboutPage /></section>
      <section id="projects"><ProjectPage /></section>
      <section id="blog"><BlogPage /></section>
      <section id="contact"><ContactPage /></section>
    </div>
      
    )
  }
  
  export default AllContentPage
  