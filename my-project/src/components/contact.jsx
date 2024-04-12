// import React from 'react'
import Header from "./header"

// function contact() {
//   return (
//     <div>contact</div>

const Contact = () => {
    return (
      <>
      <Header /> 
      <section id='Update' className='flex flex-col gap-8 p-5 items-center'>
        <div className='flex items-center gap-3'>
          {/* <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
          className=' w-12'></img>
          </a> */}
          <a href='/'><img src="./src/img/account.png" className="w-12"></img></a>
          <h1 className='text-3xl'><b>Contacts</b></h1>
        </div>
        <div className='mt-5 md:text-3xl sm:text-xl'>Updating contact information</div>
        <div>
          <form className=' flex flex-col gap-3'>
            <label>
              Full names:
              <input className='flex border border-slate-500 text-gray-500 p-2 md:w-80 sm:w-72' type='text' name='Full names'/>
            </label>
            <label>
              Email:
              <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='Email'/>
            </label>
            <label>
              Phone:
              <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='number' name='phone'/>
            </label>
            <label>
              Birth date:
              <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='date' name='date'/>
            </label>
            <label>
              Address:
              <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='text' name='address'/>
            </label>
          </form> 
          <a href='/'><button className='bg-blue-500 p-2 border rounded-2xl mt-4'>Update Contact</button></a>
          <a href='/'><button className='bg-blue-500 p-2 border rounded-2xl mt-4'>Cancel</button></a>
        </div>
      </section>
      </>
    )
  }
  


export default Contact