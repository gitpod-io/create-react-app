import React from 'react'
import {SiJava, SiCsharp, SiPython, SiReact, SiCplusplus, SiTailwindcss, SiDotnet, SiJavascript} from 'react-icons/si'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-[#9c9898]'>
        {/*Container for Icons*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-t-4 border-[#00FF00]'>Experience</p>
                <p className='py-4'>Technologies, Frameworks, and Languages I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className=' group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiJava className="fill-white mx-auto group-hover:fill-[#f89820] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#f89820] duration-300">Java</p>
                </div>
                <div className='group shadow-md shadow-black hover:scale-110 duration-500 '>
                    <SiCsharp className=" fill-white mx-auto group-hover:fill-[#823085] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#823085] duration-300">C#</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiPython className=" fill-white mx-auto group-hover:fill-[#FFD43B] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#FFD43B] duration-300">Python</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiJavascript className=" fill-white mx-auto group-hover:fill-[#FFFF00] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#FFFF00] duration-300">JavaScript</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiReact className=" fill-white mx-auto group-hover:fill-[#00d8ff] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#00d8ff] duration-300">React</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiTailwindcss className=" fill-white mx-auto group-hover:fill-cyan-300 duration-300" size={125}/>
                    <p className="my-4 group-hover:text-cyan-300 duration-300">Tailwind CSS</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiDotnet className=" fill-white mx-auto group-hover:fill-[#823085] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#823085] duration-300">DotNet</p>
                </div>
                <div className='group shadow-md shadow-black  hover:scale-110 duration-500 '>
                    <SiCplusplus className=" fill-white mx-auto group-hover:fill-[#8c1eff] duration-300" size={125}/>
                    <p className="my-4 group-hover:text-[#8c1eff] duration-300">C++</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience