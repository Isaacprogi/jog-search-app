import BackgroundMobile from '../assets/bg-header-mobile.svg'
import BackgroundDextop from '../assets/bg-header-desktop.svg'
import { useFilterContext } from '../hooks/useFilterContext'
import { jobs } from '../data/jobs'

export interface jobProps {
  id: number,
  logo?: string,
  company: string,
  properties: string[],
  name: string,
  region: string,
  date: string,
  type: string,
  tags: string[]
}




export const NavBar = ({ filteredItems, setFilteredItems }: { filteredItems: jobProps[], setFilteredItems: React.Dispatch<React.SetStateAction<jobProps[]>> }) => {
  const { items, setItems } = useFilterContext()

  const clearItems = () => {
    setItems([]);
    setFilteredItems(jobs)
  };

  return (
    <div className='w-full bg-neutral-500 sticky top-0 z-[600] h-[5rem]'>
      <div className="w-full h-full">

        <div className="w-full sm:hidden h-full">
          <img className='w-full h-full'  src={BackgroundMobile} alt="" />
        </div>

        <div className="h-full hidden sm:block w-full">
          <img className='w-full h-full' src={BackgroundDextop} alt="" />
        </div>
      </div>

      {/* search filters */}
      <div className="w-full h-[3rem] shadow-lg absolute max-w-[60rem] top-[110%] flex items-center justify-between px-2  -translate-y-[60%] left-[50%] -translate-x-[50%] bg-white sm:rounded-lg overflow-hidden">
        <span className="flex items-center justify-start gap-1 rounded-md">
          {
            items?.map((item: string, index: number) => {
              return <div key={index} className='flex justify-start rounded-sm overflow-hidden'>
                <span className='p-1 text-sm bg-gray-200'>
                  {item}
                </span>
              </div>
            })
          }
        </span>
        <span onClick={clearItems} className="text-sm  cursor-pointer hover:underline text-gray-400 mr-[.5rem]  hover:text-black">Clear</span>
      </div>

    </div>
  )
}
