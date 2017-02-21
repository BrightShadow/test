declare function mina(a: number, A: number, b: number, B: number, get: Function, set: Function, easing?: (num: number) => number): mina.AnimationDescriptor;
declare namespace mina {
    interface MinaAnimation {
        id: string;
        duration: Function;
        easing: Function;
        speed: Function;
        status: Function;
        stop: Function;
    }
    interface AnimationDescriptor {
        id: string;
        start: number;
        end: number;
        b: number;
        s: number;
        dur: number;
        spd: number;
        get(): number;
        set(slave: number): number;
        easing(input: number): number;
        status(): number;
        status(newStatus: number): void;
        speed(): number;
        speed(newSpeed: number): void;
        duration(): number;
        duration(newDuration: number): void;
        stop(): void;
        pause(): void;
        resume(): void;
        update(): void;
    }
    function backin(n: number): number;
    function backout(n: number): number;
    function bounce(n: number): number;
    function easein(n: number): number;
    function easeinout(n: number): number;
    function easeout(n: number): number;
    function elastic(n: number): number;
    function getById(id: string): AnimationDescriptor;
    function linear(n: number): number;
    function time(): number;
}
declare function Snap(width: number | string, height: number | string): Snap.Paper;
declare function Snap(query: string): Snap.Paper;
declare function Snap(DOM: SVGElement): Snap.Paper;
declare namespace Snap {
    var filter: Filter;
    var path: Path;
    function Matrix(): void;
    function matrix(): Matrix;
    function matrix(a: number, b: number, c: number, d: number, e: number, f: number): Matrix;
    function matrix(svgMatrix: SVGMatrix): Matrix;
    function ajax(url: string, postData: string, callback: Function, scope?: Object): XMLHttpRequest;
    function ajax(url: string, postData: Object, callback: Function, scope?: Object): XMLHttpRequest;
    function ajax(url: string, callback: Function, scope?: Object): XMLHttpRequest;
    function format(token: string, json: Object): string;
    function fragment(varargs: any): Fragment;
    function getElementByPoint(x: number, y: number): Snap.Element;
    function is(o: any, type: string): boolean;
    function load(url: string, callback: Function, scope?: Object): void;
    function plugin(f: Function): void;
    function select(query: string): Snap.Element;
    function selectAll(query: string): any;
    function snapTo(values: Array<number>, value: number, tolerance?: number): number;
    function animate(from: number | number[], to: number | number[], updater: (n: number) => void, duration: number, easing?: (num: number) => number, callback?: () => void): mina.MinaAnimation;
    function animation(attr: Object, duration: number, easing?: (num: number) => number, callback?: () => void): Snap.Animation;
    function color(clr: string): RGBHSB;
    function getRGB(color: string): RGB;
    function hsb(h: number, s: number, b: number): HSB;
    function hsl(h: number, s: number, l: number): HSL;
    function rgb(r: number, g: number, b: number): RGB;
    function hsb2rgb(h: number, s: number, v: number): RGB;
    function hsl2rgb(h: number, s: number, l: number): RGB;
    function rgb2hsb(r: number, g: number, b: number): HSB;
    function rgb2hsl(r: number, g: number, b: number): HSL;
    function angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;
    function rad(deg: number): number;
    function deg(rad: number): number;
    function sin(angle: number): number;
    function cos(angle: number): number;
    function tan(angle: number): number;
    function asin(angle: number): number;
    function acos(angle: number): number;
    function atan(angle: number): number;
    function atan2(angle: number): number;
    function len(x1: number, y1: number, x2: number, y2: number): number;
    function len2(x1: number, y1: number, x2: number, y2: number): number;
    function parse(svg: string): Fragment;
    function parsePathString(pathString: string): Array<any>;
    function parsePathString(pathString: Array<string>): Array<any>;
    function parseTransformString(TString: string): Array<any>;
    function parseTransformString(TString: Array<string>): Array<any>;
    function closest(x: number, y: number, X: number, Y: number): boolean;
    interface RGB {
        r: number;
        g: number;
        b: number;
        hex: string;
    }
    interface HSB {
        h: number;
        s: number;
        b: number;
    }
    interface RGBHSB {
        r: number;
        g: number;
        b: number;
        hex: string;
        error: boolean;
        h: number;
        s: number;
        v: number;
        l: number;
    }
    interface HSL {
        h: number;
        s: number;
        l: number;
    }
    interface BBox {
        cx: number;
        cy: number;
        h: number;
        height: number;
        path: number;
        r0: number;
        r1: number;
        r2: number;
        vb: string;
        w: number;
        width: number;
        x2: number;
        x: number;
        y2: number;
        y: number;
    }
    interface TransformationDescriptor {
        string: string;
        globalMatrix: Snap.Matrix;
        localMatrix: Snap.Matrix;
        diffMatrix: Snap.Matrix;
        global: string;
        local: string;
        toString(): string;
    }
    interface Animation {
        attr: {
            [attr: string]: string | number | boolean | any;
        };
        duration: number;
        easing?: (num: number) => number;
        callback?: () => void;
    }
    interface Element {
        add(el: Snap.Element): Snap.Element;
        addClass(value: string): Snap.Element;
        after(el: Snap.Element): Snap.Element;
        align(el: Snap.Element, way: string): Snap.Element;
        animate(animation: any): Snap.Element;
        animate(attrs: {
            [attr: string]: string | number | boolean | any;
        }, duration: number, easing?: (num: number) => number, callback?: () => void): Snap.Element;
        append(el: Snap.Element): Snap.Element;
        appendTo(el: Snap.Element): Snap.Element;
        asPX(attr: string, value?: string): number;
        attr(param: string): string;
        attr(params: {
            [attr: string]: string | number | boolean | any;
        }): Snap.Element;
        before(el: Snap.Element): Snap.Element;
        children(): Snap.Element[];
        clone(): Snap.Element;
        data(key: string, value?: any): any;
        getAlign(el: Snap.Element, way: string): string;
        getBBox(): BBox;
        getPointAtLength(length: number): {
            x: number;
            y: number;
            alpha: number;
        };
        getSubpath(from: number, to: number): string;
        getTotalLength(): number;
        hasClass(value: string): boolean;
        inAnim(): {
            anim: Animation;
            mina: mina.AnimationDescriptor;
            curStatus: number;
            status: (n?: number) => number;
            stop: () => void;
        }[];
        innerSVG(): string;
        insertAfter(el: Snap.Element): Snap.Element;
        insertBefore(el: Snap.Element): Snap.Element;
        marker(x: number, y: number, width: number, height: number, refX: number, refY: number): Snap.Element;
        node: HTMLElement;
        outerSVG(): string;
        parent(): Snap.Element;
        pattern(x: any, y: any, width: any, height: any): Snap.Element;
        prepend(el: Snap.Element): Snap.Element;
        prependTo(el: Snap.Element): Snap.Element;
        remove(): Snap.Element;
        removeClass(value: string): Snap.Element;
        removeData(key?: string): Snap.Element;
        select(query: string): Snap.Element;
        stop(): Snap.Element;
        toDefs(): Snap.Element;
        toJSON(): any;
        toggleClass(value: string, flag: boolean): Snap.Element;
        toPattern(x: number, y: number, width: number, height: number): Object;
        toPattern(x: string, y: string, width: string, height: string): Object;
        toString(): string;
        transform(): TransformationDescriptor;
        transform(tstr: string): Snap.Element;
        type: string;
        use(): Object;
        selectAll(): Snap.Set;
        selectAll(query: string): Snap.Set;
        click(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        dblclick(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mousedown(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mousemove(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseout(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseover(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseup(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchstart(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchmove(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchend(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchcancel(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        unclick(handler?: (event: MouseEvent) => void): Snap.Element;
        undblclick(handler: (event: MouseEvent) => void): Snap.Element;
        unmousedown(handler: (event: MouseEvent) => void): Snap.Element;
        unmousemove(handler: (event: MouseEvent) => void): Snap.Element;
        unmouseout(handler: (event: MouseEvent) => void): Snap.Element;
        unmouseover(handler: (event: MouseEvent) => void): Snap.Element;
        unmouseup(handler: (event: MouseEvent) => void): Snap.Element;
        untouchstart(handler: (event: MouseEvent) => void): Snap.Element;
        untouchmove(handler: (event: MouseEvent) => void): Snap.Element;
        untouchend(handler: (event: MouseEvent) => void): Snap.Element;
        untouchcancel(handler: (event: MouseEvent) => void): Snap.Element;
        hover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        hover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void, inThisArg?: any, outThisArg?: any): Snap.Element;
        unhover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void): Snap.Element;
        drag(): Snap.Element;
        drag(onMove: (dx: number, dy: number, x: number, y: number, event: MouseEvent) => void, onStart: (x: number, y: number, event: MouseEvent) => void, onEnd: (event: MouseEvent) => void, moveThisArg?: any, startThisArg?: any, endThisArg?: any): Snap.Element;
        undrag(onMove: (dx: number, dy: number, event: MouseEvent) => void, onStart: (x: number, y: number, event: MouseEvent) => void, onEnd: (event: MouseEvent) => void): Snap.Element;
        undrag(): Snap.Element;
    }
    interface Fragment {
        select(query: string): Snap.Element;
        selectAll(query?: string): Snap.Set;
    }
    interface Matrix {
        add(a: number, b: number, c: number, d: number, e: number, f: number): Matrix;
        add(matrix: Matrix): Matrix;
        clone(): Matrix;
        determinant(): number;
        invert(): Matrix;
        rotate(a: number, x?: number, y?: number): Matrix;
        scale(x: number, y?: number, cx?: number, cy?: number): Matrix;
        split(): ExplicitTransform;
        toTransformString(): string;
        translate(x: number, y: number): Matrix;
        x(x: number, y: number): number;
        y(x: number, y: number): number;
    }
    interface ExplicitTransform {
        dx: number;
        dy: number;
        scalex: number;
        scaley: number;
        shear: number;
        rotate: number;
        isSimple: boolean;
    }
    interface Paper extends Snap.Element {
        clear(): void;
        el(name: string, attr: Object): Snap.Element;
        filter(filstr: string): Snap.Element;
        gradient(gradient: string): any;
        g(varargs?: any): any;
        group(...els: any[]): any;
        mask(varargs: any): Object;
        ptrn(x: number, y: number, width: number, height: number, vbx: number, vby: number, vbw: number, vbh: number): Object;
        svg(x: number, y: number, width: number, height: number, vbx: number, vby: number, vbw: number, vbh: number): Object;
        toDataUrl(): string;
        toString(): string;
        use(id?: string): Object;
        use(id?: Snap.Element): Object;
        circle(x: number, y: number, r: number): Snap.Element;
        ellipse(x: number, y: number, rx: number, ry: number): Snap.Element;
        image(src: string, x: number, y: number, width: number, height: number): Snap.Element;
        line(x1: number, y1: number, x2: number, y2: number): Snap.Element;
        path(pathString?: string): Snap.Element;
        polygon(varargs: any[]): Snap.Element;
        polyline(varargs: any[]): Snap.Element;
        rect(x: number, y: number, width: number, height: number, rx?: number, ry?: number): Snap.Element;
        text(x: number, y: number, text: string | number): Snap.Element;
        text(x: number, y: number, text: Array<string | number>): Snap.Element;
    }
    interface Set {
        animate(attrs: {
            [attr: string]: string | number | boolean | any;
        }, duration: number, easing?: (num: number) => number, callback?: () => void): Snap.Element;
        animate(...params: Array<{
            attrs: any;
            duration: number;
            easing: (num: number) => number;
            callback?: () => void;
        }>): Snap.Element;
        attr(params: {
            [attr: string]: string | number | boolean | any;
        }): Snap.Element;
        attr(param: string): string;
        bind(attr: string, callback: Function): Snap.Set;
        bind(attr: string, element: Snap.Element): Snap.Set;
        bind(attr: string, element: Snap.Element, eattr: string): Snap.Set;
        clear(): Snap.Set;
        exclude(element: Snap.Element): boolean;
        forEach(callback: Function, thisArg?: Object): Snap.Set;
        pop(): Snap.Element;
        push(el: Snap.Element): Snap.Element;
        push(els: Snap.Element[]): Snap.Element;
        splice(index: number, count: number, insertion?: Object[]): Snap.Element[];
    }
    interface Filter {
        blur(x: number, y?: number): string;
        brightness(amount: number): string;
        contrast(amount: number): string;
        grayscale(amount: number): string;
        hueRotate(angle: number): string;
        invert(amount: number): string;
        saturate(amount: number): string;
        sepia(amount: number): string;
        shadow(dx: number, dy: number, blur: number, color: string, opacity: number): string;
        shadow(dx: number, dy: number, color: string, opacity: number): string;
        shadow(dx: number, dy: number, opacity: number): string;
    }
    interface Path {
        bezierBBox(...args: number[]): BBox;
        bezierBBox(bez: Array<number>): BBox;
        findDotsAtSegment(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number, t: number): Object;
        getBBox(path: string): BBox;
        getPointAtLength(path: string, length: number): Object;
        getSubpath(path: string, from: number, to: number): string;
        getTotalLength(path: string): number;
        intersection(path1: string, path2: string): Array<IntersectionDot>;
        isBBoxIntersect(bbox1: BBox, bbox2: BBox): boolean;
        isPointInside(path: string, x: number, y: number): boolean;
        isPointInsideBBox(bbox: BBox, x: number, y: number): boolean;
        map(path: string, matrix: Snap.Matrix): string;
        map(path: string, matrix: Object): string;
        toAbsolute(path: string): Array<any>;
        toCubic(pathString: string): Array<any>;
        toCubic(pathString: Array<string>): Array<any>;
        toRelative(path: string): Array<any>;
    }
    interface IntersectionDot {
        x: number;
        y: number;
        t1: number;
        t2: number;
        segment1: number;
        segment2: number;
        bez1: Array<number>;
        bez2: Array<number>;
    }
}
declare module "snapsvg" {
    export = Snap;
}
declare module "config.debug.options" {
    export interface ConfigDebugOptions {
        showPlaceholderBoxes: boolean;
        placeholderBoxesColor: string;
    }
}
declare module "connector.type" {
    export enum ConnectorType {
        up = 0,
        down = 1,
        left = 2,
        right = 3,
        leftDown = 4,
        rightUp = 5,
        leftUp = 6,
        horizontal = 7,
        horizontalTipOver = 8,
        horizontalSingleTipOver = 9,
    }
}
declare module "node.options" {
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
    export class NodeMargin {
        top: number;
        right: number;
        bottom: number;
        left: number;
        constructor(all?: number);
    }
}
declare module "orgchart.node" {
    export interface OrgChartNode {
        id: string;
        parentId: string;
        data: any;
        tipOverChildren?: boolean;
        children: OrgChartNode[];
        childrenCollapsed?: boolean;
    }
}
declare module "orghcart.connector.options" {
    export interface OrgChartConnectorOptions {
        strokeWidth: number;
        color: string;
    }
}
declare module "tip.over.options" {
    export interface TipOverOptions {
        /**
         * Minimum amount of node children to start tipping-over.
         */
        minChildrenCount: number;
        /**
         * Maximum number of nodes in one stacked column.
         */
        maxColumnHeight: number;
        /**
         * NUmber of children determining that the parent node should use tipping-over strategy for all those children.
         */
        tipOverChildrenCount: number;
    }
}
declare module "orgchart.events" {
    import * as Snap from 'snapsvg';
    import 'snap.svg.zpd';
    import { OrgChartNode } from "orgchart.node";
    import { OrgChartConfig } from "org.chart.config";
    /**
     * Provides information about rendering environment.
     */
    export interface RenderEventArgs {
        /**
         * A Snap.svg Paper object giving an access to the current underlying SVG paper.
         */
        paper: Snap.Paper;
        /**
         * A configuration settings actual used.
         */
        config: OrgChartConfig;
    }
    /**
     * Provides additional information about currently rendered node box.
     */
    export interface RenderBoxEventArgs extends RenderEventArgs {
        /**
         * Position X of the left upper corner of the node box.
         */
        x: number;
        /**
         * Position Y of the left upper corner of the node box.
         */
        y: number;
        /**
         * Width of the node box. The box cannot exceed this width.
         */
        width: number;
        /**
         * Height of the node box. The box cannot exceed this height.
         */
        height: number;
        /**
         * The node associated with currently rendered box.
         */
        node: RenderedChartNode;
    }
    export interface RenderedChartNode extends OrgChartNode {
        isPlaceholder: boolean;
        rowIndex: number;
        columnIndex: number;
    }
    export interface BoxClickEventArgs {
        /**
         * A native mouse event details.
         */
        event: MouseEvent;
        /**
         * The node associated with currently rendered box.
         */
        node: RenderedChartNode;
    }
    export interface NodeToggleEventArgs extends BoxClickEventArgs {
        /**
         * Determines if the corresponding node's children was collapsed (true) or not (false).
         */
        isCollapsed: boolean;
    }
    export interface CustomClickEventArgs extends BoxClickEventArgs {
        /**
         * Contains a custom click event attribute value set in template.
         */
        customName: string;
    }
}
declare module "org.chart.config" {
    import { NodeOptions } from "node.options";
    import { OrgChartNode } from "orgchart.node";
    import { OrgChartConnectorOptions } from "orghcart.connector.options";
    import { TipOverOptions } from "tip.over.options";
    import { ConfigDebugOptions } from "config.debug.options";
    import { RenderBoxEventArgs } from "orgchart.events";
    import { RenderEventArgs } from "orgchart.events";
    import { BoxClickEventArgs } from "orgchart.events";
    import { NodeToggleEventArgs } from "orgchart.events";
    import { CustomClickEventArgs } from "orgchart.events";
    export class OrgChartConfig {
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
}
declare module "orgchart.level.node" {
    import { OrgChartNode } from "orgchart.node";
    export interface OrgChartLevelNode extends OrgChartNode {
        level: number;
        isPlaceholder: boolean;
        isFirstChildOfParent: boolean;
        nodeIndexInLevel: number;
        containerWidth: number;
        width: number;
        height: number;
        parentNode: OrgChartLevelNode;
        childNodes: OrgChartLevelNode[];
        tipOverParent: boolean;
        tipOverParentLastColumnWidth: number;
        tipOverChild: boolean;
        tipOverColumnIndex: number;
        tipOverColumns: number;
        tipOverLineIndex: number;
        tipOverLinesCount: number;
        tipOverHasNodeBelow: boolean;
        tipOverLastChild: boolean;
        tipOverFirstChild: boolean;
        /**
         * The value is filled in with ready SVG fragment to add
         * to the SVG DOM, just after the renderBox event.
         */
        representationString: string;
    }
}
declare module "orgchart.level.info" {
    import { OrgChartLevelNode } from "orgchart.level.node";
    export class ChartLevelInfo {
        level: number;
        nodes: OrgChartLevelNode[];
    }
}
declare module "orgchart.svg" {
    import 'snap.svg.zpd';
    import { OrgChartConfig } from "org.chart.config";
    /**
     * Represents an Organisational Chart core component.
     * Initialize new instance of this class to run orgchart machinery.
     */
    export class OrgChartSvg {
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
}
declare module "orgchart.template" {
    import * as Snap from 'snapsvg';
    import 'snap.svg.zpd';
    import { RenderBoxEventArgs } from "orgchart.events";
    export class OrgChartTemplate {
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
}
