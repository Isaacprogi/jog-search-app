import {useContext} from 'react'
import { FilterContext } from '../Context/FilterContext'

export const useFilterContext = () => {
    const context = useContext(FilterContext)
    if(!context){
       return console.log('you cannot use FilterContext outside filterContextProvider')
    }
  return context
}
