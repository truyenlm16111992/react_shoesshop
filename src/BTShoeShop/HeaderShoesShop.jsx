import React from 'react'
import {Layout } from 'antd';
import Cart from './Cart';
const { Header } = Layout;
const HeaderShoesShop = () => {
  return (
    <Header className='sticky top-0 z-[1] w-full backdrop-sepia-0 bg-black/70 p-0'>
      <div className='container flex h-full items-center justify-between mx-auto px-5'>
        <h1 className='text-white text-3xl font-black'>SHOES SHOP</h1>
        <Cart/>
      </div>
    </Header>
  )
}

export default HeaderShoesShop