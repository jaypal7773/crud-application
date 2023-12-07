import  React from 'react'
import { Outlet , Link } from 'react-router-dom'

function Main() {
    return (
        <div>
            <ul className=' flex justify-center gap-5 font-bold mt-3 text-[20px] cursor-pointer'>
                <Link to="/"> 
                    <li>Add</li>
                </Link>
                <Link to="/listing">
                    <li>Listing</li>
                </Link>
            </ul>
            <div className=' max-w-[1200px] mx-auto'>
            <Outlet />
            </div>
        </div>
    )
}

export default Main