__do__loader__([59],{182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.fn.marquee=function(t){return this.each(function(){var n,a,r,i,s=e.extend({},e.fn.marquee.defaults,t),o=e(this),u=o.width(),d=3,l="animation-play-state",f=!1,m="number"===typeof s.column,p=o.find(".blocklist__item__outer").length,c=m?100/s.column*p:0,g=m?Math.floor(100/p):0,h=m?"%":"px",v=m?Math.ceil(100/c):1,y=function(e,t,n){for(var a=["webkit","moz","MS","o",""],r=0;r<a.length;r++)a[r]||(t=t.toLowerCase()),e.addEventListener(a[r]+t,n,!1)},_=function(){o.timer=setTimeout(x,s.delayBeforeStart)},w={pause:function(){f&&s.allowCss3Support?n.css(l,"paused"):e.fn.pause&&n.pause(),o.data("runningStatus","paused"),o.trigger("paused")},resume:function(){f&&s.allowCss3Support?n.css(l,"running"):e.fn.resume&&n.resume(),o.data("runningStatus","resumed"),o.trigger("resumed")},toggle:function(){w["resumed"==o.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(o.timer),o.find("*").addBack().off(),o.removeAttr("style").html(o.find(".js-marquee:first").html()),o.find(".blocklist__item__outer").removeAttr("style")}};if("string"!==typeof t){o.wrapInner('<div class="js-marquee"></div>');var S=o.find(".js-marquee");if(S.css({"margin-right":s.gap,float:"left"}),m?(i=(100/(v+1)).toFixed(2),o.find(".blocklist__item__outer").css({"flex-basis":g+h,"flex-grow":1}),s.duration=p/s.column*s.duration):(o.css("width","100000px"),i=S.width(),o.css("width",""),v=Math.ceil(u/i),s.duration=i/u*s.duration),v!==1/0)for(var b=0;b<v;b++)S.clone(!0,!0).appendTo(o);if(o.wrapInner('<div class="js-marquee-wrapper"></div>'),n=o.find(".js-marquee-wrapper"),r=m?c*(v+1):1e5,n.css("width",r+h),o.find(".js-marquee").css("width",i+h),s.allowCss3Support){var q=document.body||document.createElement("div"),O="marqueeAnimation-"+Math.floor(1e7*Math.random()),j="Webkit Moz O ms Khtml".split(" "),k="animation",C="",A="";if(void 0!==q.style.animation&&(A="@keyframes "+O+" ",f=!0),!1===f)for(b=0;b<j.length;b++)if(void 0!==q.style[j[b]+"AnimationName"]){var M="-"+j[b].toLowerCase()+"-";k=M+k,l=M+l,A="@"+M+"keyframes "+O+" ",f=!0;break}f&&(C=O+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s infinite "+s.css3easing,o.data("css3AnimationIsSupported",!0))}s.duplicated&&s.startVisible&&n.css("transform","translateX(0)");var x=function(){if(s.duplicated&&(1===d?(s._originalDuration=s.duration,s.duration="left"==s.direction?s.duration+r/(i/s.duration):2*s.duration,C&&(C=O+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s "+s.css3easing),d++):2===d&&(s.duration=s._originalDuration,C&&(O+="0",A=e.trim(A)+"0 ",C=O+" "+s.duration/1e3+"s 0s infinite "+s.css3easing),d++)),d>2&&n.css("transform","translateX("+("left"==s.direction?0:"-"+i+h)+")"),a={transform:"translateX("+("left"==s.direction?"-"+i+h:0)+")"},o.trigger("beforeStarting"),f){n.css(k,C);var t=A+" { 100%  "+function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.push(),"{"+t.join(",")+"}"}(a)+"}",u=n.find("style");0!==u.length?u.filter(":last").html(t):e("head").append("<style>"+t+"</style>"),y(n[0],"AnimationIteration",function(){o.trigger("finished")}),y(n[0],"AnimationEnd",function(){x(),o.trigger("finished")})}else n.animate(a,s.duration,s.easing,function(){o.trigger("finished"),s.pauseOnCycle?_():x()});o.data("runningStatus","resumed")};o.on("pause",w.pause),o.on("resume",w.resume),s.pauseOnHover&&(s.playOnHover?(o.on("mouseleave",w.pause),o.on("mouseenter",w.resume)):(o.on("mouseenter",w.pause),o.on("mouseleave",w.resume))),f&&s.allowCss3Support?(x(),s.pauseOnHover&&s.playOnHover&&o.trigger("pause")):_()}else e.isFunction(w[t])&&(n||(n=o.find(".js-marquee-wrapper")),!0===o.data("css3AnimationIsSupported")&&(f=!0),w[t]())})},e.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:0,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,playOnHover:!1,startVisible:!1}}}});