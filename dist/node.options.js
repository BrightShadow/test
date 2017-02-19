"use strict";
var NodeMargin = (function () {
    function NodeMargin(all) {
        if (all === void 0) { all = 0; }
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.top = all;
        this.right = all;
        this.bottom = all;
        this.left = all;
    }
    return NodeMargin;
}());
exports.NodeMargin = NodeMargin;
