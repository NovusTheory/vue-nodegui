export interface VNNode {
    setProp(key: string, value: string): void;
    setText(text: string): void;
    appendChild(node: VNNode): void;
    getNative(): any;
}