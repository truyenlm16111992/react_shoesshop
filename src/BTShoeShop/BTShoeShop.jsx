import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const BTShoeShop = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header className='sticky top-0 z-[1] w-full backdrop-sepia-0 bg-black/70 p-0'>
                <div className='container flex items-center justify-between mx-auto px-5'>
                    <h1 className='text-white text-3xl font-black'>SHOES SHOP</h1>
                    <div>
                        My Cart
                    </div>
                </div>
            </Header>
            <Content className="container mx-auto my-0 px-5">
                <Breadcrumb className='mx-0 my-4' >
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 600,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer className='text-center text-white backdrop-sepia-0 bg-black/70'>
                Cybersoft Design ©2023
            </Footer>
        </Layout>
    )
}

export default BTShoeShop