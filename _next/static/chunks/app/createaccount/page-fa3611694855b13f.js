(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7312],{8697:function(e,t,n){Promise.resolve().then(n.bind(n,1050))},1050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(7437),s=n(3344),a=n(3765),i=n(9376),r=n(2265),o=n(5276),c=n(9827),u=n(1770);function d(){(0,i.useRouter)();let[e,t]=(0,a.j8)(),{saveToken:n}=(0,o.h)(),d=(0,c.NL)(),f=(0,s.GI)(),[m]=(0,a.od)(),[x,g]=(0,r.useState)(""),[h,p]=(0,r.useState)(""),[b,w]=(0,r.useState)(!1),y=(0,u.D)({...(0,s.iy)(),onMutate:async()=>{await e({message:"Updating your login credentials..."})},onError:async n=>{await t(),await e({message:"Failed to update login credentials",icon:"close",duration:1e3})},onSuccess:async l=>{n(l.access_token),d.invalidateQueries({queryKey:f.queryKey}),await t(),await e({message:"Login credentials updated!",icon:"checkmark",duration:1e3})}});return(0,l.jsx)("main",{className:"flex flex-col bg-[#FAFBFF] h-screen-safe tracking-[-0.02em] pb-10",children:(0,l.jsxs)("div",{className:"px-8 flex flex-col justify-between h-full pt-16",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center h-full flex-grow justify-start",children:[(0,l.jsx)("div",{className:"font-semibold text-4xl leading-tight",children:"Don't lose your account!"}),(0,l.jsx)("div",{className:"mt-4 font-light",children:"You have not registered yet. Create an account to save your data and keep using Tenmin."}),b&&(0,l.jsxs)("div",{className:"flex flex-col gap-2 w-full mt-4",children:[(0,l.jsx)("input",{type:"text",placeholder:"Email",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:x,onChange:e=>g(e.target.value)}),(0,l.jsx)("input",{type:"password",placeholder:"Password",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:h,onChange:e=>p(e.target.value)})]})]}),!b&&(0,l.jsxs)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:[(0,l.jsxs)("button",{className:"bg-white text-black border border-gray-300 py-4 w-full rounded-full font-semibold flex items-center justify-center gap-3",onClick:function(){throw Error("Function not implemented.")},children:[(0,l.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]}),(0,l.jsxs)("button",{className:"bg-black text-white py-4 w-full rounded-full font-semibold flex items-center justify-center gap-3",onClick:function(){throw Error("Function not implemented.")},children:[(0,l.jsx)("img",{src:"/apple_logo.svg",alt:"",className:"h-5"}),"Sign in with Apple ID"]})]}),(0,l.jsx)("div",{children:b&&(0,l.jsx)("button",{className:"text-white bg-[#0039FF] mt-4 py-4 w-full rounded-full flex items-center justify-center",onClick:()=>{if(!x.includes("@"))return m({header:"Invalid email",message:"Please enter a valid email address.",buttons:["OK"]});y.mutate({body:{username:"lmao",email:x,password:h}})},children:(0,l.jsx)("p",{className:"text-base font-semibold",children:"Create account"})})}),(0,l.jsx)("button",{className:"w-full text-center mt-6 text-sm text-black/30 underline",onClick:()=>{w(!b)},children:b?"Other options":"Sign in with Email"})]})})}},2274:function(e,t,n){"use strict";function l(e){return e}n.d(t,{C:function(){return l}})},1172:function(e,t,n){"use strict";function l(e,t){return"function"==typeof e?e(...t):!!e}function s(){}n.d(t,{L:function(){return l},Z:function(){return s}})}},function(e){e.O(0,[254,2278,1623,7137,5919,2971,2117,1744],function(){return e(e.s=8697)}),_N_E=e.O()}]);