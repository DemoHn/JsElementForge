/*Written by DemoHn*/

var GetElementProperty=function(id,data_json){
    /*
    * requires 参数说明：
    * ===========================================
    * 用户设置的参数［默认值都要有！］
    * ===========================================
    * (string) id :此元素所控制对象的ID
    * (string) height:这个UploadButton元素的绝对高度
    * (string) width:这个UploadButton元素的绝对宽度
    * //TODO 确定一下这个功能有没有必要用
    * (number) layer:这个UploadButton元素的层数
    * */

    var regnum=/[0-9]+/;
    var requires={
        id:id,
        //系统参数
        SpanClass:"FileSpan",
        FormFileClass:"FileInput",
        //用户配置
        DivHeight:"",
        DivWidth:"" ,
        SpanHeight:"",
        SpanWidth:"",
        FileFontSize:"",
        FileHeight:"",
        FileLeft:""
    };

    if(data_json!=null){
        requires.DivHeight=data_json.height;
        requires.DivWidth=data_json.width;
    }
    requires.SpanHeight=requires.DivHeight;
    requires.SpanWidth=requires.DivWidth;
    requires.FileFontSize=regnum.exec(requires.DivWidth)*0.7+"px";
    requires.FileHeight=requires.DivHeight;

    return requires;
};

var DynamicAdjustment=function(requires){
    $("#"+requires.id).css(
        {
            "height":requires.DivHeight,
            "width":requires.DivWidth
        });
    $("#"+requires.id+" ."+requires.SpanClass).css(
        {
           "height":requires.DivHeight,
           "width":requires.DivWidth
        });
    var cid=$("#"+requires.id+" ."+requires.FormFileClass);
    cid.css(
        {
            "height":requires.DivHeight,
            "fontSize":requires.FileFontSize,
            "float":"right"
        }
    );
}

//TODO 做为调试用，将来应该作为注释保留
$(document).ready(function () {
    DynamicAdjustment(GetElementProperty("DefaultIdentify",{height:'400px',width:'500px'}))
});

