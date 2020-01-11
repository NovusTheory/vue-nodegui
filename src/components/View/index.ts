import { VNView } from './VNView'
import { VNNode } from '../VNNode'

export class View implements VNNode {
    private nativeView: VNView = new VNView();

    private stringifyStyle(styleObj: Object): string {
        const styleString = (
            Object.entries(styleObj).reduce((styleString, [propName, propValue]) => {
                return `${styleString}${propName}:${propValue};`;
            }, '')
        );
        return styleString;
    }

    setProp(key: string, value: string | Object): void {
        switch (key) {
            case "style": {
                if (value instanceof Object) {
                    this.nativeView.setStyleSheet(this.stringifyStyle(value as Object));
                } else {
                    throw new Error("'style' prop must be an Array");
                }
                return;
            }

            case "id": {
                this.nativeView.setObjectName(value as string);
                return;
            }
        }

        throw new Error("Prop not supported");
    }

    setText(text: string): void {
        throw new Error("Method not supported.");
    }

    appendChild(node: VNNode): void {
        this.nativeView.layout?.addWidget(node.getNative());
    }

    getNative() {
        return this.nativeView;
    }
}