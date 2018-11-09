class Mutil{
    //封装请求
    request(params){
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:params.url||"",
                type:params.type||"get",
                data:params.data||null,
                dataType: params.dataType|| 'json',
                success:res=>{
                    if(res.status===0){
                        resolve(res.data,res.msg)
                    }
                    else if(res.status===10){   //判断没有登陆 去登陆
                        this.doLogin();
                    }else{
                        reject(res.data||res.msg);
                    }
                },
                error:err=>{
                    reject(err)
                }
            })
        })
    }
    //登陆
    doLogin(){
        window.location.href="/login?redirect="+encodeURIComponent(window.location.pathname);
    }
    
    //截取链接参数
    getQueryString(param){
        var reg=new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
        var r=window.location.search.substr(1).match(reg);
        if(r!=null){return unescape(r[2])}else{return null};
    }
    //错误提示
    errorTips(errorMsg){
        alert(errorMsg)
    }
    //存储数据
    setStorage(name,data){
        let dataType=typeof data;
        if('object'===dataType){
            window.localStorage.setItem(name,JSON.stringify(data));
        }
        else if(['number','string','boolean'].indexOf(dataType)>=0){
            window.localStorage.setItem(name,data);
        }
        else{
            alert("该类型不支持存储")
        }
    }
    //得到数据
    getStorage(name){
        let data=window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return null;
        }
    }
    //删除数据
    removeStorage(name){
        window.localStorage.removeItem(name)
    }


}
export default Mutil;