import React, { useRef } from 'react'
import profilePic from '../assets/profilePic.png'
import { HERO_CONTENT } from '../constants'
import {motion,useMotionTemplate,
    useMotionValue,
    useSpring,} from 'framer-motion'


const containerVariant = {
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariant = {
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Hero = () => {

    const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <motion.div 
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className='flex justify-center lg:p-8'>
                    <motion.img 
                    src={profilePic} 
                    alt="Narendra Maurya" 
                    className='border border-stone-900 rounded-3xl' 
                    width={430}
                    height={430}
                    draggable={false}
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    />
                </motion.div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div 
                initial='hidden'
                animate='visible'
                variants={containerVariant}
                className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h2 
                    variants={childVariant}
                    className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Narendra Maurya</motion.h2>
                    <motion.span 
                    variants={childVariant}
                    className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                    variants={childVariant}
                    className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a variants={childVariant} href="/Resume.pdf" target='_blank' rel='noopener noreferrer'
                    download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero