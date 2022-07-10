import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#9c9898] bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-l-4 border-r-4 text-gray-400 border-[#00FF00]'>Projects</p>
                <p className='py-6'>Below are some of my projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                <div className=''>
                    <div>
                        <span></span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects