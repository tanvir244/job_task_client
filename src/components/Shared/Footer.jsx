import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-600 py-16 px-24'>
            <div className='flex justify-between gap-16'>
                <div className='w-[560px] space-y-2'>
                    <h1 className='text-cyan-400 font-bold text-3xl'>Logo</h1>
                    <h2 className='text-white font-bold text-xl'>Job Task Project</h2>
                    <p className='text-[#dbd8d8]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aut accusantium labore, distinctio dicta reprehenderit qui ullam obcaecati hic unde non enim a omnis eius molestias similique tempora consectetur earum.</p>
                </div>
                <div className='w-[320px] text-[#dbd8d8]'>
                    <h6 className='text-white text-lg font-bold mb-2'>Service</h6>
                    <ul className='font-semibold space-y-1'>
                        <li>Cooking</li>
                        <li>Hospitality</li>
                        <li>Respect</li>
                        <li>Dignity</li>
                        <li>Smile approch</li>
                    </ul>
                </div>
                <div className='w-[320px] text-[#dbd8d8]'>
                    <h6 className='text-white text-lg font-bold mb-2'>Policy</h6>
                    <ul className='font-semibold space-y-1'>
                        <li>Terms & Policy</li>
                        <li>Cookie policy</li>
                        <li>Ligal Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;