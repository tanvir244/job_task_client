import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-600 py-2 px-24'>
            <div className='w-[120px]'>
                <h1 className='text-cyan-400 font-bold text-3xl'>Logo</h1>
            </div>
            <div className='w-[380px]'>
                <ul className='flex justify-around font-semibold text-white'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className='w-[50px]'>
                <img className='w-[50px] h-[50px] rounded-full' src="https://i.ibb.co/TmsrwQs/user.png" alt="" />
            </div>
        </div>
    );
};

export default Navbar;