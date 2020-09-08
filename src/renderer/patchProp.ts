import { VNNode, VNElement } from '../components'
import { VNode, ComponentInternalInstance, RendererOptions } from '@vue/runtime-core'


export const patchProp: RendererOptions<VNNode, VNElement>['patchProp'] = (
    el,
    key,
    prevValue,
    nextValue,
    isSVG = false,
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren
) => {
    // Handle property patching such as class, style, etc
    console.log("Patch Prop: " + key);

    // Vue does this when checking for event patches
    if (key[0] === "o" && key[1] === "n") {
        el.patchEvent(key.slice(2).toLowerCase(), nextValue, prevValue);
    } else {
        el.patchProp(key, nextValue);
    }
}

/*export function patchProp(el: VNElement, key: string, prevValue: any, nextValue: any, isSVG: boolean, prevChildren?: VNode[], parentComponent?: ComponentInternalInstance, parentSuspense?: any, unmountChildren?: any) {
    // Handle property patching such as class, style, etc
    console.log("Patch Prop: " + key);

    // Vue does this when checking for event patches
    if (key[0] === "o" && key[1] === "n") {
        el.patchEvent(key.slice(2).toLowerCase(), nextValue, prevValue);
    } else {
        el.patchProp(key, nextValue);
    }
}*/