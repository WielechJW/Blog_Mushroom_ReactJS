import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [open, setOpen] = useState(true)

  const handleNav = () => {
    setOpen(!open)
  }

  const handleCloseMenu = () => {
    setOpen(!false); 
  };


  return (
    <div  className="navbar flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-purple-600'>GrzybowaMoc</h1>
      <ul className='hidden md:flex'>
        <Link 
        to="Projekt" // Id sekcji, do której chcesz przewinąć stronę
        spy={true}
        smooth={true}
        offset={-70} // Odstęp od górnej krawędzi ekranu (dostosuj do swoich potrzeb)
        duration={500} // Czas trwania animacji przewijania (w milisekundach)
        
        >
          <button className='font-medium text-lg hover:scale-105 duration-300 p-4'>Projekt</button>
        </Link>
        <Link 
        to="Blog" // Id sekcji, do której chcesz przewinąć stronę
        spy={true}
        smooth={true}
        offset={-70} // Odstęp od górnej krawędzi ekranu (dostosuj do swoich potrzeb)
        duration={500} // Czas trwania animacji przewijania (w milisekundach)
        >
          <button className='font-medium text-lg hover:scale-105 duration-300 p-4'>Blog</button>
        </Link>
        
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!open ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>GrzybowamMoc</h1>
        <ul className='uppercase p-4'>
          <Link 
          to="Projekt" // Id sekcji, do której chcesz przewinąć stronę
          spy={true}
          smooth={true}
          offset={-70} // Odstęp od górnej krawędzi ekranu (dostosuj do swoich potrzeb)
          duration={500} // Czas trwania animacji przewijania (w milisekundach)
          onClick={handleCloseMenu}
          >
            <button className='w-full font-medium text-lg hover:scale-105 duration-300 p-4'>Projekt</button>
          </Link>
          <Link 
          to="Blog" // Id sekcji, do której chcesz przewinąć stronę
          spy={true}
          smooth={true}
          offset={-70} // Odstęp od górnej krawędzi ekranu (dostosuj do swoich potrzeb)
          duration={500} // Czas trwania animacji przewijania (w milisekundach)
          onClick={handleCloseMenu}
          >
            <button className='w-full font-medium text-lg hover:scale-105 duration-300 p-4'>Blog</button>
          </Link>
          
        </ul>
      </div>
    </div>

    
  )
}

export default Navbar