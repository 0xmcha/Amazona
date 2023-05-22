(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{46:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/placeorder",function(){return r(2132)}])},8078:function(e,s,r){"use strict";r.d(s,{Z:function(){return i}});var t=r(5893);function i(e){let{activeStep:s=0}=e;return(0,t.jsx)("div",{className:"mb-5 flex flex-wrap",children:["User Login","Shipping Address","Payment Method","Place Order"].map((e,r)=>(0,t.jsx)("div",{className:"flex-1 border-b-2  \n          text-center \n       ".concat(r<=s?"border-indigo-500   text-indigo-500":"border-gray-400 text-gray-400","\n          \n       "),children:e},e))})}r(7294)},1116:function(e,s,r){"use strict";r.d(s,{Z:function(){return f}});var t=r(5893),i=r(9008),n=r.n(i),c=r(1664),a=r.n(c),l=r(7294),d=r(2331);r(982);var h=r(2920),x=r(3299),o=r(5746);let m=e=>{let{href:s,children:r,...i}=e;return(0,t.jsx)(a(),{legacyBehavior:!0,href:s,children:(0,t.jsx)("a",{...i,children:r})})};var j=r(1955),u=r(353);function f(e){let{title:s,children:r}=e,{mode:i,colors:c}=(0,u.F)(),{toggleMode:f}=(0,u.F)(),{status:p,data:g}=(0,x.useSession)(),{state:v,dispatch:N}=(0,l.useContext)(d.y),{cart:b}=v,[y,w]=(0,l.useState)(0);(0,l.useEffect)(()=>{w(b.cartItems.reduce((e,s)=>e+s.quantity,0))},[b.cartItems]);let k=()=>{j.Z.remove("cart"),N({type:"CART_RESET"}),(0,x.signOut)({callbackUrl:"/login"})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:s?s+" - Amazona":"Amazona"}),(0,t.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(h.Ix,{position:"bottom-center",limit:1}),(0,t.jsxs)("div",{className:"flex min-h-screen flex-col justify-between font-Ozz ".concat(c[i].background," transition-colors duration-300 ease-in-out ").concat(c[i].text),children:[(0,t.jsx)("header",{children:(0,t.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md ".concat(c[i].border),children:[(0,t.jsx)(a(),{legacyBehavior:!0,href:"/",children:(0,t.jsx)("a",{className:"text-lg font-bold  dark:text-[#F64668] dark:hover:text-[#be1d3e]",children:"Amazona"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(a(),{legacyBehavior:!0,href:"/cart",children:(0,t.jsxs)("a",{className:"p-2 ".concat(c[i].text),children:["Cart",y>0&&(0,t.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:y})]})}),"loading"===p?"Loading":(null==g?void 0:g.user)?(0,t.jsxs)(o.v,{as:"div",className:"relative inline-block font-bold",children:[(0,t.jsx)(o.v.Button,{className:"text-indigo-500",children:g.user.name}),(0,t.jsxs)(o.v.Items,{className:"absolute right-0 w-56 origin-top-right dark:bg-white dark:text-zinc-800 rounded   shadow-xl ",children:[(0,t.jsx)(o.v.Item,{children:(0,t.jsx)(m,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,t.jsx)(o.v.Item,{children:(0,t.jsx)(m,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,t.jsx)(o.v.Item,{children:(0,t.jsx)("a",{className:"dropdown-link",href:"#",onClick:k,children:"Logout"})})]})]}):(0,t.jsx)(a(),{legacyBehavior:!0,href:"/login",children:(0,t.jsx)("a",{className:"p-2 ".concat(c[i].text),children:"Login"})}),(0,t.jsx)("button",{className:"p-2",onClick:f,children:"light"===i?"\uD83C\uDF19":"☀️"})]})]})}),(0,t.jsx)("main",{className:"container m-auto mt-4 px-4",children:r}),(0,t.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,t.jsx)("p",{children:"Copyright \xa9 2023 MagnaTech"})})]})]})}},2132:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return p}});var t=r(5893),i=r(6154),n=r(5675),c=r.n(n),a=r(1664),l=r.n(a),d=r(1163),h=r(1955),x=r(7294),o=r(2920),m=r(8078),j=r(1116),u=r(9998),f=r(2331);function p(){let{state:e,dispatch:s}=(0,x.useContext)(f.y),{cart:r}=e,{cartItems:n,shippingAddress:a,paymentMethod:p}=r,g=e=>Math.round(100*e+Number.EPSILON)/100,v=g(n.reduce((e,s)=>e+s.quantity*s.price,0)),N=v>200?0:15,b=g(.15*v),y=g(v+N+b),w=(0,d.useRouter)();(0,x.useEffect)(()=>{p||w.push("/payment")},[p,w]);let[k,_]=(0,x.useState)(!1),E=async()=>{try{_(!0);let{data:e}=await i.Z.post("/api/orders",{orderItems:n,shippingAddress:a,paymentMethod:p,itemsPrice:v,shippingPrice:N,taxPrice:b,totalPrice:y});_(!1),s({type:"CART_CLEAR_ITEMS"}),h.Z.set("cart",JSON.stringify({...r,cartItems:[]})),w.push("/order/".concat(e._id))}catch(e){_(!1),o.Am.error((0,u.b)(e))}};return(0,t.jsxs)(j.Z,{title:"Place Order",children:[(0,t.jsx)(m.Z,{activeStep:3}),(0,t.jsx)("h1",{className:"mb-4 text-xl",children:"Place Order"}),0===n.length?(0,t.jsxs)("div",{children:["Cart is empty. ",(0,t.jsx)(l(),{href:"/",children:"Go shopping"})]}):(0,t.jsxs)("div",{className:"grid md:grid-cols-4 md:gap-5",children:[(0,t.jsxs)("div",{className:"overflow-x-auto md:col-span-3",children:[(0,t.jsxs)("div",{className:"card  p-5",children:[(0,t.jsx)("h2",{className:"mb-2 text-lg",children:"Shipping Address"}),(0,t.jsxs)("div",{children:[a.fullName,", ",a.address,","," ",a.city,", ",a.postalCode,","," ",a.country]}),(0,t.jsx)("div",{children:(0,t.jsx)(l(),{href:"/shipping",children:"Edit"})})]}),(0,t.jsxs)("div",{className:"card  p-5",children:[(0,t.jsx)("h2",{className:"mb-2 text-lg",children:"Payment Method"}),(0,t.jsx)("div",{children:p}),(0,t.jsx)("div",{children:(0,t.jsx)(l(),{href:"/payment",children:"Edit"})})]}),(0,t.jsxs)("div",{className:"card overflow-x-auto p-5",children:[(0,t.jsx)("h2",{className:"mb-2 text-lg",children:"Order Items"}),(0,t.jsxs)("table",{className:"min-w-full",children:[(0,t.jsx)("thead",{className:"border-b",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-5 text-left",children:"Item"}),(0,t.jsx)("th",{className:"    p-5 text-right",children:"Quantity"}),(0,t.jsx)("th",{className:"  p-5 text-right",children:"Price"}),(0,t.jsx)("th",{className:"p-5 text-right",children:"Subtotal"})]})}),(0,t.jsx)("tbody",{children:n.map(e=>(0,t.jsxs)("tr",{className:"border-b",children:[(0,t.jsx)("td",{children:(0,t.jsx)(l(),{legacyBehavior:!0,href:"/product/".concat(e.slug),children:(0,t.jsxs)("a",{className:"flex items-center",children:[(0,t.jsx)(c(),{src:e.image,alt:e.name,width:50,height:50}),"\xa0",e.name]})})}),(0,t.jsx)("td",{className:" p-5 text-right",children:e.quantity}),(0,t.jsxs)("td",{className:"p-5 text-right",children:["$",e.price]}),(0,t.jsxs)("td",{className:"p-5 text-right",children:["$",e.quantity*e.price]})]},e._id))})]}),(0,t.jsx)("div",{children:(0,t.jsx)(l(),{href:"/cart",children:"Edit"})})]})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"card  p-5",children:[(0,t.jsx)("h2",{className:"mb-2 text-lg",children:"Order Summary"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,t.jsx)("div",{children:"Items"}),(0,t.jsxs)("div",{children:["$",v]})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,t.jsx)("div",{children:"Tax"}),(0,t.jsxs)("div",{children:["$",b]})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,t.jsx)("div",{children:"Shipping"}),(0,t.jsxs)("div",{children:["$",N]})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,t.jsx)("div",{children:"Total"}),(0,t.jsxs)("div",{children:["$",y]})]})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{disabled:k,onClick:E,className:"primary-button w-full",children:k?"Loading...":"Place Order"})})]})]})})]})]})}p.auth=!0},9998:function(e,s,r){"use strict";r.d(s,{b:function(){return t}});let t=e=>e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},function(e){e.O(0,[255,154,675,774,888,179],function(){return e(e.s=46)}),_N_E=e.O()}]);