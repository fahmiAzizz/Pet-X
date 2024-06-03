import React from 'react'
import Carousel from './Carousel.jsx'

const Pet = () => {
    return (
        <div id='adoption' className=' flex flex-col items-center justify-items-center py-24 bg-slate-50 w-full h-screen p-10 relative'>
            <p className=' mx-auto text-3xl title-font font-semibold text-center p-8 w-full md:w-1/2 lg:1/3'>Our Friend Who Are Looking For A House</p>
            <div className='max-w-screen-lg w-full mx-auto justify-center items-center'>
                <Carousel />
            </div>
        </div>
    )
}

export default Pet