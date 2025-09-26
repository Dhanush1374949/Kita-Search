import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routers from './components/Routes';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='bg-white dark:bg-black dark:text-white min-h-screen w-full'>
        <Navbar dark={dark} setDark={setDark} />
        <Routers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
