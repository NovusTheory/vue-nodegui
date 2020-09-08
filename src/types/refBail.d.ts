import { VNNode } from '../components';
import { Window } from '../components/Window';

declare module '@vue/reactivity' {
    export interface RefUnwrapBailTypes {
      runtimeDOMBailTypes: VNNode | Window
    }
  }