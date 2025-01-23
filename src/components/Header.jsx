import React from 'react'

function Header() {
    return (
        <header>
            <div className='container mx-auto'>
                <div className="upper_header mb-[10px] header_background grid place-content-center bg-gradient-to-r from-[#F05454] to-[#30475E] p-[5px]">
                    <p className=' text-[#fff] text-[12px] md:text-[14px]lg:text-[16px] font-regular'>Get 25% offer By Purchase product!</p>
                </div>
                <div className="header p-[10px] md:px-[60px] lg:px-[120px] md:flex items-center justify-between">
                    <div className="lower_header flex items-center justify-between mb-[10px] md:mb-[10px] lg:mb-[20px]">
                        <div className="ls">
                            <div className="logo flex items-center gap-[10px] lg:gap-[20px]">
                                <img className='w-[119px] h-[26px] lg:w-[238px] lg:h-[52px]' src="src\assets\vertical LOGO@2x.png" alt="logo" />
                                <div className="search flex items-center justify-between w-[400px] h-[30px] md:w-[500px] md:h-[40px] rounded-full p-[10px] border-[1px] border-[#E6E6E6]">
                                    <input type="search" name="" id="" placeholder='Search for products..' className='text-[#787878] text-[12px] md:text-[16px]' />
                                    <img className='w-[10px] h-[10px] md:w-[16px] md:h-[16px]' src="src\assets\Icon feather-search@2x.png" alt="search" />
                                </div>
                            </div>
                        </div>
                        <div className="info flex items-center md:gap-[60px] p-[10px]">
                            <div className="info_box flex items-center gap-[10px] md:gap-[15px]">
                                <img className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]" src="src\assets\Icon feather-phone-call@2x.png" alt="call" />
                                <div className="info_details gap-[4px] md:gap-[10px]">
                                    <h1 className='text-[#121212] text-[10px] font-medium md:-[16px]'>210-494-9998</h1>
                                    <p className='text-[#AFAFAF] text-[8px] md:-[14px]'>Contact Us</p>
                                </div>
                            </div>
                            <div className="info_box flex items-center gap-[10px] md:gap-[15px]">
                                <img className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]" src="src\assets\Icon feather-user@2x.png" alt="call" />
                                <div className="info_details gap-[4px] md:gap-[10px]">
                                    <h1 className='text-[#121212] text-[10px] font-medium md:-[16px]'>Login/Register</h1>
                                    <p className='text-[#AFAFAF] text-[8px] md:-[14px]'>Not logged in</p>
                                </div>
                            </div>
                            <div className="info_box flex items-center gap-[10px] md:gap-[15px]">
                                <img className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]" src="src\assets\Icon feather-shopping-cart@2x.png" alt="call" />
                                <div className="info_details gap-[4px] md:gap-[10px]">
                                    <h1 className='text-[#121212] text-[10px] font-medium md:-[16px]'>Cart Total</h1>
                                    <p className='text-[#AFAFAF] text-[8px] md:-[14px]'>0 Items $ 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header