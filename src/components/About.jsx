import React, { useEffect, useRef } from 'react'
import dog from '../assets/dog5.png'
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {

    const mainControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div className='w-full h-screen mx-auto justify-center items-center' id='about'>
            <div ref={ref} className=' max-w-screen-md grid w-full h-full md:grid-cols-2 justify-center items-center mx-auto'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.25 }}
                >
                    <img src={dog} alt="" className='w-64 mx-auto' />
                </motion.div>
                <motion.div
                    className='m-5 '
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 2 }}
                >
                    <h1 className='text-3xl title-font font-semibold'>About PetX</h1>
                    <p className='text-lg'>"We are a community dedicated to rescuing less fortunate animals and giving them a second chance at a happy life, We strive to provide a positive and responsible adoption experience, as well as support you throughout your journey with your new pet."</p>
                </motion.div>
            </div>
        </div>
    )
}

export default About



