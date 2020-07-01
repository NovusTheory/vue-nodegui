import { VNButton } from './VNButton'
import { VNNode } from '../VNNode'

export class Button extends VNNode {
    nativeWidget: VNButton = new VNButton();
}