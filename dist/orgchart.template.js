"use strict";
require("snapsvg");
require("snap.svg.zpd");
var OrgChartTemplate = (function () {
    function OrgChartTemplate(snap) {
        this.snap = snap;
        this.fragment = '';
        this.definitions = '<clipPath id="a"><circle cx="45.17" cy="46.33" r="23.5" fill="none"/></clipPath>';
        this.snap.append(Snap.parse(this.definitions));
        this.snap.select('#a').toDefs();
    }
    OrgChartTemplate.prototype.replaceAll = function (target, search, replacement) {
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    OrgChartTemplate.prototype.collect = function (args) {
        var tpl = this.replaceAll(this.nodeTemplate, '##x##', args.x + '');
        tpl = this.replaceAll(tpl, '##y##', args.y + '');
        this.fragment += tpl;
    };
    OrgChartTemplate.prototype.getTemplateFragment = function () {
        return Snap.parse(this.fragment);
    };
    return OrgChartTemplate;
}());
exports.OrgChartTemplate = OrgChartTemplate;
