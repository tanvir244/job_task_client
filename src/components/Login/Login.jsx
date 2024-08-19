import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        login(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className=''>
            <Navbar />
            <h1 className='text-black text-4xl text-center font-bold mt-16 mb-8'>Login</h1>
            <div className='w-[450px] mx-auto py-16 mb-16 px-12 bg-[#011627] rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='space-y-2'>
                        {/* Email Input */}
                        <div className='flex flex-col w-full'>
                            <label className='text-white font-semibold'>Email</label>
                            <input type="email" className='p-2 rounded-lg font-semibold' placeholder='Your Email' {...register('email', { required: true })} />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        {/* Password Input */}
                        <div className='flex flex-col w-full'>
                            <label className='text-white font-semibold'>Password</label>
                            <input type="password" className='p-2 rounded-lg font-semibold' placeholder='Enter your name' {...register('password', { required: true })} />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                    </div>
                    <button className='btn bg-[#00b4d8] w-full py-2 font-bold rounded-xl mt-10'>Login</button>
                </form>
                <p className="mt-6 text-white">Don't have an account? <Link className="text-green-500 font-bold" to='/register'>Register please</Link>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Login;