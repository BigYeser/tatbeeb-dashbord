(this["webpackJsonphallo-doctor-admin"]=this["webpackJsonphallo-doctor-admin"]||[]).push([[16],{404:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(3),i=a(6),r=a(10),o=a(0),c=a(9),l=a.n(c),d=a(49),s=a(82);function u(t){var e=t.className,a=t.direction,r=t.index,c=t.marginDirection,l=t.children,d=t.split,s=t.wrap,u=o.useContext(p),m=u.horizontalSize,h=u.verticalSize,w=u.latestIndex,f={};return u.supportFlexGap||("vertical"===a?r<w&&(f={marginBottom:m/(d?2:1)}):f=Object(n.a)(Object(n.a)({},r<w&&Object(i.a)({},c,m/(d?2:1))),s&&{paddingBottom:h})),null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:e,style:f},l),r<w&&d&&o.createElement("span",{className:"".concat(e,"-split"),style:f},d))}var m=a(388),h=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(a[n[i]]=t[n[i]])}return a},p=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),w={small:8,middle:16,large:24};e.b=function(t){var e,a=o.useContext(s.b),c=a.getPrefixCls,f=a.space,b=a.direction,y=t.size,x=void 0===y?(null===f||void 0===f?void 0:f.size)||"small":y,O=t.align,j=t.className,v=t.children,g=t.direction,k=void 0===g?"horizontal":g,z=t.prefixCls,I=t.split,M=t.style,E=t.wrap,S=void 0!==E&&E,C=h(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=Object(m.a)(),q=o.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(t){return function(t){return"string"===typeof t?w[t]:t||0}(t)}))}),[x]),F=Object(r.a)(q,2),R=F[0],W=F[1],A=Object(d.a)(v,{keepEmpty:!0}),G=void 0===O&&"horizontal"===k?"center":O,P=c("space",z),B=l()(P,"".concat(P,"-").concat(k),(e={},Object(i.a)(e,"".concat(P,"-rtl"),"rtl"===b),Object(i.a)(e,"".concat(P,"-align-").concat(G),G),e),j),L="".concat(P,"-item"),D="rtl"===b?"marginLeft":"marginRight",J=0,T=A.map((function(t,e){return null!==t&&void 0!==t&&(J=e),o.createElement(u,{className:L,key:"".concat(L,"-").concat(e),direction:k,index:e,marginDirection:D,split:I,wrap:S},t)})),$=o.useMemo((function(){return{horizontalSize:R,verticalSize:W,latestIndex:J,supportFlexGap:N}}),[R,W,J,N]);if(0===A.length)return null;var H={};return S&&(H.flexWrap="wrap",N||(H.marginBottom=-W)),N&&(H.columnGap=R,H.rowGap=W),o.createElement("div",Object(n.a)({className:B,style:Object(n.a)(Object(n.a)({},H),M)},C),o.createElement(p.Provider,{value:$},T))}},476:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(488),r=a(404),o=a(491),c=a(484),l=a(41),d=a(131),s=a(4);e.default=function(){var t=Object(l.e)((function(t){return{withdrawRequestList:t.withdrawRequest.data,error:t.withdrawRequest.error,loading:t.withdrawRequest.loading,deleted:t.withdrawRequest.delete}}),l.c),e=t.withdrawRequestList,a=t.loading,u=Object(l.d)(),m=i.a.confirm;function h(t){m({title:"Are you sure you want to complete ".concat(t.withdrawMethod.name," withdrawal request"),content:"make sure you have sent money to ".concat(t.withdrawMethod.name," for $").concat(t.totalWithdraw," with  ").concat(t.withdrawMethod.method," payment method by ").concat(t.withdrawMethod.email),onOk:function(){var e;e=t,u(Object(d.e)(e))},onCancel:function(){}})}Object(n.useEffect)((function(){u(Object(d.b)())}),[u]);var p=[{title:"Name",dataIndex:["withdrawMethod","name"],key:"name"},{title:"Email",dataIndex:["withdrawMethod","email"],key:"email"},{title:"Withdraw Method",dataIndex:["withdrawMethod","method"],key:"withrawMethod"},{title:"Balance",dataIndex:"amount",key:"amount"},{title:"Tax",dataIndex:"tax",key:"tax"},{title:"Admin Fee",dataIndex:"adminFee",key:"adminFee"},{title:"Total Withdraw",dataIndex:"totalWithdraw",key:"totalWithdraw"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",render:function(t,e){return Object(s.jsx)(r.b,{size:"middle",children:Object(s.jsx)("a",{href:"any.com",onClick:function(){return h(e)},children:"Complete"})})}}];return Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(o.a,{children:Object(s.jsx)(c.a,{dataSource:e,columns:p,loading:a})})]})}}}]);
//# sourceMappingURL=16.aa1af18e.chunk.js.map