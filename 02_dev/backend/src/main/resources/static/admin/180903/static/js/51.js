webpackJsonp([51],{"8HvM":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),o=a("OHGg"),i=a("gyMJ"),r=a("NYxO"),l={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:o.default},methods:n()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},updatePasswordHandle:function(){var t=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){t.$refs.updatePassowrd.init()})},logoutHandle:function(){var t=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.common.logout().then(function(e){var a=e.data;a&&0===a.code&&(t.DELETE_CONTENT_TABS([]),t.$cookie.delete("token"),t.$router.replace({name:"login"}))})})}},Object(r.b)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"site-topbar"},[s("div",{staticClass:"site-topbar__header"},[s("h1",{staticClass:"site-logo",on:{click:function(e){t.$router.push({name:"home"})}}},[s("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[t._v("SZT 管理系统")]),t._v(" "),s("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[t._v("SZT")])])]),t._v(" "),s("div",{staticClass:"site-topbar__body clearfix"},[s("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[s("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(e){t.switchSidebarCollapseHandle()}}},[s("icon-svg",{attrs:{name:"zhedie"}})],1)],1),t._v(" "),s("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[s("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[s("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[s("span",{staticClass:"el-dropdown-link"},[s("img",{attrs:{src:a("zQrT"),alt:t.$store.state.user.name}}),t._v("\n            "+t._s(t.$store.state.user.name)+"\n          ")]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(e){t.updatePasswordHandle()}}},[t._v("修改密码")]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){t.logoutHandle()}}},[t._v("退出")])],1)],1)],1)],1)],1),t._v(" "),t.updatePassowrdVisible?s("update-password",{ref:"updatePassowrd"}):t._e()],1)},staticRenderFns:[]},d=a("VU/8")(l,c,!1,null,null,null);e.default=d.exports},zQrT:function(t,e,a){t.exports=a.p+"static/img/avatar.c58e465.png"}});