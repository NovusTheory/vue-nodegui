import { VNImage } from './VNImage'
import { VNNode } from '../VNNode'
import * as path from 'path'
import * as process from 'process'
import { QPixmap } from '@nodegui/nodegui';

export class Image extends VNNode {
    nativeWidget: VNImage = new VNImage();

    private getPixMap(imagePath: string): QPixmap {
        const pixMap = new QPixmap();
        pixMap.load(imagePath);
        return pixMap;
    }

    patchProp(key: string, value: string): void {
        switch (key) {
            case "src": {
                const srcPath = path.join(process.cwd(), value);
                const pixMap = this.getPixMap(srcPath);
                this.nativeWidget.setPixmap(pixMap);
                break;
            }

            default: {
                super.patchProp(key, value);
                break;
            }
        }
    }
}