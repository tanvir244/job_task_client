import React from 'react';
import Product from '../Product/Product';


const Products = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-12'>
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default Products;