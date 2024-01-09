import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import BarStacked from './components/StackbarChart';
import MobileViewChecker from './components/MobileViewChecker';

function App() {
  return ( 
    <>
    <MobileViewChecker></MobileViewChecker>
    <div className='flex display-container'>
      <Navbar></Navbar>
      <FirstSection></FirstSection>      
    </div>
    </>
    
      
    
  );
}

export default App;
