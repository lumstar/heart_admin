webpackJsonp([13],{1007:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-setting"}),t._v(" 用户管理")])],1)],1),t._v(" "),a("el-dialog",{staticStyle:{width:"130%","margin-left":"-15%"},attrs:{title:"测试记录",visible:t.dialogRecordVisible},on:{"update:visible":function(e){t.dialogRecordVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.recordTableData}},[a("el-table-column",{attrs:{label:"#",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.$index+1)+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"user_name",label:"用户名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{property:"test_name",label:"测试标题",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{property:"test_date",label:"测试时间",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{label:"测试结果",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.test_result.substring(0,80))+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"95",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){t.changeRecordState(e.row.record_id)}}},[t._v("修改状态")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"ms-doc"},[a("div",{staticClass:"table"},[a("div",{staticClass:"handle-box mb15 clearfix"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"view"},on:{click:t.changeUsersState}},[t._v("查看测试记录")]),t._v(" "),a("el-button",{staticClass:"right",attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-input",{staticClass:"handle-input mr10 right",staticStyle:{width:"200px"},attrs:{placeholder:"筛选关键词"},model:{value:t.searchAccount,callback:function(e){t.searchAccount=e},expression:"searchAccount"}})],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.userTableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"user_id",label:"ID",sortable:"",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"账号",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"性别",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s("0"==e.row.sex?"男":"女"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"birthday",label:"生日",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"signature",label:"个性签名",width:"430"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){t.checkRecords(e.$index,e.row)}}},[t._v("查看测试记录")])]}}])})],1),t._v(" "),t.total>10?a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1):t._e()],1)])],1)},staticRenderFns:[]}},1031:function(t,e,a){var r=a(710);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(197)("1ae18eb4",r,!0)},528:function(t,e,a){a(1031);var r=a(198)(a(616),a(1007),"data-v-302ad736",null);t.exports=r.exports},616:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"user",data:function(){return{url:"./static/vuetable.json",userTableData:[],recordTableData:[],currentPage:1,multipleSelection:[],select_cate:"",searchAccount:"",del_list:[],is_search:!1,dialogRecordVisible:!1,total:""}},created:function(){this.getData()},computed:{},methods:{handleCurrentChange:function(t){this.currentPage=t,this.getData()},getData:function(){var t=this;t.$axios.post("/mapis/user/getUsers",{page:t.currentPage}).then(function(e){t.userTableData=e.data.list,t.total=e.data.total})},search:function(){var t=this;t.searchAccount?t.$axios.post("/mapis/user/searchUser",{keyWord:t.searchAccount}).then(function(e){t.userTableData=e.data.list,t.total=e.data.total,t.searchAccount=""}):this.$message("请输入要搜索的内容")},checkRecords:function(t,e){var a=this;a.$axios.post("/mapis/record/getUserRecordsByUserId",{ids:[e.user_id]}).then(function(t){t.data.state&&(a.recordTableData=t.data.list,a.dialogRecordVisible=!0)})},changeUsersState:function(){var t=this,e=[];if(t.multipleSelection.length<=0)return void t.$message.error("请至少选择一位用户");e=t.multipleSelection.map(function(t){return t.user_id}),t.$refs.multipleTable.clearSelection(),t.$axios.post("/mapis/record/getUserRecordsByUserId",{ids:e}).then(function(e){e.data.state&&(t.recordTableData=e.data.list,t.dialogRecordVisible=!0)})},handleSelectionChange:function(t){this.multipleSelection=t},changeRecordState:function(t){var e=this,a=this;a.$axios.post("/mapis/record/changeRecordStatus",{recordId:t}).then(function(t){t.data.state?e.$message("状态已修改"):a.$message.error("状态修改失败")})}}}},710:function(t,e,a){e=t.exports=a(87)(!1),e.push([t.i,".ms-doc[data-v-302ad736]{width:100%;max-width:1500px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif}.ms-doc h3[data-v-302ad736]{padding:9px 10px 10px;margin:0;font-size:14px;line-height:17px;background-color:#f5f5f5;border:1px solid #d8d8d8;border-bottom:0;border-radius:3px 3px 0 0}.ms-doc article[data-v-302ad736]{padding:45px;word-wrap:break-word;background-color:#fff;border:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.ms-doc article h1[data-v-302ad736]{font-size:32px;padding-bottom:10px;margin-bottom:15px;border-bottom:1px solid #ddd}.ms-doc article h2[data-v-302ad736]{margin:24px 0 16px;font-weight:600;line-height:1.25;padding-bottom:7px;font-size:24px;border-bottom:1px solid #eee}.ms-doc article p[data-v-302ad736]{margin-bottom:15px;line-height:1.5}.ms-doc article .el-checkbox[data-v-302ad736]{margin-bottom:5px}",""])}});