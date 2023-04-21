import React, { useState, useEffect } from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import {Search2Icon } from "@chakra-ui/icons";
import axios from 'axios'
import './search.css'

const Search = () => {

    const [searchAdd, setSearchAdd] = useState('')

    const [myAdds, setMyAdds] = useState([])

    const handleChange=(e)=>{
       setSearchAdd(e.target.value)
    }
     useEffect(() =>{
        if(searchAdd){
            axios.get(`http://localhost:5000/api/ads/search?keyword=${searchAdd}`)
            .then(res =>{
                console.log(res.data)
                setMyAdds(res.data)
            })
            .catch((err =>{
                  console.log(err)
            }))
        }else{
            setMyAdds([])
        }
     },[searchAdd])

  return (
    <div>
      {/* <Input placeholder='Basic usage' 
      size='lg' /> */}
            <Input
              focusBorderColor="lime"
              placeholder='Search Here'
              width='20%'
              background="white"
              padding='7px'
              borderRadius='6px'
              type='text'
              value={searchAdd}
              onChange={handleChange}
            />
            <div className='main'>
                {myAdds.map((ele) =>(
                    <div key={ele._id} className='grid-box'>
                    <h2 style={{color:"blue"}}>Company Name : {ele.name}</h2>
                    <div >
                    <img className='imgDiv' src={ele.imageUrl} alt=''/>
                    </div>
                    
                    <h4>Primary Text: {ele.primaryText}</h4>
                    <p>Headline: {ele.headline}</p>
                    <p>URL : {ele.url}</p>
                    <p>Description : {ele.description}</p>
                    <p>CTA : {ele.CTA}</p>
                    </div>
                ))}
            </div>

    </div>
  )
}

export default Search
