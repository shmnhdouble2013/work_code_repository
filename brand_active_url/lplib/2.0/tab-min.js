KISSY.add(function(h){var s=h.DOM,w=h.Event,t=h.Node;var f="J_TabContainer",i="lpui-tab-container",b="J_TabNavLeft",c="J_TabNavRight",k="lpui-tab-nav-arror-active",n="J_TabNavCon",a="J_TabItemCon",g="J_TabNavId_",p="J_TabConId_",d="lpui-tab-nav-active",r="lpui-tab-con-active",v="lpui-tab-nav-close",m="lpui-tab-nav-title",j="lpui-tab-nav-item",e="lpui-tab-nav",o="lpui-tab-nav-con",u="data-sourceid";function l(y){var x=this;y=y||{};if(!y.conId||!s.get("#"+y.conId)){throw"please assign the id of rendered Dom!"}y=h.merge(l.config,y);l.superclass.constructor.call(x,y);x.events=["tabChanging","tabChanged"];x._init()}l.config={conId:f,tabWidth:140,tabRevision:0,conHeight:500};h.extend(l,h.Base);h.augment(l,{addTab:function(B){var A=B.tabId,C=B.conUrl,z=B.isReload||false;if(!A||!C){return null}var y=this,x=null;if(y.getTab(A)){x=y.getTab(A);y.changeTab(A);if(z){x.reloadTab(C)}}else{x=new q(B);x.on("changeTab",function(D){if(D.isAddTab){y._resetNavConWidth();y._addTabPage(D.tabId,x)}y.changeTab(D.tabId)});x.on("tabDestroyed",function(D){y._resetNavConWidth();y._rollStatus().isBlank();y._destroyTabPage(D.tabPage.get("tabId"))});x.addTab(y.get("navConElm"),y.get("itemConElm"),y.get("conHeight"))}return x},changeTab:function(B){var y=this,x=y.getTab(B);if(y.fire("tabChanging",{tabId:B,tabPage:x})===false){return null}if(B==="none"){y.setActiveId(null);return null}if(!x){return null}var E=x.get("tabObj"),C=x.get("conObj");if(E.hasClass(d)){return x}if(y.getActiveTab()){var A=y.getActiveTab(),D=A.get("tabObj"),z=A.get("conObj");D.removeClass(d);z.removeClass(r)}E.addClass(d);C.addClass(r);y.setActiveId(B);if(y._rollStatus().isRoll()){y._rollNav("activeTab")}y.fire("tabChanged",{tabId:B,tabPage:x});return x},closeTab:function(z){var y=this,x=y.getTab(z);if(x){x.closeTab()}return x},getTab:function(y){var x=this;return y?(x.get("tabManage")[y]||null):null},getActiveTab:function(){var x=this,y=x.getActiveId();return x.getTab(y)},getSourceTab:function(A){var y=this,z=A?y.getTab(A):y.getActiveTab(),x,B=null;if(z){x=z.get("tabObj").attr(u);if(x){B=y.getTab(x)}}return B},getActiveId:function(){var x=this;return x.get("activeTabId")},setActiveId:function(z){var y=this,x=y.getTab(z),A=y.getActiveTab();y.set("activeTabId",z);if(A){A.setActive(false)}if(x){x.setActive(true)}},resizeTab:function(){var x=this,z=x.get("tabManage"),y="tabResize";x.autoSetTabNavWidth();if(x._rollStatus().isRoll()){x._rollNav("activeTab")}x._rollStatus().isBlank();h.each(z,function(A){if(A.getActive()){A.fire(y,{tabPage:A})}else{A.lazyFire(y,"active")}});return x},destroyTab:function(){var x=this,y=x.get("container"),z=x.get("tabManage");h.each(z,function(A){A.destroyTabPage()});x.detach();y.innerHTML=""},_init:function(){var y=this,z=y.get("container"),D=y.get("conId");if(!z){z=s.get("#"+D);s.addClass(z,i);y.set("container",z)}var C=['<div class="',e,'">','	<s class="lpui-tab-nav-arror lpui-tab-nav-arror-left ',b,'">&lt;</s>','	<div class="lpui-tab-nav-border">','		<div class="',o,'">','			<ul class="lpui-tab-nav-con-inner ks-clear ',n,'">',"			</ul>","		</div>","	</div>",'	<s class="lpui-tab-nav-arror lpui-tab-nav-arror-right ',c,'">&gt;</s>',"</div>",'<div class="lpui-tab-con ',a,'">',"</div>"].join(""),x=new t(C);x.appendTo(z);y.autoSetTabNavWidth();y.set("navConElm",s.get("."+n,z));y.set("itemConElm",s.get("."+a,z));var A=h.one("."+b,z),B=h.one("."+c,z);A.on("click",function(){if(h.one(this).hasClass(k)){y._rollNav("left")}});B.on("click",function(){if(h.one(this).hasClass(k)){y._rollNav("right")}});y.set("navLeft",A);y.set("navRight",B);y.set("tabManage",{})},autoSetTabNavWidth:function(){if(h.UA.ie===6){var x=this,y=x.get("container"),z=h.one("."+e).width()-50;h.one("."+o).css("width",z+"px")}},_addTabPage:function(z,y){var x=this,A=x.get("tabManage");A[z]=y;return x},_destroyTabPage:function(y){var x=this,z=x.get("tabManage");delete z[y];if(x.getActiveId()===y){x.setActiveId(null)}},_resetNavConWidth:function(){var y=this,A=y.get("tabWidth"),B=y.get("tabRevision"),z=y.get("navConElm"),x=s.children(z).length*(A+B)-B;s.width(z,x+"px");y.set("navWidth",x);return y},_rollStatus:function(){var C=this,H=C.get("navConElm"),D=s.parent(H,"."+o),G=C.get("navWidth"),E=D.offsetWidth,y=s.css(H,"left").replace("px","")*1||0,B=C.get("navLeft"),z=C.get("navRight");var F=function(){if(G+y-E>0){z.addClass(k)}else{z.removeClass(k)}if(y<0){B.addClass(k)}else{B.removeClass(k)}};var A=function(){F();if(E<G){return true}return false};var x=function(){var I=Math.abs(y);if(E+I>G){C._rollNav({target:1,distance:E+I-G});return true}return false};return{resetArrow:F,isRoll:A,isBlank:x}},_rollNav:function(B){var F=this,L=F.get("navConElm"),H=F.get("tabWidth"),D=F.get("tabRevision"),I=s.parent(L,"."+o),K=F.get("navWidth"),J=I.offsetWidth,C=s.css(L,"left").replace("px","")*1||0;var x=function(N,O){var M=C+N*O;M=M>0?0:J-K-M>0?J-K:M;F._rollTabAnim(M,function(){F._rollStatus().resetArrow()}).run()};if(B==="left"){x(1,H)}else{if(B==="right"){x(-1,H)}else{if(B==="activeTab"){var z=F.getActiveTab(),y=z.get("tabObj"),G=h.indexOf(y[0],s.children(L))*(H+D),E=Math.abs(C),A=[E,E+J-H];if(G<A[0]){x(1,E-G)}else{if(G>A[1]){x(-1,G+H-E-J)}}}else{if(B.target&&B.distance){x(B.target,B.distance)}}}}},_rollTabAnim:function(z,y){var x=this;return h.Anim(x.get("navConElm"),{left:z+"px"},0.5,"easeOut",y)}});function q(y){var x=this;y=y||{};if(!y.tabId||!y.conUrl){throw"please assign the id and the url of rendered Tab!"}y=h.merge(q.config,y);q.superclass.constructor.call(x,y);x.events=["tabAdding","tabAdded","tabClosing","tabClosed","active","inactive","changeTab","tabDestroyed","tabResize"]}q.config={tabName:"",conType:0,sourceId:""};h.extend(q,h.Base);h.augment(q,{addTab:function(H,z,E){var F=this;if(F.fire("tabAdding",{tabPage:F})===false){return}var A=F.get("tabId"),G=F.get("sourceId"),C=F.get("tabName"),D=['<li class="',j,'" id="',g,A,'" ',u,'="',G,'" title="',C,'"><span class="',m,'">',C,'</span><s class="',v,'">X</s></li>'].join(""),y=['<div class="lpui-tab-con-item" id="',p,A,'"></div>'].join(""),x=new t(D),B=new t(y);F.set("tabObj",x);F.set("conObj",B);x.css("opacity","0").on("click",function(){F.fire("changeTab",{tabId:A})}).appendTo(H).children("."+v).on("click",function(I){F.closeTab();I.stopPropagation()});F._setConInner(z,E);F.fire("changeTab",{tabId:A,isAddTab:true});F._addTabAnim(function(){F.fire("tabAdded",{tabPage:F})}).run();if(C===""){F.resetTitle({load:true})}return F},closeTab:function(){var x=this,z=x.get("tabObj"),y=x.get("conObj");if(!z||!y){return}if(x.fire("tabClosing",{tabPage:x})===false){return}if(z.hasClass(d)){x.fire("changeTab",{tabId:x._findNearTab()})}x._closeTabAnim(function(){x.fire("tabClosed",{tabPage:x});x.destroyTabPage()}).run();return x},getActive:function(){var x=this;return x.get("active")||false},setActive:function(y){var x=this;x.set("active",y);if(y){x.fire("active",{tabPage:x})}else{x.fire("inactive",{tabPage:x})}},destroyTabPage:function(){var x=this;x.get("tabObj").remove();x._destroyTabCon();x.fire("tabDestroyed",{tabPage:x});x.detach()},_destroyTabCon:function(){var x=this,y=x.get("conObj"),z=y.children("iframe")[0];z.src="";y.remove()},resetTitle:function(y){var E=this,B=y.title||null,C=y.load||false,z=E.get("conType"),x,D,F;x=E.get("tabObj");D=E.get("conObj");var A=function(G){if(G){B=G.contentWindow.document.title}x.attr("title",B).children("."+m)[0].innerHTML=B};if(B){A()}else{if(z===0){F=D.children("iframe")[0];if(C){w.on(F,"load",function(){A(F);w.detach(F,"load")})}else{A(F)}}}return E},reloadTab:function(y){var x=this,z=x.get("conObj"),B=y||x.get("conUrl"),C=x.get("conType");if(C===0){var A=z.children("iframe");A.attr("src",B)}else{}return x},lazyFire:function(A,z){if(!A||!z){return}var y=this,x=y.get("lazyFire")||{};if(!y.get("lazyFire")){y.set("lazyFire",x)}if(x[A]){y.detach(z,x[A])}x[A]=function(){if(A){y.fire(A,{tabPage:y});y.detach(z,x[A]);delete x[A]}};y.on(z,x[A])},_findNearTab:function(){var x=this,A=x.get("tabObj"),z="none",y=A.prev("."+j)||A.next("."+j);if(y){z=y.attr("id").replace(g,"")}return z},_setConInner:function(x,D){var E=this,z=null,C=E.get("conObj"),y=E.get("conUrl"),A=E.get("conType");var F=function(H){var I=['<iframe src="',H,'" width="100%" height="',D,'" frameborder="0"></iframe>'].join(""),G=s.create(I);return G};var B=function(G){};if(A===0){z=F(y)}else{z=B(y)}C.append(z).appendTo(x);return E},_addTabAnim:function(z){var x=this,C=x.get("tabObj"),y=C.css("width"),A=C.css("padding-left"),B=C.css("padding-right");C.css("width","0");C.css("padding-left","0");C.css("padding-right","0");return h.Anim(C,{width:y,"padding-left":A,"padding-right":B,opacity:"1"},0.5,"easeOut",z)},_closeTabAnim:function(y){var x=this,z=x.get("tabObj");return h.Anim(z,{width:"0","padding-left":"0","padding-right":"0",opacity:"0"},0.5,"easeOut",y)}});h.namespace("LP");h.LP.Tab=l},{requires:["core"]});