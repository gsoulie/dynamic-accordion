export interface INode {
    parent: string;
    children: INode[];
    toggle: boolean;
    checked: boolean;
    count: number;
}
export interface ITempNode {
    parent: string;
    leaf: string;
    count: number;
}
export interface IRow {
    label: string;
    count: number;
}
