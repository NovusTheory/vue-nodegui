import { VNText } from './VNText'
import { VNNode } from '../VNNode'

export class Text extends VNNode {
    nativeWidget: VNText = new VNText();
}