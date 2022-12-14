import type { VNode, ComponentInterface } from '@stencil/core';
import type { HTMLStencilElement, RenderNode } from '@stencil/core/internal';

export interface TabsMap {
  [tabId: number]: boolean;
}

export interface InjectorsMap {
  [tabId: number]: chrome.runtime.Port;
}

export interface Message<T = any> {
  source?: string;
  data?: {
    sender?: string;
    type?: string;
    value?: T;
  };
}

export interface ItemData {
  label: string | number;
  type: string;
  value: string;
  subvalue: ItemData;
  edit: {
    enable: boolean;
    member: string;
    instance: boolean;
    type: string;
  };
  expand: {
    enable: boolean;
    value: ItemData[]
  };
}

export interface ValueObject<T> {
  __stencil_obj_type__: 'value';
  __stencil_obj_edit__?: boolean;
  __stencil_obj_edit_member__?: string;
  __stencil_obj_edit_instance__?: boolean;
  __stencil_obj_edit_type__?: string;
  value: T;
}

export interface MemberData {
  name: string;
  type?: string;
  connect?: string;
  context?: string;
  mutable?: false;
  watchers?: {
    [name: string]: Function;
  }[];
  value: ValueObject<any>;
}

export interface EmitterData {
  bubbles: boolean;
  cancelable: boolean;
  composed: boolean;
  value: ValueObject<Function>;
}

export interface ListenerData {
  capture: boolean;
  disabled: boolean;
  passive: boolean;
  value: ValueObject<Function>;
}

export interface MembersMap {
  [label: string]: MemberData | ValueObject<any>;
}

export interface CategoryData {
  label: string;
  items: MemberData[] | {
    emitters: MemberData[];
    listeners: MemberData[];
  };
}

export interface ParsedCategoryData {
  label: string;
  items: ItemData[];
}

export interface GroupData {
  status: {
    success: boolean;
    message: string;
  };
  categories: CategoryData[];
}

export interface ParsedGroupData {
  status: {
    success: boolean;
    message: string;
  };
  categories: ParsedCategoryData[];
}

export interface DevInspectorMeta {
  renderCount: number;
  flags: {
    hasRendered: boolean;
    hasConnected: boolean;
    isWaitingForChildren: boolean;
    isConstructingInstance: boolean;
    isQueuedForUpdate: boolean;
    hasInitializedComponent: boolean;
    hasLoadedComponent: boolean;
    isWatchReady: boolean;
    isListenReady: boolean;
    needsRerender: boolean;
  };
  instanceValues: Map<string, any>;
  ancestorComponent: HTMLStencilElement;
  hostElement: HTMLStencilElement;
  lazyInstance: ComponentInterface;
  vnode: VNode;
  modeName: string;
  onReadyPromise: Promise<any>;
  onReadyResolve: (elm: any) => void;
  onInstancePromise: Promise<any>;
  onInstanceResolve: (elm: any) => void;
  onRenderResolve: () => void;
  queuedListeners: [string, any][];
  rmListeners: (() => void)[];
  "s-id": string;
  "s-cr": RenderNode;
  "s-lr": boolean;
  "s-p": Promise<void>[];
  "s-rc": (() => void)[];
  "s-sc": string;
}
