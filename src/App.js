import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import BarStacked from './components/StackbarChart';

function App() {
  return ( 
    <div className='flex'>

      <Navbar></Navbar>
      <FirstSection></FirstSection>      
    </div>
      
    
  );
}

export default App;
