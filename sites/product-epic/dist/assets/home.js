var e,t,n,r,i,a,o,s,c,l,u=Symbol.for(`pv`),d={},f=[],p=/^m(i|n|o|s|text|space)$/,m=Array.isArray,h=f.slice,g=Object.assign;function _(e){e&&e.parentNode&&e.remove()}function v(n,r,i,a,o){var s={type:n,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:u,__v:o||++t,__i:-1,__u:0};return!o&&e.vnode&&e.vnode(s),s}function y(e){return e.children}function b(e,t){this.props=e,this.context=t,this.__g=0}function x(e,t){if(t==null)return e.__&&x(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!=`function`||e.props.__P?null:x(e)}function S(t){var n,r=t.__v,i=r.__e,a=[],o=[],s=t.__P;s&&((n=g({constructor:u},r)).__v=r.__v+1,e.vnode&&e.vnode(n),N(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i||x(r),32&r.__u,o),n.__v=r.__v,n.__.__k[n.__i]=n,ee(a,n,o),r.__=r.__e=null,n.__e!=i&&C(n))}function C(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),C(e)}function w(t){(8&t.__g||(t.__g|=8,n.push(t),i++))&&r==e.debounceRendering||((r=e.debounceRendering)||queueMicrotask)(T)}function T(){try{for(var e,t=1;n.length;)n.length>t&&n.sort(a),e=n.shift(),t=n.length,8&e.__g&&S(e)}finally{(i=n.length)&&(r||queueMicrotask)(T)}}function E(e,t,n,r,i,a,o,s,c,l,u){var p,m,h,g,_,v,y=r.__k||f,b=t.length;for(c=D(n,t,y,c,b),p=0;p<b;p++)(h=n.__k[p])!=null&&(m=~h.__i&&y[h.__i]||d,h.__i=p,v=N(e,h,m,i,a,o,s,c,l,u),g=h.__e,(m.ref!=h.ref||8&m.__u)&&(m.ref&&ne(m.ref,null,h,m),h.ref&&u.push(h.ref,h.__c||g,h)),_||=g,4&h.__u?(c=O(h,c,e,!m.__v),m.__e&&(m.__e=null)):typeof h.type==`function`&&v!==void 0?c=v:g&&(c=g.nextSibling),h.__u&=-21);return n.__e=_,c}function D(e,t,n,r,i){var a,o,s,c,l,d,f,p,h,g=n.length,_=g,b=0,S=0,C=e.__k=Array(i);for(a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o!=`object`||o.constructor===String?o=C[a]=v(null,o):m(o)?o=C[a]=v(y,{children:o}):o.constructor===u&&o.__b?o=C[a]=v(o.type,o.props,o.key,o.ref,o.__v):C[a]=o,c=a+b,o.__=e,o.__b=e.__b+1,s=null,~(l=o.__i=k(o,n,c,_))&&(_--,(s=n[l])&&(s.__u|=2)),s&&s.__v?(o.__u|=16,l==c-1?b--:l==c+1?b++:l!=c&&(l>c?b--:b++,S=1)):(~l||(i>g?b--:i<g&&b++),typeof o.type!=`function`&&(o.__u|=4))):C[a]=null;if(S){for(d=[],f=[],a=0;a<i;a++)if((o=C[a])&&16&o.__u){for(b=0,p=d.length;b<p;)d[h=b+p>>1]<o.__i?b=h+1:p=h;d[b]=o.__i,f[a]=b+1}for(b=d.length;a--;)f[a]&&(f[a]==b?b--:C[a].__u|=4)}if(_)for(a=0;a<g;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=x(s)),re(s,s));return r}function O(e,t,n,r){var i,a,o,s;if(typeof e.type==`function`){if(e.props.__P)return t;if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&(i[a].__=e,t=O(i[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=x(e))&&!t.parentNode&&(t=null),o=e.__e,s=t;s&&s.nodeType==8;)s=s.nextSibling;for(o!=s&&(!r&&n.moveBefore&&o.parentNode?n.moveBefore(o,t):n.insertBefore(o,t||null)),t=o;(t&&=t.nextSibling)&&t.nodeType==8&&!t.data.startsWith(`$s`););return t}function k(e,t,n,r){var i,a=e.key,o=e.type,s=t[n],c=s&&!(2&s.__u);if(s===null&&a==null||c&&a==s.key&&o==s.type)return n;if(r>+!!c){for(i=n-1;i>=0;i--)if((s=t[i])&&!(2&s.__u)&&a==s.key&&o==s.type)return i;for(i=n+1;i<t.length;i++)if((s=t[i])&&!(2&s.__u)&&a==s.key&&o==s.type)return i}return-1}function A(e,t,n){n??=``,t[0]==`-`?e.setProperty(t,n):e[t]=n}function j(e,t,n,r,i){var a,o;if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||A(e.style,t);if(n)for(t in n)r&&n[t]==r[t]||A(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)typeof n!=`function`&&(n=null),typeof r!=`function`&&(r=null),(e.__e||={})[t]=n,n&&r||(o=l[t]||(l[t]=M(t)),(e.__a||={})[t]=c,a=t!=(t=t.replace(s,`$1`)),(t=t.slice(2))[0]<`a`&&(t=t.toLowerCase()),n?e.addEventListener(t,o,a):e.removeEventListener(t,o,a));else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;return}catch{}if(typeof n==`function`)return;n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n)}}function M(t){return function(n){var r=this.__e;if(r){if(r=r[t],n[o]==null)n[o]=c++;else if(n[o]<this.__a[t])return;return r(e.event?e.event(n):n)}}}function N(t,n,r,i,a,o,s,c,l,d){var p,h,v,S,C,w,T,D,O,k,A,j,M,N,ee,ne,I,ae,L=n.type;if(n.constructor!==u)return null;128&r.__u&&(l=32&r.__u,p=r.__c.__z)&&(n.__u|=l,h=o=[],p.nodeType==8?c=P(p,o):o.push(p),c=o[0]||c),(p=e.__b)&&p(n);n:if(typeof L==`function`){v=s.length;try{if(D=n.props,O=(p=L.prototype)&&p.render,k=(p=L.contextType)&&i[p.__c],A=p?k?k.props.value:p.__:i,(S=r.__c)?(n.__c=S,2&S.__g&&(S.__g|=1)):(O?n.__c=S=new L(D,A):(n.__c=S=new b(D,A),S.constructor=L,S.render=ie),k&&k.sub(S),S.state||(S.state={}),S.__n=i,S.__g|=8,S.__h=[],S.__k=[]),O&&(S.__s||(S.__s=S.state),L.getDerivedStateFromProps&&(S.__s==S.state&&(S.__s=g({},S.__s)),g(S.__s,L.getDerivedStateFromProps(D,S.__s)))),C=S.props,w=S.state,S.__v=n,r.__c){if(D!==C&&O&&!L.getDerivedStateFromProps&&S.componentWillReceiveProps&&S.componentWillReceiveProps(D,A),n.__v==r.__v&&!(8&S.__g)||!(4&S.__g)&&S.shouldComponentUpdate&&!1===S.shouldComponentUpdate(D,S.__s,A)){n.__v!=r.__v&&(S.props=D,S.state=S.__s,S.__g&=-9),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),f.push.apply(S.__h,S.__k),S.__k=[],S.__h.length&&s.push(S),c=x(r);break n}S.componentWillUpdate&&S.componentWillUpdate(D,S.__s,A),O&&S.componentDidUpdate&&S.__h.push(function(){S.componentDidUpdate(C,w,T)})}else O&&!L.getDerivedStateFromProps&&S.componentWillMount&&S.componentWillMount(),O&&S.componentDidMount&&S.__h.push(S.componentDidMount);S.context=A,S.props=D,S.__P=t,S.__g&=-5,j=e.__r,M=O?25:0;do S.__g&=-9,j&&j(n),p=S.render(S.props,S.state=S.__s,S.context);while(8&S.__g&&++M<25);O&&(f.push.apply(S.__h,S.__k),S.__k=[]),S.state=S.__s,S.getChildContext&&(i=g({},i,S.getChildContext())),O&&r.__c&&S.getSnapshotBeforeUpdate&&(T=S.getSnapshotBeforeUpdate(C,w)),N=p&&p.type===y&&p.key==null?p.props.children:p,D.__P&&(p=c,a=(t=D.__P).namespaceURI,l=o=null,r.props&&r.props.__P!=t&&(r.__k.some(function(e){e&&re(e,e)}),r.__k=null),c=r.__k?x(r,0):null),c=E(t,m(N)?N:[N],n,r,i,a,o,s,c,l,d),D.__P&&(n.__e=null,c=p),n.__u&=-161,h&&h.some(_),S.__h.length&&s.push(S),1&S.__g&&(S.__g&=-4)}catch(t){if(s.length=v,n.__v=null,l||o){if(t&&t.then){if(n.__u|=128|l,o){for(~(I=o.indexOf(c||void 0))||(I=o.length);(ae=o[I-1])&&ae.nodeType==8;)I--;for(;I<o.length;I++)if(ae=o[I]){if(o[I]=null,ee){if(ae==ne)break}else{if(ae.nodeType!=8)break;ae.data.startsWith(`$s`)&&(ne=P(ee=ae))}}}if(!ee){for(;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;ee=c}(p=P(ee=n.__c.__z||(n.__c.__z=ee)))?(n.__e=ee,c=p):n.__e=c,c&&=c.nextSibling}else o&&o.some(_)}else n.__e=r.__e;n.__k||=r.__k||[],t&&t.then||F(n),e.__e(t,n,r)}}else c=n.__e=te(r.__e,n,r,i,a,o,s,l,d,t);return(p=e.diffed)&&p(n),c}function P(e,t){if(e&&e.nodeType==8&&e.data.startsWith(`$s`))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith(`$s`))n++;else if(e.data.startsWith(`/$s`)&&!--n)return e}t&&t.push(e)}}function F(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(F))}function ee(t,n,r){for(var i=0;i<r.length;)ne(r[i++],r[i++],r[i++]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function te(t,n,r,i,a,o,s,c,l,u){var f,g,v,y,b,S,C,w,T=r.props||d,D=n.props,O=n.type;if(O==`svg`?a=`http://www.w3.org/2000/svg`:O==`math`?a=`http://www.w3.org/1998/Math/MathML`:a||=`http://www.w3.org/1999/xhtml`,o){for(f=0;f<o.length;f++)if((b=o[f])&&(O?b.localName==O:b.nodeType==3)){t=b,o[f]=null;break}}if(!t){if(w=u.ownerDocument||document,!O)return w.createTextNode(D);t=w.createElementNS(a,O,D.is?D:u),c&&=(e.__m&&e.__m(n,o),!1),o=null}if(O){if(u=O==`template`&&t.content||t,o=O==`textarea`&&D.defaultValue!=null?null:o&&h.call(u.childNodes),!c&&o)for(T={},f=0;f<t.attributes.length;f++)T[(b=t.attributes[f]).name]=b.value;for(f in T)b=T[f],f==`dangerouslySetInnerHTML`?v=b:f==`children`||f in D||f==`value`&&`defaultValue`in D||f==`checked`&&`defaultChecked`in D||j(t,f,null,b,a);for(f in D)b=D[f],f==`children`?y=b:f==`dangerouslySetInnerHTML`?g=b:f==`value`?S=b:f==`checked`?C=b:c&&typeof b!=`function`||T[f]===b||j(t,f,b,T[f],a);g?(c||v&&(g.__html==v.__html||g.__html==t.innerHTML)||(t.innerHTML=g.__html),n.__k=[]):(v&&(t.textContent=``),(O==`foreignObject`||a==`http://www.w3.org/1998/Math/MathML`&&p.test(O))&&(a=`http://www.w3.org/1999/xhtml`),E(u,m(y)?y:[y],n,r,i,a,o,s,o?o[0]:r.__k&&x(r,0),c,l),o&&o.some(_)),c&&O!=`textarea`||(f=`value`,O==`progress`&&S==null?t.removeAttribute(f):S==null||S===t[f]&&(O!=`progress`||S)||j(t,f,S,T[f],a),f=`checked`,C!=null&&C!=t[f]&&j(t,f,C,T[f],a))}else T===D||c&&t.data==D||(t.data=D);return t}function ne(t,n,r,i){try{typeof t==`function`?n?n.__x=t(n)||1:(i&&=i.__c||i.__e)&&(n=i.__x)&&(i.__x=null,typeof n==`function`?n():t(null)):t.current=n}catch(t){e.__e(t,r)}}function re(t,n,r){var i,a,o,s;if(e.unmount&&e.unmount(t),!(i=t.ref)||i.current&&i.current!=t.__e||ne(i,null,n,t),i=t.__c){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.__P=i.__n=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&re(i[s],n,typeof t.type!=`function`||r&&!t.props.__P);!r&&(i=t.__c)&&(i=i.__z)&&(a=P(i,o=[]))&&(i==t.__e&&o.some(_),_(a),_(i)),r||_(t.__e),t.__e=t.__c=t.__=null}function ie(e,t,n){return this.constructor(e,n)}e={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!(1&a.__g)){a.__g|=4;try{if((s=(o=a.constructor)&&o.getDerivedStateFromError)&&a.setState(o.getDerivedStateFromError(e)),a.componentDidCatch&&(a.componentDidCatch(e,r||{}),s=1),s&&8&a.__g)return void(a.__g|=2)}catch(t){e=t}}throw i=0,e}},t=0,b.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=g({},this.state)),typeof e==`function`&&(e=e(g({},n),this.props)),e&&(g(n,e),this.__v&&(t&&this.__k.push(t),w(this)))},b.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),w(this))},b.prototype.render=y,n=[],i=0,a=function(e,t){return e.__v.__b-t.__v.__b},o=Symbol(),s=/(PointerCapture)$|Capture$/i,c=0,l={};var I=Symbol.for(`pv`),ae=0;Array.isArray;function L(t,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l&&typeof t!=`function`)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:t,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:I,__v:--ae,__i:-1,__u:0};return(a||o)&&(u.__source=a,u.__self=o),e.vnode&&e.vnode(u),u}function oe({loaderText:e=``,initialFrameLabel:t=``,frameLabels:n,invertedFrameLabel:r,invalidEmailMessage:i,successToastMessage:a}){return L(`div`,{"data-component":`epic-stage`,className:`epic-stage-root`,"data-frame-labels":n?JSON.stringify(n):void 0,"data-inverted-frame-label":r||void 0,"data-invalid-email-message":i||void 0,"data-success-toast-message":a||void 0,children:[L(`div`,{id:`loader`,children:[L(`svg`,{width:`20`,className:`eye`,viewBox:`0 0 120 70`,children:[L(`g`,{className:`e-rays`}),L(`path`,{className:`e-lid`,pathLength:`1`,d:`M8 35 C30 8 90 8 112 35 C90 62 30 62 8 35 Z`}),L(`circle`,{className:`e-iris`,cx:`60`,cy:`35`,r:`14`}),L(`circle`,{className:`e-core`,cx:`60`,cy:`35`,r:`5.5`})]}),L(`div`,{className:`loader-num`,children:`0`}),e&&L(`p`,{className:`loader-latin`,children:e})]}),L(`div`,{className:`bg-layer`}),L(`div`,{className:`vignette`}),L(`div`,{className:`grain`}),L(`div`,{className:`lid lid-top`,id:`lidT`}),L(`div`,{className:`lid lid-bottom`,id:`lidB`}),L(`div`,{id:`stage`,children:[L(`div`,{className:`stage-clip`,id:`stageClip`,children:L(`canvas`,{id:`gl`})}),L(`div`,{className:`frame`,id:`frame`,children:[L(`span`,{className:`corner c-tl`}),L(`span`,{className:`corner c-tr`}),L(`span`,{className:`corner c-br`}),L(`span`,{className:`corner c-bl`}),L(`div`,{className:`frame-label`,id:`frameLabel`,children:t})]})]}),L(`div`,{id:`cursor`,children:[L(`div`,{className:`c-ring`}),L(`div`,{className:`c-dot`})]})]})}function se(...e){}var ce=new Map,R=new WeakMap,z=()=>{};function B(e,t,n){return ce.set(e,n),n=>t({...n,"data-component":e})}function V(e){let t=R.get(e);if(t){R.delete(e);try{t()}catch(t){console.error(`[register] Cleanup failed`,t,e)}}}function H(e){if(typeof document>`u`)return z;let t=e??document,n=[];return ce.forEach((e,r)=>{let i=`[data-component="${CSS.escape(r)}"]`,a=Array.from(t.querySelectorAll(i));`${r}`,a.length,t instanceof HTMLElement&&t.matches(i)&&a.unshift(t);for(let t of a)if(!R.has(t))try{let r=e(t);R.set(t,typeof r==`function`?r:z),n.push(t)}catch(e){console.error(`[register] Failed to mount component "${r}"`,e,t)}}),()=>{n.reverse().forEach(V),n.length=0}}var le={name:`epic-stage`,title:`Epic Picture-in-Picture Stage`,category:`interactive-stage`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,scriptsDir:`./_scripts`,exports:[`EpicStage`,`mount`,`manifest`]},U=1e3,ue=1001,W=1002,G=1003,de=1004,fe=1005,pe=1006,K=1007,me=1008,he=1009,ge=1010,_e=1011,ve=1012,ye=1013,be=1014,xe=1015,Se=1016,Ce=1017,we=1018,Te=1020,Ee=35902,De=1021,Oe=1022,ke=1023,Ae=1026,je=1027,Me=1028,Ne=1029,Pe=1030,Fe=1031,Ie=1033,Le=33776,Re=33777,ze=33778,Be=33779,Ve=35840,He=35841,Ue=35842,We=35843,Ge=36196,Ke=37492,qe=37496,Je=37808,Ye=37809,Xe=37810,Ze=37811,Qe=37812,$e=37813,et=37814,tt=37815,nt=37816,rt=37817,it=37818,at=37819,ot=37820,st=37821,ct=36492,lt=36494,ut=36495,dt=36283,ft=36284,pt=36285,mt=36286,ht=2300,gt=2301,_t=2302,vt=2400,yt=2401,bt=2402,xt=3200,St=3201,Ct=`srgb`,wt=`srgb-linear`,Tt=`linear`,Et=`srgb`,Dt=7680,Ot=35044,kt=2e3,At=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},jt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Mt=Math.PI/180,Nt=180/Math.PI;function Pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+`-`+jt[t&255]+jt[t>>8&255]+`-`+jt[t>>16&15|64]+jt[t>>24&255]+`-`+jt[n&63|128]+jt[n>>8&255]+`-`+jt[n>>16&255]+jt[n>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function Ft(e,t,n){return Math.max(t,Math.min(n,e))}function It(e,t){return(e%t+t)%t}function Lt(e,t,n){return(1-n)*e+n*t}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var q=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vt=new J,Ht=new Bt,Ut=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wt.makeScale(e,t)),this}rotate(e){return this.premultiply(Wt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wt=new Ut;function Gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qt(){let e=Kt(`canvas`);return e.style.display=`block`,e}var Jt={};function Yt(e){e in Jt||(Jt[e]=!0,console.warn(e))}function Xt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Zt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),en=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tn(){let e={enabled:!0,workingColorSpace:wt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=rn(e.r),e.g=rn(e.g),e.b=rn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=an(e.r),e.g=an(e.g),e.b=an(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Tt:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Yt(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Yt(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[wt]:{primaries:t,whitePoint:r,transfer:Tt,toXYZ:$t,fromXYZ:en,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:t,whitePoint:r,transfer:Et,toXYZ:$t,fromXYZ:en,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),e}var nn=tn();function rn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function an(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var on,sn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{on===void 0&&(on=Kt(`canvas`)),on.width=e.width,on.height=e.height;let t=on.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=on}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Kt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=rn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(rn(t[e]/255)*255):t[e]=rn(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},cn=0,ln=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=Pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(un(r[t].image)):e.push(un(r[t]))}else e=un(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function un(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?sn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var dn=0,fn=new J,pn=class e extends At{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ue,i=ue,a=pe,o=me,s=ke,c=he,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dn++}),this.uuid=Pt(),this.name=``,this.source=new ln(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fn).x}get height(){return this.source.getSize(fn).y}get depth(){return this.source.getSize(fn).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case U:e.x-=Math.floor(e.x);break;case ue:e.x=e.x<0?0:1;break;case W:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case U:e.y-=Math.floor(e.y);break;case ue:e.y=e.y<0?0:1;break;case W:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null,pn.DEFAULT_MAPPING=300,pn.DEFAULT_ANISOTROPY=1;var mn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hn=class extends At{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);let r=new pn({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:pe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ln(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},gn=class extends hn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_n=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=G,this.minFilter=G,this.wrapR=ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vn=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=G,this.minFilter=G,this.wrapR=ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,xn):xn.fromBufferAttribute(r,t),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Sn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Sn.copy(e.boundingBox)),Sn.applyMatrix4(e.matrixWorld),this.union(Sn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kn),An.subVectors(this.max,kn),Cn.subVectors(e.a,kn),wn.subVectors(e.b,kn),Tn.subVectors(e.c,kn),En.subVectors(wn,Cn),Dn.subVectors(Tn,wn),On.subVectors(Cn,Tn);let t=[0,-En.z,En.y,0,-Dn.z,Dn.y,0,-On.z,On.y,En.z,0,-En.x,Dn.z,0,-Dn.x,On.z,0,-On.x,-En.y,En.x,0,-Dn.y,Dn.x,0,-On.y,On.x,0];return!Nn(t,Cn,wn,Tn,An)||(t=[1,0,0,0,1,0,0,0,1],!Nn(t,Cn,wn,Tn,An))?!1:(jn.crossVectors(En,Dn),t=[jn.x,jn.y,jn.z],Nn(t,Cn,wn,Tn,An))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bn=[new J,new J,new J,new J,new J,new J,new J,new J],xn=new J,Sn=new yn,Cn=new J,wn=new J,Tn=new J,En=new J,Dn=new J,On=new J,kn=new J,An=new J,jn=new J,Mn=new J;function Nn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Mn.fromArray(e,a);let o=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),s=t.dot(Mn),c=n.dot(Mn),l=r.dot(Mn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Pn=new yn,Fn=new J,In=new J,Ln=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Pn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fn.subVectors(e,this.center);let t=Fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(In.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fn.copy(e.center).add(In)),this.expandByPoint(Fn.copy(e.center).sub(In))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rn=new J,zn=new J,Bn=new J,Vn=new J,Hn=new J,Un=new J,Wn=new J,Gn=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zn.copy(e).add(t).multiplyScalar(.5),Bn.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(zn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Bn),o=Vn.dot(this.direction),s=-Vn.dot(Bn),c=Vn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zn).addScaledVector(Bn,d),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),r=Rn.dot(Rn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,r,i){Hn.subVectors(t,e),Un.subVectors(n,e),Wn.crossVectors(Hn,Un);let a=this.direction.dot(Wn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);let s=o*this.direction.dot(Un.crossVectors(Vn,Un));if(s<0)return null;let c=o*this.direction.dot(Hn.cross(Vn));if(c<0||s+c>a)return null;let l=-o*Vn.dot(Wn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),i=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yn,e,Xn)}lookAt(e,t,n){let r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Zn.crossVectors(n,$n),Zn.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Zn.crossVectors(n,$n)),Zn.normalize(),Qn.crossVectors($n,Zn),r[0]=Zn.x,r[4]=Qn.x,r[8]=$n.x,r[1]=Zn.y,r[5]=Qn.y,r[9]=$n.y,r[2]=Zn.z,r[6]=Qn.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=qn.set(r[0],r[1],r[2]).length(),a=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);let s=1/i,c=1/a,l=1/o;return Jn.elements[0]*=s,Jn.elements[1]*=s,Jn.elements[2]*=s,Jn.elements[4]*=c,Jn.elements[5]*=c,Jn.elements[6]*=c,Jn.elements[8]*=l,Jn.elements[9]*=l,Jn.elements[10]*=l,t.setFromRotationMatrix(Jn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=kt){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=kt){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qn=new J,Jn=new Kn,Yn=new J(0,0,0),Xn=new J(1,1,1),Zn=new J,Qn=new J,$n=new J,er=new Kn,tr=new Bt,nr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ft(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return er.makeRotationFromQuaternion(e),this.setFromRotationMatrix(er,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tr.setFromEuler(this),this.setFromQuaternion(tr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nr.DEFAULT_ORDER=`XYZ`;var rr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ir=0,ar=new J,or=new Bt,sr=new Kn,cr=new J,lr=new J,ur=new J,dr=new Bt,fr=new J(1,0,0),pr=new J(0,1,0),mr=new J(0,0,1),hr={type:`added`},gr={type:`removed`},_r={type:`childadded`,child:null},vr={type:`childremoved`,child:null},yr=class e extends At{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=Pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new nr,r=new Bt,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kn},normalMatrix:{value:new Ut}}),this.matrix=new Kn,this.matrixWorld=new Kn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(fr,e)}rotateY(e){return this.rotateOnAxis(pr,e)}rotateZ(e){return this.rotateOnAxis(mr,e)}translateOnAxis(e,t){return ar.copy(e).applyQuaternion(this.quaternion),this.position.add(ar.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fr,e)}translateY(e){return this.translateOnAxis(pr,e)}translateZ(e){return this.translateOnAxis(mr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(lr,cr,this.up):sr.lookAt(cr,lr,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),or.setFromRotationMatrix(sr),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hr),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gr),vr.child=e,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hr),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,ur),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,dr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};yr.DEFAULT_UP=new J(0,1,0),yr.DEFAULT_MATRIX_AUTO_UPDATE=!0,yr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var br=new J,xr=new J,Sr=new J,Cr=new J,wr=new J,Tr=new J,Er=new J,Dr=new J,Or=new J,kr=new J,Ar=new mn,jr=new mn,Mr=new mn,Nr=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),br.subVectors(e,t),r.cross(br);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){br.subVectors(r,t),xr.subVectors(n,t),Sr.subVectors(e,t);let a=br.dot(br),o=br.dot(xr),s=br.dot(Sr),c=xr.dot(xr),l=xr.dot(Sr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cr)!==null&&Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Cr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Cr.x),s.addScaledVector(a,Cr.y),s.addScaledVector(o,Cr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ar.setScalar(0),jr.setScalar(0),Mr.setScalar(0),Ar.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,n),Mr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ar,i.x),a.addScaledVector(jr,i.y),a.addScaledVector(Mr,i.z),a}static isFrontFacing(e,t,n,r){return br.subVectors(n,t),xr.subVectors(e,t),br.cross(xr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return br.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),br.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wr.subVectors(r,n),Tr.subVectors(i,n),Dr.subVectors(e,n);let s=wr.dot(Dr),c=Tr.dot(Dr);if(s<=0&&c<=0)return t.copy(n);Or.subVectors(e,r);let l=wr.dot(Or),u=Tr.dot(Or);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(wr,a);kr.subVectors(e,i);let f=wr.dot(kr),p=Tr.dot(kr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wr,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Lr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nn.workingColorSpace){if(e=It(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Lr(i,r,e+1/3),this.g=Lr(i,r,e),this.b=Lr(i,r,e-1/3)}return nn.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Pr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return nn.workingToColorSpace(Rr.copy(this),e),Math.round(Ft(Rr.r*255,0,255))*65536+Math.round(Ft(Rr.g*255,0,255))*256+Math.round(Ft(Rr.b*255,0,255))}getHexString(e=Ct){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.workingToColorSpace(Rr.copy(this),t);let n=Rr.r,r=Rr.g,i=Rr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=nn.workingColorSpace){return nn.workingToColorSpace(Rr.copy(this),t),e.r=Rr.r,e.g=Rr.g,e.b=Rr.b,e}getStyle(e=Ct){nn.workingToColorSpace(Rr.copy(this),e);let t=Rr.r,n=Rr.g,r=Rr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Ir);let n=Lt(Fr.h,Ir.h,t),r=Lt(Fr.s,Ir.s,t),i=Lt(Fr.l,Ir.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rr=new Y;Y.NAMES=Pr;var zr=0,Br=class extends At{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=Pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dt,this.stencilZFail=Dt,this.stencilZPass=Dt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hr=new J,Ur=new q,Wr=0,Gr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ot,this.updateRanges=[],this.gpuType=xe,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix4(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyNormalMatrix(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.transformDirection(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Kr=class extends Gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qr=class extends Gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Jr=class extends Gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yr=0,Xr=new Kn,Zr=new yr,Qr=new J,$r=new yn,ei=new yn,ti=new J,ni=class e extends At{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yr++}),this.uuid=Pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Gt(e)?qr:Kr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ut().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xr.makeRotationFromQuaternion(e),this.applyMatrix4(Xr),this}rotateX(e){return Xr.makeRotationX(e),this.applyMatrix4(Xr),this}rotateY(e){return Xr.makeRotationY(e),this.applyMatrix4(Xr),this}rotateZ(e){return Xr.makeRotationZ(e),this.applyMatrix4(Xr),this}translate(e,t,n){return Xr.makeTranslation(e,t,n),this.applyMatrix4(Xr),this}scale(e,t,n){return Xr.makeScale(e,t,n),this.applyMatrix4(Xr),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Jr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$r.setFromBufferAttribute(n),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,$r.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,$r.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint($r.min),this.boundingBox.expandByPoint($r.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if($r.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ei.setFromBufferAttribute(n),this.morphTargetsRelative?(ti.addVectors($r.min,ei.min),$r.expandByPoint(ti),ti.addVectors($r.max,ei.max),$r.expandByPoint(ti)):($r.expandByPoint(ei.min),$r.expandByPoint(ei.max))}$r.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ti.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ti));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ti.fromBufferAttribute(a,t),o&&(Qr.fromBufferAttribute(e,t),ti.add(Qr)),r=Math.max(r,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Gr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Gr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},ri=new Kn,ii=new Gn,ai=new Ln,oi=new J,si=new J,ci=new J,li=new J,ui=new J,di=new J,fi=new J,pi=new J,mi=class extends yr{constructor(e=new ni,t=new Vr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ui.fromBufferAttribute(s,e),a?di.addScaledVector(ui,r):di.addScaledVector(ui.sub(t),r))}t.add(di)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere),ai.applyMatrix4(i),ii.copy(e.ray).recast(e.near),ai.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ai,oi)===null||ii.origin.distanceToSquared(oi)>(e.far-e.near)**2)||(ri.copy(i).invert(),ii.copy(e.ray).applyMatrix4(ri),(n.boundingBox===null||ii.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=gi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=gi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=gi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=gi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function hi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;pi.copy(s),pi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(pi);return l<n.near||l>n.far?null:{distance:l,point:pi.clone(),object:e}}function gi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,si),e.getVertexPosition(c,ci),e.getVertexPosition(l,li);let u=hi(e,t,n,r,si,ci,li,fi);if(u){let e=new J;Nr.getBarycoord(fi,si,ci,li,e),i&&(u.uv=Nr.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=Nr.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=Nr.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Nr.getNormal(si,ci,li,t.normal),u.face=t,u.barycoord=e}return u}var _i=class e extends ni{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Jr(c,3)),this.setAttribute(`normal`,new Jr(l,3)),this.setAttribute(`uv`,new Jr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function yi(e){let t={};for(let n=0;n<e.length;n++){let r=vi(e[n]);for(let e in r)t[e]=r[e]}return t}function bi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nn.workingColorSpace}var Si={clone:vi,merge:yi},Ci=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ci,this.fragmentShader=wi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=bi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ei=class extends yr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Kn,this.projectionMatrix=new Kn,this.projectionMatrixInverse=new Kn,this.coordinateSystem=kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new J,Oi=new q,ki=new q,Ai=class extends Ei{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nt*2*Math.atan(Math.tan(Mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Oi,ki),t.subVectors(ki,Oi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ji=-90,Mi=1,Ni=class extends yr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ai(ji,Mi,e,t);r.layers=this.layers,this.add(r);let i=new Ai(ji,Mi,e,t);i.layers=this.layers,this.add(i);let a=new Ai(ji,Mi,e,t);a.layers=this.layers,this.add(a);let o=new Ai(ji,Mi,e,t);o.layers=this.layers,this.add(o);let s=new Ai(ji,Mi,e,t);s.layers=this.layers,this.add(s);let c=new Ai(ji,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Pi=class extends pn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _i(5,5,5),i=new Ti({name:`CubemapFromEquirect`,uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new mi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=pe),new Ni(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ii=class extends yr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Li={type:`move`},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Li)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zi=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Y(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Bi=class extends yr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ot,this.updateRanges=[],this.version=0,this.uuid=Pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hi=new J,Ui=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix4(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyNormalMatrix(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.transformDirection(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Gr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wi=class extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gi,Ki=new J,qi=new J,Ji=new J,Yi=new q,Xi=new q,Zi=new Kn,Qi=new J,$i=new J,ea=new J,ta=new q,na=new q,ra=new q,ia=class extends yr{constructor(e=new Wi){if(super(),this.isSprite=!0,this.type=`Sprite`,Gi===void 0){Gi=new ni;let e=new Vi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute(`position`,new Ui(e,3,0,!1)),Gi.setAttribute(`uv`,new Ui(e,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new q(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),qi.setFromMatrixScale(this.matrixWorld),Zi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Ji.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;aa(Qi.set(-.5,-.5,0),Ji,a,qi,r,i),aa($i.set(.5,-.5,0),Ji,a,qi,r,i),aa(ea.set(.5,.5,0),Ji,a,qi,r,i),ta.set(0,0),na.set(1,0),ra.set(1,1);let o=e.ray.intersectTriangle(Qi,$i,ea,!1,Ki);if(o===null&&(aa($i.set(-.5,.5,0),Ji,a,qi,r,i),na.set(0,1),o=e.ray.intersectTriangle(Qi,ea,$i,!1,Ki),o===null))return;let s=e.ray.origin.distanceTo(Ki);s<e.near||s>e.far||t.push({distance:s,point:Ki.clone(),uv:Nr.getInterpolation(Ki,Qi,$i,ea,ta,na,ra,new q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function aa(e,t,n,r,i,a){Yi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Xi.copy(Yi):(Xi.x=a*Yi.x-i*Yi.y,Xi.y=i*Yi.x+a*Yi.y),e.copy(t),e.x+=Xi.x,e.y+=Xi.y,e.applyMatrix4(Zi)}var oa=class extends pn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=G,l=G,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sa=class extends Gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ca=new Kn,la=new Kn,ua=[],da=new yn,fa=new Kn,pa=new mi,ma=new Ln,ha=class extends mi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,fa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ca),da.copy(e.boundingBox).applyMatrix4(ca),this.boundingBox.union(da)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ca),ma.copy(e.boundingSphere).applyMatrix4(ca),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ca),la.multiplyMatrices(n,ca),pa.matrixWorld=la,pa.raycast(e,ua);for(let e=0,n=ua.length;e<n;e++){let n=ua[e];n.instanceId=i,n.object=this,t.push(n)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new oa(new Float32Array(r*this.count),r,this.count,Me,xe));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ga=new J,_a=new J,va=new Ut,ya=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ga.subVectors(n,t).cross(_a.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||va.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ba=new Ln,xa=new J,Sa=class{constructor(e=new ya,t=new ya,n=new ya,r=new ya,i=new ya,a=new ya){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kt){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ba.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ba.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ba)}intersectsSprite(e){return ba.center.set(0,0,0),ba.radius=.7071067811865476,ba.applyMatrix4(e.matrixWorld),this.intersectsSphere(ba)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ca=class extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wa=new J,Ta=new J,Ea=new Kn,Da=new Gn,Oa=new Ln,ka=new J,Aa=new J,ja=class extends yr{constructor(e=new ni,t=new Ca){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)wa.fromBufferAttribute(t,e-1),Ta.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=wa.distanceTo(Ta);e.setAttribute(`lineDistance`,new Jr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=i,e.ray.intersectsSphere(Oa)===!1)return;Ea.copy(r).invert(),Da.copy(e.ray).applyMatrix4(Ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ma(this,e,Da,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ma(this,e,Da,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ma(this,e,Da,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ma(this,e,Da,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ma(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(wa.fromBufferAttribute(s,i),Ta.fromBufferAttribute(s,a),n.distanceSqToSegment(wa,Ta,ka,Aa)>r)return;ka.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ka);if(!(c<t.near||c>t.far))return{distance:c,point:Aa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Na=new J,Pa=new J,Fa=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Na.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Na.distanceTo(Pa);e.setAttribute(`lineDistance`,new Jr(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ia=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},La=new Kn,Ra=new Gn,za=new Ln,Ba=new J,Va=class extends yr{constructor(e=new ni,t=new Ia){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),za.radius+=i,e.ray.intersectsSphere(za)===!1)return;La.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(La);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ba.fromBufferAttribute(l,n),Ha(Ba,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ba.fromBufferAttribute(l,a),Ha(Ba,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ha(e,t,n,r,i,a,o){let s=Ra.distanceSqToPoint(e);if(s<n){let n=new J;Ra.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends pn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wa=class extends pn{constructor(e,t,n=be,r,i,a,o=G,s=G,c,l=Ae,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ln(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ga=class e extends ni{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new q;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Jr(a,3)),this.setAttribute(`normal`,new Jr(o,3)),this.setAttribute(`uv`,new Jr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ka=class e extends ni{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Jr(u,3)),this.setAttribute(`normal`,new Jr(d,3)),this.setAttribute(`uv`,new Jr(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new q,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class e extends ni{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Jr(i,3)),this.setAttribute(`normal`,new Jr(i.slice(),3)),this.setAttribute(`uv`,new Jr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new J,r=new J,i=new J;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new J;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new J;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new J,t=new J,n=new J,r=new J,o=new q,s=new q,c=new q;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Ja=new J,Ya=new J,Xa=new J,Za=new Nr,Qa=class extends ni{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(Mt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Za;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Za.getNormal(Xa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Za[c[e]],o=Za[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Xa.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Xa.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Ja.fromBufferAttribute(a,t),Ya.fromBufferAttribute(a,n),d.push(Ja.x,Ja.y,Ja.z),d.push(Ya.x,Ya.y,Ya.z)}this.setAttribute(`position`,new Jr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},$a=class e extends qa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},eo=class e extends ni{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Jr(p,3)),this.setAttribute(`normal`,new Jr(m,3)),this.setAttribute(`uv`,new Jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},to=class e extends ni{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Jr(p,3)),this.setAttribute(`normal`,new Jr(m,3)),this.setAttribute(`uv`,new Jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},no=class e extends ni{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new J,u=new J,d=new J;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Jr(o,3)),this.setAttribute(`normal`,new Jr(s,3)),this.setAttribute(`uv`,new Jr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ro=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},io=class extends ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ao=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=xt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function so(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function co(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var lo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},uo=class extends lo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vt,endingEnd:vt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case yt:i=e,o=2*t-n;break;case bt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case yt:a=e,s=2*n-t;break;case bt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},po=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ht:t=this.InterpolantFactoryMethodDiscrete;break;case gt:t=this.InterpolantFactoryMethodLinear;break;case _t:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ht;case this.InterpolantFactoryMethodLinear:return gt;case this.InterpolantFactoryMethodSmooth:return _t}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&co(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_t,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};mo.prototype.ValueTypeName=``,mo.prototype.TimeBufferType=Float32Array,mo.prototype.ValueBufferType=Float32Array,mo.prototype.DefaultInterpolation=gt;var ho=class extends mo{constructor(e,t,n){super(e,t,n)}};ho.prototype.ValueTypeName=`bool`,ho.prototype.ValueBufferType=Array,ho.prototype.DefaultInterpolation=ht,ho.prototype.InterpolantFactoryMethodLinear=void 0,ho.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};go.prototype.ValueTypeName=`color`;var _o=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};_o.prototype.ValueTypeName=`number`;var vo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},yo=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName=`quaternion`,yo.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends mo{constructor(e,t,n){super(e,t,n)}};bo.prototype.ValueTypeName=`string`,bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=ht,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`vector`;var So=class extends yr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Co=class extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(yr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wo=new Kn,To=new J,Eo=new J,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=he,this.map=null,this.mapPass=null,this.matrix=new Kn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;To.setFromMatrixPosition(e.matrixWorld),t.position.copy(To),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oo=new Kn,ko=new J,Ao=new J,jo=class extends Do{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new mn(2,1,1,1),new mn(0,1,1,1),new mn(3,1,1,1),new mn(1,1,1,1),new mn(3,0,1,1),new mn(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(ko),Ao.copy(n.position),Ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ao),n.updateMatrixWorld(),r.makeTranslation(-ko.x,-ko.y,-ko.z),Oo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo)}},Mo=class extends So{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new jo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},No=class extends Ei{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Po=class extends Do{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(yr.DEFAULT_UP),this.updateMatrix(),this.target=new yr,this.shadow=new Po}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Io=class extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ro(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ro();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ro(){return performance.now()}var zo=`\\[\\]\\.:\\/`,Bo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Vo=`[^\\[\\]\\.:\\/]`,Ho=`[^`+zo.replace(`\\.`,``)+`]`,Uo=`((?:WC+[\\/:])*)`.replace(`WC`,Vo),Wo=`(WCOD+)?`.replace(`WCOD`,Ho),Go=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Vo),Ko=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Vo),qo=RegExp(`^`+Uo+Wo+Go+Ko+`$`),Jo=[`material`,`materials`,`bones`,`map`],Yo=class{constructor(e,t,n){let r=n||Xo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Bo,``)}static parseTrackName(e){let t=qo.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Jo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xo.Composite=Yo,Xo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Xo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Xo.prototype.GetterByBindingType=[Xo.prototype._getValue_direct,Xo.prototype._getValue_array,Xo.prototype._getValue_arrayElement,Xo.prototype._getValue_toArray],Xo.prototype.SetterByBindingTypeAndVersioning=[[Xo.prototype._setValue_direct,Xo.prototype._setValue_direct_setNeedsUpdate,Xo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xo.prototype._setValue_array,Xo.prototype._setValue_array_setNeedsUpdate,Xo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xo.prototype._setValue_arrayElement,Xo.prototype._setValue_arrayElement_setNeedsUpdate,Xo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xo.prototype._setValue_fromArray,Xo.prototype._setValue_fromArray_setNeedsUpdate,Xo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zo=class extends Fa{constructor(e=10,t=16,n=8,r=64,i=4473924,a=8947848){i=new Y(i),a=new Y(a);let o=[],s=[];if(t>1)for(let n=0;n<t;n++){let r=n/t*(Math.PI*2),c=Math.sin(r)*e,l=Math.cos(r)*e;o.push(0,0,0),o.push(c,0,l);let u=n&1?i:a;s.push(u.r,u.g,u.b),s.push(u.r,u.g,u.b)}for(let t=0;t<n;t++){let c=t&1?i:a,l=e-e/n*t;for(let e=0;e<r;e++){let t=e/r*(Math.PI*2),n=Math.sin(t)*l,i=Math.cos(t)*l;o.push(n,0,i),s.push(c.r,c.g,c.b),t=(e+1)/r*(Math.PI*2),n=Math.sin(t)*l,i=Math.cos(t)*l,o.push(n,0,i),s.push(c.r,c.g,c.b)}}let c=new ni;c.setAttribute(`position`,new Jr(o,3)),c.setAttribute(`color`,new Jr(s,3));let l=new Ca({vertexColors:!0,toneMapped:!1});super(c,l),this.type=`PolarGridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};function Qo(e,t,n,r){let i=$o(r);switch(n){case De:return e*t;case Me:return e*t/i.components*i.byteLength;case Ne:return e*t/i.components*i.byteLength;case Pe:return e*t*2/i.components*i.byteLength;case Fe:return e*t*2/i.components*i.byteLength;case Oe:return e*t*3/i.components*i.byteLength;case ke:return e*t*4/i.components*i.byteLength;case Ie:return e*t*4/i.components*i.byteLength;case Le:case Re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ze:case Be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case He:case We:return Math.max(e,16)*Math.max(t,8)/4;case Ve:case Ue:return Math.max(e,8)*Math.max(t,8)/2;case Ge:case Ke:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Xe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ze:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case et:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case tt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case rt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case it:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case at:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ot:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case st:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ct:case lt:case ut:return Math.ceil(e/4)*Math.ceil(t/4)*16;case dt:case ft:return Math.ceil(e/4)*Math.ceil(t/4)*8;case pt:case mt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $o(e){switch(e){case he:case ge:return{byteLength:1,components:1};case ve:case _e:case Se:return{byteLength:2,components:1};case Ce:case we:return{byteLength:2,components:4};case be:case ye:case xe:return{byteLength:4,components:1};case Ee:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`177`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`177`);function es(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ts(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ns={basic:{uniforms:yi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:yi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:yi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:yi([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:yi([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:yi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:yi([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:yi([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:yi([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:yi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:yi([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distanceRGBA:{uniforms:yi([Z.common,Z.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distanceRGBA_vert,fragmentShader:X.distanceRGBA_frag},shadow:{uniforms:yi([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};ns.physical={uniforms:yi([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var rs={r:0,b:0,g:0},is=new nr,as=new Kn;function os(e,t,n,r,i,a,o){let s=new Y(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new mi(new _i(1,1,1),new Ti({name:`BackgroundCubeMaterial`,uniforms:vi(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),is.copy(n.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(as.makeRotationFromEuler(is)),u.material.toneMapped=nn.getTransfer(r.colorSpace)!==Et,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new mi(new eo(2,2),new Ti({name:`BackgroundMaterial`,uniforms:vi(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=nn.getTransfer(r.colorSpace)!==Et,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(rs,xi(e)),r.buffers.color.setClear(rs.r,rs.g,rs.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function ss(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function cs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ls(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function us(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ya,s=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function ds(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Fi(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var fs=4,ps=[.125,.215,.35,.446,.526,.582],ms=20,hs=new No,gs=new Y,_s=null,vs=0,ys=0,bs=!1,xs=(1+Math.sqrt(5))/2,Ss=1/xs,Cs=[new J(-xs,Ss,0),new J(xs,Ss,0),new J(-Ss,0,xs),new J(Ss,0,xs),new J(0,xs,-Ss),new J(0,xs,Ss),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],ws=new J,Ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ws}=i;_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=js(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=As(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,vs,ys),this._renderer.xr.enabled=bs,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pe,minFilter:pe,generateMipmaps:!1,type:Se,format:ke,colorSpace:wt,depthBuffer:!1},r=Ds(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ds(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Es(r)),this._blurMaterial=ks(r,e,t)}return r}_compileMaterial(e){let t=new mi(this._lodPlanes[0],e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,n,r,i){let a=new Ai(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(gs),c.toneMapping=0,c.autoClear=!1;let d=new Vr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new mi(new _i,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(gs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Os(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=js()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=As());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new mi(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Os(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,hs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Cs[(r-t-1)%Cs.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new mi(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ms;m>ms&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let h=[],g=0;for(let e=0;e<ms;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Os(t,3*v*(r>_-fs?r-_+fs:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,hs)}};function Es(e){let t=[],n=[],r=[],i=e,a=e-fs+1+ps.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-fs?s=ps[o-e+fs-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ni;h.setAttribute(`position`,new Gr(f,3)),h.setAttribute(`uv`,new Gr(p,2)),h.setAttribute(`faceIndex`,new Gr(m,1)),t.push(h),i>fs&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ds(e,t,n){let r=new gn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Os(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ks(e,t,n){let r=new Float32Array(ms),i=new J(0,1,0);return new Ti({name:`SphericalGaussianBlur`,defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function As(){return new Ti({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function js(){return new Ti({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ns(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ts(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ts(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ps(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Yt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Fs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Gt(n)?qr:Kr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Is(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ls(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Rs(e,t,n){let r=new WeakMap,i=new mn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new _n(h,p,m,u);g.type=xe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function zs(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Bs=new pn,Vs=new Wa(1,1),Hs=new _n,Us=new vn,Ws=new Pi,Gs=[],Ks=[],qs=new Float32Array(16),Js=new Float32Array(9),Ys=new Float32Array(4);function Xs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Gs[i];if(a===void 0&&(a=new Float32Array(i),Gs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $s(e,t){let n=Ks[t];n===void 0&&(n=new Int32Array(t),Ks[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2fv(this.addr,t),Qs(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zs(n,t))return;e.uniform3fv(this.addr,t),Qs(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4fv(this.addr,t),Qs(n,t)}}function ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;Ys.set(r),e.uniformMatrix2fv(this.addr,!1,Ys),Qs(n,r)}}function ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;Js.set(r),e.uniformMatrix3fv(this.addr,!1,Js),Qs(n,r)}}function oc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;qs.set(r),e.uniformMatrix4fv(this.addr,!1,qs),Qs(n,r)}}function sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2iv(this.addr,t),Qs(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zs(n,t))return;e.uniform3iv(this.addr,t),Qs(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4iv(this.addr,t),Qs(n,t)}}function dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2uiv(this.addr,t),Qs(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zs(n,t))return;e.uniform3uiv(this.addr,t),Qs(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4uiv(this.addr,t),Qs(n,t)}}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Vs.compareFunction=515,a=Vs):a=Bs,n.setTexture2D(t||a,i)}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Us,i)}function _c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ws,i)}function vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Hs,i)}function yc(e){switch(e){case 5126:return ec;case 35664:return tc;case 35665:return nc;case 35666:return rc;case 35674:return ic;case 35675:return ac;case 35676:return oc;case 5124:case 35670:return sc;case 35667:case 35671:return cc;case 35668:case 35672:return lc;case 35669:case 35673:return uc;case 5125:return dc;case 36294:return fc;case 36295:return pc;case 36296:return mc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return _c;case 36289:case 36303:case 36311:case 36292:return vc}}function bc(e,t){e.uniform1fv(this.addr,t)}function xc(e,t){let n=Xs(t,this.size,2);e.uniform2fv(this.addr,n)}function Sc(e,t){let n=Xs(t,this.size,3);e.uniform3fv(this.addr,n)}function Cc(e,t){let n=Xs(t,this.size,4);e.uniform4fv(this.addr,n)}function wc(e,t){let n=Xs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Tc(e,t){let n=Xs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ec(e,t){let n=Xs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Dc(e,t){e.uniform1iv(this.addr,t)}function Oc(e,t){e.uniform2iv(this.addr,t)}function kc(e,t){e.uniform3iv(this.addr,t)}function Ac(e,t){e.uniform4iv(this.addr,t)}function jc(e,t){e.uniform1uiv(this.addr,t)}function Mc(e,t){e.uniform2uiv(this.addr,t)}function Nc(e,t){e.uniform3uiv(this.addr,t)}function Pc(e,t){e.uniform4uiv(this.addr,t)}function Fc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Bs,a[e])}function Ic(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Us,a[e])}function Lc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ws,a[e])}function Rc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Hs,a[e])}function zc(e){switch(e){case 5126:return bc;case 35664:return xc;case 35665:return Sc;case 35666:return Cc;case 35674:return wc;case 35675:return Tc;case 35676:return Ec;case 5124:case 35670:return Dc;case 35667:case 35671:return Oc;case 35668:case 35672:return kc;case 35669:case 35673:return Ac;case 5125:return jc;case 36294:return Mc;case 36295:return Nc;case 36296:return Pc;case 35678:case 36198:case 36298:case 36306:case 35682:return Fc;case 35679:case 36299:case 36307:return Ic;case 35680:case 36300:case 36308:case 36293:return Lc;case 36289:case 36303:case 36311:case 36292:return Rc}}var Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yc(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zc(t.type)}},Hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Wc(e,t){e.seq.push(t),e.map[t.id]=t}function Gc(e,t,n){let r=e.name,i=r.length;for(Uc.lastIndex=0;;){let a=Uc.exec(r),o=Uc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Wc(n,l===void 0?new Bc(s,e,t):new Vc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Hc(s),Wc(n,e)),n=e}}}var Kc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Gc(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function qc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Jc=37297,Yc=0;function Xc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Zc=new Ut;function Qc(e){nn._getMatrix(Zc,nn.workingColorSpace,e);let t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(nn.getTransfer(e)){case Tt:return[t,`LinearTransferOETF`];case Et:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function $c(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Xc(e.getShaderSource(t),r)}return i}function el(e,t){let n=Qc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function tl(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var nl=new J;function rl(){return nn.getLuminanceCoefficients(nl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${nl.x.toFixed(4)}, ${nl.y.toFixed(4)}, ${nl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(sl).join(`
`)}function al(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ol(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function sl(e){return e!==``}function cl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ll(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ul=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(e){return e.replace(ul,pl)}var fl=new Map;function pl(e,t){let n=X[t];if(n===void 0){let e=fl.get(t);if(e!==void 0)n=X[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return dl(n)}var ml=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(e){return e.replace(ml,gl)}function gl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function _l(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function vl(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function yl(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function bl(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function xl(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Sl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Cl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vl(n),l=yl(n),u=bl(n),d=xl(n),f=Sl(n),p=il(n),m=al(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sl).join(`
`),_.length>0&&(_+=`
`)):(g=[_l(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(sl).join(`
`),_=[_l(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:tl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,el(`linearToOutputTexel`,n.outputColorSpace),rl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(sl).join(`
`)),o=dl(o),o=cl(o,n),o=ll(o,n),s=dl(s),s=cl(s,n),s=ll(s,n),o=hl(o),s=hl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qc(i,i.VERTEX_SHADER,y),S=qc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=$c(i,x,`vertex`),r=$c(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Kc(i,h),T=ol(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Jc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var wl=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new El(e),t.set(e,n)),n}},El=class{constructor(e){this.id=wl++,this.code=e,this.usedTimes=0}};function Dl(e,t,n,r,i,a,o){let s=new rr,c=new Tl,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ns[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=_.isInstancedMesh===!0,P=_.isBatchedMesh===!0,F=!!a.map,ee=!!a.matcap,te=!!x,ne=!!a.aoMap,re=!!a.lightMap,ie=!!a.bumpMap,I=!!a.normalMap,ae=!!a.displacementMap,L=!!a.emissiveMap,oe=!!a.metalnessMap,se=!!a.roughnessMap,ce=a.anisotropy>0,R=a.clearcoat>0,z=a.dispersion>0,B=a.iridescence>0,V=a.sheen>0,H=a.transmission>0,le=ce&&!!a.anisotropyMap,U=R&&!!a.clearcoatMap,ue=R&&!!a.clearcoatNormalMap,W=R&&!!a.clearcoatRoughnessMap,G=B&&!!a.iridescenceMap,de=B&&!!a.iridescenceThicknessMap,fe=V&&!!a.sheenColorMap,pe=V&&!!a.sheenRoughnessMap,K=!!a.specularMap,me=!!a.specularColorMap,he=!!a.specularIntensityMap,ge=H&&!!a.transmissionMap,_e=H&&!!a.thicknessMap,ve=!!a.gradientMap,ye=!!a.alphaMap,be=a.alphaTest>0,xe=!!a.alphaHash,Se=!!a.extensions,Ce=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let we={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:wt,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:I,displacementMap:f&&ae,emissiveMap:L,normalMapObjectSpace:I&&a.normalMapType===1,normalMapTangentSpace:I&&a.normalMapType===0,metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:le,clearcoat:R,clearcoatMap:U,clearcoatNormalMap:ue,clearcoatRoughnessMap:W,dispersion:z,iridescence:B,iridescenceMap:G,iridescenceThicknessMap:de,sheen:V,sheenColorMap:fe,sheenRoughnessMap:pe,specularMap:K,specularColorMap:me,specularIntensityMap:he,transmission:H,transmissionMap:ge,thicknessMap:_e,gradientMap:ve,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:xe,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:ne&&h(a.aoMap.channel),lightMapUv:re&&h(a.lightMap.channel),bumpMapUv:ie&&h(a.bumpMap.channel),normalMapUv:I&&h(a.normalMap.channel),displacementMapUv:ae&&h(a.displacementMap.channel),emissiveMapUv:L&&h(a.emissiveMap.channel),metalnessMapUv:oe&&h(a.metalnessMap.channel),roughnessMapUv:se&&h(a.roughnessMap.channel),anisotropyMapUv:le&&h(a.anisotropyMap.channel),clearcoatMapUv:U&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ue&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:de&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:pe&&h(a.sheenRoughnessMap.channel),specularMapUv:K&&h(a.specularMap.channel),specularColorMapUv:me&&h(a.specularColorMap.channel),specularIntensityMapUv:he&&h(a.specularIntensityMap.channel),transmissionMapUv:ge&&h(a.transmissionMap.channel),thicknessMapUv:_e&&h(a.thicknessMap.channel),alphaMapUv:ye&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(I||ce),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(F||ye),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:M,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&nn.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&a.emissiveMap.isVideoTexture===!0&&nn.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Se&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Se&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=ns[t];n=Si.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Cl(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Ol(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||kl),r.length>1&&r.sort(t||Al),i.length>1&&i.sort(t||Al)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Ml(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new jl,e.set(t,[i])):n>=r.length?(i=new jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new Y};break;case`SpotLight`:n={position:new J,direction:new J,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function Pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fl=0;function Il(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ll(e){let t=new Nl,n=Pl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Kn,o=new Kn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Il);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Fl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Rl(e){let t=new Ll(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function zl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Rl(e),t.set(n,[a])):r>=i.length?(a=new Rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hl(e,t,n){let r=new Sa,i=new q,a=new q,o=new mn,s=new ao({depthPacking:St}),c=new oo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Bl,fragmentShader:Vl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ni;m.setAttribute(`position`,new Gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new mi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:G,magFilter:G};d.map!==null&&d.map.dispose(),d.map=new gn(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new gn(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var Ul={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Wl(e,t){function n(){let t=!1,n=new mn,r=null,i=new mn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ul[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Y(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,ee={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new mn().fromArray(te),ie=new mn().fromArray(ne);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),le(!1),U(1),L(e.CULL_FACE),V(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return m!==t&&(e.useProgram(t),m=t,!0)}let z={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};z[103]=e.MIN,z[104]=e.MAX;let B={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function V(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(oe(e.BLEND),h=!1);else if(h===!1&&(L(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(z[n],z[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(B[r],B[i],B[o],B[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function H(t,n){t.side===2?oe(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),le(r),t.blending===1&&t.transparent===!1?V(0):V(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),W(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function le(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function U(t){t===0?oe(e.CULL_FACE):(L(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function ue(t){t!==O&&(M&&e.lineWidth(t),O=t)}function W(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):oe(e.POLYGON_OFFSET_FILL)}function G(t){t?L(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function de(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function fe(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function pe(){let t=ee[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function K(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function me(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function he(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function we(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Te(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ee(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},F=null,ee={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Y(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:R,setBlending:V,setMaterial:H,setFlipSided:le,setCullFace:U,setLineWidth:ue,setPolygonOffset:W,setScissorTest:G,activeTexture:de,bindTexture:fe,unbindTexture:pe,compressedTexImage2D:K,compressedTexImage3D:me,texImage2D:xe,texImage3D:Se,updateUBOMapping:Te,uniformBlockBinding:Ee,texStorage2D:ye,texStorage3D:be,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:_e,compressedTexSubImage3D:ve,scissor:Ce,viewport:we,reset:De}}function Gl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Kt(`canvas`)}function h(e,t,n){let r=1,i=be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Tt:nn.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(t,i){let a=r.get(t);if(t.isVideoTexture&&ve(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ae(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ae(a,t,i):n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ae(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?L(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let F={[U]:e.REPEAT,[ue]:e.CLAMP_TO_EDGE,[W]:e.MIRRORED_REPEAT},ee={[G]:e.NEAREST,[de]:e.NEAREST_MIPMAP_NEAREST,[fe]:e.NEAREST_MIPMAP_LINEAR,[pe]:e.LINEAR,[K]:e.LINEAR_MIPMAP_NEAREST,[me]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ne(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,F[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,F[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,F[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function re(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ie(e,t,n){return Math.floor(Math.floor(e/n)/t)}function I(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ie(n.start,r.width,4),c=ie(t.start,r.width,4);n.start<=i+1&&a===c&&ie(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=re(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=nn.getPrimaries(nn.workingColorSpace),r=o.colorSpace===``?null:nn.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=ye(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);ne(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===je,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&I(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=Qo(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=Qo(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=be(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=be(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function L(t,o,s){if(o.image.length!==6)return;let c=re(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=nn.getPrimaries(nn.workingColorSpace),r=o.colorSpace===``?null:nn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ye(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);ne(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=be(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),_e(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ge(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=ge(n);_e(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace),d=ge(n);r&&_e(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):_e(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,a.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),j(i.depthTexture,0);let o=a.__webglTexture,c=ge(i);if(i.depthTexture.format===1026)_e(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)_e(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function R(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?ce(i.__webglFramebuffer[0],t):ce(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(t,n,i){let a=r.get(t);n!==void 0&&oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&R(t)}function B(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&_e(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=ge(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),ne(e.TEXTURE_2D,a),oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ne(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&R(t)}function V(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let H=[],le=[];function he(t){if(t.samples>0){if(_e(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(H.length=0,le.length=0,H.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(H.push(l),le.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,le)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,H))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ge(e){return Math.min(i.maxSamples,e.samples)}function _e(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ve(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ye(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(nn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=M,this.setTexture3D=N,this.setTextureCube=P,this.rebindTextures=z,this.setupRenderTarget=B,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_e}function Kl(e,t){function n(n,r=``){let i,a=nn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ql=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new pn,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ti({vertexShader:ql,fragmentShader:Jl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new eo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends At{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new Yl,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new q,x=null,S=new Ai;S.viewport=new mn;let C=new Ai;C.viewport=new mn;let w=[S,C],T=new Io,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new Ri,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new Ri,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new Ri,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<`u`&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?je:Ae,a=h.stencil?Te:be);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gn(d.textureWidth,d.textureHeight,{format:ke,type:he,depthTexture:new Wa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new gn(f.framebufferWidth,f.framebufferHeight,{format:ke,type:he,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let j=new J,M=new J;function N(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far),S.layers.mask=e.layers.mask|2,C.layers.mask=e.layers.mask|4,T.layers.mask=S.layers.mask|C.layers.mask;let i=e.parent,a=T.cameras;P(T,i);for(let e=0;e<a.length;e++)P(a[e],i);a.length===2?N(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),F(e,T,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ee=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new Ai,o.layers.enable(r),o.viewport=new mn,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&u){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ee&&ee(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new es;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}},Zl=new nr,Ql=new Kn;function $l(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Zl.copy(o),Zl.x*=-1,Zl.y*=-1,Zl.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Zl.y*=-1,Zl.z*=-1),e.envMapRotation.value.setFromMatrix4(Ql.makeRotationFromEuler(Zl)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function eu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var tu=class{constructor(e={}){let{canvas:t=qt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Ct;let x=0,S=0,C=null,w=-1,T=null,E=new mn,D=new mn,O=null,k=new Y(0),A=0,j=t.width,M=t.height,N=1,P=null,F=null,ee=new mn(0,0,j,M),te=new mn(0,0,j,M),ne=!1,re=new Sa,ie=!1,I=!1,ae=new Kn,L=new Kn,oe=new J,se=new mn,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},R=!1;function z(){return C===null?N:1}let B=n;function V(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r177`),t.addEventListener(`webglcontextlost`,Ne,!1),t.addEventListener(`webglcontextrestored`,Pe,!1),t.addEventListener(`webglcontextcreationerror`,Fe,!1),B===null){let t=`webgl2`;if(B=V(t,e),B===null)throw V(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let H,le,U,ue,W,G,de,fe,pe,K,ge,_e,ve,ye,be,xe,Ce,we,Te,Ee,De,Oe,ke,Ae;function je(){H=new Ps(B),H.init(),Oe=new Kl(B,H),le=new ls(B,H,e,Oe),U=new Wl(B,H),le.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),ue=new Ls(B),W=new Ol,G=new Gl(B,H,U,W,le,Oe,ue),de=new ds(y),fe=new Ns(y),pe=new ts(B),ke=new ss(B,pe),K=new Fs(B,pe,ue,ke),ge=new zs(B,K,pe,ue),Te=new Rs(B,le,G),xe=new us(W),_e=new Dl(y,de,fe,H,le,ke,xe),ve=new $l(y,W),ye=new Ml,be=new zl(H),we=new os(y,de,fe,U,ge,f,s),Ce=new Hl(y,ge,le),Ae=new eu(B,ue,le,U),Ee=new cs(B,H,ue),De=new Is(B,H,ue),ue.programs=_e.programs,y.capabilities=le,y.extensions=H,y.properties=W,y.renderLists=ye,y.shadowMap=Ce,y.state=U,y.info=ue}je();let Me=new Xl(y,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=H.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=H.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(j,M,!1))},this.getSize=function(e){return e.set(j,M)},this.setSize=function(e,n,r=!0){Me.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(j=e,M=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(j*N,M*N).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,M=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(ee)},this.setViewport=function(e,t,n,r){e.isVector4?ee.set(e.x,e.y,e.z,e.w):ee.set(e,t,n,r),U.viewport(E.copy(ee).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(te)},this.setScissor=function(e,t,n,r){e.isVector4?te.set(e.x,e.y,e.z,e.w):te.set(e,t,n,r),U.scissor(D.copy(te).multiplyScalar(N).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(e){U.setScissorTest(ne=e)},this.setOpaqueSort=function(e){P=e},this.setTransparentSort=function(e){F=e},this.getClearColor=function(e){return e.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=we.getClearColor(),r=we.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,B.clearBufferuiv(B.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,B.clearBufferiv(B.COLOR,0,m))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ne,!1),t.removeEventListener(`webglcontextrestored`,Pe,!1),t.removeEventListener(`webglcontextcreationerror`,Fe,!1),we.dispose(),ye.dispose(),be.dispose(),W.dispose(),de.dispose(),fe.dispose(),ge.dispose(),ke.dispose(),Ae.dispose(),_e.dispose(),Me.dispose(),Me.removeEventListener(`sessionstart`,He),Me.removeEventListener(`sessionend`,Ue),We.stop()};function Ne(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Pe(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=ue.autoReset,t=Ce.enabled,n=Ce.autoUpdate,r=Ce.needsUpdate,i=Ce.type;je(),ue.autoReset=e,Ce.enabled=t,Ce.autoUpdate=n,Ce.needsUpdate=r,Ce.type=i}function Fe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ie(e){let t=e.target;t.removeEventListener(`dispose`,Ie),Le(t)}function Le(e){Re(e),W.remove(e)}function Re(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){_e.releaseProgram(e)}),e.isShaderMaterial&&_e.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=$e(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=K.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ke.setup(i,r,s,n,c);let h,g=Ee;if(c!==null&&(h=pe.get(c),g=De,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*z()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*z()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Yt(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(H.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?pe.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ze(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Xe(e,t,n),e.side=0,e.needsUpdate=!0,Xe(e,t,n),e.side=2):Xe(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=be.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ze(a,n,e),r.add(a)}else ze(t,n,e),r.add(t)}}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){W.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}H.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Be=null;function Ve(e){Be&&Be(e)}function He(){We.stop()}function Ue(){We.start()}let We=new es;We.setAnimationLoop(Ve),typeof self<`u`&&We.setContext(self),this.setAnimationLoop=function(e){Be=e,Me.setAnimationLoop(e),e===null?We.stop():We.start()},Me.addEventListener(`sessionstart`,He),Me.addEventListener(`sessionend`,Ue),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(t),t=Me.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=be.get(e,v.length),g.init(t),v.push(g),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),re.setFromProjectionMatrix(L),I=this.localClippingEnabled,ie=xe.init(this.clippingPlanes,I),h=ye.get(e,_.length),h.init(),_.push(h),Me.enabled===!0&&Me.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Ge(e,t,-1/0,y.sortObjects)}Ge(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(P,F),R=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,R&&we.addToRenderList(h,e),this.info.render.frame++,ie===!0&&xe.beginShadows();let n=g.state.shadowsArray;Ce.render(n,e,t),ie===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];qe(r,i,e,a)}R&&we.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ke(h,e,r,r.viewport)}}else i.length>0&&qe(r,i,e,t),R&&we.render(e),Ke(h,e,t);C!==null&&S===0&&(G.updateMultisampleRenderTarget(C),G.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),ke.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],ie===!0&&xe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Ge(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||re.intersectsSprite(e)){r&&se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L);let t=ge.update(e),i=e.material;i.visible&&h.push(e,t,i,n,se.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||re.intersectsObject(e))){let t=ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),se.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),se.copy(e.boundingSphere.center)),se.applyMatrix4(e.matrixWorld).applyMatrix4(L)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,se.z,o)}}else i.visible&&h.push(e,t,i,n,se.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ge(i[e],t,n,r)}function Ke(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),ie===!0&&xe.setGlobalState(y.clippingPlanes,n),r&&U.viewport(E.copy(r)),i.length>0&&Je(i,t,n),a.length>0&&Je(a,t,n),o.length>0&&Je(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function qe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new gn(1,1,{generateMipmaps:!0,type:H.has(`EXT_color_buffer_half_float`)||H.has(`EXT_color_buffer_float`)?Se:he,minFilter:me,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nn.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),R&&we.render(n);let c=y.toneMapping;y.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),ie===!0&&xe.setGlobalState(y.clippingPlanes,r),Je(e,n,r),G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a),H.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Ye(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a))}y.setRenderTarget(s),y.setClearColor(k,A),l!==void 0&&(r.viewport=l),y.toneMapping=c}function Je(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ye(o,t,n,s,l,c)}}function Ye(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function Xe(e,t,n){t.isScene!==!0&&(t=ce);let r=W.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=_e.getParameters(e,i.state,a,t,n),c=_e.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?fe:de).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ie),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Qe(e,s),u}else s.uniforms=_e.getUniforms(e),e.onBeforeCompile(s,y),u=_e.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=xe.uniform),Qe(e,s),r.needsLights=tt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Ze(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Kc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Qe(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function $e(e,t,n,r,i){t.isScene!==!0&&(t=ce),G.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wt,c=(r.isMeshStandardMaterial?fe:de).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=W.get(r),b=g.state.lights;if(ie===!0&&(I===!0||e!==T)){let t=e===T&&r.id===w;xe.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==xe.numPlanes||v.numIntersection!==xe.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=Xe(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(U.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){U.buffers.depth.getReversed()?(ae.copy(e.projectionMatrix),Zt(ae),Qt(ae),k.setValue(B,`projectionMatrix`,ae)):k.setValue(B,`projectionMatrix`,e.projectionMatrix),k.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(B,oe.setFromMatrixPosition(e.matrixWorld)),le.logarithmicDepthBuffer&&k.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(B,i,`bindMatrix`),k.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(B,`boneTexture`,e.boneTexture,G))}i.isBatchedMesh&&(k.setOptional(B,i,`batchingTexture`),k.setValue(B,`batchingTexture`,i._matricesTexture,G),k.setOptional(B,i,`batchingIdTexture`),k.setValue(B,`batchingIdTexture`,i._indirectTexture,G),k.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(B,`batchingColorTexture`,i._colorsTexture,G));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Te.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(B,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(B,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&et(A,O),a&&r.fog===!0&&ve.refreshFogUniforms(A,a),ve.refreshMaterialUniforms(A,r,N,M,g.state.transmissionRenderTarget[e.id]),Kc.upload(B,Ze(v),A,G)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Kc.upload(B,Ze(v),A,G),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(B,`center`,i.center),k.setValue(B,`modelViewMatrix`,i.modelViewMatrix),k.setValue(B,`normalMatrix`,i.normalMatrix),k.setValue(B,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ae.update(n,S),Ae.bind(n,S)}}return S}function et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let nt=B.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=W.get(e);if(s.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(B.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)G.setupRenderTarget(e);else if(s.__hasExternalTextures)G.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);G.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&G.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(ee).multiplyScalar(N).floor(),D.copy(te).multiplyScalar(N).floor(),O=ne;if(n!==0&&(i=nt),U.bindFramebuffer(B.FRAMEBUFFER,i)&&r&&U.drawBuffers(e,i),U.viewport(E),U.scissor(D),U.setScissorTest(O),a){let r=W.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=W.get(e.texture),i=t;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,n,i)}else if(e!==null&&n!==0){let t=W.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!le.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!le.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),B.readPixels(t,n,r,i,Oe.convert(c),Oe.convert(l),a))}finally{let e=C===null?null:W.get(C).__webglFramebuffer;U.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!le.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!le.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),B.readPixels(t,n,r,i,Oe.convert(l),Oe.convert(u),0);let f=C===null?null:W.get(C).__webglFramebuffer;U.bindFramebuffer(B.FRAMEBUFFER,f);let p=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xt(B,p,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.deleteBuffer(d),B.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;G.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()};let rt=B.createFramebuffer(),it=B.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(Yt(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Oe.convert(t.format),_=Oe.convert(t.type),v;t.isData3DTexture?(G.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(G.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(G.setTexture2D(t,0),v=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(B.UNPACK_ROW_LENGTH),b=B.getParameter(B.UNPACK_IMAGE_HEIGHT),x=B.getParameter(B.UNPACK_SKIP_PIXELS),S=B.getParameter(B.UNPACK_SKIP_ROWS),C=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,l),B.pixelStorei(B.UNPACK_SKIP_ROWS,u),B.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);U.bindFramebuffer(B.READ_FRAMEBUFFER,null),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(B.READ_FRAMEBUFFER,rt),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,it);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);U.bindFramebuffer(B.READ_FRAMEBUFFER,null),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(B.UNPACK_ROW_LENGTH,y),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(B.UNPACK_SKIP_PIXELS,x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),U.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return Yt(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&G.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?G.setTextureCube(e,0):e.isData3DTexture?G.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?G.setTexture2DArray(e,0):G.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,U.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nn._getDrawingBufferColorSpace(e),t.unpackColorSpace=nn._getUnpackColorSpace()}},nu=class extends Bi{constructor(){super();let e=new _i;e.deleteAttribute(`uv`);let t=new ro({side:1}),n=new ro,r=new Mo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new mi(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new ha(e,n,6),o=new yr;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new mi(e,ru(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new mi(e,ru(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new mi(e,ru(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new mi(e,ru(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new mi(e,ru(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new mi(e,ru(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ru(e){let t=new Vr;return t.color.setScalar(e),t}function iu(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function au(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ou={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},su={duration:.5,overwrite:!1,delay:0},cu,lu,uu,du=1e8,fu=1/du,pu=Math.PI*2,mu=pu/4,hu=0,gu=Math.sqrt,_u=Math.cos,vu=Math.sin,yu=function(e){return typeof e==`string`},bu=function(e){return typeof e==`function`},xu=function(e){return typeof e==`number`},Su=function(e){return e===void 0},Cu=function(e){return typeof e==`object`},wu=function(e){return e!==!1},Tu=function(){return typeof window<`u`},Eu=function(e){return bu(e)||yu(e)},Du=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Ou=Array.isArray,ku=/random\([^)]+\)/g,Au=/,\s*/g,ju=/(?:-?\.?\d|\.)+/gi,Mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nu=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fu=/[+-]=-?[.\d]+/,Iu=/[^,'"\[\]\s]+/gi,Lu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ru,zu,Bu,Vu,Hu={},Uu={},Wu,Gu=function(e){return(Uu=Cd(e,Hu))&&Up},Ku=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},qu=function(e,t){return!t&&console.warn(e)},Ju=function(e,t){return e&&(Hu[e]=t)&&Uu&&(Uu[e]=t)||Hu},Yu=function(){return 0},Xu={suppressEvents:!0,isStart:!0,kill:!1},Zu={suppressEvents:!0,kill:!1},Qu={suppressEvents:!0},$u={},ed=[],td={},nd,rd={},id={},ad=30,od=[],sd=``,cd=function(e){var t=e[0],n,r;if(Cu(t)||bu(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=od.length;r--&&!od[r].targetTest(t););n=od[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new $f(e[r],n)))||e.splice(r,1);return e},ld=function(e){return e._gsap||cd(sf(e))[0]._gsap},ud=function(e,t,n){return(n=e[t])&&bu(n)?e[t]():Su(n)&&e.getAttribute&&e.getAttribute(t)||n},dd=function(e,t){return(e=e.split(`,`)).forEach(t)||e},fd=function(e){return Math.round(e*1e5)/1e5||0},pd=function(e){return Math.round(e*1e7)/1e7||0},md=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},hd=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gd=function(){var e=ed.length,t=ed.slice(0),n,r;for(td={},ed.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_d=function(e){return!!(e._initted||e._startAt||e.add)},vd=function(e,t,n,r){ed.length&&!lu&&gd(),e.render(t,n,r||!!(lu&&t<0&&_d(e))),ed.length&&!lu&&gd()},yd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Iu).length<2?t:yu(e)?e.trim():e},bd=function(e){return e},xd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Sd=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Cd=function(e,t){for(var n in t)e[n]=t[n];return e},wd=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Cu(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Td=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ed=function(e){var t=e.parent||Ru,n=e.keyframes?Sd(Ou(e.keyframes)):xd;if(wu(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dd=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Od=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},kd=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Ad=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jd=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Md=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nd=function(e,t,n,r){return e._startAt&&(lu?e._startAt.revert(Zu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Pd=function e(t){return!t||t._ts&&e(t.parent)},Fd=function(e){return e._repeat?Id(e._tTime,e=e.duration()+e._rDelay)*e:0},Id=function(e,t){var n=Math.floor(e=pd(e/t));return e&&n===e?n-1:n},Ld=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rd=function(e){return e._end=pd(e._start+(e._tDur/Math.abs(e._ts||e._rts||fu)||0))},zd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pd(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rd(e),n._dirty||jd(n,e)),e},Bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ld(e.rawTime(),t),(!t._dur||ef(0,t.totalDuration(),n)-t._tTime>fu)&&t.render(n,!0)),jd(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-fu}},Vd=function(e,t,n,r){return t.parent&&Ad(t),t._start=pd((xu(n)?n:!n&&Gd(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ru?Zd(e,n,t):e._time)+t._delay),t._end=pd(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Od(e,t,`_first`,`_last`,e._sort?`_start`:0),Gd(t)||(e._recent=t),r||Bd(e,t),e._ts<0&&zd(e,e._tTime),e},Hd=function(e,t){return(Hu.ScrollTrigger||Ku(`scrollTrigger`,t))&&Hu.ScrollTrigger.create(t,e)},Ud=function(e,t,n,r,i){if(cp(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!lu&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nd!==zf.frame)return ed.push(e),e._lazy=[i,r],1},Wd=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Gd=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Kd=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Wd(e)&&(e._initted||!Gd(e))||(e._ts<0||e._dp._ts<0)&&!Gd(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=ef(0,e._tDur,t),l=Id(s,o),e._yoyo&&l&1&&(a=1-a),l!==Id(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||lu||r||e._zTime===fu||!t&&e._zTime){if(!e._initted&&Ud(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?fu:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nd(e,t,n,!0),e._onUpdate&&!n&&wf(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&wf(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ad(e,1),!n&&!lu&&(wf(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},qd=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Jd=function(e,t,n,r){var i=e._repeat,a=pd(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:pd(a*(i+1)+e._rDelay*i):a,o>0&&!r&&zd(e,e._tTime=e._tDur*o),e.parent&&Rd(e),n||jd(e.parent,e),e},Yd=function(e){return e instanceof tp?jd(e):Jd(e,e._dur)},Xd={_start:0,endTime:Yu,totalDuration:Yu},Zd=function e(t,n,r){var i=t.labels,a=t._recent||Xd,o=t.duration()>=du?a.endTime(!1):t._dur,s,c,l;return yu(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Ou(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Qd=function(e,t,n){var r=xu(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=wu(s.vars.inherit)&&s.parent;a.immediateRender=wu(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new hp(t[0],a,t[i+1])},$d=function(e,t){return e||e===0?t(e):t},ef=function(e,t,n){return n<e?e:n>t?t:n},tf=function(e,t){return!yu(e)||!(t=Lu.exec(e))?``:t[1]},nf=function(e,t,n){return $d(n,function(n){return ef(e,t,n)})},rf=[].slice,af=function(e,t){return e&&Cu(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Cu(e[0]))&&!e.nodeType&&e!==zu},of=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return yu(e)&&!t||af(e,1)?(r=n).push.apply(r,sf(e)):n.push(e)})||n},sf=function(e,t,n){return uu&&!t&&uu.selector?uu.selector(e):yu(e)&&!n&&(Bu||!Bf())?rf.call((t||Vu).querySelectorAll(e),0):Ou(e)?of(e,n):af(e)?rf.call(e,0):e?[e]:[]},cf=function(e){return e=sf(e)[0]||qu(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return sf(t,n.querySelectorAll?n:n===e?qu(`Invalid scope`)||Vu.createElement(`div`):e)}},lf=function(e){return e.sort(function(){return .5-Math.random()})},uf=function(e){if(bu(e))return e;var t=Cu(e)?e:{each:e},n=Jf(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return yu(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,du])[1],!S){for(b=-du;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===du?0:s?f*u/S-.5:r/S|0,b=0,x=du,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):gu(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&lf(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=tf(t.amount||t.each)||0,n=n&&f<0?qf(n):n}return f=(p[e]-p.min)/p.max||0,pd(p.b+(n?n(f):f)*p.v)+p.u}},df=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=pd(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(xu(n)?0:tf(n))}},ff=function(e,t){var n=Ou(e),r,i;return!n&&Cu(e)&&(r=n=e.radius||du,e.values?(e=sf(e.values),(i=!xu(e[0]))&&(r*=r)):e=df(e.increment)),$d(t,n?bu(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=du,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||xu(t)?s:s+tf(t)}:df(e))},pf=function(e,t,n,r){return $d(Ou(e)?!t:n===!0?!!(n=0):!r,function(){return Ou(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},mf=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},hf=function(e,t){return function(n){return e(parseFloat(n))+(t||tf(n))}},gf=function(e,t,n){return xf(e,t,0,1,n)},_f=function(e,t,n){return $d(n,function(n){return e[~~t(n)]})},vf=function e(t,n,r){var i=n-t;return Ou(t)?_f(t,e(0,t.length),n):$d(r,function(e){return(i+(e-t)%i)%i+t})},yf=function e(t,n,r){var i=n-t,a=i*2;return Ou(t)?_f(t,e(0,t.length-1),n):$d(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},bf=function(e){return e.replace(ku,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Au);return pf(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},xf=function(e,t,n,r,i){var a=t-e,o=r-n;return $d(i,function(t){return n+((t-e)/a*o||0)})},Sf=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=yu(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Ou(t)&&!Ou(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Cd(Ou(t)?[]:{},t));if(!u){for(c in n)rp.call(s,t,c,`get`,n[c]);a=function(e){return wp(e,s)||(o?t.p:t)}}}return $d(r,a)},Cf=function(e,t,n){var r=e.labels,i=du,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},wf=function(e,t,n){var r=e.vars,i=r[t],a=uu,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&ed.length&&gd(),o&&(uu=o),l=s?i.apply(c,s):i.call(c),uu=a,l},Tf=function(e){return Ad(e),e.scrollTrigger&&e.scrollTrigger.kill(!!lu),e.progress()<1&&wf(e,`onInterrupt`),e},Ef,Df=[],Of=function(e){if(e){if(e=!e.name&&e.default||e,Tu()||e.headless){var t=e.name,n=bu(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Yu,render:wp,add:rp,kill:Ep,modifier:Tp,rawVars:0},a={targetTest:0,get:0,getSetter:bp,aliases:{},register:0};if(Bf(),e!==r){if(rd[t])return;xd(r,xd(Td(e,i),a)),Cd(r.prototype,Cd(i,Td(e,a))),rd[r.prop=t]=r,e.targetTest&&(od.push(r),$u[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Ju(t,r),e.register&&e.register(Up,r,kp)}else Df.push(e)}},kf=255,Af={aqua:[0,kf,kf],lime:[0,kf,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kf],navy:[0,0,128],white:[kf,kf,kf],olive:[128,128,0],yellow:[kf,kf,0],orange:[kf,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kf,0,0],pink:[kf,192,203],cyan:[0,kf,kf],transparent:[kf,kf,kf,0]},jf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*kf+.5|0},Mf=function(e,t,n){var r=e?xu(e)?[e>>16,e>>8&kf,e&kf]:0:Af.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Af[e])r=Af[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&kf,r&kf,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&kf,e&kf]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(ju),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=jf(s+1/3,i,a),r[1]=jf(s,i,a),r[2]=jf(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Mu),n&&r.length<4&&(r[3]=1),r}else r=e.match(ju)||Af.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/kf,a=r[1]/kf,o=r[2]/kf,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Nf=function(e){var t=[],n=[],r=-1;return e.split(Ff).forEach(function(e){var i=e.match(Nu)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Pf=function(e,t,n){var r=``,i=(e+r).match(Ff),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Mf(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Nf(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Ff,`1`).split(Nu),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Ff),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Ff=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Af)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),If=/hsl[a]?\(/,Lf=function(e){var t=e.join(` `),n;if(Ff.lastIndex=0,Ff.test(t))return n=If.test(t),e[1]=Pf(e[1],n),e[0]=Pf(e[0],n,Nf(e[1])),!0},Rf,zf=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){Wu&&(!Bu&&Tu()&&(zu=Bu=window,Vu=zu.document||{},Hu.gsap=Up,(zu.gsapVersions||(zu.gsapVersions=[])).push(Up.version),Gu(Uu||zu.GreenSockGlobals||!zu.gsap&&zu||{}),Df.forEach(Of)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Rf=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Rf=0,l=Yu},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Bf(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Bf=function(){return!Rf&&zf.wake()},Vf={},Hf=/^[\d.\-M][\d.\-,\s]/,Uf=/["']/g,Wf=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Uf,``).trim():+c,r=s.substr(o+1).trim();return t},Gf=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Kf=function(e){var t=(e+``).split(`(`),n=Vf[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Wf(t[1])]:Gf(e).split(`,`).map(yd)):Vf._CE&&Hf.test(e)?Vf._CE(``,e):n},qf=function(e){return function(t){return 1-e(1-t)}},Jf=function(e,t){return e&&(bu(e)?e:Vf[e]||Kf(e))||t},Yf=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return dd(e,function(e){for(var t in Vf[e]=Hu[e]=i,Vf[a=e.toLowerCase()]=n,i)Vf[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Vf[e+`.`+t]=i[t]}),i},Xf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zf=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/pu*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*vu((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Xf(s);return a=pu/a,c.config=function(n,r){return e(t,n,r)},c},Qf=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Xf(r);return i.config=function(n){return e(t,n)},i};dd(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Yf(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Vf.Linear.easeNone=Vf.none=Vf.Linear.easeIn,Yf(`Elastic`,Zf(`in`),Zf(`out`),Zf()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Yf(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Yf(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Yf(`Circ`,function(e){return-(gu(1-e*e)-1)}),Yf(`Sine`,function(e){return e===1?1:-_u(e*mu)+1}),Yf(`Back`,Qf(`in`),Qf(`out`),Qf()),Vf.SteppedEase=Vf.steps=Hu.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-fu;return function(e){return((r*ef(0,a,e)|0)+i)*n}}},su.ease=Vf[`quad.out`],dd(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return sd+=e+`,`+e+`Params,`});var $f=function(e,t){this.id=hu++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ud,this.set=t?t.getSetter:bp},ep=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jd(this,+e.duration,1,1),this.data=e.data,uu&&(this._ctx=uu,uu.data.push(this)),Rf||zf.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Jd(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Bf(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(zd(this,e),!n._dp||n.parent||Bd(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Vd(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===fu||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),vd(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Fd(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Fd(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Id(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-fu?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ld(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-fu?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(ef(-Math.abs(this._delay),i,n),t!==!1),Rd(this),Md(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Bf(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==fu,r;if(n)for(this._tTime-=fu,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+fu){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=pd(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Vd(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(wu(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ld(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Qu);var t=lu;return lu=e,_d(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),lu=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Yd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Yd(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Zd(this,e),wu(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,wu(t)),this._dur||(this._zTime=-fu),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-fu:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fu,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-fu)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=bu(e)?e:bd,a=function(){var e=t.then;t.then=null,n&&n(),bu(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Tf(this)},e}();xd(ep.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fu,_prom:0,_ps:!1,_rts:1});var tp=function(e){au(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=wu(t.sortChildren),Ru&&Vd(t.parent||Ru,iu(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Hd(iu(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Qd(0,arguments,this),this},n.from=function(e,t,n){return Qd(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Qd(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Ed(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new hp(e,t,Zd(this,n),1),this},n.call=function(e,t,n){return Vd(this,hp.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new hp(e,n,Zd(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Ed(n).immediateRender=wu(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Ed(r).immediateRender=wu(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:pd(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Ru&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=pd(o%f),o===i?(d=this._repeat,c=a):(_=pd(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Id(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:pd(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&wf(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=qd(this,pd(r),pd(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(wf(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-fu);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||lu&&_d(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-fu:fu);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-fu)._zTime=c>=r?1:-1,this._ts))return this._start=g,Rd(this),this.render(e,t,n);this._onUpdate&&!t&&wf(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Ad(this,1),t||e<0&&!r||!o&&!r&&i||(wf(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(xu(t)||(t=Zd(this,t,e)),!(e instanceof ep)){if(Ou(e))return e.forEach(function(e){return n.add(e,t)}),this;if(yu(e))return this.addLabel(e,t);if(bu(e))e=hp.delayedCall(0,e);else return this}return this===e?this:Vd(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-du);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof hp?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return yu(e)?this.removeLabel(e):bu(e)?this.killTweensOf(e):(e.parent===this&&kd(this,e),e===this._recent&&(this._recent=this._last),jd(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pd(zf.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Zd(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=hp.delayedCall(0,t||Yu,n);return r.data=`isPause`,this._hasPause=1,Vd(this,r,Zd(this,e))},n.removePause=function(e){var t=this._first;for(e=Zd(this,e);t;)t._start===e&&t.data===`isPause`&&Ad(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)op!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=sf(e),i=this._first,a=xu(t),o;i;)i instanceof hp?hd(i._targets,r)&&(a?(!op||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=Zd(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=hp.to(n,xd({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||fu,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Jd(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,xd({startAt:{time:Zd(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Cf(this,Zd(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Cf(this,Zd(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+fu)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=pd(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return jd(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),jd(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=du,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Vd(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=pd(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Jd(n,n===Ru&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Ru._ts&&(vd(Ru,Ld(e,Ru)),nd=zf.frame),zf.frame>=ad){ad+=ou.autoSleep||120;var t=Ru._first;if((!t||!t._ts)&&ou.autoSleep&&zf._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||zf.sleep()}}},t}(ep);xd(tp.prototype,{_lock:0,_hasPause:0,_forcing:0});var np=function(e,t,n,r,i,a,o){var s=new kp(this._pt,e,t,0,1,Cp,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=bf(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Pu)||[];u=Pu.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?md(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Pu.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Fu.test(r)||g)&&(s.e=0),this._pt=s,s},rp=function(e,t,n,r,i,a,o,s,c,l){bu(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?bu(u)?c?e[t.indexOf(`set`)||!bu(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=bu(u)?c?vp:_p:gp,p;if(yu(r)&&(~r.indexOf(`random(`)&&(r=bf(r)),r.charAt(1)===`=`&&(p=md(d,r)+(tf(d)||0),(p||p===0)&&(r=p))),!l||d!==r||sp)return!isNaN(d*r)&&r!==``?(p=new kp(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Sp:xp,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Ku(t,r),np.call(this,e,t,d,r,f,s||ou.stringFilter,c))},ip=function(e,t,n,r,i){if(bu(e)&&(e=fp(e,i,t,n,r)),!Cu(e)||e.style&&e.nodeType||Ou(e)||Du(e))return yu(e)?fp(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=fp(e[o],i,t,n,r);return a},ap=function(e,t,n,r,i,a){var o,s,c,l;if(rd[e]&&(o=new rd[e]).init(i,o.rawVars?t[e]:ip(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new kp(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Ef))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},op,sp,cp=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!cu,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=Jf(a,su.ease),t._rEase=x&&(Jf(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?ld(g[0]).harness:0,N=k&&i[k.prop],S=Td(i,$u),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Zu:Xu),h._lazy=0),o){if(Ad(t._startAt=hp.set(g,xd({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&wu(c),startAt:null,delay:0,onUpdate:l&&function(){return wf(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(lu||!s&&!p)&&t._startAt.revert(Zu),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=xd({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&wu(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Ad(t._startAt=hp.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(lu?t._startAt.revert(Zu):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,fu,fu);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&wu(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||cd(g)[C]._gsap,t._ptLookup[C]=j={},td[O.id]&&ed.length&&gd(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new kp(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)rd[w]&&(A=ap(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=rp.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(op=t,Ru.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,op=0),t._pt&&c&&(td[O.id]=1)}D&&Op(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(du,!0,!0)},lp=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return sp=1,e.vars[t]=`+=0`,cp(e,o),sp=0,s?qu(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=fd(n)+tf(u.e)),u.b&&(u.b=l.s+tf(u.b))},up=function(e,t){var n=e[0]?ld(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Cd({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},dp=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Ou(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},fp=function(e,t,n,r,i){return bu(e)?e.call(t,n,r,i):yu(e)&&~e.indexOf(`random(`)?bf(e):e},pp=sd+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,mp={};dd(pp+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return mp[e]=1}),pp=pp.split(`,`);var hp=function(e){au(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Ed(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Ru,g=(Ou(t)||Du(t)?xu(t[0]):`length`in n)?[t]:sf(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?cd(g):qu(`GSAP target `+t+` not found. https://gsap.com`,!ou.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Eu(s)||Eu(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new tp({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=iu(a),_._start=0,u||Eu(s)||Eu(c)){if(b=g.length,C=u&&uf(u),Cu(u))for(x in u)~pp.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=Td(n,mp),y.stagger=0,T&&(y.easeReverse=T),w&&Cd(y,w),S=g[v],y.duration=+fp(s,iu(a),v,S,g),y.delay=(+fp(c,iu(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Vf.none;_.duration()?s=c=0:a.timeline=0}else if(f){Ed(xd(_.vars.defaults,{ease:`none`})),_._ease=Jf(f.ease||n.ease||`none`);var E=0,D,O,k;if(Ou(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||dp(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!cu&&(op=iu(a),Ru.killTweensOf(g),op=0),Vd(h,iu(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===pd(h._time)&&wu(l)&&Pd(iu(a))&&h.data!==`nested`)&&(a._tTime=-fu,a.render(Math.max(0,-c)||0)),m&&Hd(iu(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-fu&&!o?i:e<fu?0:e,c,l,u,d,f,p,m,h;if(!a)Kd(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=pd(s%d),s===i?(u=this._repeat,c=a):(f=pd(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Id(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(pd(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Ud(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(wf(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Nd(this,e,t,n),wf(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&wf(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Nd(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Ad(this,1),!t&&(!o||r)&&(s||r||p)&&(wf(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Rf||zf.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||cp(this,a),o=this._ease(a/this._dur),lp(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(zd(this,0),this.parent||Od(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Tf(this):this.scrollTrigger&&this.scrollTrigger.kill(!!lu),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,op&&op.vars.overwrite!==!0)._first||Tf(this),this.parent&&n!==this.timeline.totalDuration()&&Jd(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?sf(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Dd(r,i))return t===`all`&&(this._pt=0),Tf(this);for(s=this._op=this._op||[],t!==`all`&&(yu(t)&&(d={},dd(t,function(e){return d[e]=1}),t=d),t=up(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||kd(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Tf(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Qd(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Qd(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Ru.killTweensOf(e,t,n)},t}(ep);xd(hp.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),dd(`staggerTo,staggerFrom,staggerFromTo`,function(e){hp[e]=function(){var t=new tp,n=rf.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var gp=function(e,t,n){return e[t]=n},_p=function(e,t,n){return e[t](n)},vp=function(e,t,n,r){return e[t](r.fp,n)},yp=function(e,t,n){return e.setAttribute(t,n)},bp=function(e,t){return bu(e[t])?_p:Su(e[t])&&e.setAttribute?yp:gp},xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Sp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cp=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},wp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Tp=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Ep=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?kd(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Dp=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Op=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},kp=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||xp,this.d=o||this,this.set=s||gp,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Dp,this.m=e,this.mt=n,this.tween=t},e}();dd(sd+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return $u[e]=1}),Hu.TweenMax=Hu.TweenLite=hp,Hu.TimelineLite=Hu.TimelineMax=tp,Ru=new tp({sortChildren:!1,defaults:su,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),ou.stringFilter=Lf;var Ap=[],jp={},Mp=[],Np=0,Pp=0,Fp=function(e){return(jp[e]||Mp).map(function(e){return e()})},Ip=function(){var e=Date.now(),t=[];e-Np>2&&(Fp(`matchMediaInit`),Ap.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=zu.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Fp(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Np=e,Fp(`matchMedia`))},Lp=function(){function e(e,t){this.selector=t&&cf(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Pp++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){bu(e)&&(n=t,t=e,e=bu);var r=this,i=function(){var e=uu,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=cf(n)),uu=r,a=t.apply(r,arguments),bu(a)&&r._r.push(a),uu=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===bu?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=uu;uu=null,e(this),uu=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof hp&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof tp?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof hp)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=Ap.length;r--;)Ap[r].id===this.id&&Ap.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(Ip):e.removeEventListener(`change`,Ip)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),Rp=function(){function e(e){this.contexts=[],this.scope=e,uu&&uu.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Cu(e)||(e={matches:e});var r=new Lp(0,n||this.scope),i=r.conditions={},a,o,s;for(o in uu&&!r.selector&&(r.selector=uu.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=zu.matchMedia(e[o]),a&&(Ap.indexOf(r)<0&&Ap.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Ip):a.addEventListener(`change`,Ip),(r._mqs||=[]).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),zp={registerPlugin:function(){[...arguments].forEach(function(e){return Of(e)})},timeline:function(e){return new tp(e)},getTweensOf:function(e,t){return Ru.getTweensOf(e,t)},getProperty:function(e,t,n,r){yu(e)&&(e=sf(e)[0]);var i=ld(e||{}).get,a=n?bd:yd;return n===`native`&&(n=``),e&&(t?a((rd[t]&&rd[t].get||i)(e,t,n,r)):function(t,n,r){return a((rd[t]&&rd[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=sf(e),e.length>1){var r=e.map(function(e){return Up.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=rd[t],o=ld(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Ef._pt=0,r.init(e,n?t+n:t,Ef,0,[e]),r.render(1,r),Ef._pt&&wp(1,Ef)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Up.to(e,xd((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Ru.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jf(e.ease,su.ease)),wd(su,e||{})},config:function(e){return wd(ou,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!rd[e]&&!Hu[e]&&qu(t+` effect requires `+e+` plugin.`)}),id[t]=function(e,t,r){return n(sf(e),xd(t||{},i),r)},a&&(tp.prototype[t]=function(e,n,r){return this.add(id[t](e,Cu(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Vf[e]=Jf(t)},parseEase:function(e,t){return arguments.length?Jf(e,t):Vf},getById:function(e){return Ru.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tp(e),r,i;for(n.smoothChildTiming=wu(e.smoothChildTiming),Ru.remove(n),n._dp=0,n._time=n._tTime=Ru._time,r=Ru._first;r;)i=r._next,(t||!(!r._dur&&r instanceof hp&&r.vars.onComplete===r._targets[0]))&&Vd(n,r,r._start-r._delay),r=i;return Vd(Ru,n,0),n},context:function(e,t){return e?new Lp(e,t):uu},matchMedia:function(e){return new Rp(e)},matchMediaRefresh:function(){return Ap.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ip()},addEventListener:function(e,t){var n=jp[e]||(jp[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=jp[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:vf,wrapYoyo:yf,distribute:uf,random:pf,snap:ff,normalize:gf,getUnit:tf,clamp:nf,splitColor:Mf,toArray:sf,selector:cf,mapRange:xf,pipe:mf,unitize:hf,interpolate:Sf,shuffle:lf},install:Gu,effects:id,ticker:zf,updateRoot:tp.updateRoot,plugins:rd,globalTimeline:Ru,core:{PropTween:kp,globals:Ju,Tween:hp,Timeline:tp,Animation:ep,getCache:ld,_removeLinkedListItem:kd,reverting:function(){return lu},context:function(e){return e&&uu&&(uu.data.push(e),e._ctx=uu),uu},suppressOverwrites:function(e){return cu=e}}};dd(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return zp[e]=hp[e]}),zf.add(tp.updateRoot),Ef=zp.to({},{duration:0});var Bp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Vp=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Bp(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Hp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(yu(n)&&(r={},dd(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Vp(e,n)}}}},Up=zp.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)lu?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Hp(`roundProps`,df),Hp(`modifiers`),Hp(`snap`,ff))||zp;hp.version=tp.version=Up.version=`3.15.1`,Wu=1,Tu()&&Bf(),Vf.Power0,Vf.Power1,Vf.Power2,Vf.Power3,Vf.Power4,Vf.Linear,Vf.Quad,Vf.Cubic,Vf.Quart,Vf.Quint,Vf.Strong,Vf.Elastic,Vf.Back,Vf.SteppedEase,Vf.Bounce,Vf.Sine,Vf.Expo,Vf.Circ;var Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp=function(){return typeof window<`u`},Qp={},$p=180/Math.PI,em=Math.PI/180,tm=Math.atan2,nm=1e8,rm=/([A-Z])/g,im=/(left|right|width|margin|padding|x)/i,am=/[\s,\(]\S/,om={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},um=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pm=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},mm=function(e,t,n){return e.style[t]=n},hm=function(e,t,n){return e.style.setProperty(t,n)},gm=function(e,t,n){return e._gsap[t]=n},_m=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vm=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},ym=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},bm=`transform`,xm=bm+`Origin`,Sm=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Qp&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=om[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Vm(i,e)}):this.tfm[t]=o.x?o[t]:Vm(i,t),t===xm&&(this.tfm.zOrigin=o.zOrigin);else return om.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(bm)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(xm,n,``)),t=bm}(a||n)&&this.props.push(t,n,a[t])},Cm=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},wm=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(rm,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Xp(),i&&i.isStart||n[bm]||(Cm(n),r.zOrigin&&n[xm]&&(n[xm]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tm=function(e,t){var n={target:e,props:[],revert:wm,save:Sm};return e._gsap||Up.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Em,Dm=function(e,t){var n=Gp.createElementNS?Gp.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Gp.createElement(e);return n&&n.style?n:Gp.createElement(e)},Om=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(rm,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Am(n)||n,1)||``},km=`O,Moz,ms,Ms,Webkit`.split(`,`),Am=function(e,t,n){var r=(t||Jp).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(km[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?km[i]:``)+e},jm=function(){Zp()&&window.document&&(Wp=window,Gp=Wp.document,Kp=Gp.documentElement,Jp=Dm(`div`)||{style:{}},Dm(`div`),bm=Am(bm),xm=bm+`Origin`,Jp.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Em=!!Am(`perspective`),Xp=Up.core.reverting,qp=1)},Mm=function(e){var t=e.ownerSVGElement,n=Dm(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Kp.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Kp.removeChild(n),i},Nm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pm=function(e){var t,n;try{t=e.getBBox()}catch{t=Mm(e),n=1}return t&&(t.width||t.height)||n||(t=Mm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nm(e,[`x`,`cx`,`x1`])||0,y:+Nm(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Fm=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Pm(e))},Im=function(e,t){if(t){var n=e.style,r;t in Qp&&t!==xm&&(t=bm),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(rm,`-$1`).toLowerCase())):n.removeAttribute(t)}},Lm=function(e,t,n,r,i,a){var o=new kp(e._pt,t,n,0,1,a?pm:fm);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Rm={deg:1,rad:1,turn:1},zm={grid:1,flex:1},Bm=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Jp.style,c=im.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Rm[i]||Rm[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Fm(t),(p||o===`%`)&&(Qp[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],fd(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==Gp&&h.appendChild||(h=Gp.body),g=h._gsap,g&&p&&g.width&&c&&g.time===zf.time&&!g.uncache)return fd(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Im(t,n)}else(p||o===`%`)&&!zm[Om(h,`display`)]&&(s.position=Om(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Jp),m=Jp[u],h.removeChild(Jp),s.position=`absolute`;return c&&p&&(g=ld(h),g.time=zf.time,g.width=h[u]),fd(f?m*a/d:m&&a?d/m*a:0)},Vm=function(e,t,n,r){var i;return qp||jm(),t in om&&t!==`transform`&&(t=om[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Qp[t]&&t!==`transform`?(i=$m(e,r),i=t===`transformOrigin`?i.svg?i.origin:eh(Om(e,xm))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Km[t]&&Km[t](e,t,n)||Om(e,t)||ud(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Bm(e,t,i,n)+n:i},Hm=function(e,t,n,r){if(!n||n===`none`){var i=Am(t,e,1),a=i&&Om(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Om(e,`borderTopColor`))}var o=new kp(this._pt,e.style,t,0,1,Cp),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Om(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Om(e,t)||r,m?e.style[t]=m:Im(e,t)),l=[n,r],Lf(l),n=l[0],r=l[1],d=n.match(Nu)||[],b=r.match(Nu)||[],b.length){for(;u=Nu.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=md(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Nu.lastIndex-v.length,v||(v=v||ou.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Bm(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?pm:fm;return Fu.test(r)&&(o.e=0),this._pt=o,o},Um={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Wm=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Um[n]||n,t[1]=Um[r]||r,t.join(` `)},Gm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Qp[o]&&(s=1,o=o===`transformOrigin`?xm:bm),Im(n,o);s&&(Im(n,bm),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,$m(n,1),a.uncache=1,Cm(r)))}},Km={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new kp(e._pt,t,n,0,0,Gm);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},qm=[1,0,0,1,0,0],Jm={},Ym=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Xm=function(e){var t=Om(e,bm);return Ym(t)?qm:t.substr(7).match(Mu).map(fd)},Zm=function(e,t){var n=e._gsap||ld(e),r=e.style,i=Xm(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?qm:i):(i===qm&&!e.offsetParent&&e!==Kp&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,Kp.appendChild(e)),i=Xm(e),s?r.display=s:Im(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Kp.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Qm=function(e,t,n,r,i,a){var o=e._gsap,s=i||Zm(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==qm&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Pm(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[xm]=`0px 0px`,a&&(Lm(a,o,`xOrigin`,c,y),Lm(a,o,`yOrigin`,l,b),Lm(a,o,`xOffset`,u,o.xOffset),Lm(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},$m=function(e,t){var n=e._gsap||new $f(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Om(e,xm)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,ee,te,ne,re,ie;return n.svg=!!(e.getCTM&&Fm(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[bm]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[bm]===`none`?``:s[bm])),r.scale=r.rotate=r.translate=`none`),S=Zm(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),Qm(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==qm&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?tm(D,E)*$p:0,_=O||k?tm(O,k)*$p+m:0,_&&(p*=Math.abs(Math.cos(_*em))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ie=S[6],ne=S[7],F=S[8],ee=S[9],te=S[10],re=S[11],l=S[12],u=S[13],d=S[14],C=tm(ie,te),h=C*$p,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+ee*T,P=ie*w+te*T,F=A*-T+F*w,ee=j*-T+ee*w,te=ie*-T+te*w,re=ne*-T+re*w,A=M,j=N,ie=P),C=tm(-O,te),g=C*$p,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-ee*T,P=O*w-te*T,re=k*T+re*w,E=M,D=N,O=P),C=tm(D,E),m=C*$p,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=fd(Math.sqrt(E*E+D*D+O*O)),p=fd(Math.sqrt(j*j+ie*ie)),C=tm(A,j),_=Math.abs(C)>2e-4?C*$p:0,y=re?1/(re<0?-re:re):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Ym(Om(e,bm)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=fd(f),n.scaleY=fd(p),n.rotation=fd(m)+o,n.rotationX=fd(h)+o,n.rotationY=fd(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[xm]=eh(c)),n.xOffset=n.yOffset=0,n.force3D=ou.force3D,n.renderTransform=n.svg?sh:Em?oh:nh,n.uncache=0,n},eh=function(e){return(e=e.split(` `))[0]+` `+e[1]},th=function(e,t,n){var r=tf(t);return fd(parseFloat(t)+parseFloat(Bm(e,`x`,n+`px`,r)))+r},nh=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,oh(e,t)},rh=`0deg`,ih=`0px`,ah=`) `,oh=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==rh||l!==rh)){var x=parseFloat(l)*em,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*em,w=Math.cos(x),a=th(_,a,S*w*-v),o=th(_,o,-Math.sin(x)*-v),s=th(_,s,C*w*-v+v)}h!==ih&&(y+=`perspective(`+h+ah),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ih||o!==ih||s!==ih)&&(y+=s!==ih||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+ah),c!==rh&&(y+=`rotate(`+c+ah),l!==rh&&(y+=`rotateY(`+l+ah),u!==rh&&(y+=`rotateX(`+u+ah),(d!==rh||f!==rh)&&(y+=`skew(`+d+`, `+f+ah),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+ah),_.style[bm]=y||`translate(0, 0)`},sh=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=em,c*=em,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=em,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=fd(b),x=fd(x),S=fd(S),C=fd(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Bm(f,`x`,a,`px`),y=Bm(f,`y`,o,`px`)),(p||m||h||g)&&(v=fd(v+p-(p*b+m*S)+h),y=fd(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=fd(v+r/100*w.width),y=fd(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[bm]=w)},ch=function(e,t,n,r,i){var a=360,o=yu(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?$p:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*nm)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*nm)%a-~~(s/a)*a)),e._pt=u=new kp(e._pt,t,n,r,s,cm),u.e=c,u.u=`deg`,e._props.push(n),u},lh=function(e,t){for(var n in t)e[n]=t[n];return e},uh=function(e,t,n){var r=lh({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[bm]=t,o=$m(n,1),Im(n,bm),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[bm],a[bm]=t,o=$m(n,1),a[bm]=c),Qp)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=tf(c),p=tf(l),u=f===p?parseFloat(c):Bm(n,s,c,p),d=parseFloat(l),e._pt=new kp(e._pt,o,s,u,d-u,sm),e._pt.u=p||0,e._props.push(s));lh(o,r)};dd(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Km[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Vm(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var dh={name:`css`,register:jm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in qp||jm(),this.styles=this.styles||Tm(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(rd[m]&&ap(m,t,n,r,e,i)))){if(f=typeof l,p=Km[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=bf(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Ff.lastIndex=0,Ff.test(c)||(h=tf(c),g=tf(l),g?h!==g&&(c=Bm(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],yu(c)&&~c.indexOf(`random(`)&&(c=bf(c)),tf(c+``)||c===`auto`||(c+=ou.units[m]||tf(Vm(e,m))||``),(c+``).charAt(1)===`=`&&(c=Vm(e,m))):c=Vm(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in om&&(m===`autoAlpha`&&(d===1&&Vm(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Lm(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=om[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Qp,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Om(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Om(e,`perspective`),T?e.style.perspective=T:Im(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||$m(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new kp(this._pt,o,bm,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new kp(this._pt,b,`scaleY`,b.scaleY,(_?md(b.scaleY,_+u):u)-b.scaleY||0,sm),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(xm,0,o[xm]),l=Wm(l),b.svg?Qm(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Lm(this,b,`zOrigin`,b.zOrigin,g),Lm(this,o,m,eh(c),eh(l)));continue}else if(m===`svgOrigin`){Qm(e,l,1,x,0,this);continue}else if(m in Jm){ch(this,b,m,d,_?md(d,_+l):l);continue}else if(m===`smoothOrigin`){Lm(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){uh(this,l,e);continue}}else m in o||(m=Am(m)||m);if(v||(u||u===0)&&(d||d===0)&&!am.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=tf(l)||(m in ou.units?ou.units[m]:h),h!==g&&(d=Bm(e,m,c,g)),this._pt=new kp(this._pt,v?b:o,m,d,(_?md(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?dm:sm),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=um):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=lm);else if(m in o)Hm.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Ku(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Op(this)},render:function(e,t){if(t.tween._time||!Xp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vm,aliases:om,getSetter:function(e,t,n){var r=om[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Qp&&t!==xm&&(e._gsap.x||Vm(e,`x`))?n&&Yp===n?t===`scale`?_m:gm:(Yp=n||{})&&(t===`scale`?vm:ym):e.style&&!Su(e.style[t])?mm:~t.indexOf(`-`)?hm:bp(e,t)},core:{_removeProperty:Im,_getMatrix:Zm}};Up.utils.checkPrefix=Am,Up.core.getStyleSaver=Tm,(function(e,t,n,r){var i=dd(e+`,`+t+`,`+n,function(e){Qp[e]=1});dd(t,function(e){ou.units[e]=`deg`,Jm[e]=1}),om[i[13]]=e+`,`+t,dd(r,function(e){var t=e.split(`:`);om[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),dd(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){ou.units[e]=`px`}),Up.registerPlugin(dh);var fh=Up.registerPlugin(dh)||Up;fh.core.Tween;function ph(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mh(e,t,n){return t&&ph(e.prototype,t),n&&ph(e,n),e}var hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh=function(){return hh||typeof window<`u`&&(hh=window.gsap)&&hh.registerPlugin&&hh},kh=1,Ah=[],jh=[],Mh=[],Nh=Date.now,Ph=function(e,t){return t},Fh=function(){var e=Ch.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,jh),r.push.apply(r,Mh),jh=n,Mh=r,Ph=function(e,n){return t[e](n)}},Ih=function(e,t){return~Mh.indexOf(e)&&Mh[Mh.indexOf(e)+1][t]},Lh=function(e){return!!~wh.indexOf(e)},Rh=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},zh=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Bh=`scrollLeft`,Vh=`scrollTop`,Hh=function(){return Th&&Th.isPressed||jh.cache++},Uh=function(e,t){var n=function n(r){if(r||r===0){kh&&_h.history.scrollRestoration!==`manual`&&(_h.history.scrollRestoration=`manual`);var i=Th&&Th.isPressed;r=n.v=Math.round(r)||(Th&&Th.iOS?1:0),e(r),n.cacheID=jh.cache,i&&Ph(`ss`,r)}else(t||jh.cache!==n.cacheID||Ph(`ref`))&&(n.cacheID=jh.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Wh={s:Bh,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Uh(function(e){return arguments.length?_h.scrollTo(e,Gh.sc()):_h.pageXOffset||vh[Bh]||yh[Bh]||bh[Bh]||0})},Gh={s:Vh,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Wh,sc:Uh(function(e){return arguments.length?_h.scrollTo(Wh.sc(),e):_h.pageYOffset||vh[Vh]||yh[Vh]||bh[Vh]||0})},Kh=function(e,t){return(t&&t._ctx&&t._ctx.selector||hh.utils.toArray)(e)[0]||(typeof e==`string`&&hh.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},qh=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Jh=function(e,t){var n=t.s,r=t.sc;Lh(e)&&(e=vh.scrollingElement||yh);var i=jh.indexOf(e),a=r===Gh.sc?1:2;!~i&&(i=jh.push(e)-1),jh[i+a]||Rh(e,`scroll`,Hh);var o=jh[i+a],s=o||(jh[i+a]=Uh(Ih(e,n),!0)||(Lh(e)?r:Uh(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=hh.getProperty(e,`scrollBehavior`)===`smooth`),s},Yh=function(e,t,n){var r=e,i=e,a=Nh(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Nh();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Nh();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Xh=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Qh=function(){Ch=hh.core.globals().ScrollTrigger,Ch&&Ch.core&&Fh()},$h=function(e){return hh=e||Oh(),!gh&&hh&&typeof document<`u`&&document.body&&(_h=window,vh=document,yh=vh.documentElement,bh=vh.body,wh=[_h,vh,yh,bh],hh.utils.clamp,Dh=hh.core.context||function(){},Sh=`onpointerenter`in bh?`pointer`:`mouse`,xh=eg.isTouch=_h.matchMedia&&_h.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in _h||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Eh=eg.eventTypes=(`ontouchstart`in yh?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in yh?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return kh=0},500),gh=1),Ch||Qh(),gh};Wh.op=Gh,jh.cache=0;var eg=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){gh||$h(hh)||console.warn(`Please gsap.registerPlugin(Observer)`),Ch||Qh();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,ee=e.onDisable,te=e.onClick,ne=e.scrollSpeed,re=e.capture,ie=e.allowClicks,I=e.lockAxis,ae=e.onLockAxis;this.target=i=Kh(i)||yh,this.vars=e,u&&=hh.utils.toArray(u),t||=1e-9,n||=0,d||=1,ne||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(_h.getComputedStyle(bh).lineHeight)||22;var L,oe,se,ce,R,z,B,V=this,H=0,le=0,U=e.passive||!s&&e.passive!==!1,ue=Jh(i,Wh),W=Jh(i,Gh),G=ue(),de=W(),fe=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Eh[0]===`pointerdown`,pe=Lh(i),K=i.ownerDocument||vh,me=[0,0,0],he=[0,0,0],ge=0,_e=function(){return ge=Nh()},ve=function(e,t){return(V.event=e)&&u&&qh(e.target,u)||t&&fe&&e.pointerType!==`touch`||A&&A(e,t)},ye=function(){V._vx.reset(),V._vy.reset(),oe.pause(),c&&c(V)},be=function(){var e=V.deltaX=Zh(me),n=V.deltaY=Zh(he),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(V,e,n,me,he),r&&(v&&V.deltaX>0&&v(V),y&&V.deltaX<0&&y(V),S&&S(V),T&&V.deltaX<0!=H<0&&T(V),H=V.deltaX,me[0]=me[1]=me[2]=0),i&&(x&&V.deltaY>0&&x(V),b&&V.deltaY<0&&b(V),C&&C(V),E&&V.deltaY<0!=le<0&&E(V),le=V.deltaY,he[0]=he[1]=he[2]=0),(ce||se)&&(k&&k(V),se&&=(p&&se===1&&p(V),h&&h(V),0),ce=!1),z&&!(z=!1)&&ae&&ae(V),R&&=(P(V),!1),L=0},xe=function(e,t,n){me[n]+=e,he[n]+=t,V._vx.update(e),V._vy.update(t),o?L||=requestAnimationFrame(be):be()},Se=function(e,t){I&&!B&&(V.axis=B=Math.abs(e)>Math.abs(t)?`x`:`y`,z=!0),B!==`y`&&(me[2]+=e,V._vx.update(e,!0)),B!==`x`&&(he[2]+=t,V._vy.update(t,!0)),o?L||=requestAnimationFrame(be):be()},Ce=function(e){if(!ve(e,1)){e=Xh(e,s);var t=e.clientX,r=e.clientY,i=t-V.x,a=r-V.y,o=V.isDragging;V.x=t,V.y=r,(o||(i||a)&&(Math.abs(V.startX-t)>=n||Math.abs(V.startY-r)>=n))&&(se||=o?2:1,o||(V.isDragging=!0),Se(i,a))}},we=V.onPress=function(e){ve(e,1)||e&&e.button||(V.axis=B=null,oe.pause(),V.isPressed=!0,e=Xh(e),H=le=0,V.startX=V.x=e.clientX,V.startY=V.y=e.clientY,V._vx.reset(),V._vy.reset(),Rh(j?i:K,Eh[1],Ce,U,!0),V.deltaX=V.deltaY=0,g&&g(V))},Te=V.onRelease=function(e){if(!ve(e,1)){zh(j?i:K,Eh[1],Ce,!0);var t=!isNaN(V.y-V.startY),n=V.isDragging,r=n&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),a=Xh(e);!r&&t&&(V._vx.reset(),V._vy.reset(),s&&ie&&hh.delayedCall(.08,function(){if(Nh()-ge>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(K.createEvent){var t=K.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,_h,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,c&&n&&!j&&oe.restart(!0),se&&be(),m&&n&&m(V),_&&_(V,r)}},Ee=function(e){return e.touches&&e.touches.length>1&&(V.isGesturing=!0)&&M(e,V.isDragging)},De=function(){return(V.isGesturing=!1)||N(V)},Oe=function(e){if(!ve(e)){var t=ue(),n=W();xe((t-G)*ne,(n-de)*ne,1),G=t,de=n,c&&oe.restart(!0)}},ke=function(e){if(!ve(e)){e=Xh(e,s),P&&(R=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?_h.innerHeight:1)*d;xe(e.deltaX*t,e.deltaY*t,0),c&&!j&&oe.restart(!0)}},Ae=function(e){if(!ve(e)){var t=e.clientX,n=e.clientY,r=t-V.x,i=n-V.y;V.x=t,V.y=n,ce=!0,c&&oe.restart(!0),(r||i)&&Se(r,i)}},je=function(e){V.event=e,D(V)},Me=function(e){V.event=e,O(V)},Ne=function(e){return ve(e)||Xh(e,s)&&te(V)};oe=V._dc=hh.delayedCall(l||.25,ye).pause(),V.deltaX=V.deltaY=0,V._vx=Yh(0,50,!0),V._vy=Yh(0,50,!0),V.scrollX=ue,V.scrollY=W,V.isDragging=V.isGesturing=V.isPressed=!1,Dh(this),V.enable=function(e){return V.isEnabled||(Rh(pe?K:i,`scroll`,Hh),r.indexOf(`scroll`)>=0&&Rh(pe?K:i,`scroll`,Oe,U,re),r.indexOf(`wheel`)>=0&&Rh(i,`wheel`,ke,U,re),(r.indexOf(`touch`)>=0&&xh||r.indexOf(`pointer`)>=0)&&(Rh(i,Eh[0],we,U,re),Rh(K,Eh[2],Te),Rh(K,Eh[3],Te),ie&&Rh(i,`click`,_e,!0,!0),te&&Rh(i,`click`,Ne),M&&Rh(K,`gesturestart`,Ee),N&&Rh(K,`gestureend`,De),D&&Rh(i,Sh+`enter`,je),O&&Rh(i,Sh+`leave`,Me),k&&Rh(i,Sh+`move`,Ae)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ce=se=!1,V._vx.reset(),V._vy.reset(),G=ue(),de=W(),e&&e.type&&we(e),F&&F(V)),V},V.disable=function(){V.isEnabled&&(Ah.filter(function(e){return e!==V&&Lh(e.target)}).length||zh(pe?K:i,`scroll`,Hh),V.isPressed&&(V._vx.reset(),V._vy.reset(),zh(j?i:K,Eh[1],Ce,!0)),zh(pe?K:i,`scroll`,Oe,re),zh(i,`wheel`,ke,re),zh(i,Eh[0],we,re),zh(K,Eh[2],Te),zh(K,Eh[3],Te),zh(i,`click`,_e,!0),zh(i,`click`,Ne),zh(K,`gesturestart`,Ee),zh(K,`gestureend`,De),zh(i,Sh+`enter`,je),zh(i,Sh+`leave`,Me),zh(i,Sh+`move`,Ae),V.isEnabled=V.isPressed=V.isDragging=!1,ee&&ee(V))},V.kill=V.revert=function(){V.disable();var e=Ah.indexOf(V);e>=0&&Ah.splice(e,1),Th===V&&(Th=0)},Ah.push(V),j&&Lh(i)&&(Th=V),V.enable(f)},mh(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();eg.version=`3.15.1`,eg.create=function(e){return new eg(e)},eg.register=$h,eg.getAll=function(){return Ah.slice()},eg.getById=function(e){return Ah.filter(function(t){return t.vars.id===e})[0]},Oh()&&hh.registerPlugin(eg);var Q,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg=1,Fg=Date.now,Ig=Fg(),Lg=0,Rg=0,zg=function(e,t,n){var r=t_(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Bg=function(e,t){return t&&(!t_(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Vg=function e(){return Rg&&requestAnimationFrame(e)},Hg=function(){return pg=1},Ug=function(){return pg=0},Wg=function(e){return e},Gg=function(e){return Math.round(e*1e5)/1e5||0},Kg=function(){return typeof window<`u`},qg=function(){return Q||Kg()&&(Q=window.gsap)&&Q.registerPlugin&&Q},Jg=function(e){return!!~og.indexOf(e)},Yg=function(e){return(e===`Height`?Ag:ng[`inner`+e])||ig[`client`+e]||ag[`client`+e]},Xg=function(e){return Ih(e,`getBoundingClientRect`)||(Jg(e)?function(){return Cv.width=ng.innerWidth,Cv.height=Ag,Cv}:function(){return E_(e)})},Zg=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Ih(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Yg(i):e[`client`+i])||0}},Qg=function(e,t){return!t||~Mh.indexOf(e)?Xg(e):function(){return Cv}},$g=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Ih(e,n))?a()-Xg(e)()[i]:Jg(e)?(ig[n]||ag[n])-Yg(r):e[n]-e[`offset`+r])},e_=function(e,t){for(var n=0;n<vg.length;n+=3)(!t||~t.indexOf(vg[n+1]))&&e(vg[n],vg[n+1],vg[n+2])},t_=function(e){return typeof e==`string`},n_=function(e){return typeof e==`function`},r_=function(e){return typeof e==`number`},i_=function(e){return typeof e==`object`},a_=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},o_=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},s_=Math.abs,c_=`left`,l_=`top`,u_=`right`,d_=`bottom`,f_=`width`,p_=`height`,m_=`Right`,h_=`Left`,g_=`Top`,__=`Bottom`,v_=`padding`,y_=`margin`,b_=`Width`,x_=`Height`,S_=`px`,C_=function(e){return ng.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},w_=function(e){var t=C_(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},T_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},E_=function(e,t){var n=t&&C_(e)[mg]!==`matrix(1, 0, 0, 1, 0, 0)`&&Q.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},D_=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},O_=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},k_=function(e){return function(t){return Q.utils.snap(O_(e),t)}},A_=function(e){var t=Q.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},j_=function(e){return function(t,n){return A_(O_(e))(t,n.direction)}},M_=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},N_=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},P_=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},F_=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},I_={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},L_={toggleActions:`play`,anticipatePin:0},R_={top:0,left:0,center:.5,bottom:1,right:1},z_=function(e,t){if(t_(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in R_?R_[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},B_=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=rg.createElement(`div`),m=Jg(n)||Ih(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?ag:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Gh?u_:d_)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],V_(p,0,r,_),p},V_=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+b_]=1,i[`border`+o+b_]=0,i[n.p]=t+`px`,Q.set(e,i)},H_=[],U_={},W_,G_=function(){return Fg()-Lg>34&&(W_||=requestAnimationFrame(mv))},K_=function(){(!Sg||!Sg.isPressed||Sg.startX>ag.clientWidth)&&(jh.cache++,Sg?W_||=requestAnimationFrame(mv):mv(),Lg||Q_(`scrollStart`),Lg=Fg())},q_=function(){Tg=ng.innerWidth,wg=ng.innerHeight},J_=function(e){jh.cache++,(e===!0||!fg&&!xg&&!rg.fullscreenElement&&!rg.webkitFullscreenElement&&(!Cg||Tg!==ng.innerWidth||Math.abs(ng.innerHeight-wg)>ng.innerHeight*.25))&&sg.restart(!0)},Y_={},X_=[],Z_=function e(){return P_($,`scrollEnd`,e)||uv(!0)},Q_=function(e){return Y_[e]&&Y_[e].map(function(e){return e()})||X_},$_=[],ev=function(e){for(var t=0;t<$_.length;t+=5)(!e||$_[t+4]&&$_[t+4].query===e)&&($_[t].style.cssText=$_[t+1],$_[t].getBBox&&$_[t].setAttribute(`transform`,$_[t+2]||``),$_[t+3].uncache=1)},tv=function(){jh.cache++,jh.forEach(function(e){return n_(e)&&(e.rec=e())})},nv=function(e,t){var n;for(hg=0;hg<H_.length;hg++)n=H_[hg],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));jg=!0,t&&ev(t),t||Q_(`revert`)},rv=function(e,t){jh.cache++,(t||!iv)&&jh.forEach(function(e){return n_(e)&&e.cacheID++&&(e.rec=0)}),t_(e)&&(Og=e,ng.history.scrollRestoration!==e&&(ng.history.scrollRestoration=e))},iv,av=0,ov,sv=function(){if(ov!==av){var e=ov=av;requestAnimationFrame(function(){return e===av&&uv(!0)})}},cv=function(){ag.appendChild(kg),Ag=!Sg&&kg.offsetHeight||ng.innerHeight,ag.removeChild(kg)},lv=function(e){return cg(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},uv=function(e,t){if(ig=rg.documentElement,ag=rg.body,og=[ng,rg,ig,ag],Lg&&!e&&!jg)N_($,`scrollEnd`,Z_);else{cv(),iv=$.isRefreshing=!0,jg||tv();var n=Q_(`refreshInit`);yg&&$.sort(),t||nv(),jh.forEach(function(e){n_(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),H_.slice(0).forEach(function(e){return e.refresh()}),jg=!1,H_.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Mg=1,lv(!0),H_.forEach(function(e){var t=$g(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),lv(!1),Mg=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),jh.forEach(function(e){n_(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),rv(Og,1),sg.pause(),av++,iv=2,mv(2),H_.forEach(function(e){return n_(e.vars.onRefresh)&&e.vars.onRefresh(e)}),iv=$.isRefreshing=!1,Q_(`refresh`)}},dv=0,fv=1,pv,mv=function(e){if(e===2||!iv&&!jg){$.isUpdating=!0,pv&&pv.update(0);var t=H_.length,n=Fg(),r=n-Ig>=50,i=t&&H_[0].scroll();if(fv=dv>i?-1:1,iv||(dv=i),r&&(Lg&&!pg&&n-Lg>200&&(Lg=0,Q_(`scrollEnd`)),ug=Ig,Ig=n),fv<0){for(hg=t;hg-->0;)H_[hg]&&H_[hg].update(0,r);fv=1}else for(hg=0;hg<t;hg++)H_[hg]&&H_[hg].update(0,r);$.isUpdating=!1}W_=0},hv=[c_,l_,d_,u_,y_+__,y_+m_,y_+g_,y_+h_,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],gv=hv.concat([f_,p_,`boxSizing`,`max`+b_,`max`+x_,`position`,y_,v_,v_+g_,v_+m_,v_+__,v_+h_]),_v=function(e,t,n){bv(n);var r=e._gsap;if(r.spacerIsNative)bv(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},vv=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=hv.length,a=t.style,o=e.style,s;i--;)s=hv[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[d_]=o[u_]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[f_]=D_(e,Wh)+S_,a[p_]=D_(e,Gh)+S_,a[v_]=o[y_]=o[l_]=o[c_]=`0`,bv(r),o[f_]=o[`max`+b_]=n[f_],o[p_]=o[`max`+x_]=n[p_],o[v_]=n[v_],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yv=/([A-Z])/g,bv=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Q.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(yv,`-$1`).toLowerCase())}},xv=function(e){for(var t=gv.length,n=e.style,r=[],i=0;i<t;i++)r.push(gv[i],n[gv[i]]);return r.t=e,r},Sv=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Cv={left:0,top:0},wv=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){n_(e)&&(e=e(s)),t_(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?z_(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),r_(e))f&&(e=Q.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&V_(o,n,r,!0);else{n_(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Kh(t,s)||ag,y=E_(_)||{},y&&(y.left||y.top)||C_(_).display!==`none`||(S=_.style.display,_.style.display=`block`,y=E_(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=z_(v[0],y[r.d]),x=z_(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&V_(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,V_(a,C,r,w&&C>20||!w&&(u?Math.max(ag[h],ig[h]):a.parentNode[h])<=C+1),u&&(c=E_(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+S_))}return f&&_&&(h=E_(_),f.seek(d),g=E_(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Tv=/(webkit|moz|length|cssText|inset)/i,Ev=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===ag){for(a in e._stOrig=i.cssText,o=C_(e),o)!+a&&!Tv.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Q.core.getCache(e).uncache=1,t.appendChild(e)}},Dv=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ov=function(e,t,n){var r={};r[t.p]=`+=`+n,Q.set(e,r)},kv=function(e,t){var n=Jh(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Dv(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){jh.cache++,t.tween&&mv()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Q.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},N_(e,`wheel`,n.wheelHandler),$.isTouch&&N_(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){tg||e.register(Q)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Dg(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rg)this.update=this.refresh=this.kill=Wg;else{t=T_(t_(t)||r_(t)||t.nodeType?{trigger:t}:t,L_);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Wh:Gh,T=!l&&l!==0,E=Kh(t.scroller||ng),D=Q.core.getCache(E),O=Jg(E),k=(`pinType`in t?t.pinType:Ih(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:L_.markers,N=O?0:parseFloat(C_(E)[`border`+w.p2+b_])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},ee=Zg(E,O,w),te=Qg(E,O),ne=0,re=0,ie=0,I=Jh(E,w),ae,L,oe,se,ce,R,z,B,V,H,le,U,ue,W,G,de,fe,pe,K,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):I,se=I(),jg&&I.rec==null&&(I.rec=se),P.vars=t,n||=t.animation,`refreshPriority`in t&&(yg=1,t.refreshPriority===-9999&&(pv=P)),D.tweenScroll=D.tweenScroll||{top:kv(E,Gh),left:kv(E,Wh)},P.tweenTo=ae=D.tweenScroll[w.p],P.scrubDuration=function(e){De=r_(e)&&e,De?Ee?Ee.duration(e):Ee=Q.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:De,paused:!0,onComplete:function(){return h&&h(P)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),we=0,o||=n.vars.id),v&&((!i_(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in ag.style&&Q.set(O?[ag,ig]:E,{scrollBehavior:`auto`}),jh.forEach(function(e){return n_(e)&&e.target===(O?rg.scrollingElement||ig:E)&&(e.smooth=!1)}),oe=n_(v.snapTo)?v.snapTo:v.snapTo===`labels`?k_(n):v.snapTo===`labelsDirectional`?j_(n):v.directional===!1?Q.utils.snap(v.snapTo):function(e,t){return A_(v.snapTo)(e,Fg()-re<500?0:t.direction)},Oe=v.duration||{min:.1,max:2},Oe=i_(Oe)?lg(Oe.min,Oe.max):lg(Oe,Oe),ke=Q.delayedCall(v.delay||De/2||.1,function(){var e=I(),t=Fg()-re<500,r=ae.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!pg&&ne!==e){var i=(e-R)/W,a=n&&!T?n.totalProgress():i,o=t?0:(a-Te)/(Fg()-ug)*1e3||0,s=Q.utils.clamp(-i,1-i,s_(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=oe(c,P),r_(l)||(l=c),u=Math.max(0,Math.round(R+l*W)),e<=z&&e>=R&&u!==e){if(r&&!r._initted&&r.data<=s_(u-e))return;v.inertia===!1&&(s=l-i),ae(u,{duration:Oe(s_(Math.max(s_(c-a),s_(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:s_(u-e),onInterrupt:function(){return ke.restart(!0)&&p&&o_(P,p)},onComplete:function(){P.update(),ne=I(),n&&!T&&(Ee?Ee.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),we=Te=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&o_(P,m)}},e,s*W,u-e-s*W),f&&o_(P,f,ae.tween)}}else P.isActive&&ne!==e&&ke.restart(!0)}).pause()),o&&(U_[o]=P),u=P.trigger=Kh(u||d!==!0&&d),Ne=u&&u._gsap&&u._gsap.stRevert,Ne&&=Ne(P),d=d===!0?u:Kh(d),t_(a)&&(a={targets:u,className:a}),d&&(f===!1||f===y_||(f=!f&&d.parentNode&&d.parentNode.style&&C_(d.parentNode).display===`flex`?!1:v_),P.pin=d,L=Q.core.getCache(d),L.spacer?G=L.pinState:(b&&(b=Kh(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),L.spacerIsNative=!!b,b&&(L.spacerState=xv(b))),L.spacer=pe=b||rg.createElement(`div`),pe.classList.add(`pin-spacer`),o&&pe.classList.add(`pin-spacer-`+o),L.pinState=G=xv(d)),t.force3D!==!1&&Q.set(d,{force3D:!0}),P.spacer=pe=L.spacer,Ce=C_(d),ve=Ce[f+w.os2],me=Q.getProperty(d),he=Q.quickSetter(d,w.a,S_),vv(d,pe,Ce),fe=xv(d)),M){U=i_(M)?T_(M,I_):I_,H=B_(`scroller-start`,o,E,w,U,0),le=B_(`scroller-end`,o,E,w,U,0,H),K=H[`offset`+w.op.d2];var Pe=Kh(Ih(E,`content`)||E);B=this.markerStart=B_(`start`,o,Pe,w,U,K,0,x),V=this.markerEnd=B_(`end`,o,Pe,w,U,K,0,x),x&&(Me=Q.quickSetter([B,V],w.a,S_)),!k&&!(Mh.length&&Ih(E,`fixedMarkers`)===!0)&&(w_(O?ag:E),Q.set([H,le],{force3D:!0}),be=Q.quickSetter(H,w.a,S_),Se=Q.quickSetter(le,w.a,S_))}if(x){var Fe=x.vars.onUpdate,Ie=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Fe&&Fe.apply(x,Ie||[])})}if(P.previous=function(){return H_[H_.indexOf(P)-1]},P.next=function(){return H_[H_.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=fg;r!==P.isReverted&&(r&&(Ae=Math.max(I(),P.scroll.rec||0),ie=P.progress,je=n&&n.progress()),B&&[B,V,H,le].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(fg=P,P.update(r)),!d||y&&P.isActive||(r?_v(d,pe,G):vv(d,pe,C_(d),ye)),r||P.update(r),fg=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!fg&&P.enabled||i){if(d&&r&&Lg)N_(e,`scrollEnd`,Z_);else{!iv&&F&&F(P),fg=P,ae.tween&&!a&&(ae.tween.kill(),ae.tween=0),Ee&&Ee.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=ee(),l=te(),m=x?x.duration():$g(E,w),h=W<=.01||!W,g=0,_=o||0,v=i_(a)?a.end:t.end,b=t.endTrigger||u,S=i_(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&Kh(t.pinnedContainer,P),D=u&&Math.max(0,H_.indexOf(P))||0,A=D,j,L,oe,U,K,he,ve,be,Se,Ce,we,Te,De;for(M&&i_(a)&&(Te=Q.getProperty(H,w.p),De=Q.getProperty(le,w.p));A-->0;)he=H_[A],he.end||he.refresh(0,1)||(fg=P),ve=he.pin,ve&&(ve===u||ve===d||ve===C)&&!he.isReverted&&(Ce||=[],Ce.unshift(he),he.revert(!0,!0)),he!==H_[A]&&(D--,A--);for(n_(S)&&(S=S(P)),S=zg(S,`start`,P),R=wv(S,u,s,w,I(),B,H,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),n_(v)&&(v=v(P)),t_(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(t_(S)?S.split(` `)[0]:``)+v:(g=z_(v.substr(2),s),v=t_(S)?S:(x?Q.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,R):R)+g,b=u)),v=zg(v,`end`,P),z=Math.max(R,wv(v||(b?`100% 0`:m),b,s,w,I()+g,V,le,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)he=H_[A]||{},ve=he.pin,ve&&he.start-he._pinPush<=R&&!x&&he.end>0&&(j=he.end-(P._startClamp?Math.max(0,he.start):he.start),(ve===u&&he.start-he._pinPush<R||ve===C)&&isNaN(S)&&(g+=j*(1-he.progress)),ve===d&&(_+=j));if(R+=g,z+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!iv&&(P._endClamp=z||-.001,z=Math.min(z,$g(E,w))),W=z-R||(R-=.01)&&.001,h&&(ie=Q.utils.clamp(0,1,Q.utils.normalize(R,z,Ae))),P._pinPush=_,B&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+I()),Q.set([B,V],j)),d&&!(Mg&&P.end>=$g(E,w)))j=C_(d),U=w===Gh,oe=I(),ge=parseFloat(me(w.a))+_,!m&&z>1&&(we=(O?rg.scrollingElement||ig:E).style,we={style:we,value:we[`overflow`+w.a.toUpperCase()]},O&&C_(ag)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(we.style[`overflow`+w.a.toUpperCase()]=`scroll`)),vv(d,pe,j),fe=xv(d),L=E_(d,!0),be=k&&Jh(E,U?Wh:Gh)(),f?(ye=[f+w.os2,W+_+S_],ye.t=pe,A=f===v_?D_(d,w)+W+_:0,A&&(ye.push(w.d,A+S_),pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+S_)),bv(ye),C&&H_.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&I(Ae)):(A=D_(d,w),A&&pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+S_)),k&&(K={top:L.top+(U?oe-R:be)+S_,left:L.left+(U?be:oe-R)+S_,boxSizing:`border-box`,position:`fixed`},K[f_]=K[`max`+b_]=Math.ceil(L.width)+S_,K[p_]=K[`max`+x_]=Math.ceil(L.height)+S_,K[y_]=K[y_+g_]=K[y_+m_]=K[y_+__]=K[y_+h_]=`0`,K[v_]=j[v_],K[v_+g_]=j[v_+g_],K[v_+m_]=j[v_+m_],K[v_+__]=j[v_+__],K[v_+h_]=j[v_+h_],de=Sv(G,K,y),iv&&I(0)),n?(Se=n._initted,bg(1),n.render(n.duration(),!0,!0),_e=me(w.a)-ge+W+_,xe=Math.abs(W-_e)>1,k&&xe&&de.splice(de.length-2,2),n.render(0,!0,!0),Se||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),bg(0)):_e=W,we&&(we.value?we.style[`overflow`+w.a.toUpperCase()]=we.value:we.style.removeProperty(`overflow-`+w.a));else if(u&&I()&&!x)for(L=u.parentNode;L&&L!==ag;)L._pinOffset&&(R-=L._pinOffset,z-=L._pinOffset),L=L.parentNode;Ce&&Ce.forEach(function(e){return e.revert(!1,!0)}),P.start=R,P.end=z,se=ce=iv?Ae:I(),x||iv||jg||(se<Ae&&I(Ae),P.scroll.rec=0),P.revert(!1,!0),re=Fg(),ke&&(ne=-1,ke.restart(!0)),fg=0,n&&T&&(n._initted||je)&&n.progress()!==je&&n.progress(je||0,!0).render(n.time(),!0,!0),(h||ie!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ie||n.vars.immediateRender!==!1)&&n.totalProgress(x&&R<-.001&&!ie?Q.utils.normalize(R,z,0):ie,!0),P.progress=h||(se-R)/W===ie?0:ie),d&&f&&(pe._pinOffset=Math.round(P.progress*_e)),Ee&&Ee.invalidate(),isNaN(Te)||(Te-=Q.getProperty(H,w.p),De-=Q.getProperty(le,w.p),Ov(H,w,Te),Ov(B,w,Te-(o||0)),Ov(le,w,De),Ov(V,w,De-(o||0))),h&&!iv&&P.update(),c&&!iv&&!ue&&(ue=!0,c(P),ue=!1)}}},P.getVelocity=function(){return(I()-ce)/(Fg()-ug)*1e3||0},P.endAnimation=function(){a_(P.callbackAnimation),n&&(Ee?Ee.progress(1):n.paused()?T||a_(n,P.direction<0,1):a_(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(R||P.refresh()||R)+n.labels[e]/n.duration()*W||0},P.getTrailing=function(e){var t=H_.indexOf(P),n=P.direction>0?H_.slice(0,t).reverse():H_.slice(t+1);return(t_(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=R:e.start>=z})},P.update=function(e,t,r){if(!x||r||e){var o=iv===!0?Ae:P.scroll(),c=e?0:(o-R)/W,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(ce=se,se=x?I():o,v&&(Te=we,we=n&&!T?n.totalProgress():u)),m&&d&&!fg&&!Pg&&Lg&&(!u&&R<o+(o-ce)/(Fg()-ug)*m?u=1e-4:u===1&&z>o+(o-ce)/(Fg()-ug)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!fg&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(n_(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(Ee&&!fg&&!Pg?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo(`totalProgress`,u,n._tTime/n._tDur):(Ee.vars.totalProgress=u,Ee.invalidate().restart())):n&&n.totalProgress(u,!!(fg&&(re||e)))),d){if(e&&f&&(pe.style[f+w.os2]=ve),!k)he(Gg(ge+_e*u));else if(O){if(N=!e&&u>p&&z+1>o&&o+1>=$g(E,w),y){if(!e&&(h||N)){var ee=E_(d,!0),te=o-R;Ev(d,ag,ee.top+(w===Gh?te:0)+S_,ee.left+(w===Gh?0:te)+S_)}else Ev(d,pe)}bv(h||N?de:fe),xe&&u<1&&h||he(ge+(u===1&&!N?_e:0))}}v&&!ae.tween&&!fg&&!Pg&&ke.restart(!0),a&&(M||_&&u&&(u<1||!Ng))&&cg(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!fg?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!Ng)&&(s&&M&&o_(P,s),A[b]&&o_(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&o_(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(r_(S)?S:2500)&&(a_(P.callbackAnimation),Ee?Ee.progress(1):a_(n,D===`reverse`?1:!u,1))):T&&i&&!fg&&i(P)}if(Se){var ne=x?o/x.duration()*(x._caScrollDist||0):o;be(ne+ +!!H._isFlipped),Se(ne)}Me&&Me(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,N_(E,`resize`,J_),O||N_(E,`scroll`,K_),F&&N_(e,`refreshInit`,F),t!==!1&&(P.progress=ie=0,se=ce=ne=I()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&ae?ae.tween:Ee},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:Bg(e,n&&!!P._startClamp),end:Bg(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ye&&e){var t=ye.indexOf(w.d)+1;ye[t]=parseFloat(ye[t])+e+S_,ye[1]=parseFloat(ye[1])+e+S_,bv(ye)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||Ee&&Ee.pause(),Ae=0,L&&(L.uncache=1),F&&P_(e,`refreshInit`,F),ke&&(ke.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!O)){for(var r=H_.length;r--;)if(H_[r].scroller===E&&H_[r]!==P)return;P_(E,`resize`,J_),O||P_(E,`scroll`,K_)}},P.kill=function(e,r){P.disable(e,r),Ee&&!r&&Ee.kill(),o&&delete U_[o];var i=H_.indexOf(P);i>=0&&H_.splice(i,1),i===hg&&fv>0&&hg--,i=0,H_.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||iv||jg||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),B&&[B,V,H,le].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),pv===P&&(pv=0),d&&(L&&(L.uncache=1),i=0,H_.forEach(function(e){return e.pin===d&&i++}),i||(L.spacer=0)),t.onKill&&t.onKill(P)},H_.push(P),P.enable(!1,!1),Ne&&Ne(P),n&&n.add&&!W){var Le=P.update;P.update=function(){P.update=Le,jh.cache++,R||z||P.refresh()},Q.delayedCall(.01,P.update),W=.01,R=z=0}else P.refresh();d&&sv()}},e.register=function(t){return tg||=(Q=t||qg(),Kg()&&window.document&&e.enable(),Rg),tg},e.defaults=function(e){if(e)for(var t in e)L_[t]=e[t];return L_},e.disable=function(e,t){Rg=0,H_.forEach(function(n){return n[t?`kill`:`disable`](e)}),P_(ng,`wheel`,K_),P_(rg,`scroll`,K_),clearInterval(dg),P_(rg,`touchcancel`,Wg),P_(ag,`touchstart`,Wg),M_(P_,rg,`pointerdown,touchstart,mousedown`,Hg),M_(P_,rg,`pointerup,touchend,mouseup`,Ug),sg.kill(),e_(P_);for(var n=0;n<jh.length;n+=3)F_(P_,jh[n],jh[n+1]),F_(P_,jh[n],jh[n+2])},e.enable=function(){if(ng=window,rg=document,ig=rg.documentElement,ag=rg.body,Q){if(cg=Q.utils.toArray,lg=Q.utils.clamp,Dg=Q.core.context||Wg,bg=Q.core.suppressOverwrites||Wg,Og=ng.history.scrollRestoration||`auto`,dv=ng.pageYOffset||0,Q.core.globals(`ScrollTrigger`,e),ag){Rg=1,kg=document.createElement(`div`),kg.style.height=`100vh`,kg.style.position=`absolute`,cv(),Vg(),eg.register(Q),e.isTouch=eg.isTouch,Eg=eg.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cg=eg.isTouch===1,N_(ng,`wheel`,K_),og=[ng,rg,ig,ag],Q.matchMedia?(e.matchMedia=function(e){var t=Q.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Q.addEventListener(`matchMediaInit`,function(){tv(),nv()}),Q.addEventListener(`matchMediaRevert`,function(){return ev()}),Q.addEventListener(`matchMedia`,function(){uv(0,1),Q_(`matchMedia`)}),Q.matchMedia().add(`(orientation: portrait)`,function(){return q_(),q_})):console.warn(`Requires GSAP 3.11.0 or later`),q_(),N_(rg,`scroll`,K_);var t=ag.hasAttribute(`style`),n=ag.style,r=n.borderTopStyle,i=Q.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=E_(ag),Gh.m=Math.round(a.top+Gh.sc())||0,Wh.m=Math.round(a.left+Wh.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(ag.setAttribute(`style`,``),ag.removeAttribute(`style`)),dg=setInterval(G_,250),Q.delayedCall(.5,function(){return Pg=0}),N_(rg,`touchcancel`,Wg),N_(ag,`touchstart`,Wg),M_(N_,rg,`pointerdown,touchstart,mousedown`,Hg),M_(N_,rg,`pointerup,touchend,mouseup`,Ug),mg=Q.utils.checkPrefix(`transform`),gv.push(mg),tg=Fg(),sg=Q.delayedCall(.2,uv).pause(),vg=[rg,`visibilitychange`,function(){var e=ng.innerWidth,t=ng.innerHeight;rg.hidden?(gg=e,_g=t):(gg!==e||_g!==t)&&J_()},rg,`DOMContentLoaded`,uv,ng,`load`,uv,ng,`resize`,J_],e_(N_),H_.forEach(function(e){return e.enable(0,1)}),o=0;o<jh.length;o+=3)F_(P_,jh[o],jh[o+1]),F_(P_,jh[o],jh[o+2])}else rg&&rg.addEventListener(`DOMContentLoaded`,function t(){e.enable(),rg.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(Ng=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(dg)||(dg=n)&&setInterval(G_,n),`ignoreMobileResize`in t&&(Cg=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(e_(P_)||e_(N_,t.autoRefreshEvents||`none`),xg=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Kh(e),r=jh.indexOf(n),i=Jg(n);~r&&jh.splice(r,i?6:2),t&&(i?Mh.unshift(ng,t,ag,t,ig,t):Mh.unshift(n,t))},e.clearMatchMedia=function(e){H_.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(t_(e)?Kh(e):e).getBoundingClientRect(),i=r[n?f_:p_]*t||0;return n?r.right-i>0&&r.left+i<ng.innerWidth:r.bottom-i>0&&r.top+i<ng.innerHeight},e.positionInViewport=function(e,t,n){t_(e)&&(e=Kh(e));var r=e.getBoundingClientRect(),i=r[n?f_:p_],a=t==null?i/2:t in R_?R_[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/ng.innerWidth:(r.top+a)/ng.innerHeight},e.killAll=function(e){if(H_.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=Y_.killAll||[];Y_={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.1`,$.saveStyles=function(e){return e?cg(e).forEach(function(e){if(e&&e.style){var t=$_.indexOf(e);t>=0&&$_.splice(t,5),$_.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Q.core.getCache(e),Dg())}}):$_},$.revert=function(e,t){return nv(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?J_(!0):(tg||$.register())&&uv(!0)},$.update=function(e){return++jh.cache&&mv(e===!0?2:0)},$.clearScrollMemory=rv,$.maxScroll=function(e,t){return $g(e,t?Wh:Gh)},$.getScrollFunc=function(e,t){return Jh(Kh(e),t?Wh:Gh)},$.getById=function(e){return U_[e]},$.getAll=function(){return H_.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!Lg},$.snapDirectional=A_,$.addEventListener=function(e,t){var n=Y_[e]||(Y_[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=Y_[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=Q.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&n_(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return n_(a)&&(a=a(),N_($,`refresh`,function(){return a=t.batchMax()})),cg(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n};var Av=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},jv=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(eg.isTouch?` pinch-zoom`:``):`none`,t===ig&&e(ag,n)},Mv={auto:1,scroll:1},Nv=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Q.core.getCache(i),o=Fg(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==ag&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Mv[(s=C_(i)).overflowY]||Mv[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!Jg(i)&&(Mv[(s=C_(i)).overflowY]||Mv[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Pv=function(e,t,n,r){return eg.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Nv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&N_(rg,eg.eventTypes[0],Lv,!1,!0)},onDisable:function(){return P_(rg,eg.eventTypes[0],Lv,!0)}})},Fv=/(input|label|select|textarea)/i,Iv,Lv=function(e){var t=Fv.test(e.target.tagName);(t||Iv)&&(e._gsapAllow=!0,Iv=t)},Rv=function(e){i_(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Kh(e.target)||ig,l=Q.core.globals().ScrollSmoother,u=l&&l.get(),d=Eg&&(e.content&&Kh(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Jh(c,Gh),p=Jh(c,Wh),m=1,h=(eg.isTouch&&ng.visualViewport?ng.visualViewport.scale*ng.visualViewport.width:ng.outerWidth)/ng.innerWidth,g=0,_=n_(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Pv(c,e.type,!0,i),x=function(){return y=!1},S=Wg,C=Wg,w=function(){s=$g(c,Gh),C=lg(+!!Eg,s),n&&(S=lg(0,$g(c,Wh))),v=av},T=function(){d._gsap.y=Gg(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Gg(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Gg((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=jh.cache,mv()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Q.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Eg&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Gg((ng.visualViewport&&ng.visualViewport.scale||1)/h),D.pause(),e!==m&&jv(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=av},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{jh.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Av(p,i,o,$g(c,Wh)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Av(f,i,o,$g(c,Gh)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Eg&&D.vars.scrollY>=s||i>=s-1)&&Q.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Fg()-g>1e3&&(v=0,g=Fg())},e.onChange=function(e,t,r,i,a){if(av!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&mv()},e.onEnable=function(){jv(c,!n&&`x`),$.addEventListener(`refresh`,j),N_(ng,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){jv(c,!0),P_(ng,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new eg(e),o.iOS=Eg,Eg&&!f()&&f(1),Eg&&Q.ticker.add(Wg),A=o._dc,D=Q.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Dv(f,f(),function(){return D.pause()})},onUpdate:mv,onComplete:A.vars.onComplete}),o};$.sort=function(e){if(n_(e))return H_.sort(e);var t=ng.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ng.innerHeight}),H_.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new eg(e)},$.normalizeScroll=function(e){if(e===void 0)return Sg;if(e===!0&&Sg)return Sg.enable();if(e===!1)Sg&&Sg.kill(),Sg=e;else{var t=e instanceof eg?e:Rv(e);return Sg&&Sg.target===t.target&&Sg.kill(),Jg(t.target)&&(Sg=t),t}},$.core={_getVelocityProp:Yh,_inputObserver:Pv,_scrollers:jh,_proxies:Mh,bridge:{ss:function(){Lg||Q_(`scrollStart`),Lg=Fg()},ref:function(){return fg}}},qg()&&Q.registerPlugin($);var zv=`1.3.27`;function Bv(e,t,n){return Math.max(e,Math.min(t,n))}function Vv(e,t,n){return(1-n)*e+n*t}function Hv(e,t,n,r){return Vv(e,t,1-Math.exp(-n*r))}function Uv(e,t){return(e%t+t)%t}var Wv=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=Bv(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Hv(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function Gv(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var Kv=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=Gv(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},qv=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Jv=100/6,Yv={passive:!1};function Xv(e,t){return e===1?Jv:e===2?t:1}var Zv=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new qv;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Yv),this.element.addEventListener(`touchstart`,this.onTouchStart,Yv),this.element.addEventListener(`touchmove`,this.onTouchMove,Yv),this.element.addEventListener(`touchend`,this.onTouchEnd,Yv)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Yv),this.element.removeEventListener(`touchstart`,this.onTouchStart,Yv),this.element.removeEventListener(`touchmove`,this.onTouchMove,Yv),this.element.removeEventListener(`touchend`,this.onTouchEnd,Yv)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=Xv(r,this.window.width),a=Xv(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Qv=e=>Math.min(1,1.001-2**(-10*e)),$v=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Wv;emitter=new qv;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=zv,window.lenis||(window.lenis={}),window.lenis.version=zv,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),typeof s==`number`&&typeof c!=`function`?c=Qv:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new Kv(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Zv(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty(`overflow`):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty(`overflow`,`clip`):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof Element&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=Bv(0,f,this.limit);f===this.targetScroll?(c?.(this),l?.(this)):(this.userData=d??{},n?(this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()})):(i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=Qv:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})))}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Uv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},ey=Math.PI,ty=(e,t,n)=>e+(t-e)*n,ny=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),ry=e=>e*e*(3-2*e);function iy(){let e=[];function t(t,n,r,i){let a=typeof t==`string`?document.querySelector(t):t;a&&e.push({el:a,startExpr:n,endExpr:r,onProgress:i,startPx:0,endPx:1,lastP:-1})}function n(e,t,n,r){let i=e.getBoundingClientRect(),a=i.top+n,[o,s]=t.split(` `);return(o===`top`?a:o===`center`?a+i.height/2:a+i.height)-(s.endsWith(`%`)?parseFloat(s)/100*r:s===`top`?0:s===`center`?r/2:s===`bottom`?r:parseFloat(s))}function r(t){let r=window.scrollY;for(let i of e)i.startPx=n(i.el,i.startExpr,r,t),i.endPx=n(i.el,i.endExpr,r,t)}function i(t=!1){let n=window.scrollY;if(t)for(let t of e)n<t.startPx&&t.lastP>0&&t.onProgress(0,0);for(let r of e){let e=ny((n-r.startPx)/Math.max(r.endPx-r.startPx,1)),i=ry(e);if(t){if(n<r.startPx){r.lastP=0;continue}}else if(i===r.lastP)continue;r.lastP=i,r.onProgress(i,e)}}return{addSegment:t,rebuildOffsets:r,applyScroll:i}}function ay(e){return{hero:()=>{let{W:t,H:n,isMob:r}=e(),i=Math.min(t,n)*(r?.76:.52);return{x:(t-i)/2,y:(n-i)/2+n*.07,w:i,h:i,r:i/2}},stele:()=>{let{W:t,H:n,isMob:r}=e();if(r){let e=t*.74,r=Math.min(n*.48,e*1.62);return{x:(t-e)/2,y:n*.06,w:e,h:r,r:22}}let i=Math.min(t*.3,520),a=Math.min(n*.62,i*1.72);return{x:t-i-t*.09,y:(n-a)/2,w:i,h:a,r:22}},cine:()=>{let{W:t,H:n,isMob:r}=e(),i=r?t*.92:Math.min(t*.68,n*1.4),a=i*.5625;return{x:(t-i)/2,y:(n-a)/2+n*(r?.12:.13),w:i,h:a,r:16}},mirror:()=>{let{W:t,H:n,isMob:r}=e();if(r){let e=t*.58,r=Math.min(n*.46,e*1.7);return{x:(t-e)/2,y:n*.08,w:e,h:r,r:e/2}}let i=Math.min(t*.23,380),a=Math.min(n*.64,i*2.05);return{x:t-i-t*.1,y:(n-a)/2,w:i,h:a,r:i/2}},medal:()=>{let{W:t,H:n,isMob:r}=e(),i=r?t*.2:Math.min(t,n)*.15;return r?{x:t-i-18,y:92,w:i,h:i,r:i/2}:{x:t-i-34,y:n-i-34,w:i,h:i,r:i/2}},canvas:()=>{let{W:t,H:n,isMob:r}=e(),i=r?t*.86:Math.min(t*.58,n*.86),a=i*.88;return{x:(t-i)/2,y:(n-a)/2+n*.04,w:i,h:a,r:26}},full:()=>{let{W:t,H:n}=e();return{x:0,y:0,w:t,h:n,r:0}},invSeed:()=>{let{W:t,H:n}=e();return{x:t/2-20,y:n/2-20,w:40,h:40,r:20}},invStart:()=>{let{W:t,H:n,isMob:r}=e();if(r){let e=t*.68,r=e*.78;return{x:(t-e)/2,y:n*.5-r*.18,w:e,h:r,r:24}}let i=Math.min(t*.42,n*.62),a=i*.74;return{x:t-i-t*.09,y:(n-a)/2,w:i,h:a,r:24}},invFloat:()=>{let{W:t,H:n,isMob:r}=e();if(r){let e=t*.52,r=e*.74;return{x:(t-e)/2,y:n*.1,w:e,h:r,r:22}}let i=Math.min(t*.28,n*.42),a=i*.74;return{x:t-i-t*.1,y:n*.16,w:i,h:a,r:22}},finis:()=>{let{W:t,H:n,isMob:r}=e(),i=Math.min(t,n)*(r?.42:.3);return{x:(t-i)/2,y:n*.14,w:i,h:i,r:i/2}}}}function oy(e,t,n,r,i){return function(a,o,s,c,l=0,u=0){let{W:d,H:f}=i();s?(e.style.clipPath=`none`,e.classList.add(`inv`),t.style.transform=`translate(${l}px,${u}px)`):(e.style.clipPath=`inset(${a.y}px ${d-a.x-a.w}px ${f-a.y-a.h}px ${a.x}px round ${a.r}px)`,e.classList.remove(`inv`),t.style.transform=`none`),t.style.top=`${a.y}px`,t.style.left=`${a.x}px`,t.style.width=`${a.w}px`,t.style.height=`${a.h}px`,t.style.borderRadius=`${a.r}px`,t.style.opacity=String(o);let p=Math.max(0,Math.min(1,(170-a.r)/140))*o;n.forEach(e=>e.style.opacity=String(p)),r.style.opacity=String(o*.95),c.ox=a.x/d,c.oy=a.y/f,c.ow=Math.max(a.w/d,.001),c.oh=Math.max(a.h/f,.001)}}function sy(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=t.createRadialGradient(256,256,0,256,256,256);n.addColorStop(0,`#241708`),n.addColorStop(.7,`#120b05`),n.addColorStop(1,`#0a0603`),t.fillStyle=n,t.fillRect(0,0,512,512),t.strokeStyle=`#c9a227`,t.lineWidth=7,t.beginPath(),t.arc(256,256,236,0,7),t.stroke(),t.lineWidth=2,t.globalAlpha=.8,t.beginPath(),t.arc(256,256,200,0,7),t.stroke(),t.beginPath(),t.arc(256,256,118,0,7),t.stroke(),t.globalAlpha=.55;for(let e=0;e<28;e++){let n=e/28*ey*2;t.beginPath(),t.moveTo(256+Math.cos(n)*206,256+Math.sin(n)*206),t.lineTo(256+Math.cos(n)*226,256+Math.sin(n)*226),t.stroke()}t.globalAlpha=1;let r=t.createRadialGradient(256,256,4,256,256,112);r.addColorStop(0,`#0c0703`),r.addColorStop(.75,`#1c1106`),r.addColorStop(1,`#3d2b10`),t.fillStyle=r,t.beginPath(),t.arc(256,256,112,0,7),t.fill(),t.fillStyle=`rgba(232,201,106,.95)`,t.beginPath(),t.arc(282,226,13,0,7),t.fill();let i=new Ua(e);return i.colorSpace=Ct,i}function cy(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(242,204,116,1)`),n.addColorStop(.35,`rgba(220,170,80,.55)`),n.addColorStop(1,`rgba(200,150,60,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Ua(e);return r.colorSpace=Ct,r}function ly(e){let t=document.createElement(`canvas`);t.width=256,t.height=128;let n=t.getContext(`2d`);n.font=`700 72px Cinzel, Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=`rgba(230,196,106,.9)`,n.shadowBlur=22,n.fillStyle=`#e6c46a`,n.fillText(e,128,68);let r=new Ua(t);return r.colorSpace=Ct,r}function uy(e,t,n){let r=new Float32Array(t*3);for(let e=0;e<t;e++){let t,i,a;do t=(Math.random()-.5)*n[0],i=(Math.random()-.5)*n[1],a=(Math.random()-.5)*n[2];while(t*t+i*i+a*a<4);r.set([t,i,a],e*3)}let i=new ni;return i.setAttribute(`position`,new Gr(r,3)),new Va(i,new Ia({map:e,size:.085,transparent:!0,opacity:.8,blending:2,depthWrite:!1}))}function dy(e){e.fog=new zi(854278,.05);let t=sy(),n=cy(),r=new ro({color:1644320,roughness:.34,metalness:.72,envMapIntensity:.9}),i=new ro({color:13214247,roughness:.22,metalness:1,envMapIntensity:1.25}),a=new ro({color:5707282,roughness:.88,metalness:.05,envMapIntensity:.35}),o=new ro({color:2828083,roughness:.8,metalness:.25,envMapIntensity:.5}),s=new io({map:t,emissiveMap:t,emissive:14198840,emissiveIntensity:.3,color:16777215,roughness:.14,metalness:.85,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.1}),c=new Ii,l=new Ii,u=new Ii;c.add(l),l.add(u),e.add(c);let d=new Ii;u.add(d);let f=(e,t,n={})=>{let r=new mi(e,t);return r.position.set(n.x||0,n.y||0,n.z||0),n.s&&r.scale.set(...n.s),n.r&&r.rotation.set(...n.r),d.add(r),r};f(new to(1.1,72,48),r,{z:-.08,s:[1.5,1,1.02]}),f(new no(.78,.055,20,72),i,{z:1}),f(new Ga(.75,64),s,{z:1.035}),f(new no(.5,.016,12,64),i,{z:1.06}),f(new no(.95,.23,20,48),a,{y:-.82,z:.12,r:[ey/2,0,0],s:[1.42,1.08,1]}),f(new no(1,.12,16,56),a,{z:-.5,s:[1.52,1.02,1]}),f(new Ka(.14,.14,.07,32),i,{x:1.64,y:.1,z:.22,r:[0,0,ey/2]}),f(new Ka(.14,.14,.07,32),i,{x:-1.64,y:.1,z:.22,r:[0,0,ey/2]}),f(new no(1.14,.045,12,48,ey),o,{z:-.06,s:[1.46,1.01,1]}),f(new _i(.12,.34,.22),o,{x:1.6,z:-.1}),f(new _i(.12,.34,.22),o,{x:-1.6,z:-.1});let p=new Ii;p.rotation.y=3.45,d.add(p);let m=new mi(new no(1.3,.085,14,64,ey*1.2),o);m.rotation.x=ey/2,m.position.set(0,.04,-.12),m.scale.set(1.24,1,1),p.add(m);let h=new Vr({color:14266954,transparent:!0,opacity:.4}),g=new mi(new no(2.35,.011,8,128),h),_=new mi(new no(2.8,.007,8,128),h.clone());_.material.opacity=.22,g.rotation.x=.5,_.rotation.x=1.25,c.add(g,_);let v=uy(n,300,[16,10,10]),y=uy(n,200,[12,8,8]);e.add(v,y),e.add(new Co(4208170,657157,.65));let b=new Fo(16767398,2.4);b.position.set(4,5,6),e.add(b);let x=new Fo(5338270,1.15);x.position.set(-6,2.5,-5),e.add(x);let S=new Mo(11547690,.35,14);S.position.set(1.6,-1.8,2.6),e.add(S);let C=new Mo(14264382,.5,12);C.position.set(-2.4,1.6,2.2),e.add(C);let w=new ya(new J(-1,0,0),-2.8),T=new Ca({color:14266954,transparent:!0,opacity:.95,clippingPlanes:[w]}),E=new ro({color:2366480,roughness:.4,metalness:.7,transparent:!0,opacity:.08,clippingPlanes:[w],envMapIntensity:.6}),D=new ro({color:13214247,roughness:.25,metalness:1,transparent:!0,opacity:.9,clippingPlanes:[w],envMapIntensity:1.2}),O=new ro({color:854546,roughness:.12,metalness:.9,emissive:7019794,emissiveIntensity:.5,transparent:!0,opacity:.92,clippingPlanes:[w]}),k=new Ii;u.add(k);let A=[];function j(e,t,n,r){A.push({obj:e,fp:new J(...t),fr:new nr(...n||[0,0,0]),sp:new J(...t).add(new J((Math.random()-.5)*4,(Math.random()-.3)*4,(Math.random()-.5)*4)),sr:new nr((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5),d:r}),k.add(e)}function M(e,t,n=25){let r=new Ii;return r.add(new mi(e,t)),r.add(new Fa(new Qa(e,n),T)),r}let N=-ey*.42,P=ey*.84;j(M(new Ka(1.35,1.35,.8,48,1,!0,N,P),E),[0,0,0],null,0),j(M(new Ka(1.37,1.37,.05,48,1,!0,N,P),E,60),[0,.425,0],null,.07),j(M(new Ka(1.37,1.37,.05,48,1,!0,N,P),E,60),[0,-.425,0],null,.12),j(M(new Ka(1.4,1.4,.26,48,1,!0,-ey*.36,ey*.72),O),[0,0,0],null,.18),j(M(new to(.3,24,16),E),[1.31,0,.34],[0,0,0],.24);{let e=M(new to(.3,24,16),E);e.children.forEach(e=>e.scale.set(.65,1,1)),j(e,[-1.31,0,.34],null,.3)}{let e=M(new $a(.16),D,1);e.children.forEach(e=>e.scale.set(.5,1.3,.28)),j(e,[0,.62,.15],null,.36)}{let e=new Ii,t=new mi(new no(1.12,.045,10,48,ey*1.1),E),n=new Ii;n.rotation.y=1.41,t.rotation.x=ey/2,n.add(t),e.add(n);for(let t=0;t<14;t++){let n=-1.62+3.24/13*t,r=new mi(new $a(.09),D);r.scale.set(.5,1,.22),r.position.set(Math.sin(n)*1.12,.07,-Math.cos(n)*1.12),r.rotation.set(.18*(t%2?1:-1),n,t%2?.55:-.55),e.add(r)}j(e,[0,0,-.12],null,.44)}return k.visible=!1,{rig:c,spin:l,drag:u,headset:d,halo1:g,halo2:_,dustA:v,dustB:y,redLight:S,matLens:s,clipPlane:w,bLineM:T,bFillM:E,bGoldM:D,gB:k,parts:A}}function fy(e,t,n){e.background=new Y(919557),e.fog=new zi(1313286,.026),e.environment=t;let r=new Ii;e.add(r);let i=new ro({color:2827292,roughness:.92,metalness:.05,envMapIntensity:.25}),a=new ro({color:2103827,roughness:.95,envMapIntensity:.2}),o=new ro({color:13214247,roughness:.22,metalness:1,envMapIntensity:1.25}),s=[],c=(e,t,n,i,a)=>{let o=new mi(e,t);return o.position.set(n,i,a),r.add(o),o};function l(e,t,n,o=1,l=0){for(let u=0;u<t;u++){let d=u/t*ey*2*o+.3,f=Math.cos(d)*e,p=Math.sin(d)*e;if(c(new Ka(.32,.4,n,10),i,f,n/2+l,p),c(new _i(.95,.26,.95),a,f,n+.13+l,p),c(new _i(1.05,.3,1.05),a,f,.15+l,p),o===1&&u%3==0){let t=new mi(new eo(1.15,3.2),new ro({color:5706768,roughness:.9,side:2,emissive:2754566,emissiveIntensity:.4}));t.position.set(Math.cos(d)*(e-.55),n-1.9,Math.sin(d)*(e-.55)),t.rotation.y=-d+ey/2,t.userData.ph=u,r.add(t),s.push(t)}}}l(20,18,6);{let e=new mi(new no(20,.38,8,80),a);e.rotation.x=ey/2,e.position.y=6.45,r.add(e)}l(30,14,10,.72);{let e=new mi(new no(30,.5,8,60,ey*1.44),a);e.rotation.x=ey/2,e.position.y=10.5,e.rotation.z=.3,r.add(e)}let u=new mi(new Ga(70,64),new ro({color:1182985,roughness:.95}));u.rotation.x=-ey/2,r.add(u);let d=new Zo(42,16,8,64,9071407,3812374);d.material.transparent=!0,d.material.opacity=.3,d.position.y=.02,r.add(d),c(new Ka(3,3.5,.7,48),i,0,.35,0);{let e=new mi(new no(3.1,.06,10,64),o);e.rotation.x=ey/2,e.position.y=.74,r.add(e)}let f=new Ii;f.position.set(0,12.5,0),f.rotation.x=.32,r.add(f),f.add(new mi(new to(3.4,24,16),new Vr({color:14266954,wireframe:!0,transparent:!0,opacity:.22})));{let e=n.clone();e.clippingPlanes=null;let t=new mi(new no(1.5,.05,10,64),e);t.position.z=2.95,f.add(t);let r=[];for(let e=0;e<24;e++){let t=e/24*ey*2;r.push(new J(Math.cos(t)*1.7,Math.sin(t)*1.7,2.85),new J(Math.cos(t)*2.5,Math.sin(t)*2.5,2.2))}f.add(new Fa(new ni().setFromPoints(r),new Ca({color:13214247,transparent:!0,opacity:.5})))}fh.timeline({repeat:-1,repeatDelay:5.5}).to(f.scale,{y:.05,duration:.3,ease:`power2.in`}).to(f.scale,{y:1,duration:.38,ease:`power2.out`},`+=.14`);let p=[];[`XII`,`MMXXV`,`XCIX`,`IV`,`I`,`CDXCVIII`,`VII`,`LXX`].forEach((e,t)=>{let n=new ia(new Wi({map:ly(e),transparent:!0,opacity:.8,depthWrite:!1})),i=.9+Math.random()*1.3;n.scale.set(2.4*i,1.2*i,1),p.push({sp:n,a:t/8*ey*2,r:9+Math.random()*10,y:3.5+Math.random()*7,v:(.05+Math.random()*.08)*(t%2?1:-1)}),r.add(n)});let m=uy(cy(),360,[60,22,60]);m.material.opacity=.5,m.material.size=.22,r.add(m),e.add(new Co(4864552,853765,.8));let h=new Fo(16767398,1.9);h.position.set(8,14,10),e.add(h);let g=new Mo(11547690,2.2,40);g.position.set(0,2.5,6),e.add(g);let _=new Fo(5338270,.7);return _.position.set(-10,6,-12),e.add(_),{banners:s,numerals:p,arenaDust:m,aRed:g}}function py({addSegment:e,WS:t,win:n,frameState:r,sceneState:i,arenaState:a,labelEl:o,invertedFrameLabel:s,setWorld:c}){let l=(t,r,i,a,o,s)=>e(t,r,i,e=>{let t=a(),r=o();n.x=ty(t.x,r.x,e),n.y=ty(t.y,r.y,e),n.w=ty(t.w,r.w,e),n.h=ty(t.h,r.h,e),n.r=ty(t.r,r.r,e),s&&s(e)}),u=(t,n,r,a,o,s)=>e(t,n,r,e=>{for(let t in o)i[t]=t in a?ty(a[t],o[t],e):o[t]*e+(1-e)*(i[t]??0);s&&s(e)}),d=(t,n,r,i,o)=>e(t,n,r,e=>{for(let t in o)a[t]=ty(i[t],o[t],e)});l(`#ch1`,`top 88%`,`top 24%`,t.hero,t.stele),l(`#ch2`,`top 88%`,`top 24%`,t.stele,t.cine),l(`#ch3`,`top 88%`,`top 24%`,t.cine,t.mirror),l(`#ch4`,`top 85%`,`top 20%`,t.mirror,t.medal),l(`#ch5`,`top 88%`,`top 22%`,t.medal,t.canvas),l(`#ch6`,`top 88%`,`top 12%`,t.canvas,t.full,e=>{r.alpha=1-e}),l(`#ch7`,`top 84%`,`top 18%`,t.invSeed,t.invStart,e=>{r.inverted=e>0,r.alpha=e,e>0?o.textContent!==s&&(o.textContent=s,fh.fromTo(o,{y:10},{y:0,duration:.6})):o.textContent===s&&(o.textContent=``,Object.assign(n,t.full()))}),l(`#ch7`,`center center`,`bottom 65%`,t.invStart,t.invFloat),l(`#ch8`,`top 92%`,`top 16%`,t.invFloat,t.finis);let f={camZ:7.8,camY:.25,rx:.07,ry:.35,spinAmp:1,red:.35,lens:.35,dust:1,fogRed:0},p={camZ:6.6,camY:.15,rx:.17,ry:2.6,spinAmp:.3,red:.7,lens:.5},m={camZ:3.55,camY:.05,rx:.02,ry:2*ey,spinAmp:0,red:.55,lens:1.7,dust:.7},h={camZ:5.4,camY:.12,rx:.12,ry:2*ey+1.45,spinAmp:0,red:1.25,lens:.6},g={camZ:7.7,camY:.2,rx:.05,ry:2*ey+2.7,spinAmp:.55,red:.25,lens:.35,dust:.8,fogRed:0},_={camZ:6.4,camY:.1,rx:.04,ry:4*ey,spinAmp:0,red:.45,lens:.4,dust:.7,fogRed:.08},v={camZ:5,camY:.15,ry:4*ey+.55,spinAmp:0,red:3.2,lens:.4,dust:3.6,fogRed:1},y={camZ:7.4,camY:.22,rx:.06,ry:6*ey,spinAmp:.9,red:.3,lens:.5,dust:1,fogRed:0},b={camZ:7.8,spinAmp:.6,red:.25,lens:.35,ry:6*ey+.4};u(`#ch1`,`top 80%`,`top 18%`,f,p),u(`#ch2`,`top 80%`,`top 18%`,p,m),u(`#ch3`,`top 80%`,`top 18%`,m,h),u(`#ch4`,`top 80%`,`top 18%`,h,g),u(`#ch5`,`top 88%`,`top 15%`,g,_),e(`#ch5`,`top 86%`,`top 55%`,e=>{i.aScale=1-e}),e(`#ch5`,`top 55%`,`bottom 60%`,e=>{i.asm=e}),u(`#ch6`,`top 80%`,`top 10%`,_,v),u(`#ch7`,`top 84%`,`top 16%`,v,y,e=>{i.aScale=e,i.asm=1}),u(`#ch8`,`top 92%`,`top 12%`,y,b);let x={orbA:.55,orbR:26,orbY:13},S={orbA:1.7,orbR:13,orbY:4.6},C={orbA:2.9,orbR:10.5,orbY:5.4};d(`#ch6`,`center center`,`bottom bottom`,x,S),d(`#ch7`,`top 80%`,`bottom 80%`,S,C),d(`#ch8`,`top 90%`,`bottom bottom`,C,{orbA:3.95,orbR:14,orbY:6.8});let w=document.getElementById(`lidT`),T=document.getElementById(`lidB`);e(`#ch6`,`top -20%`,`top -120%`,(e,t)=>{let n=`scaleY(${t<.55?ry(ny(t/.45)):1-ry(ny((t-.55)/.45))})`;w&&(w.style.transform=n),T&&(T.style.transform=n),c(t>=.45?`arena`:`gallery`)});let E=document.getElementById(`t1zone`),D=document.getElementById(`t2zone`);e(`#ch6`,`top 20%`,`top -16%`,e=>{if(!E)return;let t=ry(ny(e/.45)),n=ry(ny((e-.62)/.38));E.style.display=`block`,E.style.opacity=String(t*(1-n)),E.style.transform=`scale(${.92+t*.1+n*.12})`,e===0&&n===0&&(E.style.display=``)}),e(`#ch6`,`top -80%`,`top -125%`,e=>{D&&(D.style.display=`block`,D.style.opacity=String(e),D.style.transform=`scale(${.94+e*.07})`,e===0&&(D.style.display=`none`))});let O=document.getElementById(`finisBig`),k=document.getElementById(`finisSub`);e(`.finis-zone`,`top 55%`,`top -85%`,e=>{let t=ry(ny(e/.35)),n=ry(ny((e-.72)/.28)),r=String(t*(1-n)),i=`scale(${.94+t*.06+n*.14})`;O&&(O.style.opacity=r,O.style.transform=i),k&&(k.style.opacity=r)}),e(`.fin-content`,`top 90%`,`top 45%`,e=>{r.alpha=1-e})}function my({lenis:e,cursor:t,labelEl:n,frameLabels:r,isInverted:i,invalidEmailMessage:a,successToastMessage:o,getViewport:s}){let c=``;[[`#top`,`top`],[`#ch1`,`ch1`],[`#ch2`,`ch2`],[`#ch3`,`ch3`],[`#ch4`,`ch4`],[`#ch5`,`ch5`],[`#ch6`,`ch6`],[`#ch7`,`ch6`],[`#ch8`,`ch6`]].forEach(([e,t])=>$.create({trigger:e,start:`top 55%`,end:`bottom 55%`,onToggle:e=>{if(!e.isActive||c===t||i())return;c=t;let a=r[t];a&&(n.textContent=a,fh.fromTo(n,{y:10,opacity:0},{y:0,opacity:1,duration:.7,ease:`power2.out`}))}}));function l(e){let t=e.textContent||``;e.textContent=``;let n=[],r=t.split(/(\s+)/);for(let t of r){if(!t)continue;if(/^\s+$/.test(t)){e.appendChild(document.createTextNode(t));continue}let r=document.createElement(`span`);r.className=`word`,r.style.display=`inline-block`,r.style.whiteSpace=`nowrap`;for(let e of t){let t=document.createElement(`span`);t.className=`ch`,t.style.display=`inline-block`;let i=document.createElement(`i`);i.style.display=`inline-block`,i.textContent=e,t.appendChild(i),r.appendChild(t),n.push(i)}e.appendChild(r)}return n}document.querySelectorAll(`[data-split]`).forEach(e=>{e.closest(`.hero`)||fh.from(l(e),{yPercent:118,duration:1.1,stagger:.04,ease:`power4.out`,scrollTrigger:{trigger:e,start:`top 80%`}})}),document.querySelectorAll(`[data-fade]`).forEach(e=>fh.from(e,{y:44,opacity:0,duration:1.2,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 84%`}})),document.querySelectorAll(`.chapter .kicker`).forEach(e=>{fh.from(e,{opacity:0,x:-24,duration:1,ease:`power2.out`,scrollTrigger:{trigger:e,start:`top 86%`}});let t=e.querySelector(`.k-line`);t&&fh.from(t,{scaleX:0,duration:1.2,ease:`expo.out`,scrollTrigger:{trigger:e,start:`top 86%`}})}),document.querySelectorAll(`[data-wm]`).forEach(e=>fh.fromTo(e,{yPercent:24},{yPercent:-18,ease:`none`,scrollTrigger:{trigger:e.parentElement,start:`top bottom`,end:`bottom top`,scrub:!0}})),document.querySelectorAll(`.num`).forEach(e=>{let t=+(e.dataset.n||0),n={v:0};$.create({trigger:e,start:`top 86%`,once:!0,onEnter:()=>fh.to(n,{v:t,duration:1.7,ease:`power3.out`,onUpdate:()=>{e.textContent=String(Math.round(n.v))}})})});let u=fh.timeline({scrollTrigger:{trigger:`#ch4`,start:`top 80%`,end:`bottom 70%`,scrub:.6}});[`g1`,`g2`,`g3`,`g4`,`g5`,`g6`,`g7`].forEach(e=>{let t=document.querySelectorAll(`.bp .${e} [pathLength]`);t.length&&u.fromTo(t,{strokeDashoffset:1},{strokeDashoffset:0,ease:`none`,stagger:{each:.04,from:`start`},duration:.6},`+=0.08`)}),u.to(`.bp text`,{opacity:1,stagger:.05,duration:.3},`-=0.2`);let d=document.getElementById(`nav`);$.create({start:60,end:`max`,onToggle:e=>d?.classList.toggle(`is-solid`,e.isActive)});let f=Array.from(document.querySelectorAll(`[data-scroll]`)),p=t=>{t.preventDefault();let n=t.currentTarget.getAttribute(`href`);n&&e.scrollTo(n,{duration:1.8,easing:e=>1-(1-e)**4})};f.forEach(e=>e.addEventListener(`click`,p));let m=document.getElementById(`modal`),h=m.querySelector(`.modal-card`),g=document.getElementById(`fMail`),_=document.getElementById(`mError`);function v(){m.style.display=`flex`,e.stop(),fh.fromTo(m.querySelector(`.veil`),{opacity:0},{opacity:1,duration:.5}),fh.fromTo(h,{y:46,opacity:0,rotateX:8},{y:0,opacity:1,rotateX:0,duration:.9,ease:`expo.out`})}function y(){fh.to(h,{y:26,opacity:0,duration:.35,ease:`power2.in`}),fh.to(m.querySelector(`.veil`),{opacity:0,duration:.4,onComplete:()=>{m.style.display=`none`,e.start()}})}let b=document.getElementById(`reserveBtn`),x=document.getElementById(`reserveBtn2`),S=document.getElementById(`mClose`),C=m.querySelector(`.veil`),w=document.getElementById(`mForm`);b?.addEventListener(`click`,v),x?.addEventListener(`click`,v),S?.addEventListener(`click`,y),C?.addEventListener(`click`,y);let T=e=>{e.key===`Escape`&&m.style.display===`flex`&&y()};window.addEventListener(`keydown`,T);let E=document.getElementById(`toast`);function D(e){E.textContent=e,fh.killTweensOf(E),fh.fromTo(E,{opacity:0,y:18},{opacity:1,y:0,duration:.6,ease:`power3.out`}),fh.to(E,{opacity:0,y:-12,duration:.5,delay:2.6,ease:`power2.in`})}let O=e=>{if(e.preventDefault(),!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.value.trim())){_.textContent=a,g.classList.remove(`err`),g.offsetWidth,g.classList.add(`err`);return}_.textContent=``,g.classList.remove(`err`),y(),g.value=``;let t=document.getElementById(`fName`);t&&(t.value=``),D(o)};w?.addEventListener(`submit`,O);let{W:k,H:A}=s(),j={x:k/2,y:A/2,tx:k/2,ty:A/2},M=e=>{j.tx=e.clientX,j.ty=e.clientY};window.addEventListener(`mousemove`,M);let N=()=>{j.x+=(j.tx-j.x)*.18,j.y+=(j.ty-j.y)*.18,t.style.transform=`translate(${j.x}px,${j.y}px)`};fh.ticker.add(N);let P=e=>{let n=e.target;t.classList.toggle(`on`,!!n?.closest(`a,button,input,.stage-clip`))};return window.addEventListener(`mouseover`,P),()=>{f.forEach(e=>e.removeEventListener(`click`,p)),b?.removeEventListener(`click`,v),x?.removeEventListener(`click`,v),S?.removeEventListener(`click`,y),C?.removeEventListener(`click`,y),window.removeEventListener(`keydown`,T),w?.removeEventListener(`submit`,O),window.removeEventListener(`mousemove`,M),window.removeEventListener(`mouseover`,P),fh.ticker.remove(N)}}function hy(e,t,n,r){let i=e=>{if(!e)return[];let t=e.textContent||``;e.textContent=``;let n=[];for(let r of t){let t=document.createElement(`span`);t.className=`ch`;let i=document.createElement(`i`);i.textContent=r,t.appendChild(i),e.appendChild(t),n.push(i)}return n},a=[...i(document.querySelector(`.t1`)),...i(document.querySelector(`.t2`))];fh.set(a,{yPercent:118}),fh.set([`.hero-foot`,`.scroll-hint`],{opacity:0,y:20});let o={v:0},s=document.querySelector(`.loader-num`),c=fh.timeline({paused:!0});c.to(`#loader .eye`,{scale:1.14,opacity:0,duration:.7,ease:`power2.in`},0).to(`#loader .loader-num,#loader .loader-latin`,{opacity:0,duration:.4},0).to(`#loader`,{clipPath:`inset(0 0 100% 0)`,duration:1.05,ease:`expo.inOut`},.35).add(()=>document.getElementById(`loader`)?.remove(),1.5).to(e,{...t,duration:2,ease:`expo.out`},.35).to(`.hero .latin`,{opacity:1,y:0,duration:1,ease:`power2.out`},.8).to(a,{yPercent:0,duration:1.3,stagger:.045,ease:`power4.out`},.85).to(`.hero-foot`,{opacity:1,y:0,duration:1,ease:`power2.out`},1.5).to(`.scroll-hint`,{opacity:1,y:0,duration:1},1.8).to(`#nav`,{opacity:1,y:0,duration:.9,ease:`power2.out`},1.7).add(()=>{n.start(),$.refresh()},2.1).add(()=>r(),2.4),fh.to(o,{v:100,duration:1.5,ease:`power2.inOut`,onUpdate:()=>{s&&(s.textContent=String(Math.round(o.v)))},onComplete:()=>c.play()})}function gy(e,t={}){if(e===null)return;let n;if(e.dataset.frameLabels)try{n=JSON.parse(e.dataset.frameLabels)}catch{}let{frameLabels:r=n??{top:`MVNDVS — THE PANTHEON`,ch1:`TABVLA I — THE EYE`,ch2:`TABVLA II — NEURAL RENDERING`,ch3:`TABVLA III — TOUCH & SOUND`,ch4:`TABVLA IV — THE DRAFTING`,ch5:`TABVLA V — THE LAUREL`,ch6:``},invertedFrameLabel:i=e.dataset.invertedFrameLabel??`THE WORLD YOU LEFT`,invalidEmailMessage:a=e.dataset.invalidEmailMessage??`The eagle needs a valid address.`,successToastMessage:o=e.dataset.successToastMessage??`Engraved in the rolls of the Empire · GRATIAS TIBI`}=t;fh.registerPlugin($),$.config({ignoreMobileResize:!0});let s=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,c=window.innerWidth,l=window.innerHeight,u=()=>({W:c,H:l,isMob:c<820});e.querySelectorAll(`#loader .e-rays`).forEach(e=>{for(let t=0;t<14;t++){let n=t/14*Math.PI*2,r=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);r.setAttribute(`x1`,String(60+Math.cos(n)*22)),r.setAttribute(`y1`,String(35+Math.sin(n)*22*.62)),r.setAttribute(`x2`,String(60+Math.cos(n)*30)),r.setAttribute(`y2`,String(35+Math.sin(n)*30*.62)),r.setAttribute(`pathLength`,`1`),e.appendChild(r)}});let d=iy(),f=new $v({duration:1.3,smoothWheel:!s});f.on(`scroll`,()=>{$.update(),d.applyScroll()});let p=e=>f.raf(e*1e3);fh.ticker.add(p),fh.ticker.lagSmoothing(0),f.stop();let m={x:c/2-30,y:l*.54-30,w:60,h:60,r:30},h={alpha:1,inverted:!1},g={ox:0,oy:0,ow:1,oh:1},_=e.querySelector(`#stageClip`),v=e.querySelector(`#frame`),y=v.querySelectorAll(`.corner`),b=e.querySelector(`#frameLabel`),x=e.querySelector(`#cursor`),S=ay(u),C=oy(_,v,y,b,u),w=new tu({canvas:e.querySelector(`#gl`),antialias:!0,alpha:!0});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(c,l),w.toneMapping=4,w.toneMappingExposure=1.12,w.localClippingEnabled=!0;let T=new Bi,E=new Ai(38,c/l,.1,60),D=new Ai(38,1,.1,60),O=new Bi,k=new Ai(46,c/l,.1,200),A=new Ts(w).fromScene(new nu,.04).texture;T.environment=A;let j=dy(T),M=fy(O,A,j.bGoldM),N={camZ:7.8,camY:.25,rx:.07,ry:.35,spinAmp:1,red:.35,lens:.35,dust:1,fogRed:0,aScale:1,asm:0},P={orbA:.55,orbR:26,orbY:13},F={x:0,y:0,tx:0,ty:0},ee=e=>{F.tx=(e.clientX/c-.5)*2,F.ty=(e.clientY/l-.5)*2};window.addEventListener(`mousemove`,ee);let te=`gallery`;function ne(e){e!==te&&(te=e,e===`arena`?(O.add(j.gB),j.gB.position.set(0,3.6,0),j.gB.scale.setScalar(1.5),j.gB.rotation.set(0,0,0),j.clipPlane.constant=20,j.bFillM.opacity=.88,j.bLineM.opacity=.3,j.gB.visible=!0):(j.drag.add(j.gB),j.gB.position.set(0,0,0),j.gB.scale.setScalar(1),j.gB.rotation.set(0,0,0),j.bFillM.opacity=.08,j.bLineM.opacity=.95))}let re={x:0,y:0},ie=!1,I=0,ae=0,L=e=>{e.pointerType===`mouse`&&(ie=!0,I=e.clientX,ae=e.clientY,_.setPointerCapture(e.pointerId),fh.killTweensOf(re),x.classList.add(`drag`))},oe=e=>{ie&&(re.y+=(e.clientX-I)*.006,re.x=ny(re.x+(e.clientY-ae)*.004,-.5,.5),I=e.clientX,ae=e.clientY)},se=()=>{ie&&(ie=!1,x.classList.remove(`drag`),fh.to(re,{x:0,y:0,duration:1.6,ease:`elastic.out(1,.45)`}))};_.addEventListener(`pointerdown`,L),_.addEventListener(`pointermove`,oe),_.addEventListener(`pointerup`,se),_.addEventListener(`pointercancel`,se),py({addSegment:d.addSegment,WS:S,win:m,frameState:h,sceneState:N,arenaState:P,labelEl:b,invertedFrameLabel:i,setWorld:ne});let ce=new Lo,R=0,z=0;function B(){let e=Math.min(ce.getDelta(),.05);z+=e,R+=e*.45*N.spinAmp,F.x+=(F.tx-F.x)*.05,F.y+=(F.ty-F.y)*.05,j.headset.scale.setScalar(Math.max(N.aScale,1e-4)),j.headset.visible=N.aScale>.002,j.rig.rotation.x=N.rx,j.rig.rotation.y=N.ry,j.rig.position.y=Math.sin(z*1.15)*.1*Math.min(1,N.spinAmp+.25),j.spin.rotation.y=R,j.drag.rotation.y=re.y,j.drag.rotation.x=re.x,j.halo1.rotation.z=z*.12,j.halo2.rotation.z=-z*.08,j.halo1.material.opacity=.18+N.lens*.12,j.halo2.material.opacity=.1+N.lens*.07,j.dustA.rotation.y=z*.024*N.dust,j.dustB.rotation.y=-z*.036*N.dust,j.redLight.intensity=N.red,j.matLens.emissiveIntensity=N.lens*(.85+.15*Math.sin(z*2.3)),T.fog instanceof zi&&(T.fog.density=.045+N.fogRed*.02,T.fog.color.setRGB(.05+N.fogRed*.075,.035-N.fogRed*.018,.024-N.fogRed*.014)),j.gB.visible=te===`arena`||N.asm>.002,te!==`arena`&&(j.clipPlane.constant=-2.8+5.9*ry(ny(N.asm*1.12)));for(let e of j.parts){let t=ry(ny((N.asm-e.d)/.5));e.obj.position.lerpVectors(e.sp,e.fp,t),e.obj.rotation.set(ty(e.sr.x,e.fr.x,t),ty(e.sr.y,e.fr.y,t),ty(e.sr.z,e.fr.z,t))}for(let t of M.numerals)t.a+=e*t.v,t.sp.position.set(Math.cos(t.a)*t.r,t.y+Math.sin(z*.6+t.r)*.5,Math.sin(t.a)*t.r);for(let e of M.banners)e.rotation.z=Math.sin(z*.7+e.userData.ph)*.045;M.aRed.intensity=2+Math.sin(z*1.7)*.5,M.arenaDust.rotation.y=z*.012,te===`arena`&&(j.gB.position.y=3.6+Math.sin(z*.9)*.28,j.gB.rotation.y=z*.35);let t=h.inverted?Math.sin(z*.8)*7:0,n=h.inverted?Math.cos(z*.62)*6:0;if(C(m,h.alpha,h.inverted,g,t,n),w.setScissorTest(!1),w.setViewport(0,0,c,l),te===`gallery`)E.position.set(F.x*.45,N.camY-F.y*.3,N.camZ),E.lookAt(0,0,0),E.setViewOffset(c,l,g.ox*c,g.oy*l,g.ow*c,g.oh*l),w.render(T,E);else{let e=P.orbA+z*.02;if(k.position.set(Math.sin(e)*P.orbR,P.orbY+Math.sin(z*.5)*.3,Math.cos(e)*P.orbR),k.lookAt(0,3.2,0),w.render(O,k),h.inverted&&m.w>8){let e=m.x+t,r=m.y+n;w.clearDepth(),w.setScissorTest(!0),w.setScissor(e,l-r-m.h,m.w,m.h),w.setViewport(e,l-r-m.h,m.w,m.h),w.setClearColor(920071,1),w.clear(!0,!0,!1),D.aspect=m.w/m.h,D.updateProjectionMatrix(),D.position.set(F.x*.35,N.camY-F.y*.25,N.camZ),D.lookAt(0,0,0),w.render(T,D),w.setClearColor(0,0),w.setScissorTest(!1)}}}fh.ticker.add(B);let V=my({lenis:f,cursor:x,labelEl:b,frameLabels:r,isInverted:()=>h.inverted,invalidEmailMessage:a,successToastMessage:o,getViewport:()=>({W:c,H:l})});d.rebuildOffsets(l),d.applyScroll(!0),hy(m,S.hero(),f,()=>d.applyScroll(!0)),document.fonts.ready.then(()=>{d.rebuildOffsets(l),$.refresh()});let H=()=>{d.rebuildOffsets(l),d.applyScroll(!0)};$.addEventListener(`refresh`,H);let le,U=()=>{clearTimeout(le),le=setTimeout(()=>{c=window.innerWidth,l=window.innerHeight,w.setSize(c,l),k.aspect=c/l,k.updateProjectionMatrix(),d.rebuildOffsets(l),d.applyScroll(!0),$.refresh()},250)};return window.addEventListener(`resize`,U),()=>{clearTimeout(le),V(),$.removeEventListener(`refresh`,H),_.removeEventListener(`pointerdown`,L),_.removeEventListener(`pointermove`,oe),_.removeEventListener(`pointerup`,se),_.removeEventListener(`pointercancel`,se),window.removeEventListener(`mousemove`,ee),window.removeEventListener(`resize`,U),fh.ticker.remove(p),fh.ticker.remove(B),f.destroy(),w.dispose()}}B(le.name,oe,gy);function _y({brandMain:e=``,brandSub:t=``,brandHref:n=`#top`,solidThresholdPx:r,links:i=[],ctaText:a=``}){return L(`nav`,{"data-component":`epic-nav`,id:`nav`,"data-solid-threshold":r===void 0?void 0:String(r),children:[L(`a`,{className:`brand`,href:n,"data-scroll":!0,children:[L(`svg`,{width:`20`,viewBox:`0 0 48 24`,fill:`none`,children:[L(`path`,{d:`M3 12 C11 3.5 37 3.5 45 12 C37 20.5 11 20.5 3 12 Z`,stroke:`#c9a227`,strokeWidth:`1.4`}),L(`circle`,{cx:`24`,cy:`12`,r:`5`,stroke:`#e6c46a`,strokeWidth:`1.2`}),L(`circle`,{cx:`24`,cy:`12`,r:`1.8`,fill:`#e6c46a`})]}),e,` `,t&&L(`em`,{children:t})]}),L(`div`,{className:`links`,children:[i.map(e=>L(`a`,{"data-scroll":!0,href:e.href,children:e.label},e.href)),a&&L(`button`,{className:`btn`,id:`reserveBtn`,style:{padding:`.7em 1.8em .7em 2.05em`,fontSize:`11px`},children:a})]})]})}var vy={name:`epic-nav`,title:`Epic Top Navigation`,category:`navigation`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,exports:[`EpicNav`,`mount`,`manifest`]};function yy(e,t={}){if(e===null)return;let n=e.dataset.solidThreshold?Number(e.dataset.solidThreshold):void 0,r=t.solidThresholdPx??n??60,i=()=>{e.classList.toggle(`is-solid`,window.scrollY>r)};return i(),window.addEventListener(`scroll`,i,{passive:!0}),()=>{window.removeEventListener(`scroll`,i)}}B(vy.name,_y,yy);function by({id:e=`top`,latinMotto:t=``,titlePrimary:n=``,titleSecondary:r=``,subtitle:i=``,specLine:a=``,scrollHintText:o=``}){return L(`section`,{"data-component":`epic-hero`,className:`hero`,id:e,children:[t&&L(`p`,{className:`latin`,children:t}),L(`h1`,{className:`title`,children:[n&&L(`span`,{className:`t1`,"data-split":!0,children:n}),r&&L(`span`,{className:`t2`,"data-split":!0,children:r})]}),L(`div`,{className:`hero-foot`,children:[L(`svg`,{width:`20`,className:`sep`,viewBox:`0 0 220 10`,children:[L(`line`,{x1:`0`,y1:`5`,x2:`94`,y2:`5`}),L(`path`,{d:`M110 0 L115 5 L110 10 L105 5 Z`}),L(`line`,{x1:`126`,y1:`5`,x2:`220`,y2:`5`})]}),i&&L(`p`,{className:`hero-sub`,children:i}),a&&L(`p`,{className:`hero-spec`,children:a})]}),o&&L(`div`,{className:`scroll-hint`,children:[L(`span`,{className:`hint-line`}),L(`span`,{children:o})]})]})}var xy={name:`epic-hero`,title:`Epic Hero Section`,category:`hero`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,exports:[`EpicHero`,`mount`,`manifest`]};function Sy(e){if(e!==null)return()=>{}}B(xy.name,by,Sy);function Cy({id:e,chapterClass:t,layout:n=`standard`,watermark:r=``,kicker:i=``,heading:a=``,body:o=``,stats:s=[],captionNote:c=``,blueprintLabels:l={},arenaActs:u}){return n===`split-plate`?L(`section`,{"data-component":`epic-narrative`,className:`chapter ${t}`,id:e,children:[r&&L(`span`,{className:`wm`,"data-wm":!0,children:r}),L(`div`,{className:`ch-head`,children:[i&&L(`p`,{className:`kicker`,children:[L(`i`,{className:`k-line`}),i]}),a&&L(`h2`,{"data-split":!0,children:a})]}),L(`div`,{className:`plate`,"data-fade":!0,children:[o&&L(`p`,{className:`body`,children:o}),s.length>0&&L(`div`,{className:`stats`,children:s.map((e,t)=>L(`div`,{className:`stat`,children:[L(`span`,{className:`num`,"data-n":e.value,children:`0`}),L(`span`,{className:`unit`,children:e.unit})]},t))})]})]}):n===`blueprint`?L(`section`,{"data-component":`epic-narrative`,className:`chapter ${t}`,id:e,children:[r&&L(`span`,{className:`wm`,"data-wm":!0,children:r}),L(`div`,{className:`bp-head`,children:[i&&L(`p`,{className:`kicker`,children:[L(`i`,{className:`k-line`}),i]}),a&&L(`h2`,{"data-split":!0,children:a})]}),L(`div`,{className:`sticky`,children:L(`div`,{className:`bp-wrap`,children:L(`svg`,{width:`20`,className:`bp`,viewBox:`0 0 640 470`,children:[L(`defs`,{children:L(`filter`,{id:`wob`,x:`-5%`,y:`-5%`,width:`110%`,height:`110%`,children:[L(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.015`,numOctaves:`2`,seed:`11`,result:`n`}),L(`feDisplacementMap`,{in:`SourceGraphic`,in2:`n`,scale:`2.6`})]})}),L(`g`,{filter:`url(#wob)`,children:[L(`g`,{className:`g1`,children:[L(`rect`,{className:`t`,pathLength:`1`,x:`18`,y:`16`,width:`604`,height:`438`}),L(`rect`,{className:`t`,pathLength:`1`,x:`26`,y:`24`,width:`588`,height:`422`}),L(`rect`,{className:`t`,pathLength:`1`,x:`412`,y:`376`,width:`202`,height:`70`}),L(`line`,{className:`t`,pathLength:`1`,x1:`412`,y1:`400`,x2:`614`,y2:`400`}),L(`line`,{className:`t`,pathLength:`1`,x1:`412`,y1:`424`,x2:`614`,y2:`424`})]}),L(`g`,{className:`g2`,children:[L(`line`,{className:`d`,pathLength:`1`,x1:`40`,y1:`252`,x2:`600`,y2:`252`}),L(`line`,{className:`d`,pathLength:`1`,x1:`225`,y1:`58`,x2:`225`,y2:`412`}),L(`circle`,{className:`d`,pathLength:`1`,cx:`225`,cy:`252`,r:`86`}),L(`circle`,{className:`d`,pathLength:`1`,cx:`225`,cy:`252`,r:`134`})]}),L(`g`,{className:`g3`,children:[L(`path`,{className:`s`,pathLength:`1`,d:`M118,214 C114,178 150,158 210,154 C272,150 316,168 328,196 C340,224 342,276 328,304 C314,330 266,346 210,344 C156,342 122,320 118,286 Z`}),L(`path`,{className:`t`,pathLength:`1`,d:`M172,168 C176,118 286,116 292,164`}),L(`path`,{className:`t`,pathLength:`1`,d:`M312,208 C400,192 416,304 314,322`}),L(`path`,{className:`t`,pathLength:`1`,d:`M306,198 C404,182 424,314 310,334`}),L(`path`,{className:`t`,pathLength:`1`,d:`M138,206 C120,234 120,272 138,298`})]}),L(`g`,{className:`g4`,children:[L(`ellipse`,{className:`s`,pathLength:`1`,cx:`162`,cy:`252`,rx:`26`,ry:`64`}),L(`ellipse`,{className:`d`,pathLength:`1`,cx:`162`,cy:`252`,rx:`13`,ry:`44`}),L(`circle`,{className:`t`,pathLength:`1`,cx:`268`,cy:`252`,r:`18`}),L(`circle`,{className:`t`,pathLength:`1`,cx:`268`,cy:`252`,r:`8`}),L(`circle`,{className:`s`,pathLength:`1`,cx:`520`,cy:`120`,r:`56`}),L(`circle`,{className:`d`,pathLength:`1`,cx:`520`,cy:`120`,r:`20`}),L(`path`,{className:`t`,pathLength:`1`,d:`M482,142 C496,96 546,94 558,142`}),L(`line`,{className:`d`,pathLength:`1`,x1:`186`,y1:`204`,x2:`468`,y2:`108`})]}),L(`g`,{className:`g5`,children:[L(`line`,{className:`t`,pathLength:`1`,x1:`334`,y1:`242`,x2:`343`,y2:`251`}),L(`line`,{className:`t`,pathLength:`1`,x1:`346`,y1:`245`,x2:`355`,y2:`254`}),L(`line`,{className:`t`,pathLength:`1`,x1:`358`,y1:`248`,x2:`367`,y2:`257`}),L(`line`,{className:`t`,pathLength:`1`,x1:`370`,y1:`251`,x2:`379`,y2:`260`}),L(`line`,{className:`t`,pathLength:`1`,x1:`382`,y1:`254`,x2:`391`,y2:`263`}),L(`line`,{className:`t`,pathLength:`1`,x1:`394`,y1:`257`,x2:`403`,y2:`266`}),L(`line`,{className:`t`,pathLength:`1`,x1:`126`,y1:`234`,x2:`136`,y2:`244`}),L(`line`,{className:`t`,pathLength:`1`,x1:`124`,y1:`250`,x2:`134`,y2:`260`}),L(`line`,{className:`t`,pathLength:`1`,x1:`124`,y1:`266`,x2:`134`,y2:`276`}),L(`line`,{className:`t`,pathLength:`1`,x1:`126`,y1:`282`,x2:`136`,y2:`292`})]}),L(`g`,{className:`g6`,children:[L(`line`,{className:`t`,pathLength:`1`,x1:`118`,y1:`104`,x2:`328`,y2:`104`}),L(`line`,{className:`t`,pathLength:`1`,x1:`118`,y1:`98`,x2:`118`,y2:`110`}),L(`line`,{className:`t`,pathLength:`1`,x1:`328`,y1:`98`,x2:`328`,y2:`110`}),L(`line`,{className:`t`,pathLength:`1`,x1:`376`,y1:`154`,x2:`376`,y2:`344`}),L(`line`,{className:`t`,pathLength:`1`,x1:`370`,y1:`154`,x2:`382`,y2:`154`}),L(`line`,{className:`t`,pathLength:`1`,x1:`370`,y1:`344`,x2:`382`,y2:`344`})]}),L(`g`,{className:`g7`,children:[L(`line`,{className:`t`,pathLength:`1`,x1:`150`,y1:`208`,x2:`96`,y2:`152`}),L(`line`,{className:`t`,pathLength:`1`,x1:`150`,y1:`300`,x2:`104`,y2:`392`}),L(`line`,{className:`t`,pathLength:`1`,x1:`126`,y1:`292`,x2:`88`,y2:`352`}),L(`line`,{className:`t`,pathLength:`1`,x1:`392`,y1:`258`,x2:`470`,y2:`352`}),L(`text`,{x:`223`,y:`96`,textAnchor:`middle`,children:l.dimWidth||``}),L(`text`,{transform:`rotate(-90 390 252)`,x:`390`,y:`252`,textAnchor:`middle`,children:l.dimHeight||``}),L(`text`,{x:`38`,y:`140`,children:l.lensSpec||``}),L(`text`,{x:`58`,y:`408`,children:l.part1||``}),L(`text`,{x:`34`,y:`370`,children:l.part2||``}),L(`text`,{x:`476`,y:`368`,children:l.part3||``}),L(`text`,{x:`520`,y:`198`,textAnchor:`middle`,children:l.detailLabel||``}),L(`text`,{x:`424`,y:`392`,children:l.titleBlock1||``}),L(`text`,{x:`424`,y:`416`,children:l.titleBlock2||``}),L(`text`,{x:`424`,y:`438`,children:l.titleBlock3||``}),L(`text`,{className:`cap`,x:`40`,y:`446`,children:l.figCaption||``})]})]})]})})}),c&&L(`p`,{className:`bp-cap`,children:c})]}):n===`arena-dual`&&u?L(`section`,{"data-component":`epic-narrative`,className:`chapter ${t}`,id:e,children:[r&&L(`span`,{className:`wm`,"data-wm":!0,children:r}),L(`div`,{className:`sticky`,children:[L(`div`,{id:`t1zone`,children:[L(`p`,{className:`mom-sub`,children:u[0].sub}),L(`h2`,{className:`mom-big`,children:u[0].title}),L(`p`,{className:`mom-s2`,children:u[0].footer})]}),L(`div`,{id:`t2zone`,style:{display:`none`},children:[L(`p`,{className:`mom-sub`,children:u[1].sub}),L(`h2`,{className:`mom-big`,children:u[1].title}),L(`p`,{className:`mom-s2`,children:u[1].footer})]})]})]}):L(`section`,{"data-component":`epic-narrative`,className:`chapter ${t}`,id:e,children:[r&&L(`span`,{className:`wm`,"data-wm":!0,children:r}),L(`div`,{className:`ch-copy`,children:[i&&L(`p`,{className:`kicker`,children:[L(`i`,{className:`k-line`}),i]}),a&&L(`h2`,{"data-split":!0,children:a}),o&&L(`p`,{className:`body`,"data-fade":!0,children:o}),s.length>0&&L(`div`,{className:`stats`,"data-fade":!0,children:s.map((e,t)=>L(`div`,{className:`stat`,children:[L(`span`,{className:`num`,"data-n":e.value,children:`0`}),L(`span`,{className:`unit`,children:e.unit})]},t))})]}),c&&L(`p`,{className:`ch-note`,children:c})]})}var wy={name:`epic-narrative`,title:`Epic Narrative Chapter`,category:`content-section`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,exports:[`EpicNarrative`,`mount`,`manifest`]};function Ty(e){if(e!==null)return()=>{}}B(wy.name,Cy,Ty);function Ey({id:e=`ch8`,specsId:t=`specs`,finisTitle:n=``,finisSubtitle:r=``,frescoImageUrl:i=``,kicker:a=``,heading:o=``,price:s=``,priceNote:c=``,primaryCtaText:l=``,secondaryCtaText:u=``,secondaryCtaHref:d=`#specs`,specs:f=[],approvalNote:p=``,footerLatin:m=``,footerTagline:h=``,footerCopyright:g=``}){return L(`section`,{"data-component":`epic-finale`,className:`chapter ch8`,id:e,children:[L(`div`,{className:`finis-zone`,children:L(`div`,{className:`sticky`,children:[n&&L(`h2`,{className:`finis-big`,id:`finisBig`,children:n}),r&&L(`p`,{className:`finis-sub`,id:`finisSub`,children:r})]})}),L(`div`,{className:`fin-content`,children:[L(`div`,{className:`finale-fresco`,style:i?{backgroundImage:`url('${i}')`}:void 0}),L(`div`,{className:`inner`,children:[a&&L(`p`,{className:`kicker`,children:[L(`i`,{className:`k-line`}),a]}),o&&L(`h2`,{"data-split":!0,children:o}),(s||c)&&L(`div`,{className:`price-row`,"data-fade":!0,children:[s&&L(`span`,{className:`price`,children:s}),c&&L(`span`,{className:`price-note`,children:c})]}),(l||u)&&L(`div`,{className:`cta-row`,"data-fade":!0,children:[l&&L(`button`,{className:`btn`,id:`reserveBtn2`,children:l}),u&&L(`a`,{className:`btn ghost`,"data-scroll":!0,href:d,children:u})]}),f.length>0&&L(`div`,{className:`specs`,id:t,"data-fade":!0,children:f.map((e,t)=>L(`div`,{className:`spec`,children:[L(`span`,{className:`s-k`,children:e.key}),L(`span`,{className:`s-v`,children:e.value})]},t))}),p&&L(`p`,{className:`docs-cap`,children:p}),L(`footer`,{children:[m&&L(`p`,{className:`f-lat`,children:m}),h&&L(`p`,{className:`f-cn`,children:h}),g&&L(`p`,{className:`f-tiny`,children:g})]})]})]})]})}var Dy={name:`epic-finale`,title:`Epic Finale & Specifications`,category:`closing-section`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,exports:[`EpicFinale`,`mount`,`manifest`]};function Oy(e){if(e!==null)return()=>{}}B(Dy.name,Ey,Oy);function ky({latinHeader:e=``,heading:t=``,description:n=``,nameLabel:r=``,namePlaceholder:i=``,emailLabel:a=``,emailPlaceholder:o=``,submitText:s=``}){return L(`div`,{"data-component":`epic-modal`,className:`epic-modal-root`,children:[L(`div`,{id:`modal`,role:`dialog`,"aria-modal":`true`,children:[L(`div`,{className:`veil`}),L(`div`,{className:`modal-card`,children:[L(`button`,{className:`m-close`,id:`mClose`,"aria-label":`close`,children:`✕`}),e&&L(`p`,{className:`m-lat`,children:e}),t&&L(`h3`,{children:t}),n&&L(`p`,{className:`m-body`,children:n}),L(`form`,{id:`mForm`,noValidate:!0,children:[r&&L(`label`,{htmlFor:`fName`,children:r}),L(`input`,{id:`fName`,type:`text`,placeholder:i,autoComplete:`name`}),a&&L(`label`,{htmlFor:`fMail`,children:a}),L(`input`,{id:`fMail`,type:`email`,placeholder:o,autoComplete:`email`}),L(`p`,{className:`m-error`,id:`mError`}),s&&L(`button`,{className:`btn`,type:`submit`,style:{width:`100%`},children:s})]})]})]}),L(`div`,{id:`toast`})]})}var Ay={name:`epic-modal`,title:`Epic Reservation Modal & Toast`,category:`overlay`,entry:`./index.ts`,template:`./template.tsx`,style:`./style.css`,controller:`./controller.ts`,exports:[`EpicModal`,`mount`,`manifest`]};function jy(e){if(e!==null)return()=>{}}B(Ay.name,ky,jy);var My=`modulepreload`,Ny=function(e,t){return new URL(e,t).href},Py={},Fy=function(e){return e.pathname.endsWith(`.css`)},Iy=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i};(function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ny(t,n);let r=s(t),i=Fy(r);return Iy(Py,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:My,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})})(()=>import(`./chunks/_virtual_auto-entry.js`),[],import.meta.url);export{se as n,H as t};