import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Register = () => {
    return (
        <div className=''>
            <Navbar />
            <h1 className='text-black text-4xl text-center font-bold mt-16 mb-8'>Register</h1>
            <div className='w-[550px] mx-auto py-16 mb-16 px-12 bg-[#011627] rounded-xl'>
                <form action="">
                    <div className='flex gap-4'>
                        {/* Text Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Name</label>
                            <input type="text" className='p-2 rounded-lg font-semibold' name="name" placeholder='Enter your name' required />
                        </div>
                        {/* Email Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Email</label>
                            <input type="email" className='p-2 rounded-lg font-semibold' name="name" placeholder='Your Email' required />
                        </div>
                    </div>
                    <div className='flex gap-4 my-4'>
                        {/* Password Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Password</label>
                            <input type="password" className='p-2 rounded-lg font-semibold' name="name" placeholder='Password' required />
                        </div>
                        {/* Confirm Passowrd Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Confirm Password</label>
                            <input type="password" className='p-2 rounded-lg font-semibold' name="name" placeholder='Confirm Password' required />
                        </div>
                    </div>
                    <div className=''>
                        {/* Text Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Choose Profile</label>
                            <input type='file' className='mt-2 rounded-lg' name="name" required />
                        </div>
                    </div>
                    <button className='btn bg-[#d5bdaf] w-full py-2 font-bold rounded-xl mt-8'>Register</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;