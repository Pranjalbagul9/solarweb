
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';
import Value from './components/Value';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import What from './components/What';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <div >
        <div className='white-gradient' />
        <Header />
     <Routes>
     
     
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/contactus" element={<ContactUs />} />
     <Route path="/" element={<Main />} />
     <Route path="/" element={<Services />} />
     <Route path="/" element={<Value />} />
     <Route path="/" element={<What />} />
     </Routes>
     {/* <Main />
     <Services/>
     <Value /> */}
     <Footer />
     
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
