import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProducts = () => {
    const {id} = useParams()

   useEffect(() => {
    const data = fetch(`fakestore.com/product/${id}`)
   }, [])
   
  return (
    <div>
        <p>Product:{data.productName}</p>
        <img src={data.img} alt="" />
    </div>
  )
}

export default SingleProducts