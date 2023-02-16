import React, { useEffect, useState } from 'react'
import { LoadingPage } from './containers/index.js'
import { Navbar, Hero, AboutUsNew, Services, Questions, Contact, History, WorkProcess, Footer } from './containers/index.js'


const App = () => {
  const [open, setOpen] = useState(true);    
  const onCloseModal = () => setOpen(false);


  const [loading, toggleLoading] = useState(true);

  const onPageLoad = () => {
    toggleLoading(false);
    onCloseModal();
    document.querySelector('body').style.overflow = 'visible';
  }

  useEffect(() => {
    

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [])

  return (

    <>
    {loading ? <LoadingPage open={open}/> : ''}
      
      <div className='App'>
          <Navbar />
          <Hero />
          <AboutUsNew />
          <Services />
          <Contact />
          <Questions />
          <WorkProcess />
          <History />
          <Footer />
      </div>
    </>

  )
}

export default App;
