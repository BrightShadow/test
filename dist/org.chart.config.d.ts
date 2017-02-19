import { NodeOptions } from "./node.options";
import { OrgChartNode } from "./orgchart.node";
import { OrgChartConnectorOptions } from "./orghcart.connector.options";
import { TipOverOptions } from "./tip.over.options";
import { ConfigDebugOptions } from "./config.debug.options";
import { RenderBoxEventArgs } from "./orgchart.events";
import { RenderEventArgs } from "./orgchart.events";
import { BoxClickEventArgs } from "./orgchart.events";
import { NodeToggleEventArgs } from "./orgchart.events";
import { CustomClickEventArgs } from "./orgchart.events";
export declare class OrgChartConfig {
    /**
     * An ID of the SVG element where the chart will be rendered.
     */
    svgId: string;
    nodes: OrgChartNode;
    nodeOptions: NodeOptions;
    connectorOptions: OrgChartConnectorOptions;
    tipOverOptions: TipOverOptions;
    debugOptions: ConfigDebugOptions;
    /**
     * Duration of expand/collapse animation in milliseconds. Default set to 300ms.
     */
    collapsingDuration: number;
    /**
     * Name of the attribute added to the template element which will invoke custom click events.
     */
    customClickEventAttr: string;
    /**
     * An event handler called each time the node box is drawn to the SVG canvas.
     * The handler can return a string containing a valid SVG fragment. If so, the fragment
     * will be used as a template and will be rendered to the SVG.
     */
    onBoxRender: (args: RenderBoxEventArgs) => string;
    /**
     * An event handler called before nodes are drawn to the SVG canvas.
     * The handler can return a string containing a valid SVG fragment. If so, the fragment
     * will be used as a template and will be rendered to the SVG before everything else.
     *
     * NOTE: Use this method to add defs to the SVG, to render some background effects etc.
     */
    onBeforeRender: (args: RenderEventArgs) => string;
    /**
     * An event handler called after nodes are drawn to the SVG canvas.
     *
     * NOTE: Use this method to add event handlers to already existing nodes.
     */
    onAfterRender: (args: RenderEventArgs) => void;
    /**
     * An event handler called when a node box SVG tag was clicked.
     * NOTE: Remember that only boxes with a class set in config.clickableBoxClass are used.
     * So if you are using custom template remember to add this class to the clickable area.
     */
    onBoxClick: (args: BoxClickEventArgs) => void;
    /**
     * An event handler called when a custom part of node box template was clicked.
     */
    onCustomClick: (args: CustomClickEventArgs) => void;
    /**
     * An event handler called when a collapse button was clicked and the node is beaing collapsed.
     * NOTE: Remember that only boxes with a class set in config.collapseButtonClass are used.
     * So if you are using custom template remember to add this class to the clickable area.
     */
    onNodeToggle: (args: NodeToggleEventArgs) => void;
    static defaultConfig(): OrgChartConfig;
    static getFullNodeSelectorId(node: OrgChartNode): string;
}
