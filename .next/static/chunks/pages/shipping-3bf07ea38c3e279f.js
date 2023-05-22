(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{5424:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shipping",function(){return t(4016)}])},8078:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var r=t(5893);function a(e){let{activeStep:s=0}=e;return(0,r.jsx)("div",{className:"mb-5 flex flex-wrap",children:["User Login","Shipping Address","Payment Method","Place Order"].map((e,t)=>(0,r.jsx)("div",{className:"flex-1 border-b-2  \n          text-center \n       ".concat(t<=s?"border-indigo-500   text-indigo-500":"border-gray-400 text-gray-400","\n          \n       "),children:e},e))})}t(7294)},1116:function(e,s,t){"use strict";t.d(s,{Z:function(){return j}});var r=t(5893),a=t(9008),n=t.n(a),l=t(1664),i=t.n(l),c=t(7294),d=t(2331);t(982);var o=t(2920),u=t(3299),m=t(5746);let h=e=>{let{href:s,children:t,...a}=e;return(0,r.jsx)(i(),{legacyBehavior:!0,href:s,children:(0,r.jsx)("a",{...a,children:t})})};var x=t(1955),f=t(353);function j(e){let{title:s,children:t}=e,{mode:a,colors:l}=(0,f.F)(),{toggleMode:j}=(0,f.F)(),{status:p,data:N}=(0,u.useSession)(),{state:y,dispatch:g}=(0,c.useContext)(d.y),{cart:b}=y,[v,w]=(0,c.useState)(0);(0,c.useEffect)(()=>{w(b.cartItems.reduce((e,s)=>e+s.quantity,0))},[b.cartItems]);let C=()=>{x.Z.remove("cart"),g({type:"CART_RESET"}),(0,u.signOut)({callbackUrl:"/login"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:s?s+" - Amazona":"Amazona"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(o.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between font-Ozz ".concat(l[a].background," transition-colors duration-300 ease-in-out ").concat(l[a].text),children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md ".concat(l[a].border),children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{className:"text-lg font-bold  dark:text-[#F64668] dark:hover:text-[#be1d3e]",children:"Amazona"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{legacyBehavior:!0,href:"/cart",children:(0,r.jsxs)("a",{className:"p-2 ".concat(l[a].text),children:["Cart",v>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:v})]})}),"loading"===p?"Loading":(null==N?void 0:N.user)?(0,r.jsxs)(m.v,{as:"div",className:"relative inline-block font-bold",children:[(0,r.jsx)(m.v.Button,{className:"text-indigo-500",children:N.user.name}),(0,r.jsxs)(m.v.Items,{className:"absolute right-0 w-56 origin-top-right dark:bg-white dark:text-zinc-800 rounded   shadow-xl ",children:[(0,r.jsx)(m.v.Item,{children:(0,r.jsx)(h,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,r.jsx)(m.v.Item,{children:(0,r.jsx)(h,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,r.jsx)(m.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link",href:"#",onClick:C,children:"Logout"})})]})]}):(0,r.jsx)(i(),{legacyBehavior:!0,href:"/login",children:(0,r.jsx)("a",{className:"p-2 ".concat(l[a].text),children:"Login"})}),(0,r.jsx)("button",{className:"p-2",onClick:j,children:"light"===a?"\uD83C\uDF19":"☀️"})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:t}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2023 MagnaTech"})})]})]})}},4016:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var r=t(5893),a=t(7294),n=t(7536),l=t(1955),i=t(8078),c=t(1116),d=t(2331),o=t(1163);function u(){let{handleSubmit:e,register:s,formState:{errors:t},setValue:u}=(0,n.cI)(),{state:m,dispatch:h}=(0,a.useContext)(d.y),{cart:x}=m,{shippingAddress:f}=x,j=(0,o.useRouter)();(0,a.useEffect)(()=>{u("fullName",f.fullName),u("address",f.address),u("city",f.city),u("postalCode",f.postalCode),u("country",f.country)},[u,f]);let p=e=>{let{fullName:s,address:t,city:r,postalCode:a,country:n}=e;h({type:"SAVE_SHIPPING_ADDRESS",payload:{fullName:s,address:t,city:r,postalCode:a,country:n}}),l.Z.set("cart",JSON.stringify({...x,shippingAddress:{fullName:s,address:t,city:r,postalCode:a,country:n}})),j.push("/payment")};return(0,r.jsxs)(c.Z,{title:"Shipping Address",children:[(0,r.jsx)(i.Z,{activeStep:1}),(0,r.jsxs)("form",{className:"mx-auto max-w-screen-md",onSubmit:e(p),children:[(0,r.jsx)("h1",{className:"mb-4 text-xl",children:"Shipping Address"}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),(0,r.jsx)("input",{className:"w-full",id:"fullName",autoFocus:!0,...s("fullName",{required:"Please enter full name"})}),t.fullName&&(0,r.jsx)("div",{className:"text-red-500",children:t.fullName.message})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"address",children:"Address"}),(0,r.jsx)("input",{className:"w-full",id:"address",...s("address",{required:"Please enter address",minLength:{value:3,message:"Address is more than 2 chars"}})}),t.address&&(0,r.jsx)("div",{className:"text-red-500",children:t.address.message})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"city",children:"City"}),(0,r.jsx)("input",{className:"w-full",id:"city",...s("city",{required:"Please enter city"})}),t.city&&(0,r.jsx)("div",{className:"text-red-500 ",children:t.city.message})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),(0,r.jsx)("input",{className:"w-full",id:"postalCode",...s("postalCode",{required:"Please enter postal code"})}),t.postalCode&&(0,r.jsx)("div",{className:"text-red-500 ",children:t.postalCode.message})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"country",children:"Country"}),(0,r.jsx)("input",{className:"w-full",id:"country",...s("country",{required:"Please enter country"})}),t.country&&(0,r.jsx)("div",{className:"text-red-500 ",children:t.country.message})]}),(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("button",{className:"primary-button",children:"Next"})})]})]})}u.auth=!0}},function(e){e.O(0,[255,536,774,888,179],function(){return e(e.s=5424)}),_N_E=e.O()}]);