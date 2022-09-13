import { createContext, useEffect, useState } from 'react'
import CombinePages from './components/CombinePages'
import PageContext from './PageContext'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [currentPage, setCurrentPage] = useState<string>("")

  const SetCurrentPageContext = createContext(setCurrentPage);

  useEffect(() => {
    console.log(currentPage)
  }, [currentPage] )

  return (
    <div className=" text-center text-neutral-300 ">
      <Router>
        <PageContext.Provider value={{currentPage, setCurrentPage}}>
          <Route path="/" element={<CombinePages />}></Route>
        </PageContext.Provider>
      </Router>
      
    </div>
  )
}

export default App
