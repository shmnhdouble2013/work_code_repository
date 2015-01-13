/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Sep 17 22:57
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/content-render/content-xtpl
 component/extension/content-render
*/

/*
  Generated by kissy-xtemplate.*/
KISSY.add('component/extension/content-render/content-xtpl', function () {
    return function (scopes, S, undefined) {
        var buffer = "",
            config = this.config,
            engine = this,
            utils = config.utils;
        var runBlockCommandUtil = utils["runBlockCommand"],
            getExpressionUtil = utils["getExpression"],
            getPropertyOrRunCommandUtil = utils["getPropertyOrRunCommand"];
        buffer += '<div id="ks-content-';
        var id0 = getPropertyOrRunCommandUtil(engine, scopes, {}, "id", 0, 1, undefined, false);
        buffer += getExpressionUtil(id0, true);
        buffer += '"\r\n           class="';
        var config2 = {};
        var params3 = [];
        params3.push('content');
        config2.params = params3;
        var id1 = getPropertyOrRunCommandUtil(engine, scopes, config2, "getBaseCssClasses", 0, 2, true, undefined);
        buffer += id1;
        buffer += '">';
        var id4 = getPropertyOrRunCommandUtil(engine, scopes, {}, "content", 0, 2, undefined, false);
        buffer += getExpressionUtil(id4, false);
        buffer += '</div>';
        return buffer;
    }
});
/**
 * @ignore
 * common content box render
 * @author yiminghe@gmail.com
 */
KISSY.add('component/extension/content-render', function (S, ContentTpl) {
    function shortcut(self) {
        var control = self.control;
        var contentEl = control.get('contentEl');
        self.$contentEl = control.$contentEl = contentEl;
        self.contentEl = control.contentEl = contentEl[0];
    }

    /**
     * content-render extension for component system
     * @class KISSY.Component.Extension.ContentRender
     */
    function ContentRender() {
    }

    ContentRender.prototype = {
        __beforeCreateDom: function (renderData, childrenElSelectors) {
            S.mix(childrenElSelectors, {
                contentEl: '#ks-content-{id}'
            });
        },

        __createDom: function () {
            shortcut(this);
        },

        __decorateDom: function () {
            shortcut(this);
        },

        getChildrenContainerEl: function () {
            // can not use $contentEl, maybe called by decorateDom method
            return this.control.get('contentEl');
        },

        _onSetContent: function (v) {
            var control = this.control,
                contentEl = control.$contentEl;
            contentEl.html(v);
            // ie needs to set unselectable attribute recursively
            if (S.UA.ie < 9 && !control.get('allowTextSelection')) {
                contentEl.unselectable();
            }
        }
    };

    S.mix(ContentRender, {
        ATTRS: {
            contentTpl: {
                value: ContentTpl
            }
        },
        HTML_PARSER: {
            content: function (el) {
                return el.one('.' + this.getBaseCssClass('content')).html();
            },
            contentEl: function (el) {
                return el.one('.' + this.getBaseCssClass('content'));
            }
        }
    });

    return ContentRender;
}, {
    requires: ['./content-render/content-xtpl']
});

