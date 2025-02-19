import React from 'react'
import Header from './Header'

const HeroSec = () => {
  return (
   <>
   <Header />
   <div className='bg-blue-800 relative size-0 z-1'></div>
   <div className='  max-auto h-screen bg-[url(./assets/Img2.jpg)] h-96 bg-cover  bg-center bg-no-repeat  flex justify-center items-center'>
      <nav>
        <ul>
          <li className='h-8 w-80 bg-blue-200 rounded-s flex justify-center items-center'>WELCOME TO THE SMART LABARATORY</li>
          <h1 className='font-40'>We Also Have A Ton Of Fun In The Process</h1>
        </ul>
      </nav>
   </div>
  
   </>
  )
}

export default HeroSec
