(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6216)}])},1116:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),s=n(9008),c=n.n(s),a=n(1664),i=n.n(a),l=n(7294),o=n(2331);n(982);var d=n(2920),h=n(3299),u=n(5746);let x=e=>{let{href:t,children:n,...s}=e;return(0,r.jsx)(i(),{legacyBehavior:!0,href:t,children:(0,r.jsx)("a",{...s,children:n})})};var m=n(1955),j=n(353);function f(e){let{title:t,children:n}=e,{mode:s,colors:a}=(0,j.F)(),{toggleMode:f}=(0,j.F)(),{status:g,data:p}=(0,h.useSession)(),{state:v,dispatch:N}=(0,l.useContext)(o.y),{cart:y}=v,[b,k]=(0,l.useState)(0);(0,l.useEffect)(()=>{k(y.cartItems.reduce((e,t)=>e+t.quantity,0))},[y.cartItems]);let w=()=>{m.Z.remove("cart"),N({type:"CART_RESET"}),(0,h.signOut)({callbackUrl:"/login"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:t?t+" - Amazona":"Amazona"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between font-Ozz ".concat(a[s].background," transition-colors duration-300 ease-in-out ").concat(a[s].text),children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md ".concat(a[s].border),children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{className:"text-lg font-bold  dark:text-[#F64668] dark:hover:text-[#be1d3e]",children:"Amazona"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/cart",children:(0,r.jsxs)("a",{className:"p-2 ".concat(a[s].text),children:["Cart",b>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:b})]})}),"loading"===g?"Loading":(null==p?void 0:p.user)?(0,r.jsxs)(u.v,{as:"div",className:"relative inline-block font-bold",children:[(0,r.jsx)(u.v.Button,{className:"text-indigo-500",children:p.user.name}),(0,r.jsxs)(u.v.Items,{className:"absolute right-0 w-56 origin-top-right dark:bg-white dark:text-zinc-800 rounded   shadow-xl ",children:[(0,r.jsx)(u.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,r.jsx)(u.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,r.jsx)(u.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link",href:"#",onClick:w,children:"Logout"})})]})]}):(0,r.jsx)(i(),{legacyBehavior:!0,href:"/login",children:(0,r.jsx)("a",{className:"p-2 ".concat(a[s].text),children:"Login"})}),(0,r.jsx)("button",{className:"p-2",onClick:f,children:"light"===s?"\uD83C\uDF19":"☀️"})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:n}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2023 MagnaTech"})})]})]})}},6216:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return u},default:function(){return x}});var r=n(5893),s=n(6154),c=n(1116),a=n(1664),i=n.n(a),l=n(7294);function o(e){let{product:t,addToCartHandler:n}=e;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/product/".concat(t.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:t.image,alt:t.name,className:"rounded shadow"})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center p-5",children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/product/".concat(t.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("h2",{className:"text-lg",children:t.name})})}),(0,r.jsx)("p",{className:"mb-2",children:t.brand}),(0,r.jsxs)("p",{children:["$",t.price]}),(0,r.jsx)("button",{className:"primary-button",type:"button",onClick:()=>n(t),children:"Add to cart"})]})]})}var d=n(2920),h=n(2331),u=!0;function x(e){let{products:t}=e,{state:n,dispatch:a}=(0,l.useContext)(h.y),{cart:i}=n,u=async e=>{let t=i.cartItems.find(t=>t.slug===e.slug),n=t?t.quantity+1:1,{data:r}=await s.Z.get("/api/products/".concat(e._id));if(r.countInStock<n)return d.Am.error("Sorry. Product is out of stock");a({type:"CART_ADD_ITEM",payload:{...e,quantity:n}}),d.Am.success("Product added to the cart")};return(0,r.jsx)(c.Z,{title:"HomePage",children:(0,r.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4",children:t.map(e=>(0,r.jsx)(o,{product:e,addToCartHandler:u},e.slug))})})}}},function(e){e.O(0,[255,154,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);