import { VNView } from './VNView'
import { VNNode } from '../VNNode'

export class View extends VNNode {
    nativeWidget: VNView = new VNView();

    appendChild(node: VNNode): void {
        this.nativeWidget.layout?.addWidget(node.nativeWidget);
    }
}