//tealium universal tag - utag.13 ut4.0.201706281259, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'all':1};u.pad=function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a};u.gd=function(a,b){if(a=="u")return a;b=a.split("/");return b.length>1?b[2]:"u"};u.vi=function(t,a,b){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2)}catch(e){};a+=this.pad(navigator.userAgent.length,3);a+=this.pad(top.document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5);return a};u.server="//uconnect.tealiumiq.com/ulog/harman.ha-us";u.onlymapped="no";u.session=1800000;u.i=new Array(new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image());u.x=0;u.map={};u.extend=[];u.send=function(a,b,c,d,e,f,r,t){if(u.ev[a]||typeof u.ev["all"]!="undefined"){u.data={};r=utag.data["dom.referrer"];r=r.length==0?"u":r;if(typeof b["qp.ref"]!="undefined")r=b["qp.ref"];t=(new Date()).getTime();u.data["_et"]=a;u.data["_vi"]=utag.data["cp.utag_ulog__vi"];u.data["_fs"]=utag.data["cp.utag_ulog__fs"];u.data["_ss"]="1";u.data["_sc"]=utag.data["cp.utag_ulog__sc"];u.data["_du"]=utag.data["dom.url"];u.data["_dr"]=r;var ck={i:{},u:{},a:{}};if(utag.data["cp.utag_ulog__vi"]==null){ck={i:{_vi:u.data["_vi"]=u.vi(t),_vr:u.data["_vr"]=r,_fs:u.data["_fs"]=t,_cs:u.data["_cs"]=t,_sc:u.data["_sc"]="1",_evc:1,_ev:1},u:{}};u.data["_vd"]=u.gd(r);u.data["_sr"]=r;u.data["_sd"]=u.data["_vd"];u.data["_evc"]="1";u.data["_ec"]="1";}else if(utag.data["cp.utag_ulog__cs"]==null||(t-(utag.data["cp.utag_ulog__ts"]-0))>u.session){ck={u:{_cs:u.data["_cs"]=t,_ec:1,_evc:1},a:{_sc:1}};u.data["_sc"]=(utag.data["cp.utag_ulog__sc"]-0)+1;u.data["_vr"]=utag.data["cp.utag_ulog__vr"];u.data["_vd"]=u.gd(u.data["_vr"]);u.data["_sr"]=r;u.data["_sd"]=u.gd(r);u.data["_evc"]="1";u.data["_ec"]="1";}else{u.data["_cs"]=utag.data["cp.utag_ulog__cs"];u.data["_ir"]=r;u.data["_id"]=u.gd(r);u.data["_ss"]="0";if(a=="view"){ck["a"]["_evc"]=1;u.data["_evc"]=(utag.data["cp.utag_ulog__evc"]-0)+1;}
ck["a"]["_ec"]=1;u.data["_ec"]=(utag.data["cp.utag_ulog__ec"]-0)+1;}
u.data["_nv"]=(u.data["_sc"]==1)?1:0;ck["u"]["_ts"]=t;if(typeof ck.u!="undefined")utag.loader.SC("utag_ulog",ck.u);if(typeof ck.i!="undefined")utag.loader.SC("utag_ulog",ck.i,"i");if(typeof ck.a!="undefined")utag.loader.SC("utag_ulog",ck.a,"a");if(typeof u.server!="undefined"){c=[];for(d in utag.loader.GV(u.data)){c.push(d+"="+encodeURIComponent(u.data[d]));}
for(d in utag.loader.GV(b)){if(typeof u.map[d]!="undefined"){f=u.map[d].split(",");for(e=0;e<f.length;e++){c.push(f[e]+"="+encodeURIComponent(b[d]));}}else if(u.onlymapped=="no"&&(/^dom\.|^cp\.|^meta\.|^qp\./.test(d))==false)c.push(d+"="+encodeURIComponent(b[d]));}
d=u.server;c.push("_cb="+Math.random());u.i[u.x].src=d+((d.indexOf("?")>0)?"&":"?")+c.join("&");u.img=u.i[u.x];u.x++;if(u.x>=u.i.length)u.x=0;}else throw("nosend")};}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('13','harman.ha-com');}catch(e){}
