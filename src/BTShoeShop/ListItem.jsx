import React from 'react'
import ProductItem from './ProductItem';

const ListItem = (props) => {
    const { listProduct } = props;
    return (
        <div className='grid grid-cols-4 gap-x-10 gap-y-5 py-5'>
            {listProduct.map(item => (
                <ProductItem product={item} key={item.id}/>
            ))}
        </div>
    )
}

export default ListItem