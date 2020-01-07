import { VNText } from './VNText'
import { VNNode } from '../VNNode'

export class Text implements VNNode {
    private nativeText: VNText = new VNText();

    setProp(key: string, value: string): void {
        switch (key) {
            case "id": {
                this.nativeText.setObjectName(value);
                return;
            }
        }

        throw new Error("Prop not supported");
    }

    setText(text: string): void {
        this.nativeText.setText(text);
    }

    appendChild(node: VNNode): void {
        throw new Error("Method not supported.");
    }

    getNative() {
        return this.nativeText;
    }
}