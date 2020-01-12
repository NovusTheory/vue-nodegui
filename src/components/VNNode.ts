import { QWidget, QLabel, QMainWindow, QPushButton } from "@nodegui/nodegui";

export abstract class VNNode {
    /**
     * Returns the native QWidget for this object.
     */
    abstract nativeWidget: QWidget;

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
     * 
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
    appendChild(node: VNNode): void {
        if (this.nativeWidget instanceof QMainWindow) {
            (this.nativeWidget as QMainWindow).setCentralWidget(node.nativeWidget);
        } else if (this.nativeWidget instanceof QWidget) {
            this.nativeWidget.layout?.addWidget(node.nativeWidget);
        }

        throw new Error("Method not supported");
    }
}