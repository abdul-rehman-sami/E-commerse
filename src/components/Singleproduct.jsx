import React from 'react'


const Singleproduct = (props) => {
  return (
    <div className='bg-white hover:shadow-xl transition-shadow duration-200'>
      <div><img src={props.imgUrl} alt="sss" className='w-[210px] h-[210px]' /></div>
      <div className='font-medium text-center font-sans mt-2'>{props.titel}</div>
      <span className='font-semibold text-cyan-900 text-xl mx-3 my-3 inline-block'>Rs.{props.prize}</span>
      <span className='text-[13px] inline-block'>{props.discount}</span>
    </div>
  )
}

export default Singleproduct
