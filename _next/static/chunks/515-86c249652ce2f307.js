"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{5040:function(e,t,n){n.d(t,{MI:function(){return u},nQ:function(){return o}});var r=n(7437),l=n(2265),c=n(1273),s=n(2744),a=n(434),i=n(2859);let o=e=>{let{profilePicture:t,message:n,translation:c,isPlaying:o=!1,onTap:u,onTTSPlay:d,onTTSStop:x,onTranslate:m,defaultShowTranslation:f=!0}=e,[h,g]=(0,l.useState)(f);return(0,r.jsxs)("div",{className:"bg-white rounded-tl-none rounded-lg py-4 px-4 mb-8 ring-1 ring-black/10 mr-14",onClick:u,children:["string"==typeof t?(0,r.jsx)("img",{src:t,className:"w-7 h-7 mb-3 rounded-full"}):t,(0,r.jsx)("div",{className:"font-medium",children:void 0===n?(0,r.jsxs)("div",{className:"flex flex-col gap-2 mb-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded-full w-full"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded-full w-2/3"})]}):(0,a.f)(n)}),(0,r.jsx)("div",{className:"text-black/30 text-sm transition-max-height duration-700 ease-in-out overflow-hidden ".concat(h?"max-h-40 opacity-100":"max-h-0 opacity-0"),children:c}),(0,r.jsxs)("div",{className:"mt-2 flex gap-2",children:[d&&(0,r.jsx)("button",{onClick:e=>{e.stopPropagation(),o?null==x||x():d()},children:(0,r.jsx)(i.J,{icon:o?s.H6t:s.hwG,className:"text-black/30 text-xl"})}),m&&(0,r.jsx)("button",{onClick:e=>{e.stopPropagation(),m(!h),g(!h)},children:(0,r.jsx)(s.mp2,{className:"text-black/30 text-xl"})})]})]})},u=e=>{let t,n,s,{message:a,translation:i,correction:o,onTap:u,onTranslate:d,defaultShowTranslation:x=!0}=e,[m,f]=(0,l.useState)(x),h="flex-initial bg-[#0039FF]/5 ring-1 rounded-lg py-4 px-4 ring-[#0039FF]/20 rounded-tr-none";o?"Grammar"===o.mistake||"Phrasing"===o.mistake?(t=(0,r.jsx)("div",{className:"font-normal text-red-600 line-through",children:a}),n=(0,r.jsx)("div",{className:"text-green-600",children:o.correct_version})):"No Mistake"===o.mistake?(h="relative flex-initial bg-green-500/5 ring-1 rounded-lg py-4 px-4 ring-green-600/20 rounded-tr-none",t=(0,r.jsx)("div",{className:"font-normal text-green-600",children:a}),s=(0,r.jsx)(c.ETl,{className:"absolute -right-2 -bottom-2 text-green-600 text-xl"})):t=(0,r.jsx)("div",{className:"font-normal",children:a}):t=(0,r.jsx)("div",{className:"font-normal",children:a});let g=i&&m&&(0,r.jsx)("div",{className:"text-black/30 text-sm",children:i});return(0,r.jsxs)("div",{className:"flex flex-wrap-reverse justify-end items-center mb-8 ml-14 gap-y-3",children:[o&&o.explanation&&(0,r.jsxs)("div",{className:"basis-32 grow text-xs -ml-10 mr-3",children:[(0,r.jsxs)("p",{className:"font-bold",children:[o.mistake,(0,r.jsx)(c.EQK,{className:"mx-1 inline-block"})]}),(0,r.jsx)("p",{className:"italic",children:o.explanation})]}),(0,r.jsxs)("div",{className:h,onClick:u,children:[t,n,g,(0,r.jsx)("div",{className:"mt-2 flex gap-2 items-center text-black/30 text-sm",children:(0,r.jsx)(c.YRv,{className:"-rotate-45"})}),s]})]})};t.ZP=u},4502:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(7437),l=n(2265),c=e=>{let{onStartPress:t,onEndPress:n,onCancel:c,cancelButtonRef:s,children:a}=e,[i,o]=(0,l.useState)(!1),u=(0,l.useRef)({x:0,y:0}),d=e=>{if(s.current){let t=s.current.getBoundingClientRect();return e.x>=t.left&&e.x<=t.right&&e.y>=t.top&&e.y<=t.bottom}return!1};return(0,l.useEffect)(()=>{let e=e=>{var t,n;if(!i)return;let r=e.touches[0];d({x:r.clientX,y:r.clientY})?null===(t=s.current)||void 0===t||t.classList.add("scale-110","bg-red-300"):null===(n=s.current)||void 0===n||n.classList.remove("scale-110","bg-red-300")};return window.addEventListener("touchmove",e),()=>{window.removeEventListener("touchmove",e)}},[i,s]),(0,r.jsx)("button",{onTouchStart:e=>{e.preventDefault(),o(!0),t();let n=e.touches[0];u.current={x:n.clientX,y:n.clientY}},onTouchEnd:e=>{e.preventDefault(),o(!1);let t=e.changedTouches[0];d({x:t.clientX,y:t.clientY})?c():n()},onContextMenu:e=>e.preventDefault(),className:"microphoneButton",children:a?a(i):"Press and Hold"})},s=n(1273),a=n(2859),i=e=>{let{color:t="black"}=e;return(0,r.jsx)("svg",{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.0946622 2.84349C0.543847 1.57554 1.74925 0.722656 3.09681 0.722656H6.41168C8.39605 0.722656 9.99947 2.33176 9.99947 4.31045C9.99947 5.59546 9.31148 6.78381 8.19705 7.42631L6.36051 8.4782C6.34913 9.21737 5.74074 9.82007 4.99589 9.82007C4.23967 9.82007 3.63128 9.21168 3.63128 8.45546V7.68786C3.63128 7.19888 3.89283 6.74969 4.31927 6.5052L6.83812 5.06099C7.10536 4.90747 7.27025 4.62317 7.27025 4.31613C7.27025 3.83852 6.88361 3.45757 6.41168 3.45757H3.09681C2.90349 3.45757 2.73291 3.57697 2.67037 3.75892L2.64762 3.82715C2.39745 4.53788 1.61279 4.90747 0.907744 4.65729C0.202694 4.40711 -0.172574 3.62246 0.0776046 2.91741L0.100348 2.84918L0.0946622 2.84349ZM3.17641 13.459C3.17641 12.9765 3.36811 12.5137 3.70933 12.1725C4.05054 11.8312 4.51334 11.6396 4.99589 11.6396C5.47845 11.6396 5.94124 11.8312 6.28246 12.1725C6.62368 12.5137 6.81538 12.9765 6.81538 13.459C6.81538 13.9416 6.62368 14.4044 6.28246 14.7456C5.94124 15.0868 5.47845 15.2785 4.99589 15.2785C4.51334 15.2785 4.05054 15.0868 3.70933 14.7456C3.36811 14.4044 3.17641 13.9416 3.17641 13.459Z",fill:t})})};let o=e=>{let{onStartPress:t,onEndPress:n,onCancel:o,viewText:u,setViewText:d,viewQuestion:x,setViewQuestion:m}=e,[f,h]=(0,l.useState)(!1),g=(0,l.useRef)(null);return(0,r.jsxs)("div",{className:"flex w-full justify-center items-center gap-6",children:[!f&&(0,r.jsx)("div",{className:" rounded-full h-14 w-14 flex justify-center items-center ".concat(u?"bg-black/5":"text-[#0039FF] bg-[#0039FF]/10"),onClick:()=>{d(!u)},children:(0,r.jsx)(s.Vbz,{})}),f&&(0,r.jsx)("button",{ref:g,className:"h-12 w-12 flex justify-center items-center text-xl rounded-full bg-red-200 text-red-600 ring-2 ring-red-600/50 transition-transform duration-200 ease-in-out hover:scale-110",children:(0,r.jsx)(s._0w,{})}),(0,r.jsx)(c,{onStartPress:()=>{h(!0),t()},onEndPress:()=>{h(!1),n()},onCancel:()=>{h(!1),o()},cancelButtonRef:g,children:e=>(0,r.jsx)("div",{className:"".concat(e?"bg-[#0039FF]/20 text-[#0039FF] ring-2 ring-[#0039FF]/40":"bg-[#0039FF] text-white","  px-12 py-6 text-3xl rounded-full"),children:(0,r.jsx)(a.J,{icon:e?s.ZTc:s.uYL})})}),!f&&(0,r.jsx)("button",{className:"bg-black/5 rounded-full h-14 w-14 flex justify-center items-center",onClick:()=>{m(!x)},children:(0,r.jsx)(i,{})}),f&&(0,r.jsx)("div",{className:"w-12"})]})}},3510:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265),l=n(9800),c=n(3974),s=n(6870);function a(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:a,onRecordingStart:i,onRecordingStop:o,micVolume:u=1,recordingChunkSize:d}=e,x=(0,s.Y)(),m=(0,r.useRef)(null),f=(0,r.useRef)(null),h=(0,r.useRef)(null),g=(0,r.useRef)(null),v=(0,r.useRef)(!1),[p,j]=(0,r.useState)(!1),b=(0,r.useRef)(!1),[w,N]=(0,c.useLocalStorage)("selectedMic",null),[C,k]=(0,r.useState)(!1);(0,r.useEffect)(()=>{p?S():h.current&&E()},[p]);let y=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=e&&e!==w;if(e?N(e):e=w,!r){if(v.current){console.log("Mic already being acquired");return}if(m.current&&f.current&&h.current){console.log("Mic already acquired");return}}M(),v.current=!0;try{m.current=await navigator.mediaDevices.getUserMedia({audio:{deviceId:null!=e?e:void 0,echoCancellation:!0}}),console.log("Mic acquired",e);let r=m.current.getAudioTracks()[0].getSettings().deviceId;N(null!=r?r:null);let c=x.createMediaStreamSource(m.current);f.current=x.createGain(),c.connect(f.current),f.current.gain.value=u;let s=x.createMediaStreamDestination();f.current.connect(s),h.current=new MediaRecorder(s.stream),g.current&&g.current.destroy(),g.current=await l.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:m.current,onSpeechStart:()=>{k(!0),null==t||t()},onVADMisfire:()=>{k(!1),null==n||n(!0)},onSpeechEnd:()=>{k(!1),null==n||n(!1)},positiveSpeechThreshold:.5,negativeSpeechThreshold:.35}),g.current.start()}catch(e){if(e instanceof DOMException&&"NotAllowedError"===e.name){console.log("User denied microphone access"),alert("Please allow microphone access to use this feature.");return}console.error("Error accessing microphone:",e),alert("Error accessing microphone: "+e);return}finally{v.current=!1}},S=async()=>{h.current||await y(),h.current&&(h.current.ondataavailable=e=>{null==a||a(e.data)},h.current.onstart=()=>{null==i||i()},h.current.onstop=()=>{null==o||o(b.current)},b.current=!1,await h.current.start(d))},E=()=>{h.current&&h.current.stop()},M=()=>{E(),m.current&&(m.current.getTracks().forEach(e=>{var t;e.stop(),null===(t=m.current)||void 0===t||t.removeTrack(e)}),m.current=null,console.log("Mic released")),f.current&&(f.current.disconnect(),f.current=null),h.current&&(h.current.stop(),h.current=null),g.current&&(C&&(k(!1),null==n||n(!1)),g.current.destroy(),g.current=null)};return(0,r.useEffect)(()=>{f.current&&(f.current.gain.value=u)},[u]),(0,r.useEffect)(()=>(console.log("Acquiring mic on mount"),y(),()=>{console.log("Releasing mic on unmount"),M()}),[]),{isRecording:p,setRecording:j,cancelRecording:()=>{b.current=!0,j(!1)},acquireMic:y,releaseMic:M,selectedMic:w,isVoiceDetected:C}}},9403:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(3974);let l=()=>{let[e,t]=(0,r.useLocalStorage)("token");return{token:e,saveToken:t}}},434:function(e,t,n){n.d(t,{f:function(){return r}});let r=e=>e||"​"}}]);