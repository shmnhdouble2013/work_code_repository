KISSY.ready(function(S){S.use("tbsui,mui/select,calendar,node,calendar/assets/dpl.css",function(S,Tbsui,Select,Calendar,Node){var OTbsui=new Tbsui;OTbsui._renderRidoCheckbox("radio",Node.one("#J_radio"));OTbsui._renderRidoCheckbox("checkbox",Node.one("#J_checkbox"));OTbsui.on("checkboxClick radioClick",function(el){console.log("fire\u4e8b\u4ef6\u5916\u90e8\u63a5\u6536\u5230\u5e76\u6267\u884c\uff1a"+el.inputTarget)});S.Event.on("input","click",function(el){console.log("\u539f\u751finput\u89e6\u53d1\u4e86"+el.target)});S.use("Validation",function(S,Validation){var form=new Validation("#J_form",{style:"tbsUiValid_under"});KISSY.Event.on("#sub_form","click",function(){alert("\u6821\u9a8c\u7ed3\u679c\uff1a"+form.isValid())})});var data=[{text:"10",value:10},{text:"20",value:20},{text:"30",value:30}];new Select({renderTo:"mui-select-sample",resultId:"mui-select-result",data:data,checkable:false});new Select({renderTo:"mui-select-sample-2",resultId:"mui-select-result-2",data:data,checkable:false});new Select({renderTo:"mui-select-sample-3",resultId:"mui-select-result-3",data:data,checkable:true});var S_Date=S.Date;new Calendar(Node.one("#calA"),{popup:true,triggerType:["click"],closable:true}).on("select",function(e){Node.one("#calA").val(S_Date.format(e.date,"yyyy\u5e74mm\u6708dd\u65e5"))});new Calendar(Node.one("#calB"),{popup:true,triggerType:["click"],closable:true,showTime:true,disabled:[new Date(2013,7,2)]}).on("timeSelect",function(e){Node.one("#calB").val(S_Date.format(e.date,"yyyy\u5e74mm\u6708dd\u65e5 HH:MM"))})})});