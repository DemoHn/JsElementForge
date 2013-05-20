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

    var requires={
        id:id,
        //系统参数
        SpanClass:"FileSpan",
        FormFileClass:"FileInput"
    };
    //if(data_json!=undefind){
        requires.height=data_json.height;
        requires.width=data_json.width;
  //  }
    return requires;
};

var DynamicRunning=function(requires){
    $("#"+requires.id).css(
        {
            "height":requires.height,
            "width":requires.width
        });
    $("#"+requires.id+" ."+requires.SpanClass).css(
        {
           "height":requires.height,
           "width":requires.width
        });
    var regnum=/[0-9]+/;
    var DivWidth=regnum.exec(requires.width);
    var cid=$("#"+requires.id+" ."+requires.FormFileClass);
    cid.css(
        {
            "height":requires.height,
            "fontSize":DivWidth*0.7+"px"
        }
    );
    var OffsetWidth=regnum.exec(cid.css("width"));

    cid.css(
        {
            "left":((-1)*(OffsetWidth)+DivWidth*1)+"px"

        }
    );
}

//TODO 做为调试用，将来应该作为注释保留
$(document).ready(function () {
    DynamicRunning(GetElementProperty("DefaultIdentify",{height:'400px',width:'500px'}))
});

