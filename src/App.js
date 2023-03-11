import { Header, About, Contact, Skills, Portfolio, Services, Footer} from './container';
import { Navbar } from './components';

// import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';


function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
