import { VNNode, VNElement, Text, View, Image } from '../components';

export const nodeOps = {
    insert: (child: VNNode, parent: VNNode, anchor?: VNNode) => {
        console.log("Inserting Element");
        parent.appendChild(child);
    },

    remove: (child: VNNode) => {
        console.log("Removing Element");
    },

    createElement: (tag: string, isSVG?: boolean): VNElement => {
        console.log("Creating Element: " + tag);
        switch (tag) {
            case "p": {
                return new Text();
            }

            case "view": {
                return new View();
            }

            case "img": {
                return new Image();
            }
        }

        throw new Error("Element tag not supported.");
    },

    createText: (text: string): any => {
        console.log("Creating Text Element");
    },

    createComment: (text: string): any => {
        console.log("Creating Comment");
    },

    setText: (node: VNNode, text: string) => {
        console.log("Setting Text");
        node.setText(text);
    },

    setElementText: (el: VNElement, text: string) => {
        console.log("Setting Element Text");
        el.setText(text);
    },

    parentNode: (node: VNNode): VNNode | null => {
        console.log("Get Parent Node");
        return null;
    },
    
    nextSibling: (node: VNNode): VNNode | null => {
        console.log("Get Next Sibling");
        return null;
    },

    querySelector: (select: string): VNElement | null => {
        console.log("Query Selector");
        return null;
    },

    setScopeId(el: VNElement, id: string) {
        console.log("Set Scope ID");
    }
}