import Mutil from 'util/util.jsx'
const _util=new Mutil();

class staticServer{
      //统计接口
    baseCount(){
        return _util.request({
            url:"/manage/statistic/base_count.do",
            type:"post"
        })
    }

}


export default staticServer;