import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const DynamicElement = () => {
   const {id}=useParams()
  return (
    <div>
     {id}

    </div>
  )
}

export default DynamicElement
