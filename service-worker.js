"use strict";var precacheConfig=[["/index.html","aea016eeeb193a67a798f83069968348"],["/static/css/main.15e36691.css","65fc5286b2b84b361eb6f10061d85861"],["/static/js/main.32a27d21.js","f05eb45eb222fb752914f898b2b5e480"],["/static/media/180726_Francesca Sadikin_Resume.b899f372.jpg","b899f37247604c5043c5b39fc533fe47"],["/static/media/404-03.0d9c03b7.png","0d9c03b7b67b095924a86e7298febbd4"],["/static/media/chingu-checkin.b8a787ca.png","b8a787ca315b6552a538c66a88d758c7"],["/static/media/chingu-home.ad55a0d1.png","ad55a0d141ecfa90061962355c83be48"],["/static/media/chingu-landingImage.1bb9cfd5.JPG","1bb9cfd59d3ae4aa36837cc1f465d9c4"],["/static/media/chingu-registration.1576c24d.JPG","1576c24d92456984da94010192b4d08c"],["/static/media/chingu-user-profile.9d250953.png","9d2509539768f30d1923a3b9993bac28"],["/static/media/chingu-voyage-application-1.4030fe97.png","4030fe97a7781894a375c4f2f523e834"],["/static/media/chingu-voyage-application-2.f6af4ba2.png","f6af4ba27b37e188c36339257da21009"],["/static/media/chingu-voyage.ba20656e.png","ba20656e6b3d8e974fd7268d821cb2ae"],["/static/media/chingu.66836cbf.png","66836cbf7d4e970194731eac6e92b451"],["/static/media/project-match-main.307312c4.png","307312c4bd1e4dc96a595143c5399f74"],["/static/media/project-match-project-portal.d3282c3a.png","d3282c3a98a35007bd85770efa56ad9b"],["/static/media/project-match-project-showcase.9dd2ee32.png","9dd2ee3288f70b049afa60c39d69034c"],["/static/media/project-match-project.55c5c8cd.png","55c5c8cd69b7ea48764542ff43737292"],["/static/media/project-match-revision-Portal.194bf6b2.png","194bf6b2a766ccc402b4367a1efa6a72"],["/static/media/project-match-user-profile.e2fcd900.png","e2fcd900d16fa6544078d96dd241786b"],["/static/media/project-match.ebab4ea5.png","ebab4ea530b2bfe915ce627fb70a6edf"],["/static/media/turtleTab-feature1.ac6ca761.png","ac6ca761a9f5286aafe5883f64021957"],["/static/media/turtleTab-feature2.f966a768.png","f966a768a052a94e66fc831417dec566"],["/static/media/turtleTab-main.fa3f0b94.png","fa3f0b94adde3f3d79c9238ac54a1ff0"],["/static/media/turtleTab-search.c2f16f1d.png","c2f16f1dfc425c96782db30ef5bb45e1"],["/static/media/turtleTab.7d59b0da.png","7d59b0daafdf1d8a41212c72732f9b04"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});