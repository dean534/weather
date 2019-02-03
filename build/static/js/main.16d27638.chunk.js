(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(73)},54:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(38),l=a.n(c),i=a(11),s=a(20),o=a(12),m=a(13),u=a(15),d=a(14),f=a(16);var h=function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("span",{class:"navbar-brand mb-0 h1"},"Weather")))},p=a(37),v=a(46),g=a(39),b=a(19),E=a.n(b),N=a(22);a(54);function j(){var e=Object(g.a)(["\n    query DistrictQuery($district: String!) {\n      district(district: $district) {\n        locationName\n        weatherElement {\n          elementName\n          time {\n            startTime\n            parameter {\n              parameterName\n              parameterValue\n            }\n          }\n        }\n      }\n    }\n  "]);return j=function(){return e},e}function y(e){console.log(e.target);var t=E()(j());return r.a.createElement(N.Query,{query:t,variables:{district:e.target}},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return r.a.createElement("h4",{className:"d-none"},"...loading");if(a)return console.log(a);console.log(n);for(var c=[],l=n.district.weatherElement,o=0;o<l.length;o++)for(var m=0;m<l[m].time.length;m++)c[m]=Object(s.a)({},c[m],Object(i.a)({},l[o].elementName,l[o].time[m]));return console.log(typeof c[0].CI.startTime),console.log(c),r.a.createElement("div",{className:"card card_message "},r.a.createElement("div",{className:"card-header"},n.district.locationName),r.a.createElement("div",{className:"card-body d-flex justify-content-between"},c.map(function(e){var t=e.CI.startTime.split(/[\s-:]/);return console.log(t),r.a.createElement("div",{className:"px-2"},r.a.createElement("div",{className:"card-title font-bold"},t[1],"/",t[2]," ",t[3],":",t[4]),r.a.createElement("div",{className:"card-text"},r.a.createElement("i",{className:"fas fa-thermometer-half mr-2"}),e.MinT.parameter.parameterName," -"," ",e.MaxT.parameter.parameterName),r.a.createElement("div",{className:"card-text"},function(e){return console.log(e),1===parseInt(e)?r.a.createElement("i",{className:"fas fa-sun mr-2"}):parseInt(e)<4?r.a.createElement("i",{className:"fas fa-cloud-sun mr-2"}):parseInt(e)<8?r.a.createElement("i",{className:"fas fa-cloud mr-2"}):r.a.createElement("i",{className:"fas fa-cloud-showers-heavy mr-2"})}(e.Wx.parameter.parameterValue),e.PoP.parameter.parameterName,"%"))})))})}var O=a(47),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={date:new Date},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState(function(e,t){return{date:new Date}})},1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"text-dark ml-3"},r.a.createElement("i",{class:"far fa-clock mr-3"}),this.state.date.getMonth()+1,"/",this.state.date.getDate()," ",this.state.date.getHours(),":",this.state.date.getMinutes(),":",this.state.date.getSeconds())}}]),t}(n.Component);var k=function(e){return r.a.createElement("div",{className:"card card_notice"},r.a.createElement("div",{className:"card-header d-flex justify-content-between align-items-center"},r.a.createElement("span",null,"Notice"),r.a.createElement("i",{class:"far fa-times-circle",onClick:e.handleClose})),r.a.createElement("div",{className:"card-body"},"\u8acb\u9078\u64c7\u7e23\u5e02"))},x=new O.a({uri:"/graphql"}),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={notice:!0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=p.b().center([120,24.5]).scale(6e3),a=p.c().projection(t);p.d("./taiwan.json").then(function(e,t){return v.a(e,e.objects.COUNTY_MOI_1070516).features}).then(function(t){console.log(t),p.e(".map").selectAll("path").data(t).enter().append("path").on("mouseover",function(e){p.a.target.setAttribute("fill","orange")}).on("mouseout",function(e){p.a.target.setAttribute("fill","black")}).on("click",function(){e.props.changeTarget(p.a.target.__data__.properties.COUNTYENG.split(" ").join(""))}).attr("d",a)})}},{key:"render",value:function(){var e=this;return r.a.createElement(N.ApolloProvider,{client:x},r.a.createElement("div",{className:"map-container position-relative"},r.a.createElement("svg",{className:"map",height:"600px",width:"100%"}),this.props.target?r.a.createElement(y,{target:this.props.target}):null,this.state.notice?r.a.createElement(k,{handleClose:function(){e.setState(function(e,t){return{notice:!e.notice}})}}):null,r.a.createElement(w,null)))}}]),t}(r.a.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={target:null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"changeState",value:function(e){var t=this;return function(a){return t.setState(function(t,n){return Object(s.a)({},t,Object(i.a)({},e,a))})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(C,{changeTarget:this.changeState("target").bind(this),target:this.state.target}))}}]),t}(n.Component);l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[49,2,1]]]);
//# sourceMappingURL=main.16d27638.chunk.js.map