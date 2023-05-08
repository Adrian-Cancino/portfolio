
import JOM from '../assets/jom.png';
import Oliver from '../assets/oliver.png';

export const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-4'>// Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage: `url(${JOM})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Real State App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jom.mx/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div style={{backgroundImage: `url(${Oliver})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                CRM App
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Local Startup</p>
                            </div>
                        </div>

                    </div>

                </div>

        </div>
        
    </div>
  )
}
