webpackJsonp([73],{"/+fR":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("gyMJ"),o={data:function(){return{busConfig:this.busConfig,sysurl:window.SITE_CONFIG.baseUrl,visible:!1,dataForm:{id:0,remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:"",title:"",type:"",money:"",state:"",payDate:"",userId:"",orderNo:""},dataRule:{remarks:[{required:!0,message:"备注不能为空",trigger:"blur"}],versionNo:[{required:!0,message:"版本号不能为空",trigger:"blur"}],createBy:[{required:!0,message:"创建人id不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],updateBy:[{required:!0,message:"修改人id不能为空",trigger:"blur"}],updateTime:[{required:!0,message:"修改时间不能为空",trigger:"blur"}],deleteFlag:[{required:!0,message:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}],title:[{required:!0,message:"支付标题@0-订单支付,1-余额充值不能为空",trigger:"blur"}],type:[{required:!0,message:"支付类型@0-微信,1-余额不能为空",trigger:"blur"}],money:[{required:!0,message:"支付金额不能为空",trigger:"blur"}],state:[{required:!0,message:"订单状态@0-待支付,1-已支付,2-待开柜,3-已开柜,4-已完成不能为空",trigger:"blur"}],payDate:[{required:!0,message:"支付时间不能为空",trigger:"blur"}],userId:[{required:!0,message:"用户id不能为空",trigger:"blur"}],orderNo:[{required:!0,message:"订单编号不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&r.a.wjadminpaymenthistory.info(a.dataForm.id).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.remarks=t.data.remarks,a.dataForm.versionNo=t.data.versionNo,a.dataForm.createBy=t.data.createBy,a.dataForm.createTime=t.data.createTime,a.dataForm.updateBy=t.data.updateBy,a.dataForm.updateTime=t.data.updateTime,a.dataForm.deleteFlag=t.data.deleteFlag,a.dataForm.sort=t.data.sort,a.dataForm.title=t.data.title,a.dataForm.type=t.data.type,a.dataForm.money=t.data.money,a.dataForm.state=t.data.state,a.dataForm.payDate=t.data.payDate,a.dataForm.userId=t.data.userId,a.dataForm.orderNo=t.data.orderNo)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t={id:e.dataForm.id||void 0,remarks:e.dataForm.remarks,versionNo:e.dataForm.versionNo,createBy:e.dataForm.createBy,createTime:e.dataForm.createTime,updateBy:e.dataForm.updateBy,updateTime:e.dataForm.updateTime,deleteFlag:e.dataForm.deleteFlag,sort:e.dataForm.sort,title:e.dataForm.title,type:e.dataForm.type,money:e.dataForm.money,state:e.dataForm.state,payDate:e.dataForm.payDate,userId:e.dataForm.userId,orderNo:e.dataForm.orderNo};(e.dataForm.id?r.a.wjadminpaymenthistory.update(t):r.a.wjadminpaymenthistory.add(t)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[t("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remarks,callback:function(a){e.$set(e.dataForm,"remarks",a)},expression:"dataForm.remarks"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"版本号",prop:"versionNo"}},[t("el-input",{attrs:{placeholder:"版本号"},model:{value:e.dataForm.versionNo,callback:function(a){e.$set(e.dataForm,"versionNo",a)},expression:"dataForm.versionNo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建人id",prop:"createBy"}},[t("el-input",{attrs:{placeholder:"创建人id"},model:{value:e.dataForm.createBy,callback:function(a){e.$set(e.dataForm,"createBy",a)},expression:"dataForm.createBy"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"创建时间",type:"date"},model:{value:e.dataForm.createTime,callback:function(a){e.$set(e.dataForm,"createTime",a)},expression:"dataForm.createTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修改人id",prop:"updateBy"}},[t("el-input",{attrs:{placeholder:"修改人id"},model:{value:e.dataForm.updateBy,callback:function(a){e.$set(e.dataForm,"updateBy",a)},expression:"dataForm.updateBy"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修改时间",prop:"updateTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"修改时间",type:"date"},model:{value:e.dataForm.updateTime,callback:function(a){e.$set(e.dataForm,"updateTime",a)},expression:"dataForm.updateTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用",prop:"deleteFlag"}},[t("el-input",{attrs:{placeholder:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用"},model:{value:e.dataForm.deleteFlag,callback:function(a){e.$set(e.dataForm,"deleteFlag",a)},expression:"dataForm.deleteFlag"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"sort"}},[t("el-input",{attrs:{placeholder:"排序"},model:{value:e.dataForm.sort,callback:function(a){e.$set(e.dataForm,"sort",a)},expression:"dataForm.sort"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付标题@0-订单支付,1-余额充值",prop:"title"}},[t("el-input",{attrs:{placeholder:"支付标题@0-订单支付,1-余额充值"},model:{value:e.dataForm.title,callback:function(a){e.$set(e.dataForm,"title",a)},expression:"dataForm.title"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付类型@0-微信,1-余额",prop:"type"}},[t("el-input",{attrs:{placeholder:"支付类型@0-微信,1-余额"},model:{value:e.dataForm.type,callback:function(a){e.$set(e.dataForm,"type",a)},expression:"dataForm.type"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付金额",prop:"money"}},[t("el-input",{attrs:{placeholder:"支付金额"},model:{value:e.dataForm.money,callback:function(a){e.$set(e.dataForm,"money",a)},expression:"dataForm.money"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"订单状态@0-待支付,1-已支付,2-待开柜,3-已开柜,4-已完成",prop:"state"}},[t("el-input",{attrs:{placeholder:"订单状态@0-待支付,1-已支付,2-待开柜,3-已开柜,4-已完成"},model:{value:e.dataForm.state,callback:function(a){e.$set(e.dataForm,"state",a)},expression:"dataForm.state"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付时间",prop:"payDate"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"支付时间",type:"date"},model:{value:e.dataForm.payDate,callback:function(a){e.$set(e.dataForm,"payDate",a)},expression:"dataForm.payDate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户id",prop:"userId"}},[t("el-input",{attrs:{placeholder:"用户id"},model:{value:e.dataForm.userId,callback:function(a){e.$set(e.dataForm,"userId",a)},expression:"dataForm.userId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"订单编号",prop:"orderNo"}},[t("el-input",{attrs:{placeholder:"订单编号"},model:{value:e.dataForm.orderNo,callback:function(a){e.$set(e.dataForm,"orderNo",a)},expression:"dataForm.orderNo"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=t("VU/8")(o,d,!1,null,null,null);a.default=l.exports}});