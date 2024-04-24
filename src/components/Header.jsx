import React from 'react'
import {Link} from 'react-scroll';

function Header() {
  return (
   <div className="text-white" >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='text-purple-600 font-bold p-2'>Grzyby i ich królestwo, zaskocz sie z nami</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Zanurz się w fascynującym świecie grzybów i odkryj ich tajemnice!</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Poznaj ich magiczne właściwości i  różnorodność.</p>
        </div>
        <Link
        to="Blog" // Id sekcji, do której chcesz przewinąć stronę
        spy={true}
        smooth={true}
        offset={-70} // Odstęp od górnej krawędzi ekranu (dostosuj do swoich potrzeb)
        duration={500} // Czas trwania animacji przewijania (w milisekundach)
        >
        <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Zobacz Bloga
        </button>
        </Link>
        
      </div>
   </div>
  )
}

export default Header