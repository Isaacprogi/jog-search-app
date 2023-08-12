import { jobs } from '../data/jobs'
import JobCard from '../components/JobCard'
import { useEffect} from 'react'

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

const Home = ({filteredItems,setFilteredItems}:{filteredItems:jobProps[], setFilteredItems:React.Dispatch<React.SetStateAction<jobProps[]>>}) => {

     useEffect(()=>{
        setFilteredItems(jobs)
        // eslint-disable-next-line
     },[])


    return (
        <div className='w-full min-h-full flex flex-col items-center justify-start bg-gray-100 p-2'>
            {
                filteredItems.map(job=>{
                    return <JobCard setFilteredItems={setFilteredItems} filteredItems={filteredItems} key={job.id} job={job}/>
                })
            }
        </div>
    )
}

export default Home