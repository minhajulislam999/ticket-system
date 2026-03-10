import React from 'react'

function Banner({ count }) {
    return (
        <div className='flex flex-col md:flex-row gap-4 mt-20 mx-auto w-11/12 '>

            {/* <div className='bg-[#422AD5] h-48 w-full  text-primary'>
                <div className='flex items-center justify-center  text-3xl font-bold'>
                    <h1>In-Progress</h1>
                </div>



                <div className='flex items-center justify-center  text-2xl font-bold'>
                    <span>0</span>
                </div>
            </div> */}
            <div className='bg-[#422AD5] h-48 w-full flex flex-col items-center justify-center text-primary rounded-md'>

                <h1 className='text-3xl font-bold text-white'>In-Progress</h1>

                <span className='text-2xl font-bold text-white'>{count}</span>

            </div>
            <div className='bg-[#34C759] h-48 w-full flex flex-col items-center justify-center text-primary  rounded-md'>

                <h1 className='text-3xl font-bold text-white'>Resolved</h1>

                <span className='text-2xl font-bold text-white'>0</span>

            </div>

            {/* <div className='bg-[#34C759] h-48 w-full flex items-center justify-center text-3xl font-bold text-primary'>
                right
            </div> */}

        </div>
    )
}

export default Banner
