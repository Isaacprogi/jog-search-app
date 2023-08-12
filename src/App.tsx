import { NavBar } from './components/NavBar'
import './styles/css/App.css'
import { useState } from 'react'
import Home from './pages/Home'

export interface jobProps {
  id: number,
  logo?:string,
  company: string,
  properties: string[],
  name: string,
  region: string,
  date: string,
  type: string,
  tags: string[]
}

const App = () => {
  const [filteredItems, setFilteredItems] = useState<jobProps[]>([])

  return (
    <div className={` App w-full bg-gray-100 overflow-y-auto h-[100vh]`}>
      <NavBar filteredItems={filteredItems}  setFilteredItems={setFilteredItems}/>
      <div className="max-w-[1200px] h-[calc(100%-4rem)] mx-auto">
       <Home setFilteredItems={setFilteredItems} filteredItems={filteredItems}/>
      </div>
    </div>
  )
}

export default App