import { VNNode, VNElement, Text, View, Image, TextArea, Button } from '../components';

export const nodeOps = {
    insert: (child: VNNode, parent: VNNode, anchor?: VNNode) => {
        console.log("Inserting Element");
        parent.appendChild(child, anchor);
    },

    remove: (child: VNNode) => {
        console.log("Removing Element");
        child.remove();
    },

    createElement: (tag: string, isSVG?: boolean): VNElement => {
        console.log("Creating Element: " + tag);
        switch (tag) {
            case "p": {
                return new Text();
            }

            case "h1": {
                return new Text();
            }

            case "h2": {
                return new Text();
            }

            case "h3": {
                return new Text();
            }
            
            case "h4": {
                return new Text();
            }

            case "h5": {
                return new Text();
            }

            case "h6": {
                return new Text();
            }

            case "textarea": {
                return new TextArea();
            }

            case "div": {
                return new View();
            }

            case "span": {
                return new View();
            }

            case "img": {
                return new Image();
            }

            case "button": {
                return new Button();
            }
        }

        throw new Error("Element tag not supported.");
    },

    createText: (text: string): any => {
        console.log("Creating Text Element");
    },

    createComment: (text: string): VNElement => {
        console.log("Creating Comment");
        // This is temporary until a comment class is created
        return new View();
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
        return node.parent;
    },
    
    nextSibling: (node: VNNode): VNNode | null => {
        console.log("Get Next Sibling");
        return node.nextSibling;
    },

    querySelector: (select: string): VNElement | null => {
        console.log("Query Selector");
        return null;
    },

    setScopeId(el: VNElement, id: string) {
        console.log("Set Scope ID");
        el.setScopeId(id);
    }
}