import React from 'react'

function Good() {
    return (
        <section className="pocket">
            <div className="pocket flex flex-row-reverse items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <div className="flex flex-col items-start justify-center w-[100%] h-[160px] md:h-[300px] lg:h-[400px] p-[20px] bg-[url('E:\FUTURE\REACT\practice\practice\src\assets\good_bg.png')] bg-cover bg-center">
                    <p className='text-[#000000] text-[14px] md:text-[14px] lg:text-[18px]'>Get 15% off</p>
                    <div className="line my-[5px] w-[20%] h-[1px] bg-[#121212]"></div>
                    <h1 className='md:text-[40px] lg:text-[64px] text-[#121212] font-semibold md:w-1/2 lg:leading-[80px]'>It's good to be on the list.</h1>
                    <p className='mb-[10px] text-[#000000] text-[12px] md:text-[13px] lg:text-[16px]'>Get 15% off your order when you sign up for our emails</p>
                    <div className=" mb-[10px] search flex items-center justify-between w-[400px] h-[30px] md:w-[500px] md:h-[40px] p-[10px] border-[1px] border-[#E6E6E6]">
                        <input type="search" name="" id="" placeholder='Search for products..' className='text-[#F05454] text-[12px] md:text-[16px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Good