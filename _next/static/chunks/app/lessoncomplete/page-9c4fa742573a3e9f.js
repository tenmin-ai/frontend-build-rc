(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2674],{2278:function(e,t,s){Promise.resolve().then(s.bind(s,4422))},4422:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(7437),i=s(9376),l=s(2265),n=s(1273),c=s(6593),r=s(3344),d=s(3974),o=s(755);function x(){var e;let t=(0,i.useRouter)(),[s,x]=(0,l.useState)(!1),[m,u]=(0,l.useState)(0),[f,h]=(0,l.useState)(0),[p,y]=(0,l.useState)(0),[b,j]=(0,d.useLocalStorage)("language"),{data:v,isLoading:g}=(0,c.a)({...(0,r.rs)({query:{language:b}})}),N=Object.entries(v||{});N.length>0&&(null===(e=N[0][1])||void 0===e||e.streak),(0,l.useEffect)(()=>{let e=new URLSearchParams(window.location.search);x("true"===e.get("streakPlus")),u(parseInt(e.get("xp")||"0")),h(parseInt(e.get("wordCount")||"0")),y(parseInt(e.get("minutes")||"0"));let t=new Audio("encouragement.mp3");t.volume=.5,t.play()},[]);let w={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5}}};return(0,a.jsx)("main",{className:"flex flex-col bg-[#FAFBFF] h-screen-safe tracking-[-0.02em] pb-10",children:(0,a.jsxs)("div",{className:"px-8 flex flex-col justify-between h-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center h-full justify-center",children:[(0,a.jsxs)(o.E.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},className:"flex flex-col items-center gap-5 h-[10.75rem] justify-center",children:[(0,a.jsx)(o.E.div,{initial:{y:-20},animate:{y:0},transition:{delay:.1,type:"spring",stiffness:300},className:"flex gap-2",children:[0,1,2].map(e=>(0,a.jsx)(o.E.div,{initial:{opacity:0,rotate:-180},animate:{opacity:1,rotate:0},transition:{delay:.1*e,duration:.3},children:(0,a.jsx)(n.QJe,{className:"text-[#FFC800] text-6xl ".concat(1==e&&"-translate-y-4")})},e))}),(0,a.jsx)(o.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4,duration:.3},className:"font-bold text-2xl text-center mt-12",children:"Lesson complete!"})]},"encouragement"),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-2 w-full mt-14",children:[(0,a.jsxs)(o.E.div,{className:"flex flex-col justify-center items-center bg-white py-4 border-[#DADADA] border-[1px] rounded-xl",variants:w,initial:"hidden",animate:"visible",children:[(0,a.jsx)(n.LkT,{className:"text-[#FFC800] text-2xl"}),(0,a.jsx)("div",{className:"font-bold text-lg mt-2",children:m}),(0,a.jsx)("div",{className:"text-black/30 text-sm",children:"XP"})]}),(0,a.jsxs)(o.E.div,{className:"flex flex-col justify-center items-center bg-white py-4 border-[#DADADA] border-[1px] rounded-xl",variants:w,initial:"hidden",animate:"visible",children:[(0,a.jsx)(n.ml,{className:"text-[#CD348E] text-2xl"}),(0,a.jsx)("div",{className:"font-bold text-lg mt-2",children:f}),(0,a.jsx)("div",{className:"text-black/30 text-sm",children:"Words"})]}),(0,a.jsxs)(o.E.div,{className:"flex flex-col justify-center items-center bg-white py-4 border-[#DADADA] border-[1px] rounded-xl",variants:w,initial:"hidden",animate:"visible",children:[(0,a.jsx)(n.qyc,{className:"text-[#34CD71] text-2xl"}),(0,a.jsx)("div",{className:"font-bold text-lg mt-2",children:p}),(0,a.jsx)("div",{className:"text-black/30 text-sm",children:"Minutes"})]})]})]}),(0,a.jsx)("button",{className:"text-white bg-[#0039FF] mt-4 py-4 w-full rounded-full flex items-center justify-center",onClick:()=>{s?t.push("/streakPlus"):t.push("/")},children:(0,a.jsx)("p",{className:"text-base font-semibold",children:"Claim XP"})})]})})}}},function(e){e.O(0,[7240,254,2278,1649,755,3344,2971,2117,1744],function(){return e(e.s=2278)}),_N_E=e.O()}]);