(function(){function a(){var c=navigator.userAgent,b=navigator.platform;if(/Win(16|9[x58]|NT( [1234]| 5\.0| [^0-9]|[^ -]|$))/.test(c)||/Windows ([MC]E|9[x58]|3\.1|4\.10|NT( [1234]| 5\.0| [^0-9]|[^ ]|$))/.test(c)||/Windows_95/.test(c)){return"oldwin"}if(c.indexOf("MSIE 6.0")!==-1&&c.indexOf("Windows NT 5.1")!==-1&&c.indexOf("SV1")===-1){return"oldwin"}if(b.indexOf("Win32")!==-1||b.indexOf("Win64")!==-1){return"windows"}if(/android/i.test(c)){return"android"}if(/armv[6-7]l/.test(b)){return"android"}if(b.indexOf("Linux")!==-1){return"linux"}if(b.indexOf("MacPPC")!==-1){return"oldmac"}if(/Mac OS X 10.[0-5]/.test(c)){return"oldmac"}if(b.indexOf("iPhone")!==-1||b.indexOf("iPad")!==-1||b.indexOf("iPod")!==-1){return"ios"}if(c.indexOf("Mac OS X")!==-1){return"osx"}if(c.indexOf("MSIE 5.2")!==-1){return"oldmac"}if(b.indexOf("Mac")!==-1){return"oldmac"}if(navigator.platform===""&&navigator.userAgent.indexOf("Firefox")!==-1&&navigator.userAgent.indexOf("Mobile")!==-1){return"fxos"}return"other"}(function(){var b=document.documentElement;window.site={platform:a()};if(window.site.platform!=="windows"){b.className=b.className.replace("windows",window.site.platform)}b.className=b.className.replace(/\bno-js\b/,"js")})()})();
