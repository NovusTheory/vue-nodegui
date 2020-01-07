import { VNImage } from './VNImage'
import { VNNode } from '../VNNode'
import * as path from 'path'
import * as process from 'process'
import { QPixmap } from '@nodegui/nodegui';

export class Image implements VNNode {
    private nativeImage: VNImage = new VNImage();

    private getPixMap(imagePath: string): QPixmap {
        const pixMap = new QPixmap();
        pixMap.load(imagePath);
        return pixMap;
    }

    setProp(key: string, value: string): void {
        switch (key) {
            case "src": {
                const srcPath = path.join(process.cwd(), value);
                const pixMap = this.getPixMap(srcPath);
                this.nativeImage.setPixmap(pixMap);
                return;
            }
        }

        throw new Error("Prop not supported");
    }

    setText(text: string): void {
        throw new Error("Method not supported.");
    }

    appendChild(node: VNNode): void {
        throw new Error("Method not supported.");
    }

    getNative() {
        return this.nativeImage;
    }
}