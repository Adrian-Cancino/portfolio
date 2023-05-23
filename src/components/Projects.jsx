
import Nobel from '../assets/projects/NobelPrize.png';
import Ad from '../assets/projects/ad.png';
import Netflix from '../assets/projects/Netflix.png';
import Mnist from '../assets/projects/mnist.png';
import iris from '../assets/projects/iris.png';

export const Projects = () => {
  return (
    <div name='projects' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-4'>// Data Analysis</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${Nobel})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Nobel Prizes Dataset
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/Adrian-Cancino/DataAnalysis/blob/main/Python%20Projects/Nobel_Prize.ipynb" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Python</button>
                                </a>
                                <a href="https://github.com/Adrian-Cancino/DataAnalysis/blob/main/R%20Projects/Nobel_Prize.ipynb" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code R</button>
                                </a>
                                <a href="https://www.youtube.com/watch?v=czWdGL71PGU" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Python</button>
                                </a>
                            </div>
                        </div>

                </div>

                <div style={{backgroundImage: `url(${Netflix})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Netflix Dataset
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Adrian-Cancino/DataAnalysis/blob/main/Python%20Projects/Netflix_Data.ipynb" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Python</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{backgroundImage: `url(${Ad})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Advertising Dataset
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Adrian-Cancino/DataAnalysis/blob/main/Python%20Projects/Advertising_Data_Set.ipynb" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Python</button>
                            </a>
                        </div>
                    </div>

                </div>

                

            </div>

            <div className='pb-2 mt-1'>
                <p className='py-4'>// Machine Learning</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                <div style={{backgroundImage: `url(${Mnist})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Scikit-Learn MNIST Dataset
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/Adrian-Cancino/Scikit-Learn/blob/main/MINST_Data_Set.ipynb" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Python</button>
                                </a>
                            </div>
                        </div>

                </div>

                <div style={{backgroundImage: `url(${iris})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Decision Tree Iris Dataset
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/Adrian-Cancino/Python-MachineLearning/blob/main/Clasificacion/004_Decisions_Trees.ipynb" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Python</button>
                                </a>
                            </div>
                        </div>

                </div>

            </div>

            

        </div>
        
    </div>
  )
}
