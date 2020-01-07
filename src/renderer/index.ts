import { createRenderer, warn, App, RootRenderFunction } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';
import { VNNode, VNElement } from '../components';
import { Window } from '../components/Window';

const { render: baseRender, createApp: baseCreateApp } = createRenderer<VNNode, VNElement>({
    patchProp,
    ...nodeOps
})

export const render = baseRender as RootRenderFunction<VNNode, VNElement>;

export const createApp = (): App<VNElement> => {
    const app = baseCreateApp();

    const mount = app.mount;
    app.mount = (component: any, rootContainer: Window, rootProps?: any | undefined): any => {
        return mount(component, rootContainer, rootProps);
    }

    return app
}