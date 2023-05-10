import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <button>
                <Link to='home' smooth={true} duration={500}>
                    Adrian Cancino
                </Link>
            </button>
        </div>
        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to='projects' smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
        </ul>

        {/* Hamburguer */}
        <div onClick={ handleClick } className='md:hidden z-10'>
            {!nav ? <FaBars />: <FaTimes/>}
        </div>

        {/* Mobile */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/luis-adrian-contreras-cancino/" target="_blank" rel="noopener noreferrer">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Adrian-Cancino" target="_blank" rel="noopener noreferrer">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[260px] h-[60px] flex justify-between items-center ml-[-200px] hover:ml-[-10px] duration-300 bg-[#345750]'>
                    <p className='flex justify-between items-center w-full text-gray-300 text-xl'>
                        luis@cancino.net <HiOutlineMail size={30}/>
                    </p>
                </li>
                {/*<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>*/}
            </ul>

        </div>
    </div>
  )
}
