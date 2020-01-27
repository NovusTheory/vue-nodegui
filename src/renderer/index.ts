import { createRenderer, warn, App, RootRenderFunction, CreateAppFunction } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';
import { VNNode, VNElement } from '../components';
import { Window } from '../components/Window';

const { render: baseRender, createApp: baseCreateApp } = createRenderer<VNNode, VNElement>({
    patchProp,
    ...nodeOps
})

export const render = baseRender as RootRenderFunction<VNNode, VNElement>;

export const createApp: CreateAppFunction<VNElement> = (...args) => {
    const app = baseCreateApp(...args);

    const mount = app.mount;
    app.mount = (rootContainer: Window): any => {
        return mount(rootContainer);
    }

    return app
}