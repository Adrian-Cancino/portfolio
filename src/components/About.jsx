import Selfie from '../assets/selfie.jpg';

export const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right ">
            <p className='text-4xl font-bold'>Hi, I'm Adrian, nice to meet you. Please look around.</p>
            <p></p>
            <p>I'm passionate about building applications that help people around me.
              I have experience working in startups, so I know what does it mean working
              in a presure enviroment. If you need someone with experience working building cloud native apps,
              or as a database administrator, please contact me.</p>
          </div>
          <div className='hover:scale-110 duration-500'>
              <img src={Selfie} alt="JavaScript" className='w-72 mx-auto'/>
          </div>
        </div>

      </div>

    </div>
  )
}
