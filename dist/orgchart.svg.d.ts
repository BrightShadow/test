import 'snapsvg';
import 'snap.svg.zpd';
import { OrgChartConfig } from "./org.chart.config";
export declare class OrgChartSvg {
    private config;
    private levels;
    private snap;
    private lineGroups;
    private linesGroupIdPrefix;
    private lineParentIdAttribute;
    private lineToAttr;
    private lineHorizontal;
    private nodesGroupIdPrefix;
    private nodeIdPrefix;
    private overlayElement;
    private rootNodePosition;
    constructor(config?: OrgChartConfig);
    private initDefaultConfig();
    private clear();
    private analyzeTreeLevels(node, level?);
    /**
     * Checks  the node children should be stack in tip-over convention.
     * @param node An input node to check.
     * @returns {boolean} Returns true or false regarding it is a candidate to tip-over children or not.
     */
    private isNodeTipOver(node);
    private createPlaceholder(levelNode, level);
    /**
     * The same method as calcChildren but calculate a tip-over subtree, not a default subtree tree.
     * Traverses across the three through the children to calculate the widths of nodes and their containers.
     * Method adds also all node level info records to levels. It is a source info for render method.
     * @param node A parent node to check.
     * @param level Current level for the parent node.
     * @returns {number} A total container width for the node.
     */
    private calcTipOverChildren(node, level?, parentNode?, justAnalyze?);
    /**
     * Builds new level node record using existing node and level,
     * creates also level if it is needed to create a level node.
     * @param node A ChartNode record
     * @param level A level to be used to assign with the node
     * @param addNode Determines if new level node should be added to levels after creation.
     * @returns {OrgChartLevelNode} New level node with 0 containerWidth.
     */
    private buildLevelNode(node, level, addNode?);
    private getTipOverTreeWidth(columns);
    /**
     * Calculates a special number of gaps used to position the tip-over columns.
     * @param columnsCount A number of columns.
     * @returns {number} Value which multiplied by gapH will result in the width of all column gaps.
     */
    private getGapsCountForTipOverColumns(columnsCount);
    /**
     * Creates new level of nodes in a set, if not exists.
     * @param level A level index which is required to exist.
     */
    private createLevelIfNotExists(level);
    /**
     * Traverses into the three through the children to calculate the widths of nodes and their containers.
     * Method adds also all node level info records to levels. It is a source info for render method.
     * @param node A parent node to check.
     * @param level Current level for the parent node.
     * @returns {number} A total container width for the node.
     */
    private calcChildren(node, level?, parentNode?);
    /**
     * Generates a placeholder nodes below the node down to
     * last level. The node musn't have children.
     * @param levelNode The node to be processed.
     * @returns {number} A number of placeholders added below the given level node.
     */
    private generateNodePlaceholders(levelNode);
    private generatePlaceholdersForTipOverTree(level, count, columnsCount);
    private getSingleNodeWidth(node);
    private getSingleNodeHeight(node);
    private render();
    private renderConnectorLine(x, y, x2, y2, node, connectorType, fromToHorizontal?);
    private buildRenderedChartNode(node, level, index);
    /**
     * Creates an overlay element in the DOM using internal template.
     */
    private createOverlayElement();
    private showOverlay();
    private hideOverlay();
    /**
     * Joins all node templates and fragments into one single string ready to render.
     * Nodes are joined wrapping them in SVG groups, to allow further tree manipulation after render.
     * @param rootNode A root node of the whole tree.
     * @param fragment An initial fragment which will be concatenated with other fragments.
     * @returns {string} A final fragment ready to render.
     */
    private joinTemplatesFragments(rootNode, fragment?);
    /**
     * Wraps template of node box in group tag with additional information about the node,
     * e.g. the x,y coordinates and width,height of the node box.
     * Note: The information is used in collapse/expand behavior and to position the box in the diagram.
     * @param template The template of the node - filled in with data.
     * @param args Arguments used to extract information for attributes.
     * @returns {string} Wrapped template string ready to add to the SVG DOM.
     */
    private wrapTemplateInfoGroup(template, args);
    private surroundWithColumnGroup(fragment, parent);
    private fireEventBeforeRender(templatesFragment);
    private fireEventAfterRender();
    private fireEventBoxRender(onRenderBoxArgs, node);
    /**
     * A post render event attacher. Attaches all events handled by the chart, called
     * user interaction events.
     */
    private attachOrgChartEvents();
    /**
     * Performs a toggle collapse/expand behavior.
     * @param levelNode A node which will be treated as central node.
     * @param infoRecord Additional information record for node - it is saved in the node element attribute.
     */
    private toggleNodeCollapse(levelNode, infoRecord);
    /**
     * Founds all siblings for the given central node.
     * @param levelNode A central node whom siblings are searched for.
     * @returns {SiblingNodesSet} A set of siblings on the left and right side.
     */
    private getNodeSiblings(levelNode);
    /**
     * Collapses given node, by collapsing all its children - using animation.
     * @param levelNode A central node whom children will be collapsed/expanded.
     * @param infoRecord An additional record information.
     * @returns {boolean} True if the operation succeeded or false when not or when was canceled.
     */
    private collapseCentralNode(levelNode, infoRecord);
    /**
     * Moves closer for collapse, further for expand, all sibling nodes - groups.
     * @param levelNode A central node - expanded or collapsed.
     * @param moveDelta A width by whom the sibling nodes are moved.
     * @param siblings A collection of siblings found for levelNode.
     */
    private adjustSiblingNodesByDelta(levelNode, isCollapsed, moveDelta, siblings);
    /**
     * Finds all line elements matching the given filter.
     * @param filter One of the filters in this object must used.
     * @returns {Snap.Element[]}  A set of line elements.
     */
    private findLinesByFilter(filter);
    /**
     * Searches a group of lines for given parent node id.
     * @param parentNodeId An id of node which is a parent of all nodes connected by those lines.
     * @returns {Snap.Element} A nodes group element.
     */
    private findLinesGroupById(parentNodeId);
    /**
    * Searches a group of nodes for given parent node id.
    * @param parentNodeId An id of node which is a parent of all child nodes below the.
    * @returns {Snap.Element} A nodes group element.
    */
    private findNodesGroupByParentId(parentNodeId);
    /**
     * Searches a single node element by its id.
     * @param nodeId An id of node to find.
     * @returns {Snap.Element} An element of the node.
     */
    private findNodeById(nodeId);
}
