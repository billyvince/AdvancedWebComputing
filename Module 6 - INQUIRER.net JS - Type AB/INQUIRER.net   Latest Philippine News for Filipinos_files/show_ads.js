(function(){var n=this,aa=function(a,b){var e=a.split("."),d=n;e[0]in d||!d.execScript||d.execScript("var "+e[0]);for(var c;e.length&&(c=e.shift());)e.length||void 0===b?d=d[c]?d[c]:d[c]={}:d[c]=b},ba=function(a,b,e){return a.call.apply(a.bind,arguments)},ca=function(a,b,e){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,
arguments)}},p=function(a,b,e){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return p.apply(null,arguments)},da=function(a,b){var e=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,e);return a.apply(this,b)}};var r=(new Date).getTime();var u=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},w=function(a){return/^true$/.test(a)?!0:!1},ea=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,x=function(a,b){if(!a)return b;var e=a.match(ea);return e?e[0]:b};var fa=u("0.15"),ga=u("0.005"),ha=u("1.0"),ia=u("0.005"),ja=u("0.001"),ka=u("0.0");var la=w("false"),ma=w("false"),na=w("false"),oa=w("false");var pa=function(){return x("","pagead2.googlesyndication.com")};var qa=/&/g,ra=/</g,sa=/>/g,ta=/\"/g,A={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},D={"'":"\\'"};var E=document,F=window,G,ua=null,H=E.getElementsByTagName("script");H&&H.length&&(ua=H[H.length-1].parentNode);G=ua;pa();var I=function(a,b){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(null,a[e],e,a)},J=function(a){return!!a&&"function"==typeof a&&!!a.call},va=function(a,b){if(!(2>arguments.length))for(var e=1,d=arguments.length;e<d;++e)a.push(arguments[e])};function wa(a,b){K(a,"load",b)}
var K=function(a,b,e,d){return a.addEventListener?(a.addEventListener(b,e,d||!1),!0):a.attachEvent?(a.attachEvent("on"+b,e),!0):!1},L=function(a,b,e,d){e=p(d,e);return K(a,b,e,void 0)?e:null},M=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)},xa=function(){var a=window;"google_onload_fired"in a||(a.google_onload_fired=!1,wa(a,function(){a.google_onload_fired=!0}))},N=function(a,b){if(!(1E-4>Math.random())){var e=Math.random();if(e<b)return a[Math.floor(e/
b*a.length)]}return null},O=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var ya=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\./i,za=/Android|Opera/;var P=null,Aa=function(){if(!P){for(var a=window,b=a,e=0;a!=a.parent;)if(a=a.parent,e++,O(a))b=a;else break;P=b}return P};var Q=function(a,b,e){e||(e=oa?"https":"http");return[e,"://",a,b].join("")};var Ba=function(){},R=function(a,b,e){switch(typeof b){case "string":Ca(b,e);break;case "number":e.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":e.push(b);break;case "undefined":e.push("null");break;case "object":if(null==b){e.push("null");break}if(b instanceof Array){var d=b.length;e.push("[");for(var c="",f=0;f<d;f++)e.push(c),R(a,b[f],e),c=",";e.push("]");break}e.push("{");d="";for(c in b)b.hasOwnProperty(c)&&(f=b[c],"function"!=typeof f&&(e.push(d),Ca(c,e),e.push(":"),R(a,f,e),d=
","));e.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},S={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ca=function(a,b){b.push('"');b.push(a.replace(Da,function(a){if(a in S)return S[a];var b=a.charCodeAt(0),c="\\u";16>b?c+="000":256>b?c+="00":4096>b&&(c+="0");return S[a]=c+b.toString(16)}));b.push('"')};var T="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_sui google_skip google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Ea=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];I(a,function(a,d){if(null!=a){var c;try{var f=[];R(new Ba,a,f);c=f.join("")}catch(m){}c&&va(b,d,"=",c,";")}});return b.join("")};var Fa=/\.((google(|groups|mail|images|print))|gmail)\./,Ga=function(a){var b=Fa.test(a.location.host);return!(!a.postMessage||!a.localStorage||!a.JSON||b)};var U=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{}});this.l=a.google_iframe_oncopy},Ha;var V="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){w.location.replace(h)}}";
/[&<>\"]/.test(V)&&(-1!=V.indexOf("&")&&(V=V.replace(qa,"&amp;")),-1!=V.indexOf("<")&&(V=V.replace(ra,"&lt;")),-1!=V.indexOf(">")&&(V=V.replace(sa,"&gt;")),-1!=V.indexOf('"')&&(V=V.replace(ta,"&quot;")));Ha=V;U.prototype.set=function(a,b){this.l.handlers[a]=b;this.b.addEventListener&&!/MSIE/.test(navigator.userAgent)&&this.b.addEventListener("load",p(this.m,this,a),!1)};U.prototype.m=function(a){a=this.b.document.getElementById(a);var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};var Ia={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type"},W=function(a,b,e,d){var c=p(b,n,a);b=p(b,n,"onerror::"+a);a=window.onerror;window.onerror=b;try{e()}catch(f){e=f.toString();if(f.stack){b=f.stack;var m=e;try{-1==b.indexOf(m)&&(b=m+"\n"+b);for(var h;b!=h;)h=b,b=b.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");e=b.replace(/\n */g,"\n")}catch(g){e=m}}h="";f.fileName&&(h=f.fileName);b=-1;f.lineNumber&&(b=
f.lineNumber);var l;o:{try{l=d?d():"";break o}catch(k){}l=""}if(!c(e,h,b,l))throw f;}window.onerror=a};aa("google_protectAndRun",W);
var X=function(a,b,e,d,c){a={jscb:la?1:0,jscd:ma?1:0,context:a,msg:b.substring(0,512),eid:c&&c.substring(0,40),file:e,line:d.toString(),url:E.URL.substring(0,512),ref:E.referrer.substring(0,512)};Ja(a);0.01>Math.random()&&(a="/pagead/gen_204?id=jserror"+Ka(a),a=Q(x("","pagead2.googlesyndication.com"),a),a=a.substring(0,2E3),F.google_image_requests||(F.google_image_requests=[]),b=F.document.createElement("img"),b.src=a,F.google_image_requests.push(b));return!na};
aa("google_handleError",X);var Ja=function(a){var b=a||{};I(Ia,function(a,d){b[d]=F[a]})},La=function(a,b){return da(W,a,X,b,void 0)},Ka=function(a){var b="";I(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var Y,Z=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null},Ma=function(a,b){this.k=a;this.win=b};Z.prototype.o=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.g(a,b):(this.a=2,this.f(new Ma(a,window)))};Z.prototype.g=function(a,b){this.c.push(new Ma(a,b||this.b));Na(this)};Z.prototype.p=function(a){this.a=1;if(a){var b=La("sjr::timeout",p(this.e,this));this.d=this.b.setTimeout(b,a)}};
Z.prototype.e=function(){1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);Na(this)};Z.prototype.q=function(){return!0};Z.prototype.nq=Z.prototype.o;Z.prototype.nqa=Z.prototype.g;Z.prototype.al=Z.prototype.p;Z.prototype.rl=Z.prototype.e;Z.prototype.sz=Z.prototype.q;var Na=function(a){var b=La("sjr::tryrun",p(a.n,a));a.b.setTimeout(b,0)};
Z.prototype.n=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=La("sjr::run",p(this.f,this,a));a.win.setTimeout(b,0);Na(this)}};Z.prototype.f=function(a){this.a=0;a.k()};
var Oa=function(a){try{return a.sz()}catch(b){return!1}},Pa=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Oa(a)&&J(a.nq)&&J(a.nqa)&&J(a.al)&&J(a.rl)},Qa=function(){if(Y&&Oa(Y))return Y;var a=Aa(),b=a.google_jobrunner;return Pa(b)?Y=b:a.google_jobrunner=Y=new Z(a)},Ra=function(a,b){Qa().nq(a,b)},Sa=function(a,b){Qa().nqa(a,b)};var Ta=function(){var a="script";return["<",a,' src="',Q(pa(),"/pagead/js/r20130730/r20130206/show_ads_impl.js",""),'"></',a,">"].join("")},Ua=function(a,b,e,d){return function(){var c=!1;d&&Qa().al(3E4);try{if(O(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,m=f.document;m.body&&m.body.firstChild||(m.open(),
f.google_async_iframe_close=!0,m.write(e))}else{var h=a.document.getElementById(b).contentWindow,g;f=e;f=String(f);if(f.quote)g=f.quote();else{for(var m=['"'],l=0;l<f.length;l++){var k=f.charAt(l),B=k.charCodeAt(0),y=m,z=l+1,t;if(!(t=A[k])){var C;if(31<B&&127>B)C=k;else{var s=k;if(s in D)C=D[s];else if(s in A)C=D[s]=A[s];else{var q=s,v=s.charCodeAt(0);if(31<v&&127>v)q=s;else{if(256>v){if(q="\\x",16>v||256<v)q+="0"}else q="\\u",4096>v&&(q+="0");q+=v.toString(16).toUpperCase()}C=D[s]=q}}t=C}y[z]=t}m.push('"');
g=m.join("")}h.location.replace("javascript:"+g)}c=!0}catch(cb){h=Aa().google_jobrunner,Pa(h)&&h.rl()}c&&(new U(a)).set(b,Ua(a,b,e,!1))}},Va=function(a){var b=["<iframe"];I(a,function(a,d){b.push(" "+d+'="'+(null==a?"":a)+'"')});b.push("></iframe>");return b.join("")},Wa=function(a,b,e,d){d=d?'"':"";var c=d+"0"+d;a.width=d+b+d;a.height=d+e+d;a.frameborder=c;a.marginwidth=c;a.marginheight=c;a.vspace=c;a.hspace=c;a.allowtransparency=d+"true"+d;a.scrolling=d+"no"+d},Xa=Math.floor(1E6*Math.random()),
Ya=function(a){for(var b=a.data.split("\n"),e={},d=0;d<b.length;d++){var c=b[d].indexOf("=");-1!=c&&(e[b[d].substr(0,c)]=b[d].substr(c+1))}b=e[3];if(e[1]==Xa&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=e,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}};var Za=function(a,b,e){this.x=a;this.y=b;this.z=e},$a=function(a,b,e){this.beta=a;this.gamma=b;this.alpha=e},ab=function(a,b){this.deviceAccelerationWithGravity=this.deviceAccelerationWithoutGravity=null;this.deviceMotionEventCallbacks=[];this.deviceOrientation=null;this.deviceOrientationEventCallbacks=[];this.isDeviceOrientationEventListenerRegistered=this.isDeviceMotionEventListenerRegistered=this.didDeviceOrientationCallbacksTimeoutExpire=this.didDeviceMotionCallbacksTimeoutExpire=!1;this.registeredMozOrientationEventListener=
this.registeredDeviceOrientationEventListener=this.registeredDeviceMotionEventListener=null;this.sensorsExperiment=b;this.stopTimeStamp=this.startTimeStamp=null;this.win=a},$=function(a){this.a=a;this.a.win.DeviceOrientationEvent?(this.a.registeredDeviceOrientationEventListener=L(this.a.win,"deviceorientation",this,this.i),this.a.isDeviceOrientationEventListenerRegistered=!0):this.a.win.OrientationEvent&&(this.a.registeredMozOrientationEventListener=L(this.a.win,"MozOrientation",this,this.j),this.a.isDeviceOrientationEventListenerRegistered=
!0);this.a.win.DeviceMotionEvent&&(this.a.registeredDeviceMotionEventListener=L(this.a.win,"devicemotion",this,this.h),this.a.isDeviceMotionEventListenerRegistered=!0)};
$.prototype.h=function(a){a.acceleration&&(this.a.deviceAccelerationWithoutGravity=new Za(a.acceleration.x,a.acceleration.y,a.acceleration.z));a.accelerationIncludingGravity&&(this.a.deviceAccelerationWithGravity=new Za(a.accelerationIncludingGravity.x,a.accelerationIncludingGravity.y,a.accelerationIncludingGravity.z));bb(this.a.deviceMotionEventCallbacks);M(this.a.win,"devicemotion",this.a.registeredDeviceMotionEventListener)};
$.prototype.i=function(a){this.a.deviceOrientation=new $a(a.beta,a.gamma,a.alpha);bb(this.a.deviceOrientationEventCallbacks);M(this.a.win,"deviceorientation",this.a.registeredDeviceOrientationEventListener)};$.prototype.j=function(a){this.a.deviceOrientation=new $a(-90*a.y,90*a.x,null);bb(this.a.deviceOrientationEventCallbacks);M(this.a.win,"MozOrientation",this.a.registeredMozOrientationEventListener)};var bb=function(a){for(var b=0;b<a.length;++b)a[b]();a.length=0};W("sa::main",X,function(){xa();if(!window.google_top_experiment){var a=window;if(2!==(a.top==a?0:O(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=F.top.frames.google_top_static_frame?!0:!1}catch(e){b=!1}if(b){if(window.google_top_experiment=N(["jp_c","jp_zl"],fa)||"jp_wfpmr","jp_zl"===window.google_top_experiment||"jp_wfpmr"===window.google_top_experiment){K(window,"message",Ya);window.google_top_js_status=3;a={0:"google_loc_request",1:Xa};b=[];for(var d in a)b.push(d+
"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}var c;c=c||window;d=!1;c.navigator&&c.navigator.userAgent&&(c=c.navigator.userAgent,d=0!=c.indexOf("Opera")&&-1!=c.indexOf("WebKit")&&-1!=c.indexOf("Mobile"));if(d){c=window;if(d=!/Android/.test(c.navigator.userAgent))d=c.google_unique_id,d=0==("number"==typeof d?d:0)&&!c.google_sensors;d&&(d=null,c.google_top_experiment&&"jp_c"!=c.google_top_experiment||(d=N(["ds_c","ds_zl","ds_wfea"],
ka)),d&&(c.google_sensors=new ab(c,d),"ds_c"!=d&&new $(c.google_sensors)))}c=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||c&&"html"!=c||(window.google_always_use_delayed_impressions_experiment=N(["C","E"],ja));(c=!1===window.google_enable_async)||(c=navigator.userAgent,ya.test(c)?c=!1:(void 0!==window.google_async_for_oa_experiment||(!za.test(navigator.userAgent)||ya.test(navigator.userAgent))||(window.google_async_for_oa_experiment=N(["C","E"],ia)),c=
za.test(c)?"E"===window.google_async_for_oa_experiment:!0),c=!c||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(c)window.google_loader_used="sb",window.google_start_time=r,document.write(Ta());else{c=window;c.google_unique_id?++c.google_unique_id:c.google_unique_id=1;c=window;var f={};d=0;for(a=T.length;d<a;d++)b=T[d],null!=c[b]&&(f[b]=c[b]);f.google_loader_used="sa";d=0;for(a=T.length;d<a;d++)c[T[d]]=null;d=f.google_ad_width;a=f.google_ad_height;b={};Wa(b,
d,a,!0);b.onload='"'+Ha+'"';for(var m,h=c.document,g=b.id,l=0;!g||h.getElementById(g);)g="aswift_"+l++;b.id=g;b.name=g;var l=f.google_ad_width,k=f.google_ad_height,g=["<iframe"];for(m in b)b.hasOwnProperty(m)&&va(g,m+"="+b[m]);g.push('style="left:0;position:absolute;top:0;"');g.push("></iframe>");m="border:none;height:"+k+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+l+"px";h.write(['<ins style="display:inline-table;',m,'"><ins id="',b.id+"_anchor",'" style="display:block;',
m,'">',g.join(" "),"</ins></ins>"].join(""));m=b.id;b=Ea(f);g=f.google_ad_output;(h=f.google_ad_format)||"html"!=g&&null!=g||(h=f.google_ad_width+"x"+f.google_ad_height);g=!f.google_ad_slot||f.google_override_format||"aa"==f.google_loader_used;h=h&&g?h.toLowerCase():"";f.google_ad_format=h;h=f||F;h=[h.google_ad_slot,h.google_ad_format,h.google_ad_type,h.google_ad_width,h.google_ad_height];if(G){if(G){g=[];l=0;for(k=G;k&&25>l;k=k.parentNode,++l)g.push(9!=k.nodeType&&k.id||"");g=g.join()}else g="";
g&&h.push(g)}g=0;if(h)if(h=h.join(":"),g=h.length,0==g)g=0;else{l=305419896;for(k=0;k<g;k++)l^=(l<<5)+(l>>2)+h.charCodeAt(k)&4294967295;g=0<l?l:4294967296+l}h=g.toString();g=Ga(c);l=3==({visible:1,hidden:2,prerender:3,preview:4}[c.document.webkitVisibilityState||c.document.mozVisibilityState||c.document.visibilityState||""]||0);g&&(!l&&void 0===c.google_ad_handling_experiment)&&(c.google_ad_handling_experiment=N(["XN","EI"],ga)||N(["PC"],ha));g=c.google_ad_handling_experiment?String(c.google_ad_handling_experiment):
null;if(Ga(c)&&1==c.google_unique_id&&"XN"!=g){l="zrt_ads_frame"+c.google_unique_id;f=f.google_page_url;if(!f){e:{var f=c.document,k=d||c.google_ad_width,B=a||c.google_ad_height;if(c.top==c)f=!1;else{var y=f.documentElement;if(k&&B){var z=1,t=1;c.innerHeight?(z=c.innerWidth,t=c.innerHeight):y&&y.clientHeight?(z=y.clientWidth,t=y.clientHeight):f.body&&(z=f.body.clientWidth,t=f.body.clientHeight);if(t>2*B||z>2*k){f=!1;break e}}f=!0}}f=f?c.document.referrer:c.document.URL}k=encodeURIComponent(f);f=null;
"PC"!=g&&"EI"!=g||(f=("PC"==g?"K":"I")+"-"+(k+"/"+h+"/"+c.google_unique_id));k={};Wa(k,d,a,!1);k.style="display:none";d=f;k.id=l;k.name=l;k.src=Q(x("","googleads.g.doubleclick.net"),["/pagead/html/r20130730/r20130206/zrt_lookup.html",d?"#"+encodeURIComponent(d):""].join(""));d=Va(k)}else d=null;a=(new Date).getTime();f=c.google_top_experiment;l=c.google_async_for_oa_experiment;k=c.google_always_use_delayed_impressions_experiment;
d=["<!doctype html><html><body>",d,"<script>",b,"google_show_ads_impl=true;google_unique_id=",c.google_unique_id,';google_async_iframe_id="',m,'";google_ad_unit_key="',h,'";google_start_time=',r,";",f?'google_top_experiment="'+f+'";':"",g?'google_ad_handling_experiment="'+g+'";':"",l?'google_async_for_oa_experiment="'+l+'";':"",k?'google_always_use_delayed_impressions_experiment="'+k+'";':"","google_bpp=",a>r?a-r:1,";\x3c/script>",Ta(),"</body></html>"].join("");(c.document.getElementById(m)?Ra:Sa)(Ua(c,
m,d,!0))}});})();