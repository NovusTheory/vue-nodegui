import { createRenderer, warn, App, RootRenderFunction, CreateAppFunction } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';
import { VNNode, VNElement } from '../components';
import { Window } from '../components/Window';
import * as runtimeCore from '@vue/runtime-core';

const renderer = createRenderer<VNNode, VNElement>(Object.assign({ patchProp }, nodeOps));

export const render = ((...args) => {
    renderer.render(...args)
  }) as RootRenderFunction<VNElement>

export const createApp = ((...args) => {
    const app = renderer.createApp(...args);

    const { mount } = app;
    app.mount = (rootContainer: VNElement): any => {
        const proxy = mount(rootContainer);
        return proxy;
    };

    return app;
}) as CreateAppFunction<VNElement>

/*export const render = baseRender as RootRenderFunction<VNElement>;

export const createApp: CreateAppFunction<VNElement> = (...args) => {
    const app = baseCreateApp(...args);

    const mount = app.mount;
    app.mount = (rootContainer: Window): any => {
        return mount(rootContainer);
    }

    return app
}*/