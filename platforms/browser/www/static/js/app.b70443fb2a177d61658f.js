webpackJsonp([1],{"7Otq":function(t,e,r){t.exports=r.p+"static/img/logo.6425669.png"},"8NHE":function(t,e,r){t.exports=r.p+"static/img/G3.c6e7af9.jpg"},"9+zS":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),s=r("j5iW"),o=r("8OAG"),a=(r("wj+B"),r("VC+z"),r("VXnA"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("f7-block",{staticClass:"center"},[e("img",{staticClass:"img-100",attrs:{src:r("8NHE")}})])],1)},staticRenderFns:[]});var i=r("VU/8")({name:"Footer"},a,!1,function(t){r("xGaJ")},"data-v-789ef1b0",null).exports,c={name:"LoginPage",components:{Footer:i},data:function(){return{}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-block",[n("div",{staticClass:"center"},[n("img",{attrs:{src:r("7Otq")}})]),t._v(" "),n("f7-list",[n("f7-list-item",[n("f7-label",[t._v("Matrícula del vehículo")]),t._v(" "),n("f7-input",{attrs:{type:"text"}})],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("Contraseña")]),t._v(" "),n("f7-input",{attrs:{type:"password"}})],1)],1),t._v(" "),n("f7-list-item",{attrs:{id:"submit-btn"}},[n("f7-button",{attrs:{href:"/check-page"}},[t._v("Entrar en Gescotrans")])],1)],1),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var l=r("VU/8")(c,d,!1,function(t){r("g2dU")},"data-v-68851e96",null).exports,u={name:"CheckPage",components:{Footer:i},data:function(){return{}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-block",[e("f7-list-item",[e("f7-button",{attrs:{href:"/orders-page/start"}},[this._v("Comenzar orden")])],1),this._v(" "),e("f7-list-item",[e("f7-button",{attrs:{href:"/orders-page/terminate"}},[this._v("Finalizar orden")])],1),this._v(" "),e("f7-list-item",[e("f7-button",[this._v("Llegada a base")])],1)],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var p=r("VU/8")(u,f,!1,function(t){r("NiTQ")},"data-v-51100e75",null).exports,v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("f7-list-item",{class:{active:t.isSelected},on:{click:function(e){t.orderSelect(t.order.code,e)}}},[r("f7-row",{attrs:{"no-gap":""}},[r("f7-col",{attrs:{width:"20"}},[t._v(t._s(t.order.code))]),t._v(" "),r("f7-col",{attrs:{width:"60"}},[t._v(t._s(t.order.description))]),t._v(" "),r("f7-col",{attrs:{width:"20"}},[t._v(t._s(t.order.status))])],1)],1)},staticRenderFns:[]};var m={name:"OrdersList",components:{OrderItem:r("VU/8")({name:"Order",props:["order"],data:function(){return{isSelected:!1}},methods:{orderSelect:function(t,e){this.isSelected=!this.isSelected,this.$parent.$emit("order-selected",t)}}},v,!1,function(t){r("9+zS")},"data-v-caa605e4",null).exports},props:["orders"],data:function(){return{}},methods:{}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("f7-row",{attrs:{"no-gap":""}},[r("f7-col",{attrs:{width:"20"}},[r("h3",[t._v("Orden")])]),t._v(" "),r("f7-col",{attrs:{width:"60"}},[r("h3",[t._v("Descripción")])]),t._v(" "),r("f7-col",{attrs:{width:"20"}},[r("h3",[t._v("Estado")])])],1),t._v(" "),t._l(t.orders,function(t,e){return r("order-item",{key:t.code,class:e%2==0?"dark":"light",attrs:{order:t}})})],2)},staticRenderFns:[]};var _={name:"OrdersPage",components:{OrdersList:r("VU/8")(m,h,!1,function(t){r("qNxM")},"data-v-358242f8",null).exports,FooterArea:i},props:["action"],data:function(){return{selected:"",orders:[{code:"12345",description:"Lorem ipsum amet sicut dolor",status:"Espera"},{code:"12346",description:"Lorem ipsum amet sicut dolor",status:"Espera"},{code:"12347",description:"Lorem ipsum amet sicut dolor",status:"Espera"},{code:"12348",description:"Lorem ipsum amet sicut dolor",status:"Espera"},{code:"12349",description:"Lorem ipsum amet sicut dolor",status:"Espera"}]}},methods:{handleSelected:function(t){console.log(t)}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("f7-page",[r("f7-navbar",{attrs:{title:"","back-link":"Volver"}}),t._v(" "),r("f7-block",[r("h3",{staticClass:"center"},[t._v("Orden Check\n            "),"start"===t.action?r("span",[t._v("IN (comenzar)")]):r("span",[t._v("OUT (terminar)")])]),t._v(" "),r("hr"),t._v(" "),r("orders-list",{attrs:{orders:t.orders},on:{"order-selected":t.handleSelected}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("f7-button",[t._v("Confirmar")])],1),t._v(" "),r("footer-area")],1)},staticRenderFns:[]};var b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Not found","back-link":"Back"}}),this._v(" "),e("f7-block",{attrs:{strong:""}},[e("p",[this._v("Sorry")]),this._v(" "),e("p",[this._v("Requested content not found.")])])],1)},staticRenderFns:[]},k=[{path:"/",component:l},{path:"/check-page",component:p},{path:"/orders-page/:action",component:r("VU/8")(_,g,!1,function(t){r("dIO0")},"data-v-5f8bfd41",null).exports,props:!0},{path:"(.*)",component:r("VU/8")({},b,!1,null,null,null).exports}],w={name:"App",methods:{handleBackButton:function(){return document.querySelector(".panel-left.panel-active")?this.$f7.panel.close():document.querySelector(".modal-in")?this.$f7.popover.close():this.$f7.views.main.router.history.length>1?this.$f7.views.main.router.back():window.navigator.app.exitApp()}},computed:{isiOS:function(){return window.isiOS}},created:function(){document.addEventListener("backbutton",this.handleBackButton)}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("f7-statusbar"),this._v(" "),e("f7-view",{attrs:{id:"main-view",url:"/",main:""}})],1)},staticRenderFns:[]},x=r("VU/8")(w,E,!1,null,null,null).exports;n.a.use(o.a,s.a);new n.a({el:"#app",template:"<app/>",framework7:{id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:k},components:{app:x}})},NiTQ:function(t,e){},"VC+z":function(t,e){},VXnA:function(t,e){},dIO0:function(t,e){},g2dU:function(t,e){},qNxM:function(t,e){},"wj+B":function(t,e){},xGaJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b70443fb2a177d61658f.js.map