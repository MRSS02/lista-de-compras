(this["webpackJsonplorem-ipsum"]=this["webpackJsonplorem-ipsum"]||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(3),s=i.n(o),c=(i(8),i(6)),r=(i.p,i(13),i(0));var d=function(e){return Object(r.jsxs)("div",{id:"ListShow",children:[e.buyList.map((function(t,i){return function(t,i){return Object(r.jsxs)("div",{className:"ListedItem",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsxs)("p",{className:"ListedDetails",children:[t.description," ",Object(r.jsx)("br",{}),"Quantidade: ",e.buyQuantity[t.id],Object(r.jsx)("br",{}),"Valor: R$",Math.floor(t.price),",",(t.price-Math.floor(t.price)).toFixed(2).substring(2)]})]})}(t)})),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["Valor total: R$",Math.floor(e.totalValue),",",(e.totalValue-Math.floor(e.totalValue)).toFixed(2).substring(2)]})]})},u=i(2);var l=function(e){function t(t,i){return Object(r.jsxs)("div",{className:"ListedItem",children:[Object(r.jsxs)("div",{className:"ListedDetails",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("br",{}),"R$",Math.floor(t.price),",",(t.price-Math.floor(t.price)).toFixed(2).substring(2)]}),Object(r.jsx)("button",{className:"button",onClick:function(){return function(t){var i=e.buyQuantity.slice();if(0!=e.buyQuantity[t]&&(i[t]-=1),1==e.buyQuantity[t]){var n=Object(u.a)(e.buyList);n.splice(e.buyList.indexOf(e.buyList.find((function(e){return e.id===t}))),1),console.log(e.buyList.indexOf(e.buyList.find((function(e){return e.id===t})))),e.setBuyList(Object(u.a)(n))}e.setBuyQuantity(Object(u.a)(i))}(i)},children:" - "}),Object(r.jsx)("button",{className:"button",onClick:function(){return function(t,i){var n=e.buyQuantity.slice();n[i]+=1,0==e.buyQuantity[i]&&e.setBuyList([].concat(Object(u.a)(e.buyList),[{name:t.name,description:t.description,price:t.price,id:i}])),e.setBuyQuantity(Object(u.a)(n))}(t,i)},children:" + "})]}),Object(r.jsx)("p",{children:t.description}),Object(r.jsx)("img",{src:"/lista-de-compras"+t.image,className:"image",alt:"imagem"})]})}return Object(r.jsx)("div",{id:"ShopList",children:e.sellList.map((function(e,i){return t(e,i)}))})};var p=function(){for(var e=[{name:"Sintendo Nwitch",description:"O mais novo console da Sintendo",price:"3000",image:"/Sintendo-nwitch.png"},{name:"RT 3030",description:"O mais novo lan\xe7amento de entrada da Nsomia em placas de v\xeddeo",price:"5000",image:"/PH0.png"},{name:"Ascensor cortador de teia 5990 queijo",description:"O melhor processador do mundo, constru\xeddo pela Ame Receba",price:"27000",image:"/PH1.png"},{name:"n\xe3o inove 11900",description:"Churrasqueira de alta pot\xeancia, projetada pela Dentro Telef\xf4nica",price:"3200",image:"/PH2.png"},{name:"n\xe3o inove 11900 capa",description:"Churrasqueira de alta pot\xeancia e desbloqueada, projetada pela Dentro Telef\xf4nica",price:"4000",image:"/PH3.png"},{name:"Team Rocket rx6900xt",description:"A placa de v\xeddeo mais r\xe1pida do mundo, feita na arquitetura Hey Listen, mas sem suporte a tra\xe7os rajantes",price:"10100",image:"/PH4.png"},{name:"The Subtitles of Link Skyward Sword de novo edition",description:"O cl\xe1ssico jogo do Sintendo URSS, agora para Sintendo Nwitch",price:"300",image:"/PH5.png"},{name:"Hyper Mario All Stars 35 years edition (limitado!!!!!)",description:"Jogue cl\xe1ssicos 3D do Hyper Mario, apenas para Sintendo Nwitch!!! Dispon\xedvel at\xe9 31 de junho",price:"350",image:"/PH6.png"},{name:"Punk Eletr\xf4nico 2077",description:"Jogo do ano, no qual voc\xea \xe9 um rob\xf4 punk e pode fazer tudo, inclusive transformar pessoas no cristo redentor",price:"300",image:"/PH7.png"},{name:"Sintendo Nwitch luz",description:"Sintendo Nwitch, s\xf3 que colorido neon e sem a funcionalidade que faz dele um Sintendo Nwitch. Mas tem rgb",price:"1700",image:"/PH8.png"}],t=Object(n.useState)([]),i=Object(c.a)(t,2),a=i[0],o=i[1],s=[],u=0;u<e.length;u++)s[u]=0;var p=Object(n.useState)(0),b=Object(c.a)(p,2),m=b[0],j=b[1],h=Object(n.useState)(s),f=Object(c.a)(h,2),O=f[0],g=f[1];return Object(n.useEffect)((function(){var e=function(){for(var e=0,t=0;t<a.length;t++)e+=a[t].price*O[a[t].id];return e}();j(e)})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{id:"title",children:[Object(r.jsx)("h1",{children:"Gerador de Lista de Compras"}),Object(r.jsx)("p",{children:"Organize sua lista de compras mais eficientemente com o Gerador de Lista de Compras!"})]}),Object(r.jsx)(l,{sellList:e,setBuyQuantity:g,buyList:a,setBuyList:o,buyQuantity:O,totalValue:m,setTotalValue:j}),Object(r.jsx)(d,{sellList:e,buyList:a,buyQuantity:O,totalValue:m}),Object(r.jsx)("button",{className:"save",onClick:function(){alert("A sua lista foi salva!"),console.log(JSON.stringify(a))},children:"Salvar"})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),b()},8:function(e,t,i){}},[[15,1,2]]]);
//# sourceMappingURL=main.b3306438.chunk.js.map