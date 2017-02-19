export interface NodeOptions {
    width: number;
    height: number;
    gapH: number;
    gapV: number;
    margin: NodeMargin;
    background: string;
    textColor: string;
    nodeClass: string;
    clickableBoxClass: string;
    collapseButtonClass: string;
    nodeAttribute: string;
    collapsible: boolean;
}
export declare class NodeMargin {
    top: number;
    right: number;
    bottom: number;
    left: number;
    constructor(all?: number);
}
