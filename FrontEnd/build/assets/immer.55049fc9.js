function O(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function A(e){return!!e&&!!e[d]}function D(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===be}(e)||Array.isArray(e)||!!e[N]||!!(!((t=e.constructor)===null||t===void 0)&&t[N])||$(e)||C(e))}function Pe(e){return A(e)||O(23,e),e[d].t}function _(e,t,n){n===void 0&&(n=!1),k(e)===0?(n?Object.keys:x)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function k(e){var t=e[d];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:$(e)?2:C(e)?3:0}function R(e,t){return k(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return k(e)===2?e.get(t):e[t]}function ce(e,t,n){var r=k(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function fe(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function $(e){return de&&e instanceof Map}function C(e){return ge&&e instanceof Set}function E(e){return e.o||e.t}function Q(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=se(e);delete t[d];for(var n=x(t),r=0;r<n.length;r++){var o=n[r],u=t[o];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Z(e,t){return t===void 0&&(t=!1),V(e)||A(e)||!D(e)||(k(e)>1&&(e.set=e.add=e.clear=e.delete=ve),Object.freeze(e),t&&_(e,function(n,r){return Z(r,!0)},!0)),e}function ve(){O(2)}function V(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function j(e){var t=L[e];return t||O(18,e),t}function le(e,t){L[e]||(L[e]=t)}function B(){return F}function J(e,t){t&&(j("Patches"),e.u=[],e.s=[],e.v=t)}function K(e){G(e),e.p.forEach(he),e.p=null}function G(e){e===F&&(F=e.l)}function re(e){return F={p:[],l:F,h:e,m:!0,_:0}}function he(e){var t=e[d];t.i===0||t.i===1?t.j():t.g=!0}function T(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||j("ES5").S(t,e,r),r?(n[d].P&&(K(t),O(4)),D(e)&&(e=W(t,e),t.l||U(t,e)),t.u&&j("Patches").M(n[d].t,e,t.u,t.s)):e=W(t,n,[]),K(t),t.u&&t.v(t.u,t.s),e!==ee?e:void 0}function W(e,t,n){if(V(t))return t;var r=t[d];if(!r)return _(t,function(a,c){return ne(e,r,t,a,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return U(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Q(r.k):r.o,u=o,i=!1;r.i===3&&(u=new Set(o),o.clear(),i=!0),_(u,function(a,c){return ne(e,r,o,a,c,n,i)}),U(e,o,!1),n&&e.u&&j("Patches").N(r,n,e.u,e.s)}return r.o}function ne(e,t,n,r,o,u,i){if(A(o)){var a=W(e,o,u&&t&&t.i!==3&&!R(t.R,r)?u.concat(r):void 0);if(ce(n,r,a),!A(a))return;e.m=!1}else i&&n.add(o);if(D(o)&&!V(o)){if(!e.h.D&&e._<1)return;W(e,o),t&&t.A.l||U(e,o)}}function U(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Z(t,n)}function X(e,t){var n=e[d];return(n?E(n):e)[t]}function oe(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function S(e){e.P||(e.P=!0,e.l&&S(e.l))}function q(e){e.o||(e.o=Q(e.t))}function H(e,t,n){var r=$(t)?j("MapSet").F(t,n):C(t)?j("MapSet").T(t,n):e.O?function(o,u){var i=Array.isArray(o),a={i:i?1:0,A:u?u.A:B(),P:!1,I:!1,R:{},l:u,t:o,k:null,o:null,j:null,C:!1},c=a,p=I;i&&(c=[a],p=M);var s=Proxy.revocable(c,p),l=s.revoke,v=s.proxy;return a.k=v,a.j=l,v}(t,n):j("ES5").J(t,n);return(n?n.A:B()).p.push(r),r}function ye(e){return A(e)||O(22,e),function t(n){if(!D(n))return n;var r,o=n[d],u=k(n);if(o){if(!o.P&&(o.i<4||!j("ES5").K(o)))return o.t;o.I=!0,r=ue(n,u),o.I=!1}else r=ue(n,u);return _(r,function(i,a){o&&z(o.t,i)===a||ce(r,i,t(a))}),u===3?new Set(r):r}(e)}function ue(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Q(e)}function Oe(){function e(u,i){var a=o[u];return a?a.enumerable=i:o[u]=a={configurable:!0,enumerable:i,get:function(){var c=this[d];return I.get(c,u)},set:function(c){var p=this[d];I.set(p,u,c)}},a}function t(u){for(var i=u.length-1;i>=0;i--){var a=u[i][d];if(!a.P)switch(a.i){case 5:r(a)&&S(a);break;case 4:n(a)&&S(a)}}}function n(u){for(var i=u.t,a=u.k,c=x(a),p=c.length-1;p>=0;p--){var s=c[p];if(s!==d){var l=i[s];if(l===void 0&&!R(i,s))return!0;var v=a[s],f=v&&v[d];if(f?f.t!==l:!fe(v,l))return!0}}var h=!!i[d];return c.length!==x(i).length+(h?0:1)}function r(u){var i=u.k;if(i.length!==u.t.length)return!0;var a=Object.getOwnPropertyDescriptor(i,i.length-1);if(a&&!a.get)return!0;for(var c=0;c<i.length;c++)if(!i.hasOwnProperty(c))return!0;return!1}var o={};le("ES5",{J:function(u,i){var a=Array.isArray(u),c=function(s,l){if(s){for(var v=Array(l.length),f=0;f<l.length;f++)Object.defineProperty(v,""+f,e(f,!0));return v}var h=se(l);delete h[d];for(var y=x(h),g=0;g<y.length;g++){var m=y[g];h[m]=e(m,s||!!h[m].enumerable)}return Object.create(Object.getPrototypeOf(l),h)}(a,u),p={i:a?5:4,A:i?i.A:B(),P:!1,I:!1,R:{},l:i,t:u,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,d,{value:p,writable:!0}),c},S:function(u,i,a){a?A(i)&&i[d].A===u&&t(u.p):(u.u&&function c(p){if(p&&typeof p=="object"){var s=p[d];if(s){var l=s.t,v=s.k,f=s.R,h=s.i;if(h===4)_(v,function(P){P!==d&&(l[P]!==void 0||R(l,P)?f[P]||c(v[P]):(f[P]=!0,S(s)))}),_(l,function(P){v[P]!==void 0||R(v,P)||(f[P]=!1,S(s))});else if(h===5){if(r(s)&&(S(s),f.length=!0),v.length<l.length)for(var y=v.length;y<l.length;y++)f[y]=!1;else for(var g=l.length;g<v.length;g++)f[g]=!0;for(var m=Math.min(v.length,l.length),b=0;b<m;b++)v.hasOwnProperty(b)||(f[b]=!0),f[b]===void 0&&c(v[b])}}}}(u.p[0]),t(u.p))},K:function(u){return u.i===4?n(u):r(u)}})}function we(){function e(r){if(!D(r))return r;if(Array.isArray(r))return r.map(e);if($(r))return new Map(Array.from(r.entries()).map(function(i){return[i[0],e(i[1])]}));if(C(r))return new Set(Array.from(r).map(e));var o=Object.create(Object.getPrototypeOf(r));for(var u in r)o[u]=e(r[u]);return R(r,N)&&(o[N]=r[N]),o}function t(r){return A(r)?e(r):r}var n="add";le("Patches",{$:function(r,o){return o.forEach(function(u){for(var i=u.path,a=u.op,c=r,p=0;p<i.length-1;p++){var s=k(c),l=i[p];typeof l!="string"&&typeof l!="number"&&(l=""+l),s!==0&&s!==1||l!=="__proto__"&&l!=="constructor"||O(24),typeof c=="function"&&l==="prototype"&&O(24),typeof(c=z(c,l))!="object"&&O(15,i.join("/"))}var v=k(c),f=e(u.value),h=i[i.length-1];switch(a){case"replace":switch(v){case 2:return c.set(h,f);case 3:O(16);default:return c[h]=f}case n:switch(v){case 1:return h==="-"?c.push(f):c.splice(h,0,f);case 2:return c.set(h,f);case 3:return c.add(f);default:return c[h]=f}case"remove":switch(v){case 1:return c.splice(h,1);case 2:return c.delete(h);case 3:return c.delete(u.value);default:return delete c[h]}default:O(17,a)}}),r},N:function(r,o,u,i){switch(r.i){case 0:case 4:case 2:return function(a,c,p,s){var l=a.t,v=a.o;_(a.R,function(f,h){var y=z(l,f),g=z(v,f),m=h?R(l,f)?"replace":n:"remove";if(y!==g||m!=="replace"){var b=c.concat(f);p.push(m==="remove"?{op:m,path:b}:{op:m,path:b,value:g}),s.push(m===n?{op:"remove",path:b}:m==="remove"?{op:n,path:b,value:t(y)}:{op:"replace",path:b,value:t(y)})}})}(r,o,u,i);case 5:case 1:return function(a,c,p,s){var l=a.t,v=a.R,f=a.o;if(f.length<l.length){var h=[f,l];l=h[0],f=h[1];var y=[s,p];p=y[0],s=y[1]}for(var g=0;g<l.length;g++)if(v[g]&&f[g]!==l[g]){var m=c.concat([g]);p.push({op:"replace",path:m,value:t(f[g])}),s.push({op:"replace",path:m,value:t(l[g])})}for(var b=l.length;b<f.length;b++){var P=c.concat([b]);p.push({op:n,path:P,value:t(f[b])})}l.length<f.length&&s.push({op:"replace",path:c.concat(["length"]),value:l.length})}(r,o,u,i);case 3:return function(a,c,p,s){var l=a.t,v=a.o,f=0;l.forEach(function(h){if(!v.has(h)){var y=c.concat([f]);p.push({op:"remove",path:y,value:h}),s.unshift({op:n,path:y,value:h})}f++}),f=0,v.forEach(function(h){if(!l.has(h)){var y=c.concat([f]);p.push({op:n,path:y,value:h}),s.unshift({op:"remove",path:y,value:h})}f++})}(r,o,u,i)}},M:function(r,o,u,i){u.push({op:"replace",path:[],value:o===ee?void 0:o}),i.push({op:"replace",path:[],value:r})}})}var ie,F,Y=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",de=typeof Map!="undefined",ge=typeof Set!="undefined",ae=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",ee=Y?Symbol.for("immer-nothing"):((ie={})["immer-nothing"]=!0,ie),N=Y?Symbol.for("immer-draftable"):"__$immer_draftable",d=Y?Symbol.for("immer-state"):"__$immer_state",be=""+Object.prototype.constructor,x=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,se=Object.getOwnPropertyDescriptors||function(e){var t={};return x(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},L={},I={get:function(e,t){if(t===d)return e;var n=E(e);if(!R(n,t))return function(o,u,i){var a,c=oe(u,i);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!D(r)?r:r===X(e.t,t)?(q(e),e.o[t]=H(e.A.h,r,e)):r},has:function(e,t){return t in E(e)},ownKeys:function(e){return Reflect.ownKeys(E(e))},set:function(e,t,n){var r=oe(E(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=X(E(e),t),u=o==null?void 0:o[d];if(u&&u.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(fe(n,o)&&(n!==void 0||R(e.t,t)))return!0;q(e),S(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return X(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,q(e),S(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=E(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){O(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){O(12)}},M={};_(I,function(e,t){M[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),M.deleteProperty=function(e,t){return M.set.call(this,e,t,void 0)},M.set=function(e,t,n){return I.set.call(this,e[0],t,n,e[0])};var me=function(){function e(n){var r=this;this.O=ae,this.D=!0,this.produce=function(o,u,i){if(typeof o=="function"&&typeof u!="function"){var a=u;u=o;var c=r;return function(y){var g=this;y===void 0&&(y=a);for(var m=arguments.length,b=Array(m>1?m-1:0),P=1;P<m;P++)b[P-1]=arguments[P];return c.produce(y,function(pe){var te;return(te=u).call.apply(te,[g,pe].concat(b))})}}var p;if(typeof u!="function"&&O(6),i!==void 0&&typeof i!="function"&&O(7),D(o)){var s=re(r),l=H(r,o,void 0),v=!0;try{p=u(l),v=!1}finally{v?K(s):G(s)}return typeof Promise!="undefined"&&p instanceof Promise?p.then(function(y){return J(s,i),T(y,s)},function(y){throw K(s),y}):(J(s,i),T(p,s))}if(!o||typeof o!="object"){if((p=u(o))===void 0&&(p=o),p===ee&&(p=void 0),r.D&&Z(p,!0),i){var f=[],h=[];j("Patches").M(o,p,f,h),i(f,h)}return p}O(21,o)},this.produceWithPatches=function(o,u){if(typeof o=="function")return function(p){for(var s=arguments.length,l=Array(s>1?s-1:0),v=1;v<s;v++)l[v-1]=arguments[v];return r.produceWithPatches(p,function(f){return o.apply(void 0,[f].concat(l))})};var i,a,c=r.produce(o,u,function(p,s){i=p,a=s});return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(p){return[p,i,a]}):[c,i,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){D(n)||O(8),A(n)&&(n=ye(n));var r=re(this),o=H(this,n,void 0);return o[d].C=!0,G(r),o},t.finishDraft=function(n,r){var o=n&&n[d],u=o.A;return J(u,r),T(void 0,u)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ae&&O(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var u=r[o];if(u.path.length===0&&u.op==="replace"){n=u.value;break}}o>-1&&(r=r.slice(o+1));var i=j("Patches").$;return A(n)?i(n,r):this.produce(n,function(a){return i(a,r)})},e}(),w=new me,je=w.produce,Ae=w.produceWithPatches.bind(w);w.setAutoFreeze.bind(w);w.setUseProxies.bind(w);var Se=w.applyPatches.bind(w);w.createDraft.bind(w);w.finishDraft.bind(w);export{Oe as F,we as T,Ae as c,Pe as e,je as f,Se as p,A as r,D as t};