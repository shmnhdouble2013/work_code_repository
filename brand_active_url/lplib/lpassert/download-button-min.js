KISSY.add(function(b){var a=b.Event;a.on(".form-download-button","click",function(e){var g=b.one(e.target),c=b.trim(g.attr("data-ms"))||5,d=g.val();b.later(h,100);b.later(f,c*1000);function h(){g.attr("disabled","disabled")}function f(){g.removeAttr("disabled")}})},{requires:["core"]});