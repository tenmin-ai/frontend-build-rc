(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3175],{1814:function(e,t,r){Promise.resolve().then(r.bind(r,1130))},1130:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7437),o=r(2265),i=r(8079),s=r(9376),a=r(1273),l=r(8706),u=r(6870);function c(){let e=(0,s.useSearchParams)(),t=(0,s.useRouter)(),r=(0,u.Y)(),[c,d]=(0,o.useState)([]),f=async()=>{d((await navigator.mediaDevices.enumerateDevices()).filter(e=>"audioinput"===e.kind));let e=c.find(e=>e.label.includes("AirPods"));e&&p(e.deviceId)};(0,o.useEffect)(()=>{if(void 0===navigator.mediaDevices){console.log("navigator.mediaDevices is undefined");return}f(),navigator.mediaDevices.ondevicechange=f},[]),(0,o.useEffect)(()=>{let e=setInterval(()=>{f()},1e3);return()=>clearInterval(e)},[]);let{selectedMic:h,acquireMic:p,isVoiceDetected:m}=(0,l.Z)({recordingChunkSize:100}),[b,v]=(0,o.useState)(!1),[g,y]=(0,o.useState)("Beginner"),[x,w]=(0,o.useState)(!1),C=(e,n,o)=>{w(!0),(0,i.oY)({path:{service:"ws"},query:{tutoring_id:e,lesson_id:n,mode:o}}).then(e=>{e.data&&(r.resume(),t.push("/call?session_id=".concat(e.data.session_id)))}).catch(e=>{console.error(e)})};return(0,o.useEffect)(()=>{C(e.get("tutoring_id"),e.get("lesson_id"),g)}),(0,n.jsxs)("main",{className:"h-screen-safe flex flex-col justify-between bg-[#FAFBFF] pt-5 tracking-[-0.02em]",children:[(0,n.jsx)("div",{className:"flex w-full flex-col items-center px-7 pb-6",children:(0,n.jsxs)("div",{className:"flex w-full items-center justify-between px-1",children:[(0,n.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black",onClick:()=>{t.push("/")},children:(0,n.jsx)(a._0w,{className:"text-xl"})}),(0,n.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black/30",onClick:()=>{},children:(0,n.jsx)(a.kvo,{className:"text-xl"})})]})}),(0,n.jsx)("div",{className:"pointer-events-none w-full justify-end gap-5 tracking-[-0.02em]",children:(0,n.jsx)("div",{className:"pointer-events-auto flex w-full flex-col gap-4 border-t-2 border-black/10 bg-white pb-10 pt-6",children:(0,n.jsx)("button",{className:"mx-8 flex h-[3.6rem] flex-grow items-center justify-center rounded-full bg-[#0039FF] px-4 font-bold text-white",onClick:()=>{C(e.get("tutoring_id"),e.get("lesson_id"),g)},children:x?(0,n.jsx)(a.fCD,{className:"animate-spin"}):(0,n.jsx)("p",{className:"text-lg font-medium",children:"Start"})})})})]})}},6870:function(e,t,r){"use strict";r.d(t,{GlobalAudioContextProvider:function(){return s},Y:function(){return a}});var n=r(7437),o=r(2265);let i=(0,o.createContext)(null),s=e=>{let{children:t}=e,r=(0,o.useRef)(null);return r.current||(console.log("creating audio context"),r.current=new AudioContext,r.current.onstatechange=()=>{var e,t,n,o,i;if(console.log("onstagechange - AudioContext state changed: ",null===(e=r.current)||void 0===e?void 0:e.state),(null===(t=r.current)||void 0===t?void 0:t.state)==="suspended"&&(null===(o=r.current)||void 0===o||o.resume().then(()=>{var e;console.log("AudioContext state: ",null===(e=r.current)||void 0===e?void 0:e.state)}).catch(e=>{console.error("Failed to resume AudioContext:",e)})),(null===(n=r.current)||void 0===n?void 0:n.state)==="running"){let e=null===(i=r.current)||void 0===i?void 0:i.currentTime;setTimeout(()=>{var t;(null===(t=r.current)||void 0===t?void 0:t.currentTime)===e&&(console.warn("AudioContext currentTime is stuck, attempting to fix..."),window.location.reload())},100)}}),(0,n.jsx)(i.Provider,{value:r.current,children:t})},a=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useAudioContext must be used within a GlobalAudioContextProvider");return e}},8706:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2265),o=r(9800),i=r(3974);class s{register(e){let t=Symbol("subscriber");return console.log("Registering subscriber:",t.toString()),this.subscribers.set(t,{init:e,initializing:this.initializeSubscriber(e)}),()=>this.removeSubscriber(t)}async resume(){if(this.audioContext&&"suspended"===this.audioContext.state)try{await this.audioContext.resume(),console.log("AudioContext resumed. State:",this.audioContext.state)}catch(e){console.error("Failed to resume AudioContext:",e)}}async ensureAudioContext(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(this.audioContext&&"closed"!==this.audioContext.state)return this.audioContext;for(let e of(this.audioContext&&(console.warn("AudioContext is closed, cleaning up and recreating..."),this.cleanupAllSubscribers()),console.log("Creating a new AudioContext"),this.audioContext=new AudioContext(this.audioContextOptions),this.audioWorkletModules))await this.audioContext.audioWorklet.addModule(e);return e&&this.initializeAllSubscribers(),this.audioContext.onstatechange=this.handleAudioContextStateChange,this.audioContext}async handleAudioContextStateChange(){if(this.audioContext){if(console.log("AudioContext state changed:",this.audioContext.state),"running"===this.audioContext.state){let e=this.audioContext.currentTime;setTimeout(async()=>{this.audioContext&&this.audioContext.currentTime===e&&(console.warn("AudioContext currentTime is stuck, recreating..."),await this.ensureAudioContext())},100)}"closed"===this.audioContext.state&&(console.warn("AudioContext closed, recreating..."),await this.ensureAudioContext())}}async initializeSubscriber(e){console.log("Initializing subscriber...");let t=await this.ensureAudioContext(!1),r=await e(t);return console.log("Subscriber initialized."),r}async removeSubscriber(e){console.log("Removing subscriber:",e.toString());let t=this.subscribers.get(e);if(!t)throw Error("Removing a non-existent subscriber:"+e.toString());(await t.initializing)(),this.subscribers.delete(e),console.log("Subscriber removed:",e.toString())}initializeAllSubscribers(){for(let[,e]of this.subscribers.entries())e.initializing=this.initializeSubscriber(e.init)}cleanupAllSubscribers(){for(let[,e]of this.subscribers.entries())e.initializing.then(e=>e())}constructor(e,t){if(this.audioContext=null,this.audioContextOptions={},this.subscribers=new Map,this.audioWorkletModules=new Set,e&&(this.audioContextOptions=e),t)for(let e of t)this.audioWorkletModules.add(e)}}let a=new s({sampleRate:16e3},["worklets/pcm-recorder.js"]);function l(e){let{onSpeechStart:t,onSpeechEnd:r,onAudioData:s,onPCMData:l,onRecordingStart:u,onRecordingStop:c,micVolume:d=1,recordingChunkSize:f}=e,h=(0,n.useRef)(null),p=(0,n.useRef)(null),m=(0,n.useRef)(null),b=(0,n.useRef)(null),v=(0,n.useRef)(void 0),[g,y]=(0,n.useState)(!0),[x,w]=(0,n.useState)(!1),C=(0,n.useRef)(!1),[j,S]=(0,i.useLocalStorage)("selectedMic",null),[O,A]=(0,n.useState)(!1);(0,n.useEffect)(()=>{x?N():P()},[x]),(0,n.useEffect)(()=>{if(!g)return;a.resume();let e=async e=>{try{let n=await navigator.mediaDevices.getUserMedia({audio:{deviceId:null!=j?j:void 0,echoCancellation:!0,sampleRate:16e3}});console.log("Mic acquired",j);let i=e.createGain();e.createMediaStreamSource(n).connect(i),h.current=i,i.gain.value=d,await e.audioWorklet.addModule("/worklets/pcm-recorder.js");let s=new AudioWorkletNode(e,"pcm-recorder");i.connect(s),s.port.onmessage=e=>{var t;let r=e.data;null===(t=v.current)||void 0===t||t.call(v,r)},s.onprocessorerror=e=>{console.error("PCM Processor Error:",e)},b.current=s;let a=e.createMediaStreamDestination();s.connect(a);let l=new MediaRecorder(a.stream);p.current=l;let u=await o.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:n,onSpeechStart:()=>{A(!0),null==t||t()},onVADMisfire:()=>{A(!1),null==r||r(!0)},onSpeechEnd:()=>{A(!1),null==r||r(!1)},positiveSpeechThreshold:.5,negativeSpeechThreshold:.35});return u.start(),m.current=u,()=>{n.getTracks().forEach(e=>{e.stop(),n.removeTrack(e)}),console.log("Mic released"),s.port.close(),s.disconnect(),b.current===s&&(b.current=null),i.disconnect(),h.current===i&&(h.current=null),O&&(A(!1),null==r||r(!1)),u.destroy(),m.current===u&&(m.current=null),console.log("VAD destroyed")}}catch(e){if(e instanceof DOMException&&"NotAllowedError"===e.name)return console.log("User denied microphone access"),alert("Please allow microphone access to use this feature."),()=>{};return console.error("Error accessing microphone:",e),alert("Error accessing microphone: "+e),()=>{}}};return a.register(e)},[g,j]);let E=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;a.resume(),e&&S(e),y(!0)},R=(0,n.useRef)(void 0),k=e=>{let t=async()=>{null==s||s(await e.data.arrayBuffer()),R.current=void 0};R.current=t()},N=async()=>{var e;a.resume(),v.current=l,null===(e=b.current)||void 0===e||e.port.start(),p.current&&(p.current.ondataavailable=k,p.current.onstart=()=>{null==u||u()},p.current.onstop=async()=>{R.current&&await R.current,null==c||c(C.current)},C.current=!1,await p.current.start(f))},P=()=>{v.current=void 0,p.current&&p.current.stop()};return p.current&&(p.current.ondataavailable=k),m.current&&t&&(m.current.options.onSpeechStart=t),m.current&&r&&(m.current.options.onVADMisfire=()=>r(!0),m.current.options.onSpeechEnd=()=>r(!1)),h.current&&(h.current.gain.value=d),{isRecording:x,setRecording:w,cancelRecording:()=>{v.current=void 0,C.current=!0,w(!1)},acquireMic:E,releaseMic:()=>{v.current=void 0,P(),y(!1)},selectedMic:j,isVoiceDetected:O}}},5478:function(e,t,r){"use strict";r.d(t,{RL:function(){return p},_g:function(){return v},eI:function(){return g}});let n=/\{[^{}]+\}/g,o=({allowReserved:e,name:t,value:r})=>{if(null==r)return"";if("object"==typeof r)throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${t}=${e?r:encodeURIComponent(r)}`},i=({allowReserved:e,explode:t,name:r,style:n,value:i})=>{if(!t){let t=(e?i:i.map(e=>encodeURIComponent(e))).join((e=>{switch(e){case"form":default:return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20"}})(n));switch(n){case"label":return`.${t}`;case"matrix":return`;${r}=${t}`;case"simple":return t;default:return`${r}=${t}`}}let s=(e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(n),a=i.map(t=>"label"===n||"simple"===n?e?t:encodeURIComponent(t):o({allowReserved:e,name:r,value:t})).join(s);return"label"===n||"matrix"===n?s+a:a},s=({allowReserved:e,explode:t,name:r,style:n,value:i})=>{if(i instanceof Date)return`${r}=${i.toISOString()}`;if("deepObject"!==n&&!t){let t=[];Object.entries(i).forEach(([r,n])=>{t=[...t,r,e?n:encodeURIComponent(n)]});let o=t.join(",");switch(n){case"form":return`${r}=${o}`;case"label":return`.${o}`;case"matrix":return`;${r}=${o}`;default:return o}}let s=(e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(n),a=Object.entries(i).map(([t,i])=>o({allowReserved:e,name:"deepObject"===n?`${r}[${t}]`:t,value:i})).join(s);return"label"===n||"matrix"===n?s+a:a},a=({allowReserved:e,array:t,object:r}={})=>n=>{let a=[];if(n&&"object"==typeof n)for(let l in n){let u=n[l];null!=u&&(a=Array.isArray(u)?[...a,i({allowReserved:e,explode:!0,name:l,style:"form",value:u,...t})]:"object"!=typeof u?[...a,o({allowReserved:e,name:l,value:u})]:[...a,s({allowReserved:e,explode:!0,name:l,style:"deepObject",value:u,...r})])}return a.join("&")},l=({baseUrl:e,path:t,query:r,querySerializer:a,url:l})=>{let u=e+(l.startsWith("/")?l:`/${l}`);t&&(u=(({path:e,url:t})=>{let r=t,a=t.match(n);if(a)for(let t of a){let n=!1,a=t.substring(1,t.length-1),l="simple";a.endsWith("*")&&(n=!0,a=a.substring(0,a.length-1)),a.startsWith(".")?(a=a.substring(1),l="label"):a.startsWith(";")&&(a=a.substring(1),l="matrix");let u=e[a];null!=u&&(r=Array.isArray(u)?r.replace(t,i({explode:n,name:a,style:l,value:u})):"object"!=typeof u?"matrix"!==l?r.replace(t,"label"===l?`.${u}`:u):r.replace(t,`;${o({name:a,value:u})}`):r.replace(t,s({explode:n,name:a,style:l,value:u})))}return r})({path:t,url:u}));let c=r?a(r):"";return c.startsWith("?")&&(c=c.substring(1)),c&&(u+=`?${c}`),u},u=(e,t)=>{let r={...e,...t};return r.baseUrl?.endsWith("/")&&(r.baseUrl=r.baseUrl.substring(0,r.baseUrl.length-1)),r.headers=c(e.headers,t.headers),r},c=(...e)=>{let t=new Headers;for(let r of e)if(r&&"object"==typeof r)for(let[e,n]of r instanceof Headers?r.entries():Object.entries(r))if(null===n)t.delete(e);else if(Array.isArray(n))for(let r of n)t.append(e,r);else void 0!==n&&t.set(e,"object"==typeof n?JSON.stringify(n):n);return t};class d{_fns;constructor(){this._fns=[]}eject(e){let t=this._fns.indexOf(e);-1!==t&&(this._fns=[...this._fns.slice(0,t),...this._fns.slice(t+1)])}use(e){this._fns=[...this._fns,e]}}let f={bodySerializer:e=>JSON.stringify(e)},h=(e,t,r)=>{"string"==typeof r?e.append(t,r):e.append(t,JSON.stringify(r))},p={bodySerializer:e=>{let t=new URLSearchParams;return Object.entries(e).forEach(([e,r])=>{null!=r&&(Array.isArray(r)?r.forEach(r=>h(t,e,r)):h(t,e,r))}),t}},m=a({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),b={"Content-Type":"application/json"},v=(e={})=>({...f,baseUrl:"",fetch:globalThis.fetch,headers:b,parseAs:"auto",querySerializer:m,...e}),g=(e={})=>{let t=u(v(),e),r=()=>({...t}),n={request:new d,response:new d},o=async e=>{let r={...t,...e,headers:c(t.headers,e.headers)};r.body&&r.bodySerializer&&(r.body=r.bodySerializer(r.body)),r.body||r.headers.delete("Content-Type");let o=new Request(l({baseUrl:r.baseUrl??"",path:r.path,query:r.query,querySerializer:"function"==typeof r.querySerializer?r.querySerializer:a(r.querySerializer),url:r.url}),{redirect:"follow",...r});for(let e of n.request._fns)o=await e(o,r);let i=r.fetch,s=await i(o);for(let e of n.response._fns)s=await e(s,o,r);let u={request:o,response:s};if(s.ok){if(204===s.status||"0"===s.headers.get("Content-Length"))return{data:{},...u};if("stream"===r.parseAs)return{data:s.body,...u};let e=("auto"===r.parseAs?(e=>{if(e)return e.startsWith("application/json")||e.endsWith("+json")?"json":"multipart/form-data"===e?"formData":["application/","audio/","image/","video/"].some(t=>e.startsWith(t))?"blob":e.startsWith("text/")?"text":void 0})(s.headers.get("Content-Type")):r.parseAs)??"json",t=await s[e]();return"json"===e&&r.responseTransformer&&(t=await r.responseTransformer(t)),{data:t,...u}}let d=await s.text();if(r.throwOnError)throw Error(d);try{d=JSON.parse(d)}catch{}return{error:d||{},...u}};return{connect:e=>o({...e,method:"CONNECT"}),delete:e=>o({...e,method:"DELETE"}),get:e=>o({...e,method:"GET"}),getConfig:r,head:e=>o({...e,method:"HEAD"}),interceptors:n,options:e=>o({...e,method:"OPTIONS"}),patch:e=>o({...e,method:"PATCH"}),post:e=>o({...e,method:"POST"}),put:e=>o({...e,method:"PUT"}),request:o,setConfig:e=>(t=u(t,e),r()),trace:e=>o({...e,method:"TRACE"})}}},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),s=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,a({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:l}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[7240,4753,254,5563,8079,2971,2117,1744],function(){return e(e.s=1814)}),_N_E=e.O()}]);