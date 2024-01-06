import React, { useEffect, useState } from 'react'

const StagiaireApi = () => {
    const [data,setData]=useState()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .catch((err)=>err)
        console.log(data)
    },[])
    
  return (
    <div></div>
  )
}

export default StagiaireApi