"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{5478:function(t,e,s){s.d(e,{RL:function(){return p},_g:function(){return b},eI:function(){return v}});let i=/\{[^{}]+\}/g,r=({allowReserved:t,name:e,value:s})=>{if(null==s)return"";if("object"==typeof s)throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${e}=${t?s:encodeURIComponent(s)}`},n=({allowReserved:t,explode:e,name:s,style:i,value:n})=>{if(!e){let e=(t?n:n.map(t=>encodeURIComponent(t))).join((t=>{switch(t){case"form":default:return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20"}})(i));switch(i){case"label":return`.${e}`;case"matrix":return`;${s}=${e}`;case"simple":return e;default:return`${s}=${e}`}}let a=(t=>{switch(t){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(i),o=n.map(e=>"label"===i||"simple"===i?t?e:encodeURIComponent(e):r({allowReserved:t,name:s,value:e})).join(a);return"label"===i||"matrix"===i?a+o:o},a=({allowReserved:t,explode:e,name:s,style:i,value:n})=>{if(n instanceof Date)return`${s}=${n.toISOString()}`;if("deepObject"!==i&&!e){let e=[];Object.entries(n).forEach(([s,i])=>{e=[...e,s,t?i:encodeURIComponent(i)]});let r=e.join(",");switch(i){case"form":return`${s}=${r}`;case"label":return`.${r}`;case"matrix":return`;${s}=${r}`;default:return r}}let a=(t=>{switch(t){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}})(i),o=Object.entries(n).map(([e,n])=>r({allowReserved:t,name:"deepObject"===i?`${s}[${e}]`:e,value:n})).join(a);return"label"===i||"matrix"===i?a+o:o},o=({allowReserved:t,array:e,object:s}={})=>i=>{let o=[];if(i&&"object"==typeof i)for(let u in i){let h=i[u];null!=h&&(o=Array.isArray(h)?[...o,n({allowReserved:t,explode:!0,name:u,style:"form",value:h,...e})]:"object"!=typeof h?[...o,r({allowReserved:t,name:u,value:h})]:[...o,a({allowReserved:t,explode:!0,name:u,style:"deepObject",value:h,...s})])}return o.join("&")},u=({baseUrl:t,path:e,query:s,querySerializer:o,url:u})=>{let h=t+(u.startsWith("/")?u:`/${u}`);e&&(h=(({path:t,url:e})=>{let s=e,o=e.match(i);if(o)for(let e of o){let i=!1,o=e.substring(1,e.length-1),u="simple";o.endsWith("*")&&(i=!0,o=o.substring(0,o.length-1)),o.startsWith(".")?(o=o.substring(1),u="label"):o.startsWith(";")&&(o=o.substring(1),u="matrix");let h=t[o];null!=h&&(s=Array.isArray(h)?s.replace(e,n({explode:i,name:o,style:u,value:h})):"object"!=typeof h?"matrix"!==u?s.replace(e,"label"===u?`.${h}`:h):s.replace(e,`;${r({name:o,value:h})}`):s.replace(e,a({explode:i,name:o,style:u,value:h})))}return s})({path:e,url:h}));let l=s?o(s):"";return l.startsWith("?")&&(l=l.substring(1)),l&&(h+=`?${l}`),h},h=(t,e)=>{let s={...t,...e};return s.baseUrl?.endsWith("/")&&(s.baseUrl=s.baseUrl.substring(0,s.baseUrl.length-1)),s.headers=l(t.headers,e.headers),s},l=(...t)=>{let e=new Headers;for(let s of t)if(s&&"object"==typeof s)for(let[t,i]of s instanceof Headers?s.entries():Object.entries(s))if(null===i)e.delete(t);else if(Array.isArray(i))for(let s of i)e.append(t,s);else void 0!==i&&e.set(t,"object"==typeof i?JSON.stringify(i):i);return e};class c{_fns;constructor(){this._fns=[]}eject(t){let e=this._fns.indexOf(t);-1!==e&&(this._fns=[...this._fns.slice(0,e),...this._fns.slice(e+1)])}use(t){this._fns=[...this._fns,t]}}let d={bodySerializer:t=>JSON.stringify(t)},f=(t,e,s)=>{"string"==typeof s?t.append(e,s):t.append(e,JSON.stringify(s))},p={bodySerializer:t=>{let e=new URLSearchParams;return Object.entries(t).forEach(([t,s])=>{null!=s&&(Array.isArray(s)?s.forEach(s=>f(e,t,s)):f(e,t,s))}),e}},y=o({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),m={"Content-Type":"application/json"},b=(t={})=>({...d,baseUrl:"",fetch:globalThis.fetch,headers:m,parseAs:"auto",querySerializer:y,...t}),v=(t={})=>{let e=h(b(),t),s=()=>({...e}),i={request:new c,response:new c},r=async t=>{let s={...e,...t,headers:l(e.headers,t.headers)};s.body&&s.bodySerializer&&(s.body=s.bodySerializer(s.body)),s.body||s.headers.delete("Content-Type");let r=new Request(u({baseUrl:s.baseUrl??"",path:s.path,query:s.query,querySerializer:"function"==typeof s.querySerializer?s.querySerializer:o(s.querySerializer),url:s.url}),{redirect:"follow",...s});for(let t of i.request._fns)r=await t(r,s);let n=s.fetch,a=await n(r);for(let t of i.response._fns)a=await t(a,r,s);let h={request:r,response:a};if(a.ok){if(204===a.status||"0"===a.headers.get("Content-Length"))return{data:{},...h};if("stream"===s.parseAs)return{data:a.body,...h};let t=("auto"===s.parseAs?(t=>{if(t)return t.startsWith("application/json")||t.endsWith("+json")?"json":"multipart/form-data"===t?"formData":["application/","audio/","image/","video/"].some(e=>t.startsWith(e))?"blob":t.startsWith("text/")?"text":void 0})(a.headers.get("Content-Type")):s.parseAs)??"json",e=await a[t]();return"json"===t&&s.responseTransformer&&(e=await s.responseTransformer(e)),{data:e,...h}}let c=await a.text();if(s.throwOnError)throw Error(c);try{c=JSON.parse(c)}catch{}return{error:c||{},...h}};return{connect:t=>r({...t,method:"CONNECT"}),delete:t=>r({...t,method:"DELETE"}),get:t=>r({...t,method:"GET"}),getConfig:s,head:t=>r({...t,method:"HEAD"}),interceptors:i,options:t=>r({...t,method:"OPTIONS"}),patch:t=>r({...t,method:"PATCH"}),post:t=>r({...t,method:"POST"}),put:t=>r({...t,method:"PUT"}),request:r,setConfig:t=>(e=h(e,t),s()),trace:t=>r({...t,method:"TRACE"})}}},7045:function(t,e,s){s.d(e,{j:function(){return n}});var i=s(4112),r=s(5345),n=new class extends i.l{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},8238:function(t,e,s){s.d(e,{V:function(){return i}});var i=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}()},7853:function(t,e,s){s.d(e,{N:function(){return n}});var i=s(4112),r=s(5345),n=new class extends i.l{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}}},1733:function(t,e,s){s.d(e,{A:function(){return o},z:function(){return u}});var i=s(5345),r=s(8238),n=s(1255),a=s(7989),o=class extends a.F{#r;#n;#a;#o;#u;#h;constructor(t){super(),this.#h=!1,this.#u=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#a=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#r=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#r,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#o?.promise}setOptions(t){this.options={...this.#u,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#a.remove(this)}setData(t,e){let s=(0,i.oE)(this.state.data,t,this.options);return this.#l({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#l({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#o?.promise;return this.#o?.cancel(t),e?e.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#r)}isActive(){return this.observers.some(t=>!1!==(0,i.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#o?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#o?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#o&&(this.#h?this.#o.cancel({revert:!0}):this.#o.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#o)return this.#o.continueRetry(),this.#o.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,r=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#h=!0,s.signal)})},a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,i.cG)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(r(s),this.#h=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};r(a),this.options.behavior?.onFetch(a,this),this.#n=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:"fetch",meta:a.fetchOptions?.meta});let o=t=>{(0,n.DV)(t)&&t.silent||this.#l({type:"error",error:t}),(0,n.DV)(t)||(this.#a.config.onError?.(t,this),this.#a.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#o=(0,n.Mz)({initialPromise:e?.initialPromise,fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){o(t);return}this.#a.config.onSuccess?.(t,this),this.#a.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#o.start()}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,n.DV)(s)&&s.revert&&this.#n)return{...this.#n,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},946:function(t,e,s){s.d(e,{S:function(){return m}});var i=s(5345),r=s(1733),n=s(8238),a=s(4112),o=class extends a.l{constructor(t={}){super(),this.config=t,this.#c=new Map}#c;build(t,e,s){let n=e.queryKey,a=e.queryHash??(0,i.Rm)(n,e),o=this.get(a);return o||(o=new r.A({cache:this,queryKey:n,queryHash:a,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(n)}),this.add(o)),o}add(t){this.#c.has(t.queryHash)||(this.#c.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#c.get(t.queryHash);e&&(t.destroy(),e===t&&this.#c.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#c.get(t)}getAll(){return[...this.#c.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},u=s(7989),h=s(1255),l=class extends u.F{#d;#f;#o;constructor(t){super(),this.mutationId=t.mutationId,this.#f=t.mutationCache,this.#d=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#d.includes(t)||(this.#d.push(t),this.clearGcTimeout(),this.#f.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#d=this.#d.filter(e=>e!==t),this.scheduleGc(),this.#f.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#d.length||("pending"===this.state.status?this.scheduleGc():this.#f.remove(this))}continue(){return this.#o?.continue()??this.execute(this.state.variables)}async execute(t){this.#o=(0,h.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#f.canRun(this)});let e="pending"===this.state.status,s=!this.#o.canStart();try{if(!e){this.#l({type:"pending",variables:t,isPaused:s}),await this.#f.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#l({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#o.start();return await this.#f.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#f.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#l({type:"success",data:i}),i}catch(e){try{throw await this.#f.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#f.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#l({type:"error",error:e})}}finally{this.#f.runNext(this)}}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#d.forEach(e=>{e.onMutationUpdate(t)}),this.#f.notify({mutation:this,type:"updated",action:t})})}},c=class extends a.l{constructor(t={}){super(),this.config=t,this.#p=new Map,this.#y=Date.now()}#p;#y;build(t,e,s){let i=new l({mutationCache:this,mutationId:++this.#y,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=d(t),s=this.#p.get(e)??[];s.push(t),this.#p.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=d(t);if(this.#p.has(e)){let s=this.#p.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#p.delete(e):this.#p.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#p.get(d(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#p.get(d(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#p.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,i.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return n.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(i.ZT))))}};function d(t){return t.options.scope?.id??String(t.mutationId)}var f=s(7045),p=s(7853);function y(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var m=class{#m;#f;#u;#b;#v;#g;#w;#C;constructor(t={}){this.#m=t.queryCache||new o,this.#f=t.mutationCache||new c,this.#u=t.defaultOptions||{},this.#b=new Map,this.#v=new Map,this.#g=0}mount(){this.#g++,1===this.#g&&(this.#w=f.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#m.onFocus())}),this.#C=p.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#m.onOnline())}))}unmount(){this.#g--,0===this.#g&&(this.#w?.(),this.#w=void 0,this.#C?.(),this.#C=void 0)}isFetching(t){return this.#m.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#f.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#m.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),r=this.#m.build(this,s);return t.revalidateIfStale&&r.isStaleByTime((0,i.KC)(s.staleTime,r))&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#m.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let r=this.defaultQueryOptions({queryKey:t}),n=this.#m.get(r.queryHash),a=n?.state.data,o=(0,i.SE)(e,a);if(void 0!==o)return this.#m.build(this,r).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return n.V.batch(()=>this.#m.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#m.get(e.queryHash)?.state}removeQueries(t){let e=this.#m;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#m,i={type:"active",...t};return n.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(n.V.batch(()=>this.#m.findAll(t).map(t=>t.cancel(s)))).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#m.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#m.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#m.build(this,e);return s.isStaleByTime((0,i.KC)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let r=async()=>{let s;let r=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},l=(0,i.cG)(t.options,t.fetchOptions),c=async(e,s,r)=>{if(u)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:s,direction:r?"backward":"forward",meta:t.options.meta};h(n);let a=await l(n),{maxPages:o}=t.options,c=r?i.Ht:i.VX;return{pages:c(e.pages,a,o),pageParams:c(e.pageParams,s,o)}};if(n&&a.length){let t="backward"===n,e={pages:a,pageParams:o},i=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:y)(r,e);s=await c(e,i,t)}else{s=await c({pages:[],pageParams:[]},o[0]??r.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=y(r,s);if(null==t)break;s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#f.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#m}getMutationCache(){return this.#f}getDefaultOptions(){return this.#u}setDefaultOptions(t){this.#u=t}setQueryDefaults(t,e){this.#b.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#b.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#v.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#v.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#u.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===i.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#u.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#m.clear(),this.#f.clear()}}},7989:function(t,e,s){s.d(e,{F:function(){return r}});var i=s(5345),r=class{#O;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#O=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#O&&(clearTimeout(this.#O),this.#O=void 0)}}},1255:function(t,e,s){s.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return l}});var i=s(7045),r=s(7853),n=s(5345);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||r.N.isOnline()}var u=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function l(t){let e,s,h,l=!1,c=0,d=!1,f=new Promise((t,e)=>{s=t,h=e}),p=()=>i.j.isFocused()&&("always"===t.networkMode||r.N.isOnline())&&t.canRun(),y=()=>o(t.networkMode)&&t.canRun(),m=i=>{d||(d=!0,t.onSuccess?.(i),e?.(),s(i))},b=s=>{d||(d=!0,t.onError?.(s),e?.(),h(s))},v=()=>new Promise(s=>{e=t=>{(d||p())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),g=()=>{let e;if(d)return;let s=0===c?t.initialPromise:void 0;try{e=s??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(m).catch(e=>{if(d)return;let s=t.retry??(n.sk?0:3),i=t.retryDelay??a,r="function"==typeof i?i(c,e):i,o=!0===s||"number"==typeof s&&c<s||"function"==typeof s&&s(c,e);if(l||!o){b(e);return}c++,t.onFail?.(c,e),(0,n._v)(r).then(()=>p()?void 0:v()).then(()=>{l?b(e):g()})})};return{promise:f,cancel:e=>{d||(b(new u(e)),t.abort?.())},continue:()=>(e?.(),f),cancelRetry:()=>{l=!0},continueRetry:()=>{l=!1},canStart:y,start:()=>(y()?g():v().then(g),f)}}},4112:function(t,e,s){s.d(e,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},5345:function(t,e,s){s.d(e,{CN:function(){return q},Ht:function(){return O},KC:function(){return u},Kp:function(){return o},Nc:function(){return h},PN:function(){return a},Rm:function(){return d},SE:function(){return n},VS:function(){return y},VX:function(){return C},X7:function(){return c},Ym:function(){return f},ZT:function(){return r},_v:function(){return g},_x:function(){return l},cG:function(){return S},oE:function(){return w},sk:function(){return i},to:function(){return p}});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function h(t,e){return"function"==typeof t?t(e):t}function l(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==d(a,e.options))return!1}else if(!p(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function c(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(f(e.options.mutationKey)!==f(n))return!1}else if(!p(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>b(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!p(t[s],e[s]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function m(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!v(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(v(s)&&s.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function v(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function w(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=m(e)&&m(s);if(i||b(e)&&b(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];(!i&&r.includes(o)||i)&&void 0===e[o]&&void 0===s[o]?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(t,e):e}function C(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function O(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var q=Symbol();function S(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==q?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}},9827:function(t,e,s){s.d(e,{NL:function(){return a},aH:function(){return o}});var i=s(2265),r=s(7437),n=i.createContext(void 0),a=t=>{let e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=t=>{let{client:e,children:s}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(n.Provider,{value:e,children:s})}}}]);