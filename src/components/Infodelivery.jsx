import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaDolly } from "react-icons/fa";

const Infodelivery = () => {
    return (
        <div className='absolute bg-white w-[550px] right-1 top-2 z-20 rounded-xs shadow-2xl p-4 '>
            <h2 className=' text-[18px] font-medium mt-2 ml-1'>Delivery Option</h2>


            <div className='mt-5 ml-3 flex '>
                <div className='text-2xl  text-gray-500'>
                   <CiDeliveryTruck />
                </div>
                <div className='ml-2  text-[15px]'>
                  <span className='font-medium'>Standard Delivery :</span> Enjoy delivery of your order directly to the doorstep!
                </div>
            </div>

            <div className='mt-5 ml-3 flex '>
                <div className='text-2xl  text-gray-500'>
                    <FaDolly />
                </div>
                <div className='ml-2 font-medium text-[15px]'>
                    Cash on Delivery Available
                </div>
            </div>
        </div>
    )
}

export default Infodelivery
