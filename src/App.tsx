import { createContext, useEffect, useState } from 'react'
import CombinePages from './components/CombinePages'
import PageContext from './PageContext'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState<string>("")

  const SetCurrentPageContext = createContext(setCurrentPage);

  useEffect(() => {
    console.log(currentPage)
  }, [currentPage] )

  return (
    <div className=" text-center text-neutral-300 ">
      <PageContext.Provider value={{currentPage, setCurrentPage}}>
        <CombinePages />
      </PageContext.Provider>
      
    </div>
  )
}

export default App
