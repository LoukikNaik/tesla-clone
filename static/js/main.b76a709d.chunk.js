(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{37:function(n,e,t){},38:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s,d,l=t(0),j=t.n(l),x=t(9),b=t.n(x),h=(t(37),t(38),t(3)),p=t(4),O=t(15),g=t(30),f=t.n(g),u=t(31),m=t.n(u),v=t(14),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(n){return n.car.cars},k=w.reducer,T=t(13),B=t.p+"static/media/logo.a7b59bc6.svg",I=t(2);var M,S,C,E,z,D,N,A=function(){var n=Object(l.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1],r=Object(T.b)(y);return Object(I.jsxs)(L,{children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:B,alt:""})}),Object(I.jsx)(R,{children:r&&r.map((function(n,e){return Object(I.jsx)("a",{href:"#Y",children:n},e)}))}),Object(I.jsxs)(X,{children:[Object(I.jsx)("a",{href:"#",children:"Shop"}),Object(I.jsx)("a",{href:"#",children:"Tesla Account"}),Object(I.jsx)(Y,{onClick:function(){return i(!0)}})]}),Object(I.jsxs)(P,{show:t,children:[Object(I.jsx)(W,{children:Object(I.jsx)(J,{onClick:function(){return i(!1)}})}),r&&r.map((function(n,e){return Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:n},e)},e)})),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:"Existing Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:"Used Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:"Trade-in"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:"Cybertruck"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"",children:"Roadster"})})]})]})},L=p.a.div(i||(i=Object(h.a)(["\n    min-height: 60px;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n"]))),R=p.a.div(r||(r=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    a{\n        font-weight: 600;\n        text-transform: uppercase;\n        padding: 0 10px;\n        flex-wrap: nowrap;\n    }\n    @media(max-width: 768px){\n        display: none;\n    }\n\n"]))),X=p.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    // justify-content: center;\n    // flex: 1;\n    a{\n        font-weight: 600;\n        text-transform: uppercase;\n        margin-right: 10px;\n    }\n"]))),Y=Object(p.a)(f.a)(a||(a=Object(h.a)(["\n    cursor: pointer;\n"]))),P=p.a.div(o||(o=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: white;\n    width: 300px;\n    z-index: 16;\n    list-style: none;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    transform: ",";\n    transition: transform 0.2s;\n    li{\n        padding: 15px 0;\n        border-bottom: 1px solid rgba(0,0,0,.2);\n        a{\n            font-weight: 600;\n        }\n    }\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),J=Object(p.a)(m.a)(s||(s=Object(h.a)(["\n    cursor: pointer;\n\n"]))),W=p.a.div(d||(d=Object(h.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),G=t(18),U=t.n(G),$=t.p+"static/media/down-arrow.9b52668f.svg";var q,F=function(n){var e=n.title,t=n.description,i=n.leftBtnTxt,r=n.rightBtnTxt,c=n.backgroundImg;return Object(I.jsxs)(H,{img:c,children:[Object(I.jsx)(U.a,{bottom:!0,children:Object(I.jsxs)(K,{children:[Object(I.jsx)("h1",{children:e}),Object(I.jsx)("p",{children:t})]})}),Object(I.jsxs)(nn,{children:[Object(I.jsx)(U.a,{bottom:!0,children:Object(I.jsxs)(Q,{children:[Object(I.jsx)(V,{children:i}),r&&Object(I.jsx)(Z,{children:r})]})}),Object(I.jsx)(_,{src:$})]})]})},H=p.a.div(M||(M=Object(h.a)(["\n    z-index: -1;\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n"])),(function(n){return"url(".concat(n.img,")")})),K=p.a.div(S||(S=Object(h.a)(["\n    padding-top: 15vh;\n    text-align: center;\n"]))),Q=p.a.div(C||(C=Object(h.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    @media (max-width: 768px){\n        flex-direction: column;\n    }\n"]))),V=p.a.div(E||(E=Object(h.a)(["\n    background-color: rgba(23,26,32,0.8);\n    height: 40px;\n    width: 256px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 100px;\n    opacity: 0.85;\n    text-transform: uppercase;\n    font-size: 12px;\n    cursor: pointer;\n    margin: 8px;\n"]))),Z=Object(p.a)(V)(z||(z=Object(h.a)(["\n    background-color: white;\n    opacity: 0.65;\n    color: black;\n"]))),_=p.a.img(D||(D=Object(h.a)(["\n        height: 40px;\n    animation: animateDown infinite 1.5s;\n"]))),nn=p.a.div(N||(N=Object(h.a)(["\n"]))),en=t.p+"static/media/model-s.b65171b9.jpg",tn=t.p+"static/media/model-3.30651f79.jpg",rn=t.p+"static/media/model-x.25937b94.jpg",cn=t.p+"static/media/model-y.30acb76a.jpg",an=t.p+"static/media/solar-panel.d7d441d7.jpg",on=t.p+"static/media/solar-roof.acfd9045.jpg",sn=t.p+"static/media/accessories.027ada94.jpg";var dn=function(){return Object(I.jsxs)(ln,{children:[Object(I.jsx)(A,{}),Object(I.jsx)(F,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:en,leftBtnTxt:"Custom Order",rightBtnTxt:"Existing Inventory"}),Object(I.jsx)(F,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:tn,leftBtnTxt:"Custom Order",rightBtnTxt:"Existing Inventory"}),Object(I.jsx)(F,{id:"x",title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:rn,leftBtnTxt:"Custom Order",rightBtnTxt:"Existing Inventory"}),Object(I.jsx)(F,{id:"Y",title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:cn,leftBtnTxt:"Custom Order",rightBtnTxt:"Existing Inventory"}),Object(I.jsx)(F,{title:"Lowest Cost Solar Panels in America",description:"Money Back Guarantee",backgroundImg:an,leftBtnTxt:"Order Now",rightBtnTxt:"Learn More"}),Object(I.jsx)(F,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",backgroundImg:on,leftBtnTxt:"Order Now",rightBtnTxt:"Learn More"}),Object(I.jsx)(F,{title:"Accessories",description:"",backgroundImg:sn,leftBtnTxt:"Shop now"})]})},ln=p.a.div(q||(q=Object(h.a)(["\n    height: 100vh;\n"])));var jn=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(dn,{})})},xn=Object(v.a)({reducer:{car:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(T.a,{store:xn,children:Object(I.jsx)(jn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.b76a709d.chunk.js.map