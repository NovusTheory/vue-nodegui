import { createRenderer, warn, App, RootRenderFunction, CreateAppFunction } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';
import { VNNode, VNElement } from '../components';
import { Window } from '../components/Window';
import * as runtimeCore from '@vue/runtime-core';

declare module '@vue/reactivity' {
    export interface RefUnwrapBailTypes {
      // Note: if updating this, also update `types/refBail.d.ts`.
      runtimeDOMBailTypes: VNNode | Window
    }
  }

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