/*
Copyright 2013, KISSY UI Library v1.32
MIT Licensed
build time: Sep 4 17:12
*/
KISSY.add("editor/plugin/multiple-upload/dialog",function(l,o,D,x,E,F,u,y,i){function s(a,c){this.editor=a;this.progressBars={};this.config=c;o.Utils.lazyRun(this,"_prepareShow","_realShow")}function h(a,c){return l.substitute(a,{prefixCls:c})}function z(a,c){var b=a.parentNode,d=c.nextSibling;b.insertBefore(c,a.nextSibling);b.insertBefore(a,d)}var G=l.UA,m=l.DOM,k=l.all,q=l.JSON,H=E.Dialog,I=o.Utils.debugUrl("plugin/uploader/uploader.longzang.swf");l.augment(s,{addRes:o.Utils.addRes,destroy:o.Utils.destroyRes,
_prepareShow:function(){var a=this,c=a.editor,b=c.get("prefixCls"),d=a.config;a.addRes(function(){var b=a.progressBars,c;for(c in b)b[c].destroy()});a.dialog=(new H({headerContent:"\u6279\u91cf\u4e0a\u4f20",mask:!1,plugins:[new D({handlers:[".ks-editor-stdmod-header"]})],focus4e:!1,width:"600px"})).render();var f=a.dialog;f.on("beforeVisibleChange",function(a){if(!a.newVal)return f.set("xy",[-9999,-9999]),!1});a.addRes(f);var e=f.get("body"),g=k(h("<div class='{prefixCls}editor-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:450px;'></span></div>",
b)).appendTo(e,i),j=k("<div style='display:none'>").appendTo(e,i),p=k(h("<a class='{prefixCls}editor-button ks-inline-block'>\u6d4f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u89c8</a>",b)).appendTo(g,i),v=k(h("<div><table class='{prefixCls}editor-upload-list'><thead><tr><th style='width:30px;'>\u5e8f\u53f7</th><th>\u56fe\u7247</th><th>\u5927\u5c0f</th><th style='width:30%'>\u4e0a\u4f20\u8fdb\u5ea6</th><th>\u56fe\u7247\u64cd\u4f5c</th></tr></thead><tbody></tbody></table></div>",b)).appendTo(j,i),r=v.one("tbody"),n=k(h("<p style='margin:15px 15px 30px 6px;'><a class='{prefixCls}editor-multiple-upload-delall' style='margin-right:20px;cursor:pointer;margin-left:40px;'>\u6e05\u7a7a\u5217\u8868</a><a class='{prefixCls}editor-button {prefixCls}editor-multiple-upload-ok ks-inline-block'>\u786e\u5b9a\u4e0a\u4f20</a><a class='{prefixCls}editor-button {prefixCls}editor-multiple-upload-insertall ks-inline-block' style='margin-left:20px;'>\u5168\u90e8\u63d2\u5165</a></p>",
b)).appendTo(j,i),w=n.one(h(".{prefixCls}editor-multiple-upload-ok",b)),e=n.one(h(".{prefixCls}editor-multiple-upload-insertall",b)),q=n.one(h(".{prefixCls}editor-multiple-upload-delall",b));l.guid("ks-editor-multipleUpload");n=k("<span>").prependTo(n,i);a._sizeLimit=d.sizeLimit||1E3;a._numberLimit=d.numberLimit||15;var s="\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20"+a._numberLimit+"\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7"+a._sizeLimit/1E3+"M";y.fpvGTE("10.0.0")||(s="\u60a8\u7684flash\u63d2\u4ef6\u7248\u672c\u8fc7\u4f4e\uff0c\u8be5\u529f\u80fd\u4e0d\u53ef\u7528\uff0c\u8bf7<a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a>");
p.addClass(h("{prefixCls}editor-button-disabled",b),i);a.tipSpan=g.one("span");a.tipSpan.html(s);if(y.fpvGTE("10.0.0")){d.extraHtml&&v.append(d.extraHtml);a._list=r;a._listTable=r.parent("table");a._listWrap=j;a._ds=d.serverUrl;a._dsp=d.serverParams||{};a._fileInput=d.fileInput||"Filedata";a.statusText=n;a.btn=p;a.up=w;v=p.offset();w=2*p.width();n=1.5*p.height();g=k("<div style='"+("position:absolute;width:"+w+"px;height:"+n+"px;z-index:"+o.baseZIndex(9999)+";")+"'>").appendTo(g,i);g.offset(v);a.flashPos=
g;g=new F({src:I,ajbridge:!0,methods:"getReady,removeFile,lock,unlock,setAllowMultipleFiles,setFileFilters,uploadAll".split(","),render:g,attrs:{width:w,height:n},params:{wmode:"transparent",flashVars:{allowedDomain:location.hostname,btn:!0,hand:!0}}});a.uploader=g;g.on("mouseOver",function(){p.addClass(h("{prefixCls}editor-button-hover",b),i)});g.on("mouseOut",function(){p.removeClass(h("{prefixCls}editor-button-hover",b),i)});a.addRes(g);var x=c.get("document")[0];e.on("click",function(b){for(var d=
r.all("tr"),e=0;e<d.length;e++){var g=k(d[e]),h=g.attr("url");h&&((new Image).src=h,c.insertElement(k("<p>&nbsp;<img src='"+h+"'/>&nbsp;</p>",x)),a._removeTrFile(g))}h&&(j.hide(),f.hide());b.halt()});a.addRes(e);q.on("click",function(b){for(var c=r.all("tr"),d=0;d<c.length;d++){var e=k(c[d]);a._removeTrFile(e)}j.hide();b.halt()});a.addRes(q);r.on("click",function(d){var e=k(d.target),f;d.halt();if(e.hasClass(h("{prefixCls}editor-upload-insert",b),i)){f=e.parent("tr");var g=f.attr("url");(new Image).src=
g;c.insertElement(k("<img src='"+g+"'/>",null,c.get("document")[0]))}if(e.hasClass(h("{prefixCls}editor-upload-delete",b),i)||e.hasClass(h("{prefixCls}editor-upload-insert",b),i))f=e.parent("tr"),a._removeTrFile(f);if(e.hasClass(h("{prefixCls}editor-upload-moveup",b),i)){if(f=e.parent("tr"),f.css("backgroundColor","#eef4f9"),f.animate({backgroundColor:"#FBFBFB"},1,null,function(){f.css("backgroundColor","")}),e=f.prev(i,i))z(f[0],e[0]),a._syncStatus()}else if(e.hasClass(h("{prefixCls}editor-upload-movedown",
b),i)&&(f=e.parent("tr"),f.css("backgroundColor","#eef4f9"),f.animate({backgroundColor:"#FBFBFB"},1,null,function(){f.css("backgroundColor","")}),e=f.next()))z(f[0],e[0]),a._syncStatus();d.halt()});a.addRes(r);g.on("fileSelect",a._onSelect,a);g.on("uploadStart",a._onUploadStart,a);g.on("uploadProgress",a._onProgress,a);g.on("uploadCompleteData",a._onUploadCompleteData,a);g.on("contentReady",a._ready,a);g.on("uploadError",a._uploadError,a);u.ready?u.ready(function(){a._restore()}):a._restore();var e=
d.previewWidth,A=d.previewSuffix;if(e){var t=(new (l.require("overlay"))({mask:!1,prefixCls:h("{prefixCls}editor-",b),width:e,render:j})).render();a.addRes(t);var B=t.get("contentEl");B.css("border","none");var C=0;j.on("mouseover",function(a){if(a=k(a.target).parent(h(".{prefixCls}editor-upload-filename",b))){var c=a.parent("tr");if(c.hasClass(h("{prefixCls}editor-upload-complete",b),i)){var d=c.attr("url"),c=c.attr("fid");d&&(c!=C&&(C=c,A&&(d=d.replace(/(\.\w+$)/,A)),B.html("<img style='display:block;' src='"+
d+"' />")),d=m.offset(a),d.left+=a[0].offsetWidth,t.set("xy",[d.left,d.top]),t.show())}}else t.hide()});a.addRes(j)}!G.webkit&&9!=o.Utils.ieEngine&&f.set("handlers",[f.get("el")])}},_removeTrFile:function(a){var c=this.progressBars,b=a.attr("fid"),d=this.uploader;if(b)try{d.removeFile(b)}catch(f){}c[b]&&(c[b].destroy(),delete c[b]);a.remove();this.denable();this._syncStatus()},_realShow:function(){this.dialog.center();this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var c=
this.editor.get("prefixCls"),b=this.progressBars,d=this.uploader,f=a.id||a.file&&a.file.id;if(f){var e=this._getFileTr(f),g=b[f],j=a.status;d.removeFile(f);a._custom||(j="\u670d\u52a1\u5668\u51fa\u9519\u6216\u683c\u5f0f\u4e0d\u6b63\u786e");e&&(g&&g.destroy(),delete b[f],e.one(h(".{prefixCls}editor-upload-progress",c)).html("<div style='color:red;'>"+j+"</div>"))}},_getFileTr:function(a){for(var c=this._list.all("tr"),b=0;b<c.length;b++){var d=k(c[b]);if(d.attr("fid")==a)return d}},_onUploadStart:function(a){var a=this._getFileTr(a.id||a.file&&a.file.id),
c=this.editor.get("prefixCls");a[0].className=h("{prefixCls}editor-upload-uploading",c)},_onUploadCompleteData:function(a){var c=this.uploader,b=this.editor.get("prefixCls"),d=l.trim(a.data).replace(/\r|\n/g,"");if(a=a.file.id)try{c.removeFile(a)}catch(f){}if(d){try{d=q.parse(d)}catch(e){throw e;}if(d.error)this._uploadError({id:a,_custom:1,status:d.error});else{if(c=this._getFileTr(a))c.one(h(".{prefixCls}editor-upload-insert",b)).show(),this._tagComplete(c,d.imgUrl);this._syncStatus()}}},_onProgress:function(a){var c=
Math.floor(100*a.bytesLoaded/a.bytesTotal);(a=this.progressBars[a.file.id])&&a.set("progress",c)},ddisable:function(){var a=this.editor.get("prefixCls");this.uploader.lock();this.btn.addClass(h("{prefixCls}editor-button-disabled",a),i);this.flashPos.offset({left:-9999,top:-9999})},denable:function(){var a=this.editor.get("prefixCls");this.uploader.unlock();this.btn.removeClass(h("{prefixCls}editor-button-disabled",a),i);this.flashPos.offset(this.btn.offset())},_syncStatus:function(){var a=this._list,
c=1,b=a.all("tr"),d=this.editor.get("prefixCls");if(0==b.length)this._listWrap.hide();else{a.all(h(".{prefixCls}editor-upload-seq",d)).each(function(a){a.html(c++)});for(d=a=0;d<b.length;d++)k(b[d]).attr("url")||a++;this.statusText.html("\u961f\u5217\u4e2d\u5269\u4f59"+a+"\u5f20\u56fe\u7247\uff0c\u70b9\u51fb\u786e\u5b9a\u4e0a\u4f20\uff0c\u5f00\u59cb\u4e0a\u4f20\u3002 ")}this._save()},_restore:function(){var a=u.getItem("Multiple-Upload-Save"),c=this._list[0];if(a){for(var a=q.parse(l.urlDecode(a)),b=0;b<a.length;b++){var d=a[b];d.complete=1;d.fid="restore_"+b;this._tagComplete(this._createFileTr(c,d),
d.url)}d&&(this._listWrap.show(),this._syncStatus())}},_tagComplete:function(a,c){var b=this.editor.get("prefixCls");a.attr("url",c);a[0].className=h("{prefixCls}editor-upload-complete",b)},_save:function(){for(var a=this._list.all("tr"),c=[],b=this.editor.get("prefixCls"),d=0;d<a.length;d++){var f=k(a[d]),e=f.attr("url");if(e){var g=f.one(h(".{prefixCls}editor-upload-filesize",b)).html(),f=f.one(h(".{prefixCls}editor-upload-filename",b)).text();c.push({name:f,size:g,url:e})}}u.setItem("Multiple-Upload-Save",
encodeURIComponent(q.stringify(c)))},_getFilesSize:function(a){var c=0,b;for(b in a)c++;return c},_createFileTr:function(a,c){var b=this.editor,d=this.progressBars,f=c.fid,e=a.insertRow(-1),g=this.editor.get("prefixCls");m.attr(e,"fid",f);var j=e.insertCell(-1);m.attr(j,"class",h("{prefixCls}editor-upload-seq",g));j=e.insertCell(-1);18<c.name.length&&(c.name=c.name.substring(0,18)+"...");m.html(j,"<div style='width:160px;overflow:hidden;'><div style='width:9999px;text-align:left;'>"+c.name+"</div></div>");
m.attr(j,"class",h("{prefixCls}editor-upload-filename",g));j=e.insertCell(-1);m.html(j,c.size);m.attr(j,"class",h("{prefixCls}editor-upload-filesize",g));j=e.insertCell(-1);m.attr(j,"class",h("{prefixCls}editor-upload-progress",g));j=e.insertCell(-1);m.html(j,h("<a class='{prefixCls}editor-upload-moveup' href='#'>[\u4e0a\u79fb]</a> &nbsp; <a class='{prefixCls}editor-upload-movedown' href='#'>[\u4e0b\u79fb]</a> &nbsp; <a href='#' class='{prefixCls}editor-upload-insert' style='"+(c.complete?"":"display:none;")+"' >[\u63d2\u5165]</a> &nbsp; <a href='#' class='{prefixCls}editor-upload-delete'>[\u5220\u9664]</a> &nbsp;",
g));e=k(e);parseInt(c.size)>this._sizeLimit?(this._uploadError({id:f,_custom:1,status:"\u56fe\u7247\u592a\u5927\uff0c\u8bf7\u538b\u7f29\u81f3 n M\u4ee5\u4e0b".replace(/n/,this._sizeLimit/1E3)}),this.uploader.removeFile(f)):(d[f]=new x({container:e.one(h(".{prefixCls}editor-upload-progress",g)),width:"100px",height:"15px",prefixCls:b.get("prefixCls")}),c.complete&&d[f].set("progress",100));return e},_onSelect:function(a){var c=this.uploader,b=this._list,d=0,a=a.fileList,f=this._numberLimit;if(a){f=b.children("tr");for(b=0;b<f.length;b++){var e=m.attr(f[b],
"fid");e&&a[e]&&delete a[e]}f=this._numberLimit-f.length;e=this._getFilesSize(a);e>f&&alert("\u7cfb\u7edf\u5c06\u53ea\u4fdd\u7559 n \u5f20".replace(/n/,this._numberLimit));e>=f&&this.ddisable();this._listWrap.show();e=this._list[0];for(b in a){d++;var g=a[b],h=Math.floor(g.size/1E3),i=g.id;d>f?c.removeFile(i):this._createFileTr(e,{size:h+"k",fid:i,name:g.name})}this._syncStatus()}},_ready:function(){var a=this,c=a.uploader,b=a.up,d=a.btn,f=a.flashPos,e=o.Utils.normParams,g=a.editor.get("prefixCls");"ready"!=c.getReady()?(a.tipSpan.html("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5f53\u524d\u6d4f\u89c8\u5668\uff0c\u5e76\u540c\u65f6 <a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a> flash \u63d2\u4ef6"),
f.offset({left:-9999,top:-9999})):(d.removeClass(h("{prefixCls}editor-button-disabled",g),i),f.offset(d.offset()),c.setAllowMultipleFiles(!0),c.setFileFilters([{ext:"*.jpeg;*.jpg;*.png;*.gif",desc:"\u56fe\u7247\u6587\u4ef6( png,jpg,jpeg,gif )"}]),b.detach(),b.on("click",function(b){c.uploadAll(a._ds,"POST",e(a._dsp),a._fileInput);b.halt()}),a.addRes(b))}});return s},{requires:"editor,component/plugin/drag,../progressbar/,../overlay/,../flash-bridge/,../local-storage/,swf".split(",")});
