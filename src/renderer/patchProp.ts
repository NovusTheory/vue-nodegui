import { VNNode, VNElement } from '../components'
import { VNode, ComponentInternalInstance, SuspenseBoundary } from '@vue/runtime-core'

export function patchProp(el: VNElement, key: string, nextValue: any, prevValue: any, isSVG: boolean, prevChildren?: VNode[], parentComponent?: ComponentInternalInstance, parentSuspense?: SuspenseBoundary<VNNode, VNElement>, unmountChildren?: any) {
    // Handle property patching such as class, style, etc
    console.log("Patch Prop: " + key);
    el.setProp(key, nextValue);
}