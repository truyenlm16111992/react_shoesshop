import React from 'react'
import { Breadcrumb, Layout, Pagination, theme } from 'antd';
import ListItem from './ListItem';
import listProduct from "../data/data.json"
const { Header, Content, Footer } = Layout;
const BTShoeShop = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='bg-white'>
            <Header className='sticky top-0 z-[1] w-full backdrop-sepia-0 bg-black/70 p-0'>
                <div className='container flex items-center justify-between mx-auto px-5'>
                    <h1 className='text-white text-3xl font-black'>SHOES SHOP</h1>
                    <div>
                        My Cart
                    </div>
                </div>
            </Header>
            <Content className="container mx-auto my-0 p-5">
                <Breadcrumb className='mx-0' items={[
                    { title: "Trang chủ", href: "#" },
                    { title: "Sản phẩm", href: "#" }
                ]}>
                </Breadcrumb>
                <div className='flex justify-end'>
                    <Pagination
                        pageSizeOptions={[4, 8, 12, 16, 20]}
                        defaultPageSize={4}
                        defaultCurrent={1}
                        total={100}
                        current={3}
                        onChange={(page, pageSize) => console.log(page, pageSize)}
                        itemRender={(page, type, originalElement) => {
                            switch (type) {
                                case "next":
                                    return <a>Sau</a>;
                                case "jump-next":
                                    return <a><i className="fa fa-angle-double-right"></i></a>;
                                case "prev":
                                    return <a>Trước</a>;
                                case "jump-prev":
                                    return <a><i className="fa fa-angle-double-left"></i></a>;
                                case "page":
                                    return <a>{page}</a>
                                default:
                                    return originalElement;
                            }
                        }}
                    />
                </div>
                <ListItem listProduct={listProduct} />
            </Content>
            <Footer className='text-center text-white backdrop-sepia-0 bg-black/70'>
                Cybersoft Design ©2023
            </Footer>
        </Layout>
    )
}

export default BTShoeShop