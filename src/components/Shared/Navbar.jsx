import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user } = useAuth();
    // const { displayName, photoURL } = user;
    // console.log(displayName);

    return (
        <div className='flex justify-between items-center bg-slate-600 py-4 px-24'>
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
            <div className='w-[240px]'>
                <div className='flex justify-between'>
                    <Link to="/login">
                        <button className='btn bg-[#011627] hover:bg-[#02101b] rounded-lg text-white font py-2 px-8'>Login</button>
                    </Link>
                    <Link to="/register">
                        <button className='btn bg-[#011627] hover:bg-[#02101b] rounded-lg text-white font py-2 px-8'>Register</button>
                    </Link>
                </div>
                {/* <img className='w-[50px] h-[50px] rounded-full' src="https://i.ibb.co/TmsrwQs/user.png" alt="" /> */}
            </div>
        </div>
    );
};

export default Navbar;