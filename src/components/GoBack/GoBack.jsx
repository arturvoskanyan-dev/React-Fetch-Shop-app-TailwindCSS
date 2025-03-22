import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
    let navigate = useNavigate()
  return (
    <>
      <button className="bg-[#1ABCFE] text-white w-24 p-3 rounded-xl cursor-pointer transition-all hover:bg-white hover:text-[#1ABCFE] hover:border-1" 
        onClick={() => navigate(-1)}>Go Back
      </button>
    </>
  )
}

export default GoBack
