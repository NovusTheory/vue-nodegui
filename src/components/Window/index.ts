import { VNWindow } from './VNWindow'
import { VNNode } from '../VNNode'
import { QIcon } from '@nodegui/nodegui';

export class Window implements VNNode {
    private nativeWindow: VNWindow = new VNWindow();

    constructor(settings: WindowSettings) {
        this.nativeWindow.resize(settings.width, settings.height);
        if (settings.windowIcon !== undefined) {
            this.nativeWindow.setWindowIcon(settings.windowIcon);
        }
        if (settings.title !== undefined) {
            this.nativeWindow.setWindowTitle(settings.title);
        }
        if (settings.styleSheet !== undefined) {
            this.nativeWindow.setStyleSheet(settings.styleSheet);
        }

        this.nativeWindow.show();
    }

    setProp(key: string, value: string): void {
        throw new Error("Method not implemented.");
    }

    setText(text: string): void {
        throw new Error("Method not implemented.");
    }

    appendChild(node: VNNode): void {
        this.nativeWindow.setCentralWidget(node.getNative());
    }

    getNative() {
        return this.nativeWindow;
    }
}

export class WindowSettings {
    public width: number = 800;
    public height: number = 600;
    public minWidth: number | undefined;
    public minHeight: number | undefined;
    public maxWidth: number | undefined;
    public maxHeight: number | undefined;
    public windowIcon: QIcon | undefined;
    public title: string | undefined;
    public styleSheet: string | undefined;

    constructor() {}
}