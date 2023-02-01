import React from 'react';
import './css/index.css';
import './css/footer.css';
import './css/header.css';
import './css/about.css';
import './css/home.css';
// import './css/projects.css'
// import './css/blog.css'
// import './css/contact.css'
// import '../'
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
   </React.StrictMode>
    
)
