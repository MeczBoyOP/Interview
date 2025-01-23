import React from 'react'

function Pocket() {
    return (
        <section className="pocket">
            <div className="pocket flex items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <div className="flex flex-col items-start justify-center gap-[10px] w-[100%] h-[160px] md:h-[300px] lg:h-[400px] p-[20px] bg-[url('E:\FUTURE\REACT\practice\practice\src\assets\pocket.png')] bg-cover bg-center">
                    <p className='text-[#000000] text-[14px] md:text-[14px] lg:text-[18px]'>2024 Deals Of The Week</p>
                    <div className="line my-[20px] w-[20%] h-[1px] bg-[#121212]"></div>
                    <h1 className='md:text-[40px] lg:text-[64px] text-[#121212] font-semibold md:w-3/5 lg:leading-[80px]'>Deals Of The Week Pocket Folders</h1>
                    <button className='text-[#121212] text-[10px] md:text-[12px] lg:text-[16px] hover:text-[#fff] hover:bg-[#F05454] border-[1px] border-[#F05454] rounded-[30px] px-[10px] py-[3px] md:px-[20px] md:py-[6px]'>Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default Pocket