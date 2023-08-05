import React from 'react'
import { useDispatch } from 'react-redux';
import { shoesReduxActions } from '../store/shoes/actions';
import { message  } from 'antd';


const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { product } = props;
    const [messageApi, contextHolder] = message.useMessage();
    const handleDetail = () => {
        dispatch(shoesReduxActions.handleDetailProduct(product));
        dispatch(shoesReduxActions.handleDetailModalOpen(true));
    }
    const handleCartAdd = () => {
        dispatch(shoesReduxActions.handleCartAdd({ product, quantity: 1 }));
        messageApi.open({
            type: 'success',
            content: `${product.name} is added to you cart`,
            duration: 2,
        });
    }
    return (
        <div className='group/card bg-white border rounded-lg shadow-lg shadow-gray-300 border-gray-400 transition-colors duration-300 hover:cursor-pointer hover:border-blue-500'>
            {contextHolder}
            <div className='relative overflow-hidden rounded-t-lg transition-colors duration-500 bg-gray-200 group-hover/card:bg-gray-400'>
                <img className='w-full rounded-t-lg' src={product.image} alt="" />
                <ul className='absolute top-4 right-4 space-y-3 transition-transform duration-500 delay-100 translate-x-[calc(200%)] opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100'>
                    <li className='group relative w-[40px] h-[40px]'>
                        <span className='absolute invisible w-full h-full z-0 rounded-full bg-blue-500 group-hover:visible group-hover:animate-[ping_1s_cubic-bezier(0,_0,_0.2,_1)]'></span>
                        <button className='relative text-lg bg-white w-full h-full rounded-full hover:text-blue-500' onClick={handleDetail}><i className="fa fa-search"></i></button>
                    </li>
                    <li className='group relative w-[40px] h-[40px]'>
                        <span className='absolute invisible w-full h-full z-0 rounded-full bg-blue-500 group-hover:visible group-hover:animate-[ping_1s_cubic-bezier(0,_0,_0.2,_1)]'></span>
                        <button className='relative text-lg bg-white w-full h-full rounded-full hover:text-blue-500' onClick={handleCartAdd}><i className="fa fa-cart-plus"></i></button>
                    </li>
                </ul>
            </div>
            <div className='flex justify-between round-b-lg space-x-2 p-3'>
                <div className='flex-1 text-left'>
                    <a href='#' className='text-xl font-bold mb-3'>{product.name}</a>
                    <p className='text-sm'>{product.shortDescription}</p>
                </div>
                <div className='basis-[60px]'>
                    <h3 className='text-lg font-extrabold text-red-500'>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductItem