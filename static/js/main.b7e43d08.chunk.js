(this["webpackJsonpting-guitar"]=this["webpackJsonpting-guitar"]||[]).push([[0],{14:function(e,t,r){},24:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(15),s=r.n(c),u=(r(24),r(8)),i=r(2),l=r(1),o=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("p",{children:"Ting Guitar"})})},E=a.a.memo(o),b=r(13),j="NUMBER/NUMBER_ONE",N="NUMBER/NUMBER_FOUR",d="NUMBER/NUMBER_FIVE",O="NUMBER/NUMBER_SIX",m="TYPE/TYPE_MAJOR",h="TYPE/TYPE_MINOR",_={"mayday-1":{id:"mayday-1",name:"\u5929\u4f7f",singer:"\u4e94\u6708\u5929",lines:[{chords:[[{number:j,type:m},null,null,null],[{number:O,type:h},null,null,null],[{number:N,type:m},null,null,null],[{number:d,type:m},null,null,null]],words:"\u4f60\u5c31\u662f\u6211\u7684\u5929\u4f7f \u4fdd\u8b77\u8457\u6211\u7684\u5929\u4f7f \u5f9e\u6b64\u6211\u518d\u4e5f\u6c92\u6709\u6182\u50b7"}]}},M={"pia-1":{id:"pia-1",name:"\u60c5\u7dd2\u5316",singer:"PiA",lines:[]}},B=Object(b.a)(Object(b.a)({},_),M),R=Object.keys(B),T=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:R.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/tab/".concat(e),children:B[e].name})},e)}))})})})},x=a.a.memo(T),A=r(19),f=a.a.createContext(),y="NOTE_NAME/NOTE_NAME_C",U="NOTE_NAME/NOTE_NAME_D",p="NOTE_NAME/NOTE_NAME_E",v="NOTE_NAME/NOTE_NAME_F",F="NOTE_NAME/NOTE_NAME_G",w="NOTE_NAME/NOTE_NAME_A",C="NOTE_NAME/NOTE_NAME_B",g=r(18),P=r.n(g),D=(r(14),function(e){var t=e.name,r=e.value,n=e.tonality,a=e.setTonality,c=n===r,s=P()("tonality-btn",{"is-active":c});return Object(l.jsx)("button",{type:"button",className:s,onClick:function(){a(c?null:r)},children:t})}),G=a.a.memo(D),S=function(e){var t=e.tonality,r=e.setTonality;return Object(l.jsxs)("div",{className:"tonality-selector",children:[Object(l.jsx)(G,{name:"C",value:y,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"D",value:U,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"E",value:p,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"F",value:v,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"G",value:F,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"A",value:w,tonality:t,setTonality:r}),Object(l.jsx)(G,{name:"B",value:C,tonality:t,setTonality:r})]})},I=a.a.memo(S);function Y(e){var t=e.number,r=e.tonality;switch(t){case j:switch(r){case y:return"C";case U:return"D";case p:return"E";case v:return"F";case F:return"G";case w:return"A";case C:return"B";default:return"1"}case"NUMBER/NUMBER_ONE_SHARP":return"#1";case"NUMBER/NUMBER_TWO_FLAT":switch(r){case y:return"bD";case U:return"bE";case p:return"F";case v:return"bG";case F:return"bA";case w:return"bB";case C:return"C";default:return"b2"}case"NUMBER/NUMBER_TWO":switch(r){case y:return"D";case U:return"E";case p:return"#F";case v:return"G";case F:return"A";case w:return"B";case C:return"#C";default:return"2"}case"NUMBER/NUMBER_TWO_SHARP":return"#2";case"NUMBER/NUMBER_THREE_FLAT":switch(r){case y:return"bE";case U:return"F";case p:return"G";case v:return"bA";case F:return"bB";case w:return"C";case C:return"D";default:return"b3"}case"NUMBER/NUMBER_THREE":switch(r){case y:return"E";case U:return"#F";case p:return"#G";case v:return"A";case F:return"B";case w:return"#C";case C:return"#D";default:return"3"}case N:switch(r){case y:return"F";case U:return"G";case p:return"A";case v:return"bB";case F:return"C";case w:return"D";case C:return"E";default:return"4"}case"NUMBER/NUMBER_FOUR_SHARP":return"#4";case"NUMBER/NUMBER_FIVE_FLAT":switch(r){case y:return"bG";case U:return"bA";case p:return"bB";case v:return"B";case F:return"bD";case w:return"bE";case C:return"F";default:return"b5"}case d:switch(r){case y:return"G";case U:return"A";case p:return"B";case v:return"C";case F:return"D";case w:return"E";case C:return"#F";default:return"5"}case"NUMBER/NUMBER_FIVE_SHARP":return"#5";case"NUMBER/NUMBER_SIX_FLAT":switch(r){case y:return"bA";case U:return"bB";case p:return"C";case v:return"bD";case F:return"bE";case w:return"F";case C:return"G";default:return"b6"}case O:switch(r){case y:return"A";case U:return"B";case p:return"#C";case v:return"D";case F:return"E";case w:return"#F";case C:return"#G";default:return"6"}case"NUMBER/NUMBER_SIX_SHARP":return"#6";case"NUMBER/NUMBER_SEVEN_FLAT":switch(r){case y:return"bB";case U:return"C";case p:return"D";case v:return"bE";case F:return"F";case w:return"G";case C:return"A";default:return"b7"}case"NUMBER/NUMBER_SEVEN":switch(r){case y:return"B";case U:return"#C";case p:return"#D";case v:return"E";case F:return"#F";case w:return"#G";case C:return"#A";default:return"7"}default:return""}}function H(e){switch(e){case m:return"";case"TYPE/TYPE_MAJOR_SEVEN":return"maj7";case h:return"m";case"TYPE/TYPE_MINOR_SEVEN":return"m7";default:return""}}r(34);var L=function(e){var t=e.chord,r=Object(n.useContext)(f).tonality;return console.log("chord",t),console.log("context",r),t?Object(l.jsx)("span",{className:"chord",children:"".concat(Y({number:t.number,tonality:r})).concat(H(t.type))}):Object(l.jsx)("span",{className:"chord"})},V=a.a.memo(L),k=(r(35),function(e){var t=e.measure;return console.log("measure",t),Object(l.jsx)("div",{className:"measure",children:Object(l.jsx)("div",{className:"chords-wrapper",children:t.map((function(e,t){return Object(l.jsx)(V,{chord:e},t)}))})})}),J=a.a.memo(k),W=(r(36),function(e){var t=e.line,r=t.chords,n=t.words;return Object(l.jsxs)("div",{className:"line",children:[Object(l.jsx)("div",{className:"measures-wrapper",children:r.map((function(e,t){return Object(l.jsx)(J,{measure:e},t)}))}),Object(l.jsx)("div",{className:"words-wrapper",children:Object(l.jsx)("p",{children:n})})]})}),X=a.a.memo(W),q=(r(37),function(e){var t=e.match.params.id,r=Object(n.useState)(null),a=Object(A.a)(r,2),c=a[0],s=a[1],i=B[t].lines;return console.log("tonality",c),Object(l.jsxs)("div",{className:"guitar-tab",children:[Object(l.jsx)(I,{tonality:c,setTonality:s}),Object(l.jsx)(f.Provider,{value:{tonality:c},children:Object(l.jsx)("div",{className:"tab-container",children:i.map((function(e,t){return Object(l.jsx)(X,{line:e},t)}))})}),Object(l.jsx)(u.b,{to:"/",children:"back"})]})}),z=a.a.memo(q);r(38);var K=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(E,{}),Object(l.jsx)(u.a,{children:Object(l.jsx)("div",{className:"main-container",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/tab/:id",component:z}),Object(l.jsx)(i.a,{path:"/",component:x})]})})})]})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,40)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root")),Q()}},[[39,1,2]]]);
//# sourceMappingURL=main.b7e43d08.chunk.js.map