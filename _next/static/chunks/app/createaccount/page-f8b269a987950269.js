(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7312],{8478:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=8478,e.exports=t},8697:function(e,t,n){Promise.resolve().then(n.bind(n,1050))},5276:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return f},h:function(){return m}});var s=n(7437),r=n(2265),l=n(3974),a=n(9856),i=n(2979),o=n(9827),c=n(9376);a.Lp.setConfig({baseUrl:"https://backend-us-rc.tenmin.ai"}),a.Lp.interceptors.request.use((e,t)=>{let n=localStorage.getItem("token");return n&&e.headers.set("Authorization","Bearer "+JSON.parse(n)),e});let u=new i.S,d=(0,r.createContext)(void 0),f=e=>{let{children:t}=e,n=(0,l.useIsClient)(),i=(0,c.useRouter)(),f=(0,c.usePathname)(),[m,g]=(0,r.useState)(null);return((0,r.useEffect)(()=>{if(n){let e=localStorage.getItem("token");g(e),console.log(f),e||"/login"===f||i.push("/onboarding")}},[n,i]),n)?(0,s.jsx)(d.Provider,{value:{authedClient:a.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{localStorage.setItem("token",JSON.stringify(e)),g(e)}},children:(0,s.jsx)(o.aH,{client:u,children:t})}):(0,s.jsx)("main",{className:"bg-[#FAFBFF] h-screen-safe w-screen flex justify-center items-center",children:(0,s.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},m=()=>{let e=(0,r.useContext)(d);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},1050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),r=n(3344),l=n(3765),a=n(9376),i=n(2265),o=n(5276),c=n(9827),u=n(1770);function d(){(0,a.useRouter)();let[e,t]=(0,l.j8)(),{saveToken:n}=(0,o.h)(),d=(0,c.NL)(),f=(0,r.GI)(),[m]=(0,l.od)(),[g,h]=(0,i.useState)(""),[x,p]=(0,i.useState)(""),[b,w]=(0,i.useState)(!1),v=(0,u.D)({...(0,r.iy)(),onMutate:async()=>{await e({message:"Updating your login credentials..."})},onError:async n=>{await t(),await e({message:"Failed to update login credentials",icon:"close",duration:1e3})},onSuccess:async s=>{n(s.access_token),d.invalidateQueries({queryKey:f.queryKey}),await t(),await e({message:"Login credentials updated!",icon:"checkmark",duration:1e3})}});return(0,s.jsx)("main",{className:"flex flex-col bg-[#FAFBFF] h-screen-safe tracking-[-0.02em] pb-10",children:(0,s.jsxs)("div",{className:"px-8 flex flex-col justify-between h-full pt-16",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center h-full flex-grow justify-start",children:[(0,s.jsx)("div",{className:"font-semibold text-4xl leading-tight",children:"Don't lose your account!"}),(0,s.jsx)("div",{className:"mt-4 font-light",children:"You have not registered yet. Create an account to save your data and keep using Tenmin."}),b&&(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full mt-4",children:[(0,s.jsx)("input",{type:"text",placeholder:"Email",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:g,onChange:e=>h(e.target.value)}),(0,s.jsx)("input",{type:"password",placeholder:"Password",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:x,onChange:e=>p(e.target.value)})]})]}),!b&&(0,s.jsxs)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:[(0,s.jsxs)("button",{className:"bg-white text-black border border-gray-300 py-4 w-full rounded-full font-semibold flex items-center justify-center gap-3",onClick:function(){throw Error("Function not implemented.")},children:[(0,s.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]}),(0,s.jsxs)("button",{className:"bg-black text-white py-4 w-full rounded-full font-semibold flex items-center justify-center gap-3",onClick:function(){throw Error("Function not implemented.")},children:[(0,s.jsx)("img",{src:"/apple_logo.svg",alt:"",className:"h-5"}),"Sign in with Apple ID"]})]}),(0,s.jsx)("div",{children:b&&(0,s.jsx)("button",{className:"text-white bg-[#0039FF] mt-4 py-4 w-full rounded-full flex items-center justify-center",onClick:()=>{if(!g.includes("@"))return m({header:"Invalid email",message:"Please enter a valid email address.",buttons:["OK"]});v.mutate({body:{username:"lmao",email:g,password:x}})},children:(0,s.jsx)("p",{className:"text-base font-semibold",children:"Create account"})})}),(0,s.jsx)("button",{className:"w-full text-center mt-6 text-sm text-black/30 underline",onClick:()=>{w(!b)},children:b?"Other options":"Sign in with Email"})]})})}},2274:function(e,t,n){"use strict";function s(e){return e}n.d(t,{C:function(){return s}})},1172:function(e,t,n){"use strict";function s(e,t){return"function"==typeof e?e(...t):!!e}function r(){}n.d(t,{L:function(){return s},Z:function(){return r}})}},function(e){e.O(0,[254,2278,1623,7137,3344,2971,2117,1744],function(){return e(e.s=8697)}),_N_E=e.O()}]);