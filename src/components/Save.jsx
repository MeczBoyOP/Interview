import React from 'react'

function Save() {
  return (
    <section className='save'>
            <div className="deals flex items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <div className="arrow shadow-sm w-[40px] h-[40px] rounded-full border-[1px] border-[#D6D6D6] grid place-content-center">
                    <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2722/2722991.png" alt="" />
                </div>

                <div className="deals w-[100%] px-[20px] pt-[10px] md:pt-[20px]">
                    <h1 className='mb-[10px] md:mb-[20px] text-center text-[#000] text-[16px] md:text-[20px] lg:text-[24px] font-semibold'>Stock Up And Save On Marketing & Signage</h1>
                    <div className="product_list flex items-center justify-between gap-[10px] md:gap-[15px] lg:gap-[20px]">
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\save_1.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Post Cards</h1>                
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\save_2.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Stickers</h1>              
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\save_3.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Rock Cards</h1>                 
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-[100%] lg:h-[270px] ">
                            <img className='w-[100%] h-[100%]' src="src\assets\save_4.png" alt="" />
                            <h1 className='text-[10px] md:text-[14px] lg:text-[16px] text-[#000] font-semibold'>Plastic Lanyards</h1>                         
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

export default Save