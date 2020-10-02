Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        imgList: {
            type: Array,
            value: '',
            observers:{
                imgList:(res)=>{
                    this.setData({
                        imgList:res
                    })
                }
            }
        },
        url:{
            type:String,
            value:''
        }
    }
})