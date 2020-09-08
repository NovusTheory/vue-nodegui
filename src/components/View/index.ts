import { VNView } from './VNView'
import { VNNode } from '../VNNode'

export class View extends VNNode {
    nativeWidget: VNView = new VNView();
}