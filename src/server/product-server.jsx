import Mutil from 'util/util.jsx'
const _util=new Mutil();

class Product{ 
    //产品列表
    ProductList(pageNum){
        return _util.request({
            url:"/manage/product/list.do",
            type:"post",
            data:{pageNum:pageNum}
        })
    }
    //产品搜索 
    productSearch(info){
        return _util.request({
            url:"/manage/product/search.do",
            type:"post",
            data:info
        })
    }
    //产品上下架
    setSaleStatus(params){
        return _util.request({
            url:"/manage/product/set_sale_status.do",
            type:"post",
            data:params
        })
    }
    //获取品类子节点(平级)
    getCotagory(categoryId){
        return _util.request({
            url:"/manage/category/get_category.do",
            type:"post",
            data:{categoryId:categoryId||0}
        })
    }
    
}


export default Product;