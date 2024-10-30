import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import {LogoLoader} from './components/index.js'
import { AnimatePresence } from "framer-motion";

function App() {
  const [logoLoader, setLogoLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoLoader(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {logoLoader ? (
        <LogoLoader />
      ) : (

        <Home />

      )}
    </AnimatePresence>
  )
}

export default App
