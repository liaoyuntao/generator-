webpackJsonp([23],{GNpY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("GtTZ"),i=a("nDrS"),o={components:{seek:n.a,tablefield:i.a},data:function(){return{model:"sys",pathUrl:"syslog",busConfig:this.busConfig,tableFieldMap:this.tableFieldMap,sysurl:window.SITE_CONFIG.baseUrl,dataForm:{},dataListSelections:[],operation:[],saveForm:{id:0,username:"",operation:"",method:"",params:"",time:"",ip:"",remarks:"",versionNo:"",createBy:"",createTime:"",updateBy:"",updateTime:"",deleteFlag:"",sort:""}}},activated:function(){this.getDataList()},methods:{addOrUpdateHandle:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.addOrUpdateHandle()})},deleteHandle:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.deleteHandle()})},setListSelections:function(t){this.dataListSelections=t},getDataList:function(){var t=this;this.$nextTick(function(){t.$refs.tablefield.getDataList()})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{staticStyle:{"margin-bottom":"60px"},attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("seek",{ref:"seek",attrs:{dataForm:t.dataForm,pathUrl:t.pathUrl},on:{"update:dataForm":function(e){t.dataForm=e}}}),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth(t.model+":"+t.pathUrl+":save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth(t.model+":"+t.pathUrl+":delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("tablefield",{ref:"tablefield",attrs:{pathUrl:t.pathUrl,saveForm:t.saveForm,dataForm:t.dataForm,setListSelections:t.setListSelections,model:t.model,operation:t.operation},on:{"update:dataForm":function(e){t.dataForm=e},"update:operation":function(e){t.operation=e}}})],1)},staticRenderFns:[]},l=a("VU/8")(o,s,!1,null,null,null);e.default=l.exports}});