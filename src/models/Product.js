import listProduct from "../data/data.json"
export const getListItem = (getOptions) => {
    const options = {
        page: 1,
        pageSize: 4,
        ...getOptions
    }
    const startIndex = options.pageSize * (options.page - 1);
    const endIndex = startIndex + options.pageSize - 1;
    const result = {
        total: listProduct.length,
        listData: listProduct.filter((item, index) => index >= startIndex && index <= endIndex)
    }
    return result;
}