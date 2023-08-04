import React from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesReduxActions } from '../store/shoes/actions';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { isDetailModalOpen, detailProduct } = useSelector(state => state.shoesRedux);
    const handleCancel = () => {
        dispatch(shoesReduxActions.handleDetailModalOpen(false));
    };
    return (
        <Modal
            title="Chi tiết sản phẩm"
            width={800}
            open={isDetailModalOpen}
            onCancel={handleCancel}
            footer={[]}
        >
            <div className='flex space-x-2'>
                <img className='w-[250px]' src={detailProduct.image} alt="" />
                <div className='flex-1 space-y-3'>
                    <h1 className='font-bold text-4xl'>{detailProduct.name}</h1>
                    <h1 className='text-3xl font-bold text-red-500'>$630</h1>
                    <p className='text-justify text-lg'>{detailProduct.description}</p>
                </div>
            </div>
        </Modal>
    )
}

export default ProductDetail