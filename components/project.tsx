"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { projects } from "./constant/work"

interface ProjectProps {
    id: string;
}

export const Project: React.FC<ProjectProps> = ({ id }) => {
    const router = useRouter()
    return (
        <>
            <div id={id}>
                <div className="text-center text-black dark:text-white">
                    <p className="text-4xl sm:text-5xl font-serif font-medium mt-4">Projects</p>
                    <p className="mt-4 font-serif font-medium text-lg sm:text-xl ">Explore My Journey Through Pixels and Lines</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 pl-4 sm:pl-8 mt-20 rounded-lg">
                {projects.map((project, index) => (
                    <div key={index} className="w-full max-w-sm hover:animate-pulse bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <a >
                           <Image
  className="p-8 rounded-t-lg"
  src={project.projectImage}
  alt="product image"
  width={400}  // example width
  height={300} // example height
/>

                        </a>
                        <div className="px-5 pb-5">
                            <a >
                                <h5 className="text-2xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white">{project.ProjectName}</h5>

                            </a>
                            <p className="text-xl font-serif text-gray-500 dark:text-gray-400 mt-2">{project.projectDescription}</p>
                            <div className='flex justify-around mt-2'>
                                <p className='text-orange-600'>#{project.TechStack[0]}</p>
                                <p className='text-cyan-400'>#{project.TechStack[1]}</p>
                                <p className='text-yellow-400'>#{project.TechStack[2]}</p>
                            </div>


                        </div>
                        <div className="flex items-center justify-evenly">
                            <button onClick={()=>{router.push(project.projectLink)}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    LIVE
                                </span>
                            </button>
                            <button type="button" onClick={()=>{router.push(project.codeLink)}} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">CODE</button>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
        </>
    )
}