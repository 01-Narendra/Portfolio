import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si'
import { FaNodeJs, } from 'react-icons/fa'
import { motion } from 'framer-motion'


const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(2.5)}
            >
                <RiReactjsLine className='text-8xl text-cyan-400 hover:scale-110 transition-all duration-400' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(3)}
            className='p-4'>
                <SiMongodb className='text-8xl text-green-600 hover:scale-110 transition-all duration-400' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(5)}
            className='p-4'>
                <TbBrandNextjs className='text-8xl hover:scale-110 transition-all duration-400' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(2)}
            className='p-4'>
                <FaNodeJs className='text-8xl text-green-600 hover:scale-110 transition-all duration-400' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(6)}
            className='p-4'>
                <SiPostgresql className='text-8xl text-blue-600 hover:scale-110 transition-all duration-400' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(4)}
            className='p-4'>
                <SiExpress className='text-8xl text-gray-300 hover:scale-110 transition-all duration-400' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies