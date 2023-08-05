import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shoesReduxActions } from '../store/shoes/actions';
import { InputNumber, Drawer, Popconfirm } from 'antd';

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

    const handleCancel = () => {
        dispatch(shoesReduxActions.handleCartModal(false));
    };

    const onChange = (quantity, id) => {
        dispatch(shoesReduxActions.handleUpdateCartQuantity({ id, quantity }));
    };

    const handleEmptyCart = () => {
        dispatch(shoesReduxActions.handleEmptyCart());
    }
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
            <Drawer
                title="Giỏ hàng của bạn"
                placement="right"
                width={600}
                onClose={handleCancel}
                open={isCartModalOpen}>
                <div className='flex flex-col max-h-[calc(100vh-150px)] min-h-[calc(100vh-200px)] overflow-y-auto px-3'>
                    {
                        myCart.length > 0 ? (
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
                                    <Popconfirm
                                        placement="topRight"
                                        title={"Bạn có chắc thực hiện"}
                                        description={"Sản phẩm sẽ bị xóa sản phẩm khỏi giỏ hàng?"}
                                        okText="Có"
                                        cancelText="Không"
                                        onConfirm={handleRemove(item.id)}
                                    >
                                        <button className='text-lg hover:text-blue-500' ><i className="fa fa-trash"></i></button>
                                    </Popconfirm>

                                </div>
                            ))
                        ) : (
                            <div className='w-full p-5 text-center text-lg'>Không có sản phẩm trong giỏ hàng</div>
                        )
                    }
                </div>
                <div className='text-right py-3 text-lg font-semibold text-red-500'>
                    <span>Total: </span>
                    <span>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(myCart.reduce((total, item) => total + item.price * item.cartQuantity, 0))}</span>
                </div>
                <div className='flex flex-1 justify-end items-center space-x-3'>
                    <button className='py-3 px-10 font-bold transition-colors duration-500 bg-gray-300 hover:bg-blue-500 hover:text-white' onClick={handleEmptyCart}>Clear all</button>
                    <button className='py-3 px-10 font-bold transition-colors duration-500 bg-gray-300 hover:bg-blue-500 hover:text-white' onClick={handleEmptyCart}>Checkout</button>
                </div>
            </Drawer>
        </div>
    )
}

export default Cart