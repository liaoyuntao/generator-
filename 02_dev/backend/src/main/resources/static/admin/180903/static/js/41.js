webpackJsonp([41,84],{LV1T:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("gyMJ"),l={data:function(){return{config:{initialFrameWidth:null,initialFrameHeight:350},prewImgLoad:!1,prewImg:null,imgUrl:i.a.sysoss.upload(this.$cookie.get("token")),pathUrl:"wjadmingoodscategory",busConfig:this.busConfig,tableFieldMap:this.tableFieldMap,sysurl:window.SITE_CONFIG.baseUrl,visible:!1,dataForm:{id:0,remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:"",name:"",pic:""},dataRule:{}}},methods:{onEditorChange:function(e,a){console.log(e),this.dataForm[a]=e},init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0;for(var t=0;t<this.tableFieldMap[this.pathUrl].isSetList.length;t++){var l=this.tableFieldMap[this.pathUrl].isSetList[t];"1"===l.isNull&&(this.dataRule[l.fieldName]=[{required:!0,message:l.pageComment+"不能为空",trigger:"blur"}])}this.$nextTick(function(){a.$refs.dataForm.resetFields(),e&&i.a.wjadmingoodscategory.info(e).then(function(e){var t=e.data;if(t&&0===t.code)for(var i=0;i<a.tableFieldMap[a.pathUrl].columns.length;i++){var l=a.tableFieldMap[a.pathUrl].columns[i];if("5"===l.inputType)if(t.data[l.fieldName]){var n=JSON.parse(t.data[l.fieldName]);n instanceof Array?a.dataForm[l.fieldName]=n:(n+="",a.dataForm[l.fieldName]=[n])}else a.dataForm[l.fieldName]=[];else if("9"===l.inputType)if(t.data[l.fieldName]){var r=JSON.parse(t.data[l.fieldName]);r instanceof Array?a.dataForm[l.fieldName]=r:a.dataForm[l.fieldName]=[{uid:999,name:l.fieldName,url:r}]}else a.dataForm[l.fieldName]=[];else a.dataForm[l.fieldName]=t.data[l.fieldName]}})})},handleRemove:function(e,a){this.dataForm[e.name]=a},handlePictureCardPreview:function(e){this.prewImgLoad=!0,this.prewImg=e.url},handleAvatarSuccess:function(e,a){this.dataForm[e.fieldName]instanceof Array?this.dataForm[e.fieldName].push({name:e.fieldName,url:e.url}):this.dataForm[e.fieldName]=e.url},beforeAvatarUpload:function(e){e.type,e.size;return!0},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={id:e.dataForm.id,remarks:e.dataForm.remarks,versionNo:e.dataForm.versionNo,createBy:e.dataForm.createBy,createTime:e.dataForm.createTime,updateBy:e.dataForm.updateBy,updateTime:e.dataForm.updateTime,deleteFlag:e.dataForm.deleteFlag,sort:e.dataForm.sort,name:e.dataForm.name,pic:e.dataForm.pic};(e.dataForm.id?i.a.wjadmingoodscategory.update(t):i.a.wjadmingoodscategory.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","modal-append-to-body":!1,"close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},e._l(e.tableFieldMap[e.pathUrl].isSetList,function(a,i){return t("el-form-item",{attrs:{label:a.pageComment,prop:a.fieldName}},["1"===a.inputType?t("el-input-number",{attrs:{placeholder:a.pageComment,min:1},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"2"===a.inputType?t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:a.pageComment,format:"yyyy-MM-dd"},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"3"===a.inputType?t("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",placeholder:a.pageComment,type:"datetime"},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"4"==a.inputType?t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+a.fieldnames].list,function(e){return t("el-option",{key:e.confName,attrs:{label:e.confName,value:e.confVue}})})):"5"==a.inputType?t("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+a.fieldnames].list,function(e){return t("el-option",{key:e.confVue,attrs:{label:e.confName,value:e.confVue}})})):"6"==a.inputType?t("div",{staticClass:"editor-container"},[t("editor",{staticStyle:{width:"100%"},attrs:{id:"editor_id",height:"400px",width:"100%",fieldName:a.fieldName,content:e.dataForm[a.fieldName],pluginsPath:"/static/kindeditor/plugins/",uploadJson:e.sysurl+"api/uploadFile",loadStyleMode:!1,allowFileManager:!1,allowImageRemote:!1},on:{"update-content":e.onEditorChange}})],1):"7"==a.inputType?t("el-input",{attrs:{autosize:{minRows:10,maxRows:4},type:"textarea",rows:2,placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"8"==a.inputType?t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.imgUrl,"list-type":"picture-card","show-file-list":!1,data:a,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[e.dataForm[a.fieldName]?t("img",{staticClass:"avatar",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.dataForm[a.fieldName]}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):"9"==a.inputType?t("el-upload",{attrs:{action:e.imgUrl,"on-remove":e.handleRemove,data:a,"list-type":"picture-card","file-list":e.dataForm[a.fieldName],"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[t("i",{staticClass:"el-icon-plus"})]):t("el-input",{attrs:{placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}})],1)})),e._v(" "),t("el-dialog",{attrs:{visible:e.prewImgLoad,modal:!1},on:{"update:visible":function(a){e.prewImgLoad=a}}},[t("img",{attrs:{width:"100%",src:e.prewImg,alt:""}})]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=t("VU/8")(l,n,!1,null,null,null);a.default=r.exports},R8tN:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("gyMJ"),l={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:t("LV1T").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var a={page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key};i.a.wjadmingoodscategory.list(a).then(function(a){var t=a.data;t&&0===t.code?(e.dataList=t.data.list,e.totalPage=t.data.totalCount,t.data.totalPage<e.pageIndex&&0!==t.data.totalPage&&(e.pageIndex=1,e.getDataList())):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1,e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var a=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){a.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var a=this,t=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+t.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.wjadmingoodscategory.del(t).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.getDataList()}}):a.$message.error(t.msg)})})}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mod-config"},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.getDataList()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(a){e.$set(e.dataForm,"key",a)},expression:"dataForm.key"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("wjadmin:wjadmingoodscategory:save")?t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("wjadmin:wjadmingoodscategory:delete")?t("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(a){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"主键"}}),e._v(" "),t("el-table-column",{attrs:{prop:"remarks","header-align":"center",align:"center",label:"备注"}}),e._v(" "),t("el-table-column",{attrs:{prop:"versionNo","header-align":"center",align:"center",label:"版本号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createBy","header-align":"center",align:"center",label:"创建人id"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"updateBy","header-align":"center",align:"center",label:"修改人id"}}),e._v(" "),t("el-table-column",{attrs:{prop:"updateTime","header-align":"center",align:"center",label:"修改时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"deleteFlag","header-align":"center",align:"center",label:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用"}}),e._v(" "),t("el-table-column",{attrs:{prop:"sort","header-align":"center",align:"center",label:"排序"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"分类名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"pic","header-align":"center",align:"center",label:"分类图片"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.addOrUpdateHandle(a.row.id)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.deleteHandle(a.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?t("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},r=t("VU/8")(l,n,!1,null,null,null);a.default=r.exports}});