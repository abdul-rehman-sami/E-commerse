import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-cyan-900 text-white font-semibold'>
            <ul className='flex gap-1 '>
                <li className='p-2 cursor-pointer hover:bg-cyan-800'>Home!</li>
                <li className='p-2 cursor-pointer hover:bg-cyan-800'>Products</li>
                <li className='p-2 cursor-pointer hover:bg-cyan-800'>Catogries</li>
                <li className='p-2 cursor-pointer hover:bg-cyan-800'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
