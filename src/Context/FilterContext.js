import { createContext } from 'react'
import { useState } from 'react'

export const FilterContext = createContext()




export const  FilterContextProvider = ({children}) => {
    const [items,setItems] = useState([])
  return <FilterContext.Provider value={{
      items,setItems
  }}>
      {children}
  </FilterContext.Provider>
}
