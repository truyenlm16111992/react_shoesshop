import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd';
import ListItem from './ListItem';
import HeaderShoesShop from './HeaderShoesShop';


const { Content, Footer } = Layout;
const BTShoeShop = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='bg-white'>
            <HeaderShoesShop/>
            <Content className="container mx-auto my-0 p-5">
                <Breadcrumb className='mx-0' items={[
                    { title: "Trang chủ", href: "#" },
                    { title: "Sản phẩm", href: "#" }
                ]}>
                </Breadcrumb>

                <ListItem />
            </Content>
            <Footer className='text-center text-white backdrop-sepia-0 bg-black/70'>
                Cybersoft Design ©2023
            </Footer>
        </Layout>
    )
}

export default BTShoeShop