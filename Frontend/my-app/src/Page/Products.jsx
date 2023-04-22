   
   import axios from 'axios'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../Components/context'
import './search.css'
   
   const Products = () => {

   const {data, isLoading} = useGlobalContext()

   if( isLoading ){
    return (
        <div>
            <h1>Loading.....</h1>
        </div>
    )
   }

     return (
       <div>
        <div>
         {data.length > 0 ? (
            <div  className='main'>
                {data.map((ele) => (
                <div key={ele._id} className='grid-box'>
                 <h2 style={{color:"blue"}}>Company Name : {ele.name}</h2>
                 <img className='imgDiv' src={ele.imageUrl} alt=''/>
                 <h4>Headline : {ele.headline}</h4>
                 <p>Primary Text : {ele.primaryText}</p>
                 <p>Description : {ele.description}</p>
                 <p>CTA : {ele.CTA}</p>
                 <a href={ele.url} target='_blank'>
                     About More
                 </a>
                </div>
              ))}

            </div>
         ) :(
            <h2>No data Found...</h2>
         )}
         </div>
       </div>
     )
   }
   
   export default Products
   