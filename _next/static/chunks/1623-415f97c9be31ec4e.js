"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1623],{2894:function(t,e,s){s.d(e,{R:function(){return u},m:function(){return n}});var i=s(8238),a=s(7989),r=s(1255),n=class extends a.F{#t;#e;#s;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#e.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(t){this.#s=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#i({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});let e="pending"===this.state.status,s=!this.#s.canStart();try{if(!e){this.#i({type:"pending",variables:t,isPaused:s}),await this.#e.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#i({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#s.start();return await this.#e.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#e.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#i({type:"success",data:i}),i}catch(e){try{throw await this.#e.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#e.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#i({type:"error",error:e})}}finally{this.#e.runNext(this)}}#i(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#e.notify({mutation:this,type:"updated",action:t})})}};function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},2979:function(t,e,s){s.d(e,{S:function(){return y}});var i=s(5345),a=s(1733),r=s(8238),n=s(4112),u=class extends n.l{constructor(t={}){super(),this.config=t,this.#a=new Map}#a;build(t,e,s){let r=e.queryKey,n=e.queryHash??(0,i.Rm)(r,e),u=this.get(n);return u||(u=new a.A({cache:this,queryKey:r,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(r)}),this.add(u)),u}add(t){this.#a.has(t.queryHash)||(this.#a.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#a.get(t.queryHash);e&&(t.destroy(),e===t&&this.#a.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){r.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#a.get(t)}getAll(){return[...this.#a.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){r.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},o=s(2894),h=class extends n.l{constructor(t={}){super(),this.config=t,this.#r=new Map,this.#n=Date.now()}#r;#n;build(t,e,s){let i=new o.m({mutationCache:this,mutationId:++this.#n,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=l(t),s=this.#r.get(e)??[];s.push(t),this.#r.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=l(t);if(this.#r.has(e)){let s=this.#r.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#r.delete(e):this.#r.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#r.get(l(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#r.get(l(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){r.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#r.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,i.X7)(t,e))}notify(t){r.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return r.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(i.ZT))))}};function l(t){return t.options.scope?.id??String(t.mutationId)}var c=s(7045),d=s(7853);function f(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var y=class{#u;#e;#o;#h;#l;#c;#d;#f;constructor(t={}){this.#u=t.queryCache||new u,this.#e=t.mutationCache||new h,this.#o=t.defaultOptions||{},this.#h=new Map,this.#l=new Map,this.#c=0}mount(){this.#c++,1===this.#c&&(this.#d=c.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#u.onFocus())}),this.#f=d.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#u.onOnline())}))}unmount(){this.#c--,0===this.#c&&(this.#d?.(),this.#d=void 0,this.#f?.(),this.#f=void 0)}isFetching(t){return this.#u.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#e.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#u.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),a=this.#u.build(this,s);return t.revalidateIfStale&&a.isStaleByTime((0,i.KC)(s.staleTime,a))&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#u.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let a=this.defaultQueryOptions({queryKey:t}),r=this.#u.get(a.queryHash),n=r?.state.data,u=(0,i.SE)(e,n);if(void 0!==u)return this.#u.build(this,a).setData(u,{...s,manual:!0})}setQueriesData(t,e,s){return r.V.batch(()=>this.#u.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#u.get(e.queryHash)?.state}removeQueries(t){let e=this.#u;r.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#u,i={type:"active",...t};return r.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(r.V.batch(()=>this.#u.findAll(t).map(t=>t.cancel(s)))).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return r.V.batch(()=>{if(this.#u.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(r.V.batch(()=>this.#u.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#u.build(this,e);return s.isStaleByTime((0,i.KC)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let a=async()=>{let s;let a=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],u=t.state.data?.pageParams||[],o=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},l=(0,i.cG)(t.options,t.fetchOptions),c=async(e,s,a)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,direction:a?"backward":"forward",meta:t.options.meta};h(r);let n=await l(r),{maxPages:u}=t.options,c=a?i.Ht:i.VX;return{pages:c(e.pages,n,u),pageParams:c(e.pageParams,s,u)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:u},i=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:f)(a,e);s=await c(e,i,t)}else{s=await c({pages:[],pageParams:[]},u[0]??a.initialPageParam);let t=e??n.length;for(let e=1;e<t;e++){let t=f(a,s);if(null==t)break;s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(a,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=a}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return d.N.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#u}getMutationCache(){return this.#e}getDefaultOptions(){return this.#o}setDefaultOptions(t){this.#o=t}setQueryDefaults(t,e){this.#h.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#h.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#l.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#l.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#o.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===i.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#o.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#u.clear(),this.#e.clear()}}}}]);