webpackJsonp([32,50],{385:function(e,t,n){var r,i;(function(){function o(e){function t(t,n,r,i,o,a){for(;o>=0&&a>o;o+=e){var s=i?i[o]:o;r=n(r,t[s],s,t)}return r}return function(n,r,i,o){r=k(r,o,4);var a=!D(n)&&E.keys(n),s=(a||n).length,u=e>0?0:s-1;return arguments.length<3&&(i=n[a?a[u]:u],u+=e),t(n,r,i,a,u,s)}}function a(e){return function(t,n,r){n=C(n,r);for(var i=j(t),o=e>0?0:i-1;o>=0&&i>o;o+=e)if(n(t[o],o,t))return o;return-1}}function s(e,t,n){return function(r,i,o){var a=0,s=j(r);if("number"==typeof o)e>0?a=o>=0?o:Math.max(o+s,a):s=o>=0?Math.min(o+1,s):o+s+1;else if(n&&o&&s)return o=n(r,i),r[o]===i?o:-1;if(i!==i)return o=t(v.call(r,a,s),E.isNaN),o>=0?o+a:-1;for(o=e>0?a:s-1;o>=0&&s>o;o+=e)if(r[o]===i)return o;return-1}}function u(e,t){var n=F.length,r=e.constructor,i=E.isFunction(r)&&r.prototype||d,o="constructor";for(E.has(e,o)&&!E.contains(t,o)&&t.push(o);n--;)(o=F[n])in e&&e[o]!==i[o]&&!E.contains(t,o)&&t.push(o)}var l=this,c=l._,f=Array.prototype,d=Object.prototype,h=Function.prototype,p=f.push,v=f.slice,g=d.toString,m=d.hasOwnProperty,y=Array.isArray,b=Object.keys,x=h.bind,w=Object.create,T=function(){},E=function(e){return e instanceof E?e:this instanceof E?void(this._wrapped=e):new E(e)};void 0!==e&&e.exports&&(t=e.exports=E),t._=E,E.VERSION="1.8.3";var k=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}},C=function(e,t,n){return null==e?E.identity:E.isFunction(e)?k(e,t,n):E.isObject(e)?E.matcher(e):E.property(e)};E.iteratee=function(e,t){return C(e,t,1/0)};var N=function(e,t){return function(n){var r=arguments.length;if(2>r||null==n)return n;for(var i=1;r>i;i++)for(var o=arguments[i],a=e(o),s=a.length,u=0;s>u;u++){var l=a[u];t&&void 0!==n[l]||(n[l]=o[l])}return n}},_=function(e){if(!E.isObject(e))return{};if(w)return w(e);T.prototype=e;var t=new T;return T.prototype=null,t},S=function(e){return function(t){return null==t?void 0:t[e]}},A=Math.pow(2,53)-1,j=S("length"),D=function(e){var t=j(e);return"number"==typeof t&&t>=0&&A>=t};E.each=E.forEach=function(e,t,n){t=k(t,n);var r,i;if(D(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e);else{var o=E.keys(e);for(r=0,i=o.length;i>r;r++)t(e[o[r]],o[r],e)}return e},E.map=E.collect=function(e,t,n){t=C(t,n);for(var r=!D(e)&&E.keys(e),i=(r||e).length,o=Array(i),a=0;i>a;a++){var s=r?r[a]:a;o[a]=t(e[s],s,e)}return o},E.reduce=E.foldl=E.inject=o(1),E.reduceRight=E.foldr=o(-1),E.find=E.detect=function(e,t,n){var r;return r=D(e)?E.findIndex(e,t,n):E.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},E.filter=E.select=function(e,t,n){var r=[];return t=C(t,n),E.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},E.reject=function(e,t,n){return E.filter(e,E.negate(C(t)),n)},E.every=E.all=function(e,t,n){t=C(t,n);for(var r=!D(e)&&E.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(!t(e[a],a,e))return!1}return!0},E.some=E.any=function(e,t,n){t=C(t,n);for(var r=!D(e)&&E.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(t(e[a],a,e))return!0}return!1},E.contains=E.includes=E.include=function(e,t,n,r){return D(e)||(e=E.values(e)),("number"!=typeof n||r)&&(n=0),E.indexOf(e,t,n)>=0},E.invoke=function(e,t){var n=v.call(arguments,2),r=E.isFunction(t);return E.map(e,function(e){var i=r?t:e[t];return null==i?i:i.apply(e,n)})},E.pluck=function(e,t){return E.map(e,E.property(t))},E.where=function(e,t){return E.filter(e,E.matcher(t))},E.findWhere=function(e,t){return E.find(e,E.matcher(t))},E.max=function(e,t,n){var r,i,o=-1/0,a=-1/0;if(null==t&&null!=e){e=D(e)?e:E.values(e);for(var s=0,u=e.length;u>s;s++)(r=e[s])>o&&(o=r)}else t=C(t,n),E.each(e,function(e,n,r){((i=t(e,n,r))>a||i===-1/0&&o===-1/0)&&(o=e,a=i)});return o},E.min=function(e,t,n){var r,i,o=1/0,a=1/0;if(null==t&&null!=e){e=D(e)?e:E.values(e);for(var s=0,u=e.length;u>s;s++)r=e[s],o>r&&(o=r)}else t=C(t,n),E.each(e,function(e,n,r){i=t(e,n,r),(a>i||1/0===i&&1/0===o)&&(o=e,a=i)});return o},E.shuffle=function(e){for(var t,n=D(e)?e:E.values(e),r=n.length,i=Array(r),o=0;r>o;o++)t=E.random(0,o),t!==o&&(i[o]=i[t]),i[t]=n[o];return i},E.sample=function(e,t,n){return null==t||n?(D(e)||(e=E.values(e)),e[E.random(e.length-1)]):E.shuffle(e).slice(0,Math.max(0,t))},E.sortBy=function(e,t,n){return t=C(t,n),E.pluck(E.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var H=function(e){return function(t,n,r){var i={};return n=C(n,r),E.each(t,function(r,o){var a=n(r,o,t);e(i,r,a)}),i}};E.groupBy=H(function(e,t,n){E.has(e,n)?e[n].push(t):e[n]=[t]}),E.indexBy=H(function(e,t,n){e[n]=t}),E.countBy=H(function(e,t,n){E.has(e,n)?e[n]++:e[n]=1}),E.toArray=function(e){return e?E.isArray(e)?v.call(e):D(e)?E.map(e,E.identity):E.values(e):[]},E.size=function(e){return null==e?0:D(e)?e.length:E.keys(e).length},E.partition=function(e,t,n){t=C(t,n);var r=[],i=[];return E.each(e,function(e,n,o){(t(e,n,o)?r:i).push(e)}),[r,i]},E.first=E.head=E.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:E.initial(e,e.length-t)},E.initial=function(e,t,n){return v.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},E.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:E.rest(e,Math.max(0,e.length-t))},E.rest=E.tail=E.drop=function(e,t,n){return v.call(e,null==t||n?1:t)},E.compact=function(e){return E.filter(e,E.identity)};var L=function(e,t,n,r){for(var i=[],o=0,a=r||0,s=j(e);s>a;a++){var u=e[a];if(D(u)&&(E.isArray(u)||E.isArguments(u))){t||(u=L(u,t,n));var l=0,c=u.length;for(i.length+=c;c>l;)i[o++]=u[l++]}else n||(i[o++]=u)}return i};E.flatten=function(e,t){return L(e,t,!1)},E.without=function(e){return E.difference(e,v.call(arguments,1))},E.uniq=E.unique=function(e,t,n,r){E.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=C(n,r));for(var i=[],o=[],a=0,s=j(e);s>a;a++){var u=e[a],l=n?n(u,a,e):u;t?(a&&o===l||i.push(u),o=l):n?E.contains(o,l)||(o.push(l),i.push(u)):E.contains(i,u)||i.push(u)}return i},E.union=function(){return E.uniq(L(arguments,!0,!0))},E.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=j(e);i>r;r++){var o=e[r];if(!E.contains(t,o)){for(var a=1;n>a&&E.contains(arguments[a],o);a++);a===n&&t.push(o)}}return t},E.difference=function(e){var t=L(arguments,!0,!0,1);return E.filter(e,function(e){return!E.contains(t,e)})},E.zip=function(){return E.unzip(arguments)},E.unzip=function(e){for(var t=e&&E.max(e,j).length||0,n=Array(t),r=0;t>r;r++)n[r]=E.pluck(e,r);return n},E.object=function(e,t){for(var n={},r=0,i=j(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},E.findIndex=a(1),E.findLastIndex=a(-1),E.sortedIndex=function(e,t,n,r){n=C(n,r,1);for(var i=n(t),o=0,a=j(e);a>o;){var s=Math.floor((o+a)/2);n(e[s])<i?o=s+1:a=s}return o},E.indexOf=s(1,E.findIndex,E.sortedIndex),E.lastIndexOf=s(-1,E.findLastIndex),E.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;r>o;o++,e+=n)i[o]=e;return i};var O=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var o=_(e.prototype),a=e.apply(o,i);return E.isObject(a)?a:o};E.bind=function(e,t){if(x&&e.bind===x)return x.apply(e,v.call(arguments,1));if(!E.isFunction(e))throw new TypeError("Bind must be called on a function");var n=v.call(arguments,2),r=function(){return O(e,r,t,this,n.concat(v.call(arguments)))};return r},E.partial=function(e){var t=v.call(arguments,1),n=function(){for(var r=0,i=t.length,o=Array(i),a=0;i>a;a++)o[a]=t[a]===E?arguments[r++]:t[a];for(;r<arguments.length;)o.push(arguments[r++]);return O(e,n,this,this,o)};return n},E.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=E.bind(e[n],e);return e},E.memoize=function(e,t){var n=function(r){var i=n.cache,o=""+(t?t.apply(this,arguments):r);return E.has(i,o)||(i[o]=e.apply(this,arguments)),i[o]};return n.cache={},n},E.delay=function(e,t){var n=v.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},E.defer=E.partial(E.delay,E,1),E.throttle=function(e,t,n){var r,i,o,a=null,s=0;n||(n={});var u=function(){s=!1===n.leading?0:E.now(),a=null,o=e.apply(r,i),a||(r=i=null)};return function(){var l=E.now();s||!1!==n.leading||(s=l);var c=t-(l-s);return r=this,i=arguments,0>=c||c>t?(a&&(clearTimeout(a),a=null),s=l,o=e.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(u,c)),o}},E.debounce=function(e,t,n){var r,i,o,a,s,u=function(){var l=E.now()-a;t>l&&l>=0?r=setTimeout(u,t-l):(r=null,n||(s=e.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=E.now();var l=n&&!r;return r||(r=setTimeout(u,t)),l&&(s=e.apply(o,i),o=i=null),s}},E.wrap=function(e,t){return E.partial(t,e)},E.negate=function(e){return function(){return!e.apply(this,arguments)}},E.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},E.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},E.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},E.once=E.partial(E.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];E.keys=function(e){if(!E.isObject(e))return[];if(b)return b(e);var t=[];for(var n in e)E.has(e,n)&&t.push(n);return M&&u(e,t),t},E.allKeys=function(e){if(!E.isObject(e))return[];var t=[];for(var n in e)t.push(n);return M&&u(e,t),t},E.values=function(e){for(var t=E.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},E.mapObject=function(e,t,n){t=C(t,n);for(var r,i=E.keys(e),o=i.length,a={},s=0;o>s;s++)r=i[s],a[r]=t(e[r],r,e);return a},E.pairs=function(e){for(var t=E.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},E.invert=function(e){for(var t={},n=E.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},E.functions=E.methods=function(e){var t=[];for(var n in e)E.isFunction(e[n])&&t.push(n);return t.sort()},E.extend=N(E.allKeys),E.extendOwn=E.assign=N(E.keys),E.findKey=function(e,t,n){t=C(t,n);for(var r,i=E.keys(e),o=0,a=i.length;a>o;o++)if(r=i[o],t(e[r],r,e))return r},E.pick=function(e,t,n){var r,i,o={},a=e;if(null==a)return o;E.isFunction(t)?(i=E.allKeys(a),r=k(t,n)):(i=L(arguments,!1,!1,1),r=function(e,t,n){return t in n},a=Object(a));for(var s=0,u=i.length;u>s;s++){var l=i[s],c=a[l];r(c,l,a)&&(o[l]=c)}return o},E.omit=function(e,t,n){if(E.isFunction(t))t=E.negate(t);else{var r=E.map(L(arguments,!1,!1,1),String);t=function(e,t){return!E.contains(r,t)}}return E.pick(e,t,n)},E.defaults=N(E.allKeys,!0),E.create=function(e,t){var n=_(e);return t&&E.extendOwn(n,t),n},E.clone=function(e){return E.isObject(e)?E.isArray(e)?e.slice():E.extend({},e):e},E.tap=function(e,t){return t(e),e},E.isMatch=function(e,t){var n=E.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),o=0;r>o;o++){var a=n[o];if(t[a]!==i[a]||!(a in i))return!1}return!0};var q=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof E&&(e=e._wrapped),t instanceof E&&(t=t._wrapped);var i=g.call(e);if(i!==g.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}var o="[object Array]"===i;if(!o){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,s=t.constructor;if(a!==s&&!(E.isFunction(a)&&a instanceof a&&E.isFunction(s)&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===e)return r[u]===t;if(n.push(e),r.push(t),o){if((u=e.length)!==t.length)return!1;for(;u--;)if(!q(e[u],t[u],n,r))return!1}else{var l,c=E.keys(e);if(u=c.length,E.keys(t).length!==u)return!1;for(;u--;)if(l=c[u],!E.has(t,l)||!q(e[l],t[l],n,r))return!1}return n.pop(),r.pop(),!0};E.isEqual=function(e,t){return q(e,t)},E.isEmpty=function(e){return null==e||(D(e)&&(E.isArray(e)||E.isString(e)||E.isArguments(e))?0===e.length:0===E.keys(e).length)},E.isElement=function(e){return!(!e||1!==e.nodeType)},E.isArray=y||function(e){return"[object Array]"===g.call(e)},E.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},E.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){E["is"+e]=function(t){return g.call(t)==="[object "+e+"]"}}),E.isArguments(arguments)||(E.isArguments=function(e){return E.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(E.isFunction=function(e){return"function"==typeof e||!1}),E.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},E.isNaN=function(e){return E.isNumber(e)&&e!==+e},E.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===g.call(e)},E.isNull=function(e){return null===e},E.isUndefined=function(e){return void 0===e},E.has=function(e,t){return null!=e&&m.call(e,t)},E.noConflict=function(){return l._=c,this},E.identity=function(e){return e},E.constant=function(e){return function(){return e}},E.noop=function(){},E.property=S,E.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},E.matcher=E.matches=function(e){return e=E.extendOwn({},e),function(t){return E.isMatch(t,e)}},E.times=function(e,t,n){var r=Array(Math.max(0,e));t=k(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},E.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},E.now=Date.now||function(){return(new Date).getTime()};var P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},R=E.invert(P),$=function(e){var t=function(t){return e[t]},n="(?:"+E.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};E.escape=$(P),E.unescape=$(R),E.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),E.isFunction(r)?r.call(e):r};var B=0;E.uniqueId=function(e){var t=++B+"";return e?e+t:t},E.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},z=/\\|'|\r|\n|\u2028|\u2029/g,X=function(e){return"\\"+W[e]};E.template=function(e,t,n){!t&&n&&(t=n),t=E.defaults({},t,E.templateSettings);var r=RegExp([(t.escape||I).source,(t.interpolate||I).source,(t.evaluate||I).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(r,function(t,n,r,a,s){return o+=e.slice(i,s).replace(z,X),i=s+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(t.variable||"obj","_",o)}catch(e){throw e.source=o,e}var s=function(e){return a.call(this,e,E)},u=t.variable||"obj";return s.source="function("+u+"){\n"+o+"}",s},E.chain=function(e){var t=E(e);return t._chain=!0,t};var U=function(e,t){return e._chain?E(t).chain():t};E.mixin=function(e){E.each(E.functions(e),function(t){var n=E[t]=e[t];E.prototype[t]=function(){var e=[this._wrapped];return p.apply(e,arguments),U(this,n.apply(E,e))}})},E.mixin(E),E.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=f[e];E.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],U(this,n)}}),E.each(["concat","join","slice"],function(e){var t=f[e];E.prototype[e]=function(){return U(this,t.apply(this._wrapped,arguments))}}),E.prototype.value=function(){return this._wrapped},E.prototype.valueOf=E.prototype.toJSON=E.prototype.value,E.prototype.toString=function(){return""+this._wrapped},n(495)&&(r=[],void 0!==(i=function(){return E}.apply(t,r))&&(e.exports=i))}).call(this)},430:function(e,t,n){var r,i;/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(o,a){function s(e){var t=e.length,n=le.type(e);return"function"!==n&&!le.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function u(e,t,n){if(le.isFunction(t))return le.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return le.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(me.test(t))return le.filter(t,e,n);t=le.filter(t,e)}return le.grep(e,function(e){return le.inArray(e,t)>=0!==n})}function l(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function c(e){var t=ke[e]={};return le.each(e.match(Ee)||[],function(e,n){t[n]=!0}),t}function f(){be.addEventListener?(be.removeEventListener("DOMContentLoaded",d,!1),o.removeEventListener("load",d,!1)):(be.detachEvent("onreadystatechange",d),o.detachEvent("onload",d))}function d(){(be.addEventListener||"load"===event.type||"complete"===be.readyState)&&(f(),le.ready())}function h(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Ae,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?le.parseJSON(n):n)}catch(e){}le.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!le.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function v(e,t,n,r){if(le.acceptData(e)){var i,o,a=le.expando,s=e.nodeType,u=s?le.cache:e,l=s?e[a]:e[a]&&a;if(l&&u[l]&&(r||u[l].data)||void 0!==n||"string"!=typeof t)return l||(l=s?e[a]=Z.pop()||le.guid++:a),u[l]||(u[l]=s?{}:{toJSON:le.noop}),("object"==typeof t||"function"==typeof t)&&(r?u[l]=le.extend(u[l],t):u[l].data=le.extend(u[l].data,t)),o=u[l],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[le.camelCase(t)]=n),"string"==typeof t?null==(i=o[t])&&(i=o[le.camelCase(t)]):i=o,i}}function g(e,t,n){if(le.acceptData(e)){var r,i,o=e.nodeType,a=o?le.cache:e,s=o?e[le.expando]:le.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){le.isArray(t)?t=t.concat(le.map(t,le.camelCase)):t in r?t=[t]:(t=le.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!p(r):!le.isEmptyObject(r))return}(n||(delete a[s].data,p(a[s])))&&(o?le.cleanData([e],!0):se.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function m(){return!0}function y(){return!1}function b(){try{return be.activeElement}catch(e){}}function x(e){var t=$e.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function w(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==_e?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==_e?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||le.nodeName(r,t)?o.push(r):le.merge(o,w(r,t));return void 0===t||t&&le.nodeName(e,t)?le.merge([e],o):o}function T(e){Oe.test(e.type)&&(e.defaultChecked=e.checked)}function E(e,t){return le.nodeName(e,"table")&&le.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function k(e){return e.type=(null!==le.find.attr(e,"type"))+"/"+e.type,e}function C(e){var t=Ye.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function N(e,t){for(var n,r=0;null!=(n=e[r]);r++)le._data(n,"globalEval",!t||le._data(t[r],"globalEval"))}function _(e,t){if(1===t.nodeType&&le.hasData(e)){var n,r,i,o=le._data(e),a=le._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)le.event.add(t,n,s[n][r])}a.data&&(a.data=le.extend({},a.data))}}function S(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!se.noCloneEvent&&t[le.expando]){i=le._data(t);for(r in i.events)le.removeEvent(t,r,i.handle);t.removeAttribute(le.expando)}"script"===n&&t.text!==e.text?(k(t).text=e.text,C(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),se.html5Clone&&e.innerHTML&&!le.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Oe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function A(e,t){var n,r=le(t.createElement(e)).appendTo(t.body),i=o.getDefaultComputedStyle&&(n=o.getDefaultComputedStyle(r[0]))?n.display:le.css(r[0],"display");return r.detach(),i}function j(e){var t=be,n=rt[e];return n||(n=A(e,t),"none"!==n&&n||(nt=(nt||le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(nt[0].contentWindow||nt[0].contentDocument).document,t.write(),t.close(),n=A(e,t),nt.detach()),rt[e]=n),n}function D(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function H(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=gt.length;i--;)if((t=gt[i]+n)in e)return t;return r}function L(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=le._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&He(r)&&(o[a]=le._data(r,"olddisplay",j(r.nodeName)))):(i=He(r),(n&&"none"!==n||!i)&&le._data(r,"olddisplay",i?n:le.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function O(e,t,n){var r=dt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function M(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=le.css(e,n+De[o],!0,i)),r?("content"===n&&(a-=le.css(e,"padding"+De[o],!0,i)),"margin"!==n&&(a-=le.css(e,"border"+De[o]+"Width",!0,i))):(a+=le.css(e,"padding"+De[o],!0,i),"padding"!==n&&(a+=le.css(e,"border"+De[o]+"Width",!0,i)));return a}function F(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=it(e),a=se.boxSizing&&"border-box"===le.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=ot(e,t,o),(0>i||null==i)&&(i=e.style[t]),st.test(i))return i;r=a&&(se.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+M(e,t,n||(a?"border":"content"),r,o)+"px"}function q(e,t,n,r,i){return new q.prototype.init(e,t,n,r,i)}function P(){return setTimeout(function(){mt=void 0}),mt=le.now()}function R(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=De[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function $(e,t,n){for(var r,i=(Et[t]||[]).concat(Et["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function B(e,t,n){var r,i,o,a,s,u,l,c=this,f={},d=e.style,h=e.nodeType&&He(e),p=le._data(e,"fxshow");n.queue||(s=le._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,le.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=le.css(e,"display"),"inline"===("none"===l?le._data(e,"olddisplay")||j(e.nodeName):l)&&"none"===le.css(e,"float")&&(se.inlineBlockNeedsLayout&&"inline"!==j(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",se.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],bt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!p||void 0===p[r])continue;h=!0}f[r]=p&&p[r]||le.style(e,r)}else l=void 0;if(le.isEmptyObject(f))"inline"===("none"===l?j(e.nodeName):l)&&(d.display=l);else{p?"hidden"in p&&(h=p.hidden):p=le._data(e,"fxshow",{}),o&&(p.hidden=!h),h?le(e).show():c.done(function(){le(e).hide()}),c.done(function(){var t;le._removeData(e,"fxshow");for(t in f)le.style(e,t,f[t])});for(r in f)a=$(h?p[r]:0,r,c),r in p||(p[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function I(e,t){var n,r,i,o,a;for(n in e)if(r=le.camelCase(n),i=t[r],o=e[n],le.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=le.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o=0,a=Tt.length,s=le.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=mt||P(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:le.extend({},t),opts:le.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:mt||P(),duration:n.duration,tweens:[],createTween:function(t,n){var r=le.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(I(c,l.opts.specialEasing);a>o;o++)if(r=Tt[o].call(l,e,c,l.opts))return r;return le.map(c,$,l),le.isFunction(l.opts.start)&&l.opts.start.call(e,l),le.fx.timer(le.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function z(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ee)||[];if(le.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function X(e,t,n,r){function i(s){var u;return o[s]=!0,le.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Jt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function U(e,t){var n,r,i=le.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&le.extend(!0,e,n),e}function J(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function V(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function K(e,t,n,r){var i;if(le.isArray(t))le.each(t,function(t,i){n||Gt.test(e)?r(e,i):K(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==le.type(t))r(e,t);else for(i in t)K(e+"["+i+"]",t[i],n,r)}function G(){try{return new o.XMLHttpRequest}catch(e){}}function Y(){try{return new o.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function Q(e){return le.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var Z=[],ee=Z.slice,te=Z.concat,ne=Z.push,re=Z.indexOf,ie={},oe=ie.toString,ae=ie.hasOwnProperty,se={},ue="1.11.2",le=function(e,t){return new le.fn.init(e,t)},ce=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,fe=/^-ms-/,de=/-([\da-z])/gi,he=function(e,t){return t.toUpperCase()};le.fn=le.prototype={jquery:ue,constructor:le,selector:"",length:0,toArray:function(){return ee.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:ee.call(this)},pushStack:function(e){var t=le.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return le.each(this,e,t)},map:function(e){return this.pushStack(le.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ee.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:ne,sort:Z.sort,splice:Z.splice},le.extend=le.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||le.isFunction(a)||(a={}),s===u&&(a=this,s--);u>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(l&&n&&(le.isPlainObject(n)||(t=le.isArray(n)))?(t?(t=!1,o=e&&le.isArray(e)?e:[]):o=e&&le.isPlainObject(e)?e:{},a[r]=le.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},le.extend({expando:"jQuery"+(ue+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===le.type(e)},isArray:Array.isArray||function(e){return"array"===le.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!le.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==le.type(e)||e.nodeType||le.isWindow(e))return!1;try{if(e.constructor&&!ae.call(e,"constructor")&&!ae.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(se.ownLast)for(t in e)return ae.call(e,t);for(t in e);return void 0===t||ae.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ie[oe.call(e)]||"object":typeof e},globalEval:function(e){e&&le.trim(e)&&(o.execScript||function(e){o.eval.call(o,e)})(e)},camelCase:function(e){return e.replace(fe,"ms-").replace(de,he)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=s(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(ce,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?le.merge(n,"string"==typeof e?[e]:e):ne.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(re)return re.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;o>i;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,a=s(e),u=[];if(a)for(;o>i;i++)null!=(r=t(e[i],i,n))&&u.push(r);else for(i in e)null!=(r=t(e[i],i,n))&&u.push(r);return te.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),le.isFunction(e)?(n=ee.call(arguments,2),r=function(){return e.apply(t||this,n.concat(ee.call(arguments)))},r.guid=e.guid=e.guid||le.guid++,r):void 0},now:function(){return+new Date},support:se}),le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){ie["[object "+t+"]"]=t.toLowerCase()});var pe=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,h,p,v;if((t?t.ownerDocument||t:$)!==H&&D(t),t=t||H,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&O){if(11!==s&&(i=ye.exec(e)))if(a=i[1]){if(9===s){if(!(o=t.getElementById(a))||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&P(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!M||!M.test(e))){if(h=f=R,p=t,v=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=C(e),(f=t.getAttribute("id"))?h=f.replace(xe,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",u=l.length;u--;)l[u]=h+d(l[u]);p=be.test(e)&&c(t.parentNode)||t,v=l.join(",")}if(v)try{return Q.apply(n,p.querySelectorAll(v)),n}catch(e){}finally{f||t.removeAttribute("id")}}}return _(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[R]=!0,e}function i(e){var t=H.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&void 0!==e.getElementsByTagName&&e}function f(){}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[B,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[R]||(t[R]={}),(s=u[r])&&s[0]===B&&s[1]===o)return l[2]=s[2];if(u[r]=l,l[2]=e(t,n,a))return!0}}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,i,o,a){return i&&!i[R]&&(i=m(i)),o&&!o[R]&&(o=m(o,a)),r(function(r,a,s,u){var l,c,f,d=[],h=[],p=a.length,m=r||v(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?m:g(m,d,e,s,u),b=n?o||(r?e:p||i)?[]:a:y;if(n&&n(y,b,s,u),i)for(l=g(b,h),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(y[h[c]]=f));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(y[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?ee(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else b=g(b===a?b.splice(p,b.length):b),o?o(null,a,b,u):Q.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];i>s;s++)if(n=T.relative[e[s].type])c=[h(p(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[R]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return m(s>1&&p(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&d(e))}c.push(n)}return p(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,d,h=0,p="0",v=r&&[],m=[],y=S,b=r||o&&T.find.TAG("*",l),x=B+=null==y?1:Math.random()||.1,w=b.length;for(l&&(S=a!==H&&a);p!==w&&null!=(c=b[p]);p++){if(o&&c){for(f=0;d=e[f++];)if(d(c,a,s)){u.push(c);break}l&&(B=x)}i&&((c=!d&&c)&&h--,r&&v.push(c))}if(h+=p,i&&p!==h){for(f=0;d=n[f++];)d(v,m,a,s);if(r){if(h>0)for(;p--;)v[p]||m[p]||(m[p]=G.call(u));m=g(m)}Q.apply(u,m),l&&!r&&m.length>0&&h+n.length>1&&t.uniqueSort(u)}return l&&(B=x,S=y),v};return i?r(a):a}var x,w,T,E,k,C,N,_,S,A,j,D,H,L,O,M,F,q,P,R="sizzle"+1*new Date,$=e.document,B=0,I=0,W=n(),z=n(),X=n(),U=function(e,t){return e===t&&(j=!0),0},J=1<<31,V={}.hasOwnProperty,K=[],G=K.pop,Y=K.push,Q=K.push,Z=K.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(ae),he=new RegExp("^"+ie+"$"),pe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ve=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ee=function(){D()};try{Q.apply(K=Z.call($.childNodes),$.childNodes),K[$.childNodes.length].nodeType}catch(e){Q={apply:K.length?function(e,t){Y.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==H&&9===r.nodeType&&r.documentElement?(H=r,L=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ee,!1):n.attachEvent&&n.attachEvent("onunload",Ee)),O=!k(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(r.getElementsByClassName),w.getById=i(function(e){return L.appendChild(e).id=R,!r.getElementsByName||!r.getElementsByName(R).length}),w.getById?(T.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return O?t.getElementsByClassName(e):void 0},F=[],M=[],(w.qsa=me.test(r.querySelectorAll))&&(i(function(e){L.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&M.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||M.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+R+"-]").length||M.push("~="),e.querySelectorAll(":checked").length||M.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||M.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(w.matchesSelector=me.test(q=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){w.disconnectedMatch=q.call(e,"div"),q.call(e,"[s!='']:x"),F.push("!=",ae)}),M=M.length&&new RegExp(M.join("|")),F=F.length&&new RegExp(F.join("|")),t=me.test(L.compareDocumentPosition),P=t||me.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return j=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===$&&P($,e)?-1:t===r||t.ownerDocument===$&&P($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return j=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:A?ee(A,e)-ee(A,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},r):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&D(e),n=n.replace(fe,"='$1']"),!(!w.matchesSelector||!O||F&&F.test(n)||M&&M.test(n)))try{var r=q.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&D(e),P(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&D(e);var n=T.attrHandle[t.toLowerCase()],r=n&&V.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!w.detectDuplicates,A=!w.sortStable&&e.slice(0),e.sort(U),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,h,p,v=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s;if(g){if(o){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;p=v="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(c=g[R]||(g[R]={}),l=c[e]||[],h=l[0]===B&&l[1],d=l[0]===B&&l[2],f=h&&g.childNodes[h];f=++h&&f&&f[v]||(d=h=0)||p.pop();)if(1===f.nodeType&&++d&&f===t){c[e]=[B,h,d];break}}else if(y&&(l=(t[R]||(t[R]={}))[e])&&l[0]===B)d=l[1];else for(;(f=++h&&f&&f[v]||(d=h=0)||p.pop())&&((s?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++d||(y&&((f[R]||(f[R]={}))[e]=[B,d]),f!==t)););return(d-=i)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[R]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ue,"$1"));return i[R]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return he.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do{if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return ve.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=u(x);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,C=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){(!r||(i=le.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in T.filter)!(i=pe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=C(e)),n=t.length;n--;)o=y(t[n]),o[R]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},_=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&C(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(!(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(we,Te),be.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&d(o)))return Q.apply(n,r),n;break}}return(l||N(e,f))(r,t,!O,n,be.test(e)&&c(t.parentNode)||t),n},w.sortStable=R.split("").sort(U).join("")===R,w.detectDuplicates=!!j,D(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(o);le.find=pe,le.expr=pe.selectors,le.expr[":"]=le.expr.pseudos,le.unique=pe.uniqueSort,le.text=pe.getText,le.isXMLDoc=pe.isXML,le.contains=pe.contains;var ve=le.expr.match.needsContext,ge=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,me=/^.[^:#\[\.,]*$/;le.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?le.find.matchesSelector(r,e)?[r]:[]:le.find.matches(e,le.grep(t,function(e){return 1===e.nodeType}))},le.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(le(e).filter(function(){for(t=0;i>t;t++)if(le.contains(r[t],this))return!0}));for(t=0;i>t;t++)le.find(e,r[t],n);return n=this.pushStack(i>1?le.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(u(this,e||[],!1))},not:function(e){return this.pushStack(u(this,e||[],!0))},is:function(e){return!!u(this,"string"==typeof e&&ve.test(e)?le(e):e||[],!1).length}});var ye,be=o.document,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(le.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:xe.exec(e))||!n[1]&&t)return!t||t.jquery?(t||ye).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof le?t[0]:t,le.merge(this,le.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:be,!0)),ge.test(n[1])&&le.isPlainObject(t))for(n in t)le.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if((r=be.getElementById(n[2]))&&r.parentNode){if(r.id!==n[2])return ye.find(e);this.length=1,this[0]=r}return this.context=be,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):le.isFunction(e)?void 0!==ye.ready?ye.ready(e):e(le):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),le.makeArray(e,this))}).prototype=le.fn,ye=le(be);var we=/^(?:parents|prev(?:Until|All))/,Te={children:!0,contents:!0,next:!0,prev:!0};le.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!le(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),le.fn.extend({has:function(e){var t,n=le(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(le.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ve.test(e)||"string"!=typeof e?le(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&le.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?le.unique(o):o)},index:function(e){return e?"string"==typeof e?le.inArray(this[0],le(e)):le.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(le.unique(le.merge(this.get(),le(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),le.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return le.dir(e,"parentNode")},parentsUntil:function(e,t,n){return le.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return le.dir(e,"nextSibling")},prevAll:function(e){return le.dir(e,"previousSibling")},nextUntil:function(e,t,n){return le.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return le.dir(e,"previousSibling",n)},siblings:function(e){return le.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return le.sibling(e.firstChild)},contents:function(e){return le.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:le.merge([],e.childNodes)}},function(e,t){le.fn[e]=function(n,r){var i=le.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=le.filter(r,i)),this.length>1&&(Te[e]||(i=le.unique(i)),we.test(e)&&(i=i.reverse())),this.pushStack(i)}});var Ee=/\S+/g,ke={};le.Callbacks=function(e){e="string"==typeof e?ke[e]||c(e):le.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,r=!0,o=a||0,a=0,i=s.length,t=!0;s&&i>o;o++)if(!1===s[o].apply(c[0],c[1])&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:f.disable())},f={add:function(){if(s){var r=s.length;!function t(n){le.each(n,function(n,r){var i=le.type(r);"function"===i?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),t?i=s.length:n&&(a=r,l(n))}return this},remove:function(){return s&&le.each(arguments,function(e,n){for(var r;(r=le.inArray(n,s,r))>-1;)s.splice(r,1),t&&(i>=r&&i--,o>=r&&o--)}),this},has:function(e){return e?le.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],i=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||r&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!r}};return f},le.extend({Deferred:function(e){var t=[["resolve","done",le.Callbacks("once memory"),"resolved"],["reject","fail",le.Callbacks("once memory"),"rejected"],["notify","progress",le.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return le.Deferred(function(n){le.each(t,function(t,o){var a=le.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&le.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?le.extend(e,r):r}},i={};return r.pipe=r.then,le.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ee.call(arguments),a=o.length,s=1!==a||e&&le.isFunction(e.promise)?a:0,u=1===s?e:le.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ee.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&le.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}});var Ce;le.fn.ready=function(e){return le.ready.promise().done(e),this},le.extend({isReady:!1,readyWait:1,holdReady:function(e){e?le.readyWait++:le.ready(!0)},ready:function(e){if(!0===e?!--le.readyWait:!le.isReady){if(!be.body)return setTimeout(le.ready);le.isReady=!0,!0!==e&&--le.readyWait>0||(Ce.resolveWith(be,[le]),le.fn.triggerHandler&&(le(be).triggerHandler("ready"),le(be).off("ready")))}}}),le.ready.promise=function(e){if(!Ce)if(Ce=le.Deferred(),"complete"===be.readyState)setTimeout(le.ready);else if(be.addEventListener)be.addEventListener("DOMContentLoaded",d,!1),o.addEventListener("load",d,!1);else{be.attachEvent("onreadystatechange",d),o.attachEvent("onload",d);var t=!1;try{t=null==o.frameElement&&be.documentElement}catch(e){}t&&t.doScroll&&function e(){if(!le.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}f(),le.ready()}}()}return Ce.promise(e)};var Ne,_e="undefined";for(Ne in le(se))break;se.ownLast="0"!==Ne,se.inlineBlockNeedsLayout=!1,le(function(){var e,t,n,r;(n=be.getElementsByTagName("body")[0])&&n.style&&(t=be.createElement("div"),r=be.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==_e&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",se.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=be.createElement("div");if(null==se.deleteExpando){se.deleteExpando=!0;try{delete e.test}catch(e){se.deleteExpando=!1}}e=null}(),le.acceptData=function(e){var t=le.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/([A-Z])/g;le.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?le.cache[e[le.expando]]:e[le.expando])&&!p(e)},data:function(e,t,n){return v(e,t,n)},removeData:function(e,t){return g(e,t)},_data:function(e,t,n){return v(e,t,n,!0)},_removeData:function(e,t){return g(e,t,!0)}}),le.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=le.data(o),1===o.nodeType&&!le._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=le.camelCase(r.slice(5)),h(o,r,i[r])));le._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){le.data(this,e)}):arguments.length>1?this.each(function(){le.data(this,e,t)}):o?h(o,e,le.data(o,e)):void 0},removeData:function(e){return this.each(function(){le.removeData(this,e)})}}),le.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=le._data(e,t),n&&(!r||le.isArray(n)?r=le._data(e,t,le.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=le.queue(e,t),r=n.length,i=n.shift(),o=le._queueHooks(e,t),a=function(){le.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return le._data(e,n)||le._data(e,n,{empty:le.Callbacks("once memory").add(function(){le._removeData(e,t+"queue"),le._removeData(e,n)})})}}),le.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?le.queue(this[0],e):void 0===t?this:this.each(function(){var n=le.queue(this,e,t);le._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&le.dequeue(this,e)})},dequeue:function(e){return this.each(function(){le.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=le.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=le._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var je=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,De=["Top","Right","Bottom","Left"],He=function(e,t){return e=t||e,"none"===le.css(e,"display")||!le.contains(e.ownerDocument,e)},Le=le.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===le.type(n)){i=!0;for(s in n)le.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,le.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(le(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Oe=/^(?:checkbox|radio)$/i;!function(){var e=be.createElement("input"),t=be.createElement("div"),n=be.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",se.leadingWhitespace=3===t.firstChild.nodeType,se.tbody=!t.getElementsByTagName("tbody").length,se.htmlSerialize=!!t.getElementsByTagName("link").length,se.html5Clone="<:nav></:nav>"!==be.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),se.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",se.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",se.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,se.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){se.noCloneEvent=!1}),t.cloneNode(!0).click()),null==se.deleteExpando){se.deleteExpando=!0;try{delete t.test}catch(e){se.deleteExpando=!1}}}(),function(){var e,t,n=be.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(se[e+"Bubbles"]=t in o)||(n.setAttribute(t,"t"),se[e+"Bubbles"]=!1===n.attributes[t].expando);n=null}();var Me=/^(?:input|select|textarea)$/i,Fe=/^key/,qe=/^(?:mouse|pointer|contextmenu)|click/,Pe=/^(?:focusinfocus|focusoutblur)$/,Re=/^([^.]*)(?:\.(.+)|)$/;le.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,h,p,v,g=le._data(e);if(g){for(n.handler&&(u=n,n=u.handler,i=u.selector),n.guid||(n.guid=le.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return typeof le===_e||e&&le.event.triggered===e.type?void 0:le.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(Ee)||[""],s=t.length;s--;)o=Re.exec(t[s])||[],h=v=o[1],p=(o[2]||"").split(".").sort(),h&&(l=le.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=le.event.special[h]||{},f=le.extend({type:h,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&le.expr.match.needsContext.test(i),namespace:p.join(".")},u),(d=a[h])||(d=a[h]=[],d.delegateCount=0,l.setup&&!1!==l.setup.call(e,r,p,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),le.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,h,p,v,g=le.hasData(e)&&le._data(e);if(g&&(c=g.events)){for(t=(t||"").match(Ee)||[""],l=t.length;l--;)if(s=Re.exec(t[l])||[],h=v=s[1],p=(s[2]||"").split(".").sort(),h){for(f=le.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,d=c[h]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=d.length;o--;)a=d[o],!i&&v!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));u&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,g.handle)||le.removeEvent(e,h,g.handle),delete c[h])}else for(h in c)le.event.remove(e,h+t[l],n,r,!0);le.isEmptyObject(c)&&(delete g.handle,le._removeData(e,"events"))}},trigger:function(e,t,n,r){var i,a,s,u,l,c,f,d=[n||be],h=ae.call(e,"type")?e.type:e,p=ae.call(e,"namespace")?e.namespace.split("."):[];if(s=c=n=n||be,3!==n.nodeType&&8!==n.nodeType&&!Pe.test(h+le.event.triggered)&&(h.indexOf(".")>=0&&(p=h.split("."),h=p.shift(),p.sort()),a=h.indexOf(":")<0&&"on"+h,e=e[le.expando]?e:new le.Event(h,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:le.makeArray(t,[e]),l=le.event.special[h]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!le.isWindow(n)){for(u=l.delegateType||h,Pe.test(u+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;c===(n.ownerDocument||be)&&d.push(c.defaultView||c.parentWindow||o)}for(f=0;(s=d[f++])&&!e.isPropagationStopped();)e.type=f>1?u:l.bindType||h,i=(le._data(s,"events")||{})[e.type]&&le._data(s,"handle"),i&&i.apply(s,t),(i=a&&s[a])&&i.apply&&le.acceptData(s)&&(e.result=i.apply(s,t),!1===e.result&&e.preventDefault());if(e.type=h,!r&&!e.isDefaultPrevented()&&(!l._default||!1===l._default.apply(d.pop(),t))&&le.acceptData(n)&&a&&n[h]&&!le.isWindow(n)){c=n[a],c&&(n[a]=null),le.event.triggered=h;try{n[h]()}catch(e){}le.event.triggered=void 0,c&&(n[a]=c)}return e.result}},dispatch:function(e){e=le.event.fix(e);var t,n,r,i,o,a=[],s=ee.call(arguments),u=(le._data(this,"events")||{})[e.type]||[],l=le.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(a=le.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,void 0!==(n=((le.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s))&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(i=[],o=0;s>o;o++)r=t[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?le(n,this).index(u)>=0:le.find(n,this,null,[u]).length),i[n]&&i.push(r);i.length&&a.push({elem:u,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[le.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=qe.test(i)?this.mouseHooks:Fe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new le.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||be),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||be,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==b()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===b()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return le.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return le.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=le.extend(new le.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?le.event.trigger(i,null,t):le.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},le.removeEvent=be.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===_e&&(e[r]=null),e.detachEvent(r,n))},le.Event=function(e,t){return this instanceof le.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?m:y):this.type=e,t&&le.extend(this,t),this.timeStamp=e&&e.timeStamp||le.now(),void(this[le.expando]=!0)):new le.Event(e,t)},le.Event.prototype={isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=m,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=m,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=m,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},le.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){le.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!le.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),se.submitBubbles||(le.event.special.submit={setup:function(){return!le.nodeName(this,"form")&&void le.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=le.nodeName(t,"input")||le.nodeName(t,"button")?t.form:void 0;n&&!le._data(n,"submitBubbles")&&(le.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),le._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&le.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!le.nodeName(this,"form")&&void le.event.remove(this,"._submit")}}),se.changeBubbles||(le.event.special.change={setup:function(){return Me.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(le.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),le.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),le.event.simulate("change",this,e,!0)})),!1):void le.event.add(this,"beforeactivate._change",function(e){var t=e.target;Me.test(t.nodeName)&&!le._data(t,"changeBubbles")&&(le.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||le.event.simulate("change",this.parentNode,e,!0)}),le._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return le.event.remove(this,"._change"),!Me.test(this.nodeName)}}),se.focusinBubbles||le.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){le.event.simulate(t,e.target,le.event.fix(e),!0)};le.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=le._data(r,t);i||r.addEventListener(e,n,!0),le._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=le._data(r,t)-1;i?le._data(r,t,i):(r.removeEventListener(e,n,!0),le._removeData(r,t))}}}),le.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(o in e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=y;else if(!r)return this;return 1===i&&(a=r,r=function(e){return le().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=le.guid++)),this.each(function(){le.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,le(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=y),this.each(function(){le.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){le.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?le.event.trigger(e,t,n,!0):void 0}});var $e="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Be=/ jQuery\d+="(?:null|\d+)"/g,Ie=new RegExp("<(?:"+$e+")[\\s/>]","i"),We=/^\s+/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Xe=/<([\w:]+)/,Ue=/<tbody/i,Je=/<|&#?\w+;/,Ve=/<(?:script|style|link)/i,Ke=/checked\s*(?:[^=]|=\s*.checked.)/i,Ge=/^$|\/(?:java|ecma)script/i,Ye=/^true\/(.*)/,Qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ze={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:se.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},et=x(be),tt=et.appendChild(be.createElement("div"));Ze.optgroup=Ze.option,Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,le.extend({clone:function(e,t,n){var r,i,o,a,s,u=le.contains(e.ownerDocument,e);if(se.html5Clone||le.isXMLDoc(e)||!Ie.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(tt.innerHTML=e.outerHTML,tt.removeChild(o=tt.firstChild)),!(se.noCloneEvent&&se.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||le.isXMLDoc(e)))for(r=w(o),s=w(e),a=0;null!=(i=s[a]);++a)r[a]&&S(i,r[a]);if(t)if(n)for(s=s||w(e),r=r||w(o),a=0;null!=(i=s[a]);a++)_(i,r[a]);else _(e,o);return r=w(o,"script"),r.length>0&&N(r,!u&&w(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=x(t),h=[],p=0;f>p;p++)if((o=e[p])||0===o)if("object"===le.type(o))le.merge(h,o.nodeType?[o]:o);else if(Je.test(o)){for(s=s||d.appendChild(t.createElement("div")),u=(Xe.exec(o)||["",""])[1].toLowerCase(),c=Ze[u]||Ze._default,s.innerHTML=c[1]+o.replace(ze,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!se.leadingWhitespace&&We.test(o)&&h.push(t.createTextNode(We.exec(o)[0])),!se.tbody)for(o="table"!==u||Ue.test(o)?"<table>"!==c[1]||Ue.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)le.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(le.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),se.appendChecked||le.grep(w(h,"input"),T),p=0;o=h[p++];)if((!r||-1===le.inArray(o,r))&&(a=le.contains(o.ownerDocument,o),s=w(d.appendChild(o),"script"),a&&N(s),n))for(i=0;o=s[i++];)Ge.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,t){for(var n,r,i,o,a=0,s=le.expando,u=le.cache,l=se.deleteExpando,c=le.event.special;null!=(n=e[a]);a++)if((t||le.acceptData(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?le.event.remove(n,r):le.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l?delete n[s]:typeof n.removeAttribute!==_e?n.removeAttribute(s):n[s]=null,Z.push(i))}}}),le.fn.extend({text:function(e){return Le(this,function(e){return void 0===e?le.text(this):this.empty().append((this[0]&&this[0].ownerDocument||be).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){E(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?le.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||le.cleanData(w(n)),n.parentNode&&(t&&le.contains(n.ownerDocument,n)&&N(w(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&le.cleanData(w(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&le.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return le.clone(this,e,t)})},html:function(e){return Le(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Be,""):void 0;if(!("string"!=typeof e||Ve.test(e)||!se.htmlSerialize&&Ie.test(e)||!se.leadingWhitespace&&We.test(e)||Ze[(Xe.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(ze,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(le.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,le.cleanData(w(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=te.apply([],e);var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,d=e[0],h=le.isFunction(d);if(h||l>1&&"string"==typeof d&&!se.checkClone&&Ke.test(d))return this.each(function(n){var r=c.eq(n);h&&(e[0]=d.call(this,n,r.html())),r.domManip(e,t)});if(l&&(s=le.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=le.map(w(s,"script"),k),i=o.length;l>u;u++)r=s,u!==f&&(r=le.clone(r,!0,!0),i&&le.merge(o,w(r,"script"))),t.call(this[u],r,u);if(i)for(a=o[o.length-1].ownerDocument,le.map(o,C),u=0;i>u;u++)r=o[u],Ge.test(r.type||"")&&!le._data(r,"globalEval")&&le.contains(a,r)&&(r.src?le._evalUrl&&le._evalUrl(r.src):le.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Qe,"")));s=n=null}return this}}),le.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){le.fn[e]=function(e){for(var n,r=0,i=[],o=le(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),le(o[r])[t](n),ne.apply(i,n.get());return this.pushStack(i)}});var nt,rt={};!function(){var e;se.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=be.getElementsByTagName("body")[0],n&&n.style?(t=be.createElement("div"),r=be.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==_e&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(be.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var it,ot,at=/^margin/,st=new RegExp("^("+je+")(?!px)[a-z%]+$","i"),ut=/^(top|right|bottom|left)$/;o.getComputedStyle?(it=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):o.getComputedStyle(e,null)},ot=function(e,t,n){var r,i,o,a,s=e.style;return n=n||it(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||le.contains(e.ownerDocument,e)||(a=le.style(e,t)),st.test(a)&&at.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):be.documentElement.currentStyle&&(it=function(e){return e.currentStyle},ot=function(e,t,n){var r,i,o,a,s=e.style;return n=n||it(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),st.test(a)&&!ut.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),!function(){function e(){var e,t,n,r;(t=be.getElementsByTagName("body")[0])&&t.style&&(e=be.createElement("div"),n=be.createElement("div"),n.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",i=a=!1,u=!0,o.getComputedStyle&&(i="1%"!==(o.getComputedStyle(e,null)||{}).top,a="4px"===(o.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(be.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((o.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(n))}var t,n,r,i,a,s,u;t=be.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],(n=r&&r.style)&&(n.cssText="float:left;opacity:.5",se.opacity="0.5"===n.opacity,se.cssFloat=!!n.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",se.clearCloneStyle="content-box"===t.style.backgroundClip,se.boxSizing=""===n.boxSizing||""===n.MozBoxSizing||""===n.WebkitBoxSizing,le.extend(se,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==a&&e(),a},pixelPosition:function(){return null==i&&e(),i},reliableMarginRight:function(){return null==u&&e(),u}}))}(),le.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var lt=/alpha\([^)]*\)/i,ct=/opacity\s*=\s*([^)]*)/,ft=/^(none|table(?!-c[ea]).+)/,dt=new RegExp("^("+je+")(.*)$","i"),ht=new RegExp("^([+-])=("+je+")","i"),pt={position:"absolute",visibility:"hidden",display:"block"},vt={letterSpacing:"0",fontWeight:"400"},gt=["Webkit","O","Moz","ms"];le.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ot(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:se.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=le.camelCase(t),u=e.style;if(t=le.cssProps[s]||(le.cssProps[s]=H(u,s)),a=le.cssHooks[t]||le.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if(o=typeof n,"string"===o&&(i=ht.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(le.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||le.cssNumber[s]||(n+="px"),se.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=le.camelCase(t);return t=le.cssProps[s]||(le.cssProps[s]=H(e.style,s)),a=le.cssHooks[t]||le.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ot(e,t,r)),"normal"===o&&t in vt&&(o=vt[t]),""===n||n?(i=parseFloat(o),!0===n||le.isNumeric(i)?i||0:o):o}}),le.each(["height","width"],function(e,t){le.cssHooks[t]={get:function(e,n,r){return n?ft.test(le.css(e,"display"))&&0===e.offsetWidth?le.swap(e,pt,function(){return F(e,t,r)}):F(e,t,r):void 0},set:function(e,n,r){var i=r&&it(e);return O(e,n,r?M(e,t,r,se.boxSizing&&"border-box"===le.css(e,"boxSizing",!1,i),i):0)}}}),se.opacity||(le.cssHooks.opacity={get:function(e,t){return ct.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=le.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===le.trim(o.replace(lt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=lt.test(o)?o.replace(lt,i):o+" "+i)}}),le.cssHooks.marginRight=D(se.reliableMarginRight,function(e,t){return t?le.swap(e,{display:"inline-block"},ot,[e,"marginRight"]):void 0}),le.each({margin:"",padding:"",border:"Width"},function(e,t){le.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+De[r]+t]=o[r]||o[r-2]||o[0];return i}},at.test(e)||(le.cssHooks[e+t].set=O)}),le.fn.extend({css:function(e,t){return Le(this,function(e,t,n){var r,i,o={},a=0;if(le.isArray(t)){for(r=it(e),i=t.length;i>a;a++)o[t[a]]=le.css(e,t[a],!1,r);return o}return void 0!==n?le.style(e,t,n):le.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){He(this)?le(this).show():le(this).hide()})}}),le.Tween=q,q.prototype={constructor:q,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(le.cssNumber[n]?"":"px")},cur:function(){var e=q.propHooks[this.prop];return e&&e.get?e.get(this):q.propHooks._default.get(this)},run:function(e){var t,n=q.propHooks[this.prop];return this.pos=t=this.options.duration?le.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):q.propHooks._default.set(this),this}},q.prototype.init.prototype=q.prototype,q.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=le.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){le.fx.step[e.prop]?le.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[le.cssProps[e.prop]]||le.cssHooks[e.prop])?le.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},q.propHooks.scrollTop=q.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},le.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},le.fx=q.prototype.init,le.fx.step={};var mt,yt,bt=/^(?:toggle|show|hide)$/,xt=new RegExp("^(?:([+-])=|)("+je+")([a-z%]*)$","i"),wt=/queueHooks$/,Tt=[B],Et={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=xt.exec(t),o=i&&i[3]||(le.cssNumber[e]?"":"px"),a=(le.cssNumber[e]||"px"!==o&&+r)&&xt.exec(le.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do{s=s||".5",a/=s,le.style(n.elem,e,a+o)}while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};le.Animation=le.extend(W,{tweener:function(e,t){le.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],Et[n]=Et[n]||[],Et[n].unshift(t)},prefilter:function(e,t){t?Tt.unshift(e):Tt.push(e)}}),le.speed=function(e,t,n){var r=e&&"object"==typeof e?le.extend({},e):{complete:n||!n&&t||le.isFunction(e)&&e,duration:e,easing:n&&t||t&&!le.isFunction(t)&&t};return r.duration=le.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in le.fx.speeds?le.fx.speeds[r.duration]:le.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){le.isFunction(r.old)&&r.old.call(this),r.queue&&le.dequeue(this,r.queue)},r},le.fn.extend({fadeTo:function(e,t,n,r){return this.filter(He).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=le.isEmptyObject(e),o=le.speed(t,n,r),a=function(){var t=W(this,le.extend({},e),o);(i||le._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=le.timers,a=le._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&wt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&le.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=le._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=le.timers,a=r?r.length:0;for(n.finish=!0,le.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),le.each(["toggle","show","hide"],function(e,t){var n=le.fn[t];le.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(R(t,!0),e,r,i)}}),le.each({slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){le.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),le.timers=[],le.fx.tick=function(){var e,t=le.timers,n=0;for(mt=le.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||le.fx.stop(),mt=void 0},le.fx.timer=function(e){le.timers.push(e),e()?le.fx.start():le.timers.pop()},le.fx.interval=13,le.fx.start=function(){yt||(yt=setInterval(le.fx.tick,le.fx.interval))},le.fx.stop=function(){clearInterval(yt),yt=null},le.fx.speeds={slow:600,fast:200,_default:400},le.fn.delay=function(e,t){return e=le.fx?le.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;t=be.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],n=be.createElement("select"),i=n.appendChild(be.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",se.getSetAttribute="t"!==t.className,se.style=/top/.test(r.getAttribute("style")),se.hrefNormalized="/a"===r.getAttribute("href"),se.checkOn=!!e.value,se.optSelected=i.selected,se.enctype=!!be.createElement("form").enctype,n.disabled=!0,se.optDisabled=!i.disabled,e=be.createElement("input"),e.setAttribute("value",""),se.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),se.radioValue="t"===e.value}();var kt=/\r/g;le.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=le.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,le(this).val()):e,null==i?i="":"number"==typeof i?i+="":le.isArray(i)&&(i=le.map(i,function(e){return null==e?"":e+""})),(t=le.valHooks[this.type]||le.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=le.valHooks[i.type]||le.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(kt,""):null==n?"":n)):void 0}}),le.extend({valHooks:{option:{get:function(e){var t=le.find.attr(e,"value");return null!=t?t:le.trim(le.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(se.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&le.nodeName(n.parentNode,"optgroup"))){if(t=le(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=le.makeArray(t),a=i.length;a--;)if(r=i[a],le.inArray(le.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),le.each(["radio","checkbox"],function(){le.valHooks[this]={set:function(e,t){return le.isArray(t)?e.checked=le.inArray(le(e).val(),t)>=0:void 0}},se.checkOn||(le.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Ct,Nt,_t=le.expr.attrHandle,St=/^(?:checked|selected)$/i,At=se.getSetAttribute,jt=se.input;le.fn.extend({attr:function(e,t){return Le(this,le.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){le.removeAttr(this,e)})}}),le.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===_e?le.prop(e,t,n):(1===o&&le.isXMLDoc(e)||(t=t.toLowerCase(),r=le.attrHooks[t]||(le.expr.match.bool.test(t)?Nt:Ct)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=le.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void le.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(Ee);if(o&&1===e.nodeType)for(;n=o[i++];)r=le.propFix[n]||n,le.expr.match.bool.test(n)?jt&&At||!St.test(n)?e[r]=!1:e[le.camelCase("default-"+n)]=e[r]=!1:le.attr(e,n,""),e.removeAttribute(At?n:r)},attrHooks:{type:{set:function(e,t){if(!se.radioValue&&"radio"===t&&le.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Nt={set:function(e,t,n){return!1===t?le.removeAttr(e,n):jt&&At||!St.test(n)?e.setAttribute(!At&&le.propFix[n]||n,n):e[le.camelCase("default-"+n)]=e[n]=!0,n}},le.each(le.expr.match.bool.source.match(/\w+/g),function(e,t){var n=_t[t]||le.find.attr;_t[t]=jt&&At||!St.test(t)?function(e,t,r){var i,o;return r||(o=_t[t],_t[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,_t[t]=o),i}:function(e,t,n){return n?void 0:e[le.camelCase("default-"+t)]?t.toLowerCase():null}}),jt&&At||(le.attrHooks.value={set:function(e,t,n){return le.nodeName(e,"input")?void(e.defaultValue=t):Ct&&Ct.set(e,t,n)}}),At||(Ct={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},_t.id=_t.name=_t.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},le.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:Ct.set},le.attrHooks.contenteditable={set:function(e,t,n){Ct.set(e,""!==t&&t,n)}},le.each(["width","height"],function(e,t){le.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),se.style||(le.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Dt=/^(?:input|select|textarea|button|object)$/i,Ht=/^(?:a|area)$/i;le.fn.extend({prop:function(e,t){return Le(this,le.prop,e,t,arguments.length>1)},removeProp:function(e){return e=le.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),le.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!le.isXMLDoc(e),o&&(t=le.propFix[t]||t,i=le.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=le.find.attr(e,"tabindex");return t?parseInt(t,10):Dt.test(e.nodeName)||Ht.test(e.nodeName)&&e.href?0:-1}}}}),se.hrefNormalized||le.each(["href","src"],function(e,t){le.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),se.optSelected||(le.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),le.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){le.propFix[this.toLowerCase()]=this}),se.enctype||(le.propFix.enctype="encoding");var Lt=/[\t\r\n\f]/g;le.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,u=this.length,l="string"==typeof e&&e;if(le.isFunction(e))return this.each(function(t){le(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(Ee)||[];u>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Lt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=le.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,u=this.length,l=0===arguments.length||"string"==typeof e&&e;if(le.isFunction(e))return this.each(function(t){le(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(Ee)||[];u>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Lt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?le.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(le.isFunction(e)?function(n){le(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=le(this),o=e.match(Ee)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===_e||"boolean"===n)&&(this.className&&le._data(this,"__className__",this.className),this.className=this.className||!1===e?"":le._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Lt," ").indexOf(t)>=0)return!0;return!1}}),le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){le.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),le.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Ot=le.now(),Mt=/\?/,Ft=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;le.parseJSON=function(e){if(o.JSON&&o.JSON.parse)return o.JSON.parse(e+"");var t,n=null,r=le.trim(e+"");return r&&!le.trim(r.replace(Ft,function(e,r,i,o){return t&&r&&(n=0),0===n?e:(t=i||r,n+=!o-!i,"")}))?Function("return "+r)():le.error("Invalid JSON: "+e)},le.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{o.DOMParser?(n=new DOMParser,t=n.parseFromString(e,"text/xml")):(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(e){t=void 0}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||le.error("Invalid XML: "+e),t};var qt,Pt,Rt=/#.*$/,$t=/([?&])_=[^&]*/,Bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,It=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wt=/^(?:GET|HEAD)$/,zt=/^\/\//,Xt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ut={},Jt={},Vt="*/".concat("*");try{Pt=location.href}catch(e){Pt=be.createElement("a"),Pt.href="",Pt=Pt.href}qt=Xt.exec(Pt.toLowerCase())||[],le.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Pt,type:"GET",isLocal:It.test(qt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Vt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":le.parseJSON,"text xml":le.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?U(U(e,le.ajaxSettings),t):U(le.ajaxSettings,e)},ajaxPrefilter:z(Ut),ajaxTransport:z(Jt),ajax:function(e,t){function n(e,t,n,r){var i,c,m,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),l=void 0,a=r||"",w.readyState=e>0?4:0,i=e>=200&&300>e||304===e,n&&(y=J(f,w,n)),y=V(f,y,w,i),i?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(le.lastModified[o]=x),(x=w.getResponseHeader("etag"))&&(le.etag[o]=x)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,m=y.error,i=!m)):(m=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",i?p.resolveWith(d,[c,T,w]):p.rejectWith(d,[w,T,m]),w.statusCode(g),g=void 0,u&&h.trigger(i?"ajaxSuccess":"ajaxError",[w,f,i?c:m]),v.fireWith(d,[w,T]),u&&(h.trigger("ajaxComplete",[w,f]),--le.active||le.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,u,l,c,f=le.ajaxSetup({},t),d=f.context||f,h=f.context&&(d.nodeType||d.jquery)?le(d):le.event,p=le.Deferred(),v=le.Callbacks("once memory"),g=f.statusCode||{},m={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Bt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return l&&l.abort(t),n(0,t),this}};if(p.promise(w).complete=v.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||Pt)+"").replace(Rt,"").replace(zt,qt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=le.trim(f.dataType||"*").toLowerCase().match(Ee)||[""],null==f.crossDomain&&(r=Xt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===qt[1]&&r[2]===qt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(qt[3]||("http:"===qt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=le.param(f.data,f.traditional)),X(Ut,f,t,w),2===b)return w;u=le.event&&f.global,u&&0==le.active++&&le.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Wt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Mt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=$t.test(o)?o.replace($t,"$1_="+Ot++):o+(Mt.test(o)?"&":"?")+"_="+Ot++)),f.ifModified&&(le.lastModified[o]&&w.setRequestHeader("If-Modified-Since",le.lastModified[o]),le.etag[o]&&w.setRequestHeader("If-None-Match",le.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Vt+"; q=0.01":""):f.accepts["*"]);for(i in f.headers)w.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(d,w,f)||2===b))return w.abort();x="abort";for(i in{success:1,error:1,complete:1})w[i](f[i]);if(l=X(Jt,f,t,w)){w.readyState=1,u&&h.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,l.send(m,n)}catch(e){if(!(2>b))throw e;n(-1,e)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return le.get(e,t,n,"json")},getScript:function(e,t){return le.get(e,void 0,t,"script")}}),le.each(["get","post"],function(e,t){le[t]=function(e,n,r,i){return le.isFunction(n)&&(i=i||r,r=n,n=void 0),le.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),le._evalUrl=function(e){return le.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},le.fn.extend({wrapAll:function(e){if(le.isFunction(e))return this.each(function(t){le(this).wrapAll(e.call(this,t))});if(this[0]){var t=le(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(le.isFunction(e)?function(t){le(this).wrapInner(e.call(this,t))}:function(){var t=le(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=le.isFunction(e);return this.each(function(n){le(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){le.nodeName(this,"body")||le(this).replaceWith(this.childNodes)}).end()}}),le.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!se.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||le.css(e,"display"))},le.expr.filters.visible=function(e){return!le.expr.filters.hidden(e)};var Kt=/%20/g,Gt=/\[\]$/,Yt=/\r?\n/g,Qt=/^(?:submit|button|image|reset|file)$/i,Zt=/^(?:input|select|textarea|keygen)/i;le.param=function(e,t){var n,r=[],i=function(e,t){t=le.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=le.ajaxSettings&&le.ajaxSettings.traditional),le.isArray(e)||e.jquery&&!le.isPlainObject(e))le.each(e,function(){i(this.name,this.value)});else for(n in e)K(n,e[n],t,i);return r.join("&").replace(Kt,"+")},le.fn.extend({serialize:function(){return le.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=le.prop(this,"elements");return e?le.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!le(this).is(":disabled")&&Zt.test(this.nodeName)&&!Qt.test(e)&&(this.checked||!Oe.test(e))}).map(function(e,t){var n=le(this).val();return null==n?null:le.isArray(n)?le.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,value:n.replace(Yt,"\r\n")}}).get()}}),le.ajaxSettings.xhr=void 0!==o.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&G()||Y()}:G;var en=0,tn={},nn=le.ajaxSettings.xhr();o.attachEvent&&o.attachEvent("onunload",function(){for(var e in tn)tn[e](void 0,!0)}),se.cors=!!nn&&"withCredentials"in nn,(nn=se.ajax=!!nn)&&le.ajaxTransport(function(e){if(!e.crossDomain||se.cors){var t;return{send:function(n,r){var i,o=e.xhr(),a=++en;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,u,l;if(t&&(i||4===o.readyState))if(delete tn[a],t=void 0,o.onreadystatechange=le.noop,i)4!==o.readyState&&o.abort();else{l={},s=o.status,"string"==typeof o.responseText&&(l.text=o.responseText);try{u=o.statusText}catch(e){u=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=l.text?200:404}l&&r(s,u,l,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=tn[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),le.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return le.globalEval(e),e}}}),le.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),le.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=be.head||le("head")[0]||be.documentElement;return{send:function(r,i){t=be.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var rn=[],on=/(=)\?(?=&|$)|\?\?/;le.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||le.expando+"_"+Ot++;return this[e]=!0,e}}),le.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,a,s=!1!==e.jsonp&&(on.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(e.data)&&"data");return s||"jsonp"===e.dataTypes[0]?(r=e.jsonpCallback=le.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(on,"$1"+r):!1!==e.jsonp&&(e.url+=(Mt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||le.error(r+" was not called"),a[0]},e.dataTypes[0]="json",i=o[r],o[r]=function(){a=arguments},n.always(function(){o[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,rn.push(r)),a&&le.isFunction(i)&&i(a[0]),a=i=void 0}),"script"):void 0}),le.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||be;var r=ge.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=le.buildFragment([e],t,i),i&&i.length&&le(i).remove(),le.merge([],r.childNodes))};var an=le.fn.load;le.fn.load=function(e,t,n){if("string"!=typeof e&&an)return an.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=le.trim(e.slice(s,e.length)),e=e.slice(0,s)),le.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&le.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?le("<div>").append(le.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},le.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){le.fn[t]=function(e){return this.on(t,e)}}),le.expr.filters.animated=function(e){return le.grep(le.timers,function(t){return e===t.elem}).length};var sn=o.document.documentElement;le.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=le.css(e,"position"),f=le(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=le.css(e,"top"),u=le.css(e,"left"),l=("absolute"===c||"fixed"===c)&&le.inArray("auto",[o,u])>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),le.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},le.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){le.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,le.contains(t,i)?(typeof i.getBoundingClientRect!==_e&&(r=i.getBoundingClientRect()),n=Q(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===le.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),le.nodeName(e[0],"html")||(n=e.offset()),n.top+=le.css(e[0],"borderTopWidth",!0),n.left+=le.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-le.css(r,"marginTop",!0),left:t.left-n.left-le.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||sn;e&&!le.nodeName(e,"html")&&"static"===le.css(e,"position");)e=e.offsetParent;return e||sn})}}),le.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);le.fn[e]=function(r){return Le(this,function(e,r,i){var o=Q(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?le(o).scrollLeft():i,n?i:le(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),le.each(["top","left"],function(e,t){le.cssHooks[t]=D(se.pixelPosition,function(e,n){return n?(n=ot(e,t),st.test(n)?le(e).position()[t]+"px":n):void 0})}),le.each({Height:"height",Width:"width"},function(e,t){le.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){le.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Le(this,function(t,n,r){var i;return le.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?le.css(t,n,a):le.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),le.fn.size=function(){return this.length},le.fn.andSelf=le.fn.addBack,n(495)&&(r=[],void 0!==(i=function(){return le}.apply(t,r))&&(e.exports=i));var un=o.jQuery,ln=o.$;return le.noConflict=function(e){return o.$===le&&(o.$=ln),e&&o.jQuery===le&&(o.jQuery=un),le},typeof a===_e&&(o.jQuery=o.$=le),le})},463:function(e,t,n){n(430),n(385);(function(){var e,r=this,i=r.Backbone,o=[],a=o.push,s=o.slice,u=o.splice;e=t,e.VERSION="1.0.0";var l=r._;l||(l=n(385)),e.$=r.jQuery||r.Zepto||r.ender||r.$,e.noConflict=function(){return r.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var c=e.Events={on:function(e,t,n){return d(this,"on",e,[t,n])&&t?(this._events||(this._events={}),(this._events[e]||(this._events[e]=[])).push({callback:t,context:n,ctx:n||this}),this):this},once:function(e,t,n){if(!d(this,"once",e,[t,n])||!t)return this;var r=this,i=l.once(function(){r.off(e,i),t.apply(this,arguments)});return i._callback=t,this.on(e,i,n)},off:function(e,t,n){var r,i,o,a,s,u,c,f;if(!this._events||!d(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;for(a=e?[e]:l.keys(this._events),s=0,u=a.length;s<u;s++)if(e=a[s],o=this._events[e]){if(this._events[e]=r=[],t||n)for(c=0,f=o.length;c<f;c++)i=o[c],(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context)&&r.push(i);r.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=s.call(arguments,1);if(!d(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&h(n,t),r&&h(r,arguments),this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var i=!t&&!n;"object"==typeof t&&(n=this),e&&((r={})[e._listenerId]=e);for(var o in r)r[o].off(t,n,this),i&&delete this._listeners[o];return this}},f=/\s+/,d=function(e,t,n,r){if(!n)return!0;if("object"==typeof n){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(f.test(n)){for(var o=n.split(f),a=0,s=o.length;a<s;a++)e[t].apply(e,[o[a]].concat(r));return!1}return!0},h=function(e,t){var n,r=-1,i=e.length,o=t[0],a=t[1],s=t[2];switch(t.length){case 0:for(;++r<i;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a);return;case 3:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a,s);return;default:for(;++r<i;)(n=e[r]).callback.apply(n.ctx,t)}},p={listenTo:"on",listenToOnce:"once"};l.each(p,function(e,t){c[t]=function(t,n,r){return(this._listeners||(this._listeners={}))[t._listenerId||(t._listenerId=l.uniqueId("l"))]=t,"object"==typeof n&&(r=this),t[e](n,r,this),this}}),c.bind=c.on,c.unbind=c.off,l.extend(e,c);var v=e.Model=function(e,t){var n,r=e||{};t||(t={}),this.cid=l.uniqueId("c"),this.attributes={},l.extend(this,l.pick(t,g)),t.parse&&(r=this.parse(r,t)||{}),(n=l.result(this,"defaults"))&&(r=l.defaults({},r,n)),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)},g=["url","urlRoot","collection"];l.extend(v.prototype,c,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return l.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return l.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,n){var r,i,o,a,s,u,c,f;if(null==e)return this;if("object"==typeof e?(i=e,n=t):(i={})[e]=t,n||(n={}),!this._validate(i,n))return!1;o=n.unset,s=n.silent,a=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=l.clone(this.attributes),this.changed={}),f=this.attributes,c=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(r in i)t=i[r],l.isEqual(f[r],t)||a.push(r),l.isEqual(c[r],t)?delete this.changed[r]:this.changed[r]=t,o?delete f[r]:f[r]=t;if(!s){a.length&&(this._pending=!0);for(var d=0,h=a.length;d<h;d++)this.trigger("change:"+a[d],this,f[a[d]],n)}if(u)return this;if(!s)for(;this._pending;)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,l.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,l.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!l.isEmpty(this.changed):l.has(this.changed,e)},changedAttributes:function(e){if(!e)return!!this.hasChanged()&&l.clone(this.changed);var t,n=!1,r=this._changing?this._previousAttributes:this.attributes;for(var i in e)l.isEqual(r[i],t=e[i])||((n||(n={}))[i]=t);return n},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return l.clone(this._previousAttributes)},fetch:function(e){e=e?l.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r){if(!t.set(t.parse(r,e),e))return!1;n&&n(t,r,e),t.trigger("sync",t,r,e)},R(this,e),this.sync("read",this,e)},save:function(e,t,n){var r,i,o,a=this.attributes;if(null==e||"object"==typeof e?(r=e,n=t):(r={})[e]=t,r&&(!n||!n.wait)&&!this.set(r,n))return!1;if(n=l.extend({validate:!0},n),!this._validate(r,n))return!1;r&&n.wait&&(this.attributes=l.extend({},a,r)),void 0===n.parse&&(n.parse=!0);var s=this,u=n.success;return n.success=function(e){s.attributes=a;var t=s.parse(e,n);if(n.wait&&(t=l.extend(r||{},t)),l.isObject(t)&&!s.set(t,n))return!1;u&&u(s,e,n),s.trigger("sync",s,e,n)},R(this,n),i=this.isNew()?"create":n.patch?"patch":"update","patch"===i&&(n.attrs=r),o=this.sync(i,this,n),r&&n.wait&&(this.attributes=a),o},destroy:function(e){e=e?l.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(i){(e.wait||t.isNew())&&r(),n&&n(t,i,e),t.isNew()||t.trigger("sync",t,i,e)},this.isNew())return e.success(),!1;R(this,e);var i=this.sync("delete",this,e);return e.wait||r(),i},url:function(){var e=l.result(this,"urlRoot")||l.result(this.collection,"url")||P();return this.isNew()?e:e+("/"===e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(e){return this._validate({},l.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=l.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;return!n||(this.trigger("invalid",this,n,l.extend(t||{},{validationError:n})),!1)}});var m=["keys","values","pairs","invert","pick","omit"];l.each(m,function(e){v.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.attributes),l[e].apply(l,t)}});var y=e.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,l.extend({silent:!0},t))},b={add:!0,remove:!0,merge:!0},x={add:!0,merge:!1,remove:!1};l.extend(y.prototype,c,{model:v,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return e.sync.apply(this,arguments)},add:function(e,t){return this.set(e,l.defaults(t||{},x))},remove:function(e,t){e=l.isArray(e)?e.slice():[e],t||(t={});var n,r,i,o;for(n=0,r=e.length;n<r;n++)(o=this.get(e[n]))&&(delete this._byId[o.id],delete this._byId[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,t.silent||(t.index=i,o.trigger("remove",o,this,t)),this._removeReference(o));return this},set:function(e,t){t=l.defaults(t||{},b),t.parse&&(e=this.parse(e,t)),l.isArray(e)||(e=e?[e]:[]);var n,r,i,o,s,c=t.at,f=this.comparator&&null==c&&!1!==t.sort,d=l.isString(this.comparator)?this.comparator:null,h=[],p=[],v={};for(n=0,r=e.length;n<r;n++)(i=this._prepareModel(e[n],t))&&((o=this.get(i))?(t.remove&&(v[o.cid]=!0),t.merge&&(o.set(i.attributes,t),f&&!s&&o.hasChanged(d)&&(s=!0))):t.add&&(h.push(i),i.on("all",this._onModelEvent,this),this._byId[i.cid]=i,null!=i.id&&(this._byId[i.id]=i)));if(t.remove){for(n=0,r=this.length;n<r;++n)v[(i=this.models[n]).cid]||p.push(i);p.length&&this.remove(p,t)}if(h.length&&(f&&(s=!0),this.length+=h.length,null!=c?u.apply(this.models,[c,0].concat(h)):a.apply(this.models,h)),s&&this.sort({silent:!0}),t.silent)return this;for(n=0,r=h.length;n<r;n++)(i=h[n]).trigger("add",i,this,t);return s&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return t.previousModels=this.models,this._reset(),this.add(e,l.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,l.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,l.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){if(null!=e)return this._byId[null!=e.id?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return l.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),l.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(l.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,n){t||(t=this.comparator);var r=l.isFunction(t)?t:function(e){return e.get(t)};return l.sortedIndex(this.models,e,r,n)},pluck:function(e){return l.invoke(this.models,"get",e)},fetch:function(e){e=e?l.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,n=this;return e.success=function(r){var i=e.reset?"reset":"set";n[i](r,e),t&&t(n,r,e),n.trigger("sync",n,r,e)},R(this,e),this.sync("read",this,e)},create:function(e,t){if(t=t?l.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var n=this,r=t.success;return t.success=function(i){t.wait&&n.add(e,t),r&&r(e,i,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof v)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var n=new this.model(e,t);return n._validate(e,t)?n:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){("add"!==e&&"remove"!==e||n===this)&&("destroy"===e&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))}});var w=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];l.each(w,function(e){y.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.models),l[e].apply(l,t)}});var T=["groupBy","countBy","sortBy"];l.each(T,function(e){y.prototype[e]=function(t,n){var r=l.isFunction(t)?t:function(e){return e.get(t)};return l[e](this.models,r,n)}});var E=e.View=function(e){this.cid=l.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},k=/^(\S+)\s*(.*)$/,C=["model","collection","el","id","attributes","className","tagName","events"];l.extend(E.prototype,c,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],!1!==n&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=l.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var n=e[t];if(l.isFunction(n)||(n=this[e[t]]),n){var r=t.match(k),i=r[1],o=r[2];n=l.bind(n,this),i+=".delegateEvents"+this.cid,""===o?this.$el.on(i,n):this.$el.on(i,o,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=l.extend({},l.result(this,"options"),e)),l.extend(this,l.pick(e,C)),this.options=e},_ensureElement:function(){if(this.el)this.setElement(l.result(this,"el"),!1);else{var t=l.extend({},l.result(this,"attributes"));this.id&&(t.id=l.result(this,"id")),this.className&&(t.class=l.result(this,"className"));var n=e.$("<"+l.result(this,"tagName")+">").attr(t);this.setElement(n,!1)}}}),e.sync=function(t,n,r){var i=N[t];l.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var o={type:i,dataType:"json"};if(r.url||(o.url=l.result(n,"url")||P()),null!=r.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(r.attrs||n.toJSON(r))),r.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),r.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){o.type="POST",r.emulateJSON&&(o.data._method=i);var a=r.beforeSend;r.beforeSend=function(e){if(e.setRequestHeader("X-HTTP-Method-Override",i),a)return a.apply(this,arguments)}}"GET"===o.type||r.emulateJSON||(o.processData=!1),"PATCH"!==o.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var s=r.xhr=e.ajax(l.extend(o,r));return n.trigger("request",n,s,r),s};var N={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var _=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},S=/\((.*?)\)/g,A=/(\(\?)?:\w+/g,j=/\*\w+/g,D=/[\-{}\[\]+?.,\\\^$|#\s]/g;l.extend(_.prototype,c,{initialize:function(){},route:function(t,n,r){l.isRegExp(t)||(t=this._routeToRegExp(t)),l.isFunction(n)&&(r=n,n=""),r||(r=this[n]);var i=this;return e.history.route(t,function(o){var a=i._extractParameters(t,o);r&&r.apply(i,a),i.trigger.apply(i,["route:"+n].concat(a)),i.trigger("route",n,a),e.history.trigger("route",i,n,a)}),this},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=l.result(this,"routes");for(var e,t=l.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(D,"\\$&").replace(S,"(?:$1)?").replace(A,function(e,t){return t?e:"([^/]+)"}).replace(j,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return l.map(n,function(e){return e?decodeURIComponent(e):null})}});var H=e.History=function(){this.handlers=[],l.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},L=/^[#\/]|\s+$/g,O=/^\/+|\/+$/g,M=/msie [\w.]+/,F=/\/$/;H.started=!1,l.extend(H.prototype,c,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(F,"");e.indexOf(n)||(e=e.substr(n.length))}else e=this.getHash();return e.replace(L,"")},start:function(t){if(H.started)throw new Error("Backbone.history has already been started");H.started=!0,this.options=l.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment(),r=document.documentMode,i=M.exec(navigator.userAgent.toLowerCase())&&(!r||r<=7);this.root=("/"+this.root+"/").replace(O,"/"),i&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(n)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;var o=this.location,a=o.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&o.hash&&(this.fragment=this.getHash().replace(L,""),this.history.replaceState({},document.title,this.root+this.fragment+o.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),H.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();if(t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e);return l.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0})},navigate:function(e,t){if(!H.started)return!1;if(t&&!0!==t||(t={trigger:t}),e=this.getFragment(e||""),this.fragment!==e){this.fragment=e;var n=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)}},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),e.history=new H;var q=function(e,t){var n,r=this;n=e&&l.has(e,"constructor")?e.constructor:function(){return r.apply(this,arguments)},l.extend(n,r,t);var i=function(){this.constructor=n};return i.prototype=r.prototype,n.prototype=new i,e&&l.extend(n.prototype,e),n.__super__=r.prototype,n};v.extend=y.extend=_.extend=E.extend=H.extend=q;var P=function(){throw new Error('A "url" property or function must be specified')},R=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}}}).call(this),e.exports=Backbone},495:function(e,t){(function(t){e.exports=t}).call(t,{})},618:function(e,t,n){n(430),n(463),e.exports=n(385)}},[618]);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
