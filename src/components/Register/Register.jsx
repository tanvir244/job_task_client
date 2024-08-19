import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // register form
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {

        // upload img to imgbb and then get an url
        const formData = new FormData();
        formData.append('image', data.profile[0])
        const res = await axios.post(image_hosting_api, formData);
        console.log(res?.data?.data?.display_url);

        // create user
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photoURL = res?.data?.data?.display_url;
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Successfull",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(async () => {
                        navigate('/');

                        // sending user info to database
                        if (res.data.success) {
                            const newUser = {
                                name: data.name,
                                email: data.email,
                                password: data.password,
                                profile_img: res?.data?.data?.display_url
                            }
                            const newUserData = await axios.post('http://localhost:5000/new_user', newUser)
                            if (newUserData.data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Registration Info Saved in Database",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        }
                    })
            })
    }

    return (
        <div className=''>
            <Navbar />
            <h1 className='text-black text-4xl text-center font-bold mt-16 mb-8'>Register</h1>
            <div className='w-[550px] mx-auto py-16 mb-16 px-12 bg-[#011627] rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='flex gap-4'>
                        {/* Name Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Name</label>
                            <input type="text" className='p-2 rounded-lg font-semibold' placeholder='Enter your name' {...register('name', { required: true })} />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        {/* Email Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Email</label>
                            <input type="email" className='p-2 rounded-lg font-semibold' placeholder='Your Email' {...register('email', { required: true })} />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                    </div>
                    <div className='flex gap-4 my-4'>
                        {/* Password Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Password</label>
                            <input type="password" className='p-2 rounded-lg font-semibold' placeholder='Password' {...register('password', { required: true })} />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        {/* Confirm Passowrd Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Confirm Password</label>
                            <input type="password" className='p-2 rounded-lg font-semibold' placeholder='Confirm Password' {...register('confirm_password', { required: true })} />
                            {errors.confirm_password && <span className="text-red-600">Confirm Password is required</span>}
                        </div>
                    </div>
                    <div className=''>
                        {/* Text Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold'>Choose Profile</label>
                            <input type='file' className='mt-2 rounded-lg bg-[#ffddd2]' {...register('profile', { required: true })} />
                            {errors.profile && <span className="text-red-600">Profile is required</span>}
                        </div>
                    </div>
                    <button className='btn bg-[#00b4d8] w-full py-2 font-bold rounded-xl mt-8'>Register</button>
                </form>
                <p className="mt-6 text-white">Already have an account? <Link className="text-green-500 font-bold" to='/login'>Login Now</Link>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Register;