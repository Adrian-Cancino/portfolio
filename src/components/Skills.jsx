
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';
import DIGITAL from '../assets/digitalocean.png';
import Python from '../assets/python.png';
import Typescript from '../assets/typescript.png';
import Angular from '../assets/angular.png';
import Bitbucket from '../assets/bitbucket.svg';
import Azure from '../assets/azure.png';

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I have experience</p>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Python} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Typescript} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Typescript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={ReactImg} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Angular} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Angular</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Node} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>NodeJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={GitHub} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Bitbucket} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Bitbucket</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Azure} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>Azure</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={AWS} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={DIGITAL} alt="JavaScript" className='w-20 mx-auto'/>
                        <p>DigitalOcean</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
