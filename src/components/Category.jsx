import React from 'react'

function Category() {
    return (
        <section className='category mb-[10px] md:mb-[20px]'>
            <div className="deals flex flex-wrap items-center justify-between p-[10px] md:px-[60px] lg:px-[120px]">
                <button className='text-[8px] font-thin md:text-[10px] lg:text-[12px] text-[#fff] bg-[#F05454] px-[8px] py-[3px] md:px-[10px] md:py-[3px] lg:px-[15px] lg:py-[5px]'>All Category</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Home</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Custom Flags</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Chloroplast</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Signs Banners</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Mesh Banners</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Window Cling</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Table Throws</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Floor Signage</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Business Cards</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Brochures</button>
                <button className='hidden md:block text-[8px] font-thin md:text-[8px] lg:text-[14px] text-[#787878] px-[8px] py-[3px] md:px-[3px] md:py-[3px] lg:px-[10px] lg:py-[5px]'>Post Cards</button>
                <img className="sm:hidden w-[15px] h-[15px]" src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png" alt="" />
            </div>
        </section>
    )
}

export default Category