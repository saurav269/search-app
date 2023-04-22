import React from 'react'
import { useGlobalContext } from '../Components/context'
import { Input } from '@chakra-ui/react'

const Allsearch = () => {
    const {keyword , searchData} = useGlobalContext()

    const handleSubmit=(e)=>{
     e.preventDefault()
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <div>
                <Input
                width='20%'
                background="white"
                padding='9px'
                borderRadius='6px'
                type='text' 
                placeholder='Search Here' 
                value={keyword}
                onChange={(e) => searchData(e.target.value)}
                 />
            </div>
        </form>
      
    </div>
  )
}

export default Allsearch
