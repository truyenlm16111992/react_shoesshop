import React from 'react'
import ProductItem from './ProductItem';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesReduxActions } from '../store/shoes/actions';
import { getListItem } from '../models/Product';
import ProductDetail from './ProductDetail';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const { listViewOption } = useSelector(state => state.shoesRedux);
    const { listData, total } = getListItem(listViewOption);
    return (
        <div>
            <ProductDetail/>
            <div className='flex justify-end'>
                <Pagination
                    pageSizeOptions={[4, 8, 12, 16, 20]}
                    defaultPageSize={listViewOption.pageSize}
                    defaultCurrent={listViewOption.page}
                    total={total}
                    current={listViewOption.page}
                    showSizeChanger={true}
                    onChange={(page, pageSize) => dispatch(shoesReduxActions.handleListViewOption({ page, pageSize }))}
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
            <div className='grid grid-cols-4 gap-x-10 gap-y-5 py-5'>
                {listData.map(item => (
                    <ProductItem product={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default ListItem