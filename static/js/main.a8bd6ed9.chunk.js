(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,c,n){},24:function(e,c,n){},59:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n.n(t),r=n(26),s=n.n(r),i=(n(15),n(14)),o=n(61),l=n(62),j=n(27),p=n.n(j),m=(n(24),n(60)),u=n(2);var d=function(e){return Object(u.jsx)(m.a,{lg:4,md:6,className:"coin-column",children:Object(u.jsxs)("div",{className:"coin-container",children:[Object(u.jsx)("img",{src:e.coinimg,alt:e.alt}),Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("p",{children:e.symbol}),Object(u.jsxs)("p",{className:"price",children:["Current price: $",e.price]}),Object(u.jsxs)("p",{className:"coin-volume",children:["Volume: $",e.volume.toLocaleString()]}),Object(u.jsx)("p",{className:"change-p",children:"24hr change:"}),e.priceChange<0?Object(u.jsxs)("p",{className:"coin-percent-red",children:[e.priceChange.toFixed(2),"%"]}):Object(u.jsxs)("p",{className:"coin-percent-green",children:[e.priceChange.toFixed(2),"%"]}),Object(u.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",e.marketcap.toLocaleString()]})]})})};var h=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),n=c[0],a=c[1],r=Object(t.useState)(""),s=Object(i.a)(r,2),j=s[0],m=s[1];Object(t.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(u.jsx)(o.a,{fluid:!0,className:"main-fld-cnt",children:Object(u.jsxs)(o.a,{fluid:!0,className:"inner-cnt",children:[Object(u.jsx)("h1",{className:"main-h1",children:"CryptoTracker"}),Object(u.jsx)("form",{className:"form-1",children:Object(u.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Enter your coin here"})}),Object(u.jsx)(l.a,{className:"row-1",children:h.map((function(e){return Object(u.jsx)(d,{coinimg:e.image,name:e.name,price:e.current_price,volume:e.market_cap,marketcap:e.total_volume,priceChange:e.price_change_percentage_24h},e.id)}))})]})})};var b=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(h,{})})},O=(n(53),n(11));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(b,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a8bd6ed9.chunk.js.map