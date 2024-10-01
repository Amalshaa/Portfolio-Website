import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'
import { contactData } from '@/data/data'

const Contactinfo = () => {
  return (
    <div>
      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from bg-emerald-500 emerald-900 flex items-center justify-center flex-col'>
          <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
      <div>
      <h1 className='texy-lg sm:text-xl text-white font-bold'>Phone</h1>
      <h1 className='text-base sm:text-lg text-white text-opacity '>
        {contactData.phone}
      </h1>
      </div>
      </div>

      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from bg-emerald-500 emerald-900 flex items-center justify-center flex-col'>
          <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
      <div>
      <h1 className='texy-lg sm:text-xl text-white font-bold mt-8 '>Email Address</h1>
      <h1 className='text-base sm:text-lg text-white text-opacity mb-8'>
        {contactData.email}
      </h1>
      </div>
      </div>

      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from bg-emerald-500 emerald-900 flex items-center justify-center flex-col'>
          <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
      <div>
      <h1 className='texy-lg sm:text-xl text-white font-bold'>Address</h1>
      <h1 className='text-base sm:text-lg text-white text-opacity '>
        {contactData.address}
      </h1>
      </div>
      </div>
    </div>
  )
}

export default Contactinfo
