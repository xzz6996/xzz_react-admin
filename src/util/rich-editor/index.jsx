import React from 'react'
import Simditor from 'simditor'
import 'simditor/styles/simditor.scss'

class RichEditor extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.load();
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultDetail !== nextProps.defaultDetail){
            this.simditor.setValue(nextProps.defaultDetail);
        }
    }
    load(){
        let element=this.refs['textarea'];
        this.simditor=new Simditor({
            textarea:$(element),
            placeholder: "请输入内容",
            upload:{
                url:"/manage/product/richtext_img_upload.do",
                defaultImage:"",
                fileKey: 'upload_file', //服务器端获取文件数据的参数名
            }
        })
        this.bindEditorEvent();
    }
    // 初始化富文本编辑器的事件
    bindEditorEvent(){
        this.simditor.on('valuechanged',e=>{
            this.props.onValueChange(this.simditor.getValue())
        })
    }
    render(){
        return(
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}
export default RichEditor;