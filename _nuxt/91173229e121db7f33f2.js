(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(t,e,n){var content=n(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("25aece0b",content,!0,{sourceMap:!1})},333:function(t,e,n){var map={"./backgnd_1.jpg":334,"./backgnd_2.jpg":335,"./backgnd_3.jpg":336,"./backgnd_4.jpg":337,"./backgnd_5.jpg":338,"./backgnd_6.jpg":339};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=333},334:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},335:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},336:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},337:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},338:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},339:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},340:function(t,e,n){"use strict";var o=n(332);n.n(o).a},341:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-parallax__image[data-v-5b3c6020]{transform:none!important;width:100%!important}",""]),t.exports=e},342:function(t,e,n){var content=n(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0cd63bd9",content,!0,{sourceMap:!1})},343:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},344:function(t,e,n){"use strict";var o={name:"CoverImage",props:["backgroundImage","page","title","title2","subTitle"],data:function(){return{scrollOpacity:1}},methods:{onScroll:function(){var t=1-(window.top.scrollY||document.documentElement.scrollTop||window.pageYOffset)/600;t=(t=t>1?1:t)<0?0:t,this.scrollOpacity=t},navigateTo:function(path){this.$router.push(path)}}},r=(n(340),n(36)),l=n(44),c=n.n(l),f=n(153),h=n(326),d=n(327),v=n(141),m=n(350),w=n(329),x=n(150),_=n.n(x),y=n(89),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-parallax",{attrs:{src:n(333)("./"+t.backgroundImage),height:"550",alt:"Travelfreak Vacations"}},[o("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{"fill-height":""}},[o("v-row",[o("v-col",[o("transition",{attrs:{appear:"",name:"slide-fade"}},[o("v-overlay",{class:null!=t.page?"align-items-center justify-content-center":"justify-start",style:"position:relative; opacity:"+t.scrollOpacity+";",attrs:{color:"rgba(f, f, f, 1)"}},[null!=t.page?o("p",{staticStyle:{"word-spacing":"20px"}},[o("v-btn",{attrs:{text:""},on:{click:function(e){return t.navigateTo("/")}}},[t._v("HOME")]),t._v("\n              > "+t._s(t.page.toUpperCase())+"\n            ")],1):t._e(),t._v(" "),o("h1",[o("strong",[t._v(t._s(t.title))]),t._v(" "),o("p",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.title2))])]),t._v(" "),o("h3",[t._v(t._s(t.subTitle))]),t._v(" "),o("br"),t._v(" "),o("br")])],1)],1)],1)],1)],1)}),[],!1,null,"5b3c6020",null);e.a=component.exports;c()(component,{VBtn:f.a,VCol:h.a,VContainer:d.a,VOverlay:v.a,VParallax:m.a,VRow:w.a}),_()(component,{Scroll:y.b})},348:function(t,e,n){"use strict";n(147);var o=n(148);e.a=Object(o.a)("flex")},349:function(t,e,n){"use strict";n(147);var o=n(148);e.a=Object(o.a)("layout")},350:function(t,e,n){"use strict";n(13),n(342);var o=n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(6),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},387:function(t,e,n){t.exports=n.p+"img/580e948.png"},444:function(t,e,n){"use strict";n.r(e);var o={name:"Affiliations",head:{title:"Affiliations",link:[{rel:"canonical",href:"https://www.travelfreakvacations.com/affiliations"}],meta:[{name:"description",content:"We have a network across 7 continents. You name a destination of your choice and we will do everything for you."},{property:"og:title",content:"Affiliations - Travelfreak Vacations"},{property:"og:site_name",content:"Travelfreak Vacations"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.travelfreakvacations.com/affiliations"},{property:"og:image",content:"https://www.travelfreakvacations.com/images/tfv-logo.png"},{property:"og:description",content:"We have a network across 7 continents. You name a destination of your choice and we will do everything for you."}]},components:{CoverImage:n(344).a}},r=n(36),l=n(44),c=n.n(l),f=n(327),h=n(348),d=n(117),v=n(349),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{name:"affiliations"}},[e("CoverImage",{attrs:{page:"Affiliations",backgroundImage:"backgnd_3.jpg",title:"Our Affiliations"}}),this._v(" "),e("v-container",[e("br"),this._v(" "),e("br"),this._v(" "),e("v-layout",{staticClass:"ma-2",attrs:{row:"",wrap:""}},[e("v-flex",[e("v-img",{attrs:{src:n(387),alt:"Our Affiliations"}})],1)],1)],1),this._v(" "),e("br"),this._v(" "),e("br")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:f.a,VFlex:h.a,VImg:d.a,VLayout:v.a})}}]);