webpackJsonp([79],{NyH5:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("gyMJ"),d={data:function(){return{busConfig:this.busConfig,sysurl:window.SITE_CONFIG.baseUrl,visible:!1,dataForm:{id:0,remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:"",orderNo:"",userId:"",address:"",detailedAddress:"",orderMoney:"",couponId:"",payType:""},dataRule:{remarks:[{required:!0,message:"备注不能为空",trigger:"blur"}],versionNo:[{required:!0,message:"版本号不能为空",trigger:"blur"}],createBy:[{required:!0,message:"创建人id不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],updateBy:[{required:!0,message:"修改人id不能为空",trigger:"blur"}],updateTime:[{required:!0,message:"修改时间不能为空",trigger:"blur"}],deleteFlag:[{required:!0,message:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}],orderNo:[{required:!0,message:"订单编号不能为空",trigger:"blur"}],userId:[{required:!0,message:"用户id不能为空",trigger:"blur"}],address:[{required:!0,message:"收货地址不能为空",trigger:"blur"}],detailedAddress:[{required:!0,message:"详情地址不能为空",trigger:"blur"}],orderMoney:[{required:!0,message:"订单金额不能为空",trigger:"blur"}],couponId:[{required:!0,message:"优惠卷id不能为空",trigger:"blur"}],payType:[{required:!0,message:"支付方式不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&t.a.wjadminorder.info(a.dataForm.id).then(function(e){var r=e.data;r&&0===r.code&&(a.dataForm.remarks=r.data.remarks,a.dataForm.versionNo=r.data.versionNo,a.dataForm.createBy=r.data.createBy,a.dataForm.createTime=r.data.createTime,a.dataForm.updateBy=r.data.updateBy,a.dataForm.updateTime=r.data.updateTime,a.dataForm.deleteFlag=r.data.deleteFlag,a.dataForm.sort=r.data.sort,a.dataForm.orderNo=r.data.orderNo,a.dataForm.userId=r.data.userId,a.dataForm.address=r.data.address,a.dataForm.detailedAddress=r.data.detailedAddress,a.dataForm.orderMoney=r.data.orderMoney,a.dataForm.couponId=r.data.couponId,a.dataForm.payType=r.data.payType)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var r={id:e.dataForm.id||void 0,remarks:e.dataForm.remarks,versionNo:e.dataForm.versionNo,createBy:e.dataForm.createBy,createTime:e.dataForm.createTime,updateBy:e.dataForm.updateBy,updateTime:e.dataForm.updateTime,deleteFlag:e.dataForm.deleteFlag,sort:e.dataForm.sort,orderNo:e.dataForm.orderNo,userId:e.dataForm.userId,address:e.dataForm.address,detailedAddress:e.dataForm.detailedAddress,orderMoney:e.dataForm.orderMoney,couponId:e.dataForm.couponId,payType:e.dataForm.payType};(e.dataForm.id?t.a.wjadminorder.update(r):t.a.wjadminorder.add(r)).then(function(a){var r=a.data;r&&0===r.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.msg)})}})}}},o={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remarks,callback:function(a){e.$set(e.dataForm,"remarks",a)},expression:"dataForm.remarks"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"版本号",prop:"versionNo"}},[r("el-input",{attrs:{placeholder:"版本号"},model:{value:e.dataForm.versionNo,callback:function(a){e.$set(e.dataForm,"versionNo",a)},expression:"dataForm.versionNo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建人id",prop:"createBy"}},[r("el-input",{attrs:{placeholder:"创建人id"},model:{value:e.dataForm.createBy,callback:function(a){e.$set(e.dataForm,"createBy",a)},expression:"dataForm.createBy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"创建时间",type:"date"},model:{value:e.dataForm.createTime,callback:function(a){e.$set(e.dataForm,"createTime",a)},expression:"dataForm.createTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"修改人id",prop:"updateBy"}},[r("el-input",{attrs:{placeholder:"修改人id"},model:{value:e.dataForm.updateBy,callback:function(a){e.$set(e.dataForm,"updateBy",a)},expression:"dataForm.updateBy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"修改时间",prop:"updateTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"修改时间",type:"date"},model:{value:e.dataForm.updateTime,callback:function(a){e.$set(e.dataForm,"updateTime",a)},expression:"dataForm.updateTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用",prop:"deleteFlag"}},[r("el-input",{attrs:{placeholder:"逻辑删除@0-存在,1-隐藏,2-删除,3-停用"},model:{value:e.dataForm.deleteFlag,callback:function(a){e.$set(e.dataForm,"deleteFlag",a)},expression:"dataForm.deleteFlag"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input",{attrs:{placeholder:"排序"},model:{value:e.dataForm.sort,callback:function(a){e.$set(e.dataForm,"sort",a)},expression:"dataForm.sort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单编号",prop:"orderNo"}},[r("el-input",{attrs:{placeholder:"订单编号"},model:{value:e.dataForm.orderNo,callback:function(a){e.$set(e.dataForm,"orderNo",a)},expression:"dataForm.orderNo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户id",prop:"userId"}},[r("el-input",{attrs:{placeholder:"用户id"},model:{value:e.dataForm.userId,callback:function(a){e.$set(e.dataForm,"userId",a)},expression:"dataForm.userId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货地址",prop:"address"}},[r("el-input",{attrs:{placeholder:"收货地址"},model:{value:e.dataForm.address,callback:function(a){e.$set(e.dataForm,"address",a)},expression:"dataForm.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"详情地址",prop:"detailedAddress"}},[r("el-input",{attrs:{placeholder:"详情地址"},model:{value:e.dataForm.detailedAddress,callback:function(a){e.$set(e.dataForm,"detailedAddress",a)},expression:"dataForm.detailedAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单金额",prop:"orderMoney"}},[r("el-input",{attrs:{placeholder:"订单金额"},model:{value:e.dataForm.orderMoney,callback:function(a){e.$set(e.dataForm,"orderMoney",a)},expression:"dataForm.orderMoney"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"优惠卷id",prop:"couponId"}},[r("el-input",{attrs:{placeholder:"优惠卷id"},model:{value:e.dataForm.couponId,callback:function(a){e.$set(e.dataForm,"couponId",a)},expression:"dataForm.couponId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支付方式",prop:"payType"}},[r("el-input",{attrs:{placeholder:"支付方式"},model:{value:e.dataForm.payType,callback:function(a){e.$set(e.dataForm,"payType",a)},expression:"dataForm.payType"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},s=r("VU/8")(d,o,!1,null,null,null);a.default=s.exports}});