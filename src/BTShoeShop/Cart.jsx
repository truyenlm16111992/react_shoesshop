import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shoesReduxActions } from '../store/shoes/actions';
import { InputNumber, Modal } from 'antd';

const Cart = () => {
    const dispatch = useDispatch();
    const { isCartModalOpen, myCart } = useSelector(state => state.shoesRedux);
    const handleCart = () => {
        dispatch(shoesReduxActions.handleCartModal(true));
    }
    // curying function 
    const handleRemove = (id) => () => {
        dispatch(shoesReduxActions.handleCartDelete(id));
    }
    const handleQuantity = (id, quantity) => () => {
        dispatch(shoesReduxActions.handleCartQuantity({ id, quantity }));
    }
    const handleOk = () => {
        dispatch(shoesReduxActions.handleCartModal(false));
    };
    const handleCancel = () => {
        dispatch(shoesReduxActions.handleCartModal(false));
    };
    const onChange = (quantity, id) => {
        console.log(quantity);
        dispatch(shoesReduxActions.handleUpdateCartQuantity({ id, quantity }));
    };
    return (
        <div className='flex h-full items-center space-x-3'>
            <span className='text-white text-lg font-semibold'>Giỏ hàng</span>
            <div className='group relative w-[50px] h-[50px]'>
                <span className='absolute invisible left-0 w-full h-full -z-1 rounded-full bg-blue-500 group-hover:visible group-hover:animate-[ping_1s_cubic-bezier(0,_0,_0.2,_1)]'></span>
                <button onClick={handleCart} className='relative flex items-center justify-center text-xl w-full h-full bg-white rounded-full group-hover:text-blue-500'>
                    <i className="fa fa-shopping-cart"></i>
                </button>
                <span className='absolute left-[100%] top-0 z-10 w-[20px] h-[20px] rounded-full bg-blue-500 text-white text-sm font-semibold'>{myCart.length}</span>
            </div>
            <Modal
                title="Giỏ hàng của bạn"
                width={700}
                open={isCartModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <div className='grid grid-cols-1 max-h-[300px] overflow-y-auto px-3'>
                    {
                        myCart.map((item, index) => (
                            <div className='flex justify-between items-center space-x-5' key={item.id}>
                                <span>{index + 1}</span>
                                <img className='w-[80px]' src={item.image} alt="" />
                                <h3 className='flex-1 font-semibold text-lg'>{item.name}</h3>
                                <div className='space-x-3'>
                                    <button className=' hover:text-blue-500' onClick={() => {
                                        dispatch(shoesReduxActions.handleCartQuantity({ id: item.id, quantity: 1 }));
                                    }}><i className="fa fa-plus-circle"></i></button>
                                    <InputNumber className='w-[60px] !text-center appearance-none' width={10} min={1} max={99} value={item.cartQuantity} onChange={(value) => onChange(value, item.id)} />
                                    <button className=' hover:text-blue-500' onClick={handleQuantity(item.id, -1)}><i className="fa fa-minus-circle"></i></button>
                                </div>
                                <button className='text-lg hover:text-blue-500' onClick={handleRemove(item.id)}><i className="fa fa-trash"></i></button>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </div>
    )
}

export default Cart