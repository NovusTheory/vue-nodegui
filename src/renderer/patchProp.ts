import { VNNode, VNElement } from '../components'
import { VNode, ComponentInternalInstance, SuspenseBoundary } from '@vue/runtime-core'

export function patchProp(el: VNElement, key: string, nextValue: any, prevValue: any, isSVG: boolean, prevChildren?: VNode[], parentComponent?: ComponentInternalInstance, parentSuspense?: SuspenseBoundary<VNNode, VNElement>, unmountChildren?: any) {
    // Handle property patching such as class, style, etc
    console.log("Patch Prop: " + key);

    // Vue does this when checking for event patches
    if (key[0] === "o" && key[1] === "n") {
        el.patchEvent(key.slice(2).toLowerCase(), nextValue, prevValue);
    } else {
        el.patchProp(key, nextValue);
    }
}