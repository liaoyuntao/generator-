webpackJsonp([11],{CO1l:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),n=a("mvHQ"),l=a.n(n),o=a("GtTZ"),r=a("gyMJ"),d={components:{seek:o.a},data:function(){return{activeName:"save",visible:!0,model:"wjadmin",pathUrl:"wjadminpaymenthistory",busConfig:this.busConfig,tableFieldMap:this.tableFieldMap,sysurl:window.SITE_CONFIG.baseUrl,dataForm:{},sortData:{order:null,sidx:null},dataList:[],pageIndex:1,pageSize:20,totalPage:0,dataListLoading:!1,addOrUpdateVisible:!1,dataListSelections:[],operation:[],saveForm:{id:0,remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:"",title:"",type:"",money:"",state:"",payDate:"",userId:"",orderNo:""},config:{initialFrameWidth:null,initialFrameHeight:350},prewImgLoad:!1,prewImg:null,imgUrl:r.a.sysoss.upload(this.$cookie.get("token")),dataRule:{}}},activated:function(){this.getDataList()},methods:{handleClick:function(e,t){console.log(e,t)},sort:function(e){this.sortData.sidx=e.prop,this.sortData.order="descending"===e.order?"desc":"asc",this.getDataList()},setListSelections:function(e){this.dataListSelections=e},getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,sidx:this.sortData.sidx,order:this.sortData.order};for(var a in this.dataForm)this.dataForm[a]&&(this.dataForm[a]instanceof Array?t[a]=l()(this.dataForm[a]):t[a]=this.dataForm[a]);r.a[this.pathUrl].list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.data.list,e.totalPage=a.data.totalCount,a.data.totalPage<e.pageIndex&&0!==a.data.totalPage&&(e.pageIndex=1,e.getDataList())):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a[t.pathUrl].del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})},onEditorChange:function(e,t){this.saveForm[t]=e},handleRemove:function(e,t){this.saveForm[e.name]=t},handlePictureCardPreview:function(e){this.prewImgLoad=!0,this.prewImg=e.url},handleAvatarSuccess:function(e,t){console.log(this.saveForm[e.fieldName]instanceof Array),this.saveForm[e.fieldName]instanceof Array?this.saveForm[e.fieldName].push({urd:888,name:e.fieldName,url:e.url}):this.saveForm[e.fieldName]=e.url},beforeAvatarUpload:function(e){e.type,e.size;return!0},addOrUpdateHandle:function(e){var t=this;this.$nextTick(function(){t.visible=!1,t.init(e)})},init:function(e){var t=this;this.saveForm.id=e||0;for(var a=0;a<this.tableFieldMap[this.pathUrl].columns.length;a++){var i=this.tableFieldMap[this.pathUrl].columns[a];"1"===i.isNull&&(this.dataRule[i.fieldName]=[{required:!0,message:i.pageComment+"不能为空",trigger:"blur"}])}this.$nextTick(function(){t.$refs.saveForm.resetFields(),e&&r.a[t.pathUrl].info(e).then(function(e){var a=e.data;if(a&&0===a.code)for(var i=0;i<t.tableFieldMap[t.pathUrl].columns.length;i++){var s=t.tableFieldMap[t.pathUrl].columns[i];if("5"===s.inputType)if(a.data[s.fieldName]){console.log(a.data[s.fieldName]);var n=null;try{n=JSON.parse(a.data[s.fieldName])}catch(e){n=a.data[s.fieldName]}n instanceof Array?t.saveForm[s.fieldName]=n:(n+="",t.saveForm[s.fieldName]=[n])}else t.saveForm[s.fieldName]=[];else if("9"===s.inputType)if(a.data[s.fieldName]){var l=null;try{l=JSON.parse(a.data[s.fieldName])}catch(e){l=a.data[s.fieldName]}l instanceof Array?t.saveForm[s.fieldName]=l:t.saveForm[s.fieldName]=[{uid:999,name:s.fieldName,url:l}]}else t.saveForm[s.fieldName]=[];else t.saveForm[s.fieldName]=a.data[s.fieldName]}})})},dataFormSubmit:function(){var e=this;this.$refs.saveForm.validate(function(t){if(t){var a={};s()(a,e.saveForm),console.log(a),(e.saveForm.id?r.a[e.pathUrl].update(a):r.a[e.pathUrl].add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!0,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}]},[a("el-form",{staticStyle:{"margin-bottom":"60px"},attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("seek",{ref:"seek",attrs:{dataForm:e.dataForm,pathUrl:e.pathUrl},on:{"update:dataForm":function(t){e.dataForm=t}}}),e._v(" "),a("div",{staticStyle:{float:"right"}},[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth(e.model+":"+e.pathUrl+":save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth(e.model+":"+e.pathUrl+":delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{"default-sort":{prop:"id",order:"ascending"},data:e.dataList,border:"",height:"500"},on:{"sort-change":e.sort,"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{srtable:"custom",type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),e._l(e.tableFieldMap[e.pathUrl].tableSetList,function(t){return a("el-table-column",{attrs:{sortable:"custom",prop:t.fieldName,"header-align":"center",align:"center",label:t.pageComment},scopedSlots:e._u([{key:"default",fn:function(i){return["2"===t.inputType?a("span",{domProps:{textContent:e._s(i.row[t.fieldName])}}):"3"===t.inputType?a("span",{domProps:{textContent:e._s(i.row[t.fieldName])}}):"8"===t.inputType?a("span",[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:i.row[t.fieldName]}})]):"4"==t.inputType||"5"==t.inputType?a("span",{domProps:{textContent:e._s(e.busConfig[e.pathUrl+t.fieldnames].map[i.row[t.fieldName]])}}):a("span",{domProps:{textContent:e._s(i.row[t.fieldName])}})]}}])})}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth(e.model+":"+e.pathUrl+":save")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改\n                    ")]):e._e(),e._v(" "),e.isAuth(e.model+":"+e.pathUrl+":delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")]):e._e(),e._v(" "),e._l(e.operation,function(i){return e.isAuth(e.model+":"+e.pathUrl+":"+i.scope)?a("el-button",{attrs:{type:"text",size:"small"},domProps:{textContent:e._s(i.name)},on:{click:function(e){i.fun(t.row)}}}):e._e()})]}}])})],2),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.visible,expression:"!visible"}],attrs:{id:"save"}},[a("div",{staticClass:"save"},[a("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{key:"save",attrs:{label:e.saveForm.id?"修改":"新增",name:"save"}},[a("el-form",{ref:"saveForm",attrs:{model:e.saveForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},e._l(e.tableFieldMap[e.pathUrl].isSetList,function(t){return a("el-form-item",{attrs:{label:t.pageComment,prop:t.fieldName}},["1"===t.inputType?a("el-input-number",{attrs:{placeholder:t.pageComment,min:1},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}}):"2"===t.inputType?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:t.pageComment,format:"yyyy-MM-dd"},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2):"3"===t.inputType?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",placeholder:t.pageComment,type:"datetime"},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2):"4"==t.inputType?a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.pageComment},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+t.fieldnames].list,function(i){return a("el-option",{key:i.confName,attrs:{label:i.confName,value:i.confVue}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2)})):"5"==t.inputType?a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:t.pageComment},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+t.fieldnames].list,function(i){return a("el-option",{key:i.confVue,attrs:{label:i.confName,value:i.confVue}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2)})):"6"==t.inputType?a("div",{staticClass:"editor-container"},[a("editor",{staticStyle:{width:"100%"},attrs:{id:"editor_id",height:"400px",width:"100%",fieldName:t.fieldName,content:e.saveForm[t.fieldName],pluginsPath:"/static/kindeditor/plugins/",uploadJson:e.sysurl+"api/uploadFile",loadStyleMode:!1,allowFileManager:!1,allowImageRemote:!1},on:{"update-content":e.onEditorChange}})],1):"7"==t.inputType?a("el-input",{attrs:{autosize:{minRows:10,maxRows:4},type:"textarea",rows:2,placeholder:t.pageComment},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2):"8"==t.inputType?a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.imgUrl,"list-type":"picture-card","show-file-list":!1,data:t,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[e.saveForm[t.fieldName]?a("img",{staticClass:"avatar",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.saveForm[t.fieldName]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):"9"==t.inputType?a("el-upload",{attrs:{action:e.imgUrl,"on-remove":e.handleRemove,data:t,"list-type":"picture-card","file-list":e.saveForm[t.fieldName],"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[a("i",{staticClass:"el-icon-plus"}),a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(t.pageComment))])],2):a("el-input",{attrs:{placeholder:t.pageComment},model:{value:e.saveForm[t.fieldName],callback:function(a){e.$set(e.saveForm,t.fieldName,a)},expression:"saveForm[item.fieldName]"}})],1)})),e._v(" "),a("el-dialog",{attrs:{visible:e.prewImgLoad,modal:!1},on:{"update:visible":function(t){e.prewImgLoad=t}}},[a("img",{attrs:{width:"100%",src:e.prewImg,alt:""}})]),e._v(" "),a("span",{staticClass:"dialog-footer",staticStyle:{display:"flex","justify-content":"center",width:"100%"}},[a("el-button",{on:{click:function(t){e.visible=!0}}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1),e._v(" "),a("el-tab-pane",{key:"second",attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),e._v(" "),a("el-tab-pane",{key:"third",attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),e._v(" "),a("el-tab-pane",{key:"fourth",attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1)],1)])])},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(e){a("SbIw")},null,null);t.default=p.exports},SbIw:function(e,t,a){var i=a("cqEv");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("326b2db8",i,!0)},cqEv:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n#save .el-tabs__header{\n    top:100px;\n    margin-bottom: 100px;\n}\n#pane-wjadminpaymenthistory .el-card {\n    margin-top: 50px;\n}\n",""])}});