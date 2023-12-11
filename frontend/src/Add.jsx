import React, { useState } from 'react'
import axios from 'axios'

function Add() {
  // const [loading,setLoading] = useState([])
  const [formData,setFromData] = useState({
    name:"",
    email:"",
    date:"",
    // gender:"",
  })



  const changeHandler = (event) => {
    setFromData({
      ...formData,
      [event.target.name] : event.target.value
    })

  }

  const validateemail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const submitHandler = (event) => {
    // setLoading(true)
    event.preventDefault();

    const {name , email , date} = formData;

    const errors = {}

    if(!name) {
      errors.name = "Name is required"
    }
    if(!email){
      errors.email = "Email address is required"
    }else if(!validateemail(email)){
      errors.email = "Invalid email address"
    }
    if(!date){
      errors.date = "Date is required"
    }

    
    axios.post(
      "http://localhost:5000/user/create",
      formData,
    ).then(
      (success) => {
        if(success.data.status == 1){
          event.target.reset()
        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
    // .finally(
    //  () => {
    //   setLoading(false)
    //  } 
    // )
  }
  return (
  <div>
     {/* <div className=' fixed w-full h-[100vh] top-0  left-0 justify-center items-center text-white text-6xl' style={
            {
                backgroundColor: "rgba(0,0,0,0.5)",
                display: loading ? 'flex' : 'none'
            }
        }>
          Loading...
        </div> */}
<form className="max-w-md mx-auto" onSubmit={submitHandler}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="name" value={formData.name} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required onChange={changeHandler}/>
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" value={formData.email} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={changeHandler}/>
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="date" name="date" value={formData.date} id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={changeHandler}/>
      <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
  </div> 
{/* <div className=' flex flex-wrap gap-3'>
  <label htmlFor="" className=' w-[100%]'>Gender</label>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="" type="radio" value="M" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100  dark:bg-gray-700 "/>
    <label htmlFor="" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input  id="" type="radio" value="F" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700"/>
    <label htmlFor="" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input  id="" type="radio" value="O" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700"/>
    <label htmlFor="" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
</div>
</div> */}

  <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default Add