import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Listing() {
    const [user, setUser] = useState([])


    useEffect(
        () => {
            axios.get("http://localhost:5000/user")
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setUser(success.data.user)
                        } else {
                            console.log("data not found")
                        }
                    }
                )
        }
    )
    return (
        <>
            <div className="relative overflow-x-auto my-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DOB
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(
                                (data) => {
                                    return (
                                        
                                        <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {new Date(data.dob).toDateString()}
                                            </td>
                                            <td className={`px-6 py-4`}>
                                                <button className={` btn text-white p-2 ${data.status ? ' bg-green-500' : ' bg-orange-400'}`}>
                                                {data.status ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Listing