(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5555bcbb"],{1148:function(e,t,r){"use strict";var n=r("a691"),i=r("577e"),o=r("1d80");e.exports=function(e){var t=i(o(this)),r="",a=n(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t);return r}},"22de":function(e,t,r){"use strict";r("8319")},2532:function(e,t,r){"use strict";var n=r("23e7"),i=r("5a34"),o=r("1d80"),a=r("577e"),c=r("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~a(o(this)).indexOf(a(i(e)),arguments.length>1?arguments[1]:void 0)}})},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,r){var n=r("861d"),i=r("c6b6"),o=r("b622"),a=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},8319:function(e,t,r){},ab13:function(e,t,r){var n=r("b622"),i=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,"/./"[e](t)}catch(n){}}return!1}},b680:function(e,t,r){"use strict";var n=r("23e7"),i=r("a691"),o=r("408a"),a=r("1148"),c=r("d039"),u=1..toFixed,s=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},m=function(e,t,r){var n=-1,i=r;while(++n<6)i+=t*e[n],e[n]=i%1e7,i=s(i/1e7)},d=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=s(n/t),n=n%t*1e7},h=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=String(e[t]);r=""===r?n:r+a.call("0",7-n.length)+n}return r},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,r,n,c,u=o(this),s=i(e),p=[0,0,0,0,0,0],v="",b="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(t=f(u*l(2,69,1))-69,r=t<0?u*l(2,-t,1):u/l(2,t,1),r*=4503599627370496,t=52-t,t>0){m(p,0,r),n=s;while(n>=7)m(p,1e7,0),n-=7;m(p,l(10,n,1),0),n=t-1;while(n>=23)d(p,1<<23),n-=23;d(p,1<<n),m(p,1,1),d(p,2),b=h(p)}else m(p,0,r),m(p,1<<-t,0),b=h(p)+a.call("0",s);return s>0?(c=b.length,b=v+(c<=s?"0."+a.call("0",s-c)+b:b.slice(0,c-s)+"."+b.slice(c-s))):b=v+b,b}})},caad:function(e,t,r){"use strict";var n=r("23e7"),i=r("4d64").includes,o=r("44d2");n({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cd56:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header",{attrs:{activeIndex:e.activeIndex},on:{handleSelect:e.handleSelect}}),"1"===e.tabKey?r("div",{staticClass:"form-container"},[r("el-form",{ref:"ruleForm",staticClass:"demo-form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("SingleInput",{attrs:{form:e.form}})],1),r("el-row",[e.btnFlag?[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.calculate("ruleForm")}}},[e._v("重新计算")])]:r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.calculate("ruleForm")}}},[e._v("开始计算")])],2),r("el-descriptions",{attrs:{title:"说明"}},[r("el-descriptions-item",{attrs:{label:"计算公式"}},[e._v("最终盈利=收购价-到手价+佣金+盈利")])],1)],1):e._e()],1)},i=[],o=(r("b680"),{constRate:.02,float:.85,activity:[{limitPay:19,minus:2},.9],defaultResult:"请输入数据，点击计算按钮获取结果",disabledKeys:["number","endPrice","cost","profit"],formMessage:{price:{name:"原价",content:"平台标注价格"},activity:{name:"活动",content:"满减19-2，打折9折"},number:{name:"至少购买数量",content:"每次最小购买数量"},cost:{name:"购买价格",content:"原价减去活动后价格"},laborWage:{name:"劳务费",content:"用户帮忙下单时，所付费用"},endPrice:{name:"到手价",content:"购买价格+补贴(劳务费)"},commission:{name:"佣金",content:"平台补助"},purchase:{name:"收购价",content:"购买商品后出售价格"},profit:{name:"盈利",content:"0.85+0.02*购买价格"}}});function a(e,t){return void 0===t&&(t=15),+parseFloat(Number(e).toPrecision(t))}function c(e){var t=e.toString().split(/[eE]/),r=(t[0].split(".")[1]||"").length-+(t[1]||0);return r>0?r:0}function u(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=c(e);return t>0?a(Number(e)*Math.pow(10,t)):Number(e)}function s(e){v&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn(e+" is beyond boundary when transfer to integer, the results may not be accurate")}function l(e,t){var r=e[0],n=e[1],i=e.slice(2),o=t(r,n);return i.forEach((function(e){o=t(o,e)})),o}function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return l(e,f);var r=e[0],n=e[1],i=u(r),o=u(n),a=c(r)+c(n),m=i*o;return s(m),m/Math.pow(10,a)}function m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return l(e,m);var r=e[0],n=e[1],i=Math.pow(10,Math.max(c(r),c(n)));return(f(r,i)+f(n,i))/i}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return l(e,d);var r=e[0],n=e[1],i=Math.pow(10,Math.max(c(r),c(n)));return(f(r,i)-f(n,i))/i}function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return l(e,h);var r=e[0],n=e[1],i=u(r),o=u(n);return s(i),s(o),f(i/o,a(Math.pow(10,c(n)-c(r))))}function p(e,t){var r=Math.pow(10,t),n=h(Math.round(Math.abs(f(e,r))),r);return e<0&&0!==n&&(n=f(n,-1)),n}var v=!0;function b(e){void 0===e&&(e=!0),v=e}var g={strip:a,plus:m,minus:d,times:f,divide:h,round:p,digitLength:c,float2Fixed:u,enableBoundaryChecking:b},y=g,x=function(e,t){return y.plus(e,t)},w=function(e,t){return y.minus(e,t)},F=function(e,t){return y.times(e,t)},M=function(e,t){return y.divide(e,t)},_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"header"}},[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[r("el-menu-item",{attrs:{index:"1"}},[e._v("单种单件商品计算表")]),r("el-menu-item",{attrs:{index:"2"}},[e._v("多种商品计算表")])],1),r("div",{staticClass:"demo-avatar"},[r("el-avatar",{attrs:{size:"medium",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}})],1)],1)},E=[],S={name:"Header",props:{activeIndex:{type:String,default:"1"}},methods:{handleSelect:function(e){this.$emit("handleSelect",e)}}},N=S,k=r("2877"),I=Object(k["a"])(N,_,E,!1,null,"08f5dcda",null),P=I.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.form,(function(t,n){return r("el-tooltip",{key:n,staticClass:"item",attrs:{effect:"light",content:e.formMessage[n].content,placement:"left-start"}},[r("el-form-item",{attrs:{label:e.formMessage[n].name,prop:n}},["activity"===n?r("div",[r("el-radio",{attrs:{label:"1",border:""},model:{value:e.form.activity,callback:function(t){e.$set(e.form,"activity",t)},expression:"form.activity"}},[e._v("满减19-2")]),r("el-radio",{attrs:{label:"2",border:""},model:{value:e.form.activity,callback:function(t){e.$set(e.form,"activity",t)},expression:"form.activity"}},[e._v("打折9折")])],1):r("el-input",{attrs:{type:"number",disabled:e.disabledKeys(n)},model:{value:e.form[n],callback:function(t){e.$set(e.form,n,e._n(t))},expression:"form[key]"}})],1)],1)})),1)},$=[],C=(r("caad"),r("2532"),{name:"SingleInput",data:function(){return{formMessage:o.formMessage}},props:{form:{}},mounted:function(){},watch:{form:{handler:function(){},deep:!0}},computed:{disabledKeys:function(){return function(e){return o.disabledKeys.includes(e)}}},methods:{}}),K=C,T=Object(k["a"])(K,R,$,!1,null,"fdb3a3f2",null),W=T.exports,A={name:"App",data:function(){return{activeIndex:"1",tabKey:"1",result:o.defaultResult,formMessage:o.formMessage,form:{price:"",activity:"1",number:"",cost:"",laborWage:"",endPrice:"",commission:"",purchase:"",profit:""},rules:{price:[{required:!0,message:"请输入原价",trigger:"blur"},{type:"number",min:0,message:"请输入有效的非负数字",trigger:"blur"}],purchase:[{required:!0,message:"请输入收购价",trigger:"blur"},{type:"number",min:0,message:"请输入有效的非负数字",trigger:"blur"}],commission:[{required:!0,message:"请输入佣金",trigger:"blur"},{type:"number",min:0,message:"请输入有效的非负数字",trigger:"blur"}],laborWage:[{required:!0,message:"请输入劳务费",trigger:"blur"},{type:"number",min:0,message:"请输入有效的非负数字",trigger:"blur"}]}}},components:{Header:P,SingleInput:W},watch:{form:{handler:function(e){this.getFormNumber(),this.getCost(),e.laborWage&&this.getEndPrice(),e.cost&&this.getProfit()},deep:!0}},mounted:function(){},computed:{btnFlag:function(){return!(this.result===o.defaultResult)},showResult:function(){return"结果为：".concat(this.result)},getFormNumber:function(){return function(){var e=0;if("1"===this.form.activity){var t=o.activity[0].limitPay;e=Math.ceil(t/this.form.price)}else e=1;this.$set(this.form,"number",e)}},getCost:function(){return function(){var e=this.form;"1"===e.activity?e.cost=M(w(F(e.price,e.number),o.activity[0].minus),e.number).toFixed(2):e.cost=F(e.price,o.activity[1]).toFixed(2)}},getEndPrice:function(){return function(){var e=this.form;e.endPrice=x(e.laborWage,e.cost).toFixed(2)}},getProfit:function(){return function(){var e=this.form;e.profit=x(F(.02,e.cost),.85).toFixed(2)}}},methods:{showMask:function(){var e=this;this.$confirm(this.showResult,"提示",{confirmButtonText:"重置",cancelButtonText:"取消",type:"info"}).then((function(){e.reset("ruleForm")})).catch((function(){}))},calculate:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message.error("校验规则未通过，请核对～"),!1;var r=t.form;t.result=x(x(w(r.purchase,r.endPrice),r.commission),r.profit).toFixed(2),t.showMask()}))},reset:function(e){this.result=o.defaultResult,this.form={price:"",activity:"1",number:"",cost:"",laborWage:"",endPrice:"",commission:"",purchase:"",profit:""},this.$refs[e].resetFields()},handleSelect:function(e){this.tabKey=e}}},O=A,q=(r("22de"),Object(k["a"])(O,n,i,!1,null,null,null));t["default"]=q.exports}}]);
//# sourceMappingURL=chunk-5555bcbb.ffa461ad.js.map