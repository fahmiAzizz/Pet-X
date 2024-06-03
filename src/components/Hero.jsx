import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Hero = () => {

    const mainControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div id='home' className='bg-center bg-cat bg-cover w-full h-screen text-white'>
            <div ref={ref} className='my-auto justify-center items-center h-screen  max-w-screen-lg mx-auto p-4  grid md:grid-cols-2'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{
                        duration: 1.5,
                        delay: 0.50
                    }}>
                    <p className='text-5xl font-semibold title-font'>Not only people need a house</p>
                    <p className='text-lg my-2'>Welcome to our animal adoption community, where love for animals and compassion come together to create a better world, one pet adoption at a time.</p>
                    <button className='font-semibold bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl p-2 inline text-lg text-black hover:scale-110 cursor-pointer duration-200'>make a friend</button>
                </motion.div>
            </div>
        </div >
    )
}

export default Hero