import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2  
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                        <img draggable={false} src={project.image} width={250} height={250} alt={project.title} className='mb-6 rounded-2xl' />
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl'> {project.title} </h3>
                        <p className='mb-4 text-stone-400'> {project.description} </p>
                        <div className='flex flex-wrap md:gap-1 gap-2'>
                        { project.technologies.map((tech, index) => (
                            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                {tech}
                            </span>
                        )) }
                        </div>
                        <div className='mt-4 flex items-center gap-4'>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-sm text-stone-400 hover:text-stone-300'> <FaGithub className='text-2xl' /> </a>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-sm text-stone-400 hover:text-stone-300'>Live Demo</a>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects