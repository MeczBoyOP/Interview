import React from 'react'

function Build() {
    return (
        <section className='Build mb-[10px] md:mb-[20px]'>
            <div className="deals flex items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <div className="arrow shadow-sm w-[40px] h-[40px] rounded-full border-[1px] border-[#D6D6D6] grid place-content-center">
                    <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2722/2722991.png" alt="" />
                </div>

                <div className="deals w-[100%] px-[20px] pt-[10px] md:pt-[20px]">
                    <h1 className='mb-[10px] md:mb-[20px] text-center text-[#000] text-[16px] md:text-[20px] lg:text-[24px] font-semibold'>Tools To Help Build Your Business</h1>
                    <div className="product_list flex items-center justify-between gap-[10px] md:gap-[15px] lg:gap-[20px]">
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\build_1.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Canvas Signs</h1>
                            <div className='flex ga-[5px] md:gap-[10px]'>
                                <p className='text-[#A8A8A8] text-[10px] md:text-[8px] lg:text-[14px]'>Starting at:</p>
                                <p className='text-[#F05454] text-[12px] md:text-[10px] lg:text-[16px] font-semibold'>$06.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\build_2.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Acrylic Signs</h1>
                            <div className='flex ga-[5px] md:gap-[10px]'>
                                <p className='text-[#A8A8A8] text-[10px] md:text-[8px] lg:text-[14px]'>Starting at:</p>
                                <p className='text-[#F05454] text-[12px] md:text-[10px] lg:text-[16px] font-semibold'>$08.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\build_3.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Aluminum Signs</h1>
                            <div className='flex ga-[5px] md:gap-[10px]'>
                                <p className='text-[#A8A8A8] text-[10px] md:text-[8px] lg:text-[14px]'>Starting at:</p>
                                <p className='text-[#F05454] text-[12px] md:text-[10px] lg:text-[16px] font-semibold'>$05.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\build_4.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Mesh Banners</h1>
                            <div className='flex ga-[5px] md:gap-[10px]'>
                                <p className='text-[#A8A8A8] text-[10px] md:text-[8px] lg:text-[14px]'>Starting at:</p>
                                <p className='text-[#F05454] text-[12px] md:text-[10px] lg:text-[16px] font-semibold'>$04.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\build_5.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Custom Flags</h1>
                            <div className='flex ga-[5px] md:gap-[10px]'>
                                <p className='text-[#A8A8A8] text-[10px] md:text-[8px] lg:text-[14px]'>Starting at:</p>
                                <p className='text-[#F05454] text-[12px] md:text-[10px] lg:text-[16px] font-semibold'>$32.40</p>
                            </div>
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

export default Build