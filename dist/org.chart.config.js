"use strict";
var node_options_1 = require("./node.options");
var OrgChartConfig = (function () {
    function OrgChartConfig() {
    }
    OrgChartConfig.defaultConfig = function () {
        var config = {};
        config.svgId = 'orgChartSvg';
        config.customClickEventAttr = 'orgchart-click-event';
        config.collapsingDuration = 300;
        config.nodeOptions = {
            width: 150,
            height: 45,
            gapV: 40,
            gapH: 10,
            margin: new node_options_1.NodeMargin(),
            background: 'rgba(10,30,200,0.5)',
            textColor: 'white',
            nodeClass: 'orgchart-node',
            nodeAttribute: 'orgchart-node',
            collapsible: false,
            clickableBoxClass: 'orgchart-box',
            collapseButtonClass: 'orgchart-collapse-btn'
        };
        config.connectorOptions = {};
        config.connectorOptions.strokeWidth = 1;
        config.connectorOptions.color = '#bcbec0';
        config.tipOverOptions = {
            minChildrenCount: 3,
            maxColumnHeight: 12,
            tipOverChildrenCount: 30
        };
        config.debugOptions = {
            showPlaceholderBoxes: false,
            placeholderBoxesColor: 'rgba(0,0,0,0.05)'
        };
        config.nodes = {
            id: '1',
            parentId: null,
            data: { text: "Root" },
            children: []
        };
        config.onBoxRender = function (args) {
            if (args.node.isPlaceholder) {
                args.paper.rect(args.x, args.y, args.width, args.height).attr({ fill: args.config.debugOptions.placeholderBoxesColor });
            }
            else {
                args.paper.rect(args.x, args.y, args.width, args.height).attr({ fill: args.config.nodeOptions.background });
                args.paper.text(args.x + 20, args.y + 26, [args.node.data.text]).attr({ fill: args.config.nodeOptions.textColor });
            }
            return null; // ignore templating, draw rectangles by myself
        };
        return config;
    };
    OrgChartConfig.getFullNodeSelectorId = function (node) {
        // TODO: remove hardcoded prefix and use variable/const instead
        return '#orgchartNode' + node.id;
    };
    return OrgChartConfig;
}());
exports.OrgChartConfig = OrgChartConfig;
