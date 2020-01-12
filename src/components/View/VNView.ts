import { QWidget, FlexLayout } from "@nodegui/nodegui";

export class VNView extends QWidget {
    constructor() {
        super();
        
        const flexLayout = new FlexLayout();
        flexLayout.setFlexNode(this.getFlexNode());
        this.setLayout(flexLayout);
    }
}