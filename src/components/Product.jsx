import React from 'react'
import { useEffect, useState } from 'react'
import Singleproduct from './Singleproduct'
import { Link } from 'react-router-dom'


const Products = () => {

    const [articles, setarticles] = useState([])

    useEffect(() => {

        const fetchingData = async () => {

            try {
                const calldata = await fetch("/Productsdata.json")
                const response = await calldata.json()

                // console.log(response)

                setarticles(response)
            } catch (error) {
                console.log(error)
            }
        }

        fetchingData()
    }, [])


    return (

        <div className='mt-28 mb-8 flex justify-center'>


            <div className='flex flex-wrap justify-center gap-6 max-w-[1200px]'>
                {articles.map((articel, index) => (
                    <Link to={`/${articel.id}`} key={articel.id}>
                        <div key={index} className='w-[210px] cursor-pointer' >


                            <Singleproduct
                                imgUrl={articel.imageUrl}
                                desc={articel.description}
                                titel={articel.title ? articel.title.slice(0, 45) + "..." : "No title"}
                                prize={articel.prize}
                                discount={articel.Discount}
                            />
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Products
