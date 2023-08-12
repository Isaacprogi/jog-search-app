import { useFilterContext } from "../hooks/useFilterContext"
import { jobProps } from "../pages/Home"


interface jobPropz {
   job: {
    id: number,
    logo?:string,
    company: string,
    properties: string[],
    name: string,
    region: string,
    date: string,
    type: string,
    tags: string[]
   },
   filteredItems:jobProps[],
    setFilteredItems:React.Dispatch<React.SetStateAction<jobProps[]>>
}


const JobCard = ({ job,filteredItems,setFilteredItems }:jobPropz) => {
    
   const {items,setItems} = useFilterContext()

   const addItem = (tag:string,index:number) => {
    if(!items.includes(tag)){
        setItems([...items,tag])
    }
   }
   const handleFilter = (tag:string) => {
    setFilteredItems(filteredItems?.filter(item=>item.tags.includes(tag)))
   }
    return (
        <div className="w-full h-full flex justify-between mt-[4rem] p-[.6rem] flex-col  md:flex-row border-l-4 rounded-md shadow-lg bg-white max-w-[60rem]">
            <div className="left flex relative w-full sm:mr-[2rem] ">
                <div className='w-[3rem] min-w-[3rem] h-[3rem] absolute   top-[-2rem] sm:hidden  rounded-full overflow-hidden'>
                    <img src={job.logo} className='w-full h-full' alt="" />
                </div>
                <div className='w-[4rem] min-w-[4rem] h-[4rem] mr-[1rem] hidden md:block    rounded-full overflow-hidden'>
                    <img src={job.logo} className='w-full h-full' alt="" />
                </div>
                <div className='mt-[1rem] md:mt-0'>
                    <h1 className='flex items-start justify-start mb-[1rem] '>
                        <span className='text-gray-500 font-[700] mr-[.3rem] ]'>
                        {job.company}</span>
                        <span className='bg-gray-300 text-white px-1 mr-[.3rem]  rounded-lg flex items-center justify-center'>{job.properties[0]}</span>
                        <span className='bg-black px-1 rounded-lg overflow-hidden min-w-[5rem] text-white'>{job.properties[1]}</span>
                    </h1>
                    <h2 className='font-[600] text-gray-600 mb-[1rem]'>{job.name}</h2>

                    <h3 className='flex items-center justify-start text-sm font-[400] text-gray-400 mb-[1rem] '>
                        <span className='mr-[.3rem]'>{job.date}</span>
                        <span className='mr-[.3rem]'>.</span>
                        <span className='mr-[.3rem]'>{job.type}</span>
                        <span className='mr-[.3rem]'>.</span>
                        <span className='mr-[.3rem]'>{job.region}</span>
                    </h3>

                </div>
            </div>
            <div className="right flex w-full h-[max-content]  overflow-hidden  justify-start flex-wrap gap-[.4rem]">
                {
                    job.tags.map((tag,index)=>{
                        return <span className="cursor-pointer p-1 hover:bg-black hover:text-white rounded-md text-gray-500 font-[700] text-sm bg-gray-200" key={index} onClick={()=>{
                            addItem(tag,index)
                            handleFilter(tag)
                        }
                            
                        }>{tag}</span>
                    })
                }
                
            </div>
        </div>
    )
}

export default JobCard