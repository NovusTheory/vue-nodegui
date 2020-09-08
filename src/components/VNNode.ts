import { QWidget, QLabel, QMainWindow, QPushButton } from "@nodegui/nodegui";

export abstract class VNNode {
    /**
     * Returns the native QWidget for this object.
     */
    abstract nativeWidget: QWidget;
    public parent: VNNode | null = null;
    public previousSibling: VNNode | null = null;
    public nextSibling: VNNode | null = null;
    public children: VNNode[] = [];

    private stringifyStyle(styleObj: Object): string {
        const styleString = (
            Object.entries(styleObj).reduce((styleString, [propName, propValue]) => {
                return `${styleString}${propName}:${propValue};`;
            }, '')
        );
        return styleString;
    }

    /**
     * Patches a property on the node.
     * @param key The property key to apply the value to.
     * @param value The value to apply to the property key.
     */
    patchProp(key: string, value: any): void {
        switch (key) {
            case "id": {
                this.nativeWidget.setObjectName(value);
                break;
            }

            case "style": {
                if (value instanceof Object) {
                    this.nativeWidget.setInlineStyle(this.stringifyStyle(value as Object));
                } else {
                    throw new Error("'style' prop must be an Object");
                }
                break;
            }
            
            default: {
                this.nativeWidget.setProperty(key, value);
                break;
            }
        }
    }

    /**
     * Patches an event on the node.
     * @param key The event key to attach listener to.
     * @param callback The callback to apply to the event listener
     */
    patchEvent(key: string, nextValue: any, prevValue: any): void {
        // TODO: Implement removal of event listeners
        if (this.nativeWidget instanceof QPushButton) {
            switch (key) {
                case "click": {
                    this.nativeWidget.addEventListener("clicked", nextValue);
                    break;
                }
            }
            return;
        }

        throw new Error(`'${key}' is not a supported event`);
    }

    /**
     * Sets the text of this node.
     * Throws an exception if this node doesn't support setting text.
     * @param text The text to set on this node.
     */
    setText(text: string): void {
        if (this.nativeWidget instanceof QLabel) {
            (this.nativeWidget as QLabel).setText(text);
            return;
        } else if (this.nativeWidget instanceof QPushButton) {
            (this.nativeWidget as QPushButton).setText(text);
            return;
        }

        throw new Error("Method not supported");
    }

    /**
     * Appends a node as a child to this node.
     * Throws an exception if this node doesn't support children.
     * @param node The node to append.
     */
    appendChild(node: VNNode, anchor?: VNNode): void {
        node.parent = this;

        if (anchor) {
            let index = this.children.indexOf(anchor)
            this.children = this.children.splice(index, 0, node);
        } else {
            this.children.push(node);
        }

        let length = this.children.length
        if (length - 2 >= 0) {
            this.children[length - 2].nextSibling = node;
        }

        if (this.nativeWidget instanceof QMainWindow) {
            (this.nativeWidget as QMainWindow).setCentralWidget(node.nativeWidget);
            return;
        } else if (this.nativeWidget instanceof QWidget) {
            this.nativeWidget.layout?.addWidget(node.nativeWidget);
            return;
        }

        throw new Error("Method not supported");
    }

    /**
     * Removes a child node from this node.
     * Throws an exception if this node doesn't support children.
     * @param node The node to remove.
     */
    removeChild(node: VNNode): void {
        node.parent = this;
        let index = this.children.indexOf(node);
        if (index == this.children.length - 1) {
            this.children[index - 1].nextSibling = null;
        } else if (index < this.children.length - 1 && index > 0) {
            this.children[index - 1].nextSibling = this.children[index + 1]
        }

        this.children.splice(index, 1);

        if (this.nativeWidget instanceof QMainWindow) {
            (this.nativeWidget as QMainWindow).takeCentralWidget();
            return;
        } else if (this.nativeWidget instanceof QWidget) {
            this.nativeWidget.layout?.removeWidget(node.nativeWidget);
            return;
        }

        throw new Error("Method not supported");
    }

    /**
     * Removes the node
     */
    remove(): void {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }

    /**
     * Sets the scope id of the node
     * @param id The scope id
     */
    setScopeId(id: string): void {
        this.nativeWidget.setProperty(id, '');
    }
}