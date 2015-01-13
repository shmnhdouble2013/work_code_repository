/*
Copyright 2013, KISSY UI Library v1.32
MIT Licensed
build time: Aug 15 00:07
*/
/**
 *  separator def
 * @author yiminghe@gmail.com
 */
KISSY.add("separator", function (S, Component, SeparatorRender) {

    /**
     * @extends KISSY.Component.Controller
     * @class
     * separator.
     * xclass: 'separator'.
     * @name Separator
     */
    var Separator = Component.Controller.extend({
    }, {
        ATTRS:/**
         * @lends Separator#
         */
        {

            /**
             * Un-focusable.
             * readonly.
             * Defaults to: false.
             */
            focusable:{
                value:false
            },

            disabled:{
                value:true
            },

            handleMouseEvents:{
                value:false
            },

            xrender:{
                value:SeparatorRender
            }
        }
    }, {
        xclass:'separator'
    });

    return Separator;

}, {
    requires:['component/base', 'separator/separatorRender']
});/**
 *  separator render def
 * @author yiminghe@gmail.com
 */
KISSY.add("separator/separatorRender", function (S, Component) {

    return Component.Render.extend({
        createDom:function () {
            this.get("el").attr("role", "separator");
        }
    });

}, {
    requires:['component/base']
});
