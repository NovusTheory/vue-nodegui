import { VNWindow } from './VNWindow'
import { VNNode } from '../VNNode'
import { QIcon } from '@nodegui/nodegui';

export class Window extends VNNode {
    nativeWidget: VNWindow = new VNWindow();

    constructor(settings: WindowSettings) {
        super();

        this.nativeWidget.resize(settings.width, settings.height);
        if (settings.windowIcon !== undefined) {
            this.nativeWidget.setWindowIcon(settings.windowIcon);
        }
        if (settings.title !== undefined) {
            this.nativeWidget.setWindowTitle(settings.title);
        }
        if (settings.styleSheet !== undefined) {
            this.nativeWidget.setStyleSheet(settings.styleSheet);
        }
        if (settings.minWidth !== undefined && settings.minHeight !== undefined) {
            this.nativeWidget.setMinimumSize(settings.minWidth, settings.minHeight);
        }
        if (settings.maxWidth !== undefined && settings.maxHeight !== undefined) {
            this.nativeWidget.setMaximumSize(settings.maxWidth, settings.maxHeight);
        }

        this.nativeWidget.show();
    }

    appendChild(node: VNNode): void {
        this.nativeWidget.setCentralWidget(node.nativeWidget);
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