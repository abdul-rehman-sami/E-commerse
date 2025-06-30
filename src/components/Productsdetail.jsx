import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoMdHeart } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaDolly } from "react-icons/fa";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { LuCircleFadingArrowUp } from "react-icons/lu";
import { FiShieldOff } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdChatbubbles } from "react-icons/io";
import InfoWarrenty from './InfoWarrenty';
import Infodelivery from './Infodelivery';


const Productsdetail = () => {

    const [detail, setdetail] = useState('')
    const [changecolor, setchangecolor] = useState(false)
    const [count, setcount] = useState(1)
    const [warrenty, setwarrenty] = useState(false)
    const [delivery, setdelivery] = useState(false)
    const [Size, setsize] = useState("")



    const handelColor = () => {
        setchangecolor(!changecolor)
    }

    const { id } = useParams()

    useEffect(() => {
        const fetchdata = async () => {

            const getdata = await fetch("/Productsdata.json")
            const dataresponse = await getdata.json();

            // console.log(dataresponse)

            const matched = dataresponse.find(item => item.id.toString() === id)
            setdetail(matched)

        }

        fetchdata()

    }, [id])

    const minusCount = () => {
        if (count !== 1) {
            setcount(count - 1)
        }

    }
    const addCount = () => {
        setcount(count + 1)
    }
    const warrentyClick = () => {
        setwarrenty(!warrenty)
    }
    const deliveryClick = () => {
        setdelivery(!delivery)
    }
    const sizeClick = (size) => {
        setsize(size)
    }
    return (
        <div>
            <div className='mt-25 mx-20 bg-white'>

                <div className='flex'>

                    <div className='p-2'>
                        <img src={detail.imageUrl} alt="" className='w-[310px] h-[310px]' />
                    </div>


                    <div className='w-[45%] text-[24px] ml-4 mt-2 p-2 not-first:leading-[1.1]'>
                        <span>{detail.description}</span>

                        <div className='flex float-right mt-15 mr-6 gap-1.5'>
                            <span onClick={handelColor} className={`cursor-pointer ${changecolor ? 'text-yellow-400' : 'text-gray-300'}`} ><IoMdHeart /> </span>
                            <span className='text-cyan-800'><IoShareSocialSharp /></span>
                        </div>

                        <div className='mt-20 text-[13px] text-gray-600 '>Brand: <span className='text-blue-700'>No Brand | More Mens For More Brands</span></div>

                        <div className='text-cyan-800 text-3xl mt-11 font-medium'>Rs. {detail.prize}</div>


                        <div className='flex gap-2'>
                            <div className='text-gray-500 text-[14px] line-through'>Rs.{detail.originalPrize}</div>
                            <div className='text-[14px] text-black '>{detail.Discount}</div>
                        </div>
                        <hr className='text-gray-200 mt-5' />


                        <div className='mt-6'>
                            <div className='flex'>
                                <span className='text-gray-500 text-sm font-medium' >{detail.Size}</span>
                                <span className='text-black text-sm ml-15'>{detail.sizeValue}</span>
                            </div>



                            {["Small", "Medium", "Large", "Extralarge"].some(size => detail[size]) &&
                                <div className='flex gap-2 mt-3 ml-21'>

                                    {["Small", "Medium", "Large", "Extralarge"].map((size) => (
                                        <div
                                            key={size}
                                            onClick={() => sizeClick(size)}
                                            className={`text-sm py-1 px-4 hover:border-cyan-600 cursor-pointer border
                                     ${Size === size ? "text-cyan-600 border-cyan-600" : " border-gray-300 border"}`}
                                        >
                                            {detail[size]}
                                        </div>
                                    ))}


                                </div>}

                        </div>



                        <div className='flex mt-6 gap-2'>
                            <span className='text-gray-500 text-[15px] mt-1.5'>Quantity</span>
                            <button onClick={minusCount} className='text-[16px] bg-gray-300 px-2.5 py-2 ml-5'  ><FiMinus /></button>
                            <span className='text-[16px] mx-2 mt-1.5'>{count}</span>
                            <button onClick={addCount} className='text-[16px] bg-gray-300 px-2.5 py-2'><FiPlus /></button>
                        </div>

                        <div className='flex gap-2 mt-7 '>
                            <button className='bg-blue-400 text-white text-[18px] px-20 py-3 rounded-[4px] hover:bg-blue-500 cursor-pointer'>
                                Buy Now</button>
                            <button className='bg-orange-500 text-white text-[18px] px-20 py-3 rounded-[4px] hover:bg-orange-600 cursor-pointer'>
                                Add to Cart</button>
                        </div>


                    </div>

                    <div className='bg-gray-200 w-[27%]'>

                        <div className='flex justify-between items-center  mt-2 '>
                            <div className='text-gray-500 text-[13px]  font-medium ml-2.5' >Delivery Options</div>
                            <div className='relative'>
                                <span onClick={deliveryClick}
                                    className='text-gray-500 text-[13px] mt-2 font-medium mr-2.5 cursor-pointer inline-block'>
                                    <FiAlertCircle />
                                </span>

                                {delivery && (
                                    <div className='absolute top-6 right-[-5px] z-30 transition-all duration-500 ease-in-out'>
                                        <Infodelivery />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex mt-2 ml-3'>
                            <span className='text-2xl mt-1  text-gray-500'><CiLocationOn /></span>
                            <div className='w-[60%] text-[15px] ml-2 not-first:leading-[1.2]'>Sindh, Karachi - Gulshan-e-Iqbal, Block 15</div>
                        </div>
                        <hr className='mt-4 text-gray-300' />

                        <div className='mt-5 ml-3 flex justify-between items-center'>
                            <div className='flex'>
                                <div className='text-2xl  text-gray-500'>
                                    <span><CiDeliveryTruck /></span>
                                </div>
                                <div className='leading-none ml-2'>
                                    <span className=' text-[15px] '>Standard Delivery </span><br />
                                    <span className='text-[13px] text-gray-500  '>Gureantee With in & Days</span>
                                </div>
                            </div>
                            <div className='font-medium mr-3'>
                                Rs. {detail.Delivery}
                            </div>
                        </div>


                        <div className='mt-5 ml-3 flex '>
                            <div className='text-2xl  text-gray-500'>
                                <FaDolly />
                            </div>
                            <div className='ml-2  text-[15px]'>
                                Cash on Delivery Available
                            </div>
                        </div>

                        <hr className='mt-4 text-gray-300' />



                        <div className='flex justify-between items-center w-full mt-3 '>
                            <div className='text-gray-500 text-[13px]  font-medium ml-2.5' >Return & Warranty </div>
                            <div className="relative">
                                <span
                                    onClick={warrentyClick}
                                    className="text-gray-500 text-[13px] font-medium mt-1.5 mr-2.5 inline-block cursor-pointer"
                                >
                                    <FiAlertCircle />
                                </span>

                                {/* Warranty Box - Conditionally render */}
                                {warrenty && (
                                    <div className="absolute top-6 right-[-5px] z-30 transition-all duration-500 ease-in-out">
                                        <InfoWarrenty />
                                    </div>
                                )}
                            </div>
                        </div>




                        <div className='mt-5 ml-3 flex'>
                            <div className='text-2xl  text-gray-500'>
                                <CgArrowsExchangeAlt />
                            </div>
                            <div className='ml-2 text-[15px]'>
                                Change of Mind
                            </div>
                        </div>

                        <div className='mt-5 ml-3 flex'>
                            <div className='text-2xl  text-gray-500'>
                                <LuCircleFadingArrowUp />
                            </div>
                            <div className='ml-2 text-[15px]'>
                                14 days easy return
                            </div>
                        </div>


                        <div className='mt-5 ml-3 flex'>
                            <div className='text-2xl font-light text-gray-500'>
                                <FiShieldOff />
                            </div>
                            <div className='ml-2 text-[15px]'>
                                Warranty not available
                            </div>
                        </div>

                        <hr className='mt-4 text-gray-300' />


                        <div className='mt-3 ml-3  flex'>
                            <div>
                                <img src="/images/Screenshot 2025-06-25 002458.png" alt="" className='w-[115px] h-[120px]' />
                            </div>

                            <div class="relative w-[170px] h-[120px] p-4 bg-white rounded-[5px] shadow-lg ml-2.5 not-first:leading-[1.2] ">

                                <div class="absolute left-[-2px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>

                                <div class="w-10 h-10 bg-orange-500 "></div>

                                <p class="text-gray-500 text-[13px] font-medium mt-1">
                                    Download app to enjoy exclusive discounts!
                                </p>
                            </div>
                        </div>
                        <div className='flex mb-3 ml-3 mt-2'>
                            <div className='mt-0.5'><CiMobile3 /></div>
                            <div className='text-sm ml-0.5'>Scan with mobile</div>
                        </div>

                        <hr className='h-[13px] bg-white border-none' />


                        <div className='flex justify-between items-center'>
                            <div className='ml-3 mt-3'>
                                <p className='text-[14px] text-gray-500 font-medium'>Sold by</p>
                                <p className='cursor-pointer'>{detail.Store}</p>
                            </div>
                            <div className='flex justify-center items-center mt-0.5 mr-3'>
                                <div className='text-blue-600 text-sm mr-1 mt-0.5'> <IoMdChatbubbles /> </div>
                                <div className='text-blue-600 font-bold text-[14px] cursor-pointer'>Chat Now</div>
                            </div>
                        </div>

                        <hr className='mt-4 text-gray-300' />

                        <div className='flex'>

                            <div className='mt-2 ml-3 w-[30%] flex flex-col justify-between '>
                                <div className='text-[12px] text-gray-500 font-medium'>Positive Seller Ratings</div>
                                <div className='text-3xl mt-4 mb-2'>80%</div>
                            </div>

                            <div className='w-[1px] bg-gray-300 mx-0'></div>

                            <div className='mt-2 w-[30%] flex flex-col justify-between ml-2'>
                                <div className='text-[12px] text-gray-500 font-medium'>Ship on Time</div>
                                <div className='text-3xl mt-4 mb-2'>100%</div>
                            </div>

                            <div className='w-[1px] bg-gray-300 mx-2'></div>

                            <div className='mt-2 w-[30%] flex flex-col justify-between'>
                                <div className='text-[12px] text-gray-500 font-medium'>Chat Response Rate</div>
                                <div className='text-3xl mt-4 mb-2'>0%</div>
                            </div>
                        </div>

                        <hr className=' text-gray-300' />

                        <div className='flex justify-center items-center my-3'>
                            <div className='text-blue-600 font-medium text-sm hover:underline cursor-pointer'>Go To Store</div>
                        </div>

                        <div className='h-[18px] bg-white border-none' />
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Productsdetail
