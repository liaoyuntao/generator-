webpackJsonp([122],{aqiG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gyMJ"),i=n("GtTZ"),o=n("nDrS"),s={components:{seek:i.a,tablefield:o.a},data:function(){return{model:"generator",pathUrl:"generatortablefield",busConfig:this.busConfig,tableFieldMap:this.tableFieldMap,sysurl:window.SITE_CONFIG.baseUrl,dataForm:{},dataListSelections:[],operation:[],saveForm:{}}},activated:function(){this.getDataList()},methods:{addAllOrUpdateHandle:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.addAllOrUpdateHandle()})},init:function(t){this.dataForm.tableId=t,this.saveForm.tableId=t,this.getDataList()},getDataList:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.getDataList()})},addOrUpdateHandle:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.addOrUpdateHandle()})},deleteHandle:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.deleteHandle()})},setListSelections:function(t){this.dataListSelections=t},hideTableField:function(t){var e=this,n=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+n.join(",")+"]进行["+(t?"隐藏":"批量隐藏")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.a.generatortablefield.hideTableField(n).then(function(t){var n=t.data;n&&0===n.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(n.msg)})})},hideSetField:function(t){var e=this,n=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+n.join(",")+"]进行["+(t?"隐藏":"批量隐藏")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.a.generatortablefield.hideSetField(n).then(function(t){var n=t.data;n&&0===n.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(n.msg)})})},showSeekField:function(t){var e=this,n=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+n.join(",")+"]进行["+(t?"隐藏":"批量显示")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.a.generatortablefield.showSeekField(n).then(function(t){var n=t.data;n&&0===n.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(n.msg)})})},showExportField:function(t){var e=this,n=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+n.join(",")+"]进行["+(t?"隐藏":"批量显示")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.a.generatortablefield.showExportField(n).then(function(t){var n=t.data;n&&0===n.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(n.msg)})})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mod-config"},[n("el-form",{staticStyle:{"margin-bottom":"60px"},attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[n("seek",{ref:"seek",attrs:{dataForm:t.dataForm,pathUrl:t.pathUrl},on:{"update:dataForm":function(e){t.dataForm=e}}}),t._v(" "),n("div",{staticStyle:{float:"right"}},[n("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth(t.model+":"+t.pathUrl+":save")?n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth(t.model+":"+t.pathUrl+":save")?n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addAllOrUpdateHandle()}}},[t._v("批量新增")]):t._e(),t._v(" "),t.isAuth(t.model+":"+t.pathUrl+":delete")?n("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.hideTableField()}}},[t._v("隐藏表格字段")]),t._v(" "),n("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.hideSetField()}}},[t._v("隐藏修改字段")]),t._v(" "),n("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.showSeekField()}}},[t._v("显示搜索字段")]),t._v(" "),n("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.showExportField()}}},[t._v("显示导出字段")])],1)],1),t._v(" "),n("tablefield",{ref:"tablefield",attrs:{pathUrl:t.pathUrl,saveForm:t.saveForm,dataForm:t.dataForm,model:t.model,operation:t.operation,setListSelections:t.setListSelections},on:{"update:dataForm":function(e){t.dataForm=e},"update:operation":function(e){t.operation=e}}})],1)},staticRenderFns:[]},d=n("VU/8")(s,l,!1,null,null,null);e.default=d.exports}});