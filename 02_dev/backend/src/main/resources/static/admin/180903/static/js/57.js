webpackJsonp([57],{dzAd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("gyMJ"),l={data:function(){return{config:{initialFrameWidth:null,initialFrameHeight:350},prewImgLoad:!1,prewImg:null,imgUrl:i.a.sysoss.upload(this.$cookie.get("token")),pathUrl:"wjadminxcxuser",busConfig:this.busConfig,tableFieldMap:this.tableFieldMap,sysurl:window.SITE_CONFIG.baseUrl,visible:!1,dataForm:{id:0,remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:"",openid:"",name:"",pic:"",phone:""},dataRule:{}}},methods:{onEditorChange:function(e,a){console.log(e),this.dataForm[a]=e},init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0;for(var t=0;t<this.tableFieldMap[this.pathUrl].isSetList.length;t++){var l=this.tableFieldMap[this.pathUrl].isSetList[t];"1"===l.isNull&&(this.dataRule[l.fieldName]=[{required:!0,message:l.pageComment+"不能为空",trigger:"blur"}])}this.$nextTick(function(){a.$refs.dataForm.resetFields(),e&&i.a.wjadminxcxuser.info(e).then(function(e){var t=e.data;if(t&&0===t.code)for(var i=0;i<a.tableFieldMap[a.pathUrl].columns.length;i++){var l=a.tableFieldMap[a.pathUrl].columns[i];if("5"===l.inputType)if(t.data[l.fieldName]){var o=JSON.parse(t.data[l.fieldName]);o instanceof Array?a.dataForm[l.fieldName]=o:(o+="",a.dataForm[l.fieldName]=[o])}else a.dataForm[l.fieldName]=[];else if("9"===l.inputType)if(t.data[l.fieldName]){var r=JSON.parse(t.data[l.fieldName]);r instanceof Array?a.dataForm[l.fieldName]=r:a.dataForm[l.fieldName]=[{uid:999,name:l.fieldName,url:r}]}else a.dataForm[l.fieldName]=[];else a.dataForm[l.fieldName]=t.data[l.fieldName]}})})},handleRemove:function(e,a){this.dataForm[e.name]=a},handlePictureCardPreview:function(e){this.prewImgLoad=!0,this.prewImg=e.url},handleAvatarSuccess:function(e,a){this.dataForm[e.fieldName]instanceof Array?this.dataForm[e.fieldName].push({name:e.fieldName,url:e.url}):this.dataForm[e.fieldName]=e.url},beforeAvatarUpload:function(e){e.type,e.size;return!0},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={id:e.dataForm.id,remarks:e.dataForm.remarks,versionNo:e.dataForm.versionNo,createBy:e.dataForm.createBy,createTime:e.dataForm.createTime,updateBy:e.dataForm.updateBy,updateTime:e.dataForm.updateTime,deleteFlag:e.dataForm.deleteFlag,sort:e.dataForm.sort,openid:e.dataForm.openid,name:e.dataForm.name,pic:e.dataForm.pic,phone:e.dataForm.phone};(e.dataForm.id?i.a.wjadminxcxuser.update(t):i.a.wjadminxcxuser.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","modal-append-to-body":!1,"close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},e._l(e.tableFieldMap[e.pathUrl].isSetList,function(a,i){return t("el-form-item",{attrs:{label:a.pageComment,prop:a.fieldName}},["1"===a.inputType?t("el-input-number",{attrs:{placeholder:a.pageComment,min:1},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"2"===a.inputType?t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:a.pageComment,format:"yyyy-MM-dd"},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"3"===a.inputType?t("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",placeholder:a.pageComment,type:"datetime"},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"4"==a.inputType?t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+a.fieldnames].list,function(e){return t("el-option",{key:e.confName,attrs:{label:e.confName,value:e.confVue}})})):"5"==a.inputType?t("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}},e._l(e.busConfig[e.pathUrl+a.fieldnames].list,function(e){return t("el-option",{key:e.confVue,attrs:{label:e.confName,value:e.confVue}})})):"6"==a.inputType?t("div",{staticClass:"editor-container"},[t("editor",{staticStyle:{width:"100%"},attrs:{id:"editor_id",height:"400px",width:"100%",fieldName:a.fieldName,content:e.dataForm[a.fieldName],pluginsPath:"/static/kindeditor/plugins/",uploadJson:e.sysurl+"api/uploadFile",loadStyleMode:!1,allowFileManager:!1,allowImageRemote:!1},on:{"update-content":e.onEditorChange}})],1):"7"==a.inputType?t("el-input",{attrs:{autosize:{minRows:10,maxRows:4},type:"textarea",rows:2,placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}}):"8"==a.inputType?t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.imgUrl,"list-type":"picture-card","show-file-list":!1,data:a,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[e.dataForm[a.fieldName]?t("img",{staticClass:"avatar",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.dataForm[a.fieldName]}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):"9"==a.inputType?t("el-upload",{attrs:{action:e.imgUrl,"on-remove":e.handleRemove,data:a,"list-type":"picture-card","file-list":e.dataForm[a.fieldName],"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[t("i",{staticClass:"el-icon-plus"})]):t("el-input",{attrs:{placeholder:a.pageComment},model:{value:e.dataForm[a.fieldName],callback:function(t){e.$set(e.dataForm,a.fieldName,t)},expression:"dataForm[item.fieldName]"}})],1)})),e._v(" "),t("el-dialog",{attrs:{visible:e.prewImgLoad,modal:!1},on:{"update:visible":function(a){e.prewImgLoad=a}}},[t("img",{attrs:{width:"100%",src:e.prewImg,alt:""}})]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=t("VU/8")(l,o,!1,null,null,null);a.default=r.exports}});