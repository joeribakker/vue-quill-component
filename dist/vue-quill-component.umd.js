!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("quill")):"function"==typeof define&&define.amd?define(["exports","quill"],e):e((t=t||self).VueQuill={},t.Quill)}(this,function(t,e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r,o=(function(t,e){var r=200,o="__lodash_hash_undefined__",i=1,u=2,a=9007199254740991,s="[object Arguments]",c="[object Array]",l="[object AsyncFunction]",f="[object Boolean]",h="[object Date]",d="[object Error]",p="[object Function]",_="[object GeneratorFunction]",v="[object Map]",y="[object Number]",b="[object Null]",g="[object Object]",j="[object Proxy]",m="[object RegExp]",w="[object Set]",O="[object String]",q="[object Symbol]",z="[object Undefined]",x="[object ArrayBuffer]",A="[object DataView]",S=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,$={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$[s]=$[c]=$[x]=$[f]=$[A]=$[h]=$[d]=$[p]=$[v]=$[y]=$[g]=$[m]=$[w]=$[O]=$["[object WeakMap]"]=!1;var E="object"==typeof n&&n&&n.Object===Object&&n,T="object"==typeof self&&self&&self.Object===Object&&self,R=E||T||Function("return this")(),k=e&&!e.nodeType&&e,I=k&&t&&!t.nodeType&&t,F=I&&I.exports===k,P=F&&E.process,V=function(){try{return P&&P.binding&&P.binding("util")}catch(t){}}(),U=V&&V.isTypedArray;function M(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function B(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function N(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var L,W,D,Q=Array.prototype,X=Function.prototype,G=Object.prototype,H=R["__core-js_shared__"],J=X.toString,K=G.hasOwnProperty,Y=(L=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",Z=G.toString,tt=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=F?R.Buffer:void 0,nt=R.Symbol,rt=R.Uint8Array,ot=G.propertyIsEnumerable,it=Q.splice,ut=nt?nt.toStringTag:void 0,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ct=(W=Object.keys,D=Object,function(t){return W(D(t))}),lt=Vt(R,"DataView"),ft=Vt(R,"Map"),ht=Vt(R,"Promise"),dt=Vt(R,"Set"),pt=Vt(R,"WeakMap"),_t=Vt(Object,"create"),vt=Nt(lt),yt=Nt(ft),bt=Nt(ht),gt=Nt(dt),jt=Nt(pt),mt=nt?nt.prototype:void 0,wt=mt?mt.valueOf:void 0;function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new zt;++e<n;)this.add(t[e])}function At(t){var e=this.__data__=new qt(t);this.size=e.size}function St(t,e){var n=Dt(t),r=!n&&Wt(t),o=!n&&!r&&Qt(t),i=!n&&!r&&!o&&Kt(t),u=n||r||o||i,a=u?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],s=a.length;for(var c in t)!e&&!K.call(t,c)||u&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Bt(c,s))||a.push(c);return a}function Ct(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1}function $t(t){return null==t?void 0===t?z:b:ut&&ut in Object(t)?function(t){var e=K.call(t,ut),n=t[ut];try{t[ut]=void 0;var r=!0}catch(t){}var o=Z.call(t);r&&(e?t[ut]=n:delete t[ut]);return o}(t):function(t){return Z.call(t)}(t)}function Et(t){return Jt(t)&&$t(t)==s}function Tt(t,e,n,r,o){return t===e||(null==t||null==e||!Jt(t)&&!Jt(e)?t!=t&&e!=e:function(t,e,n,r,o,a){var l=Dt(t),p=Dt(e),_=l?c:Mt(t),b=p?c:Mt(e),j=(_=_==s?g:_)==g,z=(b=b==s?g:b)==g,S=_==b;if(S&&Qt(t)){if(!Qt(e))return!1;l=!0,j=!1}if(S&&!j)return a||(a=new At),l||Kt(t)?It(t,e,n,r,o,a):function(t,e,n,r,o,a,s){switch(n){case A:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case x:return!(t.byteLength!=e.byteLength||!a(new rt(t),new rt(e)));case f:case h:case y:return Lt(+t,+e);case d:return t.name==e.name&&t.message==e.message;case m:case O:return t==e+"";case v:var c=B;case w:var l=r&i;if(c||(c=N),t.size!=e.size&&!l)return!1;var p=s.get(t);if(p)return p==e;r|=u,s.set(t,e);var _=It(c(t),c(e),r,o,a,s);return s.delete(t),_;case q:if(wt)return wt.call(t)==wt.call(e)}return!1}(t,e,_,n,r,o,a);if(!(n&i)){var C=j&&K.call(t,"__wrapped__"),$=z&&K.call(e,"__wrapped__");if(C||$){var E=C?t.value():t,T=$?e.value():e;return a||(a=new At),o(E,T,n,r,a)}}if(!S)return!1;return a||(a=new At),function(t,e,n,r,o,u){var a=n&i,s=Ft(t),c=s.length,l=Ft(e).length;if(c!=l&&!a)return!1;for(var f=c;f--;){var h=s[f];if(!(a?h in e:K.call(e,h)))return!1}var d=u.get(t);if(d&&u.get(e))return d==e;var p=!0;u.set(t,e),u.set(e,t);for(var _=a;++f<c;){h=s[f];var v=t[h],y=e[h];if(r)var b=a?r(y,v,h,e,t,u):r(v,y,h,t,e,u);if(!(void 0===b?v===y||o(v,y,n,r,u):b)){p=!1;break}_||(_="constructor"==h)}if(p&&!_){var g=t.constructor,j=e.constructor;g!=j&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j)&&(p=!1)}return u.delete(t),u.delete(e),p}(t,e,n,r,o,a)}(t,e,n,r,Tt,o))}function Rt(t){return!(!Ht(t)||(e=t,Y&&Y in e))&&(Xt(t)?tt:S).test(Nt(t));var e}function kt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||G,e!==r)return ct(t);var e,n,r,o=[];for(var i in Object(t))K.call(t,i)&&"constructor"!=i&&o.push(i);return o}function It(t,e,n,r,o,a){var s=n&i,c=t.length,l=e.length;if(c!=l&&!(s&&l>c))return!1;var f=a.get(t);if(f&&a.get(e))return f==e;var h=-1,d=!0,p=n&u?new xt:void 0;for(a.set(t,e),a.set(e,t);++h<c;){var _=t[h],v=e[h];if(r)var y=s?r(v,_,h,e,t,a):r(_,v,h,t,e,a);if(void 0!==y){if(y)continue;d=!1;break}if(p){if(!M(e,function(t,e){if(i=e,!p.has(i)&&(_===t||o(_,t,n,r,a)))return p.push(e);var i})){d=!1;break}}else if(_!==v&&!o(_,v,n,r,a)){d=!1;break}}return a.delete(t),a.delete(e),d}function Ft(t){return function(t,e,n){var r=e(t);return Dt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Yt,Ut)}function Pt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Vt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(n)?n:void 0}Ot.prototype.clear=function(){this.__data__=_t?_t(null):{},this.size=0},Ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ot.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===o?void 0:n}return K.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:K.call(e,t)},Ot.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=_t&&void 0===e?o:e,this},qt.prototype.clear=function(){this.__data__=[],this.size=0},qt.prototype.delete=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0||(n==e.length-1?e.pop():it.call(e,n,1),--this.size,0))},qt.prototype.get=function(t){var e=this.__data__,n=Ct(e,t);return n<0?void 0:e[n][1]},qt.prototype.has=function(t){return Ct(this.__data__,t)>-1},qt.prototype.set=function(t,e){var n=this.__data__,r=Ct(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},zt.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(ft||qt),string:new Ot}},zt.prototype.delete=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},zt.prototype.get=function(t){return Pt(this,t).get(t)},zt.prototype.has=function(t){return Pt(this,t).has(t)},zt.prototype.set=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},xt.prototype.add=xt.prototype.push=function(t){return this.__data__.set(t,o),this},xt.prototype.has=function(t){return this.__data__.has(t)},At.prototype.clear=function(){this.__data__=new qt,this.size=0},At.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},At.prototype.get=function(t){return this.__data__.get(t)},At.prototype.has=function(t){return this.__data__.has(t)},At.prototype.set=function(t,e){var n=this.__data__;if(n instanceof qt){var o=n.__data__;if(!ft||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new zt(o)}return n.set(t,e),this.size=n.size,this};var Ut=at?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i}(at(t),function(e){return ot.call(t,e)}))}:function(){return[]},Mt=$t;function Bt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Nt(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(lt&&Mt(new lt(new ArrayBuffer(1)))!=A||ft&&Mt(new ft)!=v||ht&&"[object Promise]"!=Mt(ht.resolve())||dt&&Mt(new dt)!=w||pt&&"[object WeakMap]"!=Mt(new pt))&&(Mt=function(t){var e=$t(t),n=e==g?t.constructor:void 0,r=n?Nt(n):"";if(r)switch(r){case vt:return A;case yt:return v;case bt:return"[object Promise]";case gt:return w;case jt:return"[object WeakMap]"}return e});var Wt=Et(function(){return arguments}())?Et:function(t){return Jt(t)&&K.call(t,"callee")&&!ot.call(t,"callee")},Dt=Array.isArray,Qt=st||function(){return!1};function Xt(t){if(!Ht(t))return!1;var e=$t(t);return e==p||e==_||e==l||e==j}function Gt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function Ht(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Jt(t){return null!=t&&"object"==typeof t}var Kt=U?function(t){return function(e){return t(e)}}(U):function(t){return Jt(t)&&Gt(t.length)&&!!$[$t(t)]};function Yt(t){return null!=(e=t)&&Gt(e.length)&&!Xt(e)?St(t):kt(t);var e}t.exports=function(t,e){return Tt(t,e)}}(r={exports:{}},r.exports),r.exports);function i(t,e){t.scroll.domNode.tabIndex=e}function u(t,e){t.enable(!e)}var a=function(t,e,n,r,o,i,u,a,s,c){"boolean"!=typeof u&&(s=a,a=u,u=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=l):e&&(l=u?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(f.functional){var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return n},s={model:{prop:"contents",event:"input"},props:{contents:{type:Object,default:function(){return{ops:[]}}},editorTabIndex:{type:Number},formats:{type:Array,default:function(){return[]}},isReadOnly:{type:Boolean,default:!1},modules:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},placeholder:{type:String},theme:{type:String}},data:function(){return{quill:void 0}},mounted:function(){var t=this;this.quill=new e(this.$refs.quillElement,Object.assign({},this.options,{theme:this.theme,placeholder:this.placeholder,formats:this.formats,modules:this.modules})),this.quill.setContents(contents),u(this.quill,this.isReadOnly),void 0!==this.editorTabIndex&&i(this.quill,this.editorTabIndex),this.quill.on("editor-change",function(e){for(var n,r,o=[],i=arguments.length-1;i-- >0;)o[i]=arguments[i+1];"text-change"===e&&(n=t).onEditorTextChange.apply(n,o),"selection-change"===e&&(r=t).onEditorSelectionChange.apply(r,o)})},methods:{onEditorTextChange:function(t,e,n){this.$emit("input",this.quill.getContents()),this.$emit("changeContent",t,this.quill.getContents(),e,n,this.quill)},onEditorSelectionChange:function(t,e,n){t&&!e&&this.$emit("focus",t,n,this.quill),!t&&e&&this.$emit("blur",e,n,this.quill),this.$emit("changeSelection",t,e,n,this.quill)},focus:function(){this.quill&&this.quill.focus()},blur:function(){this.quill&&this.quill.blur()}},watch:{contents:function(t){var e,n;!this.quill||(e=t,n=this.quill.getContents(),e.ops&&n.ops?o(e.ops,n.ops):o(e,nextValue))||this.quill.setContents(t)},editorTabIndex:function(t){i(this.quill,t)},isReadOnly:function(t){u(this.quill,t)}}},c=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"quillElement"})};c._withStripped=!0;var l=a({render:c,staticRenderFns:[]},void 0,s,void 0,!1,void 0,void 0,void 0);function f(t){f.installed||(f.installed=!0,t.component("VueQuill",l))}var h={install:f},d=null;"undefined"!=typeof window?d=window.Vue:"undefined"!=typeof global&&(d=global.Vue),d&&d.use(h),t.install=f,t.default=l,Object.defineProperty(t,"__esModule",{value:!0})});
