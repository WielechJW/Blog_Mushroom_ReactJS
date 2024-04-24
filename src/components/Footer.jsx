import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-purple-600'>GrzybowaMoc</h1>
          <p className='py-4'>Dowiedz się więcej o fascynującym świecie grzybów na naszym blogu! Odkrywaj kulinarne inspiracje, naukowe fakty i tajemnice natury. Dołącz do naszej społeczności pasjonatów grzybów już dziś!
          </p>
          <div className='flex md:[75%] my-6 '>
            <FaFacebookSquare size={30} className='mx-4'/>
            <FaInstagram size={30}/>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mx-20 mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Kontakt</h6>
            <ul>
              <li className='py-2 text-sm'>E-mail: grzybowamoc@grzybowamoc.pl</li>
              <li className='py-2 text-sm'>Facebook: GrzybowaMoc</li>
              <li className='py-2 text-sm'>Instagram: GrzybowaMoc</li>
            </ul>
          </div>
          
          <div>
            <h6 className='font-medium text-gray-400'>Informacje</h6>
            <ul>
              <li className='py-2 text-sm'>Polityka Prywatności</li>
              <li className='py-2 text-sm'>Klauzula Informacyjna Rodo</li>
              <li className='py-2 text-sm'>Regulamin</li>
            </ul>
          </div>
          
        </div>
    </div>
  )
}

export default Footer