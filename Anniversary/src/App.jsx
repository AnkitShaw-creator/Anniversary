import { useState } from 'react'
import './App.css'
import Password from './sections/password/password.jsx'
import Intro from './sections/intro/intro.jsx'
import Wrapped from './sections/wrapped/wrapped.jsx'
import Photos from './sections/photos/photos.jsx'
import Confession from './sections/confession/confession.jsx'
import Finale from './sections/finale/finale.jsx'
import Contract from './sections/contract/Contract.jsx'
import MusicManager from './components/MusicManager/MusicManager.jsx'
function App() {
  const [currentPage, setCurrentPage] = useState("password");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section id="center">
        <MusicManager currentPage={currentPage} />
        
        {currentPage === "password" && (
          <Password onSuccess={() => navigateTo("intro")} />
        )}
        {currentPage === "intro" && (
          <Intro onContinue={() => navigateTo("wrapped")} />
        )}
        {currentPage === "wrapped" && (
          <Wrapped onContinue={() => navigateTo("photos")} />
        )}
        {currentPage === "photos" && (
          <Photos onContinue={() => navigateTo("confession")} />
        )}
        {currentPage === "confession" && (
          <Confession onContinue={() => navigateTo("contract")} />
        )}
        {currentPage === "contract" && (
          <Contract onContinue={() => navigateTo("finale")} />
        )}
      </section>
    </>
  )
}

export default App
