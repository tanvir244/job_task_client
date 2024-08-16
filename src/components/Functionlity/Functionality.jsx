import React from 'react';

const Functionality = () => {
    return (
        <div className='space-y-8 py-16 px-8'>
            <div className=''>
                <input type="text" className='p-2 rounded-md bg-gray-300 w-full' placeholder='Search' />
            </div>
            <div className='space-y-4'>
                {/* Brand Name  */}
                <div className=''>
                    <select className='bg-gray-300 w-full p-2 text-black'>
                        <option value="" disabled selected>Brand</option>
                        <option value="tech">Tech</option>
                        <option value="mobile">Mobile</option>
                        <option value="computer">Tech</option>
                    </select>
                </div>
                {/* Category Name */}
                <div>
                    <select className='bg-gray-300 w-full p-2 text-black'>
                        <option value="" disabled selected>Category</option>
                        <option value="tech">Tech</option>
                        <option value="mobile">Mobile</option>
                        <option value="computer">Tech</option>
                    </select>
                </div>
                {/* Price Range */}
                <div>
                    <select className='bg-gray-300 w-full p-2 text-black'>
                        <option value="" disabled selected>Price Range</option>
                        <option value="tech">Tech</option>
                        <option value="mobile">Mobile</option>
                        <option value="computer">Tech</option>
                    </select>
                </div>
            </div>
            <button className='btn py-2 px-6 bg-black text-white w-full'>Search</button>
        </div>
    );
};

export default Functionality;