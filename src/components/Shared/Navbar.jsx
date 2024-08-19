import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [show, setShow] = useState(false);
    // const { displayName, photoURL } = user;
    // console.log(displayName);

    // logout 
    const handleLogout = () => {
        logOut()
    }

    return (
        <div className='flex justify-between items-center bg-slate-600 py-4 px-24 relative'>
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
            <div className='w-[240px] flex justify-end'>
                {user ? (<div onClick={() => setShow(!show)} className='w-[50px] cursor-pointer'>
                    <img className='w-[50px] h-[50px] rounded-full object-cover' src={user?.photoURL} alt="" />
                </div>) : (
                    <div className='flex justify-between gap-4'>
                        <Link to="/login">
                            <button className='btn bg-[#011627] hover:bg-[#02101b] rounded-lg text-white font py-2 px-8'>Login</button>
                        </Link>
                        <Link to="/register">
                            <button className='btn bg-[#011627] hover:bg-[#02101b] rounded-lg text-white font py-2 px-8'>Register</button>
                        </Link>
                    </div>
                )}

                {user ? (
                        <div className={`w-[210px] bg-gray-800 absolute top-[84px] rounded-md ${show ? 'block' : 'hidden'}`}>
                            <ul className='py-6 px-4 font-semibold'>
                                <Link>
                                    <li onClick={handleLogout} className='py-2 px-4 bg-white rounded-md hover:bg-slate-400 mb-1'>Logout</li>
                                </Link>
                                <Link>
                                    <li className='py-2 px-4 bg-white rounded-md hover:bg-slate-400'>Dashboard</li>
                                </Link>
                            </ul>
                        </div>
                ) : ''}
            </div>
        </div>
    );
};

export default Navbar;