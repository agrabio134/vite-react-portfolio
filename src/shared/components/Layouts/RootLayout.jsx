import Header from '../partials/Header'
import Footer from '../partials/Footer'
import AllContentPage from './Content'



const RootLayout = ({children}) => {
    return (
        <div>
          <Header />
        
        <AllContentPage />

          <Footer />
        </div>
    )
  }
  
  export default RootLayout
  