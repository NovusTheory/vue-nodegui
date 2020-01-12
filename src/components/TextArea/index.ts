import { VNTextArea } from './VNTextArea'
import { VNNode } from '../VNNode'

export class TextArea extends VNNode {
    nativeWidget: VNTextArea = new VNTextArea();
}