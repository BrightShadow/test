import { RenderBoxEventArgs } from "./orgchart.events";
export declare class OrgChartTemplate {
    private snap;
    fragment: string;
    nodeTemplate: string;
    rightConnectorTemplate: string;
    leftConnectorTemplate: string;
    topConnectorTemplate: string;
    bottomConnectorTemplate: string;
    horizontalConnectorTemplate: string;
    definitions: string;
    constructor(snap: Snap.Paper);
    private replaceAll(target, search, replacement);
    collect(args: RenderBoxEventArgs): void;
    getTemplateFragment(): any;
}
