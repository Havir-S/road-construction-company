import React, { useEffect, useState, createContext } from 'react'
import { LoadingPage } from './containers/index.js'
import { Navbar, Hero, AboutUs, AboutUsNew, Services, Questions, Contact, Referendum, Gallery, History, WorkProcess, Footer } from './containers/index.js'
import {} from './components'

const ChosenServiceContext = createContext();

// import { ThemeProvider } from '@mui/material/styles';
// import themeOptions from './theme.js'

const App = () => {
  const [open, setOpen] = useState(true);    
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [chosenService, setChosenService] = useState("");

  const [loading, toggleLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      toggleLoading(false);
      onCloseModal();
      // document.querySelector('body').style.overflow = 'visible';
    }

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad);
    }
  })

  return (

    <>
    {loading ? <LoadingPage open={open}/> : ''}
      
      <div className='App'>
      <ChosenServiceContext.Provider value={{chosenService, setChosenService}}>
          <Navbar />
          <Hero />
          <AboutUsNew />
          <Services />
          <Contact />
          <Questions />
          <WorkProcess />
          <History />
          <Footer />
        </ChosenServiceContext.Provider>
      </div>
    </>

  )
}

export default App;

export {ChosenServiceContext};