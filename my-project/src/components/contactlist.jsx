// import React from 'react'
import Header from "./header"
import Footer from "./footer"
function Contactlist() {
  return (
    <>
    
    <Header/>
    <div className="flex flex-col items-center text-xl font-bold text-blue-950">LIST OF CONTACTS</div>
    <section id='Home' className='flex flex-col gap-8 p-5 items-center'>
      <div className=' hover:border-l-2 hover:border-blue-400 p-2 flex items-center gap-2'>
        <div>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
        </div>
        <div>
            <a href='/ViewContact'>
                <p className='text-xl'>Uwera Annick</p>
                <p>uwera@gmail.com</p>
                <p>0788 888 888</p>
               
            </a>
        </div>
      </div>
      <div className='hover:border-l-2 hover:border-blue-300 p-2 flex items-center gap-2'>
        <div>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
        </div>
        <div>
            <a href='/ViewContact'>
                <p className='text-xl'>Samantha Umwali</p>
                <p>umwali@gmail.com</p>
                <p>0788 888 888</p>
               
            </a>
        </div>
      </div>
      <div className=' hover:border-l-2 hover:border-blue-300 p-2 flex items-center gap-2'>
        <div>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
        </div>
        <div>
            <a href='/ViewContact'>
                <p className='text-xl'>kamikazi linda</p>
                <p>linda@gmail.com</p>
                <p>0789 022 222</p>
                
            </a>
        </div>
      </div>
      <div className=' hover:border-l-2 hover:border-blue-300 p-2 flex items-center gap-2'>
        <div>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
        </div>
        <div>
            <a href='/ViewContact'>
                <p className='text-xl'>Jabo Aime</p>
                <p>jabo@gmail.com</p>
                <p>0790 233 333</p>
                
            </a>
        </div>
      </div>
      <div className=' hover:border-l-2 hover:border-blue-300 p-2 flex items-center gap-2'>
        {/* <div>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
        </div> */}
        {/* <div>
            <a href='/ViewContact'>
                <p className='text-xl'>Muhuza Anitha</p>
                <p>0785 555 655</p>
                <p>Anitha0@gmail.com</p>
            </a>
        </div> */}
      </div>

    </section>
    <Footer/>

    </>
    
  )
}
export default Contactlist