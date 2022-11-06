import Header from '../partials/Header'
import Footer from '../partials/Footer'
import AllContentPage from './Content'
// import { Link, Outlet } from 'react-router-dom'


const RootLayout = ({children}) => {
    return (
        <div>
          <Header />
        
        <AllContentPage />
          
          {/* <Outlet context={{ test: 'test'}}/> */}
          <Footer />
        </div>
    )
  }
  
  export default RootLayout
  