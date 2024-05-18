/*
 * author: ovsexia
 * version: 2.7.0
 * name: Xtiper
 * describe: 弹层弹窗解决方案
 * License: Mozilla Public License Version 2.0
 */
!function(a,b){let Xclass=function(d){let that=this;that.loseblur();that.ifmob=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);let rand=Math.random().toString().split(".")[1];let mainid="xtiper_"+rand;that.mainid=mainid;d=that.namefix(d);that.c=d;let xcstr="";if(typeof(d.reset)!="undefined"&&d.reset!==null&&d.reset===false){for(let key in d){if(d[key]!=null){xcstr+=d[key].toString()}}that.xcstr=that.xcstrRep(xcstr)}else{that.xcstr=xcstr}if(d.model=="close"){that.close(d.closeid);return false}if(d.model=="closeAll"){that.closeAll();return false}that.creat()};Xclass.pt=Xclass.prototype;Xclass.pt.loseblur=function(){let button=document.getElementsByTagName("button");if(button.length>0){for(let i=0;i<button.length;i++){button[i].blur()}}let input=document.getElementsByTagName("input");if(input.length>0){for(let i=0;i<input.length;i++){input_type=input[i].getAttribute("type");if(input_type&&(input_type=="button"||input_type=="submit")){input[i].blur()}}}};Xclass.pt.creat=function(){let that=this;let c=that.c;let html=that.html();if(!html){return false}let body=document.body;let div=document.createElement("div");div.setAttribute("id",that.mainid);div.setAttribute("class","xtiper");div.innerHTML=html;body.appendChild(div);let xtipdiv=document.getElementById(that.mainid);that.xtipdiv=xtipdiv;that.attr();that.on();that.after()};Xclass.pt.namefix=function(d){if(d.pos){d.pos=d.pos.toLowerCase();if(d.pos=="t"){d.pos="top"}else{if(d.pos=="b"){d.pos="bottom"}else{if(d.pos=="l"){d.pos="left"}else{if(d.pos=="r"){d.pos="right"}else{if(d.pos=="m"){d.pos="middle"}}}}}}if(d.type){d.type=d.type.toLowerCase();if(d.type=="r"){d.type="ready"}else{if(d.type=="n"){d.type="noready"}else{if(d.type=="notready"){d.type="noready"}else{if(d.type=="u"){d.type="url"}else{if(d.type=="h"){d.type="html"}else{if(d.type=="w"){d.type="white"}else{if(d.type=="b"){d.type="black"}else{if(d.type=="a"){d.type="alert"}else{if(d.type=="c"){d.type="confirm"}}}}}}}}}}d.iconColor="";if(d.icon){if(typeof(d.icon)=="object"){d.iconColor=d.icon[1];d.icon=d.icon[0]}d.icon=d.icon.toLowerCase();d.iconFlag=true;if(d.icon=="s"){d.icon="success"}else{if(d.icon=="e"){d.icon="error"}else{if(d.icon=="w"){d.icon="warning"}else{if(d.icon=="a"){d.icon="ask"}else{if(d.icon=="h"){d.icon="hello"}}}}}if(d.icon!=="success"&&d.icon!=="error"&&d.icon!=="warning"&&d.icon!=="ask"&&d.icon!=="hello"){d.iconFlag=false}}if(d.align){d.align=d.align.toLowerCase();if(d.align=="l"){d.align="left"}else{if(d.align=="c"){d.align="center"}else{if(d.align=="r"){d.align="right"}}}}return d};Xclass.pt.html=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;let html="";if(c.model=="msg"){html+="<p>";if(c.icon){html+=c.iconFlag===true?'<i class="xtiper_icon xtiper_icon_'+c.icon+' xtiper_icon_min"></i>':'<img class="xtiper_icon xtiper_icon_min" src="'+c.icon+'" />'}html+=c.tip+"</p>"}else{if(c.model=="tips"){that.newelement=document.getElementById(c.element)||c.element;if(c.bgcolor){html+='<p style="background-color:'+c.bgcolor+";"+(c.color?" color:"+c.color+';"':"")+'">'+c.tip+"</p>"}else{html+="<p>"+c.tip+"</p>"}html+='<em style="background-color:'+c.bgcolor+';"></em>';if(c.closeBtn===true){html+='<div class="xtiper_close xtiper_close_notit xtiper_close_notitmin"></div>'}}else{if(c.model=="win"){if(c.type=="alert"){c.btn=c.btn!=null?c.btn:["确定"];c.btn1=c.btn1!=null?c.btn1:null;c.btn2=null;c.btn3=null;c.btn4=null}else{if(c.type=="confirm"){c.btn=c.btn!=null?c.btn:["确定","取消"];c.btn1=c.btn1!=null?c.btn1:null;c.btn2=c.btn2!=null?c.btn2:null;c.btn3=c.btn3!=null?c.btn3:null;c.btn4=c.btn4!=null?c.btn4:null}}xtiper_con_icon=c.icon?" xtiper_con_icon":"";let btnclass=new Array();btnclass[0]=c.btn1!=null?' class="xactive"':"";btnclass[1]=c.btn2!=null?' class="xactive"':"";btnclass[2]=c.btn3!=null?' class="xactive"':"";btnclass[3]=c.btn4!=null?' class="xactive"':"";if(c.btnbg&&c.btnbg.length){for(let i=0;i<c.btnbg.length;i++){btnclass[i]=c.btnbg[i]===true?' class="xactive"':""}}let btnfun=new Array();btnfun[0]=c.btn1||null;btnfun[1]=c.btn2||null;btnfun[2]=c.btn3||null;btnfun[3]=c.btn4||null;that.btnfun=btnfun;if(c.maxWidth){c.width=that.maxSize(c.width,c.maxWidth)}if(c.shade===true){html+='<div class="xtiper_bg"></div>'}html+='<div class="xtiper_main"'+(c.width?'style="width:'+c.width+';"':"")+">";html+='<div class="xtiper_tit"><p>'+c.title+'</p><div class="xtiper_minmax">';if(c.min===true){html+='<div class="xtiper_min"></div>'}html+='<div class="xtiper_close"></div>';html+="</div></div>";let iconer=that.iconer();html+='<div class="xtiper_pad"><div class="xtiper_pr"><div class="xtiper_tip">'+iconer+'<div class="xtiper_con'+xtiper_con_icon+'"><div class="xtiper_conin">'+c.tip;if(c.type=="alert"&&c.times>0){c.times++;html+='(<span class="xtiper_times">'+c.times+"</span>)"}html+="</div></div></div></div></div>";html+='<div class="xtiper_btn'+(c.icon&&c.iconFlag===true?" xtiper_btn_"+c.icon:"")+" xtiper_btn"+c.btn.length+'"><ul>';for(let i=0;i<4;i++){if(c.btn[i]){html+="<li"+btnclass[i]+"><button"+(btnclass[i]&&c.iconColor&&c.type=="confirm"?' style="background-color:'+c.iconColor+'"':"")+">"+c.btn[i]+"</button></li>"}}html+='</ul><div class="xtiper_btnbor"'+(c.iconColor?' style="background-color:'+c.iconColor+'"':"")+"></div></div></div>"}else{if(c.model=="open"){ifxoff=that.findxoff();if(ifxoff===true){return false}if(c.maxWidth){c.width=that.maxSize(c.width,c.maxWidth)}if(c.maxHeight){c.height=that.maxSize(c.height,c.maxHeight)}if(c.width=="100%"&&c.height=="100%"){c.max=false}let width=that.getsize(c.width);let height=that.getsize(c.height)||["",""];if(height[1]=="%"){let bheight=a.innerHeight*height[0]/100;height[0]=Math.round(bheight);height[1]="px"}let height_css="";if(c.title){height_css=" xtit"}else{if(c.move===true){height_css=" xmin"}}let newcontent;let xtiper_over="";if(c.over===false){xtiper_over=" xtiper_over"}if(c.type=="ready"||c.type=="noready"){let fir=c.content.substr(0,1),element,content,reg;if(fir=="#"){element=document.getElementById(c.content.substr(1,c.content.length))}else{if(fir=="."){element=document.getElementsByClassName(c.content.substr(1,c.content.length))[0]}else{return false}}if(!element){return false}if(c.type=="ready"){content=element.outerHTML;regid=/\#([A-z0-9_-]*)/;content_id=(c.content).match(regid);if(content_id&&content_id[1]){reg=new RegExp("\\s+(id\\=[\"']"+content_id[1]+"[\"'])","g");content=content.replace(reg,"")}}else{content=element.innerHTML;reg=/\<\!\-{2}[\s\n]*([\S\s]*)[\s\n]*\-{2}\>/;let match=content.match(reg);if(!match||!match[1]){return false}content=match[1]}newcontent='<div class="xtiper_content'+xtiper_over+""+height_css+'"'+(c.bgcolor?' style="background-color:'+c.bgcolor+'"':"")+">"+content+"</div>"}else{if(c.type=="url"){let scrolling="auto";if(c.over===false){scrolling="no"}newcontent='<div class="xtiper_content'+height_css+' xtiper_over"'+(c.bgcolor?' style="background-color:'+c.bgcolor+'"':"")+'><div class="zw"></div><iframe parentid="'+that.mainid+'" id="'+that.mainid+'_id" name="'+that.mainid+'_name" scrolling="'+scrolling+'" allowtransparency="true" frameborder="0" src="'+c.content+'" style="width:100%; height:100%;"></iframe></div>'}else{if(c.type=="html"){newcontent='<div class="xtiper_content'+xtiper_over+""+height_css+'"'+(c.bgcolor?' style="background-color:'+c.bgcolor+'"':"")+">"+c.content+"</div>"}}}if(c.shade===true){html+='<div class="xtiper_bg"></div>'}if(c.app===true){html+='<div class="xtiper_sheet" style="height:'+height[0]+""+height[1]+';">';if(c.title){html+='<div class="xtiper_sheet_tit xtiper_sheet_left">'+c.title+"</div>"}}else{html+='<div class="xtiper_main" style="width:'+width[0]+""+width[1]+"; height:"+height[0]+""+height[1]+';">';if(c.title){html+='<div class="xtiper_tit'+(c.move===true?"":" xminmax")+'"><p>'+c.title+'</p><div class="xtiper_minmax">';if(c.min===true){html+='<div class="xtiper_min"></div>'}if(c.max===true){html+='<div class="xtiper_max"></div>'}if(c.closeBtn===true){html+='<div class="xtiper_close"></div>'}html+="</div></div>"}else{if(c.move===true){html+='<div class="xtiper_tit xtiper_tit_none"></div>'}if(c.closeBtn===true){html+='<div class="xtiper_close xtiper_close_notit"></div>'}}}html+=newcontent;html+="</div>"}else{if(c.model=="load"){html='<div class="xtiper_bg xtiper_bg_white"></div><div class="xtiper_loadin"><div class="xtiper_icon xtiper_icon_load"></div>';if(c.tip){html+="<span>"+c.tip+"</span>"}html+="</div>";if(c.closeBtn===true){html+='<div class="xtiper_close xtiper_close_load"></div>'}}}}}}return html};Xclass.pt.iconer=function(){let that=this;let c=that.c;let html="";if(c.icon){if(c.iconFlag===true){html='<i class="xtiper_icon xtiper_icon_'+c.icon+'"></i>'}else{html='<img class="xtiper_icon" src="'+c.icon+'" />'}}return html};Xclass.pt.findxoff=function(){let that=this;let c=that.c;let xoff=document.getElementsByClassName("xtiper");let xoffdiv;for(let i=0;i<xoff.length;i++){let xcstr=that.dataset(xoff[i],"xcstr");if(xcstr&&xcstr==that.xcstr){xoffdiv=xoff[i]}}if(xoffdiv){that.xtipdiv=xoffdiv;that.mainid=xoffdiv.getAttribute("id");xoffdiv.style.zIndex=c.zindex;setTimeout(function(){let maincss=c.app===true?"xtiper_sheet":"xtiper_main";let xtiper_main=xoffdiv.getElementsByClassName(maincss)[0];let data_width=that.dataset(xoffdiv,"xwidth");let data_height=that.dataset(xoffdiv,"xheight");let xleft=(a.innerWidth-data_width)/2;let xtop=(a.innerHeight-data_height)/2;if(maincss=="xtiper_main"){xtiper_main.style.width=data_width+"px";xtiper_main.style.height=data_height+"px";xtiper_main.style.left=xleft+"px";xtiper_main.style.top=xtop+"px";let xtiper_min=xoffdiv.getElementsByClassName("xtiper_min")[0];let xtiper_max=xoffdiv.getElementsByClassName("xtiper_max")[0];if(xtiper_min){xtiper_min.style.display="";xtiper_min.classList.remove("xon")}if(xtiper_max){xtiper_max.style.display="";xtiper_max.classList.remove("xon")}}if(c.lock===true){that.lock()}xoffdiv.classList.remove("xoff")},1);return true}else{return false}};Xclass.pt.dataset=function(f,d,g){if(g==null){if(f){return f.getAttribute("data-"+d)}}else{f.setAttribute("data-"+d,g)}};Xclass.pt.attr=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;if(c.model=="msg"){xtipdiv.classList.add("xtiper_msg");xtipdiv.classList.add("xtiper_msg_"+c.pos);xtipdiv.classList.add("xtiper_msg_"+c.type);xtipdiv.style.whiteSpace="nowrap";let xwidth=xtipdiv.offsetWidth;xwidth=xwidth/2;xtipdiv.style.marginLeft="-"+xwidth+"px";xtipdiv.style.whiteSpace=""}else{if(c.model=="tips"){xtipdiv.classList.add("xtiper_tips");xtipdiv.classList.add("xtiper_tips_"+c.pos);xtipdiv.style.width=xtipdiv.offsetWidth+"px";let newelement=document.getElementById(c.element)||c.element;let S=document.documentElement.scrollTop||document.body.scrollTop;let C=newelement.getBoundingClientRect();let W=newelement.offsetWidth;let H=newelement.offsetHeight;let dtop=S+C.top;let dleft=C.left;let B=10;if(c.pos=="left"){let selfWidth=xtipdiv.offsetWidth;dleft=dleft-selfWidth-B}else{if(c.pos=="right"){dleft=dleft+W+B}else{if(c.pos=="top"){let selfHeight=xtipdiv.offsetHeight;dtop=dtop-selfHeight-B}else{if(c.pos=="bottom"){dtop=dtop+H+B}}}}xtipdiv.style.left=dleft+"px";xtipdiv.style.top=dtop+"px"}else{if(c.model=="win"||c.model=="open"){xtipdiv.classList.add("xtiper_win");if(c.shade===true){xtipdiv.classList.add("xtiper_win_fixed")}let maincss=c.app===true?"xtiper_sheet":"xtiper_main";let xtiper_main=xtipdiv.getElementsByClassName(maincss)[0];let xtiper_tit=xtipdiv.getElementsByClassName("xtiper_tit")[0];that.dataset(xtipdiv,"xwidth",xtiper_main.offsetWidth);that.dataset(xtipdiv,"xheight",xtiper_main.offsetHeight);if(c.reset===false){that.dataset(xtipdiv,"xreset",1)}if(c.model=="open"&&that.xcstr){that.dataset(xtipdiv,"xcstr",that.xcstr)}if(c.min===true||c.max===true){let xmcss="xmcss";let y=0;if(c.min===true){y++}if(c.max===true){y++}xmcss=xmcss+y;if(xtiper_tit){xtiper_tit.classList.add(xmcss)}}let xleft,xtop;if(c.model=="win"){let width=that.getsize(c.width);if(width&&width[1]=="%"){xleft=(100-width[0])/2+"%"}else{xleft=(a.innerWidth-xtiper_main.offsetWidth)/2+"px"}xtop=(a.innerHeight-xtiper_main.offsetHeight)/2+"px";xtiper_main.style.height=xtiper_main.offsetHeight+"px";xtiper_main.style.left=xleft;xtiper_main.style.top=xtop}else{if(c.model=="open"){if(c.type=="ready"){xtiper_main.getElementsByClassName("xtiper_content")[0].firstChild.style.display=""}if(c.app===false){let width=that.getsize(c.width);xtiper_main.style.height=xtiper_main.offsetHeight+"px";xtop=(a.innerHeight-xtiper_main.offsetHeight)/2;xtop=c.y?xtop+c.y:xtop;xtop=xtop+"px";if(width[1]=="%"){xleft=(100-width[0])/2;xleft=c.x?xleft+c.x:xleft;xleft=xleft+width[1]}else{xleft=(a.innerWidth-xtiper_main.offsetWidth)/2;xleft=c.x?xleft+c.x:xleft;xleft=xleft+"px"}xtiper_main.style.left=xleft;xtiper_main.style.top=xtop}}}if(c.shade===false){xtiper_main.style.position="fixed"}}else{if(c.model=="load"){xtipdiv.classList.add("xtiper_win");xtipdiv.classList.add("xtiper_win_fixed")}}}}if(c.zindex){xtipdiv.style.zIndex=c.zindex}};Xclass.pt.on=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;setTimeout(function(){xtipdiv.classList.add("xon")},1)};Xclass.pt.after=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;if(c.model=="msg"||c.model=="tips"){that.autoClose();if(c.model=="tips"){that.shade()}}else{if(c.model=="win"||c.model=="open"){if(c.model=="win"){let button=xtipdiv.getElementsByTagName("button");let btnfun=that.btnfun;for(let i=0;i<4;i++){that.bclick(button[i],btnfun[i],true)}}if(c.min){let minbtn=xtipdiv.getElementsByClassName("xtiper_min")[0];if(minbtn){minbtn.addEventListener("click",function(){that.minmax("min")})}}if(c.max){let maxbtn=xtipdiv.getElementsByClassName("xtiper_max")[0];if(maxbtn){maxbtn.addEventListener("click",function(){that.minmax("max")})}}if(c.move===true){that.drag(true)}that.shade();if(c.model=="win"||c.model=="open"){that.key()}if(c.model=="win"&&c.type=="alert"&&c.times>0){that.autoClose()}if(c.success&&typeof(c.success)=="function"){c.success(that)}}else{if(c.model=="load"){that.autoClose();that.shade()}}}that.lock()};Xclass.pt.ulli=function(d,f,h,j,g){let that=this;let xtipdiv=that.xtipdiv;let xtiper_content=xtipdiv.getElementsByClassName("xtiper_content")[0];let opacity;for(let i=0;i<d.length;i++){if(d[i].classList.contains("xon")===true){if(f=="left"){if(h){d[i].style.left=h+"px"}else{d[i].style.left=""}}else{d[i].style.left=h+"px";d[i].style.top=j+"px";opacity=1-((j/4*3)/120);if(opacity<0){opacity=0}xtiper_content.style.backgroundColor="rgba(0, 0, 0, "+opacity+")";if(g===true){if(j>120){that.close()}else{d[i].style.left="";d[i].style.top="";xtiper_content.style.backgroundColor="rgba(0, 0, 0, 1)"}}}}}};Xclass.pt.appScroll=function(d){d.preventDefault()};Xclass.pt.touchmove=function(d){let that=this;if(d===false){document.body.addEventListener("touchmove",that.appScroll,{passive:false})}else{document.body.removeEventListener("touchmove",that.appScroll,{passive:false})}};Xclass.pt.xcstrRep=function(d){d=d.replace(/[\s\n\r]/g,"");d=encodeURIComponent(d).toLowerCase();let reparr=[[/true/g,"1"],[/false/g,"0"],[/%/g,""],[/\(/g,""],[/\)/g,""],[/open/g,"o"],[/ready/g,"r"],[/noready/g,"n"],[/url/g,"u"],[/html/g,"h"],[/function/g,"f"],[/99999/g,"9"]];for(let i=0;i<reparr.length;i++){d=d.replace(reparr[i][0],reparr[i][1])}return d};Xclass.pt.maxSize=function(d,f){let that=this;let oldsize=that.getsize(d)||"";let newsize=that.getsize(f);if(oldsize&&oldsize[1]=="px"&&newsize[1]=="%"){if(oldsize[0]>a.innerWidth){return(newsize[0]>100?100:newsize[0])+"%"}else{return d}}else{return d}};Xclass.pt.bclick=function(f,d,g){let that=this;if(f){if(d&&typeof(d)=="function"){f.addEventListener("click",function(){d();that.close()})}else{if(g===true){f.addEventListener("click",function(){that.close()})}}}};Xclass.pt.autoClose=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;if(xtipdiv.getElementsByClassName("xtiper_times")[0]){let times=c.times-1;let i=times;let fn=function(){xtiper_times=xtipdiv.getElementsByClassName("xtiper_times")[0];xtiper_times.innerHTML=i;if(i<=0){that.close();clearInterval(that.timer);that.timer=null}i--};that.timer=setInterval(fn,1000);fn()}else{let times=c.times;if(times&&times!=0){setTimeout(function(){that.close()},times*1000)}}};Xclass.pt.lock=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;if(c.lock===true){that.dataset(xtipdiv,"xlock",1);document.documentElement.style.overflowY="hidden";that.touchmove(false)}};Xclass.pt.unlock=function(){let that=this;let flag=0;let winli=document.getElementsByClassName("xtiper_win");for(let i=0;i<winli.length;i++){if(that.dataset(winli[i],"xlock")==1&&winli[i].classList.contains("xoff")===false){flag++}if(winli[i].classList.contains("xoff")===true&&winli[i].getAttribute("id")==that.mainid){flag++}}if(flag<=1){document.documentElement.style.overflowY=""}that.touchmove(true)};Xclass.pt.minmax=function(f,d){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;let iftype,setwidth,setheight;if(f=="min"){iftype=that.dataset(xtipdiv,"xmin");setwidth="190px";setheight="40px"}else{if(f=="max"){iftype=that.dataset(xtipdiv,"xmax");setwidth="100%";setheight="100%"}}let xtiper_tit=xtipdiv.getElementsByClassName("xtiper_tit")[0];let xtiper_main=xtipdiv.getElementsByClassName("xtiper_main")[0];let xtiper_content=xtipdiv.getElementsByClassName("xtiper_content")[0];let minbtn=xtipdiv.getElementsByClassName("xtiper_min")[0];let maxbtn=xtipdiv.getElementsByClassName("xtiper_max")[0];let xtiper_bg=xtipdiv.getElementsByClassName("xtiper_bg")[0];if(iftype==1||d==1){xtiper_main.style.width=that.dataset(xtipdiv,"xwidth")+"px";xtiper_main.style.height=that.dataset(xtipdiv,"xheight")+"px";let data_width=xtiper_main.offsetWidth;let data_height=xtiper_main.offsetHeight;let xleft=(a.innerWidth-data_width)/2;let xtop=(a.innerHeight-data_height)/2;xtiper_main.style.left=xleft+"px";xtiper_main.style.top=xtop+"px";xtiper_tit.classList.remove("xminmax");xtiper_tit.classList.remove("xmin");xtiper_tit.getElementsByTagName("p")[0].setAttribute("title","");that.dataset(xtipdiv,"xmin","");that.dataset(xtipdiv,"xmax","");if(minbtn){minbtn.classList.remove("xon");minbtn.style.display=""}if(maxbtn){maxbtn.classList.remove("xon");maxbtn.style.display=""}that.drag(true);if((c.model=="win"||c.model=="open")&&c.shade===true&&c.min===true){xtipdiv.classList.add("xtiper_win_fixed");xtiper_bg.classList.remove("xmin");xtiper_main.style.position=""}}else{xtiper_main.style.width=setwidth;xtiper_main.style.height=setheight;xtiper_tit.classList.add("xminmax");if(f=="min"){xtiper_tit.classList.add("xmin");xtiper_tit.getElementsByTagName("p")[0].setAttribute("title",xtiper_tit.getElementsByTagName("p")[0].innerHTML);that.dataset(xtipdiv,"xmin",1);xtiper_main.style.top="auto";xtiper_main.style.bottom="0";xtiper_main.style.left="0";minbtn.classList.add("xon");if(maxbtn){maxbtn.style.display="none"}if((c.model=="win"||c.model=="open")&&c.shade===true&&c.min===true){xtipdiv.classList.remove("xtiper_win_fixed");xtiper_bg.classList.add("xmin");xtiper_main.style.position="fixed"}}else{if(f=="max"){that.dataset(xtipdiv,"xmax",1);xtiper_main.style.top="0";xtiper_main.style.left="0";maxbtn.classList.add("xon");if(minbtn){minbtn.style.display="none"}}}that.drag(false)}};Xclass.pt.drag=function(d){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;let drag=xtipdiv.getElementsByClassName("xtiper_tit")[0];if(!drag){return false}let drag_main=xtipdiv.getElementsByClassName("xtiper_main")[0];if(d===true){drag.onmousedown=function(f){let overX=drag_main.offsetWidth/4*3;let overY=drag_main.offsetHeight/4*3;drag_main.classList.add("xon");f=f||a.event;let diffX=f.clientX-drag_main.offsetLeft;let diffY=f.clientY-drag_main.offsetTop;if(typeof drag_main.setCapture!=="undefined"){drag_main.setCapture()}document.onmousemove=function(g){g=g||a.event;let moveX=g.clientX-diffX;let moveY=g.clientY-diffY;if(moveX<-overX){moveX=-overX}else{if(moveX>document.body.offsetWidth-drag_main.offsetWidth+overX){moveX=document.body.offsetWidth-drag_main.offsetWidth+overX}}if(moveY<0){moveY=0}else{if(moveY>a.innerHeight-drag_main.offsetHeight+overY){moveY=a.innerHeight-drag_main.offsetHeight+overY}}drag_main.style.left=moveX+"px";drag_main.style.top=moveY+"px"};document.onmouseup=function(g){drag_main.classList.remove("xon");this.onmousemove=null;this.onmouseup=null;if(typeof drag_main.releaseCapture!="undefined"){drag_main.releaseCapture()}}}}else{drag.onmousedown=function(f){return false;document.onmousemove=function(g){return false};document.onmouseup=function(g){return false}}}};Xclass.pt.shade=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;let close=xtipdiv.getElementsByClassName("xtiper_close")[0];if(close){close.addEventListener("click",function(){that.close();if(c.end&&typeof(c.end)=="function"){c.end()}})}if(c.shadeClose){let bg=xtipdiv.getElementsByClassName("xtiper_bg")[0];bg.addEventListener("click",function(){that.close();if(c.end&&typeof(c.end)=="function"){c.end()}})}};Xclass.pt.key=function(){let that=this;let c=that.c;let xtipdiv=that.xtipdiv;document.onkeydown=function(d){let e=d||a.event||arguments.callee.caller.arguments[0];if(e){if(e.keyCode==27){that.close()}else{if(e.keyCode==13){if(c.model=="win"){if(c.btn2||c.btn3){return false}that.close();if(c.btn1&&typeof(c.btn1)=="function"){c.btn1();c.btn1=null}return false}}else{return e}}}}};Xclass.pt.close=function(d){let that=this;let c=that.c;let checkLock=false;let xtipdiv=null;if(d){xtipdiv=document.getElementById(d);if(!xtipdiv){return false}if(that.dataset(xtipdiv,"xlock")==1){checkLock=true}}else{xtipdiv=that.xtipdiv;if(c.lock===true){checkLock=true}}if(!xtipdiv){return false}let closenow=false;if(closenow===true){let parent_xtipdiv=xtipdiv.parentNode;if(parent_xtipdiv){parent_xtipdiv.removeChild(xtipdiv)}}else{if(that.dataset(xtipdiv,"xreset")==1){xtipdiv.classList.add("xoff");if(c.lock===true){that.unlock()}setTimeout(function(){xtipdiv.style.zIndex="-99999";if(c.min===true){that.minmax("min",1)}if(c.max===true){that.minmax("max",1)}},201)}else{xtipdiv.classList.remove("xon");setTimeout(function(){let parent_xtipdiv=xtipdiv.parentNode;if(parent_xtipdiv){parent_xtipdiv.removeChild(xtipdiv)}},201)}}if(checkLock===true){that.unlock()}};Xclass.pt.closeAll=function(){let that=this;let msgall=document.getElementsByClassName("xtiper");if(msgall.length<=0){return false}for(let i=0;i<msgall.length;i++){that.close(msgall[i].getAttribute("id"))}document.documentElement.style.overflowY="";that.touchmove(true)};Xclass.pt.getsize=function(d){if(d){reg=/([0-9]+)(px|\%)/;size_arr=d.match(reg);arr=new Array();arr[0]=Number(size_arr[1]);arr[1]=size_arr[2];return arr}};Xclass.pt.setSize=function(f,d){let that=this;let c=that.c;if(c.model=="open"){let xtipdiv=that.xtipdiv;let xtiper_main=xtipdiv.getElementsByClassName("xtiper_main")[0];d=parseInt(d);if(f=="height"){let xtop=(a.innerHeight-d)/2;xtiper_main.style.height=d+"px";xtiper_main.style.top=xtop+"px"}}};Xclass.pt.setHeight=function(d){let that=this;that.setSize("height",d)};a.xtip={ver:"2.7.0",msg:function(f,d){if(!f){return false}d=d||{};let o={};o.model="msg";o.tip=f;o.times=d.times||2;o.type=d.type||"black";o.pos=d.pos||"middle";o.icon=d.icon||"";o.zindex=d.zindex||99999;return(this.run(o))},tips:function(g,f,d){if(!g||!f){return false}d=d||{};let o={};o.model="tips";o.tip=g;if(typeof(f)=="string"){let fir=f.substr(0,1);if(fir=="#"){f=f.substr(1,f.length)}}o.element=f;o.bgcolor=d.bgcolor||"#000000";if(d.color){o.color=d.color}else{let reg=/rgba\((255\,){3}[0-9.]+/;let rgba=reg.test(o.bgcolor);if(o.bgcolor=="#fff"||o.bgcolor=="#ffffff"||o.bgcolor=="white"||o.bgcolor=="rgb(255, 255, 255)"||o.bgcolor=="rgba(255, 255, 255)"||rgba===true){o.color="#333333"}else{o.color="#ffffff"}}o.times=d.times||2;o.pos=d.pos||"right";o.closeBtn=d.closeBtn||false;o.zindex=d.zindex||99999;return(this.run(o))},alert:function(f,d){d=d||{};let o={};o.type="alert";o.tip=f||"";o.icon=d.icon||"";o.title=d.title||"提示";if(d.btn){o.btn=typeof(d.btn)=="string"?[d.btn]:[d.btn[0]]}else{o.btn=["确定"]}o.btn1=d.btn1!=null?d.btn1:null;o.btnbg=[];o.times=d.times||0;o.shade=d.shade!=null?d.shade:true;if(o.shade===true){o.shadeClose=d.shadeClose!=null?d.shadeClose:true}else{o.shadeClose=false}return(this.win(o))},confirm:function(f,d){d=d||{};let o={};o.type="confirm";o.tip=f||"";o.icon=d.icon||"warning";o.title=d.title||"警告";o.btn=d.btn||["确定","取消"];if(o.btn&&o.btn.length>2){let newbtn=[];for(let i=0;i<2;i++){newbtn.push(o.btn[i])}o.btn=newbtn}o.btn1=d.btn1!=null?d.btn1:null;o.btn2=d.btn2!=null?d.btn2:null;o.btnbg=[true,false];o.shade=d.shade!=null?d.shade:true;if(o.shade===true){o.shadeClose=d.shadeClose!=null?d.shadeClose:true}else{o.shadeClose=false}return(this.win(o))},win:function(d){if(!d){return false}let o={};o.model="win";o.tip=d.tip||"";o.times=d.times||0;o.type=d.type||"confirm";o.icon=d.icon||"";o.title=d.title||"提示";o.shade=d.shade!=null?d.shade:true;if(o.shade===true){o.shadeClose=d.shadeClose!=null?d.shadeClose:true}else{o.shadeClose=false}o.lock=d.lock||false;o.btn=d.btn||null;if(o.btn&&o.btn.length>4){let newbtn=[];for(let i=0;i<4;i++){newbtn.push(o.btn[i])}o.btn=newbtn}o.btn1=d.btn1!=null?d.btn1:null;o.btn2=d.btn2!=null?d.btn2:null;o.btn3=d.btn3!=null?d.btn3:null;o.btn4=d.btn4!=null?d.btn4:null;o.btnbg=d.btnbg||[];o.width=d.width||"";o.maxWidth=d.maxWidth||"";o.end=typeof(d.end)=="function"?d.end:null;o.min=d.min!=null?d.min:false;o.move=true;o.app=false;o.zindex=d.zindex||99999;o.success=d.success||null;return(this.run(o))},open:function(d){if(!d==null||!d.type||!d.content){return false}let o={};o.model="open";o.type=d.type;o.content=d.content;o.id=d.id||"";o.title=d.title||"";if(d.autoHeight){o.autoHeight=d.autoHeight}else{o.autoHeight=d.height?false:true}o.width=d.width||"600px";o.height=d.height||"400px";o.maxWidth=d.maxWidth||"";o.maxHeight=d.maxHeight||"";o.x=d.x||"";o.y=d.y||"";o.x=f(o.x);o.y=f(o.y);function f(g){if(g){if(!isNaN(g)){return Number(g)}else{let reg=/\-?[0-9\.]*(px|%)*/,match,num;if(g){match=g.match(reg);if(!match[1]||(match[1]&&match[1]=="px")){match[0]=match[0].replace(/px/g,"");num=Number(match[0])}else{num=""}return num}}}else{return""}}o.bgcolor=d.bgcolor||"";let reg=/rgba\((0\,){3}[0-9.]+/;let rgba=reg.test(o.bgcolor);if(o.bgcolor=="#000"||o.bgcolor=="#000000"||o.bgcolor=="black"||o.bgcolor=="rgb(0, 0, 0)"||o.bgcolor=="rgba(0, 0, 0)"||rgba===true){o.color="#ffffff"}else{o.color=""}o.shade=d.shade!=null?d.shade:true;if(o.shade===true){o.shadeClose=d.shadeClose!=null?d.shadeClose:true}else{o.shadeClose=false}o.end=typeof(d.end)=="function"?d.end:null;o.min=d.min!=null?d.min:false;o.max=d.max!=null?d.max:false;o.closeBtn=d.closeBtn!=null?d.closeBtn:true;o.move=d.move!=null?d.move:true;o.lock=d.lock!=null?d.lock:false;o.over=d.over!=null?d.over:true;o.index=d.index||1;o.app=d.app!=null?d.app:false;if(o.app===true){o.height=d.height||"";o.lock=true;o.shade=true;o.shadeClose=true}o.reset=d.reset!=null?d.reset:true;o.zindex=d.zindex||99999;o.iftitle=d.iftitle!=null?d.iftitle:true;o.iforder=d.iforder!=null?d.iforder:true;o.success=d.success||null;return(this.run(o))},load:function(f,d){d=d||{};let o={};o.model="load";o.tip=f||"";o.times=d.times||0;o.lock=d.lock!=null?d.lock:false;o.zindex=d.zindex||99999;o.closeBtn=d.closeBtn!=null?d.closeBtn:false;return(this.run(o))},run:function(d){let x=new Xclass(d);return x.mainid},close:function(d){let o={};o.model="close";o.closeid=d;return(this.run(o))},closeAll:function(){let o={};o.model="closeAll";return(this.run(o))}}}(window);