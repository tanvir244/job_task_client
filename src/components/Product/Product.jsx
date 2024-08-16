import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

const Product = () => {
    return (
        <div className='w-[320px] bg-white shadow-lg rounded-2xl'>
            <img className='w-full h-[180px] object-cover rounded-t-2xl' src="https://i.ibb.co/0QrSq94/historical-news-11.jpg" alt="" />
            <div className='flex gap-6 text-sm mt-2 mb-4 px-4'>
                <p className='flex items-center gap-1'><span className='text-xl'><BiSolidCategory /></span> <span>Liquied</span></p>
                <p className='flex items-center gap-1'><span className='text-xl'><MdStarRate /></span> <span>5</span></p>
                <p className='flex items-center gap-1'><span className='text-xl'><MdAccessTimeFilled /></span> <span>12 Auguest, 2024</span></p>
            </div>
            <h2 className='px-4 pb-2 text-lg font-bold'>Product Number One</h2>
            <p className='px-4 pb-6  text-[#6b6b6b]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo facilis, similique iste autem non delectus.</p>
        </div>
    );
};

export default Product;