(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-decf65c2"],{"3d99":function(t,e,i){},"42f2":function(t,e,i){"use strict";var s=i("3d99"),r=i.n(s);r.a},6701:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},r=[],o=(i("c5f6"),i("fa7d")),c={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1},initPosition:{type:Object,default:function(){return{x:0,y:0}}}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(o["b"])(this.top)-Object(o["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){var t=this;this.refresh(),this.$nextTick((function(){setTimeout((function(){t.scrollTo(Object(o["b"])(t.initPosition.x),Object(o["b"])(t.initPosition.y))}),1)}))}},a=c,l=(i("42f2"),i("2877")),n=Object(l["a"])(a,s,r,!1,null,"26a5f1a6",null);e["a"]=n.exports},"7c59":function(t,e,i){},c470:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover-title-wrapper"},[i("div",{staticClass:"cover-title-left-wrapper"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],staticClass:"cover-img"})]),i("div",{staticClass:"cover-title-right-wrapper"},[i("div",{staticClass:"detail-cover-title-wrapper"},[i("div",{staticClass:"cover-title-text"},[t._v(t._s(t.title))])]),i("div",{staticClass:"cover-author-wrapper"},[i("div",{staticClass:"cover-author-text"},[t._v(t._s(t.author))])]),i("div",{staticClass:"detail-cover-description-wrapper"},[i("div",{staticClass:"detail-cover-description-text"},[t._v(t._s(t.desc))])])])])},r=[],o={props:{cover:String,title:String,author:String,desc:String}},c=o,a=(i("e244"),i("2877")),l=Object(a["a"])(c,s,r,!1,null,"66956a2d",null);e["a"]=l.exports},c6bd:function(t,e,i){"use strict";var s=i("7c59"),r=i.n(s);r.a},c7f8:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-title-wrapper",class:{"hide-shadow":t.ifHideShadow}},[i("div",{staticClass:"title-left-wrapper",on:{click:function(e){return t.back()}}},[i("span",{staticClass:"icon-back"})]),i("div",{staticClass:"title-right-wrapper"},[t.showShelf?i("span",{staticClass:"icon-shelf icon",on:{click:t.showBookShelf}}):i("span",{staticClass:"icon-share"})]),t.title?i("div",{staticClass:"title-text"},[t._v(t._s(t.title))]):t._e()])},r=[],o={props:{title:String,showShelf:{type:Boolean,default:!0}},data:function(){return{ifHideShadow:!0}},methods:{showBookShelf:function(){this.$router.push("/store/shelf")},showShadow:function(){this.ifHideShadow=!1},hideShadow:function(){this.ifHideShadow=!0},back:function(){this.$router.go(-1)}}},c=o,a=(i("c6bd"),i("2877")),l=Object(a["a"])(c,s,r,!1,null,"04fce4c4",null);e["a"]=l.exports},ca52:function(t,e,i){},e244:function(t,e,i){"use strict";var s=i("ca52"),r=i.n(s);r.a}}]);
//# sourceMappingURL=chunk-decf65c2.e648ae5d.js.map