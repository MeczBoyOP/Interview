import React from 'react'

function Daily_deals() {
    return (
        <section className='daily_deals'>
            <div className="deals flex items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <div className="arrow shadow-sm w-[40px] h-[40px] rounded-full border-[1px] border-[#D6D6D6] grid place-content-center">
                    <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2722/2722991.png" alt="" />
                </div>

                <div className="deals w-[100%] px-[20px] pt-[10px] md:pt-[20px]">
                    <h1 className='mb-[10px] md:mb-[20px] text-center text-[#000] text-[16px] md:text-[20px] lg:text-[24px] font-semibold'>Don’t Miss Our Daily Deals & More</h1>
                    <div className="product_list flex items-center justify-between gap-[10px] md:gap-[15px] lg:gap-[20px]">
                        <div className="flex flex-col items-start justify-center gap-[10px] w-[100%] lg:h-[280px] p-[20px] bg-[url('E:\FUTURE\REACT\practice\practice\src\assets\deals1.png')] bg-cover bg-center">
                            <p className='text-[#F05454] text-[10px] md:text-[12px] lg:text-[16px]'>Upto 20% Off</p>
                            <h1 className='text-[14px] md:text-[18px] lg:text-[30px] text-[#000] font-semibold w-[30px]'>Custom Signs</h1>
                            <button className='text-[#000] text-[10px] md:text-[12px] lg:text-[16px] hover:text-[#fff] hover:bg-[#F05454] border-[1px] border-[#F05454] rounded-[30px] px-[10px] py-[4px] md:px-[13px] md:py-[5px] lg:px-[20px] lg:py-[6px]'>Shop Now</button>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[10px] w-[100%] lg:h-[280px] p-[20px] bg-[url('E:\FUTURE\REACT\practice\practice\src\assets\deals2.png')] bg-cover bg-center">
                            <p className='text-[#F05454] text-[10px] md:text-[12px] lg:text-[16px]'>30% Off</p>
                            <h1 className='text-[14px] md:text-[18px] lg:text-[30px] text-[#000] font-semibold w-[30px]'>Acrylic Signs</h1>
                            <button className='text-[#000] text-[10px] md:text-[12px] lg:text-[16px] hover:text-[#fff] hover:bg-[#F05454] border-[1px] border-[#F05454] rounded-[30px] px-[10px] py-[4px] md:px-[13px] md:py-[5px] lg:px-[20px] lg:py-[6px]'>Shop Now</button>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[10px] w-[100%] lg:h-[280px] p-[20px] bg-[url('E:\FUTURE\REACT\practice\practice\src\assets\deals3.png')] bg-cover bg-center">
                            <p className='text-[#F05454] text-[10px] md:text-[12px] lg:text-[16px]'>10% Off</p>
                            <h1 className='text-[14px] md:text-[18px] lg:text-[30px] text-[#000] font-semibold w-[30px]'>Table Throw</h1>
                            <button className='text-[#000] text-[10px] md:text-[12px] lg:text-[16px] hover:text-[#fff] hover:bg-[#F05454] border-[1px] border-[#F05454] rounded-[30px] px-[10px] py-[4px] md:px-[13px] md:py-[5px] lg:px-[20px] lg:py-[6px]'>Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="arrow shadow-sm w-[40px] h-[40px] rounded-full border-[1px] border-[#D6D6D6] grid place-content-center">
                    <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="" />
                </div>

            </div>
        </section>
    )
}

export default Daily_deals