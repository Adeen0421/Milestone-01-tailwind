import React from 'react'
import Heading from './Heading'

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <Heading title='Contact'/>
      
      <h1 className='text-4xl mt-2 text-center'>Name:
      </h1>
      
        <p className='text-center text-2xl text-slate-300 mt-2'>Muhammad Adeen Khan</p>
       
     
        <h1 className='text-4xl mt-2 text-center'>Email address:
      </h1>
      
        <p className='text-center text-2xl text-slate-300 mt-2'>adeenkhan421@gmail.com</p>
        
      <h1 className='text-4xl mt-2 text-center'>Github:
      </h1>
      
        <p className='text-center text-2xl text-slate-300 mt-2'><a href='https://github.com/Adeen0421?tab=repositories'>Adeen0421</a></p>
        <h1 className='text-4xl mt-2  text-center'>Vercel:
      </h1>
      
        <p className='text-center text-2xl text-slate-300 mt-2'><a href='https://vercel.com/adeen-khans-projects'>Adeen0421</a></p>
        
       
      

    </div>
  )
}

export default Contact
