import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddNew = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        // upload imgage to imgbb and than get an url
        const formData = new FormData();
        formData.append('image', data.product_img[0]);
        const res = await axios.post(img_hosting_api, formData);
        console.log(res?.data?.data?.display_url);

        // sending new product data to database
        const newProduct = {
            product_name: data.product_name,
            price: data.price,
            production_date: data.production_date,
            category: data.category,
            brand: data.brand,
            rating: data.rating,
            product_img: res?.data?.data?.display_url,
            description: data.description
        }
        console.log(newProduct);
        const newProductData = await axios.post('http://localhost:5000/new_product', newProduct)
        if (newProductData.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Added new product successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className=''>
            <Navbar />
            <h1 className='text-black text-4xl text-center font-bold mt-16 mb-8'>Add New Product</h1>
            <div className='w-[850px] mx-auto py-16 mb-16 px-12 bg-[#011627] rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' action="">
                    <div className='flex gap-6'>
                        {/* Product Name Input */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold mb-2'>Product Name</label>
                            <input type="text" className='py-2 px-4 rounded-lg font-semibold' placeholder='Product Name' {...register('product_name', { required: true })} />
                            {errors.product_name && <span className="text-red-600">Product Name is required</span>}
                        </div>
                        {/* Price */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold mb-2'>Price</label>
                            <input type="number" className='py-2 px-4 rounded-lg font-semibold' placeholder='Price' {...register('price', { required: true })} />
                            {errors.price && <span className="text-red-600">Price is required</span>}
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        {/* Production Date */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold mb-2'>Production Date</label>
                            <input type='date' className='py-2 px-4 rounded-lg font-semibold' placeholder='Production Date' {...register('production_date', { required: true })} />
                            {errors.production_date && <span className="text-red-600">Production Date is required</span>}
                        </div>
                        {/* Product Image */}
                        <div className='flex flex-col w-1/2'>
                            <label className='text-white font-semibold mb-2'>Product Image</label>
                            <input type='file' className='mt-2 rounded-lg bg-[#ffddd2]' {...register('product_img', { required: true })} />
                            {errors.product_img && <span className="text-red-600">Profile is required</span>}
                        </div>
                    </div>
                    <div className='flex justify-between gap-4'>
                        {/* Category Input */}
                        <div className='flex flex-col w-[30%]'>
                            <label className='text-white font-semibold mb-2'>Category</label>
                            <select className='py-2 px-4 rounded-lg' {...register('category', { required: true })}>
                                <option value="" disabled selected>Choose category</option>
                                <option value="books">Books</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="electronics">Electronics</option>
                                <option value="accossories">Accossories</option>
                            </select>
                            {errors.category && <span className="text-red-600">Category is required</span>}
                        </div>
                        {/* Brand Name */}
                        <div className='flex flex-col w-[30%]'>
                            <label className='text-white font-semibold mb-2'>Brand Name</label>
                            <select className='py-2 px-4 rounded-lg' {...register('brand', { required: true })}>
                                <option value="" disabled selected>Brand</option>
                                <option value="rokomari">Rokomari</option>
                                <option value="yamaha">Yamaha</option>
                                <option value="sony">Sony</option>
                                <option value="gucci">Gucci</option>
                            </select>
                            {errors.brand && <span className="text-red-600">Brand Name is required</span>}
                        </div>
                        {/* Rating */}
                        <div className='flex flex-col w-[30%]'>
                            <label className='text-white font-semibold mb-2'>Rating</label>
                            <select className='py-2 px-4 rounded-lg' {...register('rating', { required: true })}>
                                <option value="" disabled selected>Rating Star</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {errors.rating && <span className="text-red-600">Price is required</span>}
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <label className='text-white font-semibold'>Description</label>
                        <textarea className="p-4 rounded-lg w-full mt-2" rows="4" placeholder="Enter your text here" {...register('description', { required: true })}></textarea>
                        {errors.description && <span className="text-red-600">Price is required</span>}
                    </div>

                    <button className='btn bg-[#00b4d8] w-full py-4 font-bold rounded-xl'>Register</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddNew;