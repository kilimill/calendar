(function(t){function e(e){for(var a,c,i=e[0],o=e[1],l=e[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},r=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"315f":function(t,e,s){var a=s("ded3").default,n=s("4082").default,r=["class","staticClass","style","staticStyle","attrs"];s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,c=(e._v,e.data),i=e.children,o=void 0===i?[]:i,l=c.class,d=c.staticClass,u=c.style,f=c.staticStyle,m=c.attrs,h=void 0===m?{}:m,b=n(c,r);return s("svg",a({class:[l,d],style:[u,f],attrs:Object.assign({viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},h)},b),o.concat([s("g",{attrs:{fill:"none",stroke:"#2f3435","stroke-width":"12","stroke-linecap":"square","stroke-miterlimit":"10"}},[s("path",{attrs:{d:"M40.5 17l47 47M87.5 64l-47 47"}})])]))}}},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main"},[s("div",{staticClass:"main__content"},[s("Header",{attrs:{page:t.key}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{key:t.key,ref:"page"})],1)],1),s("Footer",{attrs:{page:t.key}})],1)},r=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"})},i=[],o={},l=o,d=s("2877"),u=Object(d["a"])(l,c,i,!1,null,null,null),f=u.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"})},h=[],b={},j=Object(d["a"])(b,m,h,!1,null,null,null),y=j.exports,p={components:{Header:f,Footer:y},computed:{key:function(){return void 0!==this.$route.meta.key?this.$route.meta.key:this.$route}}},v=p,_=(s("7faf"),Object(d["a"])(v,n,r,!1,null,null,null)),k=_.exports,D=s("8c4f"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page"},[s("Calendar",{attrs:{note:t.note}})],1)},Y=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"calendar"},[s("div",{staticClass:"calendar__header"},[s("button",{staticClass:"calendar__btn",on:{click:function(e){return e.preventDefault(),t.prevMonth.apply(null,arguments)}}},[s("Arrow",{staticClass:"calendar__btn-arrow calendar__btn-arrow--left"})],1),s("span",{staticClass:"calendar__date"},[t._v(t._s(t.getMonth))]),t.visibleYear?s("span",{staticClass:"calendar__date"},[t._v(t._s(t.$moment(t.currentDate).year()))]):t._e(),s("button",{staticClass:"calendar__btn",on:{click:function(e){return e.preventDefault(),t.nextMonth.apply(null,arguments)}}},[s("Arrow",{staticClass:"calendar__btn-arrow"})],1)]),s("table",{staticClass:"calendar__table"},[s("tr",{staticClass:"calendar__head"},t._l(t.nameDays,(function(e,a){return s("th",{key:a,staticClass:"calendar__head-item"},[t._v(t._s(e))])})),0),t._l(t.numberDays,(function(e,a){return s("tr",{key:a},t._l(t.numberDays[a],(function(e,a){return s("td",{key:a,staticClass:"calendar__day",class:t.checkDay(e)},[s("p",{staticClass:"calendar__day-number"},[t._v(t._s(t.$moment(e).get("date")))]),s("div",{staticClass:"calendar__events"},[s("ul",{staticClass:"calendar__events-list"},t._l(t.findEvents(e),(function(a,n){return s("li",{key:n,staticClass:"calendar__events-item",class:e.type},[s("p",{staticClass:"calendar__events-text",class:a.type},[t._v(t._s(t.$moment(a.date,"YYYY-MM-DD[T]HH:mm").format("LT"))+" "+t._s(a.title))])])})),0)])])})),0)}))],2)])},$=[],M=(s("4de4"),s("315f")),C=s.n(M),x={props:{note:{type:Array}},components:{Arrow:C.a},data:function(){return{nameDays:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],numberDays:[[]],months:["Январь","Февраль","Март","Апрель","Мая","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],currentDate:null,today:null,count:0,visibleYear:!1,styleobj:{}}},computed:{getMonth:function(){return this.checkYear,this.months[this.$moment(this.currentDate).month()]},checkYear:function(){var t=this.$moment(this.today).year();return this.$moment(this.currentDate).year()!==t}},methods:{changebgcolor:function(){},checkDay:function(t){var e=[];return this.$moment(this.today).isAfter(t)&&!this.$moment(this.today).isSame(t)&&e.push("last"),this.$moment(this.today).isSame(t)&&e.push("today"),t=this.$moment(t,"YYYY-MM-DD").format("dddd"),"суббота"!=t&&"воскресенье"!=t||e.push("weekend"),e},findEvents:function(t){var e=this;return this.note.filter((function(s){return e.$moment(s.date,"YYYY.MM.DD").format("YYYY-MM-DD")===t}))},prevMonth:function(){this.currentDate=this.$moment(this.currentDate).subtract(1,"month");var t=this.$moment(this.currentDate).year(),e=this.$moment(this.today).year();this.$moment(e).isSame(t)||(this.visibleYear=!0),this.clearNumberDays(),this.createCalendar(this.currentDate)},nextMonth:function(){this.currentDate=this.$moment(this.currentDate).add(1,"month");var t=this.$moment(this.currentDate).year(),e=this.$moment(this.today).year();this.$moment(e).isSame(t)||(this.visibleYear=!0),this.clearNumberDays(),this.createCalendar(this.currentDate)},getDay:function(t){var e=this.$moment(t).day();return 0==e&&(e=7),e-1},createCalendar:function(t){for(var e=this.$moment(t,"YYYY-MM-DD").month(),s=this.$moment(t).startOf("month"),a=this.$moment(s).endOf("month"),n=s,r=0;r<this.getDay(s);r++)n=this.$moment(n,"YYYY-MM-DD").subtract(1,"days").format("YYYY-MM-DD"),this.numberDays[0].unshift(n);while(this.$moment(s).month()==e)7===this.numberDays[this.count].length&&this.addWeek(),this.numberDays[this.count].push(this.$moment(s).format("YYYY-MM-DD")),s=this.$moment(s).add(1,"day").format("YYYY-MM-DD");if(0!=this.getDay(s))for(var c=this.numberDays[this.count],i=this.getDay(s);i<7;i++)7===c.length&&this.addWeek(),a=this.$moment(a).add(1,"day").format("YYYY-MM-DD"),c.push(a)},addWeek:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.numberDays.push(t),this.count++},clearNumberDays:function(){this.numberDays=[[]],this.count=0}},mounted:function(){this.today=this.$moment().format("YYYY-MM-DD"),this.currentDate=this.today,this.createCalendar(this.today)}},z=x,O=Object(d["a"])(z,w,$,!1,null,null,null),T=O.exports,S={components:{Calendar:T},data:function(){return{note:[{id:1,title:"Купить хлеб",date:"2022.02.28[T]16:00",type:"red"},{id:2,title:"Продать хлеб",date:"2022.02.28[T]16:10",type:"green"},{id:3,title:"Подготовить презентацию",date:"2022.03.30[T]23:00",type:"yellow"},{id:4,title:'Прочитать "Война и Мир"',date:"2022.03.10[T]21:00",type:"green"},{id:5,title:"Купить билеты",date:"2022.03.18[T]11:00",type:"red"},{id:6,title:"Собрать чемодан",date:"2022.03.20[T]18:00",type:"green"},{id:7,title:"Закончить тестовое задание",date:"2022.03.21[T]03:00",type:"yellow"},{id:8,title:"Отправить посылку",date:"2022.04.01[T]17:00",type:"yellow"}]}}},E=S,P=Object(d["a"])(E,g,Y,!1,null,null,null),A=P.exports;a["a"].use(D["a"]);var N=[{path:"/",component:A,name:"index",meta:{title:"Главная",key:1}},{path:"*",component:A,name:"index",meta:{title:"Главная",key:101}}],H=new D["a"]({mode:"history",base:"/",routes:N});H.afterEach((function(t){a["a"].nextTick((function(){document.title=t.meta.title}))}));var q=H,F=s("c1df");s("957c"),a["a"].use(s("2ead"),{moment:F}),a["a"].config.productionTip=!1,new a["a"]({router:q,render:function(t){return t(k)}}).$mount(".main")},"7faf":function(t,e,s){"use strict";s("a47e")},a47e:function(t,e,s){}});